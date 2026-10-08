import React, { useState } from 'react';
import { RouterProvider, useRoute, matchRoute } from './router';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { SlingTop } from './components/SlingTop/SlingTop';
import { SocialDock } from './components/SocialDock/SocialDock';
import { SideTab } from './components/SideTab/SideTab';
import { Loader } from './components/Loader/Loader';

// Pages
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { ResumePage } from './pages/Resume';
import { NotFoundPage } from './pages/NotFound';

import './styles/base.css';
import './App.css';

function MainRouter() {
  const { pathname, isTransitioning } = useRoute();

  // Route matching
  let pageComponent = null;

  const matchHome = matchRoute('/', pathname);
  const matchProjects = matchRoute('/projects', pathname);
  const matchProjectDetail = matchRoute('/projects/:slug', pathname);
  const matchResumeRoot = matchRoute('/resume', pathname);
  const matchResumeTrack = matchRoute('/resume/:track', pathname);

  if (matchHome.matched) {
    pageComponent = <HomePage />;
  } else if (matchProjects.matched) {
    pageComponent = <ProjectsPage />;
  } else if (matchProjectDetail.matched) {
    pageComponent = <ProjectDetailPage slug={matchProjectDetail.params.slug} />;
  } else if (matchResumeTrack.matched) {
    pageComponent = <ResumePage track={matchResumeTrack.params.track} />;
  } else if (matchResumeRoot.matched) {
    pageComponent = <ResumePage track="developer" />;
  } else {
    pageComponent = <NotFoundPage />;
  }

  return (
    <div className="app-root">
      <Nav />
      <SideTab />
      <SocialDock />
      <SlingTop />

      <main className={`page-transition-container ${isTransitioning ? 'page-transitioning' : 'page-ready'}`}>
        {pageComponent}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    return !!sessionStorage.getItem('portfolio_intro_loaded');
  });

  return (
    <RouterProvider>
      {!introFinished && (
        <Loader onComplete={() => setIntroFinished(true)} />
      )}
      <MainRouter />
    </RouterProvider>
  );
}
