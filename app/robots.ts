import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*?callbackUrl=*",
          "/_next/static/media/",  // stops font/media files being indexed
          "/_next/static/chunks/",
          "/founding10",           // paid ad landing page, noindex
        ],
      },
    ],
    host: "replybase.co.uk",
    sitemap: "https://replybase.co.uk/sitemap.xml",
  };
}
