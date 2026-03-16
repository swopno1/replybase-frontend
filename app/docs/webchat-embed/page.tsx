"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatEmbedDoc() {
  return (
    <DocLayout
      title="Webchat Embed Quickstart"
      description="Embed and configure ReplyBase webchat on your site"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          1) Add the embed script
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
          <pre>{`<script
  src="https://YOUR_REPLYBASE_DOMAIN/embed/replybase-webchat.js"
  data-base-url="https://YOUR_REPLYBASE_DOMAIN"
  data-public-key="YOUR_WEBCHAT_PUBLIC_KEY"
  data-title="Chat with ReplyBase"
  data-primary-color="#0f766e"
  data-position="right"
  data-mobile-mode="auto"
  data-telemetry="all"
  defer
></script>`}</pre>
        </div>
        <p className="text-slate-300 mt-4 mb-2">Use one targeting option:</p>
        <ul className="space-y-2 text-slate-300">
          <li>Preferred: data-public-key</li>
          <li>Fallback: data-channel-id</li>
          <li>Fallback: data-bot-id</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Optional runtime controls
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>
            <code>{`data-mobile-mode="auto|fullscreen|windowed"`}</code>
          </li>
          <li>
            <code>{`data-telemetry="all|essential|off"`}</code>
          </li>
          <li>
            <code>{`data-telemetry-events="OPEN,CLOSE,ERROR"`}</code>
          </li>
          <li>
            <code>{`data-cookie-consent="off|required"`}</code>
          </li>
          <li>
            <code>
              {`data-cookie-consent-check="ReplyBaseWebchatConsent.hasConsent"`}
            </code>
          </li>
          <li>
            <code>
              {`data-cookie-consent-event="replybase:webchat-consent-updated"`}
            </code>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          2) API routes used by widget
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>POST /api/webchat/init</li>
          <li>GET /api/webchat/config</li>
          <li>POST /api/webchat/message</li>
          <li>POST /api/webchat/events</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          3) Connect Flow Builder to Webchat
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>Create or edit a flow in Dashboard: /flows</li>
          <li>
            Add your step sequence (message, input, condition, action, end)
          </li>
          <li>Set the bot entry flow in bot settings</li>
          <li>
            Open /integrations/webchat and pick the same bot + web channel
          </li>
          <li>Save config, then launch the internal test widget harness</li>
          <li>Publish the embed snippet on your website</li>
        </ol>
        <p className="text-slate-300 mt-4">
          Runtime behavior is flow-first. If no flow response is produced, the
          system falls back to AI responses for continuity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          4) CORS allowlist (optional)
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
          <pre>{`WEBCHAT_ALLOWED_ORIGINS=https://example.com,https://www.example.com`}</pre>
        </div>
        <p className="text-slate-300 mt-4">
          Site-level allowlists are managed per webchat channel in Dashboard and
          are enforced in init, config, message, and events APIs.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          5) Session token secret
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>WEBCHAT_TOKEN_SECRET</li>
          <li>AUTH_SECRET (fallback)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          6) Rate limiting knobs (optional)
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
          <pre>{`WEBCHAT_RATE_LIMIT_INIT_IP=20
WEBCHAT_RATE_LIMIT_INIT_WINDOW_MS=60000
WEBCHAT_RATE_LIMIT_MESSAGE_IP=120
WEBCHAT_RATE_LIMIT_MESSAGE_WINDOW_MS=60000
WEBCHAT_RATE_LIMIT_MESSAGE_SESSION=60
WEBCHAT_RATE_LIMIT_MESSAGE_SESSION_WINDOW_MS=60000
WEBCHAT_RATE_LIMIT_EVENTS_IP=240
WEBCHAT_RATE_LIMIT_EVENTS_WINDOW_MS=60000
WEBCHAT_RATE_LIMIT_EVENTS_SESSION=180
WEBCHAT_RATE_LIMIT_EVENTS_SESSION_WINDOW_MS=60000`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          7) Troubleshooting: Origin Not Allowed
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Confirm you are testing from an allowed origin.</li>
          <li>
            In /integrations/webchat, use Add Current Origin and Save Config.
          </li>
          <li>
            Launch Test Widget from dashboard to use the internal harness page.
          </li>
          <li>
            Check Diagnostics for blocked-origin events and exact timestamps.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          8) One-time data normalization
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
          <pre>{`pnpm run normalize:web-channel-type`}</pre>
        </div>
      </section>
    </DocLayout>
  );
}
