"use client";

import DocLayout from "../_components/DocLayout";

export default function AdminPanelDoc() {
  return (
    <DocLayout
      title="Admin Panel"
      description="Internal admin tools for operations, rollout control, and subscription oversight"
    >
      <section className="mb-10">
        <p className="text-slate-300">
          The admin panel is an internal operational area, not a
          customer-facing workspace section.
        </p>
        <p className="text-slate-300 mt-3">
          Access is enforced server-side and is currently limited to a single
          allowlisted admin identity in code.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Key Features
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Business Status: users, tenants, subscriptions, bots, contacts,
            conversations, and onboarding conversion.
          </li>
          <li>Subscribers: plan changes and subscription lifecycle operations.</li>
          <li>
            Onboarding: sessions, stage distribution, abandonment, and
            conversion.
          </li>
          <li>
            Webchat Monitoring: SLA dashboard, pilot telemetry, and rollout
            recommendations.
          </li>
          <li>Webchat Rollout: staged rollout mode controls.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Security Controls
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>admin layout access is guarded server-side</li>
          <li>admin APIs independently verify operators before returning data</li>
          <li>non-admin users are redirected or receive 403 responses</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current Admin Navigation</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Business Status</li>
          <li>Subscribers</li>
          <li>Onboarding</li>
          <li>Webchat Monitoring</li>
          <li>Webchat Rollout</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What Admin Can See Today</h2>
        <ul className="space-y-2 text-slate-300">
          <li>monthly revenue from active and trialing subscriptions</li>
          <li>recent subscription signups</li>
          <li>onboarding completion and abandonment metrics</li>
          <li>webchat rollout decision support across rollout stages</li>
          <li>staged release settings for off, pilot, tiered, and ga modes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>The admin area is intentionally separate from customer nav.</li>
          <li>
            This area is for internal operations and rollout management, not
            end-user self-service.
          </li>
        </ul>
      </section>
    </DocLayout>
  );
}
