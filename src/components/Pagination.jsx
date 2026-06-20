import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    Math.max(0, page - 3) + 5
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-6 mb-10">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded border bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        <ChevronLeft size={16} /> Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-8 h-8 text-sm rounded ${
            p === page
              ? "bg-brand-blue text-white font-semibold"
              : "bg-white border hover:bg-gray-50 text-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded border bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
      >
        Next <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
