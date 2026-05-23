import { Metadata } from "next";
import Link from "next/link";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Quick Start Guide",
  description: "Get up and running with ReplyBase in minutes. Follow this guide for a professional setup.",
  alternates: {
    canonical: "/docs/quick-start",
  },
};

export default function QuickStartDoc() {
  return (
    <DocLayout
      title="Quick Start Guide"
      description="Professional setup journey for ReplyBase workspace owners"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 1: Workspace Activation
        </h2>
        <p className="text-slate-300 mb-4">
          After registration, your workspace is initialized with seed data
          (contacts, conversations, bots). This allows you to explore the
          dashboard immediately.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 2: Choose Your Plan
        </h2>
        <p className="text-slate-300 mb-4">
          ReplyBase currently shows five plans in the pricing and billing flow:
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Link
            href="https://app.replybase.co.uk/settings?tab=billing"
            className="bg-slate-800 border border-slate-700 rounded p-3 hover:border-indigo-500 transition-colors"
          >
            Free: GBP0/mo
          </Link>
          <Link
            href="https://app.replybase.co.uk/settings?tab=billing"
            className="bg-slate-800 border border-slate-700 rounded p-3 hover:border-indigo-500 transition-colors"
          >
            Launch: GBP29/mo
          </Link>
          <Link
            href="https://app.replybase.co.uk/settings?tab=billing"
            className="bg-slate-800 border border-slate-700 rounded p-3 hover:border-indigo-500 transition-colors"
          >
            Grow: GBP49/mo
          </Link>
          <Link
            href="https://app.replybase.co.uk/settings?tab=billing"
            className="bg-slate-800 border border-slate-700 rounded p-3 hover:border-indigo-500 transition-colors"
          >
            Scale: GBP89/mo
          </Link>
          <Link
            href="https://app.replybase.co.uk/settings?tab=billing"
            className="bg-slate-800 border border-slate-700 rounded p-3 hover:border-indigo-500 transition-colors"
          >
            Business: GBP249/mo
          </Link>
        </div>
        <p className="text-slate-300 text-sm mt-4">
          Paid plans include a 14-day free trial before standard monthly billing
          begins.
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
            Important: Flow building is integrated directly into the ReplyBase
            dashboard for a seamless experience.
          </p>
          <p className="mt-2">
            An active subscription is required to activate and assign flows to
            your bots.
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
          ReplyBase currently offers two primary setup paths for active use:
        </p>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>Webchat Widget</li>
          <li>Facebook Page</li>
        </ul>
        <div className="bg-indigo-900/20 border border-indigo-700/50 p-4 rounded-lg mb-6 text-sm text-slate-300">
          <p>
            <strong>Note:</strong> WhatsApp and Telegram integrations are
            currently in development and will be available soon.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Option A: Webchat Widget
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

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">
          Option B: Facebook Page
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>Prerequisite: create at least one bot in Bots first.</li>
          <li>1. Open Facebook Pages from the sidebar.</li>
          <li>2. Click Sign In with Facebook and authorize ReplyBase.</li>
          <li>3. Select the Page(s) you want to connect from the list.</li>
          <li>4. Click Connect Page.</li>
          <li>
            5. Use the Assign Flow dropdown to select which ReplyBase bot powers
            this page.
          </li>
          <li>6. Click Save.</li>
        </ul>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4 text-sm text-slate-300">
          <p className="font-semibold text-white mb-1">
            Professional Deployment Strategy
          </p>
          <p>
            For professional production use, we recommend starting with Webchat or Facebook
            Messenger to validate your core conversation flows before scaling to
            additional communication channels.
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
            Facebook-specific checks
          </p>
          <p>1. Open your Facebook Page and send a message as a visitor.</p>
          <p className="mt-1">
            2. Confirm the bot replies according to your assigned flow.
          </p>
          <p className="mt-1">
            3. In ReplyBase, verify the conversation appears in the
            Conversations tab.
          </p>
          <p className="mt-1">
            4. If no reply appears, check the Facebook integration page to
            ensure your Page is still connected and a flow is assigned.
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
          <li>Facebook Pages: account connection and flow assignment.</li>
          <li>Webchat Widget: setup, keys, embed, diagnostics.</li>
          <li>Billing: plan state and customer portal.</li>
          <li>Settings: basic account details only right now.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current Platform Constraints</h2>
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
          Webchat Status
        </Link>
      </div>
    </DocLayout>
  );
}
