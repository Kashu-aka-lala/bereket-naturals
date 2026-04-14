"use client";

import { FileText, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function InvestorsPage() {
  return (
    <main className="pb-24 bg-gray-50 min-h-screen">
      <section className="bg-foreground text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Investor Relations</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Transparency, growth, and corporate governance are at the heart of our operations.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
               <h3 className="text-xl font-bold mb-2">Financial Performance</h3>
               <p className="text-gray-600 text-sm">Consistent year-over-year revenue growth across domestic and international markets.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <Users className="w-12 h-12 text-primary mx-auto mb-4" />
               <h3 className="text-xl font-bold mb-2">Corporate Governance</h3>
               <p className="text-gray-600 text-sm">A dedicated Board of Directors ensuring ethical practice and long-term shareholder value.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <FileText className="w-12 h-12 text-nature mx-auto mb-4" />
               <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
               <p className="text-gray-600 text-sm">Fully compliant with SECP and international trading standards.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 border-b pb-4">Contact for Business</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bereket Foods is always looking to build strong, enduring partnerships worldwide. Whether you are seeking new investment opportunities, exploring global distribution of our premium catalogue, or interested in our private label manufacturing capabilities, our corporate team is ready to collaborate. Reach out to us today to explore how we can grow together and bring nature's goodness to more tables.
                </p>
                <div className="pt-4">
                  <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Business Meeting" 
                  className="rounded-2xl w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Corporate handshake" 
                  className="rounded-2xl w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
