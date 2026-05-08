"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function FacebookDeliveryDoc() {
  return (
    <DocLayout
      title="Facebook Messenger"
      description="Complete reference for connecting, managing, and troubleshooting Facebook Messenger in ReplyBase"
    >
      {/* Quick links */}
      <div className="not-prose flex flex-wrap gap-3 mb-8">
        <Link
          href="/docs/get-started/facebook-setup"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          First-time setup guide <ArrowRight size={14} />
        </Link>
        <Link
          href="https://app.replybase.co.uk/integrations/facebook"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
        >
          Open Facebook Integration
        </Link>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
        <p className="text-slate-300 mb-4">
          The Facebook Messenger integration connects one or more of your
          Facebook Pages to ReplyBase. When someone sends a message to your Page
          via Messenger, ReplyBase processes it through your assigned flow and
          AI fallback, and records the conversation automatically.
        </p>
        <ul className="space-y-2 text-slate-300">
          {[
            "OAuth connection — sign in with Facebook to authorize access to your Pages",
            "Per-page flow assignment — different flows per connected Page",
            "Real-time Messenger webhook delivery",
            "Full conversation, contact, and lead capture",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className="text-indigo-400 mt-1 shrink-0"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* App modes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Development Mode vs. Live Mode
        </h2>
        <p className="text-slate-300 mb-4">
          Facebook apps have two modes that affect who can receive replies from
          your bot:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold text-sm mb-2">
              Development Mode
            </h3>
            <p className="text-slate-400 text-sm">
              Only Facebook accounts listed as Developers, Testers, or Admins in
              your Meta App settings can interact with the bot and receive
              replies. Use this for initial testing.
            </p>
          </div>
          <div className="bg-slate-800 border border-indigo-700/40 rounded-lg p-4">
            <h3 className="text-white font-semibold text-sm mb-2">Live Mode</h3>
            <p className="text-slate-400 text-sm">
              Anyone who messages your Page via Messenger receives automated
              replies. Requires Meta app review for some permissions. Contact
              your account manager for go-live assistance.
            </p>
          </div>
        </div>
        <div className="not-prose flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-lg p-4 mt-4 text-sm">
          <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-slate-300">
            If messages are not getting replies in testing, confirm the sending
            account is listed as a tester in your Meta App settings.
          </p>
        </div>
      </section>

      {/* Managing pages */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Managing Connected Pages
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">
              Connect an Additional Page
            </h3>
            <p className="text-slate-300 text-sm">
              Go to{" "}
              <strong className="text-white">
                Integrations &gt; Facebook Messenger
              </strong>
              . If your account is already connected, your Pages appear in the
              list. Click <strong className="text-white">Connect Page</strong>{" "}
              next to any page that is not yet connected.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">
              Assign a Flow to a Page
            </h3>
            <p className="text-slate-300 text-sm">
              Each connected page can have a different flow assigned. Find the
              page in the integration list and use the{" "}
              <strong className="text-white">Assign Flow</strong> dropdown to
              select an active flow.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Disconnect a Page</h3>
            <p className="text-slate-300 text-sm">
              Click <strong className="text-white">Disconnect</strong> next to
              the page. ReplyBase unsubscribes from the page&apos;s webhook.
              Messages sent to the page after this will not be processed.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">
              Reconnect Your Facebook Account / Fix Connection
            </h3>
            <p className="text-slate-300 text-sm">
              If your Page access token expires or webhooks become unsubscribed, a <strong className="text-white">Reconnect / Fix</strong> button will appear in the dashboard after running a connection check. Clicking this will attempt to auto-repair webhooks or prompt you to sign in again to refresh your OAuth session.
            </p>
          </div>
        </div>
      </section>

      {/* Flow assignment */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          How Messages Are Processed
        </h2>
        <p className="text-slate-300 mb-4">
          When a Messenger message arrives for a connected Page:
        </p>
        <ol className="space-y-2 text-slate-300">
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">1.</span>
            ReplyBase looks up the Page&apos;s assigned flow.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">2.</span>
            If a flow is assigned and active, it runs for the message.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">3.</span>
            If the flow produces a response, it is sent back to the user via
            Messenger.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">4.</span>
            If no flow handles the message, ReplyBase falls back to AI-generated
            replies.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">5.</span>
            The conversation, contact, and any captured lead data are recorded
            in your dashboard.
          </li>
        </ol>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
        <div className="space-y-3 text-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Page not appearing after sign-in
            </p>
            <p className="text-slate-300">
              During the Facebook OAuth flow, make sure you selected all the
              Pages you want to manage. If you missed a Page, disconnect and
              reconnect your Facebook account and re-authorize.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Bot not replying to test messages
            </p>
            <p className="text-slate-300">
              1. Confirm the Page status shows Connected in the dashboard.
              <br />
              2. Check that the sending Facebook account is listed as a tester
              in your Meta App settings if the app is in development mode.
              <br />
              3. Confirm an active flow is assigned to the Page, or that AI is
              enabled.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">OAuth token expired</p>
            <p className="text-slate-300">
              Facebook Page access tokens can expire. If messages stop being
              processed, use the <strong className="text-white">Check Connection</strong> shield icon in your dashboard. If an issue is found, click the <strong className="text-white">Reconnect / Fix</strong> button to repair it or refresh your OAuth token.
            </p>
          </div>
        </div>
      </section>

      {/* Related docs */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-white font-bold mb-3">Related Documentation</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/docs/get-started/facebook-setup"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Facebook Messenger first-time setup guide
            </Link>
          </li>
          <li>
            <Link
              href="/docs/features"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Plans and channel limits
            </Link>
          </li>
          <li>
            <Link
              href="/docs/modular-dashboard"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Workspace navigation guide
            </Link>
          </li>
        </ul>
      </div>
    </DocLayout>
  );
}
