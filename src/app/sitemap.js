import { MOCK_NUMBERS } from "../lib/constants";
import { simpleIdFromNumber } from "../lib/common";

export default async function sitemap() {
  const baseUrl = "https://tempsms.tcmhack.in";

  // 1. Define Static Routes
  const staticRoutes = ["", "/about", "/contact", "/numbers", "/privacy-policy", "/terms-of-conditions"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Fetch Dynamic Number Routes
  const numberRoutes = MOCK_NUMBERS?.map(({ number }) => ({
    url: `${baseUrl}/numbers/${simpleIdFromNumber(number)}`,
    lastModified: new Date(),
    changeFrequency: "always", // Because OTPs update constantly
    priority: 0.6,
  }));

  return [...staticRoutes, ...numberRoutes];
}
