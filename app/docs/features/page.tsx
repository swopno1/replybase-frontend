"use client";

import DocLayout from "../_components/DocLayout";

const plans = [
  {
    name: "Free",
    price: "GBP0",
    limits: "1 bot, 100 daily messages, 3,000 monthly messages",
  },
  {
    name: "Starter",
    price: "GBP19",
    limits: "3 bots, 1,000 daily messages, 30,000 monthly messages",
  },
  {
    name: "Pro",
    price: "GBP49",
    limits: "10 bots, 5,000 daily messages, 150,000 monthly messages",
  },
  {
    name: "Business",
    price: "GBP99",
    limits: "50 bots, 20,000 daily messages, 600,000 monthly messages",
  },
];

export default function FeaturesDoc() {
  return (
    <DocLayout
      title="Subscription Features"
      description="Current ReplyBase plans, limits, and feature availability based on the implemented product"
    >
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
          Available Product Areas
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Core workspace: auth, tenant setup, bot management, billing.</li>
          <li>Conversation operations: conversations, contacts, leads.</li>
          <li>Channels: Facebook Pages, Telegram Bot, Webchat Widget.</li>
          <li>Flow management: create/edit/duplicate/activate/assign flows.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Current Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Paid plans currently show a 14-day free trial in the pricing UI.
          </li>
          <li>
            Plan-aware limits are enforced for resources like bot creation.
          </li>
          <li>
            Settings and Activity are still lighter than channel/webchat
            surfaces.
          </li>
        </ul>
      </section>
    </DocLayout>
  );
}
