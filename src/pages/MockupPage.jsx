import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NorthlineAutoPage, PrairieDentalPage, PeakFitPage } from "../site/sections.jsx";
import { MOCKUP_SLUGS } from "../lib/mockupRoutes.js";

export default function MockupPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const onBack = () => navigate("/work");

  if (slug === "northline") return <NorthlineAutoPage onBack={onBack} />;
  if (slug === "prairie-dental") return <PrairieDentalPage onBack={onBack} />;
  if (slug === "peakfit") return <PeakFitPage onBack={onBack} />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="text-center">
        <p className="text-lg">Style preview not found.</p>
        <button type="button" onClick={onBack} className="mt-4 text-cyan-200 underline">
          Back to work
        </button>
      </div>
    </div>
  );
}
