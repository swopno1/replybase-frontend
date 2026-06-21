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
              // GTM + GA4 + Facebook Pixel (via GTM) + ReplyBase chat widget
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://ssl.google-analytics.com https://www.google-analytics.com https://tagmanager.google.com https://connect.facebook.net https://*.facebook.com https://app.replybase.co.uk https://capi-automation.s3.us-east-2.amazonaws.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com https://app.replybase.co.uk",
              // GTM noscript iframe + Facebook iframes + YouTube embeds
              "frame-src 'self' https://www.googletagmanager.com https://*.facebook.com https://app.replybase.co.uk https://www.youtube.com https://www.youtube-nocookie.com",
              // GA4 / GTM / Facebook / ReplyBase data endpoints
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://connect.facebook.net https://*.facebook.com https://app.replybase.co.uk https://capi-automation.s3.us-east-2.amazonaws.com",
              // Tracking pixels (Facebook, GA, GTM)
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com https://app.replybase.co.uk",
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
