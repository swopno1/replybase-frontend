import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementation Snapshot',
  description: 'Technical overview of the ReplyBase platform implementation and architecture.',
  alternates: {
    canonical: '/docs/implementation',
  },
};



import DocLayout from "../_components/DocLayout";

export default function ImplementationDoc() {
  return (
    <DocLayout
      title="Implementation Summary"
      description="Production summary for tenant users: what works now, what is reliable, and what is still evolving"
    >
      <p className="text-slate-300 mb-8">
        This page is written for workspace owners and team users who want a
        practical understanding of current professional production readiness.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Product Areas That Are In Good Shape
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>tenant-aware authentication and workspace creation</li>
          <li>bot management and secure builder launch</li>
          <li>
            Telegram connection with webhook status and reconnect controls
          </li>
          <li>webchat setup, embed generation, and rollout controls</li>
          <li>Stripe-backed checkout and billing portal flow</li>
          <li>core webchat API hardening and test coverage</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Core Platform Capabilities
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            multi-tenant workspace isolation and subscription-aware access
          </li>
          <li>Telegram and Webchat as active setup surfaces for tenants</li>
          <li>
            conversations, contacts, and leads workflow for daily operations
          </li>
          <li>
            flows plus AI fallback for structured and open-ended responses
          </li>
          <li>billing visibility with plan and upgrade controls</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Areas Still Evolving
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Activity currently uses mock data, not a full live event feed.
          </li>
          <li>Settings are limited to basic account information.</li>
          <li>Some analytics and usage views are still conservative.</li>
          <li>
            Some management screens are operationally useful but not yet fully
            streamlined.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Platform Reliability Snapshot
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Vitest suite: 128 passing tests across 9 files.</li>
          <li>
            Playwright E2E suite: 7 passing widget scenarios in webchat widget
            tests.
          </li>
          <li>Coverage is strongest in webchat security and API surface.</li>
          <li>
            Playwright runner was hardened to avoid accidental server reuse.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Recommended Next Improvements
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>replace mock activity data with real tenant event history</li>
          <li>expand settings into true workspace management</li>
          <li>
            align onboarding copy with Telegram and Webchat-first setup paths
          </li>
          <li>finish usage accounting visibility for limits</li>
        </ul>
      </section>
    </DocLayout>
  );
}
