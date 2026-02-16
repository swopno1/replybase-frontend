import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsDirectory = path.join(process.cwd(), "_posts");
  let blogPosts: { url: string; lastModified: Date }[] = [];

  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory);
    blogPosts = fileNames.map((fileName) => ({
      url: `https://replybase.co.uk/blog/${fileName.replace(/\.md$/, "")}`,
      lastModified: new Date(),
    }));
  }

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

  return [...routes, ...blogPosts];
}
