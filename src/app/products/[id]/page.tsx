"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CheckCircle2, Package } from "lucide-react";
import { getProductById, allProducts } from "@/data/products";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}

// ─── Inner Client Component (keeps hooks clean) ───────────────────────────────
function ProductDetail({ product }: { product: ReturnType<typeof getProductById> & object }) {
  const [activeVariant, setActiveVariant] = useState(0);

  const related = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-primary font-medium">{product.name}</span>
        </div>
      </div>

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left – Image Panel */}
          <div>
            {/* Main Image */}
            <motion.div
              key={activeVariant}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-[3rem] overflow-hidden flex items-center justify-center p-4 h-[500px] shadow-inner"
              style={{ backgroundColor: `${product.accentColor}14` }}
            >
              <Image
                src={product.variants[activeVariant].img}
                alt={product.variants[activeVariant].name}
                width={420}
                height={380}
                className="object-contain w-full h-full drop-shadow-xl"
                unoptimized
              />
            </motion.div>

            {/* Variant Thumbnails grouped by type */}
            {product.variants.length > 1 && (
              <div className="mt-8 space-y-6">
                {[
                   { label: "Bottles", filter: "Bottle" },
                   { label: "Jars", filter: "Jar" },
                   { label: "Boxes", filter: "Box" },
                   { label: "Other", filter: "" }
                ].map((type, groupIdx) => {
                  // Filter variants for this group
                  // For "Other", we take anything not caught by previous filters
                  const groupVariants = product.variants.map((v, i) => ({ ...v, originalIndex: i }))
                    .filter(v => {
                      if (type.filter === "") {
                        return !v.name.includes("Bottle") && !v.name.includes("Jar") && !v.name.includes("Box");
                      }
                      return v.name.includes(type.filter);
                    });

                  if (groupVariants.length === 0) return null;

                  return (
                    <div key={groupIdx} className="flex flex-col items-center">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {groupVariants.map((v) => (
                          <button
                            key={v.originalIndex}
                            onClick={() => setActiveVariant(v.originalIndex)}
                            className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 w-20 h-20 flex items-center justify-center p-2 group ${
                              activeVariant === v.originalIndex
                                ? "border-primary shadow-xl scale-110 z-10"
                                : "border-gray-200 hover:border-gray-300 hover:scale-105"
                            }`}
                            style={
                              activeVariant === v.originalIndex
                                ? { backgroundColor: `${product.accentColor}18` }
                                : { backgroundColor: "#fff" }
                            }
                            title={v.name}
                          >
                            <Image
                              src={v.img}
                              alt={v.name}
                              width={64}
                              height={64}
                              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                              unoptimized
                            />
                            {activeVariant === v.originalIndex && (
                              <motion.div 
                                layoutId="activeVariant"
                                className="absolute inset-0 border-2 border-primary rounded-2xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right – Info Panel */}
          <div className="lg:pt-4">
            <div className="flex flex-col items-start gap-4 mb-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Our Brands
              </Link>

              <span
                className="inline-block text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full text-white shadow-sm"
                style={{ backgroundColor: product.accentColor }}
              >
                {product.brand}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              {product.name}
            </h1>
            <p
              className="text-lg font-medium mb-6 italic"
              style={{ color: product.accentColor }}
            >
              {product.tagline}
            </p>

            {/* Active Variant Badge */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm mb-6 w-fit">
              <Package className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold text-gray-700">
                {product.variants[activeVariant].name}
              </span>
              {product.variants[activeVariant].weight && (
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {product.variants[activeVariant].weight}
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
              <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: product.accentColor }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* All Variants List */}
            <div>
              <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-3">
                Available Variants
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVariant(i)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                      activeVariant === i
                        ? "text-white border-transparent"
                        : "text-gray-600 border-gray-200 bg-white hover:border-gray-400"
                    }`}
                    style={
                      activeVariant === i
                        ? { backgroundColor: product.accentColor, borderColor: product.accentColor }
                        : {}
                    }
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ───────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 pt-8">
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              More in{" "}
              <span className="capitalize" style={{ color: product.accentColor }}>
                {product.category}
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/products/${rp.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="h-48 flex items-center justify-center p-2"
                    style={{ backgroundColor: `${rp.accentColor}10` }}
                  >
                    <Image
                      src={rp.heroImg}
                      alt={rp.name}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: rp.accentColor }}
                    >
                      {rp.brand}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                      {rp.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
