import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { fetchProducts, fetchCategories } from "./api/productApi";

const DEFAULT_FILTERS = {
  category: [],
  minPrice: "",
  maxPrice: "",
  minRating: "",
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [meta, setMeta] = useState({ categories: [], priceRange: {} });

  // Load category/price metadata once
  useEffect(() => {
    fetchCategories()
      .then(setMeta)
      .catch(() => {
        /* sidebar metadata is non-critical; fail silently */
      });
  }, []);

  // Load products whenever search/filters/sort/page changes
  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts({
        q: searchTerm || undefined,
        category: filters.category.length ? filters.category.join(",") : undefined,
        minPrice: filters.minPrice || undefined,
        maxPrice: filters.maxPrice || undefined,
        minRating: filters.minRating || undefined,
        sort: sort || undefined,
        page,
        limit: 12,
      });
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setTotalResults(data.totalResults);
    } catch (err) {
      setError("Something went wrong while loading products. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filters, sort, page]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleCategoryToggle = (cat) => {
    setFilters((prev) => {
      const exists = prev.category.includes(cat);
      return {
        ...prev,
        category: exists
          ? prev.category.filter((c) => c !== cat)
          : [...prev.category, cat],
      };
    });
    setPage(1);
  };

  const handlePriceChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleRatingChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      minRating: prev.minRating === value ? "" : value,
    }));
    setPage(1);
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <Navbar onSearch={handleSearch} searchTerm={searchTerm} />

      <main className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4">
        <FilterSidebar
          categories={meta.categories}
          priceRange={meta.priceRange}
          filters={filters}
          onCategoryToggle={handleCategoryToggle}
          onPriceChange={handlePriceChange}
          onRatingChange={handleRatingChange}
          onClear={handleClearFilters}
        />

        <section className="flex-1">
          <div className="bg-white rounded-sm shadow-sm px-4 py-2.5 mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {loading ? "Searching..." : `Showing ${totalResults.toLocaleString()} results`}
              {searchTerm && !loading && (
                <>
                  {" "}for <span className="font-semibold text-gray-800">"{searchTerm}"</span>
                </>
              )}
            </p>

            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              className="text-sm border rounded px-2 py-1 text-gray-700 outline-none"
            >
              <option value="">Sort: Relevance</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="discount">Discount</option>
            </select>
          </div>

          <ProductGrid products={products} loading={loading} error={error} />
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </section>
      </main>
    </div>
  );
}

export default App;
