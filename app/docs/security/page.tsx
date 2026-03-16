"use client";

import DocLayout from "../_components/DocLayout";

export default function SecurityDoc() {
  return (
    <DocLayout
      title="Security Model (Application-Level)"
      description="How ReplyBase currently protects accounts, tenants, admin tools, billing, and webchat traffic"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Authentication And Tenant Isolation
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Session-based auth with tenant checks on protected APIs.</li>
          <li>
            Registration creates a dedicated tenant workspace automatically.
          </li>
          <li>
            Tenant ownership checks gate access to tenant-scoped resources.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Channel And Billing Protection
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Secure builder launch with subscription-aware access checks.</li>
          <li>
            Stripe portal and billing APIs require authenticated sessions.
          </li>
          <li>
            Plan limits are enforced for selected resource creation flows.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Webchat Hardening
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Signed short-lived session tokens.</li>
          <li>Origin/referer verification and allowed-domain controls.</li>
          <li>Rate limiting on init, message, and events routes.</li>
          <li>Replay-resistant init challenge handling and rollout gating.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
