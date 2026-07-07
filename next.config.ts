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
      // --- Infrastructure / legacy HTML ---
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },

      // --- www + http → canonical https non-www ---
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.replybase.co.uk" }],
        destination: "https://replybase.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://replybase.co.uk/:path*",
        permanent: true,
      },

      // --- Top-level pages that moved or never existed ---
      { source: "/pricing",              destination: "/#pricing",                    permanent: true },
      { source: "/features",             destination: "/#features",                   permanent: true },
      { source: "/features/:path*",      destination: "/docs/platform/flow-builder",  permanent: true },
      { source: "/demo",                 destination: "/",                            permanent: false },
      { source: "/roi-calculator",       destination: "/",                            permanent: true },
      { source: "/channels/:path*",      destination: "/docs/channels/:path*",        permanent: true },

      // --- Old doc URLs → new doc structure ---
      { source: "/docs/quick-start",                   destination: "/docs/get-started",               permanent: true },
      { source: "/docs/onboarding",                    destination: "/docs/get-started",               permanent: true },
      { source: "/docs/onboarding-implementation",     destination: "/docs/get-started/account-setup", permanent: true },
      { source: "/docs/telegram-delivery",             destination: "/docs/channels/telegram",         permanent: true },
      { source: "/docs/webchat-qa-rollout",            destination: "/docs/channels/webchat",          permanent: true },
      { source: "/docs/webchat-progress",              destination: "/docs/channels/webchat",          permanent: true },
      { source: "/docs/webchat-embed",                 destination: "/docs/channels/webchat",          permanent: true },
      { source: "/docs/webchat-implementation-guide",  destination: "/docs/channels/webchat",          permanent: true },
      { source: "/docs/webchat-api-reference",         destination: "/docs/webchat-api-reference",     permanent: false },
      { source: "/docs/whatsapp-delivery",             destination: "/docs/channels/whatsapp",         permanent: true },
      { source: "/docs/facebook-delivery",             destination: "/docs/channels/facebook",         permanent: true },
      { source: "/docs/channels",                      destination: "/docs",                           permanent: true },
      { source: "/docs/api",                           destination: "/docs/api/reference",             permanent: true },
      { source: "/docs/ai-workflows",                  destination: "/docs/platform/ai-workflows",     permanent: true },
      { source: "/docs/subscription-features",         destination: "/docs/features",                  permanent: true },
      { source: "/docs/security-model-application-level", destination: "/docs/security",              permanent: true },

      // --- Blog post wrongly linked as a doc ---
      {
        source: "/docs/security-first-ai-automation-guide",
        destination: "/blog/security-first-ai-automation-guide",
        permanent: true,
      },

      // --- Telegram bot commands that got crawled ---
      { source: "/newbot",          destination: "/", permanent: true },
      { source: "/getWebhookInfo",  destination: "/", permanent: true },
      { source: "/setprivacy",      destination: "/", permanent: true },
      { source: "/month",           destination: "/", permanent: true },

      // --- API reference paths crawled as real pages ---
      { source: "/v1/:path*", destination: "/docs/api/reference", permanent: true },
    ];
  },
};

export default nextConfig;
