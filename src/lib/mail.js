import { CONTACT_EMAIL } from "./siteConfig.js";

export function createMailLink(subject = "Website Project Inquiry") {
  const body =
    "Hi Dawson,%0D%0A%0D%0AI am interested in a website for my business.%0D%0A%0D%0ABusiness name:%0D%0APackage (Quick Landing / Starter / Redesign / Business Studio / Care / not sure):%0D%0AWebsite goal:%0D%0AEst. number of pages:%0D%0ATimeline:%0D%0A%0D%0AThanks!";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}
