import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Filter.css'; 

const Filter = ({ subcategoryContent, subheadingContent }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubheading, setSelectedSubheading] = useState(null);
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSubcategoryClick = (index) => {
    setSelectedSubcategory(selectedSubcategory === index ? null : index);
    setSelectedSubheading(null); // Unselect the subheading when a subcategory is clicked
  };

  const handleSubheadingClick = (index) => {
    setSelectedSubheading(selectedSubheading === index ? null : index);
    setSelectedSubcategory(null); // Unselect the subcategory when a subheading is clicked
  };

  const handleMainCategoryClick = () => {
    setSelectedSubcategory(null);
    setSelectedSubheading(null);
  };
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
    if (!isMobileView) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);
    return (
      <div className={`filter-container ${isFilterOpen ? 'open' : ''}`}>
      {isMobileView && (
        <button
          className={`filter-toggle-button ${isFilterOpen ? 'active' : ''}`}
          onClick={handleFilterToggle}
        >
          FILTER
        </button>
      )}

<div className={`filter-content ${isFilterOpen && isMobileView ? 'visible' : ''}`}>
        <h2
          className={`filter-heading ${selectedSubcategory !== null || selectedSubheading !== null ? 'active' : ''}`}
          onClick={handleMainCategoryClick}
        >
          FILTER
        </h2>
        <hr className="filter-line" />

        <h3 className={`filter-subcategory ${selectedSubcategory !== null ? 'active' : ''}`}>
          {subcategoryContent}
        </h3>
        {subheadingContent.map((subheading, index) => (
          <div
            className={`filter-subheading ${selectedSubheading === index ? 'active' : ''}`}
            onClick={() => handleSubheadingClick(index)}
            key={index}
          >
            {subheading}
          </div>
        ))}
        <hr className="filter-line" />

        <div className="filter-size-section">
          <h2 className="filter-size-heading">Volume</h2>
          <label className="filter-size-checkbox">
            <input type="checkbox" />
            <span className="filter-size-label">500 ml</span>
          </label>
          <label className="filter-size-checkbox">
            <input type="checkbox" />
            <span className="filter-size-label">875 ml</span>
          </label>
          <label className="filter-size-checkbox">
            <input type="checkbox" />
            <span className="filter-size-label">1000 ml</span>
          </label>
          <label className="filter-size-checkbox">
            <input type="checkbox" />
            <span className="filter-size-label">2.5 l</span>
          </label>
          <label className="filter-size-checkbox">
            <input type="checkbox" />
            <span className="filter-size-label">5 l</span>
          </label>
        </div>

        <hr className="filter-line" />

        <div className="filter-price-section">
          <h2 className="filter-price-heading">Price</h2>
          <label className="filter-price-checkbox">
          <input type="checkbox" />
            <span className="filter-price-label">20$</span>
          </label>
          <label className="filter-price-checkbox">
          <input type="checkbox" />
            <span className="filter-price-label">30$</span>
          </label>
          <label className="filter-price-checkbox">
          <input type="checkbox" />
            <span className="filter-price-label">40$</span>
          </label>
          <label className="filter-price-checkbox">
          <input type="checkbox" />
            <span className="filter-price-label">50$</span>
          </label>
        </div>
      </div>
      <hr className="filter-line" />
    </div>
  );
};

export default Filter;
