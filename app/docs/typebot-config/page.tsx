"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

export default function TypebotConfigDoc() {
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
            Typebot Engine Configuration
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Secure the engine to accept only OIDC tokens from ReplyBase
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Required Settings
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  1. Disable Public Authentication
                </h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Disable Google OAuth</li>
                  <li>• Disable Facebook OAuth</li>
                  <li>• Disable Email/Password login</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  2. Enable OIDC Provider
                </h3>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Issuer: https://app.replybase.co.uk/api/oidc</li>
                  <li>• Client ID: typebot-engine</li>
                  <li>
                    • Callback URL:
                    https://engine.replybase.co.uk/api/auth/oauth/generic-oidc/callback
                  </li>
                  <li>
                    • Scopes: openid email profile plan subscription_status
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  3. Enforce Token Validation
                </h3>
                <p className="text-sm text-slate-300">
                  All requests must validate token signature, issuer, audience,
                  and subscription status before access is granted.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Verification Steps
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Access engine without token → should return 401/403</li>
                <li>• Access via ReplyBase dashboard → should succeed</li>
                <li>• Verify token validation logs in Typebot engine</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need deployment steps?
            </h3>
            <p className="text-slate-300 mb-4">
              Use the deployment plan for a full environment setup checklist.
            </p>
            <Link
              href="/docs/deployment-plan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Deployment Plan
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
