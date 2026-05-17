from pathlib import Path

ROOT = Path(r"c:\Users\sshad\Desktop\WebDev\src")
orig = (ROOT / "WebsiteServiceLandingPage.jsx").read_text(encoding="utf-8")
lines = orig.splitlines(keepends=True)

# icons 9-188 (1-based) -> index 8:188
icons_body = "".join(lines[8:188])
(ROOT / "components" / "icons.jsx").write_text(
    "import React from \"react\";\n\n"
    + icons_body
    + "\nexport {\n  ArrowRightIcon, CheckCircleIcon, GlobeIcon, ShieldCheckIcon, WrenchIcon,\n"
    "  RocketIcon, MailIcon, PhoneIcon, CodeIcon, SparkIcon, ServerIcon,\n"
    "  ChartIcon, ZapIcon, LockIcon, LayersIcon, ActivityIcon, StudioLogoIcon,\n};\n",
    encoding="utf-8",
)

(ROOT / "lib" / "constants.js").write_text(
    'export const CONTACT_EMAIL = "hello@example.com";\n'
    'export const CONTACT_PHONE = "+10000000000";\n'
    "export const STYLE_PREVIEW_NOTE =\n"
    '  "Sample designs only — fictional businesses shown to demonstrate quality and style. Your site can be fully custom for any industry, brand, or layout you need.";\n'
    "export const HOSTING_NOTE = \"Domain & hosting billed through Dawson's Web Studio — one simple invoice.\";\n",
    encoding="utf-8",
)

(ROOT / "lib" / "mail.js").write_text(
    'import { CONTACT_EMAIL } from "./constants.js";\n\n'
    "export function createMailLink(subject = \"Website Project Inquiry\") {\n"
    "  const body =\n"
    '    "Hi Dawson,%0D%0A%0D%0AI am interested in a website for my business.%0D%0A%0D%0ABusiness name:%0D%0APackage (Quick Landing / Starter / Redesign / Business Studio / Care / not sure):%0D%0AWebsite goal:%0D%0AEst. number of pages:%0D%0ATimeline:%0D%0A%0D%0AThanks!";\n'
    "  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;\n"
    "}\n",
    encoding="utf-8",
)

# data block lines 215-454 (1-based) -> 214:454
data_block = "".join(lines[214:454])
data_block = data_block.replace("const STYLE_PREVIEW_NOTE =", "// moved to constants\n// const STYLE_PREVIEW_NOTE =")
data_block = data_block.replace("const HOSTING_NOTE =", "// const HOSTING_NOTE =")
# Remove the two const lines entirely - manual fix in siteData
for i, line in enumerate(lines[214:454]):
    pass

site_data = '''import {
  SparkIcon, CodeIcon, RocketIcon, ServerIcon, ShieldCheckIcon, WrenchIcon,
  MailIcon, GlobeIcon, ChartIcon, ActivityIcon, LockIcon, ZapIcon, LayersIcon, CheckCircleIcon,
} from "../components/icons.jsx";
import { HOSTING_NOTE } from "../lib/constants.js";

export { HOSTING_NOTE };

''' + "".join([l for l in lines[217:444] if not l.strip().startswith("const STYLE_PREVIEW_NOTE") and not l.strip().startswith("const HOSTING_NOTE")])

(ROOT / "data" / "siteData.js").write_text(site_data, encoding="utf-8")

# sections: from line 456 (SectionReveal) through 1630 (end FullMockupPage), before default export
sections = "".join(lines[455:1630])
sections_header = '''import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon, CheckCircleIcon, GlobeIcon, ShieldCheckIcon, WrenchIcon,
  RocketIcon, MailIcon, PhoneIcon, CodeIcon, SparkIcon, ServerIcon,
  ChartIcon, ZapIcon, LockIcon, LayersIcon, ActivityIcon, SparkIcon as SparkIcon2,
} from "../components/icons.jsx";
import { BrandLogo, QuoteButton } from "../components/brand.jsx";
import { SectionReveal, FadeIn, SectionHeader, glassCardClass } from "../components/ui.jsx";
import { createMailLink } from "../lib/mail.js";
import { CONTACT_PHONE, STYLE_PREVIEW_NOTE } from "../lib/constants.js";
import {
  studioPipeline, capabilities, trustInsights, whyChooseStudio,
  buildPackages, carePlans, packageComparison, process, serviceMockups,
  HOSTING_NOTE,
} from "../data/siteData.js";

'''

sections = sections.replace('href="#pricing"', 'to="/pricing"')
sections = sections.replace('href="#maintenance"', 'to="/contact"')
sections = sections.replace('href="#contact"', 'to="/contact"')
sections = sections.replace('href="#mockups"', 'to="/work"')
sections = sections.replace('href="#full-service"', 'to="/"')
sections = sections.replace('href="#capabilities"', 'to="/contact"')
sections = sections.replace('href="#growth-ops"', 'to="/pricing"')
sections = sections.replace('<a href={createMailLink', '<a href={createMailLink')  # keep mailto

# Fix motion.a with href - need Link - do later manually for process section

# MockupShell onBack - use navigate
sections = sections.replace(
    'function MockupShell({ onBack, accent, navLinks, children, ctaLabel = "Build something like this", mailSubject }) {',
    'function MockupShell({ onBack, accent, navLinks, children, ctaLabel = "Build something like this", mailSubject }) {',
)

(ROOT / "site" / "sections.jsx").write_text(sections_header + sections + "\n", encoding="utf-8")
print("split done", len(sections_header + sections))
