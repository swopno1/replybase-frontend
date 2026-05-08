"use client";

import DocLayout from "../_components/DocLayout";

const plans = [
  {
    name: "Free",
    price: "GBP0",
    limits:
      "Best for testing and first setup: 1 bot, 100 daily messages, limited AI features, 1 source connection per bot, community support",
  },
  {
    name: "Starter",
    price: "GBP29",
    limits:
      "Smart Automation: 3 bots, 1,500 automations/month, 1,000 AI responses/month, CRM access, email support",
  },
  {
    name: "Pro",
    price: "GBP89",
    limits:
      "AI Co-Pilot: 10 bots, 10,000 automations/month, 7,500 AI responses/month, CRM access, API access, priority support",
  },
  {
    name: "Business",
    price: "GBP249",
    limits:
      "AI Agent: 25 bots, 40,000 automations/month, 25,000 AI responses/month, CRM access, API access, priority plus support",
  },
];

export default function FeaturesDoc() {
  return (
    <DocLayout
      title="Subscription Features"
      description="Current ReplyBase plans, limits, and feature availability based on the implemented product"
    >
      <p className="text-slate-300 mb-8">
        This page describes the current plan structure and feature availability
        reflected in the ReplyBase SaaS application and seed data.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Plan Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4"
            >
              <h3 className="text-xl text-white font-semibold">{plan.name}</h3>
              <p className="text-indigo-400 font-bold mb-2">
                {plan.price}/month
              </p>
              <p className="text-sm text-slate-300">{plan.limits}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Product Areas Available Today
        </h2>
        <h3 className="text-xl font-semibold text-white mb-3">
          Core Workspace
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>account registration and login</li>
          <li>tenant-based workspace creation</li>
          <li>bot management</li>
          <li>secure builder launch from ReplyBase</li>
          <li>billing page and Stripe customer portal flow</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">
          Conversation Operations
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>conversation list</li>
          <li>contact list with identity badges</li>
          <li>leads page for captured lead records</li>
          <li>
            basic dashboard health cards for AI status, connected pages, engine
            status, and recent message timing
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Sources</h3>
        <ul className="space-y-2 text-slate-300">
          <li>Telegram Bot integration</li>
          <li>Facebook Messenger integration</li>
          <li>Webchat Widget integration</li>
          <li>WhatsApp Business (Beta)</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">
          Flow Management
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>create, edit, duplicate, activate, and delete flows</li>
          <li>
            assign flows to active runtime targets, with some legacy page-based
            behavior still present
          </li>
          <li>see per-flow lead and session counts</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current UX Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Telegram, Facebook, and Webchat have dedicated setup pages.</li>
          <li>
            Unified inbox language is being standardized across product UI.
          </li>
          <li>
            Settings and Activity exist, but are lighter than integration and
            webchat areas.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          How To Get Best Value From Your Plan
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Start with one high-volume source before expanding integrations.
          </li>
          <li>
            Use Flows for repetitive questions to reduce manual response time.
          </li>
          <li>
            Use AI fallback for long-tail queries instead of building oversized
            flows.
          </li>
          <li>
            Review lead conversion and reply time weekly to spot bottlenecks.
          </li>
          <li>
            Upgrade when automation volume or AI usage consistently approaches
            your plan caps.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What Is Not Fully Mature Yet
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>advanced workspace settings are minimal</li>
          <li>full self-serve team or role management is not present</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Billing Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Paid plans present a 14-day free trial in the pricing UI.</li>
          <li>
            Plan-aware checks enforce bot, automation, and AI usage limits.
          </li>
          <li>Billing is centered in the Billing screen, not Settings.</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Canonical product planning and feature strategy are maintained in
          replybase-saas/Product_Details.
        </p>
      </section>
    </DocLayout>
  );
}
