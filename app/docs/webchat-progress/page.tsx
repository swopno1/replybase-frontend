"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatProgressDoc() {
  return (
    <DocLayout
      title="Webchat MVP Production Status"
      description="Current production readiness of ReplyBase Webchat for tenant deployment"
    >
      <p className="text-slate-300 mb-8">
        Last reviewed: 2026-03-25. This status is focused on what tenant users
        can rely on in production today and what still requires careful rollout.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Webchat is production-usable for tenant deployments with secure
            embed, messaging, and diagnostics.
          </li>
          <li>
            Rollout and observability controls are implemented but still benefit
            from staged activation and tenant-side validation.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What Is Production-Ready For Tenants
        </h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Secure embed initialization and message APIs are implemented.</li>
          <li>Widget UI is stable on desktop and mobile layouts.</li>
          <li>
            Flow-first with AI fallback is available for message handling.
          </li>
          <li>
            Origin checks, rate limits, and replay protections are active.
          </li>
          <li>Tenant diagnostics and snippet workflows are available in UI.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          What Still Requires Careful Rollout
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>
            Run staged rollout for high-traffic sites rather than immediate GA.
          </li>
          <li>Review error and freshness metrics after go-live changes.</li>
          <li>Validate domain allowlists whenever new domains are added.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Tenant Deployment Checklist (Practical)
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Deploy webchat first on one production domain.</li>
          <li>Run message round-trip tests before announcing launch.</li>
          <li>Confirm conversations, contacts, and leads update correctly.</li>
          <li>Review diagnostics daily during the first launch week.</li>
          <li>
            Expand to additional domains only after stable baseline metrics.
          </li>
        </ul>
      </section>
    </DocLayout>
  );
}
