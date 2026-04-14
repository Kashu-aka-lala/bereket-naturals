"use client";

import { Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <section className="bg-secondary text-white py-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 z-0"></div>
         <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join the Family</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Build your career with a company that values innovation, diversity, and excellence.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Current Openings</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12"></div>
          
          <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center py-20">
             <Briefcase className="w-16 h-16 text-gray-300 mb-6" />
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Currently, we are not hiring.</h3>
             <p className="text-gray-500 max-w-lg mx-auto mb-8">
               We are always looking for exceptional talent. While there are no open roles at this time, you may submit your credentials for future opportunities.
             </p>
             <a href="mailto:careers@bereketfoods.com?subject=Future Talent Inquiry" className="inline-flex items-center gap-2 bg-foreground hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md">
                Submit Your CV <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
