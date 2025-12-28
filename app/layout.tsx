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
  title: "ReplyBase - Build Smarter Chatbots",
  description: "The ultimate open-source, visual chatbot builder designed for performance and scale.",
  openGraph: {
    title: "ReplyBase - Build Smarter Chatbots",
    description: "The ultimate open-source, visual chatbot builder designed for performance and scale.",
    url: "https://replybase.com", // Placeholder
    siteName: "ReplyBase",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

import CookieConsent from '@/components/CookieConsent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
