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
          The admin panel is an internal operational area. Access is server-side
          restricted to allowlisted admin identity checks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Current Admin Sections
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Business Status</li>
          <li>Subscribers</li>
          <li>Onboarding</li>
          <li>Webchat Rollout</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Security Controls
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Admin layout guarded server-side.</li>
          <li>Admin APIs enforce authorization independently.</li>
          <li>Unauthorized requests are redirected or return 403.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
