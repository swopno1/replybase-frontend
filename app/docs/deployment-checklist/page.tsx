"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, CheckSquare } from "lucide-react";
import Link from "next/link";

const checklistSections = [
  {
    title: "Pre-Deployment Setup",
    items: [
      "SSH access and Coolify dashboard access",
      "Database URL ready",
      "Google & Facebook OAuth apps configured",
      "Stripe account and webhook configured",
      "Domains and SSL verified",
    ],
  },
  {
    title: "Environment Variables",
    items: [
      "OIDC keys generated and stored securely",
      "AUTH_SECRET and TYPEBOT secrets generated",
      "OAuth client IDs and secrets configured",
      "Stripe keys and price IDs set",
      "DATABASE_URL verified",
    ],
  },
  {
    title: "Database Setup",
    items: [
      "Prisma migrations applied",
      "Tables verified",
      "Stripe plans seeded",
    ],
  },
  {
    title: "Typebot Configuration",
    items: [
      "OIDC provider enabled",
      "Public auth disabled (Google/Facebook/Email)",
      "Subscription checks enforced",
      "Engine restarted",
    ],
  },
  {
    title: "Testing & Launch",
    items: [
      "OIDC endpoints verified",
      "Subscription flow tested",
      "Webhook events validated",
      "Health checks passing",
    ],
  },
];

export default function DeploymentChecklistDoc() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Documentation
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            Production Deployment Checklist
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Use this checklist to track deployment readiness
          </p>

          <div className="space-y-6">
            {checklistSections.map((section) => (
              <div
                key={section.title}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckSquare size={18} className="text-indigo-400" />
                  {section.title}
                </h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg mt-12">
            <h3 className="text-white font-bold mb-2">Need a quick start?</h3>
            <p className="text-slate-300 mb-4">
              Use the quick start guide to deploy in 1-2 hours.
            </p>
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Quick Start Guide
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
