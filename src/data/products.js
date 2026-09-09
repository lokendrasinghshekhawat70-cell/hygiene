export const products = [
  {
    id: 1,
    name: "Premium Hand Wash",
    category: "Personal Hygiene",
    price: 199,
    originalPrice: 249,
    rating: 5,
    tag: "BESTSELLER",
    image: "/products/handwash.png",
    description: "Gentle daily foaming hand wash enriched with aloe vera and essential bergamot oils.",
    features: [
      "Kills 99.9% of harmful bacteria & germs",
      "Infused with soothing Aloe Vera & Vitamin E",
      "100% Paraben-free and dermatologist tested",
      "Gentle pH balanced formula suitable for all skin types"
    ]
  },
  {
    id: 2,
    name: "Advanced Hand Sanitizer",
    category: "Disinfection",
    price: 149,
    originalPrice: 199,
    rating: 5,
    tag: "POPULAR",
    image: "/products/sanitizer.png",
    description: "Instant 70% alcohol rinse-free antibacterial sanitizer with pure aloe vera glycerin.",
    features: [
      "70% Medical-grade Ethyl Alcohol base",
      "Non-sticky, quick-drying formula",
      "Infused with natural Peppermint and Citrus oils",
      "Compact travel-friendly leakproof bottle"
    ]
  },
  {
    id: 3,
    name: "Surface Disinfectant",
    category: "Disinfection",
    price: 219,
    originalPrice: 279,
    rating: 5,
    tag: "MAX DEFENSE",
    image: "/products/kitchen-cleaner.png",
    description: "Multi-surface antibacterial disinfectant spray that eliminates 99.99% viruses and bacteria.",
    features: [
      "Fast acting 30-second formula",
      "Safe for high-touch surfaces & electronics",
      "Leaves zero chemical residue",
      "Fresh crisp eucalyptus fragrance"
    ]
  },
  {
    id: 4,
    name: "Floor Cleaner",
    category: "Home Hygiene",
    price: 229,
    originalPrice: 299,
    rating: 5,
    tag: "ECO-FRIENDLY",
    image: "/products/floor-cleaner.png",
    description: "Biodegradable green tea floor cleaning disinfectant safe for children and pets.",
    features: [
      "Bio-enzymatic soil release technology",
      "Safe on marble, vitrified tiles & hardwood",
      "Repels dust and eliminates pet odors",
      "Zero residue, high-gloss shine finish"
    ]
  },
  {
    id: 5,
    name: "Toilet Cleaner",
    category: "Bathroom",
    price: 169,
    originalPrice: 219,
    rating: 5,
    tag: "DEEP ACTION",
    image: "/products/toilet-cleaner.png",
    description: "Ergonomic curved neck toilet cleaner for 99.9% germ elimination and ocean freshness.",
    features: [
      "Thick clinging blue gel covers 100% under-rim",
      "Powerful limescale and rust removal",
      "Continuous fresh wave ocean fragrance",
      "Color-changing active stain action"
    ]
  },
  {
    id: 6,
    name: "Dish Wash Gel",
    category: "Kitchen",
    price: 189,
    originalPrice: 239,
    rating: 5,
    tag: "TOUGH ON GREASE",
    image: "/products/kitchen-cleaner.png",
    description: "Concentrated lemon & neem active dishwash gel that cuts through tough grease effortlessly.",
    features: [
      "Power of 100 lemons in one drop",
      "Gentle on hands, tough on stains",
      "Leaves no white residue behind",
      "Safe on non-stick and bone china cookware"
    ]
  },
  {
    id: 7,
    name: "Liquid Soap",
    category: "Personal Hygiene",
    price: 159,
    originalPrice: 199,
    rating: 5,
    tag: "ORGANIC",
    image: "/products/soap.png",
    description: "Artisanal botanical soap crafted with nourishing cold-pressed olive oils and shea butter.",
    features: [
      "Rich creamy moisturizing lather",
      "Infused with organic lavender & oats",
      "French triple-milled for long longevity",
      "Sulfate-free and zero synthetic dyes"
    ]
  },
  {
    id: 8,
    name: "Soft Hygiene Tissues",
    category: "Personal Hygiene",
    price: 119,
    originalPrice: 149,
    rating: 5,
    tag: "ULTRA SOFT",
    image: "/products/wipes.png",
    description: "3-ply ultra-absorbent virgin bamboo fiber facial and hygiene tissues.",
    features: [
      "100% Virgin bamboo pulp",
      "Hypoallergenic and lint-free",
      "Super absorbent 3-ply thickness",
      "FSC certified sustainably sourced"
    ]
  },
  {
    id: 9,
    name: "Antibacterial Wet Wipes",
    category: "Personal Hygiene",
    price: 129,
    originalPrice: 169,
    rating: 5,
    tag: "TRAVEL ESSENTIAL",
    image: "/products/wipes.png",
    description: "70 thick textured biodegradable wipes infused with tea tree oil and vitamin E.",
    features: [
      "Extra thick honeycomb embossed texture",
      "Hypoallergenic & alcohol-free formula",
      "Resealable moisture-lock protective lid",
      "100% Plastic-free compostable plant fibers"
    ]
  },
  {
    id: 10,
    name: "Cleaning Spray",
    category: "Bathroom",
    price: 179,
    originalPrice: 229,
    rating: 5,
    tag: "POWER CLEAN",
    image: "/products/bathroom-cleaner.png",
    description: "Multi-action lime & mint bathroom spray that removes soap scum and hard water stains.",
    features: [
      "Deep tile & grout descaling power",
      "Sparkling non-scratch formulation",
      "Long-lasting fresh mint & lime scent",
      "100% Bleach-free and non-corrosive"
    ]
  }
];

export const categories = [
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    count: "4 Products",
    description: "Nourishing hand washes, soaps and gentle wet wipes for everyday care.",
    icon: "🧼",
    image: "/products/handwash.png"
  },
  {
    id: "home-hygiene",
    name: "Home Hygiene",
    count: "3 Products",
    description: "Floor disinfectants, surface cleaners and fresheners for pristine living spaces.",
    icon: "🏠",
    image: "/products/floor-cleaner.png"
  },
  {
    id: "bathroom",
    name: "Bathroom",
    count: "2 Products",
    description: "Deep action descalers, toilet gels and tile cleaning sprays.",
    icon: "🚿",
    image: "/products/bathroom-cleaner.png"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    count: "2 Products",
    description: "Powerful degreasers, dishwash gels and food-safe surface sprays.",
    icon: "🍳",
    image: "/products/kitchen-cleaner.png"
  },
  {
    id: "disinfection",
    name: "Disinfection",
    count: "3 Products",
    description: "Medical-grade 70% alcohol sanitizers and antibacterial surface shields.",
    icon: "✨",
    image: "/products/sanitizer.png"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    count: "2 Products",
    description: "Protective wipes, hospital-grade sanitizers and germ barrier solutions.",
    icon: "🩺",
    image: "/products/wipes.png"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    icon: "🛡️",
    title: "99.9% Germ Protection",
    desc: "Clinically tested formulas proven to neutralize harmful bacteria, viruses and household pathogens within seconds."
  },
  {
    id: 2,
    icon: "🌿",
    title: "100% Eco-Friendly & Non-Toxic",
    desc: "Formulated with plant-derived bio-enzymes, essential oils, and zero harsh toxic chemicals or parabens."
  },
  {
    id: 3,
    icon: "🔬",
    title: "Dermatologist Approved",
    desc: "Gentle pH-balanced formulations that keep your skin soft, hydrated, and protected without irritation."
  },
  {
    id: 4,
    icon: "⚡",
    title: "Rapid Fast Shipping",
    desc: "Free carbon-neutral express delivery on orders over ₹499 with guaranteed secure packaging."
  }
];

export const reviews = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "Physician & Mother",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "As a doctor, I'm very strict about hygiene. Hygienica's hand wash and sanitizers leave hands germ-free without drying out the skin. Outstanding quality!"
  },
  {
    id: 2,
    name: "Rajesh Malhotra",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The Floor Disinfectant and Surface Spray have made a noticeable difference. The natural citrus aroma lasts all day and leaves marble floors sparkling."
  },
  {
    id: 3,
    name: "Pooja Verma",
    role: "Fitness Coach",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I carry the wet wipes and mini hand sanitizer in my gym bag everywhere. Super convenient, skin-friendly, and smells incredibly refreshing."
  }
];

export const tips = [
  "Wash your hands with soap and water for at least 20 seconds.",
  "Brush your teeth twice daily and floss regularly.",
  "Disinfect frequently touched surfaces like doorknobs and phones.",
  "Use safe, clean filtered drinking water at all times.",
  "Keep your nails trimmed, clean and dry.",
  "Take daily showers and wear fresh, clean clothes."
];

export const gallery = [
  {
    title: "Hand Hygiene Routine",
    image: "/products/handwash.png"
  },
  {
    title: "Eco Floor Sanitization",
    image: "/products/floor-cleaner.png"
  },
  {
    title: "Deep Bathroom Cleanse",
    image: "/products/bathroom-cleaner.png"
  },
  {
    title: "Quick Germ Defense",
    image: "/products/sanitizer.png"
  }
];
