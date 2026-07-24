import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },
    sitemap:
      "https://faith-law-firm-delhi.mohitkumarsimple.chatgpt.site/sitemap.xml",
  };
}
