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
          ReplyBase is beyond the earliest MVP stage in webchat, billing, and
          core channel management, but the product is still uneven across the
          dashboard. Some areas are polished, while others are intentionally
          lightweight or still mocked.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Live And Usable Today
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>account registration and sign-in</li>
          <li>tenant-based workspace model</li>
          <li>bot management and secure builder launch</li>
          <li>Facebook Pages integration with AI enablement</li>
          <li>Telegram bot connection flow</li>
          <li>webchat embed setup, diagnostics, and rollout controls</li>
          <li>conversations, contacts, and leads views</li>
          <li>billing and Stripe portal flow</li>
          <li>internal admin screens for subscribers and rollout</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Highest-Value Near-Term Improvements
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>stabilize Playwright-based webchat E2E coverage</li>
          <li>Replace placeholder activity data with a real event stream.</li>
          <li>Complete usage accounting and plan-usage visibility.</li>
          <li>Improve first-run UX across Facebook, Telegram, and Webchat.</li>
          <li>Expand settings into true workspace management.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Operational Priorities</h2>
        <ul className="space-y-2 text-slate-300">
          <li>finalize webchat rollout playbooks and monitoring</li>
          <li>continue hardening public channel endpoints</li>
          <li>improve onboarding conversion and channel health visibility</li>
          <li>reduce mismatch between dashboard copy and capability</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Longer-Term Opportunities</h2>
        <ul className="space-y-2 text-slate-300">
          <li>richer analytics and reporting</li>
          <li>stronger workspace administration tooling</li>
          <li>broader channel coverage after consistency goals are met</li>
          <li>better collaboration and role-based workflows</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Roadmap Principle</h2>
        <p className="text-slate-300">
          The best next investments for ReplyBase are product consistency,
          observability, testing stability, and making existing channel
          surfaces easier to adopt.
        </p>
      </section>
    </DocLayout>
  );
}
