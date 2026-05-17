export const MOCKUP_SLUGS = {
  northline: "mockup-business-websites",
  "prairie-dental": "mockup-website-redesigns",
  peakfit: "mockup-landing-pages",
};

export const MOCKUP_ID_TO_SLUG = Object.fromEntries(
  Object.entries(MOCKUP_SLUGS).map(([slug, id]) => [id, slug]),
);
