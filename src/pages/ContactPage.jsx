import React from "react";
import { ContactSection, ProcessSection, HostingMaintenanceSection, CapabilitiesSection } from "../site/sections.jsx";
import { capabilitiesHighlight } from "../data/siteData.js";

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <ProcessSection />
      <HostingMaintenanceSection />
      <CapabilitiesSection items={capabilitiesHighlight} />
    </>
  );
}
