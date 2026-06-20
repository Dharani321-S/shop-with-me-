import React from "react";
import ProductCard from "./ProductCard";
import { PackageSearch } from "lucide-react";

const SkeletonCard = () => (
  <div className="bg-white rounded-sm shadow-sm p-4 animate-pulse">
    <div className="h-44 bg-gray-200 rounded mb-3" />
    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-2/3" />
  </div>
);

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-sm p-10 text-center text-red-500 text-sm">
        {error}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="bg-white rounded-sm p-16 flex flex-col items-center gap-3 text-gray-500">
        <PackageSearch size={48} strokeWidth={1.2} />
        <p className="text-sm">No products match your search/filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
