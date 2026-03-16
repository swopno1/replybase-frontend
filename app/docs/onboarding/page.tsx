"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";

export default function OnboardingDoc() {
  return (
    <DocLayout
      title="Client Onboarding System"
      description="Current onboarding flows in ReplyBase for new workspaces and Messenger-led qualification"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Two Onboarding Paths
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Workspace onboarding: registration, tenant creation, and first
            dashboard access.
          </li>
          <li>
            Messenger onboarding sessions: Facebook-origin conversations tracked
            in admin analytics.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Workspace Onboarding
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Collect first name, last name, email, and password.</li>
          <li>Create workspace automatically and sign user in.</li>
          <li>Proceed to channel setup and bot/flow configuration.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Messenger Session Visibility
        </h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>
            Session totals, completion, abandonment, and stage distribution.
          </li>
          <li>Drop-off analysis and recent session details in admin views.</li>
        </ul>
        <Link
          href="/docs/onboarding-implementation"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Onboarding Implementation
        </Link>
      </section>
    </DocLayout>
  );
}
