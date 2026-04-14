"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const images = ["/assets/images/media-gallery/brand-ambassadors/361017.JPEG","/assets/images/media-gallery/brand-ambassadors/361033.JPEG","/assets/images/media-gallery/brand-ambassadors/363470.JPEG","/assets/images/media-gallery/brand-ambassadors/363497.JPEG","/assets/images/media-gallery/brand-ambassadors/365249.JPEG","/assets/images/media-gallery/brand-ambassadors/366384.JPEG","/assets/images/media-gallery/brand-ambassadors/366468.JPEG","/assets/images/media-gallery/brand-ambassadors/367106.JPEG","/assets/images/media-gallery/brand-ambassadors/367421.JPEG","/assets/images/media-gallery/brand-ambassadors/404636 2.JPEG","/assets/images/media-gallery/brand-ambassadors/405374 2.JPEG","/assets/images/media-gallery/brand-ambassadors/405461 2.JPEG","/assets/images/media-gallery/brand-ambassadors/407641.JPEG","/assets/images/media-gallery/brand-ambassadors/408644.JPEG","/assets/images/media-gallery/brand-ambassadors/408795.JPEG","/assets/images/media-gallery/brand-ambassadors/416074.JPEG","/assets/images/media-gallery/brand-ambassadors/416198.JPEG","/assets/images/media-gallery/brand-ambassadors/416225.JPEG","/assets/images/media-gallery/brand-ambassadors/416248.JPEG","/assets/images/media-gallery/brand-ambassadors/418435.JPEG","/assets/images/media-gallery/internship/intern-1.jpg","/assets/images/media-gallery/internship/intern-2.jpg","/assets/images/media-gallery/internship/intern-3.jpg","/assets/images/media-gallery/internship/intern-4.jpg","/assets/images/media-gallery/internship/intern-5.jpg","/assets/images/media-gallery/internship/intern-6.jpg","/assets/images/media-gallery/internship/intern-7.jpg","/assets/images/media-gallery/internship/intern-8.jpg","/assets/images/media-gallery/product-testing/418554.JPEG","/assets/images/media-gallery/product-testing/419200.JPEG","/assets/images/media-gallery/product-testing/419217.JPEG","/assets/images/media-gallery/product-testing/419237.JPEG","/assets/images/media-gallery/product-testing/419444.JPEG","/assets/images/media-gallery/product-testing/419462.JPEG","/assets/images/media-gallery/product-testing/420659.JPEG","/assets/images/media-gallery/product-testing/420664.JPEG","/assets/images/media-gallery/product-testing/420881.JPEG","/assets/images/media-gallery/product-testing/421412.JPEG","/assets/images/media-gallery/product-testing/422602.JPEG","/assets/images/media-gallery/product-testing/422620.JPEG","/assets/images/media-gallery/product-testing/422704.JPEG","/assets/images/media-gallery/product-testing/422746.JPEG","/assets/images/media-gallery/product-testing/422750.JPEG","/assets/images/media-gallery/product-testing/422861.JPEG","/assets/images/media-gallery/product-testing/423556.JPEG","/assets/images/media-gallery/product-testing/423767.JPEG","/assets/images/media-gallery/product-testing/423770.JPEG","/assets/images/media-gallery/product-testing/423776.JPEG","/assets/images/media-gallery/product-testing/424794.JPEG"];

export default function MediaPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <section className="bg-foreground text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Media Gallery</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore moments from our brand ambassadors, internships, and product testing.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {images.map((src, i) => (
              <motion.div 
                key={i} 
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-200 shadow-sm"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${i}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox for selected image */}
      <AnimatePresence>
      {selectedImg && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            src={selectedImg}
            alt="Selected Media"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </main>
  );
}
