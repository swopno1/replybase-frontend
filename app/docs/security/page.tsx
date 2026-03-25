"use client";

import DocLayout from "../_components/DocLayout";

export default function SecurityDoc() {
  return (
    <DocLayout
      title="Security Model (Application-Level)"
      description="How ReplyBase currently protects accounts, tenants, workspace controls, billing, and webchat traffic"
    >
      <p className="text-slate-300 mb-8">
        ReplyBase uses layered application security across authentication,
        tenant isolation, owner access controls, billing, and public source
        endpoints.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. Authentication And Tenant Isolation
          <li>legacy third-party deletion utilities remain part of compliance tooling</li>
        <ul className="space-y-2 text-slate-300">
          <li>users authenticate through NextAuth-backed flows</li>
          <li>
            registration creates a dedicated tenant workspace automatically
          </li>
          <li>
            most protected APIs require both a valid session and tenant
            association
          </li>
          <li>tenant ownership checks gate tenant-scoped resources</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          2. Secure Builder Access
        </h2>
        <p className="text-slate-300 mb-4">
          ReplyBase uses a controlled launch flow for bot builder access.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>users do not open the external builder from arbitrary URLs</li>
          <li>ReplyBase checks authentication and subscription state first</li>
          <li>only eligible users receive builder authorization redirect</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          3. Billing Protection
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>billing endpoints require authenticated user session</li>
          <li>subscription lookups are tenant-scoped</li>
          <li>customer portal access is created server-side through Stripe</li>
          <li>
            plan limits are checked before selected resource creation flows
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">4. Owner Access Controls</h2>
        <ul className="space-y-2 text-slate-300">
          <li>owner and restricted management surfaces are guarded server-side</li>
          <li>management APIs perform independent authorization checks</li>
          <li>non-authorized requests are redirected or rejected with 403</li>
          <li>use least-privilege access for day-to-day team operations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          5. Webchat Protection
        </h2>
        <p className="text-slate-300 mb-4">
          The webchat stack has the strongest explicit public-endpoint hardening
          in the product today.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>short-lived signed session tokens</li>
          <li>origin and referer validation</li>
          <li>allowed-domain enforcement per site</li>
          <li>rate limiting on init, message, and events</li>
          <li>replay-resistant init challenge handling</li>
          <li>bot mitigation checks</li>
          <li>configurable PII retention behavior</li>
          <li>rollout gating for staged enablement</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          6. Data And Compliance Utilities
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            newsletter subscribe/unsubscribe supports app-session and API-key
            access where intended
          </li>
          <li>
            account data deletion requests are recorded via dedicated APIs
          </li>
          <li>legacy third-party deletion support remains part of compliance utilities</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Practical Security Posture
        </h2>
        <p className="text-slate-300 mb-2">What is strongest today:</p>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>session and tenant checks on protected APIs</li>
          <li>webchat public endpoint defenses</li>
          <li>subscription-aware builder and billing flows</li>
        </ul>
        <p className="text-slate-300 mb-2">What still needs follow-through:</p>
        <ul className="space-y-2 text-slate-300">
          <li>broader production observability in non-webchat areas</li>
          <li>more complete real usage accounting</li>
          <li>continue hardening privileged access patterns over time</li>
        </ul>
      </section>
    </DocLayout>
  );
}
