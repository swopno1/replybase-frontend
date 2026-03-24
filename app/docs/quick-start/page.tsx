"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";

export default function QuickStartDoc() {
  return (
    <DocLayout
      title="Quick Start Guide"
      description="Get from account creation to a working ReplyBase inbox source with the current dashboard flow"
    >
      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg mb-8">
        <p className="text-white font-semibold mb-2">
          Estimated time: 15 to 25 minutes
        </p>
        <p className="text-slate-300 text-sm">
          This guide follows the product flow that is currently implemented in
          the ReplyBase SaaS dashboard.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">By The End</h2>
        <ul className="space-y-2 text-slate-300">
          <li>created your workspace</li>
          <li>opened the bot builder from ReplyBase</li>
          <li>connected at least one live source</li>
          <li>
            confirmed where conversations, contacts, and leads appear in the
            dashboard
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 1: Create Your Account
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>1. Visit app.replybase.co.uk.</li>
          <li>2. Open Sign Up.</li>
          <li>3. Choose Google sign-in or Email and password registration.</li>
          <li>
            4. If you register with email and password, ReplyBase creates a new
            tenant workspace automatically.
          </li>
          <li>5. After sign-in, you land in the main dashboard.</li>
        </ul>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p>
            Notes: The login UI currently shows Apple as a placeholder, but it
            is not active.
          </p>
          <p className="mt-2">
            Registration requires first name, last name, email, and a password
            with at least 8 characters.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 2: Choose Your Plan
        </h2>
        <p className="text-slate-300 mb-4">
          ReplyBase currently shows four plans in the pricing and billing flow:
        </p>
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
        <p className="text-slate-300 text-sm mt-4">
          Paid plans currently advertise a 14-day free trial in the UI. You can
          upgrade from the Billing page or start from the Pricing page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 3: Create Your First Bot
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>1. Open Bots from the left sidebar.</li>
          <li>2. Review bots already in your workspace.</li>
          <li>3. Use bot creation flow if you need a new bot.</li>
          <li>4. Use Launch Builder to open the external builder.</li>
          <li>
            5. After creating your bot, open its detail page and assign an Entry
            Flow. Without this, webchat will only use AI fallback responses —
            structured conversation flows will not run.
          </li>
        </ul>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p>
            Important: Builder access is intentionally launched through
            ReplyBase.
          </p>
          <p className="mt-2">
            Subscription status is checked before builder access is granted.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 4: Design Your Conversation Flow
        </h2>
        <p className="text-slate-300 mb-4">
          ReplyBase currently supports two conversation-design surfaces:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>the external builder launched from Bots</li>
          <li>the in-app Flows area for creating and managing flows</li>
        </ul>
        <p className="text-slate-300 mt-4 mb-2">In Flows, you can:</p>
        <ul className="space-y-2 text-slate-300">
          <li>
            create, edit, duplicate, activate, deactivate, and assign flows
          </li>
          <li>review lead and session counts per flow</li>
        </ul>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p className="font-semibold text-white mb-1">
            Connect your flow to a bot
          </p>
          <p>
            Once your flow is active, go to Bots, open the bot you want to use,
            and select the flow as its Entry Flow. This is what connects the
            flow to webchat — without it, only the AI fallback responds.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 5: Connect Your First Source
        </h2>
        <p className="text-slate-300 mb-4">
          ReplyBase currently exposes two primary setup paths for active use,
          plus one legacy integration surface still present in the dashboard:
        </p>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>Telegram Bot</li>
          <li>Webchat Widget</li>
          <li>Facebook Pages (legacy surface still present in app)</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3">
          Option A: Telegram Bot
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>Prerequisite: create at least one bot in Bots first.</li>
          <li>1. Open Telegram Bot from the sidebar.</li>
          <li>2. Select which ReplyBase bot should power Telegram replies.</li>
          <li>
            3. Paste the bot token from BotFather (usually number:secret).
          </li>
          <li>4. Optionally set a friendly internal channel name.</li>
          <li>5. Click Connect Bot.</li>
          <li>
            Keep your token private. ReplyBase stores it encrypted at rest.
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">
          Option B: Webchat Widget
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>1. Open Webchat Widget from the sidebar.</li>
          <li>2. Choose a bot.</li>
          <li>
            2a. Confirm the bot has an Entry Flow set. The Webchat Widget page
            shows a warning banner if it does not. Open the bot in Bots to
            assign one before going live.
          </li>
          <li>3. Create or select a web channel.</li>
          <li>4. Configure title, primary color, and welcome message.</li>
          <li>5. Save site configuration and allowed domains.</li>
          <li>6. Copy embed snippet into your website.</li>
          <li>7. Use the built-in test harness before going live.</li>
        </ul>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p className="font-semibold text-white mb-1">
            Legacy integration note
          </p>
          <p>
            Facebook Pages is still present in the current dashboard, but it is
            not the primary public setup path in current product direction.
            Prefer Telegram or Webchat for new setup guidance.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 6: Test Your Bot
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>1. Send a real test message through the connected source.</li>
          <li>2. Open Conversations to confirm the record exists.</li>
          <li>3. Open Contacts to confirm profile creation.</li>
          <li>4. Open Leads if your flow collects lead data.</li>
          <li>
            5. Open Activity only for a basic overview; it still uses
            placeholder/mock data.
          </li>
        </ul>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p className="font-semibold text-white mb-2">
            Telegram-specific checks
          </p>
          <p>1. In Telegram, send /start (or any message) to your bot.</p>
          <p className="mt-1">
            2. Confirm a reply is returned within a few seconds.
          </p>
          <p className="mt-1">
            3. In ReplyBase, verify webhook status is active in Telegram Bot.
          </p>
          <p className="mt-1">
            4. If no reply appears, check Recent Webhook Activity and reconnect
            webhook.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 7: Know Where To Manage Things
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Dashboard: AI status, engine status, and recent activity summary.
          </li>
          <li>Bots: bot list and builder launch.</li>
          <li>Flows: flow lifecycle and assignment.</li>
          <li>Telegram Bot: token setup and webhook logs.</li>
          <li>Webchat Widget: setup, keys, embed, diagnostics.</li>
          <li>
            Facebook Pages: legacy integration surface still available in app.
          </li>
          <li>Billing: plan state and customer portal.</li>
          <li>Settings: basic account details only right now.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Known MVP Limits</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            The Activity page is not backed by a full real event feed yet.
          </li>
          <li>
            Usage accounting and advanced analytics are partially implemented.
          </li>
          <li>
            Settings is currently a lightweight account page, not full workspace
            administration.
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
