"use client";

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
} from "lucide-react";

export default function DocsPage() {
  const docCategories = [
    {
      title: "Launch And Setup",
      icon: Rocket,
      description:
        "Create your workspace, connect sources, and launch with confidence",
      docs: [
        { name: "Quick Start Guide", href: "/docs/quick-start" },
        { name: "Deployment Plan", href: "/docs/deployment-plan" },
        { name: "Deployment Checklist", href: "/docs/deployment-checklist" },
      ],
    },
    {
      title: "Product Snapshot",
      icon: BookOpen,
      description:
        "Understand features, plan value, and what is available today",
      docs: [
        { name: "Current Direction", href: "/docs/roadmap" },
        { name: "Plans And Limits", href: "/docs/features" },
        { name: "Implementation Snapshot", href: "/docs/implementation" },
      ],
    },
    {
      title: "Workspace And Security",
      icon: Database,
      description:
        "Daily workspace usage guidance, security posture, and configuration",
      docs: [
        { name: "Workspace Navigation Guide", href: "/docs/modular-dashboard" },
        { name: "Security Model", href: "/docs/security" },
      ],
    },
    {
      title: "Webchat Delivery",
      icon: Globe,
      description:
        "Implementation, API, rollout status, and embed guidance for webchat",
      docs: [
        { name: "Webchat Status", href: "/docs/webchat-progress" },
        {
          name: "Webchat Implementation Guide",
          href: "/docs/webchat-implementation-guide",
        },
        { name: "Webchat API Reference", href: "/docs/webchat-api-reference" },
        { name: "Webchat QA And Rollout", href: "/docs/webchat-qa-rollout" },
        { name: "Webchat Embed Quickstart", href: "/docs/webchat-embed" },
      ],
    },
    {
      title: "Tenant Operations",
      icon: Settings,
      description:
        "Guidance for workspace owners, onboarding, and account-level operations",
      docs: [
        { name: "Workspace Owner Guide", href: "/docs/admin-panel" },
        { name: "Onboarding Overview", href: "/docs/onboarding" },
        {
          name: "Onboarding Technical Notes",
          href: "/docs/onboarding-implementation",
        },
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
            Practical product documentation for the current ReplyBase SaaS
            application
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-3">
            This documentation is written for users and tenant workspace owners.
            Internal planning, roadmap, and production notes live in
            replybase-saas/Product_Details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {docCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
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
                        <FileText size={16} />
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
