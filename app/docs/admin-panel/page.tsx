"use client";

import DocLayout from "../_components/DocLayout";

export default function AdminPanelDoc() {
  return (
    <DocLayout
      title="Workspace Owner Guide"
      description="How tenant owners can manage subscription visibility, rollout awareness, and account operations"
    >
      <section className="mb-10">
        <p className="text-slate-300">
          This area is intended for account owners and trusted operators who
          manage tenant-level operations.
        </p>
        <p className="text-slate-300 mt-3">
          Access is controlled server-side. Use least-privilege access and avoid
          sharing owner credentials across team members.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What You Can Manage
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Workspace health signals: subscriptions, bots, contacts, and
            conversation activity indicators.
          </li>
          <li>Subscription lifecycle visibility and billing flow readiness.</li>
          <li>Onboarding and activation visibility for your workspace.</li>
          <li>Webchat rollout and reliability indicators.</li>
          <li>Operational review before large customer-facing changes.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Owner Security Checklist
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Use a unique strong password and MFA on your identity provider.
          </li>
          <li>Do not share owner credentials across team members.</li>
          <li>
            Review webhook and integration logs after configuration changes.
          </li>
          <li>Rotate secrets and tokens whenever access risk is suspected.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Operational Routine
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Weekly: review subscription and usage trends.</li>
          <li>
            Before campaigns: validate Telegram/Webchat connection health.
          </li>
          <li>
            After deploys: run smoke checks on inbound and outbound replies.
          </li>
          <li>Monthly: audit tokens, plans, and workflow performance.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Best Value Practices
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Start with one high-volume source before expanding setup.</li>
          <li>Use Flows for repeatable FAQ and qualification workflows.</li>
          <li>
            Use AI fallback for long-tail queries instead of overbuilding flows.
          </li>
          <li>Track first-response and conversion outcomes per source.</li>
          <li>Upgrade plans only when usage patterns justify higher limits.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Notes</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            The owner area is intentionally separate from day-to-day inbox use.
          </li>
          <li>
            For product planning and roadmap decisions, refer to
            replybase-saas/Product_Details.
          </li>
        </ul>
      </section>
    </DocLayout>
  );
}
