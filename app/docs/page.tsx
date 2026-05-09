import { Metadata } from "next";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import {
  FileText,
  BookOpen,
  Rocket,
  Database,
  Settings,
  Globe,
  Send,
  MessageSquare,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Complete guides for setting up and using ReplyBase — Webchat, Telegram, Facebook Messenger, and more.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  const docCategories = [
    {
      title: "Get Started",
      icon: Rocket,
      description:
        "Step-by-step guide from account creation to your first live AI-powered channel",
      badge: "Start here",
      docs: [
        { name: "Get Started Overview", href: "/docs/get-started" },
        {
          name: "Step 1 — Create Your Account",
          href: "/docs/get-started/account-setup",
        },
        {
          name: "Step 2 — Choose Your Channel",
          href: "/docs/get-started/choose-channel",
        },
        {
          name: "Step 3a — Set Up Webchat",
          href: "/docs/get-started/webchat-setup",
        },
        {
          name: "Step 3b — Set Up Telegram",
          href: "/docs/get-started/telegram-setup",
        },
        {
          name: "Step 3c — Set Up Facebook",
          href: "/docs/get-started/facebook-setup",
        },
        {
          name: "Step 4 — Test Your Channel",
          href: "/docs/get-started/live-test",
        },
        { name: "Step 5 — Next Steps", href: "/docs/get-started/next-steps" },
      ],
    },
    {
      title: "Webchat",
      icon: Globe,
      description:
        "Embed the ReplyBase chat widget on your website — setup, API reference, and diagnostics",
      badge: null,
      docs: [
        { name: "Webchat Embed Quickstart", href: "/docs/webchat-embed" },
        {
          name: "Webchat Implementation Guide",
          href: "/docs/webchat-implementation-guide",
        },
        { name: "Webchat API Reference", href: "/docs/webchat-api-reference" },
        { name: "Webchat QA And Rollout", href: "/docs/webchat-qa-rollout" },
      ],
    },
    {
      title: "Telegram",
      icon: Send,
      description:
        "Connect a Telegram bot to your workspace — setup, management, and troubleshooting",
      badge: null,
      docs: [
        {
          name: "Telegram Setup Guide",
          href: "/docs/get-started/telegram-setup",
        },
        { name: "Telegram Channel Reference", href: "/docs/telegram-delivery" },
      ],
    },
    {
      title: "Facebook Messenger",
      icon: MessageSquare,
      description:
        "Connect your Facebook Page to automatically reply to Messenger enquiries",
      badge: null,
      docs: [
        {
          name: "Facebook Setup Guide",
          href: "/docs/get-started/facebook-setup",
        },
        {
          name: "Facebook Messenger Reference",
          href: "/docs/facebook-delivery",
        },
      ],
    },
    {
      title: "WhatsApp",
      icon: Phone,
      description: "WhatsApp Business Cloud API integration — now in Beta",
      badge: "Beta",
      docs: [{ name: "WhatsApp Overview", href: "/docs/whatsapp-delivery" }],
    },
    {
      title: "Product Snapshot",
      icon: BookOpen,
      description:
        "Understand current features, plan limits, and what is available today",
      badge: null,
      docs: [
        { name: "Plans And Limits", href: "/docs/features" },
        { name: "Current Direction", href: "/docs/roadmap" },
        { name: "Implementation Snapshot", href: "/docs/implementation" },
      ],
    },
    {
      title: "Workspace And Security",
      icon: Database,
      description:
        "Daily workspace usage guidance, security posture, and configuration",
      badge: null,
      docs: [
        { name: "Workspace Navigation Guide", href: "/docs/modular-dashboard" },
        { name: "Security Model", href: "/docs/security" },
      ],
    },
    {
      title: "Tenant Operations",
      icon: Settings,
      description:
        "Guidance for workspace owners, billing, and account-level operations",
      badge: null,
      docs: [
        { name: "Workspace Owner Guide", href: "/docs/admin-panel" },
        { name: "Plans And Limits", href: "/docs/features" },
        { name: "Security Model", href: "/docs/security" },
      ],
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to set up ReplyBase, connect your channels, and
            start capturing leads automatically.
          </p>
          <div className="mt-6">
            <Link
              href="/docs/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
            >
              Start Here — Get Started Guide
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {docCategories.map((category) => {
            const Icon = category.icon;
            const isComingSoon = category.badge === "Coming Soon";
            return (
              <div
                key={category.title}
                className={`bg-slate-800 p-6 rounded-2xl border transition-all ${
                  isComingSoon
                    ? "border-slate-700 opacity-70"
                    : category.badge === "Start here"
                      ? "border-indigo-700/60 hover:border-indigo-500"
                      : "border-slate-700 hover:border-indigo-500/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-lg ${
                      isComingSoon ? "bg-slate-700" : "bg-indigo-600"
                    }`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white">
                      {category.title}
                    </h2>
                    {category.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          category.badge === "Start here"
                            ? "bg-indigo-600/30 text-indigo-300"
                            : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {category.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.docs.map((doc) => (
                    <li key={doc.name}>
                      <Link
                        href={doc.href}
                        className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-sm"
                      >
                        <FileText size={14} />
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="bg-linear-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-700/50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="https://app.replybase.co.uk"
              className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg border border-slate-700 transition-colors text-center"
            >
              <div className="text-white font-semibold mb-1">Launch App</div>
              <div className="text-slate-400 text-sm">
                Open the SaaS dashboard
              </div>
            </Link>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg border border-slate-700 transition-colors text-center"
            >
              <div className="text-white font-semibold mb-1">Get Support</div>
              <div className="text-slate-400 text-sm">Contact our team</div>
            </Link>
            <Link
              href="/blog"
              className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg border border-slate-700 transition-colors text-center"
            >
              <div className="text-white font-semibold mb-1">Read Blog</div>
              <div className="text-slate-400 text-sm">
                Product updates and guides
              </div>
            </Link>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
