import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo, QuoteButton } from "../components/brand.jsx";
import { createMailLink } from "../lib/mail.js";
import { MailIcon } from "../components/icons.jsx";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/pricing", label: "Pricing" },
  { to: "/work", label: "Examples" },
  { to: "/contact", label: "Contact" },
];

const pillTransition = { type: "spring", stiffness: 420, damping: 34 };

function SlidingNavBar({ links, layoutId, className = "", linkClassName = "" }) {
  return (
    <motion.div layout className={className}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          onClick={link.onClick}
          className={({ isActive }) =>
            [
              "relative inline-flex min-h-[2.75rem] flex-1 items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 sm:min-h-[3rem] sm:px-5 sm:text-[0.95rem]",
              isActive ? "text-slate-950" : "text-slate-200 hover:text-white",
              linkClassName,
            ].join(" ")
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-0 rounded-2xl bg-white shadow-lg shadow-cyan-500/25 ring-1 ring-white/80"
                  transition={pillTransition}
                  aria-hidden
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </motion.div>
  );
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div className="min-h-screen scroll-smooth bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.16),transparent_40%)]" />
      <motion.div animate={{ y: [0, 24, 0], x: [0, 14, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="fixed left-8 top-28 -z-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <motion.div animate={{ y: [0, -26, 0], x: [0, -18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="fixed bottom-24 right-8 -z-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 md:py-6">
          <motion.div className="flex items-center justify-between gap-3 sm:gap-4">
            <BrandLogo className="shrink-0" />

            <nav className="hidden flex-1 items-center justify-center md:flex" aria-label="Main navigation">
              <SlidingNavBar
                links={navLinks}
                layoutId="site-nav-pill-desktop"
                className="flex w-full max-w-2xl items-stretch gap-1 rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-1.5 shadow-inner shadow-black/20 backdrop-blur-xl lg:max-w-3xl lg:gap-1.5 lg:p-2"
              />
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <QuoteButton href={createMailLink("Website Quote Request")} className="hidden sm:inline-flex" />
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-2xl border border-white/15 bg-white/10 transition hover:bg-white/15 md:hidden"
              >
                <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </button>
            </div>
          </motion.div>

          <nav className="mt-4 md:hidden" aria-label="Main navigation">
            <SlidingNavBar
              links={navLinks.map((link) => ({ ...link, onClick: () => setMenuOpen(false) }))}
              layoutId="site-nav-pill-mobile"
              className="grid grid-cols-4 gap-1.5 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-1.5 shadow-inner shadow-black/20 backdrop-blur-xl"
              linkClassName="min-h-[2.5rem] px-2 text-xs font-bold sm:min-h-[2.75rem] sm:text-sm"
            />
          </nav>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-3 px-4 py-4 sm:px-6">
                <Link
                  to="/pricing"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[3rem] items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25"
                >
                  View packages & pricing
                </Link>
                <a
                  href={createMailLink("Website Quote Request")}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[3rem] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-white"
                >
                  <MailIcon className="h-4 w-4" />
                  Get a quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-slate-950/90 p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-lg gap-3">
          <Link to="/pricing" className="flex flex-1 items-center justify-center rounded-2xl bg-white py-3 text-sm font-bold text-slate-950">
            Pricing
          </Link>
          <a href={createMailLink("Website Quote Request")} className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 py-3 text-sm font-semibold text-white">
            <MailIcon className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </motion.div>
  );
}
