"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Total 49 images: 20 Brand Ambassadors + 8 Internship + 21 Product Testing
const allImages = [
  /* Brand Ambassadors (0-19) */
  "/assets/images/media-gallery/brand-ambassadors/361017.JPEG","/assets/images/media-gallery/brand-ambassadors/361033.JPEG","/assets/images/media-gallery/brand-ambassadors/363470.JPEG","/assets/images/media-gallery/brand-ambassadors/363497.JPEG","/assets/images/media-gallery/brand-ambassadors/365249.JPEG","/assets/images/media-gallery/brand-ambassadors/366384.JPEG","/assets/images/media-gallery/brand-ambassadors/366468.JPEG","/assets/images/media-gallery/brand-ambassadors/367106.JPEG","/assets/images/media-gallery/brand-ambassadors/367421.JPEG","/assets/images/media-gallery/brand-ambassadors/404636 2.JPEG","/assets/images/media-gallery/brand-ambassadors/405374 2.JPEG","/assets/images/media-gallery/brand-ambassadors/405461 2.JPEG","/assets/images/media-gallery/brand-ambassadors/407641.JPEG","/assets/images/media-gallery/brand-ambassadors/408644.JPEG","/assets/images/media-gallery/brand-ambassadors/408795.JPEG","/assets/images/media-gallery/brand-ambassadors/416074.JPEG","/assets/images/media-gallery/brand-ambassadors/416198.JPEG","/assets/images/media-gallery/brand-ambassadors/416225.JPEG","/assets/images/media-gallery/brand-ambassadors/416248.JPEG","/assets/images/media-gallery/brand-ambassadors/418435.JPEG",
  /* Internship (20-27) */
  "/assets/images/media-gallery/internship/intern-1.jpg","/assets/images/media-gallery/internship/intern-2.jpg","/assets/images/media-gallery/internship/intern-3.jpg","/assets/images/media-gallery/internship/intern-4.jpg","/assets/images/media-gallery/internship/intern-5.jpg","/assets/images/media-gallery/internship/intern-6.jpg","/assets/images/media-gallery/internship/intern-7.jpg","/assets/images/media-gallery/internship/intern-8.jpg",
  /* Product Testing (28-48) */
  "/assets/images/media-gallery/product-testing/418554.JPEG","/assets/images/media-gallery/product-testing/419200.JPEG","/assets/images/media-gallery/product-testing/419217.JPEG","/assets/images/media-gallery/product-testing/419237.JPEG","/assets/images/media-gallery/product-testing/419444.JPEG","/assets/images/media-gallery/product-testing/419462.JPEG","/assets/images/media-gallery/product-testing/420659.JPEG","/assets/images/media-gallery/product-testing/420664.JPEG","/assets/images/media-gallery/product-testing/420881.JPEG","/assets/images/media-gallery/product-testing/421412.JPEG","/assets/images/media-gallery/product-testing/422602.JPEG","/assets/images/media-gallery/product-testing/422620.JPEG","/assets/images/media-gallery/product-testing/422704.JPEG","/assets/images/media-gallery/product-testing/422746.JPEG","/assets/images/media-gallery/product-testing/422750.JPEG","/assets/images/media-gallery/product-testing/422861.JPEG","/assets/images/media-gallery/product-testing/423556.JPEG","/assets/images/media-gallery/product-testing/423767.JPEG","/assets/images/media-gallery/product-testing/423770.JPEG","/assets/images/media-gallery/product-testing/423776.JPEG","/assets/images/media-gallery/product-testing/424794.JPEG"
];

export default function MediaPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("ambassadors");

  const tabs = [
    { id: "ambassadors", label: "Brand Ambassadors", images: allImages.slice(0, 20) },
    { id: "internship", label: "Internship Programs", images: allImages.slice(20, 28) },
    { id: "testing", label: "Product Testing", images: allImages.slice(28, 49) },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <section className="bg-foreground text-white pt-32 pb-20 text-center relative">
         <div className="absolute inset-0 bg-primary/20 z-0"></div>
         <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Media Gallery</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore moments from our brand ambassadors, internships, and product testing.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-white text-gray-500 hover:text-primary hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            key={activeTab}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            }}
          >
            {tabs.find(t => t.id === activeTab)?.images.map((src, i) => (
              <motion.div 
                key={src} 
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-200 shadow-sm border border-gray-100 group"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                onClick={() => setSelectedImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-white font-bold tracking-widest uppercase text-xs border-2 border-white/80 px-4 py-2 rounded-full mb-2">View</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-50"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Selected Media"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl cursor-default object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
