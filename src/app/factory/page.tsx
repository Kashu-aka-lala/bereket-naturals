"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, ShieldCheck, Settings, Globe2, X } from "lucide-react";

const factoryImages = [
  "factory-001.jpeg",
  "factory-002.jpeg",
  "factory-003.jpeg",
  "factory-004.jpeg",
  "factory-005.jpeg",
  "factory-006.jpeg",
  "factory-007.jpeg",
  "factory-008.jpeg",
  "factory-009.jpeg",
  "factory-010.jpeg",
  "factory-011.jpeg",
  "factory-012jpeg.jpeg",
];

export default function FactoryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="bg-primary text-white pt-32 pb-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/20 z-0"></div>
         <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-serif">Our Factory</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Where nature meets science. Experience the modern infrastructure and stringent quality standards that power Bereket Naturals.
            </p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">State-of-the-Art Manufacturing</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our advanced manufacturing facility, deliberately structured to handle extensive private label and branded production, stands at the heart of our operations. Equipped with cutting-edge technology, stringent quality control laboratories, and highly automated production lines, the factory ensures that every grain, sauce, and cereal reaching your table meets the highest global standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in our commitment to excellence, cleanliness, and operational efficiency. By marrying eco-friendly practices with vast manufacturing capabilities, we are capable of serving millions of households globally without compromising on the authentic taste and nourishing purity of our products.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Capacity</h3>
              <p className="text-sm text-gray-600">
                Continuous production lines capable of fulfilling massive international and domestic orders.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all border border-gray-100">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-sm text-gray-600">
                In-house laboratories ensuring 100% compliance with strict international food safety standards.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Automation</h3>
              <p className="text-sm text-gray-600">
                Fully automated processing and packaging lines reducing human touch and improving precision.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Export</h3>
              <p className="text-sm text-gray-600">
                Tailored private label manufacturing optimized specifically for seamless worldwide export.
              </p>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Inside Our Facility</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {factoryImages.map((img, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(img)}
                  className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl transition-all relative group cursor-pointer border border-gray-200"
                >
                  <img
                    src={`/assets/images/factory/${img}`}
                    alt={`Factory view ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold tracking-widest uppercase text-xs border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`/assets/images/factory/${selectedImage}`}
              alt="Factory view full"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
