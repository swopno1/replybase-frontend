"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatQaRolloutDoc() {
  return (
    <DocLayout
      title="Webchat QA And Rollout"
      description="Practical checklist for validating and safely rolling out ReplyBase webchat"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Pre-Rollout QA</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Validate widget boot and message exchange on staging.</li>
          <li>Test allowed-domain and blocked-domain behavior.</li>
          <li>Confirm rate-limit responses and error-state handling.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Rollout Strategy</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Enable by tenant/site in controlled batches.</li>
          <li>Monitor webhook/API health during rollout windows.</li>
          <li>Keep rollback path ready for misconfigured domains.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Post-Rollout Checks
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Review error rates and conversation continuity metrics.</li>
          <li>Verify lead/contact creation from webchat interactions.</li>
          <li>Capture tenant-specific setup guidance from support feedback.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
