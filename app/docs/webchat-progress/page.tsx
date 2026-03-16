"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatProgressDoc() {
  return (
    <DocLayout
      title="Webchat Progress Status"
      description="Current state of the ReplyBase webchat widget, backend hardening, and verification status"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Core webchat flow is implemented and actively used.</li>
          <li>API layer has been hardened for security and abuse resistance.</li>
          <li>Widget test harness is available for E2E validation.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Verified Coverage</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Vitest coverage includes webchat API/security paths.</li>
          <li>Playwright widget suite validates user-visible behavior.</li>
          <li>Recent run: 7 widget E2E scenarios passing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Focus Areas Ahead</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Wider telemetry around rollout behavior and domain mismatches.</li>
          <li>Additional failure-path E2E scenarios for embed integrations.</li>
          <li>Documentation clarity for production embedding controls.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
