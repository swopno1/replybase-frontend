"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function ModularDashboardDoc() {
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
            Modular Dashboard Guide
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Add new dashboard sections safely with error boundaries
          </p>

          <section className="mb-12">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                The dashboard uses a modular architecture where each section is
                wrapped with an error boundary. This ensures one broken section
                doesn&apos;t crash the entire dashboard.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              How to Add a New Section
            </h2>
            <div className="space-y-3">
              {[
                "Create a new component in components/dashboard",
                "Fetch data in the page and pass it as props",
                "Wrap the component with DashboardErrorBoundary",
                "Keep the component presentational (no data fetching)",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <LayoutGrid className="text-indigo-400 mt-1" size={18} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Best Practices
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Keep components stateless when possible</li>
                <li>• Pass immutable props only</li>
                <li>• Avoid fetching data inside error boundaries</li>
                <li>• Provide useful fallback UI for errors</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">Need admin guidance?</h3>
            <p className="text-slate-300 mb-4">
              Review the admin panel documentation for management features.
            </p>
            <Link
              href="/docs/admin-panel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Admin Panel Docs
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
