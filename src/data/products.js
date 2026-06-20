// Local product data — no backend/database needed.
// Edit this list directly to add/remove/change products.

const img = (label, bg = "2874f0", fg = "ffffff") =>
  `https://placehold.co/500x500/${bg}/${fg}?text=${encodeURIComponent(label)}&font=roboto`;

const calcDiscount = (mrp, price) => Math.round(((mrp - price) / mrp) * 100);

const colorByCategory = {
  Mobiles: "2874f0",
  Laptops: "1f2937",
  Electronics: "0b5394",
  Fashion: "c2185b",
  Footwear: "5d4037",
  "Home & Furniture": "2e7d32",
  Books: "6a1b9a",
  Beauty: "ad1457",
};

const rawProducts = [
  // Mobiles
  { name: "Galaxy Note X1 (8GB RAM, 128GB)", brand: "Samtech", category: "Mobiles", mrp: 24999, price: 19999, rating: 4.3, ratingCount: 18234 },
  { name: "Pixel Lite 5G (6GB RAM, 128GB)", brand: "Voltek", category: "Mobiles", mrp: 21999, price: 17999, rating: 4.1, ratingCount: 9821 },
  { name: "Redline 12 Pro (12GB RAM, 256GB)", brand: "Reddo", category: "Mobiles", mrp: 32999, price: 27999, rating: 4.4, ratingCount: 14502 },
  { name: "iSmart 14 (128GB)", brand: "Appello", category: "Mobiles", mrp: 69999, price: 64999, rating: 4.6, ratingCount: 22310 },
  { name: "OnePulse 9 (8GB RAM, 128GB)", brand: "Pulse", category: "Mobiles", mrp: 27999, price: 23999, rating: 4.2, ratingCount: 7654 },
  { name: "Moto Edge Lite (6GB RAM, 64GB)", brand: "Motora", category: "Mobiles", mrp: 14999, price: 11999, rating: 4.0, ratingCount: 5432 },

  // Laptops
  { name: "AeroBook 14 (i5, 16GB, 512GB SSD)", brand: "Compaxe", category: "Laptops", mrp: 64999, price: 54999, rating: 4.3, ratingCount: 3201 },
  { name: "GameForce G15 (Ryzen 7, RTX, 16GB)", brand: "Vertex", category: "Laptops", mrp: 89999, price: 79999, rating: 4.5, ratingCount: 2104 },
  { name: "UltraSlim X (i7, 16GB, 1TB SSD)", brand: "Compaxe", category: "Laptops", mrp: 99999, price: 84999, rating: 4.4, ratingCount: 1876 },
  { name: "BudgetBook 11 (Celeron, 4GB, 256GB)", brand: "Tinwell", category: "Laptops", mrp: 24999, price: 19999, rating: 3.9, ratingCount: 4521 },
  { name: "MacAir-ish 13 (M-series, 8GB, 256GB)", brand: "Orchid", category: "Laptops", mrp: 114999, price: 104999, rating: 4.7, ratingCount: 6210 },

  // Electronics / Audio
  { name: "BeatPods Pro (ANC Wireless Earbuds)", brand: "Boomex", category: "Electronics", mrp: 6999, price: 2999, rating: 4.2, ratingCount: 31022 },
  { name: "ThunderBass Party Speaker 50W", brand: "Boomex", category: "Electronics", mrp: 8999, price: 5499, rating: 4.1, ratingCount: 9087 },
  { name: "SmartWatch Pulse 2 (AMOLED)", brand: "Voltek", category: "Electronics", mrp: 5999, price: 2499, rating: 4.0, ratingCount: 15643 },
  { name: "4K SmartView 43-inch TV", brand: "Visionex", category: "Electronics", mrp: 32999, price: 23999, rating: 4.3, ratingCount: 7732 },
  { name: "PowerBank 20000mAh Fast Charge", brand: "Chargo", category: "Electronics", mrp: 2499, price: 1299, rating: 4.2, ratingCount: 22011 },
  { name: "Noise-Cancel Headphones Air", brand: "Boomex", category: "Electronics", mrp: 4999, price: 2799, rating: 4.1, ratingCount: 8845 },

  // Fashion - Men
  { name: "Men's Slim Fit Casual Shirt", brand: "Urban Thread", category: "Fashion", mrp: 1499, price: 599, rating: 3.9, ratingCount: 4521 },
  { name: "Men's Running Sneakers", brand: "Sprintly", category: "Fashion", mrp: 2999, price: 1399, rating: 4.1, ratingCount: 8732 },
  { name: "Men's Denim Jacket", brand: "Urban Thread", category: "Fashion", mrp: 2499, price: 1199, rating: 4.0, ratingCount: 2103 },

  // Fashion - Women
  { name: "Women's Floral Maxi Dress", brand: "Bellisa", category: "Fashion", mrp: 1999, price: 899, rating: 4.2, ratingCount: 6543 },
  { name: "Women's Ethnic Kurta Set", brand: "Saree Hub", category: "Fashion", mrp: 2299, price: 1099, rating: 4.3, ratingCount: 9981 },
  { name: "Women's Casual Sling Bag", brand: "Bellisa", category: "Fashion", mrp: 1599, price: 749, rating: 4.0, ratingCount: 3210 },

  // Footwear
  { name: "Unisex Sports Sandals", brand: "Sprintly", category: "Footwear", mrp: 999, price: 449, rating: 3.8, ratingCount: 5102 },
  { name: "Men's Formal Leather Shoes", brand: "Walkrite", category: "Footwear", mrp: 2999, price: 1599, rating: 4.2, ratingCount: 2987 },
  { name: "Women's Heeled Sandals", brand: "Bellisa", category: "Footwear", mrp: 1799, price: 899, rating: 4.0, ratingCount: 3456 },

  // Home & Furniture
  { name: "3-Seater Fabric Sofa", brand: "HomeNest", category: "Home & Furniture", mrp: 24999, price: 17999, rating: 4.1, ratingCount: 1432 },
  { name: "Wooden Study Table", brand: "HomeNest", category: "Home & Furniture", mrp: 5999, price: 3799, rating: 4.0, ratingCount: 2210 },
  { name: "Memory Foam Pillow (Set of 2)", brand: "DreamSoft", category: "Home & Furniture", mrp: 1299, price: 699, rating: 4.3, ratingCount: 7821 },
  { name: "Non-Stick Cookware Set (5 pcs)", brand: "KitchPro", category: "Home & Furniture", mrp: 3499, price: 1999, rating: 4.2, ratingCount: 6612 },

  // Books
  { name: "Atomic Habits of Coding", brand: "PageTurn", category: "Books", mrp: 499, price: 299, rating: 4.6, ratingCount: 12043 },
  { name: "The Data Science Handbook", brand: "PageTurn", category: "Books", mrp: 899, price: 549, rating: 4.4, ratingCount: 3987 },
  { name: "Mystery at Midnight (Novel)", brand: "InkWell", category: "Books", mrp: 399, price: 219, rating: 4.1, ratingCount: 2654 },

  // Beauty
  { name: "Vitamin C Face Serum 30ml", brand: "GlowLab", category: "Beauty", mrp: 899, price: 449, rating: 4.3, ratingCount: 9871 },
  { name: "Matte Lipstick Combo (Set of 3)", brand: "GlowLab", category: "Beauty", mrp: 999, price: 549, rating: 4.1, ratingCount: 5432 },
  { name: "Herbal Shampoo 400ml", brand: "PureRoots", category: "Beauty", mrp: 499, price: 299, rating: 4.0, ratingCount: 6789 },
];

export const products = rawProducts.map((p, i) => ({
  ...p,
  _id: String(i + 1).padStart(4, "0"),
  discountPercent: calcDiscount(p.mrp, p.price),
  image: img(p.name.split(" ").slice(0, 2).join(" "), colorByCategory[p.category] || "2874f0"),
  description: `${p.name} by ${p.brand}. A great pick in the ${p.category} category, loved by thousands of customers.`,
  stock: 10 + ((i * 7) % 80),
}));

export default products;
