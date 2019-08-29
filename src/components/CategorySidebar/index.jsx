import React from 'react';

const CategorySidebar = ({
  categories, selectCategory, selectedCategory
}) => (
    <div className="sidebar">
      <div className="title">
        <h2>Categories</h2>
      </div>
      <ul className="categories">
        {
          categories.map((category, index) => (
            <li
              key={category.id}
              className={`
              ${selectedCategory.name
                  === category.name
                  ? 'active'
                  : ''}
              `}
            >
              <button
                className="category-btn"
                onClick={() => selectCategory(index)}
              >
                {category.name}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );

export default CategorySidebar;
