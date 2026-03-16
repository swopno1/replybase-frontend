"use client";

import DocLayout from "../_components/DocLayout";

export default function ImplementationDoc() {
  return (
    <DocLayout
      title="Implementation Summary"
      description="Honest summary of what is implemented, what is polished, and what is still MVP-level in ReplyBase SaaS"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">In Good Shape</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Tenant-aware auth and workspace creation.</li>
          <li>Bot management and secure builder launch.</li>
          <li>Facebook, Telegram, and Webchat channel flows.</li>
          <li>Stripe checkout and billing portal integration.</li>
          <li>Webchat API hardening and test coverage.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Still MVP-Level</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Activity feed still relies on placeholder/mock data.</li>
          <li>Settings is currently basic account information only.</li>
          <li>Some usage accounting remains conservative/mocked.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Testing Snapshot</h2>
        <ul className="space-y-2 text-slate-300">
          <li>128 passing Vitest tests across 9 files.</li>
          <li>7 passing Playwright webchat widget scenarios.</li>
          <li>Coverage is strongest in webchat security and API layers.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
