import React from 'react';
import { HorizonBloom } from '../../components/HorizonBloom/HorizonBloom';
import { TechText } from '../../components/TechText/TechText';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { useFilters } from '../../hooks/useFilters';
import './Projects.css';

export function ProjectsPage() {
  const {
    category,
    searchQuery,
    sortBy,
    viewMode,
    filteredCount,
    displayedProjects,
    hasMore,
    handleCategoryChange,
    handleSearchChange,
    handleSortChange,
    handleViewModeChange,
    clearFilters,
    loadMore
  } = useFilters(projects);

  return (
    <div className="projects-page-wrapper">
      {/* Header with calmer compact horizon bloom */}
      <section className="projects-hero">
        <HorizonBloom
          compact={true}
          interactive={false}
          intro={false}
          sunrise={0.7}
          flare={0.4}
          stars={0.3}
          atmosphere={0.6}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">ARCHIVE // INDEX</span>
          <h1 className="projects-title">
            <TechText text="Projects" />
            <span className="text-gradient"> Library</span>
          </h1>
          <p className="projects-subtitle">
            Exploring practical web platforms, embedded IoT prototypes, on-device mobile AI concepts, and semantic search engines.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="container">
        {/* Filter Bar */}
        <FilterBar
          category={category}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          totalResults={filteredCount}
        />

        {/* Projects Cards List or Grid */}
        {displayedProjects.length > 0 ? (
          <div className={viewMode === 'list' ? 'projects-list' : 'projects-grid'}>
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <h3 className="empty-title">No projects match your filter</h3>
            <p className="empty-desc">
              Try searching for "react", "esp32", "claude", or selecting a different category filter.
            </p>
            <button className="btn btn-secondary btn-sm" onClick={clearFilters}>
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More Pagination */}
        {hasMore && (
          <div className="load-more-wrapper">
            <button className="btn btn-primary" onClick={loadMore}>
              <span>Load More Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
