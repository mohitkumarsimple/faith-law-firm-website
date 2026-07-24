import type { MetadataRoute } from "next";
import { articles, publications } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faith-law-firm-delhi.mohitkumarsimple.chatgpt.site";
  const staticRoutes = [
    "",
    "/about",
    "/practice-areas",
    "/team",
    "/blog",
    "/publications",
    "/careers",
    "/internship",
    "/contact",
    "/privacy-policy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-24"),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date("2026-07-24"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...publications.map((publication) => ({
      url: `${baseUrl}/publications/${publication.slug}`,
      lastModified: new Date("2026-07-24"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
