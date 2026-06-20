import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col cursor-pointer">
      <div className="h-44 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="text-sm text-gray-800 font-medium line-clamp-2 mb-1">
        {product.name}
      </h3>
      <p className="text-xs text-gray-500 mb-1">{product.brand}</p>

      <div className="flex items-center gap-1 mb-1">
        <span className="bg-brand-green text-white text-[11px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-0.5">
          {product.rating} <Star size={10} fill="white" />
        </span>
        <span className="text-xs text-gray-500">({product.ratingCount.toLocaleString()})</span>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-base font-bold text-gray-900">
          ₹{product.price.toLocaleString()}
        </span>
        <span className="text-xs text-gray-400 line-through">
          ₹{product.mrp.toLocaleString()}
        </span>
        <span className="text-xs text-brand-green font-semibold">
          {product.discountPercent}% off
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
