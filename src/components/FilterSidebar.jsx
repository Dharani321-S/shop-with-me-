import React from "react";

const RATINGS = [4, 3, 2, 1];

const FilterSidebar = ({
  categories,
  priceRange,
  filters,
  onCategoryToggle,
  onPriceChange,
  onRatingChange,
  onClear,
}) => {
  return (
    <aside className="w-full md:w-64 shrink-0 bg-white rounded-sm shadow-sm p-4 h-fit sticky top-20">
      <div className="flex items-center justify-between border-b pb-2 mb-3">
        <h2 className="font-semibold text-gray-800">Filters</h2>
        <button
          onClick={onClear}
          className="text-xs text-brand-blue font-medium hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="border-b pb-3 mb-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => onCategoryToggle(cat)}
                className="accent-brand-blue"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="border-b pb-3 mb-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Price</h3>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="number"
            placeholder={`Min`}
            value={filters.minPrice}
            onChange={(e) => onPriceChange("minPrice", e.target.value)}
            className="w-full border rounded px-2 py-1 text-gray-700"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            placeholder={priceRange?.maxPrice ? `${priceRange.maxPrice}` : "Max"}
            value={filters.maxPrice}
            onChange={(e) => onPriceChange("maxPrice", e.target.value)}
            className="w-full border rounded px-2 py-1 text-gray-700"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Customer Ratings</h3>
        <div className="space-y-1.5">
          {RATINGS.map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === String(r)}
                onChange={() => onRatingChange(String(r))}
                className="accent-brand-blue"
              />
              {r}★ & above
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
