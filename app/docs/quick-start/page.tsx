"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";

export default function QuickStartDoc() {
  return (
    <DocLayout
      title="Quick Start Guide"
      description="Get from account creation to a working ReplyBase channel with the current dashboard flow"
    >
      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg mb-8">
        <p className="text-white font-semibold mb-2">
          Estimated time: 15 to 25 minutes
        </p>
        <p className="text-slate-300 text-sm">
          This guide follows the product flow currently implemented in the
          ReplyBase dashboard.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 1: Create Your Account
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>1. Visit app.replybase.co.uk and open Sign Up.</li>
          <li>2. Use Google sign-in or Email + Password registration.</li>
          <li>3. Registration automatically creates a tenant workspace.</li>
          <li>4. Sign in and land in the main dashboard.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 2: Choose Your Plan
        </h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-800 border border-slate-700 rounded p-3">
            Free: GBP0/mo
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded p-3">
            Starter: GBP19/mo
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded p-3">
            Pro: GBP49/mo
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded p-3">
            Business: GBP99/mo
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 3: Create Bot And Flow
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            1. Open Bots from the left sidebar and create/select your bot.
          </li>
          <li>2. Use Launch Builder for secure external builder access.</li>
          <li>
            3. Use Flows to create, edit, duplicate, activate, and assign flows.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 4: Connect A Channel
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Facebook Pages: connect account, select pages, then enable AI in AI
            Status.
          </li>
          <li>
            Telegram Bot: add BotFather token and let ReplyBase configure
            webhooks.
          </li>
          <li>
            Webchat Widget: configure bot/channel/site, then copy embed snippet.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 5: Validate End-To-End
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>1. Send a real channel message.</li>
          <li>2. Confirm records in Conversations, Contacts, and Leads.</li>
          <li>
            3. Use Billing for plan status and customer portal management.
          </li>
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/docs/features"
          className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg border border-slate-700 transition-colors"
        >
          Subscription Features
        </Link>
        <Link
          href="/docs/webchat-progress"
          className="bg-slate-800 hover:bg-slate-700 p-4 rounded-lg border border-slate-700 transition-colors"
        >
          Webchat Progress
        </Link>
      </div>
    </DocLayout>
  );
}
