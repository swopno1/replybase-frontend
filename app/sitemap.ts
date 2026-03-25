import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://replybase.co.uk";

// Routes that exist as redirect stubs or are internal-only and should not be indexed.
const EXCLUDED_ROUTES = new Set([
  "/docs/deployment-checklist",
  "/docs/deployment-plan",
  "/docs/typebot-config",
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

      if (segment === "api") {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = Array.from(
    new Set([...getStaticAppRoutes(), ...getBlogRoutes()]),
  ).sort();

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/blog" || route === "/docs"
          ? 0.8
          : route.startsWith("/blog/")
            ? 0.7
            : 0.6,
  }));
}
