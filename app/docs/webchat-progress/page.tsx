"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatProgressDoc() {
  return (
    <DocLayout
      title="Webchat Progress Status"
      description="Phase-by-phase implementation status of ReplyBase Webchat against the complete rollout plan"
    >
      <p className="text-slate-300 mb-8">
        Last reviewed: 2026-03-16 (Phase 8 expanded with rollout controls and
        SLA monitoring dashboard, 128 Vitest tests passing, 7 Playwright widget
        scenarios passing).
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Completed: Phases 0 to 7 implemented across schema, public API,
            embed SDK, conversation engine, security hardening, dashboard UX,
            and test suite.
          </li>
          <li>
            Partially completed: Phase 8 rollout foundation with rollout modes,
            route enforcement, admin rollout controls, and SLA monitoring.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Phase Status Matrix
        </h2>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 0: Stabilize schema and channel typing
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Channel creation paths normalize to lowercase web.</li>
          <li>
            Non-web channels require channelId, while web channels allow null
            channelId.
          </li>
          <li>
            Prisma enum is implemented for channel type with web, facebook,
            telegram, whatsapp.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 1: Web chat domain model
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>WebChatSite, WebChatSession, and WebChatEvent models added.</li>
          <li>Relations wired to Tenant, Bot, and CRM conversation.</li>
          <li>Init/message runtime helpers use site and session rows.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 2: Public webchat API layer
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>POST init, POST message, GET config, POST events implemented.</li>
          <li>OPTIONS handlers implemented for preflight across routes.</li>
          <li>
            Config-issued init challenge is signed, replay-resistant, and
            consumed by init.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 3: Widget and embed SDK
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Launcher, panel, messaging UI, local session persistence.</li>
          <li>Position, title, color, and welcome-message support.</li>
          <li>Shadow DOM isolation, unread badge, and mobile fullscreen.</li>
          <li>Cookie-consent gating and telemetry toggles are available.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 4: Conversation engine integration
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Flow-first routing before AI fallback in message handling.</li>
          <li>
            Conversation continuity through conversationId and
            externalSessionId.
          </li>
          <li>
            Structured source metadata persisted for url, referrer, locale, utm,
            and origin.
          </li>
          <li>Safe fallback copy returned when AI engine fails.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 5: Security and abuse protection
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Signed short-lived session tokens.</li>
          <li>
            Strict origin/referer validation and production wildcard guard.
          </li>
          <li>Rate limiting on init, message, and events.</li>
          <li>Bot mitigation checks and configurable PII retention.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 6: Dashboard UX for webchat management
        </h3>
        <p className="text-slate-300 mb-2">
          Status: Implemented (MVP) and partially complete
        </p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Integrations page at /integrations/webchat.</li>
          <li>
            Key management, allowed domains, diagnostics, and snippet copy.
          </li>
          <li>Internal test-widget harness and live preview support.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 7: Observability and QA
        </h3>
        <p className="text-slate-300 mb-2">Status: Implemented</p>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Vitest config and webchat-focused test coverage in place.</li>
          <li>
            Structured metrics via webchat-metrics with session, message,
            events, rate limit, and CORS denied events.
          </li>
          <li>
            Current baseline documented with strong API/security coverage and 7
            passing widget E2E scenarios.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Phase 8: Rollout strategy
        </h3>
        <p className="text-slate-300 mb-2">Status: Partially Implemented</p>
        <ul className="space-y-2 text-slate-300">
          <li>
            Rollout policy helper supports off, pilot, tiered, and ga modes.
          </li>
          <li>
            Runtime enforcement is applied on config, init, message, and events.
          </li>
          <li>Admin rollout controls implemented at /admin/webchat-rollout.</li>
          <li>
            SLA monitoring dashboard implemented at /admin/webchat-monitoring.
          </li>
          <li>
            Remaining gap: live pilot promotion and staged enablement still
            require operator action in deployed environment.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Recommended Next Actions
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            Review pilot telemetry in monitoring dashboard and promote tenants
            when thresholds are stable.
          </li>
          <li>
            Add optional Playwright edge coverage for telemetry-disabled,
            sampling, and failure fallback behavior.
          </li>
          <li>
            Add external alerts and dashboards if stdout telemetry needs
            centralized monitoring.
          </li>
        </ul>
      </section>
    </DocLayout>
  );
}
