import { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Rocket,
  Database,
  Settings,
  Globe,
} from "lucide-react";
import DocLayout from "./_components/DocLayout";

export const metadata: Metadata = {
  title: "Documentation Overview",
  description: "Complete guides for setting up and using ReplyBase — Webchat, Telegram, Facebook Messenger, and more.",
};

const docCategories = [
  {
    title: "Get Started",
    icon: Rocket,
    description:
      "Step-by-step guide from account creation to your first live AI-powered channel",
    badge: "Start here",
    docs: [
      { name: "Overview", href: "/docs/get-started" },
      { name: "Account Setup", href: "/docs/get-started/account-setup" },
      { name: "Choose Your Channel", href: "/docs/get-started/choose-channel" },
      { name: "Test Your Channel", href: "/docs/get-started/live-test" },
    ],
  },
  {
    title: "Channels",
    icon: Globe,
    description:
      "Deep-dives into connecting and configuring each communication channel",
    badge: null,
    docs: [
      { name: "Webchat Guide", href: "/docs/channels/webchat" },
      { name: "Facebook Messenger", href: "/docs/channels/facebook" },
      { name: "Telegram Bot", href: "/docs/channels/telegram" },
      { name: "WhatsApp Cloud API", href: "/docs/channels/whatsapp" },
    ],
  },
  {
    title: "Platform",
    icon: Database,
    description:
      "Understanding the ReplyBase dashboard, AI workflows, and automation systems",
    badge: null,
    docs: [
      { name: "Dashboard Navigation", href: "/docs/admin-panel" },
      { name: "AI Workflows", href: "/docs/platform/ai-workflows" },
      { name: "Flow Builder", href: "/docs/platform/flow-builder" },
      { name: "Deployment Checklist", href: "/docs/platform/deployment-checklist" },
      { name: "Security & Privacy", href: "/docs/security" },
      { name: "Plans & Limits", href: "/docs/features" },
    ],
  },
  {
    title: "Resources",
    icon: Settings,
    description: "Additional resources to help you succeed with ReplyBase",
    badge: null,
    docs: [
      { name: "FAQ", href: "/docs/faq" },
      { name: "Webchat API Reference", href: "/docs/webchat-api-reference" },
      { name: "Troubleshooting", href: "/docs/troubleshooting" },
      { name: "Product Roadmap", href: "/docs/roadmap" },
    ],
  },
];

export default function DocsPage() {
  return (
    <DocLayout
      title="Documentation"
      description="Everything you need to set up ReplyBase, connect your channels, and start capturing leads automatically."
      videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      videoTitle="Introduction to ReplyBase"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {docCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
                  {category.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-indigo-600/30 text-indigo-300">
                      {category.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.docs.map((doc) => (
                  <li key={doc.name}>
                    <Link
                      href={doc.href}
                      className="text-slate-400 hover:text-indigo-400 flex items-center gap-2 text-sm transition-colors"
                    >
                      <FileText size={14} className="text-slate-500" />
                      {doc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-linear-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 p-8 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need more help?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl">
            Can't find what you're looking for? Our team is here to help you get started or solve any technical challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="https://app.replybase.co.uk"
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>
    </DocLayout>
  );
}
