"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Microscope, Globe, Factory, Zap, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <main className="overflow-hidden bg-background">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/assets/videos/background.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105"
          />
          {/* Darker overlay for better video text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background/95"></div>
          {/* Animated Grain Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-accent font-extrabold uppercase mb-6 text-sm md:text-base tracking-[0.4em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              EST. 2022
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] font-serif drop-shadow-[0_5px_10px_rgba(0,0,0,0.6)]"
            >
              Abundance & <br />
              <span className="text-accent italic font-medium serif drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Nature&apos;s Goodness</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Bringing prosperity to your table through the perfect amalgamation of nature and science.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/about" 
                className="group relative px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 shadow-xl shadow-accent/20"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
              </Link>
              <Link 
                href="/products" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                Explore Catalogue
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Indicators / Stats Bar */}
      <section className="relative -mt-16 z-20 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-background border border-primary/10 rounded-[3rem] shadow-2xl backdrop-blur-xl"
          >
            {[
              { label: "Ingredients", value: "100%" },
              { label: "Sourcing", value: "Natural" },
              { label: "Footprint", value: "Global" },
              { label: "Since", value: "2022" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center p-4"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  className="text-3xl md:text-4xl font-black text-primary mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">Nourishing Lives Since 2022</h2>
            <p className="text-foreground/70 text-lg">
              A pioneer in nature and science, Bereket Foods brings purity to your table. From humble roots to a global name, we cultivate prosperity through innovation and deep respect for the land, ensuring only the finest, safest ingredients reach your home.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: <Microscope className="w-10 h-10 text-accent" />,
                title: "Food",
                desc: "Premium Instant Porridges, Jams, Chutneys & Condiments crafted with natural ingredients."
              },
              {
                icon: <Leaf className="w-10 h-10 text-accent" />,
                title: "Healthcare",
                desc: "Gastric & Digestive Solutions, Sore Throat remedies, and Daily Vitamins for your wellness."
              },
              {
                icon: <Factory className="w-10 h-10 text-accent" />,
                title: "Private Label",
                desc: "Custom manufacturing for food products at our state-of-the-art global facilities."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group p-10 bg-background border border-primary/5 rounded-[2.5rem] hover:shadow-2xl transition-all"
              >
                <motion.div 
                  className="mb-6 p-4 bg-primary/5 inline-block rounded-2xl group-hover:bg-primary/10 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. What Defines Us */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-[120px] -mr-48 -mt-48"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs uppercase tracking-[0.3em] font-bold mb-8">Core Pillars</span>
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-16 leading-tight">
                    What Defines Us
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold font-serif text-accent tracking-widest mb-4">Values</div>
                    <p className="text-white/80 leading-relaxed p-4 bg-black/20 rounded-xl">Goodness <br/> Innovation <br/> Quality <br/> Perseverance <br/> Excellence</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold font-serif text-accent tracking-widest mb-4">Culture</div>
                    <p className="text-white/80 leading-relaxed p-4 bg-black/20 rounded-xl">Equality <br/> Integrity <br/> Diversity <br/> Ownership <br/> Openness</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-bold font-serif text-accent tracking-widest mb-4">Environment</div>
                    <p className="text-white/80 leading-relaxed p-4 bg-black/20 rounded-xl">Sustainability <br/> Conservation <br/> Advocacy <br/> <span className="opacity-0">.</span> <br/> <span className="opacity-0">.</span></p>
                  </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 5. Our Catalogue (Trusted by Millions) */}
      <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <motion.div {...fadeInUp} className="lg:w-full space-y-8 text-center mx-auto max-w-4xl">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm mx-auto">
                          <Globe className="w-4 h-4" /> 
                          <span>Global Foothold</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight">
                        Our Catalogue <br /> 
                        <span className="text-accent italic">Trusted by Millions</span>
                      </h2>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Experience a legacy of purity and innovation through our diverse catalogue of premium brands, each crafted to bring natural goodness to your table.
                      </p>
                  </motion.div>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
              >
                  {[
                    { name: "Kuvvet Cereals", desc: "Power of Nutrition - Precision-fortified cereals for pure energy." },
                    { name: "Kuvvet Porridge", desc: "Wholesome Breakfast - Traditional grain goodness & convenience." },
                    { name: "Liffest (Kids)", desc: "Kids' Favorite - Nutritious and fun breakfast options for magical mornings." },
                    { name: "Liffest (Choco)", desc: "Chocolate Flavored Fun - Indulgent chocolate cereals." },
                    { name: "Kuvvet Digest", desc: "Instant Digestion - Formulated with natural ingredients and Himalayan salt." },
                    { name: "Kuvvet Sauces", desc: "Joy in a Jar - Premium culinary sauces and gourmet chutneys." },
                    { name: "Kuvvet Jams", desc: "Real Fruit Goodness - Sun-ripened orchard fruit purees and jams." },
                    { name: "Niwala", desc: "Gold Standard of Tradition - Premium Basmati rice and rich lentils." }
                  ].map((brand, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-6 bg-white border border-primary/10 rounded-3xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <h4 className="font-bold text-xl text-primary mb-2">{brand.name}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{brand.desc}</p>
                    </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* 6. Contact Us / Let's Connect CTA */}
      <section className="py-24 px-4 bg-white border-t border-primary/5">
        <div className="container mx-auto">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-10">
                <h2 className="text-4xl font-serif font-black text-primary">Let&apos;s Connect</h2>
                <p className="text-foreground/60 text-lg">Have questions about our products or interested in becoming a distributor? We&apos;d love to hear from you. Reach out to us through any of the channels below.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
                   <div className="p-6 bg-primary/5 rounded-3xl">
                      <div className="flex items-center gap-3 mb-4 text-primary font-bold"><MapPin className="w-5 h-5 text-accent"/> Islamabad Office</div>
                      <p className="text-sm text-foreground/70">3rd Floor, 13-Plaza, Overseas V Commercial, Bahria Town Phase 8, Islamabad.</p>
                   </div>
                   <div className="p-6 bg-primary/5 rounded-3xl">
                      <div className="flex items-center gap-3 mb-4 text-primary font-bold"><MapPin className="w-5 h-5 text-accent"/> Overseas Office</div>
                      <p className="text-sm text-foreground/70">Suite 205, 40 Hunt Street, Ajax, ON L1S 3M2, Canada.</p>
                   </div>
                   <div className="p-6 bg-primary/5 rounded-3xl">
                      <div className="flex items-center gap-3 mb-4 text-primary font-bold"><Factory className="w-5 h-5 text-accent"/> Factory Address</div>
                      <p className="text-sm text-foreground/70">2 Km From Bahawalpur Bypass, Bahawalpur Road, Multan.</p>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-12 bg-primary text-white p-8 rounded-full">
                    <div className="flex items-center gap-2 font-bold"><Phone className="w-5 h-5 text-accent"/> +92 333 5647799</div>
                    <div className="hidden md:block text-white/30">|</div>
                    <div className="flex items-center gap-2 font-bold"><Mail className="w-5 h-5 text-accent"/> info@bereketfoods.com</div>
                </div>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
