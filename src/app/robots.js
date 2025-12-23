export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/", // Allow Home
        "/numbers", // Allow Numbers List
        "/numbers/", // Allow all Dynamic Numbers
        "/about", // Allow About
        "/contact", // Allow Contact
        "/privacy-policy",
        "/terms-of-conditions",
      ],
      disallow: [
        "/api/", // Block your internal API routes from being crawled
        "/admin/", // Block any admin dashboard
        "/*?*", // Block filtered URLs (to prevent duplicate content index)
      ],
    },
    sitemap: "https://tempsms.tcmhack.in/sitemap.xml",
  };
}
