import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://replybase.co.uk"),
  title: {
    default: "ReplyBase — AI Chatbot & Lead Capture Platform",
    template: "%s | ReplyBase",
  },
  description:
    "Capture every lead, reply instantly, and manage your conversations—all in one simple platform.",
  keywords: [
    "AI chatbot",
    "lead capture",
    "chatbot builder",
    "customer messaging",
    "telegram bot",
    "webchat",
    "AI customer support",
    "lead generation",
    "chatbot platform",
    "AI inbox",
  ],
  authors: [{ name: "ReplyBase", url: "https://replybase.co.uk" }],
  creator: "ReplyBase",
  other: {
    "facebook-domain-verification": "4yq6iobk3tkzyrnvh8ktaimneauxkp",
  },
  openGraph: {
    title: "Never Miss Another Lead — Reply Instantly with AI",
    description:
      "Reply instantly to every enquiry and turn more messages into paying customers—all in one simple platform.",
    url: "https://replybase.co.uk",
    siteName: "ReplyBase",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ReplyBase — AI Chatbot & Lead Capture Platform Interface Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Miss Another Lead — Reply Instantly with AI",
    description:
      "Reply instantly to every enquiry and turn more messages into paying customers—all in one simple platform.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { MarketingFunnelTracker } from "@/components/analytics/marketing-funnel-tracker";
import { DeploymentGuard } from "@/components/DeploymentGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PCKHK9XS');`}</Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCKHK9XS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <MarketingFunnelTracker />
        <CookieConsent />
        <AnalyticsScripts />
        <DeploymentGuard />

        <Script
          src="https://app.replybase.co.uk/embed/replybase-webchat.js"
          data-site-id="cmox71v1i000514r77qgm4bot"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
