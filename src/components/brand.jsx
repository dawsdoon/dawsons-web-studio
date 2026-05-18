import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StudioLogoIcon, ArrowRightIcon, MailIcon } from "./icons.jsx";
import { createMailLink } from "../lib/mail.js";

export function BrandLogo({ className = "" }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 font-bold tracking-tight ${className}`}>
      <motion.div whileHover={{ scale: 1.05, rotate: -2 }} transition={{ type: "spring", stiffness: 320, damping: 18 }} className="shrink-0">
        <StudioLogoIcon className="h-10 w-[3.25rem] drop-shadow-[0_4px_20px_rgba(34,211,238,0.28)]" />
      </motion.div>
      <span className="bg-gradient-to-r from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent">Dawson's Web Studio</span>
    </Link>
  );
}

export function QuoteButton({ href, children = "Get a Quote", className = "" }) {
  return (
    <Button
      asChild
      className={`group inline-flex h-auto items-center justify-center gap-2 rounded-full border border-cyan-200/50 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 px-6 py-2.5 text-sm font-bold tracking-tight text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-[1.03] hover:border-cyan-100 hover:shadow-[0_0_32px_rgba(34,211,238,0.5)] ${className}`}
    >
      <a href={href || createMailLink("Website Quote Request")}>
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </Button>
  );
}

/** Secondary CTA for style previews — pairs with the primary “Preview” action */
export function StyleQuoteButton({ href, children = "Quote this style", className = "" }) {
  return (
    <Button
      asChild
      className={`group inline-flex h-auto items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition duration-300 hover:border-cyan-200/55 hover:bg-cyan-400/20 hover:text-white ${className}`}
    >
      <a href={href || createMailLink("Website Quote Request")}>
        <MailIcon className="h-4 w-4 shrink-0 text-cyan-200/90" />
        <span>{children}</span>
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-cyan-200/90 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </Button>
  );
}
