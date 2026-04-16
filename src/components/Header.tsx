"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    megaMenu: [
      { name: "Our Journey", href: "/about#journey" },
      { name: "Leadership Team", href: "/about#leadership" },
      { name: "Technical Excellence", href: "/about#process" },
    ],
  },
  {
    name: "Our Brands",
    href: "/products",
    megaMenu: [
      { name: "Kuvvet Porridge", href: "/products/kuvvet-porridge" },
      { name: "Kuvvet Cereals", href: "/products/kuvvet-cereals" },
      { name: "Liffest Chocolates", href: "/products/liffest" },
      { name: "Major Grains", href: "/products/major-grains" },
      { name: "Jhat Hazam", href: "/products/jhat-hazam" },
      { name: "Jarfull Sauces", href: "/products/jarfull" },
      { name: "Riverdale Jams", href: "/products/riverdale" },
      { name: "Niwala Rice", href: "/products/niwala" },
    ],
  },
  { name: "Alliances", href: "/alliances" },
  { name: "Factory", href: "/factory" },
  { name: "Media Gallery", href: "/media" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md shadow-sm duration-300 border-b border-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/assets/images/logo.png" 
              alt="Bereket Naturals Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="sr-only">Bereket Naturals</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center h-full"
                onMouseEnter={() => link.megaMenu && setActiveMega(link.name)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1 uppercase tracking-wide"
                >
                  {link.name}
                  {link.megaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeMega === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-lg border-t-2 border-primary rounded-b-md overflow-hidden"
                      >
                        <div className="py-2">
                          {link.megaMenu.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-foreground hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Icons & Tools */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
              <Globe className="w-5 h-5" />
              <span>EN/UR</span>
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col py-4 px-4 space-y-4 shadow-inner">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-foreground text-lg hover:text-primary font-medium uppercase tracking-wide"
                    onClick={() => !link.megaMenu && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.megaMenu && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                      {link.megaMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-gray-600 hover:text-primary text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
