"use client";

import DocLayout from "../_components/DocLayout";

export default function RoadmapDoc() {
  return (
    <DocLayout
      title="Product Roadmap"
      description="Current product direction based on the implemented application and the next most practical improvements"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
        <p className="text-slate-300">
          ReplyBase is strong in webchat, billing, and core channel operations,
          but still uneven in some dashboard areas.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Live And Usable Today
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Account registration and tenant-scoped workspaces.</li>
          <li>Bot management and secure builder launch.</li>
          <li>
            Facebook Pages, Telegram Bot, and Webchat Widget integrations.
          </li>
          <li>Conversations, contacts, leads, billing, and admin surfaces.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Next Highest-Value Improvements
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Replace placeholder activity data with a real event stream.</li>
          <li>Complete usage accounting and plan-usage visibility.</li>
          <li>Improve first-run UX across Facebook, Telegram, and Webchat.</li>
          <li>Expand settings into true workspace management.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
