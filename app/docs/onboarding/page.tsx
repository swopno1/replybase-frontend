"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function OnboardingDoc() {
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
            Client Onboarding System
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Automated onboarding through Facebook Messenger
          </p>

          <section className="mb-12">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                ReplyBase includes a production-ready onboarding flow that
                guides new clients through a structured Messenger conversation.
                It captures lead data, plan selection, and redirects clients to
                the dashboard to complete setup.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Onboarding Flow Stages
            </h2>
            <div className="space-y-3">
              {[
                "Welcome and intent confirmation",
                "Collect name and business details",
                "Business type selection",
                "Contact info capture",
                "Plan selection and trial/payment choice",
                "Demo template selection",
                "Confirmation and dashboard redirect",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Sparkles className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              System Capabilities
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Automated lead capture</li>
                <li>• Plan and trial selection</li>
                <li>• Demo template recommendations</li>
                <li>• Analytics and conversion tracking</li>
                <li>• Admin visibility into onboarding sessions</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Implementation Details
            </h3>
            <p className="text-slate-300 mb-4">
              View the technical guide for database models and webhook
              integration.
            </p>
            <Link
              href="/docs/onboarding-implementation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Onboarding Implementation
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
