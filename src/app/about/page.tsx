"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Leaf, Heart, Users, ShieldCheck, Mail, GraduationCap, Briefcase, X, ArrowRight } from "lucide-react";

import { boardMembers, type BoardMember } from "@/data/leadership";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

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
      <section id="leadership" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Board of Honors</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">Meet the Visionaries</h3>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              A team of seasoned professionals with decades of combined experience driving excellence across FMCG, healthcare, and food industries.
            </p>
          </div>

          {/* Featured Executive Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {boardMembers.slice(0, 2).map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5 flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 relative overflow-hidden bg-primary/10">
                  <img 
                    src={i === 0 ? "/assets/images/leadership/ceo_new.png" : "/assets/images/leadership/md_new.png"} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent mb-1">
                      {i === 0 ? "CEO&apos;s" : "MD&apos;s"} MESSAGE
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <h4 className="text-2xl font-serif font-bold text-primary mb-1">{leader.name}</h4>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-6 truncate">{leader.creds}</p>
                  
                  <div className="relative">
                    <span className="absolute -top-6 -left-2 text-6xl text-primary/10 font-serif leading-none">&quot;</span>
                    <p className="text-gray-600 text-[13px] leading-relaxed italic relative z-10">
                      {leader.message}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <a href={`mailto:${leader.email}`} className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4" />
                      {leader.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Board of Honors Grid */}
          <div className="pt-20 border-t border-primary/10">
            <div className="text-center mb-12">
               <h4 className="text-2xl font-serif font-bold text-primary mb-2">Corporate Leadership</h4>
               <p className="text-gray-500 text-sm">Providing strategic guidance and driving operational excellence</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {boardMembers.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-3xl p-6 border border-primary/5 shadow-sm hover:shadow-xl hover:bg-white transition-all group text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-accent/20 group-hover:border-accent group-hover:rotate-12 transition-all duration-500"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all p-1"
                    />
                  </div>
                  <h5 className="font-bold text-lg text-primary mb-1">{member.name}</h5>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-6 leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {member.designation}
                  </p>
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-3 bg-white border border-primary/10 rounded-xl text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    View Profile
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for Member Details */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/90 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden flex flex-col md:grid md:grid-cols-5 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="md:col-span-2 bg-primary flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
                  <div className="relative z-10">
                    <div className="w-48 h-48 rounded-full border-4 border-accent p-2 mb-6">
                      <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="h-0.5 w-12 bg-accent mx-auto mb-6"></div>
                    <h3 className="text-white text-3xl font-serif font-bold mb-2">{selectedMember.name}</h3>
                    <p className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">{selectedMember.designation}</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 lg:p-12 relative">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-8 right-8 text-gray-400 hover:text-primary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                        <GraduationCap className="w-4 h-4 text-accent" /> Qualifications
                      </div>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedMember.qualifications.map((q, j) => (
                           <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                             <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                             {q}
                           </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                        <Briefcase className="w-4 h-4 text-accent" /> Professional Experience
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        {selectedMember.experience}
                      </p>
                    </div>

                    {selectedMember.email && (
                      <a href={`mailto:${selectedMember.email}`} className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold text-sm hover:bg-accent transition-all shadow-lg shadow-primary/20">
                        <Mail className="w-4 h-4" /> Reach Out
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
