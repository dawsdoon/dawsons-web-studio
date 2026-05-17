import {
  SparkIcon,
  CodeIcon,
  RocketIcon,
  ServerIcon,
  ShieldCheckIcon,
  WrenchIcon,
  MailIcon,
  GlobeIcon,
  ChartIcon,
  ActivityIcon,
  LockIcon,
  ZapIcon,
  LayersIcon,
  CheckCircleIcon,
} from "../components/icons.jsx";

export const studioPipeline = [
  { icon: SparkIcon, label: "Design", desc: "Custom layout and brand feel — sized to your package, not a cookie-cutter template." },
  { icon: CodeIcon, label: "Build", desc: "Mobile-first pages built clean and fast — from a one-page landing to a full business site." },
  { icon: RocketIcon, label: "Deploy", desc: "Forms, CTAs, SSL, and launch QA so customers can actually reach you." },
  { icon: ServerIcon, label: "Host", desc: "Domain and hosting set up through Dawson's Web Studio — one invoice, no extra vendors." },
  { icon: ShieldCheckIcon, label: "Protect", desc: "SSL on every launch; backups and monthly checkups on care plans from $40/mo." },
  { icon: WrenchIcon, label: "Support", desc: "Routine text, photo, and hour updates handled when you are on a care plan." },
];

export const capabilities = [
  { icon: SparkIcon, title: "Custom website design", desc: "Landings from $350, starter sites from $550, redesigns from $600, and full builds at $1,000.", accent: "from-cyan-400/25 to-blue-600/10" },
  { icon: CodeIcon, title: "Mobile-first development", desc: "Every package is built to look professional on phones — where most local customers browse.", accent: "from-sky-400/25 to-indigo-600/10" },
  { icon: LayersIcon, title: "Website redesigns", desc: "Same business, modern look — typically $600–$800 depending on your current site size.", accent: "from-violet-400/25 to-purple-600/10" },
  { icon: ServerIcon, title: "Hosting on one invoice", desc: "I set up hosting and bill through the studio so you are not juggling separate providers.", accent: "from-emerald-400/25 to-teal-600/10" },
  { icon: GlobeIcon, title: "Domain & SSL setup", desc: "DNS, SSL, and domain connection handled at launch — included on every build package.", accent: "from-blue-400/25 to-cyan-600/10" },
  { icon: WrenchIcon, title: "Care plans from $40/mo", desc: "Hosting, checkups, backups, and help with routine edits after your site is live.", accent: "from-fuchsia-400/25 to-pink-600/10" },
  { icon: MailIcon, title: "Support after launch", desc: "Email support on every build; care plans add priority help and faster turnaround.", accent: "from-amber-400/20 to-orange-600/10" },
  { icon: ChartIcon, title: "SEO & analytics", desc: "Basic SEO on all builds; Google Analytics on Business Studio and ongoing check-ins on Care Plus.", accent: "from-lime-400/20 to-emerald-600/10" },
  { icon: ActivityIcon, title: "Uptime monitoring", desc: "Included on Care Plus ($60/mo) so problems get caught before customers notice.", accent: "from-rose-400/20 to-red-600/10" },
  { icon: LockIcon, title: "Backups & security", desc: "Launch-time hygiene on new builds; ongoing backups and checkups on care plans.", accent: "from-slate-300/15 to-slate-600/10" },
  { icon: ZapIcon, title: "Performance", desc: "Solid speed on every build; a full performance pass included on Business Studio.", accent: "from-yellow-300/20 to-amber-600/10" },
  { icon: CheckCircleIcon, title: "Content updates", desc: "Hours, services, photos, and promos — routine changes handled on Care Essentials and Care Plus.", accent: "from-cyan-300/20 to-blue-600/10" },
];

export const capabilitiesHighlight = capabilities.slice(0, 6);

export const trustInsights = [
  { stat: "75%", title: "Credibility starts with design", text: "Visitors decide whether they trust a business in seconds. An outdated site quietly costs you leads.", icon: SparkIcon },
  { stat: "61%", title: "Mobile is non-negotiable", text: "If your site feels broken on a phone, customers leave for a competitor who looks more professional.", icon: GlobeIcon },
  { stat: "53%", title: "Speed kills conversions", text: "Slow pages feel untrustworthy. Performance work is not nerdy — it is revenue protection.", icon: ZapIcon },
  { stat: "2×", title: "Redesigns rebuild trust", text: "Modern layout, clear messaging, and strong visuals make local businesses feel established instantly.", icon: LayersIcon },
];

export const whyChooseStudio = [
  "One invoice for hosting and routine updates through the studio",
  "Clear packages — $350 landing · $550 starter · $600+ redesign · $1,000 full build",
  "Premium look without agency pricing — this site shows the standard",
  "Local and reachable — not a faceless template shop",
  "Care from $40/mo when you want edits handled for you",
];

export const buildPackages = [
  {
    name: "Quick Landing",
    price: "$350",
    tagline: "Campaign pages & limited-time offers",
    idealFor: "Events, offers, and getting online fast",
    details: ["1 conversion-focused page", "Mobile-first layout", "Contact form & clear CTA", "Basic SEO & SSL", "Domain + hosting setup", "7-day email support"],
    mailSubject: "Quick Landing Inquiry",
  },
  {
    name: "Starter Presence",
    price: "$550",
    tagline: "Your first professional web presence",
    idealFor: "1–3 pages to establish trust online",
    details: ["Custom 1–3 pages", "Mobile-first design", "Contact form & CTAs", "Basic SEO structure", "Domain + hosting setup", "14-day email support"],
    mailSubject: "Starter Presence Inquiry",
  },
  {
    name: "Website Redesign",
    price: "From $600",
    priceDetail: "Most redesigns $600–$800 depending on your current site",
    tagline: "Modernize the site you already have",
    idealFor: "Same business, modern look that works on phones",
    details: ["Modernize your existing pages", "Mobile-friendly layout refresh", "Cleaner UX & visual upgrade", "Forms & CTAs fixed or improved", "Basic SEO touch-up & SSL", "Hosting reconnect if needed", "14-day email support"],
    mailSubject: "Website Redesign Inquiry",
  },
  {
    name: "Business Studio",
    price: "$1,000",
    tagline: "Complete multi-page business sites",
    idealFor: "4–5 page business sites with room to grow",
    details: ["4–5 custom pages", "Service-focused layout", "Google Analytics setup", "SEO structure & performance pass", "Hosting deployment", "30-day post-launch support"],
    mailSubject: "Business Studio Inquiry",
  },
];

export const carePlans = [
  {
    name: "Care Essentials",
    price: "$40/mo",
    tagline: "Hosting, checkups & routine edits",
    details: ["Hosting + domain through Dawson's Web Studio", "SSL & monthly health checkup", "Help with text, photo & hour updates", "Backups & bug fixes", "Email support"],
    mailSubject: "Care Essentials Inquiry",
  },
  {
    name: "Care Plus",
    price: "$60/mo",
    tagline: "Priority support, analytics & uptime",
    details: ["Everything in Care Essentials", "Analytics check-ins", "Uptime monitoring", "Priority help with edits & changes", "SEO tune-ups", "Faster response time"],
    mailSubject: "Care Plus Inquiry",
  },
];

export const packageComparison = [
  { feature: "Custom design", quick: "1 page", starter: "1–3 pages", redesign: "Refresh", business: "4–5 pages", careEssential: false, carePlus: false },
  { feature: "Domain + hosting", quick: "Setup", starter: "Setup", redesign: "Reconnect", business: "Setup", careEssential: "Ongoing", carePlus: "Ongoing" },
  { feature: "Google Analytics", quick: false, starter: false, redesign: false, business: true, careEssential: false, carePlus: true },
  { feature: "Help with updates", quick: false, starter: false, redesign: false, business: false, careEssential: true, carePlus: true },
  { feature: "Uptime monitoring", quick: false, starter: false, redesign: false, business: false, careEssential: false, carePlus: true },
];

export const process = [
  { icon: MailIcon, title: "1. Discover", text: "We talk goals, pages, and budget — then match you to Quick Landing, Starter, Redesign, or Business Studio." },
  { icon: SparkIcon, title: "2. Design", text: "Custom layout and visual direction that fit your business, not a generic theme." },
  { icon: CodeIcon, title: "3. Build", text: "Mobile-first development with clean structure — scoped to the package you chose." },
  { icon: RocketIcon, title: "4. Deploy", text: "Domain, hosting, forms, SSL, and testing — billed through one studio invoice." },
  { icon: ServerIcon, title: "5. Host & grow", text: "SEO basics on every build; analytics and a performance pass on Business Studio. Care Plus adds monitoring." },
  { icon: WrenchIcon, title: "6. Care optional", text: "Stay on Care Essentials ($40/mo) or Care Plus ($60/mo) for hosting, backups, and help with updates." },
];

export const serviceMockups = [
  {
    id: "mockup-business-websites",
    slug: "northline",
    service: "Business websites",
    label: "Local business website",
    business: "Northline Auto Detailing",
    headline: "Premium mobile detailing that makes every vehicle feel showroom-ready.",
    subtext: "Fictional example of a Starter or Business Studio layout — your site can match this quality for any trade.",
    cta: "Book a detail",
    accent: "from-cyan-300 via-blue-500 to-slate-950",
    palette: "cyan",
    chips: ["Interior detailing", "Paint protection", "Mobile service", "Ceramic coating"],
    stats: ["4.9★ rating", "500+ cars detailed", "Same-week booking"],
    sections: [
      { title: "Interior Reset", text: "Deep vacuum, plastics, leather care, windows, odor treatment, and stain attention." },
      { title: "Exterior Gloss", text: "Foam wash, wheel cleaning, clay bar prep, wax, sealants, and a clean final finish." },
      { title: "Ceramic Protection", text: "Longer-lasting protection packages for customers who want a higher-end result." },
    ],
    testimonial: "My truck looked better than when I bought it. The booking was easy and the site made the packages simple to understand.",
    gallery: ["Before", "Foam Wash", "Interior", "Final Shine"],
    pricing: ["Express Detail", "Full Detail", "Ceramic Package"],
  },
  {
    id: "mockup-website-redesigns",
    slug: "prairie-dental",
    service: "Website redesigns",
    label: "Before vs after redesign",
    business: "Prairie Dental Care",
    headline: "Transform an outdated business website into something modern, clean, and trustworthy.",
    subtext: "Fictional before-and-after — the kind of upgrade Website Redesign delivers, usually $600–$800.",
    cta: "View redesign",
    accent: "from-violet-300 via-purple-500 to-slate-950",
    palette: "violet",
    chips: ["Before/after", "Modern UI", "Cleaner layout", "Mobile redesign"],
    stats: ["Modern UI", "Higher trust", "Cleaner UX"],
    sections: [
      { title: "Old Website Problems", text: "Small text, outdated layouts, weak navigation, poor spacing, and confusing information structure." },
      { title: "Modern Upgrade", text: "Large hero sections, strong typography, cleaner colors, and modern layouts that feel more trustworthy." },
      { title: "Business Impact", text: "A redesign helps customers trust the business more and makes booking/contacting easier." },
    ],
    testimonial: "The redesign instantly made the clinic feel more professional and easier to navigate.",
    gallery: ["Old Layout", "New Hero", "Services", "Booking Flow"],
    pricing: ["Refresh", "Full Redesign", "Premium Rebuild"],
  },
  {
    id: "mockup-landing-pages",
    slug: "peakfit",
    service: "Landing pages",
    label: "Campaign landing page",
    business: "PeakFit 30-Day Challenge",
    headline: "A focused 30-day fitness challenge built for busy people who want structure.",
    subtext: "Fictional campaign page — similar to Quick Landing ($350) for promos, events, or limited-time offers.",
    cta: "Join the challenge",
    accent: "from-lime-300 via-emerald-500 to-slate-950",
    palette: "emerald",
    chips: ["30-day plan", "Meal guide", "Coach check-ins", "Beginner friendly"],
    stats: ["30 days", "4 workouts/week", "High conversion"],
    sections: [
      { title: "Clear Offer", text: "The page focuses on a single offer with clear messaging and strong calls-to-action." },
      { title: "Modern Visuals", text: "Smooth gradients, motion, and premium layouts make the page feel modern and energetic." },
      { title: "Built to Convert", text: "The structure guides visitors toward signup using social proof, benefits, and repeated CTA sections." },
    ],
    testimonial: "The page felt modern and exciting. It immediately made the challenge look professional.",
    gallery: ["Hero Offer", "Benefits", "Testimonials", "Signup"],
    pricing: ["Starter", "Plus Coaching", "Full Support"],
  },
];

export function validateLandingPageData() {
  return serviceMockups.length === 3 && serviceMockups.every((mockup) => mockup.id && mockup.slug && mockup.sections.length === 3 && mockup.gallery.length === 4 && mockup.pricing.length === 3);
}
