"use client";

import DocLayout from "../_components/DocLayout";

export default function ImplementationDoc() {
  return (
    <DocLayout
      title="Implementation Summary"
      description="Honest summary of what is implemented, what is polished, and what is still MVP-level in ReplyBase SaaS"
    >
      <p className="text-slate-300 mb-8">
        This summary is based on the current application routes, APIs, schema,
        and test suite.
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
          <li>
            legacy Facebook and WhatsApp integrations remain preserved
            internally
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Core Platform Capabilities
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>multi-tenant workspace isolation</li>
          <li>
            bot, channel, contact, conversation, lead, plan, and subscription
            data models
          </li>
          <li>
            Telegram and Webchat are the primary active public setup surfaces
          </li>
          <li>
            legacy Facebook and WhatsApp logic remains implemented but is hidden
            from the current product UI
          </li>
          <li>conversations and contacts views</li>
          <li>admin screens for revenue, subscribers, and rollout</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Areas That Are Still MVP-Level
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Activity currently uses mock data, not a full live event feed.
          </li>
          <li>Settings are limited to basic account information.</li>
          <li>Usage accounting is still conservative/mocked in places.</li>
          <li>
            Some internal models and analytics still reference legacy channel
            names.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Testing Snapshot</h2>
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
          Recommended Product Cleanup
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
