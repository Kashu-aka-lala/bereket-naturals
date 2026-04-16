"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import { allProducts, categories } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(
    () =>
      allProducts.filter(
        (p) =>
          (activeCategory === "All" ||
            p.category.toLowerCase() === activeCategory.toLowerCase()) &&
          (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    [activeCategory, searchQuery]
  );

  return (
    <main className="pb-24">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.25em] text-secondary/80 text-sm font-semibold mb-3"
          >
            Bereket Foods Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Seven iconic brands. Dozens of products. One unwavering commitment
            to quality that Pakistan families trust every day.
          </motion.p>
        </div>
      </section>

      <section className="pt-12 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* ── Controls ──────────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search products or brands…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-shadow bg-gray-50 text-sm"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* ── Brand count ───────────────────────────────────────────── */}
          <p className="text-sm text-gray-400 mb-8 text-center">
            Showing{" "}
            <span className="font-semibold text-primary">{filtered.length}</span>{" "}
            product{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* ── Grid ──────────────────────────────────────────────────── */}
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <Link href={`/products/${product.id}`} className="flex flex-col flex-grow">
                    {/* Image */}
                    <div
                      className="h-80 flex items-center justify-center p-1 relative overflow-hidden"
                      style={{ backgroundColor: `${product.accentColor}10` }}
                    >
                      {product.badgeLabel && (
                        <span
                          className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10"
                          style={{ backgroundColor: product.accentColor }}
                        >
                          {product.badgeLabel}
                        </span>
                      )}
                      <Image
                        src={product.heroImg}
                        alt={product.name}
                        width={240}
                        height={200}
                        className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                        priority={i < 4}
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5 flex flex-col flex-grow border-t border-gray-50">
                      <span
                        className="text-xs uppercase tracking-wider font-bold mb-1"
                        style={{ color: product.accentColor }}
                      >
                        {product.brand}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed flex-grow">
                        {product.tagline}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs text-gray-400">
                        <span>{product.variants.length} variant{product.variants.length !== 1 ? "s" : ""}</span>
                        <span>·</span>
                        <span className="capitalize">{product.category}</span>
                      </div>
                    </div>
                  </Link>

                  {/* CTA */}
                  <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-2xl text-gray-300 font-light">No products found.</p>
              <p className="text-sm text-gray-400 mt-2">
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
