import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRoute } from '../router';

export function useFilters(initialProjects) {
  const { query, navigate, pathname } = useRoute();

  const [category, setCategory] = useState(() => query.cat || 'all');
  const [searchQuery, setSearchQuery] = useState(() => query.q || '');
  const [sortBy, setSortBy] = useState(() => query.sort || 'newest');
  const [viewMode, setViewMode] = useState(() => query.view || 'grid'); // 'grid' | 'list'
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync state if URL query changes
  useEffect(() => {
    if (query.cat && query.cat !== category) setCategory(query.cat);
    if (query.q !== undefined && query.q !== searchQuery) setSearchQuery(query.q);
    if (query.sort && query.sort !== sortBy) setSortBy(query.sort);
    if (query.view && query.view !== viewMode) setViewMode(query.view);
  }, [query.cat, query.q, query.sort, query.view]);

  // Update URL query when filters change
  const updateUrl = useCallback((newCat, newQ, newSort, newView) => {
    if (pathname !== '/projects') return;
    const params = new URLSearchParams();
    if (newCat && newCat !== 'all') params.set('cat', newCat);
    if (newQ && newQ.trim()) params.set('q', newQ.trim());
    if (newSort && newSort !== 'newest') params.set('sort', newSort);
    if (newView && newView !== 'grid') params.set('view', newView);

    const qs = params.toString();
    const newUrl = qs ? `/projects?${qs}` : '/projects';
    navigate(newUrl, { replace: true, preserveScroll: true });
  }, [pathname, navigate]);

  const handleCategoryChange = useCallback((newCat) => {
    setCategory(newCat);
    setVisibleCount(12);
    updateUrl(newCat, searchQuery, sortBy, viewMode);
  }, [searchQuery, sortBy, viewMode, updateUrl]);

  const handleSearchChange = useCallback((newQ) => {
    setSearchQuery(newQ);
    setVisibleCount(12);
    updateUrl(category, newQ, sortBy, viewMode);
  }, [category, sortBy, viewMode, updateUrl]);

  const handleSortChange = useCallback((newSort) => {
    setSortBy(newSort);
    updateUrl(category, searchQuery, newSort, viewMode);
  }, [category, searchQuery, viewMode, updateUrl]);

  const handleViewModeChange = useCallback((newView) => {
    setViewMode(newView);
    updateUrl(category, searchQuery, sortBy, newView);
  }, [category, searchQuery, sortBy, updateUrl]);

  const clearFilters = useCallback(() => {
    setCategory('all');
    setSearchQuery('');
    setSortBy('newest');
    setVisibleCount(12);
    updateUrl('all', '', 'newest', viewMode);
  }, [viewMode, updateUrl]);

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...initialProjects];

    // Filter by Category
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const summaryMatch = p.summary.toLowerCase().includes(q);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(q));
        const roleMatch = p.role && p.role.toLowerCase().includes(q);
        return titleMatch || summaryMatch || tagMatch || roleMatch;
      });
    }

    // Sort
    if (sortBy === 'newest') {
      result.sort((a, b) => b.date.localeCompare(a.date));
    } else if (sortBy === 'featured') {
      result.sort((a, b) => {
        if (a.featured === b.featured) return b.date.localeCompare(a.date);
        return a.featured ? -1 : 1;
      });
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [initialProjects, category, searchQuery, sortBy]);

  const displayedProjects = useMemo(() => {
    return filteredAndSortedProjects.slice(0, visibleCount);
  }, [filteredAndSortedProjects, visibleCount]);

  const hasMore = visibleCount < filteredAndSortedProjects.length;

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + 12);
  }, []);

  return {
    category,
    searchQuery,
    sortBy,
    viewMode,
    filteredCount: filteredAndSortedProjects.length,
    displayedProjects,
    hasMore,
    handleCategoryChange,
    handleSearchChange,
    handleSortChange,
    handleViewModeChange,
    clearFilters,
    loadMore
  };
}
