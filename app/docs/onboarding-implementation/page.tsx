import { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, Database, Webhook } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onboarding Technical Notes",
  description: "Technical documentation for ReplyBase onboarding implementation and telemetry.",
  alternates: {
    canonical: "/docs/onboarding-implementation",
  },
};

export default function OnboardingImplementationDoc() {
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
            Onboarding Technical Notes
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Technical notes for tenant teams and implementation partners
          </p>

          <section className="mb-12">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300 text-sm">
                Use this page only if your team is implementing custom
                onboarding telemetry or guided setup behavior on top of the
                standard tenant onboarding flow.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Database Models
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  • OnboardingSession: tracks setup progression and completion
                </li>
                <li>• DemoTemplate: stores reusable flow templates</li>
                <li>• OnboardingMetrics: activation and conversion tracking</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Components
            </h2>
            <div className="space-y-3">
              {[
                "Onboarding service to manage session state",
                "Flow handler to process messages and transitions",
                "Webhook integration for setup event routing",
                "Dashboard analytics for onboarding metrics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Database className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Webhook Integration
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="flex items-start gap-3">
                <Webhook className="text-indigo-400 mt-1" size={18} />
                <div className="text-sm text-slate-300">
                  Webhook-connected onboarding events can feed setup analytics,
                  milestone tracking, and troubleshooting workflows.
                </div>
              </div>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need the high-level flow?
            </h3>
            <p className="text-slate-300 mb-4">
              Go back to the tenant onboarding guide for the practical setup
              journey.
            </p>
            <Link
              href="/docs/onboarding"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Tenant Onboarding Guide
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
