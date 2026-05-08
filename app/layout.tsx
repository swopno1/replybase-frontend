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
        alt: "ReplyBase — AI Chatbot & Lead Capture Platform",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          name="facebook-domain-verification"
          content="4yq6iobk3tkzyrnvh8ktaimneauxkp"
        />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <MarketingFunnelTracker />
        <CookieConsent />
        <AnalyticsScripts />

        <Script
          src="https://app.replybase.co.uk/embed/replybase-webchat.js"
          data-public-key="wpk_0e95761a11401db25747a1790c2aadcd"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
