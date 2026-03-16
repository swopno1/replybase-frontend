"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatImplementationGuideDoc() {
  return (
    <DocLayout
      title="Webchat Implementation Guide"
      description="How ReplyBase webchat is structured from widget embed through API processing and tenant controls"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Architecture Overview
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Client widget mounted via embed script and root container.</li>
          <li>Init endpoint issues signed short-lived session context.</li>
          <li>Message/events endpoints enforce tenant and origin controls.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Security-First Controls
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Origin + referer verification against allowed domain config.</li>
          <li>Per-route rate limiting and replay-resistant init handling.</li>
          <li>Rollout gating and compatibility checks for phased release.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Operational Guidance
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Validate embed on staging domain before production rollout.</li>
          <li>Confirm bot/channel assignment and webhook readiness.</li>
          <li>Monitor error categories during first deployment window.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
