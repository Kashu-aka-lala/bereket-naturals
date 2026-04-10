"use client";

import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let's Connect</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Have questions about our products or interested in becoming a distributor? We'd love to hear from you.</p>
         </div>
      </section>

      <div className="container mx-auto px-4 mt-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Reach out to us through any of the channels below. Whether you're a customer, partner, or looking for private label manufacturing, our team is ready to assist you.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 text-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Visit Us</h4>
                  <div className="text-gray-600 space-y-3 mt-2">
                    <p><strong>Islamabad Office:</strong><br />3rd Floor, 13-Plaza, Overseas V Commercial, Bahria Town Phase 8, Islamabad.</p>
                    <p><strong>Overseas Office:</strong><br />Suite 205, 40 Hunt Street, Ajax, ON L1S 3M2, Canada</p>
                    <p><strong>Factory Address:</strong><br />2 Km From Bahawalpur Bypass, Bahawalpur Road, Multan</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 text-secondary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Call Us</h4>
                  <p className="text-gray-600 mt-1">+92 333 5647799</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 text-nature rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Email Us</h4>
                  <p className="text-gray-600 mt-1">info@bereketfoods.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" placeholder="your@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow text-gray-700 bg-white">
                  <option>General Inquiry</option>
                  <option>Become a Distributor</option>
                  <option>Private Label Manufacturing</option>
                  <option>Investor Relations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-red-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/30">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
