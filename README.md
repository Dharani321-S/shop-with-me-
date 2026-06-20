# ShopKart React (Frontend-only)

A Flipkart-style storefront UI — product listing, search, category/price/rating filters, sorting, and pagination — built with **React + Vite + Tailwind CSS**.

No backend, no database, no `.env` setup. All 38 sample products live in `src/data/products.js`.

## Run it

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in Chrome.

## Push to GitHub

```bash
git init
git add .
git commit -m "ShopKart React project"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

(`node_modules` and `dist` are already excluded via `.gitignore`.)

## Edit the products

Open `src/data/products.js` — it's a plain array, add/remove/edit entries directly. No restart needed (Vite hot-reloads).

## Project structure

```
src/
├── api/productApi.js       → search/filter/sort/pagination logic (runs locally)
├── data/products.js        → sample product data
├── components/             → Navbar, FilterSidebar, ProductCard, ProductGrid, Pagination
├── App.jsx                 → main page
└── main.jsx                → entry point
```

## Tech Stack

React 18 · Vite · Tailwind CSS · lucide-react (icons)
