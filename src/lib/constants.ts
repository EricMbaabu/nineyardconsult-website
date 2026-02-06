import type {
  NavLink,
  HeroStat,
  Pillar,
  Sector,
  PanAfricanFeature,
  DriveValue,
  ApproachStep,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Who We Are", href: "#who", sectionId: "who" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Sectors", href: "#sectors", sectionId: "sectors" },
  { label: "Advantage", href: "#advantage", sectionId: "advantage" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const HERO_STATS: HeroStat[] = [
  { value: "15+", label: "African Countries" },
  { value: "7+", label: "Key Sectors" },
  { value: "5+", label: "Years Advisory" },
];

export const PILLARS: Pillar[] = [
  {
    icon: "\u{1F9ED}",
    title: "Strategy & Market Development",
    description:
      "From go-to-market playbooks to ecosystem building, we craft strategies that position your brand for dominance in African markets.",
    items: [
      "Go-to-market strategy",
      "Distribution & retail channel development",
      "Strategic partnerships & ecosystem building",
      "Product-market fit validation",
    ],
  },
  {
    icon: "\u{1F4B0}",
    title: "Access to Finance & Investment Readiness",
    description:
      "We turn ideas into fundable propositions \u2014 from grant applications to investor decks and co-investment consortia.",
    items: [
      "Funding proposal development (AADP, PE)",
      "Investor outreach support",
      "Financial modeling & business planning",
      "Consortia development for co-investment",
    ],
  },
  {
    icon: "\u{1F331}",
    title: "Sustainability & Innovation Implementation",
    description:
      "We make clean energy, agri-business, and climate innovation commercially viable across East and Southern Africa.",
    items: [
      "Solar & clean energy (PAYGO, cold chain)",
      "Agri-business commercialization",
      "Clean cooking & e-mobility advisory",
      "Value chain upgrades & branding",
    ],
  },
];

export const SECTORS: Sector[] = [
  {
    icon: "\u2600\uFE0F",
    title: "Energy & Renewables",
    subtitle: "Solar, Clean Cooking, Cold Chain",
  },
  {
    icon: "\u{1F3EA}",
    title: "Retail & FMCG",
    subtitle: "Pharma Chains, Local Brands",
  },
  {
    icon: "\u{1F33E}",
    title: "Agribusiness",
    subtitle: "Apiculture, Processing, Exports",
  },
  {
    icon: "\u{1F48A}",
    title: "Health & Wellness",
    subtitle: "Apitherapy, Cosmetics, Natural",
  },
  {
    icon: "\u{1F4F1}",
    title: "Digital & FinTech",
    subtitle: "PAYGO, E-commerce, Payments",
  },
];

export const PAN_AFRICAN_FEATURES: PanAfricanFeature[] = [
  {
    icon: "\u{1F30D}",
    title: "Deep Local Intelligence",
    description:
      "Direct relationships with policy influencers, industry leaders, retailers, and local partners across 15+ African markets.",
  },
  {
    icon: "\u{1F91D}",
    title: "JV-Ready Network",
    description:
      "A network of trusted entities in energy, agri-processing, retail, and infrastructure ready for joint ventures and PPPs.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Project Origination & Deal Structuring",
    description:
      "We originate and structure JVs and PPPs in target African markets \u2014 from opportunity sourcing to negotiation and localization.",
  },
  {
    icon: "\u{1F3DB}\uFE0F",
    title: "Donor & Development Partner Access",
    description:
      "Well-placed to co-design or lead market-systems approaches with EU, AADP, USAID, and other institutions.",
  },
];

export const REACH_TAGS: string[] = [
  "Trade & Distribution",
  "Retail & FMCG",
  "Construction & Infrastructure",
  "Logistics & Supply Chain",
  "Mining & Extractives",
  "Renewable Energy & CleanTech",
  "Manufacturing & Industrial",
];

export const DRIVES_VALUES: DriveValue[] = [
  {
    title: "Business Meets Purpose",
    description:
      "Our ability to blend business acumen with purpose \u2014 turning development goals into bankable business models that attract real investment.",
  },
  {
    title: "Trust & Access",
    description:
      "The trust and access we\u2019ve built with high-level stakeholders \u2014 from funders to retailers to innovators \u2014 across the continent.",
  },
  {
    title: "Quiet Enablers",
    description:
      "Being a quiet enabler behind bold African brands and solutions making a difference. Remaining agile, professional, and personal in everything we do.",
  },
];

export const CONTACT_INFO = {
  email: "kinoti@nineyardconsult.com",
  phones: ["+254 729 297 355", "+254 784 740 812"],
  linkedin: "Nineyard Consult Group",
  linkedinUrl: "https://www.linkedin.com/company/72697017/",
};

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: 1,
    title: "Study",
    description:
      "Appraisal of market landscape, competitors, regulatory environment, and opportunities in target markets.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "Develop go-to-market strategies considering partnerships, distribution channels, and investment readiness.",
  },
  {
    number: 3,
    title: "Implement",
    description:
      "Define market entry models, structure deals, and execute across diverse segments and geographies.",
  },
  {
    number: 4,
    title: "Monitor",
    description:
      "Assess cost-to-serve, track KPIs, and optimize for sustainable long-term profitability and impact.",
  },
];

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ConsultingBusiness",
  name: "Nineyard Consult Group Ltd",
  url: "https://www.nineyardconsult.com",
  logo: "https://www.nineyardconsult.com/logo.jpg",
  description:
    "Boutique strategy and business development advisory firm catalyzing growth for African businesses and sustainable innovations.",
  email: "kinoti@nineyardconsult.com",
  telephone: ["+254729297355", "+254784740812"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  areaServed: {
    "@type": "Continent",
    name: "Africa",
  },
  knowsAbout: [
    "Go-to-market strategy",
    "Investment readiness",
    "Clean energy advisory",
    "FMCG consulting",
    "Supply chain strategy",
    "Agribusiness commercialization",
    "Market entry Africa",
  ],
  sameAs: [],
};
