"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatApiReferenceDoc() {
  return (
    <DocLayout
      title="Webchat API Reference"
      description="Request and response contracts for ReplyBase webchat public API endpoints"
    >
      <p className="text-slate-300 mb-8">Base path: /api/webchat</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Common Behavior</h2>
        <ul className="space-y-2 text-slate-300">
          <li>CORS is enforced via webchat allowlist logic.</li>
          <li>OPTIONS is supported for preflight on each endpoint.</li>
          <li>JSON responses are returned for success and errors.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          POST /api/webchat/init
        </h2>
        <p className="text-slate-300 mb-2">
          Initialize or restore a visitor session.
        </p>
        <p className="text-slate-300 mb-3">
          Important: call GET /api/webchat/config first and pass
          initChallenge.token into init.
        </p>
        <h3 className="text-xl font-semibold text-white mb-2">Rules</h3>
        <ul className="space-y-2 text-slate-300">
          <li>At least one of publicKey, channelId, or botId is required.</li>
          <li>
            initChallenge is required and single-use within replay window.
          </li>
          <li>visitorContext and contact are both accepted for enrichment.</li>
          <li>botSignals.honeypot must remain empty.</li>
          <li>botSignals.elapsedMs is used for init bot-mitigation checks.</li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2 mt-4">
          Error responses
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>400 invalid request</li>
          <li>403 origin not allowed</li>
          <li>404 active web channel not found</li>
          <li>429 rate limit exceeded</li>
          <li>500 server failure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          GET /api/webchat/config
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Query requires one of publicKey or channelId or botId.</li>
          <li>Returns safe widget config plus signed init challenge.</li>
          <li>Also returns telemetry taxonomy and sample-rate metadata.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          POST /api/webchat/message
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Requires signed session token and message body.</li>
          <li>
            Accepts metadata fields such as pageUrl, referrer, locale,
            pageTitle, origin, and utm values.
          </li>
          <li>meta.mode can be flow, ai, or safe_fallback.</li>
          <li>
            When AI engine is unavailable, safe fallback text is returned.
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-white mb-2 mt-4">
          Error responses
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li>400 invalid request</li>
          <li>401 invalid session token</li>
          <li>403 origin not allowed</li>
          <li>404 invalid conversation ownership</li>
          <li>429 rate limit exceeded</li>
          <li>503 upstream AI unavailable</li>
          <li>500 server failure</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          POST /api/webchat/events
        </h2>
        <p className="text-slate-300 mb-2">Ingest widget telemetry events.</p>
        <p className="text-slate-300 mb-2">
          Supported types: OPEN, CLOSE, TYPING, ERROR, MESSAGE.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>Returns sampled status and sample rate in success response.</li>
          <li>Validates token, origin policy, and site ownership.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Security Contract
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Session token must be signed and unexpired.</li>
          <li>
            Init challenge must be signed, unexpired, site-bound, and
            single-use.
          </li>
          <li>Origin policy follows WEBCHAT_ALLOWED_ORIGINS.</li>
          <li>Rate limiting is enforced per IP and per session key.</li>
          <li>PII retention is controlled by WEBCHAT_PII_RETENTION_MODE.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
