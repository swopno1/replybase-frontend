"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ImplementationDoc() {
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
            Implementation Summary
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Highlights of the latest implementation updates
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              ✅ Completed Updates
            </h2>
            <div className="space-y-3">
              {[
                "Subscription redirect logic fixed for settings routes",
                "Subscription feature matrix documented for all plans",
                "Account & billing pages completed and connected",
                "Settings route finalized with missing features",
                "Documentation consolidated and indexed",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <CheckCircle className="text-green-500 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Platform Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "NextAuth authentication with OIDC provider",
                "Multi-tenant workspace isolation",
                "Bot management with Typebot integration",
                "Conversation intelligence & CRM views",
                "Lead capture and qualification workflow",
                "Stripe subscription billing & usage enforcement",
                "Admin dashboard for business metrics",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Next Implementation Focus
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• WhatsApp integration completion</li>
                <li>• Email notifications (new leads, new conversations)</li>
                <li>• Industry-specific bot templates</li>
                <li>• Mobile responsiveness improvements</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need the full implementation details?
            </h3>
            <p className="text-slate-300 mb-4">
              Refer to the internal docs for exact code changes and file
              locations.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Browse Documentation
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
