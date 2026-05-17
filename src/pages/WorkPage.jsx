import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui.jsx";
import { ServicesSection, MockupsSection } from "../site/sections.jsx";

export default function WorkPage() {
  return (
    <>
      <ServicesSection />
      <MockupsSection />
      <FadeIn className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <p className="text-slate-400">Like what you see? Packages start at $350.</p>
        <Link to="/pricing" className="mt-4 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100">
          View packages & pricing →
        </Link>
      </FadeIn>
    </>
  );
}
