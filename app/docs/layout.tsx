import type { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import DocsContentWrapper from "./_components/DocsContentWrapper";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | ReplyBase Docs",
  },
  description:
    "Complete guides for setting up and using ReplyBase — Webchat embed, Telegram bots, Facebook Messenger, WhatsApp integration, flow builder, and more.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "ReplyBase Documentation",
    description:
      "Step-by-step guides for Webchat, Telegram, Facebook Messenger, flow builder, and the ReplyBase dashboard.",
    url: "https://replybase.co.uk/docs",
    type: "website",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20 flex flex-col">
      <LandingNavbar />
      <DocsContentWrapper>
        {children}
      </DocsContentWrapper>
      <LandingFooter />
    </div>
  );
}
