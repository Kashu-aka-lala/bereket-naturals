"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Heart, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-nature text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/story/about-hero.png')] bg-cover bg-center"></div>
        <div className="container relative z-10 px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            A Legacy of Purity
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
          >
            Nourishing Lives Since 2022
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section id="journey" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            A pioneer in nature and science, **Bereket Naturals** brings purity to your table. Under visionary leadership, we have grown from a regional producer to a global benchmark in the FMCG sector, cultivating prosperity through innovation and a relentless pursuit of quality.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Operating from our state-of-the-art facilities in Multan, Pakistan, we combine traditional goodness with world-class **Extrusion Technology** to deliver products that redefine international food safety standards.
          </p>
        </div>
      </section>

      {/* Technical Excellence - What We Do Specifically */}
      <section id="process" className="py-24 bg-foreground text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-secondary font-bold tracking-widest uppercase">Technical Excellence</h2>
              <h3 className="text-4xl font-extrabold mb-6">What We Do specifically</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Bereket Naturals specializes in **Physics-Based Food Processing**. Our core strength lies in our masterly command over **Twin-Screw Extrusion Technology**, allowing us to create nutrient-dense, perfectly textured cereals and porridges without the need for artificial additives.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Precision Fortification</h4>
                    <p className="text-gray-400 text-sm">We engineer our grain profiles to ensure maximum bioavailability of vitamins and minerals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Leaf className="text-nature w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Clean-Label Manufacturing</h4>
                    <p className="text-gray-400 text-sm">Our processes are designed to preserve the natural goodness of ingredients with zero compromise on shelf life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                   <div className="text-4xl font-extrabold text-secondary mb-2">10+</div>
                   <div className="text-sm text-gray-400 uppercase tracking-wider">Global Markets</div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center mt-8">
                   <div className="text-4xl font-extrabold text-primary mb-2">ISO</div>
                   <div className="text-sm text-gray-400 uppercase tracking-wider">22000 Certified</div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center -mt-8">
                   <div className="text-4xl font-extrabold text-nature mb-2">100%</div>
                   <div className="text-sm text-gray-400 uppercase tracking-wider">Halal Pure</div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                   <div className="text-4xl font-extrabold text-accent mb-2">20k+</div>
                   <div className="text-sm text-gray-400 uppercase tracking-wider">Daily Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Showcase */}
      <section id="leadership" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Our Leadership</h2>
            <h3 className="text-4xl font-extrabold text-foreground mb-6">Visionaries Behind the Abundance</h3>
            <p className="text-lg text-gray-600">
              Our leadership team brings decades of global experience in food science, supply chain logistics, and corporate governance to drive the Bereket Naturals mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
             {[
               { name: "Executive Leadership", role: "Chief Executive Officer", bio: "With a passion for nutrition and a track record of scaling FMCG giants, our CEO leads the strategic vision for global expansion." },
               { name: "Strategic Direction", role: "Managing Director", bio: "Expert in operational excellence and sustainable sourcing, ensuring our 'Naturals' promise is met at every step." },
               { name: "Innovation Lead", role: "Director of R&D", bio: "The mind behind our extrusion technology, specializing in the intersection of grain science and human health." }
             ].map((leader, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="h-80 bg-gray-200 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder for leader photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Users className="w-20 h-20 opacity-20" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-bold text-2xl text-foreground mb-1">{leader.name}</h4>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">{leader.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Core Foundations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Defines Us</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Goodness</li>
                <li>Innovation</li>
                <li>Quality</li>
                <li>Perseverance</li>
              </ul>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="bg-primary text-white p-8 rounded-2xl shadow-lg transition-all text-center transform scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Culture</h3>
              <ul className="text-red-100 space-y-2">
                <li>Equality</li>
                <li>Integrity</li>
                <li>Diversity</li>
                <li>Ownership</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 text-nature rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Environment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Sustainability</li>
                <li>Conservation</li>
                <li>Advocacy</li>
                <li>Eco-friendly practices</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Global Standards & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
             <div className="flex flex-col items-center gap-2">
               <ShieldCheck className="w-16 h-16 text-nature" />
               <span className="font-semibold text-gray-700">100% Halal Certified</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <ShieldCheck className="w-16 h-16 text-blue-600" />
               <span className="font-semibold text-gray-700">ISO 9001:2015</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <ShieldCheck className="w-16 h-16 text-primary" />
               <span className="font-semibold text-gray-700">ISO 22000 (FSMS)</span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
