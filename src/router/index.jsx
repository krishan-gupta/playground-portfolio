import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const RouterContext = createContext(null);

function parsePath(fullUrl = window.location.pathname + window.location.search) {
  const [pathname, search] = fullUrl.split('?');
  const query = {};
  if (search) {
    const searchParams = new URLSearchParams(search);
    for (const [key, value] of searchParams.entries()) {
      query[key] = value;
    }
  }
  return { pathname: pathname || '/', search: search ? `?${search}` : '', query };
}

export function RouterProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(() => parsePath());
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((to, { replace = false, preserveScroll = false } = {}) => {
    if (!to) return;
    
    // External link
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    // Anchor hash link on same page
    if (to.startsWith('#')) {
      const el = document.getElementById(to.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setIsTransitioning(true);

    setTimeout(() => {
      if (replace) {
        window.history.replaceState({}, '', to);
      } else {
        window.history.pushState({}, '', to);
      }

      setCurrentLocation(parsePath(to));
      
      if (!preserveScroll) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 120);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      setCurrentLocation(parsePath());
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(() => ({
    pathname: currentLocation.pathname,
    search: currentLocation.search,
    query: currentLocation.query,
    navigate,
    isTransitioning
  }), [currentLocation, navigate, isTransitioning]);

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRoute() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouterProvider');
  }
  return context;
}

export function Link({ to, children, className = '', activeClassName = '', onClick, replace = false, ...props }) {
  const { pathname, navigate } = useRoute();

  const isInternal = to && !to.startsWith('http') && !to.startsWith('//') && !to.startsWith('mailto:');
  const isActive = isInternal && (to === '/' ? pathname === '/' : pathname.startsWith(to));

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    // Normal link behavior on special modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    if (isInternal) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  const combinedClass = [
    className,
    isActive && activeClassName ? activeClassName : ''
  ].filter(Boolean).join(' ');

  return (
    <a href={to} onClick={handleClick} className={combinedClass} {...props}>
      {children}
    </a>
  );
}

// Simple route pattern matcher supporting /path/:param
export function matchRoute(pattern, currentPath) {
  if (pattern === currentPath) return { matched: true, params: {} };
  if (pattern === '*') return { matched: true, params: {} };

  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = currentPath.split('/').filter(Boolean);

  if (patternParts.length !== pathParts.length) return { matched: false, params: {} };

  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];

    if (patternPart.startsWith(':')) {
      const paramName = patternPart.slice(1);
      params[paramName] = decodeURIComponent(pathPart);
    } else if (patternPart !== pathPart) {
      return { matched: false, params: {} };
    }
  }

  return { matched: true, params };
}
