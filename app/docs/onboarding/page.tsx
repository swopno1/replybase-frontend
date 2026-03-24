"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";

export default function OnboardingDoc() {
  return (
    <DocLayout
      title="Client Onboarding System"
      description="Current onboarding flows in ReplyBase for new workspaces and legacy assisted qualification workflows"
    >
      <p className="text-slate-300 mb-8">
        ReplyBase currently has two different onboarding concepts in the
        codebase, and it helps to keep them separate.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Two Onboarding Paths
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Workspace onboarding: account creation and first login into the SaaS
            app.
          </li>
          <li>
            Assisted onboarding sessions: structured qualification flow captured
            in older operational workflows and surfaced in admin.
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
          <li>Redirect user into dashboard.</li>
        </ul>
        <p className="text-slate-300 mt-4 mb-2">
          Expected setup path after signup:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>connect Telegram or Webchat</li>
          <li>launch builder when needed</li>
          <li>configure flows and AI behavior</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Legacy Assisted Onboarding Sessions
        </h2>
        <p className="text-slate-300">
          ReplyBase also tracks legacy onboarding sessions from older guided
          qualification flows for operational visibility and historical context.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Onboarding Flow Stages
        </h2>
        <p className="text-slate-300 mb-2">
          Typical data captured in the current onboarding session model:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>contact name</li>
          <li>business name</li>
          <li>business type</li>
          <li>email or contact details</li>
          <li>selected plan</li>
          <li>stage and completion status</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Admin Visibility</h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>total sessions</li>
          <li>completed sessions</li>
          <li>abandoned sessions</li>
          <li>stage distribution</li>
          <li>drop-off by stage</li>
          <li>recent session details and linked plan data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Practical Guidance
        </h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>
            Treat workspace signup as the primary product onboarding path for
            customers.
          </li>
          <li>
            Treat assisted onboarding as an operational or sales-assist flow,
            not the primary customer setup path.
          </li>
          <li>
            Document onboarding primarily around Telegram and Webchat setup,
            because older assisted flows do not match the current product
            direction.
          </li>
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
