import React, { useState } from "react";
import { Search, ShoppingCart, MapPin } from "lucide-react";

const Navbar = ({ onSearch, searchTerm }) => {
  const [input, setInput] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <header className="sticky top-0 z-20 bg-brand-blue shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col leading-none shrink-0">
          <span className="text-white text-2xl font-bold italic tracking-tight">
            Shop<span className="text-brand-yellow">Kart</span>
          </span>
          <span className="text-[10px] text-white/80 italic flex items-center gap-0.5">
            Explore <span className="text-brand-yellow font-semibold">Plus</span>
          </span>
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for products, brands and more"
            className="w-full rounded-sm py-2 pl-4 pr-10 text-sm text-gray-800 outline-none bg-white"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-0 top-0 h-full px-3 flex items-center text-brand-blue"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-6 text-white shrink-0">
          <div className="flex items-center gap-1 text-sm">
            <MapPin size={16} />
            <span>Chennai</span>
          </div>
          <button className="bg-white text-brand-blue text-sm font-semibold px-8 py-1.5 rounded-sm hover:bg-gray-50">
            Login
          </button>
          <button className="flex items-center gap-2 text-sm font-medium">
            <ShoppingCart size={20} />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
