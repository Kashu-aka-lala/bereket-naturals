export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  variants: { name: string; img: string; weight?: string }[];
  heroImg: string;
  accentColor: string;
  badgeLabel?: string;
};

export const allProducts: Product[] = [
  // ─── KUVVET ──────────────────────────────────────────────────────────────
  {
    id: "kuvvet-porridge",
    name: "Kuvvet Porridge",
    brand: "Kuvvet",
    category: "porridges",
    tagline: "Nourish Your Morning, Fuel Your Day",
    description:
      "Kuvvet Porridges are crafted from the finest whole grains, slow-milled to preserve every nutrient. Whether you choose hearty Wheat or wholesome Barley, each bowl delivers sustained energy and real satiety — no artificial fillers, no shortcuts.",
    features: [
      "100% Natural Whole Grains",
      "High in Dietary Fibre",
      "No Artificial Colours or Flavours",
      "Ready in Minutes",
      "Family-size & single-serve packs",
    ],
    variants: [
      { name: "Wheat Porridge Box", img: "/images/products/kuvvet/wheat-porridge-box.jpg", weight: "100g, 175g, 250g" },
      { name: "Wheat Porridge Pouch", img: "/images/products/kuvvet/wheat-porridge.jpg", weight: "300g" },
      { name: "Barley Porridge Box", img: "/images/products/kuvvet/barley-porridge-box.jpg", weight: "100g, 175g, 250g" },
      { name: "Barley Porridge Pouch", img: "/images/products/kuvvet/barley-porridge-pouch.jpg", weight: "300g" },
    ],
    heroImg: "/images/hero/kuvvet-porridge.png",
    accentColor: "#C8973A",
    badgeLabel: "Best Seller",
  },
  {
    id: "kuvvet-cereals",
    name: "Kuvvet Cereals",
    brand: "Kuvvet",
    category: "cereals",
    tagline: "Fortified Power, Real Flavour",
    description:
      "Kuvvet Cereals combine precision fortification with irresistible taste. From crispy Frosted Flakes to crunchy Prime Flakes, our cereals are fortified with essential vitamins and minerals to kick-start your day the right way.",
    features: [
      "Vitamin & Mineral Fortified",
      "Crispy Texture That Stays Crunchy",
      "Low in Added Sugar",
      "Source of Iron & B-Vitamins",
      "Suitable for the Whole Family",
    ],
    variants: [
      { name: "Frosted Flakes", img: "/images/products/kuvvet/frosted-flakes-250g.png", weight: "250g, 500g" },
      { name: "Prime Flakes", img: "/images/products/kuvvet/prime-flakes-500g.png", weight: "250g, 500g" },
      { name: "Berry Rocks", img: "/images/products/kuvvet/berry-rocks.jpg", weight: "250g, 500g" },
      { name: "Choco Rocks", img: "/images/products/kuvvet/choco-rocks.jpg", weight: "250g, 500g" },
      { name: "Choco Shells", img: "/images/products/kuvvet/choco-shells-500g.jpg", weight: "500g" },
      { name: "Choco Vanilla Assorted", img: "/images/products/kuvvet/choco-vanilla-assorted.jpg", weight: "250g, 500g" },
    ],
    heroImg: "/images/hero/kuvvet-cereals.png",
    accentColor: "#C8973A",
  },

  // ─── LIFFEST ─────────────────────────────────────────────────────────────
  {
    id: "liffest",
    name: "Liffest Chocolate Cereals",
    brand: "Liffest",
    category: "cereals",
    tagline: "Where Chocolate Meets Crunch",
    description:
      "Liffest is the indulgent side of breakfast. Rich chocolate-coated cereals in fun shapes — Loops, Shells, Balls, and Stars — that make mornings exciting for kids and adults alike. Packed with real cocoa for a flavour that goes beyond ordinary.",
    features: [
      "Real Cocoa Coating",
      "Fun Shapes Kids Love",
      "Fortified with Iron & Calcium",
      "Available in Multiple Sizes",
      "No Artificial Sweeteners",
    ],
    variants: [
      { name: "Choco Stars", img: "/images/products/liffest/choco stars.png" },
      { name: "Choco Balls", img: "/images/products/liffest/choco-balls-450g.png", weight: "450g" },
      { name: "Choco Loops 100g", img: "/images/products/liffest/choco-loops-100g.png", weight: "100g" },
      { name: "Choco Loops 250g", img: "/images/products/liffest/choco-loops-250g.png", weight: "250g" },
      { name: "Choco Shells 100g", img: "/images/products/liffest/choco-shells-100g.png", weight: "100g" },
      { name: "Choco Shells 150g", img: "/images/products/liffest/choco-shells-150g.png", weight: "150g" },
    ],
    heroImg: "/images/hero/liffest.png",
    accentColor: "#6B3A2A",
    badgeLabel: "Kids' Favourite",
  },

  // ─── MAJOR GRAINS ─────────────────────────────────────────────────────────
  {
    id: "major-grains",
    name: "Major Grains",
    brand: "Major Grains",
    category: "cereals",
    tagline: "Big Fun, Big Nutrition for Little Champions",
    description:
      "Major Grains is the go-to cereal brand for active kids. Bright packaging, playful shapes (Balls, Loops, Shells, Moons & Stars), and a nutrition profile parents trust. Real whole grain goodness that powers adventures from morning to night.",
    features: [
      "Whole Grain Enriched",
      "Fortified with 8 Vitamins & Minerals",
      "Playful Shapes and Bright Colours",
      "No Artificial Colours",
      "Loved by Kids, Approved by Parents",
    ],
    variants: [
      { name: "Choco Balls", img: "/images/products/major-grains/choco-balls-new.png", weight: "150g, 300g" },
      { name: "Choco Loops", img: "/images/products/major-grains/choco-loops-new.png", weight: "150g, 300g" },
      { name: "Choco Shells", img: "/images/products/major-grains/choco-shells-new.png", weight: "150g, 300g" },
      { name: "Moons & Stars", img: "/images/products/major-grains/moons-and-stars-new.png", weight: "150g, 300g" },
    ],
    heroImg: "/images/hero/major-grains.png",
    accentColor: "#2E7D32",
  },

  // ─── JHAT HAZAM ───────────────────────────────────────────────────────────
  {
    id: "jhat-hazam",
    name: "Jhat Hazam",
    brand: "Jhat Hazam",
    category: "digestives",
    tagline: "Instant Relief, Authentic Taste",
    description:
      "Jhat Hazam is Pakistan's favourite digestive drink — a fizzy, flavour-packed formula enriched with Himalayan salt and natural digestive herbs. Available in five exciting flavours, it provides instant relief after every meal while delighting your taste buds.",
    features: [
      "Himalayan Pink Salt Enriched",
      "Natural Digestive Herbs",
      "Instant Post-Meal Relief",
      "5 Exciting Flavours",
      "No Artificial Flavours",
    ],
    variants: [
      { name: "Aamchoor Box", img: "/images/products/jhat-hazam/aamchoor-box.png", weight: "100s" },
      { name: "Aamchoor Jar", img: "/images/products/jhat-hazam/aamchoor-jar.png", weight: "100s, 200s" },
      { name: "Amrud Box", img: "/images/products/jhat-hazam/amrud-box.png", weight: "100s" },
      { name: "Amrud Jar", img: "/images/products/jhat-hazam/amrud-jar.png", weight: "100s, 200s" },
      { name: "Cola Jar", img: "/images/products/jhat-hazam/cola-jar.png", weight: "100s, 200s" },
      { name: "Aamchoor Bottle", img: "/images/products/jhat-hazam/aamchoor.jpg", weight: "120s" },
      { name: "Amrud Bottle", img: "/images/products/jhat-hazam/amrud.jpg", weight: "120s" },
      { name: "Anaar Bottle", img: "/images/products/jhat-hazam/anaar.jpg", weight: "120s" },
      { name: "Cola Bottle", img: "/images/products/jhat-hazam/cola.jpg", weight: "120s" },
      { name: "Imlee Bottle", img: "/images/products/jhat-hazam/imlee.jpg", weight: "120s" },
    ],
    heroImg: "/images/hero/jhat-hazam.png",
    accentColor: "#C0392B",
    badgeLabel: "New Flavours",
  },

  // ─── JARFULL ──────────────────────────────────────────────────────────────
  {
    id: "jarfull",
    name: "Jarfull",
    brand: "Jarfull",
    category: "sauces",
    tagline: "Premium Sauces & Chutneys, Crafted with Love",
    description:
      "Jarfull brings restaurant-quality flavour to your kitchen table. Each jar is filled with slow-cooked sauces, chutneys, and pastes made from hand-selected ingredients with no artificial preservatives. From tangy Plum Chutney to rich Tomato Ketchup—Jarfull is the secret behind every great meal.",
    features: [
      "No Artificial Preservatives",
      "Slow-Cooked for Authentic Flavour",
      "Hand-Selected Ingredients",
      "7 Varieties to Choose From",
      "Perfect for Dipping, Cooking & Spreading",
    ],
    variants: [
      { name: "Green Chilli Paste", img: "/images/products/jarfull/green-chilli-paste.jpg" },
      { name: "Mango Chutney", img: "/images/products/jarfull/mango-chutney.jpg" },
      { name: "Mixed Pickle Classic", img: "/images/products/jarfull/mixed-pickle.jpg" },
      { name: "Mixed Pickle Premium", img: "/images/products/jarfull/mixed-pickle-2.jpg" },
      { name: "Plum Chutney", img: "/images/products/jarfull/plum-chutney.jpg" },
      { name: "Tomato Ketchup Green", img: "/images/products/jarfull/tomato-ketchup-green.jpg" },
      { name: "Tomato Ketchup Red", img: "/images/products/jarfull/tomato-ketchup-red.jpg" },
    ],
    heroImg: "/images/hero/jarfull.png",
    accentColor: "#E67E22",
  },

  // ─── RIVERDALE ────────────────────────────────────────────────────────────
  {
    id: "riverdale",
    name: "Riverdale Jams",
    brand: "Riverdale",
    category: "jams",
    tagline: "Real Fruit. Real Goodness. Every Spoonful.",
    description:
      "Riverdale Jams are made with whole fruit pieces for a texture and flavour you can actually taste. No cheap concentrates — just sun-ripened fruit, natural sugar, and the perfect set. Spread it on toast, swirl it in yoghurt, or enjoy straight from the jar.",
    features: [
      "Made with Whole Fruit Pieces",
      "No Artificial Colours or Flavours",
      "No High-Fructose Corn Syrup",
      "4 Delicious Flavours",
      "Glass Jar for Premium Freshness",
    ],
    variants: [
      { name: "Apple Jam", img: "/images/products/riverdale/apple-jam.jpg" },
      { name: "Mango Jam", img: "/images/products/riverdale/mango-jam.jpg" },
      { name: "Peach Jam", img: "/images/products/riverdale/peach-jam.jpg" },
      { name: "Tropical Tango", img: "/images/products/riverdale/tropical-tango.jpg" },
    ],
    heroImg: "/images/hero/riverdale.png",
    accentColor: "#D4AC0D",
    badgeLabel: "Premium",
  },

  // ─── NIWALA ───────────────────────────────────────────────────────────────
  {
    id: "niwala",
    name: "Niwala Rice & Daals",
    brand: "Niwala",
    category: "grains",
    tagline: "From the Fields. Pure. Honest. Nourishing.",
    description:
      "Niwala delivers the finest Basmati rice varieties and premium whole daals, sourced directly from Pakistan's most fertile growing regions. Each grain is carefully cleaned, sorted, and packed without additives — pure staples your family deserves.",
    features: [
      "100% Premium Basmati Varieties",
      "Direct Farm Sourcing",
      "No Added Chemicals or Polish",
      "Rich Aroma & Long Grain Quality",
      "Rice & Daal Range in One Brand",
    ],
    variants: [
      { name: "Budget Everyday Rice", img: "/images/products/niwala/budget-everyday-1kg.jpg", weight: "1kg" },
      { name: "Daily Sella Rice", img: "/images/products/niwala/daily-sella-1kg.jpg", weight: "1kg" },
      { name: "Golden Sella Rice", img: "/images/products/niwala/golden-sella-1kg.jpg", weight: "1kg" },
      { name: "Royal Kainat Rice", img: "/images/products/niwala/royal-kainat-1kg.jpg", weight: "1kg" },
      { name: "Golden Daal Chana", img: "/images/products/niwala/golden-daal-chana.png" },
      { name: "Golden Daal Masoor", img: "/images/products/niwala/golden-daal-masoor.png" },
      { name: "Golden Daal Mong", img: "/images/products/niwala/golden-daal-mong.png" },
      { name: "Golden Kabuli Channa", img: "/images/products/niwala/golden-kabuli-channa.png" },
    ],
    heroImg: "/images/hero/niwala.png",
    accentColor: "#5D6D7E",
  },
];

export const categories = [
  "All",
  "Cereals",
  "Porridges",
  "Sauces",
  "Jams",
  "Grains",
  "Digestives",
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
