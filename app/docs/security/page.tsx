"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function SecurityDoc() {
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
            Security Model (Application-Level)
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Secure access enforced via OIDC token validation
          </p>

          <section className="mb-10">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                ReplyBase uses application-level security. The SaaS app issues
                OIDC tokens and the Typebot Engine validates them for every
                request. No Nginx rules are required.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-3">
              {[
                "SaaS app issues OIDC tokens with subscription status claims",
                "Typebot Engine validates token signature via JWKS",
                "Issuer and audience are strictly verified",
                "Subscription status must be active or trialing",
                "Expired or invalid tokens receive 401 responses",
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
              What&apos;s Protected
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Builder access restricted to authenticated users</li>
                <li>• Subscription checks enforce paid access</li>
                <li>• Tokens expire after 1 hour by default</li>
                <li>• All requests are validated at the application layer</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Why This Is Secure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "OIDC tokens are cryptographically signed",
                "Issuer/audience checks prevent token misuse",
                "Subscription status is enforced on every request",
                "No reliance on infrastructure-level rules",
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

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need implementation details?
            </h3>
            <p className="text-slate-300 mb-4">
              Review the Typebot configuration guide for exact settings.
            </p>
            <Link
              href="/docs/typebot-config"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Typebot Configuration
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
