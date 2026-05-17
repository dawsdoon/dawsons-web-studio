from pathlib import Path

path = Path(r"c:\Users\sshad\Desktop\WebDev\src\site\sections.jsx")
lines = path.read_text(encoding="utf-8").splitlines(keepends=True)

# Keep from SectionReveal (line 456, index 455) through FullMockupPage end (before default export ~1631)
body = "".join(lines[455:1630])

header = '''import React, { useEffect } from "react";
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
import { CONTACT_PHONE, STYLE_PREVIEW_NOTE } from "../lib/constants.js";
import { HOSTING_NOTE } from "../lib/constants.js";
import {
  studioPipeline, capabilities, capabilitiesHighlight, trustInsights, whyChooseStudio,
  buildPackages, carePlans, packageComparison, process, serviceMockups,
} from "../data/siteData.js";

'''

# Export all top-level functions
for name in [
    "FullStudioSection", "CapabilitiesSection", "TrustSection", "OperationsDashboardSection",
    "HostingMaintenanceSection", "ShowcaseSection", "ServicesSection", "ProcessSection",
    "ComparisonCell", "PackageCard", "PricingSection", "MockupShell", "MockupsSection",
    "MiniWebsiteMockup", "NorthlineAutoPage", "PrairieDentalPage", "PeakFitPage",
    "WhyChooseStrip", "ContactSection", "CareMonitoringTeaser",
]:
    body = body.replace(f"function {name}(", f"export function {name}(")

# Link replacements for common anchors
replacements = [
    ('<a href="#pricing">', '<Link to="/pricing" className="transition hover:text-white">'),
    ('<a href="#maintenance">', '<Link to="/contact" className="transition hover:text-white">'),
    ('<a href="#contact">', '<Link to="/contact" className="transition hover:text-white">'),
    ('<a href="#mockups">', '<Link to="/work" className="transition hover:text-white">'),
    ('<a href="#full-service">', '<Link to="/" className="transition hover:text-white">'),
]
for old, new in replacements:
    body = body.replace(old, new)

# Close Link tags that were </a> after our replacements - only for View packages etc
# Safer: replace specific closing patterns
body = body.replace('View packages & pricing</a>', 'View packages & pricing</Link>')
body = body.replace('See care plans from $40/mo</a>', 'See care plans from $40/mo</Link>')
body = body.replace('Browse style previews', 'Browse style previews')  # inside motion.a still

# FullStudio outline button
body = body.replace(
    '<Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10 hover:text-white">\n              <a href="#pricing">View packages & pricing</a>',
    '<Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 py-2.5 text-white hover:bg-white/10 hover:text-white">\n              <Link to="/pricing">View packages & pricing</Link>',
)

body = body.replace(
    '<Button asChild className="mt-8 rounded-2xl bg-white px-6 py-6 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200">\n              <a href="#pricing">See care plans from $40/mo</a>',
    '<Button asChild className="mt-8 rounded-2xl bg-white px-6 py-6 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200">\n              <Link to="/pricing">See care plans from $40/mo</Link>',
)

# Add WhyChooseStrip and ContactSection and CareMonitoringTeaser if not in body - we'll add manually in pages

# ServicesSection - change onOpenMockup to use slug
body = body.replace(
    "function ServicesSection({ onOpenMockup }) {",
    "export function ServicesSection() {\n  const navigate = useNavigate();",
)
body = body.replace("onClick={() => onOpenMockup(mockup.id)}", "onClick={() => navigate(`/work/${mockup.slug}`)}")
body = body.replace("export export function ServicesSection", "export function ServicesSection")

body = body.replace(
    "function MockupsSection({ onOpenMockup }) {",
    "export function MockupsSection() {\n  const navigate = useNavigate();",
)
body = body.replace("onOpen={onOpenMockup}", "onOpen={(id) => { const m = serviceMockups.find((x) => x.id === id); if (m) navigate(`/work/${m.slug}`); }}")
body = body.replace("export export function MockupsSection", "export function MockupsSection")

# MiniWebsiteMockup onOpen
body = body.replace("function MiniWebsiteMockup({ mockup, index, onOpen }) {", "export function MiniWebsiteMockup({ mockup, index, onOpen }) {")

# Remove FullMockupPage and duplicate export
body = body.replace("function FullMockupPage({ mockup, onBack }) {", "export function FullMockupPage({ mockup, onBack }) {")

# ProcessSection - use Link
body = body.replace(
    """            <motion.a
              href={index >= 4 ? "#maintenance" : index === 3 ? "#pricing" : index === 0 ? "#pricing" : "#contact"}
              key={item.title}""",
    """            <Link
              to={index >= 4 ? "/contact" : index === 3 ? "/pricing" : index === 0 ? "/pricing" : "/contact"}
              key={item.title}""",
)
body = body.replace(
    """            </motion.a>
          );
        })}
      </motion.div>
    </SectionReveal>
  );
}

function ComparisonCell""",
    """            </Link>
          );
        })}
      </motion.div>
    </SectionReveal>
  );
}

export function ComparisonCell""",
)

# CapabilitiesSection with limit prop
body = body.replace(
    "function CapabilitiesSection() {",
    "export function CapabilitiesSection({ items = capabilities, compact = false }) {",
)
body = body.replace("export export function CapabilitiesSection", "export function CapabilitiesSection")
body = body.replace("{capabilities.map((item, index) => {", "{items.map((item, index) => {")

# Showcase - remove from exports usage but keep function
body = body.replace("function ShowcaseSection", "export function ShowcaseSection")

# Add WhyChooseStrip and ContactSection at end
footer = '''

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
      </motion.div>
    </FadeIn>
  );
}

export function CareMonitoringTeaser() {
  return <OperationsDashboardSection />;
}

export function ContactSection() {
  return (
    <SectionReveal id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
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
      </motion.div>
    </SectionReveal>
  );
}
'''

path.write_text(header + body + footer, encoding="utf-8")
print("patched", len(header + body + footer))
