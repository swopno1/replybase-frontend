"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatImplementationGuideDoc() {
  return (
    <DocLayout
      title="Webchat Implementation Guide"
      description="Current architecture and practical implementation guide for ReplyBase Webchat"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Scope</h2>
        <p className="text-slate-300">
          This guide documents how the current webchat implementation works in
          code, what is already production-usable, and what is still planned.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Current Architecture
        </h2>
        <h3 className="text-xl font-semibold text-white mb-3">
          Runtime components
        </h3>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Public widget script: public/embed/replybase-webchat.js</li>
          <li>Public APIs: init, config, message, and events routes</li>
          <li>Session token utility: lib/webchat-session.ts</li>
          <li>Channel/session resolver: lib/webchat.ts</li>
          <li>CORS utility: lib/webchat-cors.ts</li>
          <li>AI pipeline integration: lib/ai-engine.ts</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          Data storage (current)
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>WebChatSite: site identity and config</li>
          <li>WebChatSession: visitor-session continuity</li>
          <li>WebChatEvent: diagnostics and audit telemetry</li>
          <li>
            CRM continuity remains on channel/contact/conversation/message
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Request Flows</h2>
        <h3 className="text-xl font-semibold text-white mb-3">
          1) Session Initialization
        </h3>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>
            Widget calls init with publicKey (preferred) or channelId/botId.
          </li>
          <li>Widget first calls config to obtain one-time init challenge.</li>
          <li>
            Server validates CORS, resolves site/channel, enforces domains.
          </li>
          <li>Server verifies and consumes challenge to block replay.</li>
          <li>Server creates or restores session and issues signed token.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          2) Config Fetch
        </h3>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Widget calls config with publicKey or channelId/botId.</li>
          <li>Server validates origin policy and allowed domains.</li>
          <li>Server returns safe config plus short-lived init challenge.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          3) Message Send
        </h3>
        <ul className="space-y-2 text-slate-300 mb-6">
          <li>Widget calls message with session token and message body.</li>
          <li>Server verifies token, ownership, and source metadata.</li>
          <li>Flow-first execution, then AI fallback when needed.</li>
          <li>Server persists transcript and updates session continuity.</li>
          <li>Safe fallback copy is returned if engine fails.</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          4) Client Telemetry
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>Widget calls events endpoint for lifecycle signals.</li>
          <li>Server validates token/site/origin and applies sampling.</li>
          <li>Sampled events are persisted and session lastSeen is touched.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Embed Runtime Features
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Shadow DOM isolation</li>
          <li>Unread launcher badge</li>
          <li>Mobile full-screen mode support</li>
          <li>Cookie-consent gating for init/storage</li>
          <li>Telemetry mode and event whitelist toggles</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Dashboard Setup Flow
        </h2>
        <p className="text-slate-300 mb-2">Path: /integrations/webchat</p>
        <ul className="space-y-2 text-slate-300">
          <li>bot selection and web channel creation/selection</li>
          <li>theme and widget configuration</li>
          <li>public/secret key reveal, copy, and rotation</li>
          <li>allowed domain management and diagnostics</li>
          <li>internal harness launch and live preview</li>
          <li>embed snippet generation and copy</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Security Notes (Current)
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>HMAC-signed session tokens with expiry</li>
          <li>strict Origin + Referer controls on webchat routes</li>
          <li>rate limiting across init, message, and events</li>
          <li>bot mitigation checks for suspicious traffic</li>
          <li>configurable PII retention sanitization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Upgrade Path (Next)
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Add external telemetry dashboards and alerts.</li>
          <li>Add expanded unit/integration/E2E test matrix.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
