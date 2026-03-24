"use client";

import DocLayout from "../_components/DocLayout";

const plans = [
  {
    name: "Free",
    price: "GBP0",
    limits:
      "Best for testing and first setup: 1 bot, 100 daily messages, 3,000 monthly messages, 1 channel per bot, 100 max conversations",
  },
  {
    name: "Starter",
    price: "GBP19",
    limits:
      "Best for small live deployments: 3 bots, 1,000 daily messages, 30,000 monthly messages, 3 channels per bot, 1,000 max conversations",
  },
  {
    name: "Pro",
    price: "GBP49",
    limits:
      "Best for growing teams and agencies: 10 bots, 5,000 daily messages, 150,000 monthly messages, 5 channels per bot, 5,000 max conversations",
  },
  {
    name: "Business",
    price: "GBP99",
    limits:
      "Best for high-volume deployments: 50 bots, 20,000 daily messages, 600,000 monthly messages, 10 channels per bot, 20,000 max conversations",
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
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Channels</h3>
        <ul className="space-y-2 text-slate-300">
          <li>Telegram Bot integration</li>
          <li>Webchat Widget integration</li>
          <li>Email and contact-form intake are planned adapters</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">
          Flow Management
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>create, edit, duplicate, activate, and delete flows</li>
          <li>assign flows to Facebook pages</li>
          <li>see per-flow lead and session counts</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current UX Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Telegram and Webchat have dedicated setup pages.</li>
          <li>
            Unified inbox language is being standardized across product UI.
          </li>
          <li>
            Settings and Activity exist, but are lighter than channel and
            webchat areas.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What Is Not Fully Mature Yet
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>activity history is still placeholder/mock in current UI</li>
          <li>some usage analytics are still mocked behind API layer</li>
          <li>advanced workspace settings are minimal</li>
          <li>full self-serve team or role management is not present</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Billing Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Paid plans currently present a 14-day free trial in pricing UI.
          </li>
          <li>Plan-aware checks enforce bot and usage limits.</li>
          <li>Billing is centered in Billing screen, not Settings.</li>
        </ul>
        <p className="text-slate-300 mt-4">
          Canonical product planning and feature strategy are maintained in
          replybase-saas/Product_Details.
        </p>
      </section>
    </DocLayout>
  );
}
