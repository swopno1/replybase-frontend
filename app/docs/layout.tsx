import type { Metadata } from "next";

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
  return children;
}
