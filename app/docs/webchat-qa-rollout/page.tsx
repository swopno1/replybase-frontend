"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatQaRolloutDoc() {
  return (
    <DocLayout
      title="Webchat QA and Rollout Guide"
      description="Quality gates, test plan, and rollout sequence for ReplyBase Webchat"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Objective</h2>
        <p className="text-slate-300">
          Define the minimum quality and operations process before broad webchat
          rollout.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Quality Gates</h2>
        <ol className="space-y-2 text-slate-300 list-decimal list-inside">
          <li>All webchat API routes pass integration tests.</li>
          <li>Embed script works on desktop and mobile breakpoints.</li>
          <li>CORS and domain restrictions are verified.</li>
          <li>AI fallback behavior is validated under failures.</li>
          <li>Dashboard setup can generate working snippet.</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Test Plan</h2>
        <h3 className="text-xl font-semibold text-white mb-2">Unit tests</h3>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>token signing and verification</li>
          <li>token expiry behavior</li>
          <li>origin allow/deny logic</li>
          <li>request validation for init/message/config</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">
          Integration tests
        </h3>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>init creates/reuses visitor and conversation</li>
          <li>message persists inbound and outbound transcript</li>
          <li>config returns safe-only payload</li>
          <li>guards for invalid token, origin, and conversation</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">E2E tests</h3>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li>embed boot sequence</li>
          <li>launcher open/close behavior</li>
          <li>message roundtrip rendering</li>
          <li>mobile viewport behavior</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2">Chaos tests</h3>
        <ul className="space-y-2 text-slate-300">
          <li>AI timeout</li>
          <li>engine unavailable</li>
          <li>CORS misconfiguration</li>
          <li>message storm and rate-limit pressure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Monitoring Dashboard
        </h2>
        <p className="text-slate-300 mb-3">
          Admin monitoring is available at /admin/webchat-monitoring and should
          be reviewed before broadening rollout.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>active sites and sites with live traffic</li>
          <li>sessions, conversations, messages, widget events</li>
          <li>error-event rate and last-activity freshness</li>
          <li>incident counts by blocked-origin, token, rate-limit, rollout</li>
          <li>pilot-tenant summaries and rollout recommendation card</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Rollout Sequence</h2>
        <ol className="space-y-2 text-slate-300 list-decimal list-inside">
          <li>Enable behind webchat_enabled feature flag.</li>
          <li>Internal validation tenants only.</li>
          <li>Pilot 1 to 2 external tenants.</li>
          <li>Expand by plan tier when SLO targets are stable.</li>
          <li>Run post-rollout hardening and update playbook.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Current Gaps To Close
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>add dedicated webchat test suite to CI</li>
          <li>add distributed rate limiter for multi-instance environments</li>
          <li>verify strict Origin + Referer enforcement in production</li>
          <li>add external telemetry dashboards and alerts</li>
        </ul>
      </section>
    </DocLayout>
  );
}
