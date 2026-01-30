"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuickStartDoc() {
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
            Quick Start Guide
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Get started with ReplyBase in minutes
          </p>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg mb-8">
            <p className="text-white font-semibold mb-2">
              ⏱️ Estimated Time: 10-15 minutes
            </p>
            <p className="text-slate-300 text-sm">
              This guide will walk you through creating your first chatbot and
              connecting it to Facebook Messenger
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 1: Create Your Account
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>
                  Visit{" "}
                  <a
                    href="https://app.replybase.co.uk"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    app.replybase.co.uk
                  </a>
                </li>
                <li>
                  Click &quot;Sign Up&quot; and choose your preferred method:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm text-slate-400">
                    <li>Google OAuth (recommended for quick start)</li>
                    <li>Facebook OAuth</li>
                    <li>Email & password</li>
                  </ul>
                </li>
                <li>Complete email verification if using email signup</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 2: Choose Your Plan
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300 mb-4">
                ReplyBase offers 4 pricing tiers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <h3 className="text-white font-bold mb-2">Free</h3>
                  <p className="text-2xl font-bold text-indigo-400 mb-2">
                    $0<span className="text-sm text-slate-400">/month</span>
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 1 bot</li>
                    <li>• 100 daily messages</li>
                    <li>• Basic features</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-indigo-600">
                  <div className="text-xs bg-indigo-600 text-white px-2 py-1 rounded inline-block mb-2">
                    RECOMMENDED
                  </div>
                  <h3 className="text-white font-bold mb-2">Starter</h3>
                  <p className="text-2xl font-bold text-indigo-400 mb-2">
                    $29<span className="text-sm text-slate-400">/month</span>
                  </p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 5 bots</li>
                    <li>• 1,000 daily messages</li>
                    <li>• API access</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                You can start with the Free plan and upgrade anytime.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 3: Create Your First Bot
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>
                  Navigate to the <strong className="text-white">Bots</strong>{" "}
                  section in your dashboard
                </li>
                <li>
                  Click{" "}
                  <strong className="text-white">
                    &quot;Create New Bot&quot;
                  </strong>
                </li>
                <li>
                  Fill in bot details:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm text-slate-400">
                    <li>Bot Name (e.g., &quot;Customer Support Bot&quot;)</li>
                    <li>Description (optional)</li>
                    <li>Select a template or start from scratch</li>
                  </ul>
                </li>
                <li>
                  Click{" "}
                  <strong className="text-white">&quot;Create Bot&quot;</strong>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 4: Design Your Conversation Flow
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300 mb-4">
                ReplyBase uses a visual bot builder powered by Typebot. You can
                create complex conversation flows with drag-and-drop ease.
              </p>
              <div className="bg-slate-900 p-4 rounded border border-slate-700 mb-4">
                <h4 className="text-white font-semibold mb-2">
                  Default Flow Includes:
                </h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>✓ Welcome message</li>
                  <li>✓ Lead qualification questions</li>
                  <li>✓ Interest level tracking</li>
                  <li>✓ Plan preference collection</li>
                  <li>✓ Contact information capture</li>
                </ul>
              </div>
              <p className="text-sm text-slate-400">
                You can customize this flow or create your own from scratch
                using the bot builder.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 5: Connect to Facebook Messenger
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>
                  Go to <strong className="text-white">Channels</strong> section
                </li>
                <li>
                  Click{" "}
                  <strong className="text-white">
                    &quot;Add Channel&quot;
                  </strong>
                </li>
                <li>
                  Select{" "}
                  <strong className="text-white">
                    &quot;Facebook Messenger&quot;
                  </strong>
                </li>
                <li>
                  Click{" "}
                  <strong className="text-white">
                    &quot;Connect Facebook&quot;
                  </strong>{" "}
                  and authorize ReplyBase
                </li>
                <li>Select the Facebook Page you want to connect</li>
                <li>Configure webhook settings (automatic)</li>
              </ol>

              <div className="bg-amber-900/20 border border-amber-700/50 p-4 rounded mt-4">
                <p className="text-amber-300 text-sm">
                  <strong>Note:</strong> You need to have a Facebook Page to use
                  Messenger integration. If you don&apos;t have one, you can
                  create it at{" "}
                  <a
                    href="https://facebook.com/pages/create"
                    className="underline"
                  >
                    facebook.com/pages/create
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Step 6: Test Your Bot
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ol className="list-decimal list-inside space-y-3 text-slate-300">
                <li>Open your Facebook Page</li>
                <li>
                  Click the <strong className="text-white">Message</strong>{" "}
                  button
                </li>
                <li>Send a test message</li>
                <li>Your bot should respond based on your configured flow</li>
                <li>
                  Check the{" "}
                  <strong className="text-white">Conversations</strong> tab in
                  ReplyBase to see the interaction
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/docs/features"
                className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg border border-slate-700 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">Explore Features</h3>
                <p className="text-sm text-slate-400">
                  Learn about all the features available in your plan
                </p>
              </Link>
              <Link
                href="/docs/roadmap"
                className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg border border-slate-700 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">View Roadmap</h3>
                <p className="text-sm text-slate-400">
                  See what&apos;s coming next to ReplyBase
                </p>
              </Link>
              <Link
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 p-6 rounded-lg border border-slate-700 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">Get Support</h3>
                <p className="text-sm text-slate-400">
                  Need help? Contact our support team
                </p>
              </Link>
              <Link
                href="https://app.replybase.co.uk"
                className="bg-indigo-600 hover:bg-indigo-500 p-6 rounded-lg border border-indigo-500 transition-colors"
              >
                <h3 className="text-white font-bold mb-2">Launch Dashboard</h3>
                <p className="text-sm text-indigo-100">
                  Start building your chatbots now
                </p>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
