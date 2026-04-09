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
  title: "ReplyBase - Never Miss Another Lead",
  description:
    "Capture every lead, reply instantly, and manage your conversations—all in one simple platform.",
  other: {
    "facebook-domain-verification": "4yq6iobk3tkzyrnvh8ktaimneauxkp",
  },
  openGraph: {
    title: "ReplyBase - Never Miss Another Lead",
    description:
      "Capture every lead, reply instantly, and manage your conversations—all in one simple platform.",
    url: "https://replybase.co.uk",
    siteName: "ReplyBase",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

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
        <CookieConsent />

        <Script
          src="https://app.replybase.co.uk/embed/replybase-webchat.js"
          data-base-url="https://app.replybase.co.uk"
          data-public-key="wpk_5e81eeb7b8b4ecd8b895447014ddeb93"
          data-title="Chat with us"
          data-primary-color="#4f39f6"
          data-position="right"
          defer
        />
      </body>
    </html>
  );
}
