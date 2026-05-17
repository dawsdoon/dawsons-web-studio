import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "hello@example.com";
const CONTACT_PHONE = "+10000000000";

function Icon({ children, className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </Icon>
  );
}

function GlobeIcon({ className }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

function WrenchIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4z" />
    </Icon>
  );
}

function RocketIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M4.5 16.5c-1.5 1.2-2 3.5-2 3.5s2.3-.5 3.5-2c.7-.8.6-2.1-.1-2.8-.7-.7-2-.8-2.8-.1z" />
      <path d="M9 15 15 9" />
      <path d="M15 9h4l2-6-6 2v4z" />
      <path d="M9 15v-4l-6 2 2 2h4z" />
      <path d="M15 9v4l-2 2h-4" />
    </Icon>
  );
}

function MailIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

function PhoneIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.67 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.67A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

function CodeIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </Icon>
  );
}

function SparkIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="M4.22 4.22l3.54 3.54" />
      <path d="M16.24 16.24l3.54 3.54" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="M4.22 19.78l3.54-3.54" />
      <path d="M16.24 7.76l3.54-3.54" />
    </Icon>
  );
}

function ServerIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <path d="M6 7h.01M6 18h.01" />
    </Icon>
  );
}

function ChartIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </Icon>
  );
}

function ZapIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </Icon>
  );
}

function LockIcon({ className }) {
  return (
    <Icon className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </Icon>
  );
}

function LayersIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="m12 2 9 4.5v7L12 18l-9-4.5v-7L12 2z" />
      <path d="m12 18 9 20.5 3 17V10" />
      <path d="m12 18 15 20.5 21 17V10" />
    </Icon>
  );
}

function ActivityIcon({ className }) {
  return (
    <Icon className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

function StudioLogoIcon({ className = "h-10 w-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="studioLogoGrad" x1="8" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#studioLogoGrad)" />
      <path
        d="M14 11h6.2a6.8 6.8 0 1 1 0 13.6H14V11z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandLogo({ className = "" }) {
  return (
    <a href="#top" className={`group flex items-center gap-3 font-bold tracking-tight ${className}`}>
      <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 320, damping: 18 }} className="shrink-0">
        <StudioLogoIcon className="h-10 w-10 drop-shadow-md shadow-cyan-500/25" />
      </motion.div>
      <span className="bg-gradient-to-r from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent">Dawson's Web Studio</span>
    </a>
  );
}

function QuoteButton({ href, children = "Get a Quote", className = "" }) {
  return (
    <Button
      asChild
      className={`group inline-flex h-auto items-center justify-center gap-2 rounded-full border border-cyan-200/50 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 px-6 py-2.5 text-sm font-bold tracking-tight text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-[1.03] hover:border-cyan-100 hover:shadow-[0_0_32px_rgba(34,211,238,0.5)] ${className}`}
    >
      <a href={href}>
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </Button>
  );
}

const STYLE_PREVIEW_NOTE =
  "Sample designs only — fictional businesses shown to demonstrate quality and style. Your site can be fully custom for any industry, brand, or layout you need.";

const studioPipeline = [
  { icon: SparkIcon, label: "Design", desc: "Custom layout and brand feel — sized to your package, not a cookie-cutter template." },
  { icon: CodeIcon, label: "Build", desc: "Mobile-first pages built clean and fast — from a one-page landing to a full business site." },
  { icon: RocketIcon, label: "Deploy", desc: "Forms, CTAs, SSL, and launch QA so customers can actually reach you." },
  { icon: ServerIcon, label: "Host", desc: "Domain and hosting set up through Dawson's Web Studio — one invoice, no extra vendors." },
  { icon: ShieldCheckIcon, label: "Protect", desc: "SSL on every launch; backups and monthly checkups on care plans from $40/mo." },
  { icon: WrenchIcon, label: "Support", desc: "Routine text, photo, and hour updates handled when you are on a care plan." },
];

const capabilities = [
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

const trustInsights = [
  { stat: "75%", title: "Credibility starts with design", text: "Visitors decide whether they trust a business in seconds. An outdated site quietly costs you leads.", icon: SparkIcon },
  { stat: "61%", title: "Mobile is non-negotiable", text: "If your site feels broken on a phone, customers leave for a competitor who looks more professional.", icon: GlobeIcon },
  { stat: "53%", title: "Speed kills conversions", text: "Slow pages feel untrustworthy. Performance work is not nerdy — it is revenue protection.", icon: ZapIcon },
  { stat: "2×", title: "Redesigns rebuild trust", text: "Modern layout, clear messaging, and strong visuals make local businesses feel established instantly.", icon: LayersIcon },
];

const HOSTING_NOTE = "Domain & hosting billed through Dawson's Web Studio — one simple invoice.";

const whyChooseStudio = [
  "One invoice for hosting and routine updates through the studio",
  "Clear packages — $350 landing · $550 starter · $600+ redesign · $1,000 full build",
  "Premium look without agency pricing — this site shows the standard",
  "Local and reachable — not a faceless template shop",
  "Care from $40/mo when you want edits handled for you",
];

const buildPackages = [
  {
    name: "Quick Landing",
    price: "$350",
    tagline: "One-page promos & Marketplace",
    idealFor: "Events, offers, and getting online fast",
    details: [
      "1 conversion-focused page",
      "Mobile-first layout",
      "Contact form & clear CTA",
      "Basic SEO & SSL",
      "Domain + hosting setup",
      "7-day email support",
    ],
    mailSubject: "Quick Landing Inquiry",
  },
  {
    name: "Starter Presence",
    price: "$550",
    tagline: "New local businesses",
    idealFor: "1–3 pages to establish trust online",
    details: [
      "Custom 1–3 pages",
      "Mobile-first design",
      "Contact form & CTAs",
      "Basic SEO structure",
      "Domain + hosting setup",
      "14-day email support",
    ],
    mailSubject: "Starter Presence Inquiry",
  },
  {
    name: "Website Redesign",
    price: "From $600",
    priceDetail: "Most redesigns $600–$800 depending on your current site",
    tagline: "Outdated sites — cold-call friendly",
    idealFor: "Same business, modern look that works on phones",
    details: [
      "Modernize your existing pages",
      "Mobile-friendly layout refresh",
      "Cleaner UX & visual upgrade",
      "Forms & CTAs fixed or improved",
      "Basic SEO touch-up & SSL",
      "Hosting reconnect if needed",
      "14-day email support",
    ],
    mailSubject: "Website Redesign Inquiry",
  },
  {
    name: "Business Studio",
    price: "$1,000",
    tagline: "Full new builds & rebuilds",
    idealFor: "4–5 page business sites with room to grow",
    details: [
      "4–5 custom pages",
      "Service-focused layout",
      "Google Analytics setup",
      "SEO structure & performance pass",
      "Hosting deployment",
      "30-day post-launch support",
    ],
    mailSubject: "Business Studio Inquiry",
  },
];

const carePlans = [
  {
    name: "Care Essentials",
    price: "$40/mo",
    tagline: "Hosting & updates handled for you",
    details: [
      "Hosting + domain through Dawson's Web Studio",
      "SSL & monthly health checkup",
      "Help with text, photo & hour updates",
      "Backups & bug fixes",
      "Email support",
    ],
    mailSubject: "Care Essentials Inquiry",
  },
  {
    name: "Care Plus",
    price: "$60/mo",
    tagline: "More support & monitoring",
    details: [
      "Everything in Care Essentials",
      "Analytics check-ins",
      "Uptime monitoring",
      "Priority help with edits & changes",
      "SEO tune-ups",
      "Faster response time",
    ],
    mailSubject: "Care Plus Inquiry",
  },
];

const packageComparison = [
  { feature: "Custom design", quick: "1 page", starter: "1–3 pages", redesign: "Refresh", business: "4–5 pages", careEssential: false, carePlus: false },
  { feature: "Domain + hosting", quick: "Setup", starter: "Setup", redesign: "Reconnect", business: "Setup", careEssential: "Ongoing", carePlus: "Ongoing" },
  { feature: "Google Analytics", quick: false, starter: false, redesign: false, business: true, careEssential: false, carePlus: true },
  { feature: "Help with updates", quick: false, starter: false, redesign: false, business: false, careEssential: true, carePlus: true },
  { feature: "Uptime monitoring", quick: false, starter: false, redesign: false, business: false, careEssential: false, carePlus: true },
];

const process = [
  { icon: MailIcon, title: "1. Discover", text: "We talk goals, pages, and budget — then match you to Quick Landing, Starter, Redesign, or Business Studio." },
  { icon: SparkIcon, title: "2. Design", text: "Custom layout and visual direction that fit your business, not a generic theme." },
  { icon: CodeIcon, title: "3. Build", text: "Mobile-first development with clean structure — scoped to the package you chose." },
  { icon: RocketIcon, title: "4. Deploy", text: "Domain, hosting, forms, SSL, and testing — billed through one studio invoice." },
  { icon: ServerIcon, title: "5. Host & grow", text: "SEO basics on every build; analytics and a performance pass on Business Studio. Care Plus adds monitoring." },
  { icon: WrenchIcon, title: "6. Care optional", text: "Stay on Care Essentials ($40/mo) or Care Plus ($60/mo) for hosting, backups, and help with updates." },
];

const showcases = [
  { title: "Clear package pricing", desc: "Landings, starters, redesigns, and full builds — upfront numbers, no mystery quotes." },
  { title: "One bill for hosting", desc: "Domain and hosting through the studio so owners are not chasing three vendors." },
  { title: "Redesigns that rebuild trust", desc: "Outdated local sites modernized — usually $600–$800 depending on size." },
  { title: "Mobile-first by default", desc: "Every package is built for phones first, because that is how customers find you." },
  { title: "Care after launch", desc: "Optional $40–$60/mo plans for checkups, backups, and routine content changes." },
  { title: "Style you can preview", desc: "Fictional sample layouts show quality — your final site is custom to your brand." },
];

const serviceMockups = [
  {
    id: "mockup-business-websites",
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
    service: "Landing pages",
    label: "Campaign landing page",
    business: "PeakFit 30-Day Challenge",
    headline: "A focused 30-day fitness challenge built for busy people who want structure.",
    subtext: "Fictional campaign page — similar to Quick Landing ($350) for promos, Marketplace, or limited-time offers.",
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

function createMailLink(subject = "Website Project Inquiry") {
  const body =
    "Hi Dawson,%0D%0A%0D%0AI am interested in a website for my business.%0D%0A%0D%0ABusiness name:%0D%0APackage (Quick Landing / Starter / Redesign / Business Studio / Care / not sure):%0D%0AWebsite goal:%0D%0AEst. number of pages:%0D%0ATimeline:%0D%0A%0D%0AThanks!";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

function validateLandingPageData() {
  return serviceMockups.length === 3 && serviceMockups.every((mockup) => mockup.id && mockup.sections.length === 3 && mockup.gallery.length === 4 && mockup.pricing.length === 3);
}

function SectionReveal({ children, className = "", id }) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, ease: "easeOut" }} className={className}>
      {children}
    </motion.section>
  );
}

function FadeIn({ children, className = "", delay = 0, y = 24 }) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, description, centered = true }) {
  return (
    <FadeIn className={`mb-12 md:mb-14 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      {description && <p className={`mt-4 text-lg leading-8 text-slate-300 ${centered ? "mx-auto max-w-2xl" : ""}`}>{description}</p>}
    </FadeIn>
  );
}

const glassCardClass =
  "group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-xl shadow-black/30 backdrop-blur-xl ring-1 ring-white/10 transition duration-300 hover:border-cyan-200/35 hover:shadow-2xl hover:shadow-cyan-500/10";

function FullStudioSection() {
  return (
    <SectionReveal id="full-service" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_45%)]" />
      <SectionHeader
        eyebrow="Full-service web studio"
        title="One partner from design through hosting — with clear package pricing"
        description="I design, build, and launch your site, then can keep hosting and routine updates on a simple care plan. Landings from $350, redesigns from $600, full business sites at $1,000 — all with one studio invoice for hosting."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studioPipeline.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className={`${glassCardClass} relative flex min-h-[200px] flex-col p-7 md:p-8`}
            >
              <div className="mb-5 flex items-center justify-between">
                <motion.div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30">
                  <StepIcon className="h-5 w-5" />
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-200/80">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{step.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
      <FadeIn className="mx-auto mt-12 max-w-4xl">
        <motion.div className="rounded-[2rem] border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-8 text-center backdrop-blur-xl md:p-10">
          <p className="text-lg font-semibold text-white md:text-xl">Tell me about your business and I will recommend the right fit — a quick landing, starter site, redesign, or full Business Studio build.</p>
          <motion.div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <QuoteButton href={createMailLink("Website Quote Request")} />
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10 hover:text-white">
              <a href="#pricing">View packages & pricing</a>
            </Button>
          </motion.div>
        </motion.div>
      </FadeIn>
    </SectionReveal>
  );
}

function CapabilitiesSection() {
  return (
    <SectionReveal id="capabilities" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="What I handle for you"
        title="Build, launch, and support — scoped to real packages"
        description="Not every service is on every tier — but you always get a clear scope. Builds cover design through launch; care plans cover hosting, checkups, and routine edits on one monthly bill."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item, index) => {
          const CapIcon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`${glassCardClass} flex min-h-[220px] flex-col bg-gradient-to-br ${item.accent} p-7 md:p-8`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                <CapIcon className="h-5 w-5 text-cyan-100" />
              </div>
              <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionReveal>
  );
}

function TrustSection() {
  return (
    <SectionReveal id="why-it-matters" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <SectionHeader
        eyebrow="Why it matters"
        title="Modern websites win trust. Outdated ones lose customers."
        description="Local businesses lose leads when their site looks outdated or breaks on a phone. Website Redesign ($600–$800) fixes that look; Starter and Business Studio packages build trust from scratch."
      />
      <motion.div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {trustInsights.map((item, index) => {
          const TrustIcon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`${glassCardClass} flex gap-6 p-8 md:p-10`}
            >
              <div className="shrink-0">
                <p className="text-4xl font-black tracking-tight text-cyan-200 md:text-5xl">{item.stat}</p>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <TrustIcon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionReveal>
  );
}

function OperationsDashboardSection() {
  const bars = [42, 58, 48, 72, 65, 88, 76];

  return (
    <SectionReveal id="growth-ops" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Growth & reliability"
            title="SEO and analytics where they belong — not bundled into every tier"
            description="Every build gets SEO basics and SSL. Business Studio adds Google Analytics and a launch performance pass; Care Plus adds monitoring, analytics check-ins, and SEO tune-ups over time."
            centered={false}
          />
          <motion.div className="mt-8 space-y-4">
            {[
              "SEO basics & search-ready pages (all build packages)",
              "Google Analytics at launch (Business Studio)",
              "Uptime monitoring & alerts (Care Plus)",
              "Backups & monthly checkups (Care plans)",
              "Performance pass at launch (Business Studio)",
            ].map((line, i) => (
              <motion.div key={line} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-200" />
                <span className="text-sm text-slate-200 md:text-base">{line}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-4 top-8 z-10 rounded-2xl border border-emerald-400/30 bg-emerald-400/15 px-4 py-3 text-xs font-semibold text-emerald-100 shadow-xl backdrop-blur-xl">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Example: Care Plus monitoring</span>
          </motion.div>
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <CardContent className="p-0">
              <motion.div className="border-b border-white/10 bg-white/5 px-6 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-white">Studio dashboard</p>
                  <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-100">Live</span>
                </div>
              </motion.div>
              <div className="space-y-6 p-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Visitors", value: "2.4k", delta: "+18%" },
                    { label: "Uptime", value: "99.9%", delta: "30 days" },
                    { label: "Speed", value: "94", delta: "Score" },
                  ].map((metric, i) => (
                    <motion.div key={metric.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-slate-400">{metric.label}</p>
                      <p className="mt-1 text-xl font-black text-white">{metric.value}</p>
                      <p className="mt-1 text-xs font-semibold text-cyan-200">{metric.delta}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Weekly traffic</p>
                  <div className="flex h-32 items-end gap-2">
                    {bars.map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }} className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 to-blue-400" />
                    ))}
                  </div>
                </div>
                <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-4 py-3 text-sm">
                  <span className="text-slate-200">Latest backup completed</span>
                  <span className="font-bold text-white">2h ago</span>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

function HostingMaintenanceSection() {
  return (
    <SectionReveal id="maintenance" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.12),transparent_35%)]" />
        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-14">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Hosting & maintenance</p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Your site stays live, fast, and cared for after launch</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">After launch, optional care plans keep hosting, domain, SSL, backups, and routine edits on one invoice. Care Essentials is <strong className="text-white">$40/mo</strong>; Care Plus ($60/mo) adds uptime monitoring and analytics check-ins.</p>
            <Button asChild className="mt-8 rounded-2xl bg-white px-6 py-6 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200">
              <a href="#pricing">See care plans from $40/mo</a>
            </Button>
          </div>
          <div className="space-y-4">
            {[
              { icon: ServerIcon, title: "Hosting on one bill", text: "Domain, hosting, and SSL through Dawson's Web Studio — included on care plans." },
              { icon: ActivityIcon, title: "Uptime monitoring", text: "Included on Care Plus so issues get flagged before customers notice." },
              { icon: LockIcon, title: "Backups & checkups", text: "Monthly health checkups and backups on Care Essentials and Care Plus." },
              { icon: WrenchIcon, title: "Routine edits", text: "Text, photos, hours, and promos — help included on care plans, not on one-time builds alone." },
            ].map((row, i) => {
              const RowIcon = row.icon;
              return (
                <motion.div key={row.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ x: 6 }} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-100">
                    <RowIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{row.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-400">{row.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

function ShowcaseSection() {
  return (
    <SectionReveal id="showcase" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeader
        eyebrow="Why work with the studio"
        title="Premium results without agency pricing or confusion"
        description="Clear packages, one hosting invoice, and a site that looks modern on mobile — built for local owners who want it done right, not DIY."
      />
      <div className="mx-auto grid max-w-6xl auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showcases.map((item, index) => (
          <motion.a
            href="#mockups"
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="block h-full"
          >
            <div className={`${glassCardClass} flex min-h-[220px] flex-col p-7 md:p-8`}>
              <motion.div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-200 text-slate-950 shadow-lg shadow-cyan-500/20">
                <SparkIcon className="h-6 w-6" />
              </div>
              <h3 className="relative text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-300">{item.desc}</p>
              <p className="relative mt-6 inline-flex items-center text-sm font-semibold text-cyan-200">
                Browse style previews
                <ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionReveal>
  );
}

function ServicesSection({ onOpenMockup }) {
  return (
    <SectionReveal id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeader
        eyebrow="Matches your package"
        title="Style previews for landing pages, redesigns, and business sites"
        description="Fictional examples only — they map to Quick Landing, Website Redesign, and Starter/Business Studio quality. Your final site is custom to your industry."
      />
      <motion.div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {serviceMockups.map((mockup, index) => (
          <motion.button
            type="button"
            key={mockup.service}
            onClick={() => onOpenMockup(mockup.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -8 }}
            className="h-full text-left"
          >
            <div className={`${glassCardClass} flex min-h-[200px] flex-col p-7 md:p-8`}>
              <div className="mb-6 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30">
                  <CheckCircleIcon className="h-6 w-6 text-cyan-200" />
                </div>
                <ArrowRightIcon className="h-5 w-5 shrink-0 text-cyan-200/80 transition group-hover:translate-x-1 group-hover:text-cyan-100" />
              </div>
              <h3 className="text-lg font-bold text-white">{mockup.service}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">Example only: {mockup.business}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-cyan-200/90">Preview style example</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </SectionReveal>
  );
}

function ProcessSection() {
  return (
    <SectionReveal id="process" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="How it works"
        title="From first call to launch — then care if you want it"
        description="Pick a build package, go live with one hosting invoice, and add Care Essentials or Care Plus only if you want ongoing help."
      />
      <motion.div className="mx-auto grid max-w-6xl auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {process.map((item, index) => {
          const ProcessIcon = item.icon;
          return (
            <motion.a
              href={index >= 4 ? "#maintenance" : index === 3 ? "#pricing" : index === 0 ? "#pricing" : "#contact"}
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="block h-full"
            >
              <div className={`${glassCardClass} flex min-h-[240px] flex-col p-7 md:p-8`}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-cyan-500/25">
                  <ProcessIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{item.text}</p>
                <p className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200">
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </SectionReveal>
  );
}

function ComparisonCell({ value }) {
  if (value === true) {
    return <CheckCircleIcon className="mx-auto h-4 w-4 text-cyan-200" />;
  }
  if (value === false) {
    return <span className="text-slate-600">—</span>;
  }
  return <span className="text-xs text-slate-300 md:text-sm">{value}</span>;
}

function PackageCard({ pkg, index, variant = "build" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <motion.div
        className={`${glassCardClass} flex h-full flex-col p-7 md:p-8 ${variant === "build" ? "min-h-[480px]" : "min-h-[400px]"}`}
      >
        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
        <p className="mt-2 text-sm text-cyan-200/90">{pkg.tagline}</p>
        {pkg.idealFor && <p className="mt-2 text-xs leading-6 text-slate-400">{pkg.idealFor}</p>}
        <p className="mt-4 text-3xl font-black tracking-tight text-white">{pkg.price}</p>
        {pkg.priceDetail && <p className="mt-2 text-xs leading-6 text-slate-400">{pkg.priceDetail}</p>}
        <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-300">
          {pkg.details.map((detail) => (
            <li key={detail} className="flex gap-3 leading-6">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs leading-5 text-slate-500">{HOSTING_NOTE}</p>
        <Button asChild className="mt-6 w-full rounded-2xl bg-white py-6 font-semibold text-slate-950 shadow-lg shadow-white/10 hover:bg-slate-200">
          <a href={createMailLink(pkg.mailSubject)}>Choose {pkg.name}</a>
        </Button>
      </motion.div>
    </motion.div>
  );
}

function PricingSection() {
  return (
    <SectionReveal id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="Packages & pricing"
        title="Clear local packages — one invoice for hosting"
        description="Websites from $350 · Redesigns from $600 · Full business sites $1,000 · Ongoing care from $40/mo. Domain and hosting run through Dawson's Web Studio so you get one bill."
      />

      <p className="mx-auto mb-8 max-w-3xl text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/90">One-time builds</p>
      <motion.div className="mx-auto grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {buildPackages.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} index={index} variant="build" />
        ))}
      </motion.div>

      <FadeIn className="mx-auto mt-10 max-w-4xl">
        <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-6 py-5 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-cyan-50/90 md:text-base">{HOSTING_NOTE}</p>
        </div>
      </FadeIn>

      <p className="mx-auto mb-8 mt-16 max-w-3xl text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/90">Monthly care</p>
      <motion.div className="mx-auto grid max-w-4xl auto-rows-fr items-stretch gap-6 md:grid-cols-2">
        {carePlans.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} index={index} variant="care" />
        ))}
      </motion.div>

      <FadeIn className="mx-auto mt-14 max-w-5xl">
        <motion.div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Why Dawson's Web Studio</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whyChooseStudio.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </FadeIn>

      <FadeIn className="mx-auto mt-14 max-w-6xl overflow-x-auto">
        <motion.div className="min-w-[640px] rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:p-6">
          <p className="mb-4 px-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Compare at a glance</p>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                <th className="px-3 py-3 font-semibold">Feature</th>
                <th className="px-2 py-3 text-center">Quick</th>
                <th className="px-2 py-3 text-center">Starter</th>
                <th className="px-2 py-3 text-center">Redesign</th>
                <th className="px-2 py-3 text-center">Business</th>
                <th className="px-2 py-3 text-center">Care $40</th>
                <th className="px-2 py-3 text-center">Care $60</th>
              </tr>
            </thead>
            <tbody>
              {packageComparison.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="px-3 py-3 font-medium text-slate-200">{row.feature}</td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.quick} /></td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.starter} /></td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.redesign} /></td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.business} /></td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.careEssential} /></td>
                  <td className="px-2 py-3 text-center"><ComparisonCell value={row.carePlus} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </FadeIn>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-500">
        Custom quotes for e-commerce, 8+ pages, copywriting, and logo design. Website Redesign modernizes what you have; Business Studio is for full new builds with analytics and growth setup.
      </p>
    </SectionReveal>
  );
}
function MockupShell({ onBack, accent, navLinks, children, ctaLabel = "Build something like this", mailSubject }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`min-h-screen scroll-smooth bg-slate-950 text-white ${accent}`}>
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
        <motion.div initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <button type="button" onClick={onBack} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/20">
            ← Portfolio
          </button>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200">
            <a href={createMailLink(mailSubject)}>{ctaLabel}</a>
          </Button>
        </motion.div>
      </header>
      <div className="relative z-40 border-b border-cyan-300/20 bg-cyan-400/10 px-6 py-3 text-center backdrop-blur-xl">
        <p className="mx-auto max-w-3xl text-xs leading-6 text-cyan-50/90 md:text-sm">{STYLE_PREVIEW_NOTE}</p>
      </div>
      <main className="relative z-10">{children}</main>
    </motion.div>
  );
}

function MockupsSection({ onOpenMockup }) {
  return (
    <SectionReveal id="mockups" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeader
        eyebrow="Style previews"
        title="See what your website could feel like"
        description="Three fictional layouts — landing page, redesign, and business site quality. Click through for inspiration; your site is custom to your brand."
      />
      <FadeIn className="mx-auto mb-10 max-w-3xl">
        <motion.div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-6 py-5 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-cyan-50/90 md:text-base">{STYLE_PREVIEW_NOTE}</p>
        </motion.div>
      </FadeIn>
      <div className="mx-auto max-w-6xl space-y-8">
        {serviceMockups.map((mockup, index) => (
          <MiniWebsiteMockup key={mockup.id} mockup={mockup} index={index} onOpen={onOpenMockup} />
        ))}
      </div>
    </SectionReveal>
  );
}

function MiniWebsiteMockup({ mockup, index, onOpen }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div id={mockup.id} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.7, ease: "easeOut" }} className={`grid scroll-mt-28 items-center gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:grid-cols-2 md:p-8 ${reversed ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <p className="mb-2 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Style preview</p>
        <p className="mb-3 text-xs text-slate-500">Fictional example · {mockup.label}</p>
        <h3 className="text-3xl font-black tracking-tight md:text-4xl">{mockup.business}</h3>
        <p className="mt-4 text-xl font-bold leading-tight text-white/90">{mockup.headline}</p>
        <p className="mt-4 leading-7 text-slate-300">{mockup.subtext}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {mockup.chips.map((chip) => <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-slate-200">{chip}</span>)}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => onOpen(mockup.id)} className="group rounded-2xl bg-white px-6 py-6 text-slate-950 hover:bg-slate-200">
            Preview this style
            <ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
          <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-white hover:bg-white/10 hover:text-white">
            <a href={createMailLink(`Website inspired by ${mockup.service}`)}>Build something like this</a>
          </Button>
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500">Any industry, any brand — this is only a visual starting point.</p>
      </div>
      <motion.button type="button" onClick={() => onOpen(mockup.id)} whileHover={{ y: -8, rotate: reversed ? -1 : 1 }} transition={{ type: "spring", stiffness: 180, damping: 16 }} className="text-left">
        <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40">
          <CardContent className="p-0">
            <div className={`bg-gradient-to-br ${mockup.accent} p-6 text-white`}>
              <div className="mb-5 flex items-center justify-between">
                <div className="h-8 w-28 rounded-full bg-white/80" />
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Style demo</span>
              </div>
              <div className="rounded-[1.5rem] bg-white/15 p-5 backdrop-blur-xl">
                <p className="mb-3 w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-950">{mockup.service}</p>
                <div className="h-8 w-4/5 rounded-xl bg-white/80" />
                <div className="mt-3 h-4 w-2/3 rounded-xl bg-white/50" />
                <div className="mt-5 flex h-11 w-36 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">Preview</div>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                {mockup.stats.map((stat) => <div key={stat} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-xs text-slate-200">{stat}</div>)}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="mb-3 h-9 w-9 rounded-2xl bg-cyan-200" /><div className="h-3 w-24 rounded-full bg-white/40" /><div className="mt-2 h-3 w-full rounded-full bg-white/20" /></div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="mb-3 h-9 w-9 rounded-2xl bg-fuchsia-200" /><div className="h-3 w-24 rounded-full bg-white/40" /><div className="mt-2 h-3 w-full rounded-full bg-white/20" /></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.button>
    </motion.div>
  );
}

function NorthlineAutoPage({ onBack }) {
  const nav = [
    { href: "#northline-hero", label: "Home" },
    { href: "#northline-services", label: "Services" },
    { href: "#northline-gallery", label: "Gallery" },
    { href: "#northline-pricing", label: "Pricing" },
    { href: "#northline-book", label: "Book" },
  ];

  const services = [
    { title: "Interior Reset", price: "From $149", desc: "Deep vacuum, plastics, leather conditioning, glass, and odor treatment.", features: ["Seat & carpet vacuum", "Dashboard detail", "Odor neutralizer"] },
    { title: "Exterior Gloss", price: "From $179", desc: "Foam wash, wheels, clay prep, wax, and a showroom-ready finish.", features: ["Foam cannon wash", "Wheel & tire shine", "Paint-safe wax"] },
    { title: "Ceramic Shield", price: "From $399", desc: "Premium protection for clients who want longer-lasting gloss and easier maintenance.", features: ["Paint decontamination", "Ceramic coating", "Hydrophobic finish"] },
  ];

  const packages = [
    { name: "Express Detail", price: "$149", items: ["Exterior wash & dry", "Interior vacuum", "Windows & tires"] },
    { name: "Full Detail", price: "$279", popular: true, items: ["Interior + exterior", "Clay bar prep", "Leather conditioning", "Engine bay wipe"] },
    { name: "Ceramic Package", price: "$499", items: ["Full detail included", "Paint correction prep", "12-month ceramic coat"] },
  ];

  const testimonials = [
    { quote: "My truck looked better than when I bought it. Booking took two minutes.", name: "Marcus T.", role: "Fleet owner" },
    { quote: "Northline made our work vans presentable for client visits again.", name: "Sarah L.", role: "Local contractor" },
    { quote: "The ceramic package was worth every dollar. Water beads off for weeks.", name: "James R.", role: "Repeat customer" },
  ];

  return (
    <MockupShell onBack={onBack} accent="" mailSubject="Northline Auto Style Website" navLinks={nav}>
      <section id="northline-hero" className="relative overflow-hidden border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />
        <motion.div animate={{ opacity: [0.35, 0.55, 0.35] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute right-8 top-28 hidden rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl md:block">
          Same-week booking available
        </motion.div>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute left-8 top-40 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl md:block">
          4.9★ · 500+ vehicles detailed
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
              Premium mobile detailing
            </p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Showroom shine.
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">Delivered to your driveway.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Northline Auto Detailing helps busy owners restore vehicles with professional interior resets, exterior gloss packages, and ceramic protection — all booked online in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-cyan-400 px-8 py-7 font-bold text-slate-950 hover:bg-cyan-300">
                Book a detail
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-8 py-7 text-white hover:bg-white/10">
                <a href="#northline-pricing">View packages</a>
              </Button>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 grid grid-cols-3 gap-3">
              {["4.9★ rating", "500+ cars", "Mobile service"].map((stat) => (
                <motion.div key={stat} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <p className="text-sm font-bold text-cyan-100">{stat}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950 p-8">
                <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 5, repeat: Infinity }} className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-slate-700 to-slate-900 p-6">
                  <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} className="flex h-full flex-col justify-end rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Featured finish</p>
                    <p className="mt-2 text-2xl font-black">Ceramic gloss package</p>
                    <p className="mt-1 text-sm text-slate-300">Paint-safe · Hydrophobic · Lasting protection</p>
                  </motion.div>
                </motion.div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Interior", "Exterior", "Ceramic"].map((tag) => (
                    <div key={tag} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs font-semibold text-slate-200">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="northline-services" className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="text-4xl font-black md:text-5xl">Packages built for real vehicle owners</h2>
          <p className="mt-4 text-lg text-slate-400">Clear service cards, transparent pricing, and strong calls-to-action — exactly what a local service business needs to convert visitors.</p>
        </FadeIn>
        <motion.div className="grid gap-6 md:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <motion.div whileHover={{ rotate: 6 }} className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <SparkIcon className="h-6 w-6" />
              </motion.div>
              <p className="text-sm font-bold text-cyan-300">{svc.price}</p>
              <h3 className="mt-2 text-2xl font-black">{svc.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{svc.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {svc.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/5 bg-cyan-950/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div whileHover={{ scale: 1.01 }} className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/20 to-slate-900 p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">Why customers trust Northline</p>
              <h3 className="mt-4 text-3xl font-black">Professional results without the dealership wait</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                {["Fully insured mobile team", "Paint-safe products only", "Before/after photo updates", "Flexible evening appointments"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheckIcon className="h-5 w-5 shrink-0 text-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-lg font-medium leading-8 text-white/90">"{t.quote}"</p>
                  <p className="mt-4 text-sm text-cyan-200">
                    {t.name} · {t.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="northline-gallery" className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gallery</p>
          <h2 className="text-4xl font-black md:text-5xl">Results that sell the service</h2>
        </FadeIn>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Before", grad: "from-slate-700 to-slate-900" },
            { label: "Foam wash", grad: "from-cyan-800 to-slate-900" },
            { label: "Interior", grad: "from-slate-800 to-cyan-950" },
            { label: "Final shine", grad: "from-cyan-600/40 to-blue-900" },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -8, scale: 1.02 }} className={`min-h-44 rounded-[1.5rem] bg-gradient-to-br ${item.grad} p-6 md:min-h-56 ${i === 0 || i === 3 ? "md:row-span-1" : ""}`}>
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">{item.label}</p>
              <p className="mt-auto pt-20 text-xl font-black">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="northline-pricing" className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Pricing</p>
          <h2 className="text-4xl font-black md:text-5xl">Simple packages. No surprises.</h2>
        </FadeIn>
        <motion.div className="grid gap-6 md:grid-cols-3" >
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -10 }} className={`rounded-[2rem] border p-8 backdrop-blur-xl ${pkg.popular ? "border-cyan-300/40 bg-cyan-400/10 shadow-xl shadow-cyan-500/20" : "border-white/10 bg-white/5"}`}>
              {pkg.popular && <p className="mb-4 w-fit rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">Most booked</p>}
              <h3 className="text-2xl font-black">{pkg.name}</h3>
              <p className="mt-2 text-4xl font-black text-cyan-200">{pkg.price}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 w-full rounded-2xl py-6 ${pkg.popular ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300" : "bg-white text-slate-950 hover:bg-slate-200"}`}>
                Book {pkg.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="northline-book" className="mx-auto max-w-5xl px-6 pb-28">
        <FadeIn>
          <motion.div whileHover={{ scale: 1.01 }} className="rounded-[2.5rem] border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-black md:text-5xl">Ready for a spotless vehicle?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Pick a package, choose a time, and Northline comes to you — this is how a modern local business website should convert.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="rounded-2xl bg-cyan-400 px-8 py-7 font-bold text-slate-950 hover:bg-cyan-300">
                <a href={createMailLink("Northline Style Booking Flow")}>Book now</a>
              </Button>
              <Button onClick={onBack} variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-8 py-7 text-white hover:bg-white/10">
                Back to portfolio
              </Button>
            </div>
          </motion.div>
        </FadeIn>
      </section>
    </MockupShell>
  );
}

function PrairieDentalPage({ onBack }) {
  const nav = [
    { href: "#dental-hero", label: "Overview" },
    { href: "#dental-compare", label: "Before / After" },
    { href: "#dental-ux", label: "UX Wins" },
    { href: "#dental-cta", label: "Contact" },
  ];

  return (
    <MockupShell onBack={onBack} accent="" mailSubject="Prairie Dental Redesign Inquiry" navLinks={nav}>
      <section id="dental-hero" className="relative overflow-hidden border-b border-violet-400/10 py-24">
        <motion.div animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 9, repeat: Infinity }} className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <p className="mb-4 inline-flex rounded-full border border-violet-300/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-violet-200">
              Website redesign showcase
            </p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">Prairie Dental Care</h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              See how an outdated clinic website becomes modern, trustworthy, and easy for patients to book — the kind of transformation local business owners instantly understand.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="dental-compare" className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Full comparison</p>
          <h2 className="text-4xl font-black md:text-6xl">Before vs after — side by side</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">Not tiny placeholders. Full realistic layouts that show cramped outdated design versus a premium patient experience.</p>
        </FadeIn>

        <div className="grid gap-10 xl:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2.5rem] border-2 border-red-400/20 shadow-2xl shadow-red-900/20">
            <div className="border-b border-red-400/20 bg-red-950/80 px-8 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-300">Before · outdated</p>
                  <p className="mt-1 text-sm text-red-200/70">Low trust · poor mobile UX</p>
                </div>
                <span className="rounded-full bg-red-500/30 px-4 py-1.5 text-xs font-bold text-red-100">Needs redesign</span>
              </div>
            </div>
            <div className="bg-[#d4d4d8] p-6 font-serif text-slate-800">
              <div className="overflow-hidden rounded border-2 border-[#999] bg-white shadow-inner">
                <div className="flex items-center justify-between border-b border-[#bbb] bg-[#1e3a8a] px-3 py-2 text-[10px] text-white">
                  <span className="font-bold">PRAIRIE DENTAL</span>
                  <div className="flex gap-2">
                    {["HOME", "ABOUT", "SERVICES", "CONTACT"].map((l) => (
                      <span key={l} className="underline">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-0 md:grid-cols-[1fr_140px]">
                  <div className="space-y-2 p-3">
                    <p className="text-[11px] font-bold text-[#1e3a8a]">Welcome to our dental office!!!</p>
                    <p className="text-[9px] leading-tight text-slate-600">
                      We have been serving the community for many years and offer quality dental care for your whole family. Click here to learn more about us.
                    </p>
                    <div className="h-16 w-full border border-[#ccc] bg-[#e8e8e8] text-center text-[8px] leading-[4rem] text-slate-500">[ stock photo ]</div>
                    <p className="text-[9px] text-blue-700 underline">Read more &gt;&gt;</p>
                    <table className="w-full border-collapse text-[8px]">
                      <tbody>
                        <tr className="bg-[#eee]">
                          <td className="border border-[#ccc] p-1 font-bold">Cleanings</td>
                          <td className="border border-[#ccc] p-1">Call for price</td>
                        </tr>
                        <tr>
                          <td className="border border-[#ccc] p-1 font-bold">Whitening</td>
                          <td className="border border-[#ccc] p-1">Call for price</td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="button" className="mt-1 bg-[#666] px-2 py-1 text-[9px] text-white">
                      Contact Us
                    </button>
                  </div>
                  <div className="hidden border-l border-[#ccc] bg-[#f0f0f0] p-2 md:block">
                    <p className="text-[8px] font-bold text-red-700">NEWS</p>
                    <p className="mt-2 text-[7px] leading-tight">Office closed Mondays in July maybe.</p>
                    <p className="mt-4 text-[8px] font-bold">HOURS</p>
                    <p className="text-[7px]">Mon-Fri 9-5</p>
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-red-900">
                {["Cramped layout & tiny text", "Weak visual hierarchy", "Generic stock-photo feel", "Booking buried in clutter", "Feels dated on mobile"].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-red-600">✕</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2.5rem] border-2 border-emerald-400/30 shadow-2xl shadow-emerald-900/20">
            <div className="border-b border-emerald-400/20 bg-emerald-950/60 px-8 py-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-200">After · redesigned</p>
                  <p className="mt-1 text-sm text-emerald-100/70">Premium · trustworthy · mobile-first</p>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-xs font-bold text-emerald-100">High conversion</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-6 text-slate-900">
              <div className="overflow-hidden rounded-[1.75rem] border border-teal-200/60 bg-white shadow-xl">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-teal-500" />
                    <span className="font-bold tracking-tight text-teal-900">Prairie Dental</span>
                  </div>
                  <div className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
                    {["Services", "Team", "Reviews", "Book"].map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </div>
                  <span className="rounded-full bg-teal-500 px-4 py-2 text-xs font-bold text-white">Book visit</span>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 px-8 py-12 text-white">
                  <p className="text-sm font-semibold text-teal-100">Family & cosmetic dentistry</p>
                  <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Gentle care. Modern comfort. Same-week appointments.</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-teal-50">A calming, professional experience from the first click — built to help nervous patients feel confident booking online.</p>
                  <div className="mt-8 flex gap-3">
                    <span className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-teal-800">Schedule online</span>
                    <span className="rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold">Meet our team</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 p-6">
                  {["Cleanings", "Whitening", "Emergency"].map((s) => (
                    <div key={s} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <motion.div className="mb-3 h-10 rounded-xl bg-teal-100" />
                      <p className="font-bold text-slate-800">{s}</p>
                      <p className="mt-1 text-xs text-slate-500">Clear pricing & booking</p>
                    </div>
                  ))}
                </div>
                <div className="mx-6 mb-6 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-700">"The new site feels so much more professional. I booked my cleaning in under a minute."</p>
                  <p className="mt-2 text-xs text-teal-600">— Patient review</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-emerald-900">
                {["Spacious hero & clear CTAs", "Trust-building typography", "Service cards patients scan fast", "Mobile-first layout", "Booking front and center"].map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-emerald-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="dental-ux" className="border-y border-white/5 bg-violet-950/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-4xl font-black md:text-5xl">What the redesign fixes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">Business owners don't need design jargon — they need to see trust, clarity, and easier patient actions.</p>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Trust at first glance", text: "Modern spacing, professional color, and real hierarchy make the clinic feel credible before a patient ever calls." },
              { title: "Clear patient journey", text: "Services, insurance info, team bios, and booking are structured so visitors always know the next step." },
              { title: "Mobile-ready experience", text: "Most patients search on phones. The redesign prioritizes thumb-friendly navigation and prominent booking." },
            ].map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }} className="rounded-[2rem] border border-violet-300/20 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-black text-violet-100">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="dental-cta" className="mx-auto max-w-5xl px-6 py-28 text-center">
        <FadeIn>
          <h2 className="text-4xl font-black md:text-5xl">Want this transformation for your business?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">This concept proves redesign value visually — perfect for convincing owners their outdated site is costing them trust.</p>
          <motion.div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl bg-violet-400 px-8 py-7 font-bold text-slate-950 hover:bg-violet-300">
              <a href={createMailLink("Dental Redesign Project")}>Start a redesign</a>
            </Button>
            <Button onClick={onBack} variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-8 py-7 text-white hover:bg-white/10">
              Back to portfolio
            </Button>
          </motion.div>
        </FadeIn>
      </section>
    </MockupShell>
  );
}

function PeakFitPage({ onBack }) {
  const nav = [
    { href: "#peak-hero", label: "Challenge" },
    { href: "#peak-benefits", label: "Benefits" },
    { href: "#peak-proof", label: "Results" },
    { href: "#peak-join", label: "Join" },
  ];

  return (
    <MockupShell onBack={onBack} accent="" mailSubject="PeakFit Landing Page Style" navLinks={nav}>
      <section id="peak-hero" className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-emerald-500 to-slate-950" />
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-lime-300/40 blur-3xl" />
        <motion.div animate={{ x: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 inline-flex rounded-full bg-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-lime-100">
              30-day challenge · starts Monday
            </p>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Transform your body in
              <span className="block">30 days.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg font-medium leading-8 text-slate-900/80">
              Busy schedule? No problem. PeakFit gives you a structured plan, meal guide, and weekly coach check-ins — built for beginners who want results without guesswork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-slate-950 px-8 py-7 text-lg font-bold text-white shadow-xl hover:bg-slate-800">
                Join the challenge — $49
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-slate-900/30 bg-white/30 px-8 py-7 font-semibold text-slate-950 backdrop-blur hover:bg-white/50">
                <a href="#peak-benefits">See what's included</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold text-slate-900">
              {["2,400+ joined", "4 workouts/week", "Beginner friendly"].map((s) => (
                <span key={s} className="rounded-full bg-white/40 px-4 py-2 backdrop-blur">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.15 }} className="relative">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/20 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-lime-300">Your week 1 preview</p>
                <div className="mt-6 space-y-4">
                  {["Mon — Full body ignite", "Wed — Core + cardio", "Fri — Strength builder"].map((day, i) => (
                    <motion.div key={day} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} whileHover={{ x: 6 }} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                      <span className="font-semibold">{day}</span>
                      <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-slate-950">45 min</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} className="mt-8 rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-400 p-4 text-center font-black text-slate-950">
                  Spots filling fast — 12 left
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="peak-benefits" className="bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">Everything included</p>
            <h2 className="text-4xl font-black text-white md:text-5xl">Built to convert — not just look good</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "30-day workout plan", text: "Follow-along videos with clear progressions so beginners never feel lost." },
              { title: "Simple meal guide", text: "No extreme diets — just realistic meals that support energy and fat loss." },
              { title: "Weekly coach check-ins", text: "Accountability messages keep participants on track through the full challenge." },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8, borderColor: "rgba(163,230,53,0.5)" }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-slate-950">
                  <RocketIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-white">{b.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="peak-proof" className="border-y border-lime-400/10 bg-gradient-to-b from-emerald-950 to-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black text-white md:text-5xl">Real results. Real social proof.</h2>
              <p className="mt-4 text-lg text-slate-400">Landing pages win with repetition — benefits, proof, urgency, and CTAs stacked with modern motion.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "I lost 11 lbs and finally have a routine I can stick to.", n: "Alex M." },
                { q: "The page made the challenge feel legit. Signing up took 30 seconds.", n: "Jordan K." },
                { q: "Best $49 I've spent on fitness — clear plan every single day.", n: "Taylor S." },
              ].map((t, i) => (
                <motion.div key={t.n} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6 backdrop-blur">
                  <p className="text-lg text-white/90">"{t.q}"</p>
                  <p className="mt-3 text-sm font-bold text-lime-300">{t.n}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="peak-join" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500" />
        <FadeIn className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black text-slate-950 md:text-6xl">Ready to start your 30 days?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-slate-900/80">This is the kind of high-energy landing page that makes offers feel exciting — perfect for campaigns, challenges, and product launches.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl bg-slate-950 px-10 py-7 text-lg font-bold text-white hover:bg-slate-800">
              <a href={createMailLink("PeakFit Style Landing Page")}>Join now — $49</a>
            </Button>
            <Button onClick={onBack} variant="outline" className="rounded-2xl border-slate-900/40 bg-white/30 px-8 py-7 font-semibold text-slate-950 hover:bg-white/50">
              Back to portfolio
            </Button>
          </div>
        </FadeIn>
      </section>
    </MockupShell>
  );
}

function FullMockupPage({ mockup, onBack }) {
  if (mockup.id === "mockup-business-websites") return <NorthlineAutoPage onBack={onBack} />;
  if (mockup.id === "mockup-website-redesigns") return <PrairieDentalPage onBack={onBack} />;
  if (mockup.id === "mockup-landing-pages") return <PeakFitPage onBack={onBack} />;

  return null;
}

export default function WebsiteServiceLandingPage() {
  const dataIsValid = validateLandingPageData();
  const [activeMockupPage, setActiveMockupPage] = useState(null);
  const selectedMockup = serviceMockups.find((mockup) => mockup.id === activeMockupPage);

  if (!dataIsValid) {
    return <div className="min-h-screen bg-slate-950 p-6 text-white">Website content failed to load.</div>;
  }

  if (selectedMockup) {
    return <FullMockupPage mockup={selectedMockup} onBack={() => setActiveMockupPage(null)} />;
  }

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.16),transparent_40%)]" />
      <motion.div animate={{ y: [0, 24, 0], x: [0, 14, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="fixed left-8 top-28 -z-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <motion.div animate={{ y: [0, -26, 0], x: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="fixed bottom-24 right-8 -z-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <BrandLogo />
          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex"><a href="#full-service" className="transition hover:text-white">Studio</a><a href="#capabilities" className="transition hover:text-white">Services</a><a href="#mockups" className="transition hover:text-white">Previews</a><a href="#maintenance" className="transition hover:text-white">Care</a><a href="#pricing" className="transition hover:text-white">Pricing</a><a href="#contact" className="transition hover:text-white">Contact</a></nav>
          <QuoteButton href={createMailLink("Website Quote Request")} />
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 backdrop-blur-xl"><SparkIcon className="h-4 w-4" />Websites for local businesses — clear packages</motion.p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">Design, build, launch & host — one studio, one bill.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Landings from $350, redesigns from $600, full business sites at $1,000. I handle design, development, domain, and hosting through Dawson's Web Studio — plus optional care from $40/mo when you want updates handled for you.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild className="group rounded-2xl bg-white px-6 py-6 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200"><a href="#pricing">View packages & pricing<ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></a></Button><Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-white backdrop-blur-xl hover:bg-white/10 hover:text-white"><a href={createMailLink("Website Quote Request")}>Get a quote</a></Button></div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center"><a href="#pricing" className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10"><p className="text-2xl font-bold">$350</p><p className="text-xs text-slate-400">Landing pages</p></a><a href="#pricing" className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10"><p className="text-2xl font-bold">$600+</p><p className="text-xs text-slate-400">Redesigns</p></a><a href="#pricing" className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10"><p className="text-2xl font-bold">$40/mo</p><p className="text-xs text-slate-400">Care & hosting</p></a></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <motion.a href="#mockups" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 -top-6 z-10 rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-xl hover:bg-white/20">Style previews</motion.a>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl"><CardContent className="p-0"><div className="border-b border-white/10 bg-slate-950/70 p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div><a href="#contact" className="rounded-full bg-white/10 px-4 py-1 text-xs text-slate-300 transition hover:bg-white/20 hover:text-white">clientwebsite.com</a></div></div><div className="space-y-5 p-6"><button type="button" onClick={() => setActiveMockupPage("mockup-business-websites")} className="block w-full rounded-[1.5rem] bg-gradient-to-br from-cyan-300 via-blue-500 to-fuchsia-500 p-6 text-left text-slate-950 transition hover:scale-[1.01]"><p className="mb-3 w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">Premium local service</p><div className="h-8 w-4/5 rounded-xl bg-white/80" /><div className="mt-3 h-4 w-2/3 rounded-xl bg-white/50" /><div className="mt-6 flex h-11 w-40 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">Open concept</div></button><div className="grid grid-cols-2 gap-4"><motion.button type="button" onClick={() => setActiveMockupPage("mockup-website-redesigns")} whileHover={{ y: -6 }} className="rounded-3xl border border-violet-300/20 bg-violet-500/10 p-4 text-left"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-violet-200">Redesign</p><motion.div className="mb-3 h-10 w-10 rounded-2xl bg-violet-400/80" /><p className="text-xs font-semibold text-white">Prairie Dental</p><motion.div className="mt-3 h-3 w-full rounded-full bg-white/20" /></motion.button><motion.button type="button" onClick={() => setActiveMockupPage("mockup-landing-pages")} whileHover={{ y: -6 }} className="rounded-3xl border border-lime-300/20 bg-lime-500/10 p-4 text-left"><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-lime-200">Landing page</p><motion.div className="mb-3 h-10 w-10 rounded-2xl bg-lime-400/80" /><p className="text-xs font-semibold text-white">PeakFit Challenge</p><motion.div className="mt-3 h-3 w-2/3 rounded-full bg-white/30" /></motion.button></div></div></CardContent></Card>
          </motion.div>
        </section>

        <FullStudioSection />

        <ShowcaseSection />

        <CapabilitiesSection />

        <TrustSection />

        <OperationsDashboardSection />

        <ServicesSection onOpenMockup={setActiveMockupPage} />

        <MockupsSection onOpenMockup={setActiveMockupPage} />

        <ProcessSection />

        <HostingMaintenanceSection />

        <PricingSection />

        <SectionReveal id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center"><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Start here</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Not sure which package fits?</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">Tell me about your business — new site, redesign, or one-page promo — and I will point you to the right package or a custom quote.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild className="group rounded-2xl bg-white px-6 py-6 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200"><a href={createMailLink("Website Project Inquiry")}><MailIcon className="mr-2 h-4 w-4" /> Email Me<ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></a></Button><Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-white backdrop-blur-xl hover:bg-white/10 hover:text-white"><a href={`tel:${CONTACT_PHONE}`}><PhoneIcon className="mr-2 h-4 w-4" /> Book a Call</a></Button></div></div></SectionReveal>
      </main>
    </div>
  );
}
