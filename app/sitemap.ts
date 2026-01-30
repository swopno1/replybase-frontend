import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/docs",
    "/docs/quick-start",
    "/docs/roadmap",
    "/docs/features",
    "/docs/implementation",
    "/docs/deployment-plan",
    "/docs/deployment-checklist",
    "/docs/security",
    "/docs/typebot-config",
    "/docs/modular-dashboard",
    "/docs/admin-panel",
    "/docs/onboarding",
    "/docs/onboarding-implementation",
    "/deletion-status",
    "/privacy",
    "/terms",
  ];

  const routes = mainRoutes.map((route) => ({
    url: `https://replybase.co.uk${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}
