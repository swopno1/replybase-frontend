import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://replybase.co.uk";

// Routes that are internal-only, dev artifacts, or add no public value.
const EXCLUDED_ROUTES = new Set([
  "/docs/deployment-checklist",
  "/docs/deployment-plan",
  "/docs/typebot-config",
  "/docs/webchat-progress",
  "/docs/onboarding-implementation",
  "/docs/webchat-qa-rollout",
  "/deletion-status",
  "/actions",
]);

// Pages that exist as HTML but need noindex treatment — kept in sitemap at
// very low priority so crawlers can discover and honour the canonical.
const LEGAL_ROUTES = new Set([
  "/privacy",
  "/terms",
  "/cookie-policy",
]);

// High-intent pages that directly drive sign-ups or upgrade decisions.
const CONVERSION_ROUTES = new Set(["/", "/about", "/contact"]);

// Docs pages worth highlighting for discoverability.
const FEATURED_DOC_ROUTES = new Set([
  "/docs",
  "/docs/quick-start",
  "/docs/features",
  "/docs/get-started",
]);

function getStaticAppRoutes(): string[] {
  const appDirectory = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  function walkDirectory(currentDir: string, urlSegments: string[] = []) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    const hasPage = entries.some(
      (entry) => entry.isFile() && entry.name === "page.tsx",
    );

    if (hasPage) {
      const route = `/${urlSegments.join("/")}`.replace(/\/$/, "") || "/";
      if (!EXCLUDED_ROUTES.has(route)) {
        routes.add(route);
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const segment = entry.name;

      if (segment === "api" || segment === "_components" || segment === "actions") {
        continue;
      }

      if (segment.startsWith("(") && segment.endsWith(")")) {
        walkDirectory(path.join(currentDir, segment), urlSegments);
        continue;
      }

      if (segment.startsWith("[")) {
        continue;
      }

      walkDirectory(path.join(currentDir, segment), [...urlSegments, segment]);
    }
  }

  if (fs.existsSync(appDirectory)) {
    walkDirectory(appDirectory);
  }

  return Array.from(routes).sort();
}

function getBlogRoutes(): string[] {
  const postsDirectory = path.join(process.cwd(), "_posts");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => `/blog/${fileName.replace(/\.md$/, "")}`)
    .sort();
}

function getPriority(route: string): number {
  if (route === "/") return 1.0;
  if (CONVERSION_ROUTES.has(route)) return 0.9;
  if (route === "/blog") return 0.85;
  if (FEATURED_DOC_ROUTES.has(route)) return 0.8;
  if (route.startsWith("/blog/")) return 0.75;
  if (route.startsWith("/docs/")) return 0.65;
  if (LEGAL_ROUTES.has(route)) return 0.3;
  return 0.6;
}

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/" || route === "/blog" || route.startsWith("/blog/"))
    return "weekly";
  if (LEGAL_ROUTES.has(route)) return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = Array.from(
    new Set([...getStaticAppRoutes(), ...getBlogRoutes()]),
  ).sort();

  // Add SaaS app key routes
  const appBase = "https://app.replybase.co.uk";
  const extraAppRoutes = [
    {
      url: `${appBase}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${appBase}/auth/login`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${appBase}/auth/register`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  return [
    ...allRoutes.map((route) => ({
      url: `${SITE_URL}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    })),
    ...extraAppRoutes,
  ];
}
