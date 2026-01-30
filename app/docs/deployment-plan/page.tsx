"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, ShieldCheck, Server, KeyRound } from "lucide-react";
import Link from "next/link";

export default function DeploymentPlanDoc() {
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
            Production Deployment Plan
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            High-level deployment plan for ReplyBase SaaS
          </p>

          <section className="mb-10">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                This plan assumes deployment on Coolify with application-level
                security (no Nginx rules). The Typebot Engine authenticates via
                OIDC tokens issued by the SaaS app.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Phase 1: Environment & Secrets
            </h2>
            <div className="space-y-3">
              {[
                "Generate OIDC keys and application secrets",
                "Configure environment variables for OAuth (Google/Facebook)",
                "Set Stripe keys and webhook secrets",
                "Add all variables to Coolify",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <KeyRound className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Phase 2: Database & Migrations
            </h2>
            <div className="space-y-3">
              {[
                "Provision PostgreSQL database",
                "Run Prisma migrations",
                "Seed Stripe plans in database",
                "Verify schema and data consistency",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Server className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Phase 3: Security & Typebot
            </h2>
            <div className="space-y-3">
              {[
                "Configure Typebot Engine OIDC provider",
                "Disable public auth providers (Google, Facebook, email)",
                "Enforce subscription status validation in Typebot",
                "Verify access control with test tokens",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <ShieldCheck className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Phase 4: Testing & Go Live
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Test OIDC endpoints and health checks</li>
                <li>• Validate subscription enforcement</li>
                <li>• Verify Stripe checkout and webhooks</li>
                <li>• Run smoke tests for core user flows</li>
                <li>• Announce launch and monitor logs</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need a step-by-step checklist?
            </h3>
            <p className="text-slate-300 mb-4">
              Use the production deployment checklist for full execution
              details.
            </p>
            <Link
              href="/docs/deployment-checklist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              View Deployment Checklist
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
