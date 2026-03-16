"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatApiReferenceDoc() {
  return (
    <DocLayout
      title="Webchat API Reference"
      description="High-level API surface for webchat initialization, messaging, and events"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Primary Endpoints</h2>
        <ul className="space-y-2 text-slate-300">
          <li>`POST /api/webchat/init` - create/validate visitor session context.</li>
          <li>`POST /api/webchat/message` - submit user message payload.</li>
          <li>`POST /api/webchat/events` - telemetry and interaction events.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Request Requirements</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Tenant/bot/channel identifiers must map to valid ownership.</li>
          <li>Init/session tokens are required for subsequent operations.</li>
          <li>Origin and domain constraints are checked on protected routes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Error Patterns</h2>
        <ul className="space-y-2 text-slate-300">
          <li>`401/403` for auth, tenant, or origin validation failures.</li>
          <li>`429` for rate-limited requests.</li>
          <li>`400` for malformed payloads or invalid rollout parameters.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
