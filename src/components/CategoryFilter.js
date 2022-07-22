import React from "react";

function CategoryFilter({ categories, setCategoryFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          key={category}
          className="category-btn"
          onClick={(e) => {
            e.target.classList.add("selected");
            setCategoryFilter(category);
          }}
          onBlur={(e) => {
            e.target.classList.remove("selected");
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
