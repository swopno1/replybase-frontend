"use client";

import DocLayout from "../_components/DocLayout";

export default function RoadmapDoc() {
  return (
    <DocLayout
      title="Product Roadmap"
      description="Current product direction summary. Canonical planning lives in replybase-saas/Product_Details."
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
        <p className="text-slate-300">
          ReplyBase is focused on a Unified Business Inbox model: one place to
          receive and respond to customer messages, with practical automation
          and lead capture.
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
          <li>
            Improve first-run UX across active sources and lead workflows.
          </li>
          <li>Expand settings into true workspace management.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Operational Priorities
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>finalize webchat rollout playbooks and monitoring</li>
          <li>continue hardening public source endpoints</li>
          <li>improve onboarding conversion and source health visibility</li>
          <li>reduce mismatch between dashboard copy and capability</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Longer-Term Opportunities
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>richer analytics and reporting</li>
          <li>stronger workspace administration tooling</li>
          <li>broader source coverage after consistency goals are met</li>
          <li>better collaboration and role-based workflows</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Roadmap Principle
        </h2>
        <p className="text-slate-300">
          The best next investments for ReplyBase are product consistency,
          source parity, observability, and deployment reliability before major
          expansion work.
        </p>
        <p className="text-slate-300 mt-3">
          For canonical planning detail, use replybase-saas/Product_Details and
          replybase-saas/Product_Details/todo.
        </p>
      </section>
    </DocLayout>
  );
}
