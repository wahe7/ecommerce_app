import React from "react";

const Filter = ({ category, minPrice, maxPrice, setCategory, setMinPrice, setMaxPrice, onApply }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={onApply}>Apply Filters</button>
    </div>
  );
};

export default Filter;
