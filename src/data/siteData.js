export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "FYN Fitness",
    legalName: "FYN FITNESS GYM",
    tagline: "Find Your New Fitness.",
    description:
      "FYN Fitness is a premium gym facility in Harare offering state-of-the-art equipment, expert personal training, and a motivating community atmosphere. We are dedicated to helping every member achieve their fitness goals.",
    phone: "+263 71 363 3468",
    phoneRaw: "+263713633468",
    whatsappNumber: "263713633468",
    email: "info@fynfitness.co.zw",
    address: "8 Spruits Rd N, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2019",
    yearsExperience: "5+",
    projectsCompleted: "2,000+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "fyn-fitness-gym-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "FYN",
    logoLine2: "Fitness",
  },

  hero: {
    badge: "Harare's Premium Fitness Experience",
    titleParts: [
      { text: "FIND YOUR " },
      { text: "NEW", highlight: true },
      { text: " FITNESS." },
    ],
    subtitle:
      "State-of-the-art equipment, expert trainers, and a community that pushes you to be your best. FYN Fitness is where transformation begins.",
    ctaPrimary: "Start Today",
    ctaSecondary: "View Packages",
    trustBadge: "2,000+ Members Transformed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "FYN Fitness professional image 1" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "FYN Fitness professional image 2" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "FYN Fitness showcase" },
    ],
  },

  stats: [
    { number: "2000+", label: "Members Strong" },
    { number: "5+", label: "Years Running" },
    { number: "50+", label: "Weekly Classes" },
    { number: "5.0", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Strength Training",
      desc: "Full free weights area with Olympic platforms, power racks, dumbbells to 50kg, and plate-loaded machines.",
      icon: "Trophy",
    },
    {
      title: "Cardio Zone",
      desc: "Premium treadmills, ellipticals, rowing machines, and assault bikes with personal screen entertainment.",
      icon: "Heart",
    },
    {
      title: "Personal Training",
      desc: "Certified personal trainers who design custom programmes based on your goals, body type, and fitness level.",
      icon: "Star",
    },
    {
      title: "Group Classes",
      desc: "High-energy HIIT, spin, yoga, Zumba, and functional training classes led by passionate instructors.",
      icon: "UsersThree",
    },
    {
      title: "Nutrition Coaching",
      desc: "Personalised meal plans and nutritional guidance to complement your training and accelerate results.",
      icon: "Lightbulb",
    },
    {
      title: "Recovery Zone",
      desc: "Stretching area, foam rollers, and cool-down spaces to support proper recovery between sessions.",
      icon: "Buildings",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Strength Training",
        slug: "strength-training",
        desc: "Full free weights area with Olympic platforms, power racks, dumbbells to 50kg, and plate-loaded machines.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Cardio Zone",
        slug: "cardio-zone",
        desc: "Premium treadmills, ellipticals, rowing machines, and assault bikes with personal screen entertainment.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Personal Training",
        slug: "personal-training",
        desc: "Certified personal trainers who design custom programmes based on your goals, body type, and fitness level.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Group Classes",
        slug: "group-classes",
        desc: "High-energy HIIT, spin, yoga, Zumba, and functional training classes led by passionate instructors.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Nutrition Coaching",
        slug: "nutrition-coaching",
        desc: "Personalised meal plans and nutritional guidance to complement your training and accelerate results.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Recovery Zone",
        slug: "recovery-zone",
        desc: "Stretching area, foam rollers, and cool-down spaces to support proper recovery between sessions.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial FYN",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in strength training.",
        client: "Commercial Client",
        services: ["Strength Training", "Cardio Zone"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential FYN",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cardio zone.",
        client: "Residential Client",
        services: ["Cardio Zone", "Personal Training"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial FYN",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in personal training.",
        client: "Industrial Client",
        services: ["Personal Training", "Group Classes"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional FYN",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in group classes.",
        client: "Institutional Client",
        services: ["Group Classes", "Nutrition Coaching"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial FYN",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in nutrition coaching.",
        client: "Commercial Client",
        services: ["Nutrition Coaching", "Recovery Zone"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential FYN",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in recovery zone.",
        client: "Residential Client",
        services: ["Recovery Zone", "Strength Training"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "FYN Fitness changed my life. I have lost 20kg in eight months with my personal trainer. The gym has everything you need and the vibe is incredible.",
      name: "Tariro Muzenda",
      role: "Member, Weight Loss Journey",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "Best gym in Harare. The equipment is always clean and working, the trainers know their stuff, and the community keeps you accountable.",
      name: "Brian Muvirimi",
      role: "Fitness Enthusiast",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "I was intimidated by gyms until I joined FYN. The staff are welcoming, the classes are fun, and I actually look forward to training now.",
      name: "Nyasha Mapfumo",
      role: "New Gym Member",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "As a competitive bodybuilder, I need serious equipment and knowledgeable staff. FYN Fitness delivers on both. It is the real deal.",
      name: "Simba Chikore",
      role: "Competitive Bodybuilder",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "FYN Fitness was born from a simple belief: fitness should be accessible, motivating, and results-driven. Our Spruits Road facility was designed from the ground up to provide Harare with a gym experience that rivals anywhere in the world.",
      "With a perfect 5.0 Google rating and over 2,000 members, FYN Fitness has proven that a combination of quality equipment, expert coaching, and genuine community creates lasting transformation.",
    ],
    values: [
      { title: "Premium Equipment", desc: "Top-tier machines and free weights from leading manufacturers. Maintained daily for peak performance." },
      { title: "Expert Trainers", desc: "Certified personal trainers with specializations in strength, weight loss, sport-specific, and rehabilitation training." },
      { title: "Community Spirit", desc: "A motivating, supportive community where members push each other to achieve more." },
      { title: "Flexible Hours", desc: "Early morning to late evening hours that fit your schedule, not the other way around." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "FYN Fitness changed my life. I have lost 20kg in eight months with my personal trainer. The gym has everything you need and the vibe is incredible.", name: "Tariro Muzenda", role: "Member, Weight Loss Journey", rating: 5 },
      { text: "Best gym in Harare. The equipment is always clean and working, the trainers know their stuff, and the community keeps you accountable.", name: "Brian Muvirimi", role: "Fitness Enthusiast", rating: 5 },
      { text: "I was intimidated by gyms until I joined FYN. The staff are welcoming, the classes are fun, and I actually look forward to training now.", name: "Nyasha Mapfumo", role: "New Gym Member", rating: 5 },
      { text: "As a competitive bodybuilder, I need serious equipment and knowledgeable staff. FYN Fitness delivers on both. It is the real deal.", name: "Simba Chikore", role: "Competitive Bodybuilder", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "FYN Fitness",
        address: "8 Spruits Rd N, Harare, Zimbabwe",
        phone: "+263 71 363 3468",
        email: "info@fynfitness.co.zw",
      },
    ],
  },

  homeCta: {
    title: "YOUR TRANSFORMATION STARTS NOW",
    subtitle: "Premium equipment, expert trainers, and a community that believes in you. Join FYN Fitness today.",
    ctaPrimary: "Start Today",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello FYN Fitness! I am interested in membership options.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85",
  },

  footer: {
    description: "FYN Fitness is a premium gym facility in Harare offering state-of-the-art equipment, expert personal training, and a motivating community atmosphere. ...",
    copyright: "FYN Fitness",
  },
};

export default siteData;
