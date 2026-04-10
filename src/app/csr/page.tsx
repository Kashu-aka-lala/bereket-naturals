"use client";

import { Leaf, Heart, Users, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="bg-nature text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0"></div>
         <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">CSR & Sustainability</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Nourishing the future through eco-friendly practices and community upliftment.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Commitment</h2>
            <div className="w-16 h-1 bg-nature mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Bereket Naturals, our commitment goes beyond just food. We are dedicated to ensuring a greener planet and healthier communities for the generations to come. Every step in our supply chain is optimized for maximum sustainability and minimal environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-20 h-20 bg-green-100 text-nature rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eco-Friendly Packaging</h3>
              <p className="text-gray-600">
                We are transitioning our packaging lines to use 100% recyclable and biodegradable materials by 2030, drastically reducing plastic waste in the FMCG sector.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-20 h-20 bg-red-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Health & Nutrition Education</h3>
              <p className="text-gray-600">
                Partnering with local schools and clinics, we run extensive campaigns to educate mothers and children on the importance of balanced diets and fortified nutrition.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-20 h-20 bg-orange-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Upliftment</h3>
              <p className="text-gray-600">
                Creating local jobs and empowering farmers by sourcing our raw materials through fair-trade practices, ensuring prosperity reaches the grassroots.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Carbon Footprint Goal</h3>
              <p className="text-gray-600">
                Our Multan manufacturing facility is increasingly powered by solar energy, with a vision to achieve zero carbon emissions in the coming decade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
