import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MockupPage from "./pages/MockupPage.jsx";
import { validateLandingPageData } from "./data/siteData.js";

export default function App() {
  if (!validateLandingPageData()) {
    return (
      <div className="min-h-screen bg-slate-950 p-6 text-white">
        Website content failed to load.
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/work/:slug" element={<MockupPage />} />
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
