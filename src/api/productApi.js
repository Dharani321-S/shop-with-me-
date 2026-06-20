// Drop-in replacement for the backend API — does the same search/filter/sort/pagination
// logic, but entirely in the browser using the local products array.
import { products as ALL_PRODUCTS } from "../data/products";

// Mimic a tiny network delay so loading states still feel natural (optional, can set to 0)
const FAKE_DELAY_MS = 150;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (params = {}) => {
  await wait(FAKE_DELAY_MS);

  const {
    q,
    category,
    minPrice,
    maxPrice,
    minRating,
    sort,
    page = 1,
    limit = 12,
  } = params;

  let results = [...ALL_PRODUCTS];

  // Search by keyword (name, brand, category)
  if (q && q.trim()) {
    const term = q.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  // Filter by category (comma separated for multiple)
  if (category) {
    const categories = category.split(",").map((c) => c.trim());
    results = results.filter((p) => categories.includes(p.category));
  }

  // Filter by price range
  if (minPrice) results = results.filter((p) => p.price >= Number(minPrice));
  if (maxPrice) results = results.filter((p) => p.price <= Number(maxPrice));

  // Filter by minimum rating
  if (minRating) results = results.filter((p) => p.rating >= Number(minRating));

  // Sorting
  if (sort === "price_asc") results.sort((a, b) => a.price - b.price);
  else if (sort === "price_desc") results.sort((a, b) => b.price - a.price);
  else if (sort === "rating") results.sort((a, b) => b.rating - a.rating);
  else if (sort === "discount") results.sort((a, b) => b.discountPercent - a.discountPercent);

  // Pagination
  const pageNum = Math.max(Number(page), 1);
  const limitNum = Math.max(Number(limit), 1);
  const total = results.length;
  const start = (pageNum - 1) * limitNum;
  const paged = results.slice(start, start + limitNum);

  return {
    products: paged,
    page: pageNum,
    totalPages: Math.max(Math.ceil(total / limitNum), 1),
    totalResults: total,
  };
};

export const fetchProductById = async (id) => {
  await wait(FAKE_DELAY_MS);
  const product = ALL_PRODUCTS.find((p) => p._id === id);
  if (!product) throw new Error("Product not found");
  return product;
};

export const fetchCategories = async () => {
  await wait(FAKE_DELAY_MS);
  const categories = [...new Set(ALL_PRODUCTS.map((p) => p.category))];
  const prices = ALL_PRODUCTS.map((p) => p.price);
  return {
    categories,
    priceRange: {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    },
  };
};
