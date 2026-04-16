"use client";

import { motion } from "framer-motion";

const partnerImages = [
  "Aes.jfif", "aes ecommerce.jpg", "alfatah.png", "aljadeed.jfif",
  "alnaseeb baba.jfif", "altunsan.png", "amis.png", "asian.png",
  "aslam.jpg", "avanza.png", "big buy.jfif", "bin hashim.png",
  "bin safeer.jfif", "carrefour logo.png", "chase plus.png",
  "chaseup logo.jfif", "cloud_tenants.png", "d watson logo.png",
  "daraz.png", "dawood mart.png", "esajee.jfif", "geenvalley.jfif",
  "hatim.jfif", "hbk.png", "home plus.png", "ideal.jfif",
  "infinity basket.jfif", "jalalsons.webp", "jeb chaho.png",
  "magnet.png", "mcc logo.png", "mds.png", "memon.jfif", "moon.png",
  "nazar jan.avif", "needs.jfif", "panda mart.jfif", "pharmagen.png",
  "rahim stores.jfif", "rainbow logo.jpg", "raja sahab.png",
  "risen logo.jpg", "sauda salaf.jfif", "save mart.png", "savers.png",
  "shaheen.png", "sk super store.png", "spar.png", "talian.png",
  "umer.jfif", "zaman and sons.jfif"
];

export default function AlliancesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0"></div>
         <div className="container relative z-10 mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-serif">Our Trusted Partners</h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl opacity-90 mx-auto leading-relaxed">
              We are proud to collaborate with esteemed retailers, distributors, and organizations globally. Working together, we ensure that Bereket Naturals constantly delivers on its promise of purity, speed, and premium quality. Our vast network of trusted alliances enables us to thrive and lead in the diverse markets we serve.
            </p>
         </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Partners Grid */}

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
            }}
          >
            {partnerImages.map((src, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center aspect-square hover:shadow-md transition-shadow cursor-default"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={`/assets/images/alliances/${src}`} 
                  alt={`Alliance partner ${i + 1}`} 
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
