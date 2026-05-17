import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon, CheckCircleIcon, GlobeIcon, ShieldCheckIcon, WrenchIcon,
  RocketIcon, MailIcon, PhoneIcon, CodeIcon, SparkIcon, ServerIcon,
  ChartIcon, ZapIcon, LockIcon, LayersIcon, ActivityIcon,
} from "../components/icons.jsx";
import { QuoteButton } from "../components/brand.jsx";
import { SectionReveal, FadeIn, SectionHeader, glassCardClass } from "../components/ui.jsx";
import { createMailLink } from "../lib/mail.js";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, STYLE_PREVIEW_NOTE } from "../lib/constants.js";
import { HOSTING_NOTE } from "../lib/constants.js";
import {
  studioPipeline, capabilities, capabilitiesHighlight, trustInsights, whyChooseStudio,
  buildPackages, carePlans, packageComparison, process, serviceMockups,
} from "../data/siteData.js";

const MotionLink = motion(Link);

export function FullStudioSection() {
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
              <Link to="/pricing" className="transition hover:text-white">View packages & pricing</Link>
            </Button>
          </motion.div>
        </motion.div>
      </FadeIn>
    </SectionReveal>
  );
}

export function CapabilitiesSection({ items = capabilities, compact = false }) {
  return (
    <SectionReveal id="capabilities" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeader
        eyebrow="What I handle for you"
        title="Build, launch, and support — scoped to real packages"
        description="Not every service is on every tier — but you always get a clear scope. Builds cover design through launch; care plans cover hosting, checkups, and routine edits on one monthly bill."
      />
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
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

export function TrustSection() {
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

export function OperationsDashboardSection() {
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

export function HostingMaintenanceSection() {
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
              <Link to="/pricing" className="transition hover:text-white">See care plans from $40/mo</Link>
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

export function ShowcaseSection() {
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

export function ServicesSection() {
  const navigate = useNavigate();
  return (
    <SectionReveal id="services" revealOnMount className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <SectionHeader
        revealOnMount
        eyebrow="Matches your package"
        title="Style previews for landing pages, redesigns, and business sites"
        description="Fictional examples only — they map to Quick Landing, Website Redesign, and Starter/Business Studio quality. Your final site is custom to your industry."
      />
      <motion.div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {serviceMockups.map((mockup, index) => (
          <motion.button
            type="button"
            key={mockup.service}
            onClick={() => navigate(`/work/${mockup.slug}`)}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
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

export function ProcessSection() {
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
            <Link
              to={index >= 4 ? "/contact" : index === 3 ? "/pricing" : index === 0 ? "/pricing" : "/contact"}
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
            </Link>
          );
        })}
      </motion.div>
    </SectionReveal>
  );
}

export function ComparisonCell({ value }) {
  if (value === true) {
    return <CheckCircleIcon className="mx-auto h-4 w-4 text-cyan-200" />;
  }
  if (value === false) {
    return <span className="text-slate-600">—</span>;
  }
  return <span className="text-xs text-slate-300 md:text-sm">{value}</span>;
}

export function PackageCard({ pkg, index, variant = "build", revealOnMount = false }) {
  const revealProps = revealOnMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="h-full"
      {...revealProps}
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

export function PricingSection() {
  return (
    <SectionReveal id="pricing" revealOnMount className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeader
        revealOnMount
        eyebrow="Packages & pricing"
        title="Clear local packages — one invoice for hosting"
        description="Websites from $350 · Redesigns from $600 · Full business sites $1,000 · Ongoing care from $40/mo. Domain and hosting run through Dawson's Web Studio so you get one bill."
      />

      <p className="mx-auto mb-8 max-w-3xl text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/90">One-time builds</p>
      <motion.div className="mx-auto grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {buildPackages.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} index={index} variant="build" revealOnMount />
        ))}
      </motion.div>

      <FadeIn revealOnMount className="mx-auto mt-10 max-w-4xl">
        <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 px-6 py-5 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-cyan-50/90 md:text-base">{HOSTING_NOTE}</p>
        </div>
      </FadeIn>

      <p className="mx-auto mb-8 mt-16 max-w-3xl text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/90">Monthly care</p>
      <motion.div className="mx-auto grid max-w-4xl auto-rows-fr items-stretch gap-6 md:grid-cols-2">
        {carePlans.map((pkg, index) => (
          <PackageCard key={pkg.name} pkg={pkg} index={index} variant="care" revealOnMount />
        ))}
      </motion.div>

      <FadeIn revealOnMount className="mx-auto mt-14 max-w-5xl">
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

      <FadeIn revealOnMount className="mx-auto mt-14 max-w-6xl overflow-x-auto">
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
export function MockupShell({ onBack, accent, navLinks, children, ctaLabel = "Build something like this", mailSubject }) {
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

export function MockupsSection() {
  const navigate = useNavigate();
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
          <MiniWebsiteMockup key={mockup.id} mockup={mockup} index={index} onOpen={(id) => { const m = serviceMockups.find((x) => x.id === id); if (m) navigate(`/work/${m.slug}`); }} />
        ))}
      </div>
    </SectionReveal>
  );
}

export function MiniWebsiteMockup({ mockup, index, onOpen }) {
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
      <motion.button type="button" onClick={() => onOpen(mockup.id)} whileHover={{ y: -8, rotate: reversed ? -1 : 1 }} transition={{ type: "spring", stiffness: 180, damping: 16 }} className="w-full min-w-0 text-left">
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
            <div className="space-y-4 p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                {mockup.stats.map((stat) => (
                  <div
                    key={stat}
                    className="flex min-h-[2.75rem] min-w-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-1 py-2 sm:min-h-[3rem] sm:rounded-2xl sm:px-2 sm:py-3"
                  >
                    <span className="block w-full break-words text-center text-[10px] font-medium leading-tight text-slate-200 sm:text-xs">{stat}</span>
                  </div>
                ))}
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

export function NorthlineAutoPage({ onBack }) {
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

export function PrairieDentalPage({ onBack }) {
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

export function PeakFitPage({ onBack }) {
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

export function FullMockupPage({ mockup, onBack }) {
  if (mockup.id === "mockup-business-websites") return <NorthlineAutoPage onBack={onBack} />;
  if (mockup.id === "mockup-website-redesigns") return <PrairieDentalPage onBack={onBack} />;
  if (mockup.id === "mockup-landing-pages") return <PeakFitPage onBack={onBack} />;

  return null;
}


export function WhyChooseStrip() {
  return (
    <FadeIn className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Why Dawson's Web Studio</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whyChooseStudio.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export function CareMonitoringTeaser() {
  return <OperationsDashboardSection />;
}

export function ContactSection() {
  return (
    <SectionReveal id="contact" revealOnMount className="mx-auto max-w-4xl px-6 py-24 text-center">
      <motion.div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Start here</p>
        <h2 className="text-4xl font-black tracking-tight md:text-6xl">Not sure which package fits?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Tell me about your business — new site, redesign, or one-page promo — and I will point you to the right package or a custom quote.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="group rounded-2xl bg-white px-6 py-6 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200">
            <a href={createMailLink("Website Project Inquiry")}>
              <MailIcon className="mr-2 h-4 w-4 inline" /> Email Me
              <ArrowRightIcon className="ml-2 h-4 w-4 inline transition group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-white backdrop-blur-xl hover:bg-white/10 hover:text-white">
            <a href={`tel:${CONTACT_PHONE}`}>
              <PhoneIcon className="mr-2 h-4 w-4 inline" /> Book a Call
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-200 transition hover:text-cyan-100">
            {CONTACT_EMAIL}
          </a>
          <span className="mx-2 text-slate-600">·</span>
          <a href={`tel:${CONTACT_PHONE}`} className="text-cyan-200 transition hover:text-cyan-100">
            {CONTACT_PHONE_DISPLAY}
          </a>
        </p>
      </motion.div>
    </SectionReveal>
  );
}
