import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tenant Onboarding',
  description: 'Guide for new users to reach first value quickly with ReplyBase.',
  alternates: {
    canonical: '/docs/onboarding',
  },
};



import Link from "next/link";
import DocLayout from "../_components/DocLayout";

export default function OnboardingDoc() {
  return (
    <DocLayout
      title="Tenant Onboarding Guide"
      description="How new users and workspace owners should onboard, connect sources, and reach first value quickly"
    >
      <p className="text-slate-300 mb-8">
        This guide focuses on the onboarding path that gives tenant teams the
        fastest path to useful outcomes.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Onboarding Outcomes
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Create and secure your workspace account.</li>
          <li>Connect at least one active source (Telegram or Webchat).</li>
          <li>Configure one practical flow and one AI fallback path.</li>
          <li>
            Validate that messages become conversations, contacts, and leads.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Recommended First-Week Path
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Day 1: complete signup and open your dashboard.</li>
          <li>Day 1-2: create your first bot and assign an Entry Flow.</li>
          <li>Day 2: connect Telegram or Webchat.</li>
          <li>Day 3: run test messages and verify lead capture.</li>
          <li>Day 4-7: tune responses from real conversations.</li>
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
        <h2 className="text-2xl font-bold text-white mb-4">Setup Priorities</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Prioritize one source that gives the highest conversation volume.
          </li>
          <li>
            Define a clear fallback mode: Flow-first with AI fallback is common.
          </li>
          <li>
            Use concise welcome and qualification prompts before scaling
            complexity.
          </li>
          <li>Review conversations daily during your first week.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What To Track During Onboarding
        </h2>
        <p className="text-slate-300 mb-2">
          Track these metrics to make sure onboarding is working:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>time to first connected source</li>
          <li>time to first automated reply</li>
          <li>first week message volume</li>
          <li>lead capture completion rate</li>
          <li>manual takeover rate for unresolved messages</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Common Mistakes To Avoid
        </h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>connecting sources before assigning an Entry Flow</li>
          <li>using long, complex first prompts that lower completion rates</li>
          <li>skipping webhook or diagnostics checks after setup</li>
          <li>upgrading plan before validating actual usage patterns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Practical Guidance
        </h2>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>
            Keep onboarding practical: one source, one flow, one measurable goal
            at a time.
          </li>
        </ul>
        <Link
          href="/docs/onboarding-implementation"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Onboarding Technical Notes
        </Link>
      </section>
    </DocLayout>
  );
}
