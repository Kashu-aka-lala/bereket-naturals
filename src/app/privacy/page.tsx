"use client";

import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <section className="bg-primary text-white py-20 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Commitment to your data protection and privacy.</p>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-12 h-12 text-primary" />
              <h2 className="text-3xl font-bold text-foreground m-0">Respecting Your Privacy</h2>
            </div>
            
            <p>
              At Bereket Naturals, we take your privacy seriously. This Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services.
            </p>

            <h3 className="text-xl font-bold text-foreground">1. Information Collection</h3>
            <p>
              We collect information you provide directly to us through contact forms, such as your name, email address, and inquiry details. We also collect non-identifiable usage data to improve our site performance.
            </p>

            <h3 className="text-xl font-bold text-foreground">2. Use of Information</h3>
            <p>
              Your information is used solely to respond to your inquiries, provide customer support, and improve our services. We do not sell or share your data with third parties for marketing purposes.
            </p>

            <h3 className="text-xl font-bold text-foreground">3. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.
            </p>

            <h3 className="text-xl font-bold text-foreground">4. Cookies</h3>
            <p>
              Our website may use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
            </p>

            <h3 className="text-xl font-bold text-foreground">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@bereketfoods.com" className="text-primary font-bold">info@bereketfoods.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
