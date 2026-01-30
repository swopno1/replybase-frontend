"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";

export default function AdminPanelDoc() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Admin Panel</h1>
          <p className="text-lg text-slate-400 mb-8">
            Internal admin tools for business metrics and subscriber management
          </p>

          <section className="mb-12">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                The admin panel is a protected internal area available only to
                authorized administrators. Access is enforced server-side via a
                hardcoded admin email in the app layout.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="space-y-3">
              {[
                "Business status dashboard (users, tenants, revenue, bots, contacts)",
                "Subscriber management with search, filters, and plan updates",
                "Subscription status editing and cancellation controls",
                "Protected admin APIs for subscribers and plan data",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Users className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Security Controls
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Server-side email verification on every admin request</li>
                <li>• Admin routes are not linked in navigation</li>
                <li>• All admin APIs return 403 for non-admin users</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">Need onboarding docs?</h3>
            <p className="text-slate-300 mb-4">
              Review the onboarding system documentation for client setup flows.
            </p>
            <Link
              href="/docs/onboarding"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Onboarding Docs
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
