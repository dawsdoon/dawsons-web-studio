import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SparkIcon, ArrowRightIcon } from "../components/icons.jsx";
import { createMailLink } from "../lib/mail.js";
import { MOCKUP_ID_TO_SLUG } from "../lib/mockupRoutes.js";
import { FullStudioSection, TrustSection, WhyChooseStrip } from "../site/sections.jsx";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 backdrop-blur-xl">
            <SparkIcon className="h-4 w-4" />
            Websites for local businesses — clear packages
          </motion.p>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">Design, build, launch & host — one studio, one bill.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Landings from $350, redesigns from $600, full business sites at $1,000. I handle design, development, domain, and hosting through Dawson's Web Studio — plus optional care from $40/mo when you want updates handled for you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="group rounded-2xl bg-white px-6 py-6 text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-slate-200">
              <Link to="/pricing">
                View packages & pricing
                <ArrowRightIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 py-6 text-white backdrop-blur-xl hover:bg-white/10 hover:text-white">
              <a href={createMailLink("Website Quote Request")}>Get a quote</a>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { price: "$350", label: "Landing", to: "/pricing" },
              { price: "$550", label: "Starter", to: "/pricing" },
              { price: "$600+", label: "Redesign", to: "/pricing" },
              { price: "$40/mo", label: "Care", to: "/pricing" },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10">
                <p className="text-2xl font-bold">{item.price}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <Card className="relative z-0 overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <CardContent className="p-0">
              <motion.div className="border-b border-white/10 bg-slate-950/70 p-5">
                <motion.div className="flex items-center justify-between">
                  <motion.div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </motion.div>
                  <Link to="/contact" className="rounded-full bg-white/10 px-4 py-1 text-xs text-slate-300 transition hover:bg-white/20 hover:text-white">
                    clientwebsite.com
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div className="space-y-5 p-6">
                <Link to={`/work/${MOCKUP_ID_TO_SLUG["mockup-business-websites"]}`} className="block rounded-[1.5rem] bg-gradient-to-br from-cyan-300 via-blue-500 to-fuchsia-500 p-6 text-left text-slate-950 transition hover:scale-[1.01]">
                  <p className="mb-3 w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">Premium local service</p>
                  <div className="h-8 w-4/5 rounded-xl bg-white/80" />
                  <div className="mt-3 h-4 w-2/3 rounded-xl bg-white/50" />
                  <div className="mt-6 flex h-11 w-40 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">Open concept</div>
                </Link>
                <motion.div className="grid grid-cols-2 gap-4">
                  <Link to={`/work/${MOCKUP_ID_TO_SLUG["mockup-website-redesigns"]}`} className="rounded-3xl border border-violet-300/20 bg-violet-500/10 p-4 text-left transition hover:-translate-y-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-violet-200">Redesign</p>
                    <div className="mb-3 h-10 w-10 rounded-2xl bg-violet-400/80" />
                    <p className="text-xs font-semibold text-white">Prairie Dental</p>
                  </Link>
                  <Link to={`/work/${MOCKUP_ID_TO_SLUG["mockup-landing-pages"]}`} className="rounded-3xl border border-lime-300/20 bg-lime-500/10 p-4 text-left transition hover:-translate-y-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-lime-200">Landing page</p>
                    <motion.div className="mb-3 h-10 w-10 rounded-2xl bg-lime-400/80" />
                    <p className="text-xs font-semibold text-white">PeakFit Challenge</p>
                  </Link>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-4 -top-6 z-20"
          >
            <Link
              to="/work"
              className="pointer-events-auto rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/20"
            >
              Style previews
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <FullStudioSection />
      <TrustSection />
      <WhyChooseStrip />
    </>
  );
}
