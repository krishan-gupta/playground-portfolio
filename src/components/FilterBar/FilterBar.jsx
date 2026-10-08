import React from 'react';
import { projectCategories } from '../../data/projects';
import './FilterBar.css';

export function FilterBar({
  category,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalResults
}) {
  return (
    <div className="filter-bar-container">
      {/* Top row: Categories & Search */}
      <div className="filter-top-row">
        {/* Category Pills (horizontally scrollable on mobile) */}
        <div className="filter-categories" role="tablist" aria-label="Project categories">
          {projectCategories.map((cat) => {
            const isActive = category === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`filter-category-pill ${isActive ? 'filter-pill-active' : ''}`}
                onClick={() => onCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="filter-search-box">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="filter-search-input"
            placeholder="Search keywords, tech, topics..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Bottom meta row: Results count, Sort dropdown, and View Mode Toggle */}
      <div className="filter-bottom-row">
        <div className="filter-count">
          Showing <span className="highlight-count">{totalResults}</span> project{totalResults === 1 ? '' : 's'}
        </div>

        <div className="filter-controls">
          {/* Sort Selector */}
          <div className="filter-sort-wrapper">
            <label htmlFor="sort-select" className="sort-label">Sort:</label>
            <select
              id="sort-select"
              className="filter-sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="featured">Featured First</option>
              <option value="alphabetical">A — Z</option>
            </select>
          </div>

          {/* Grid vs List View Toggle */}
          <div className="view-toggle-group" role="radiogroup" aria-label="Layout view mode">
            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'view-toggle-active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid view"
              title="Grid View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'list' ? 'view-toggle-active' : ''}`}
              onClick={() => onViewModeChange('list')}
              aria-label="List view"
              title="List View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
