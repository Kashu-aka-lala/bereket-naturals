"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

const allProducts = [
  { id: "kuvvet-cereals", name: "Kuvvet Cereals", category: "cereals", brand: "Kuvvet", desc: "Precision-fortified cereals engineered for elite nutrition.", img: "/assets/images/kuvvet_porridge_group_new.png" },
  { id: "kuvvet-porridge", name: "Kuvvet Porridge", category: "porridges", brand: "Kuvvet", desc: "Traditional goodness of whole grains.", img: "/assets/images/porridge family.jpeg" },
  { id: "major-grains", name: "Major Grains", category: "cereals", brand: "Major Grains", desc: "Kids' favorite nutritious breakfast.", img: "/assets/images/major_grains_group_new.jpg" },
  { id: "jhat-hazam", name: "Jhat Hazam", category: "digestives", brand: "Jhat Hazam", desc: "Instant digestion with Himalayan salt.", img: "/assets/images/jhat_hazam_group_new.png" },
  { id: "jarfull", name: "Jarfull Sauces", category: "sauces", brand: "Jarfull", desc: "Premium culinary sauces and chutneys.", img: "/assets/images/jarfull_group.png" },
  { id: "riverdale", name: "Riverdale Jams", category: "jams", brand: "Riverdale", desc: "Real fruit goodness in every spoonful.", img: "/assets/images/products/riverdale/riverdale_group_new.png" },
  { id: "niwala", name: "Niwala Rice", category: "grains", brand: "Niwala", desc: "Premium Basmati rice.", img: "/assets/images/niwala_group_new.png" },
  { id: "liffest", name: "Liffest Chocolates", category: "cereals", brand: "Liffest", desc: "Indulgent chocolate cereals.", img: "/assets/images/lifest_group_new.png" },
];

const categories = ["All", "Cereals", "Porridges", "Sauces", "Jams", "Grains", "Digestives"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(p => 
    (activeCategory === "All" || p.category.toLowerCase() === activeCategory.toLowerCase()) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-16 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Foods</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore our wide variety of premium food products, manufactured with the highest standards of quality.</p>
         </div>
      </section>

      <section className="pt-12 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat ? 'bg-secondary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Smart Search */}
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                placeholder="Search products or brands..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow bg-gray-50"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
              >
                <Link href={`/products/${product.id}`} className="block flex-grow">
                  <div className="h-48 bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center border-t border-gray-50 flex flex-col items-center">
                    <span className="text-secondary text-xs uppercase tracking-wider font-bold mb-2 block">{product.brand}</span>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.desc}</p>
                  </div>
                </Link>
                <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                  <Link href={`/products/${product.id}`} className="text-primary font-semibold text-sm hover:underline flex items-center justify-center gap-1">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No products found matching your search.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
