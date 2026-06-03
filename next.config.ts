import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // GTM loads scripts from googletagmanager.com; GA4 loads from google-analytics.com
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://ssl.google-analytics.com https://www.google-analytics.com https://tagmanager.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com",
              // GTM noscript iframe src
              "frame-src 'self' https://www.googletagmanager.com",
              // GA4 / GTM data collection endpoints
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://region1.google-analytics.com",
              // GTM uses 1x1 pixel images for some tags
              "img-src 'self' data: https: blob: https://www.googletagmanager.com https://www.google-analytics.com https://stats.g.doubleclick.net",
              "font-src 'self' data: https://fonts.gstatic.com",
              "worker-src 'self' blob:",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms.html",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.replybase.co.uk",
          },
        ],
        destination: "https://replybase.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://replybase.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
