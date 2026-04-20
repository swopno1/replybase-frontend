"use client";

import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function FacebookSetupDoc() {
  return (
    <DocLayout
      title="Step 3 — Set Up Facebook Messenger"
      description="Connect your Facebook Page to ReplyBase and start handling Messenger enquiries automatically"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shrink-0">
          3
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">
            Step 3 of 5 · ~10 minutes · Facebook path
          </div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      {/* Prerequisites */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Before You Start</h2>
        <ul className="space-y-2 text-slate-300">
          {[
            "You have a Facebook account and are logged in",
            "You have admin access to at least one Facebook Page",
            "The Page is published (not in draft mode)",
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
        <div className="not-prose flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-lg p-4 mt-5 text-sm">
          <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <div className="text-slate-300">
            <p className="font-medium text-amber-300 mb-1">
              Personal profiles are not supported
            </p>
            <p>
              Facebook Messenger integration requires a{" "}
              <strong className="text-white">Facebook Page</strong>, not a
              personal profile. If you do not have a Page yet, create one at{" "}
              <Link
                href="https://www.facebook.com/pages/create"
                className="text-indigo-400 hover:text-indigo-300"
              >
                facebook.com/pages/create
              </Link>{" "}
              before continuing.
            </p>
          </div>
        </div>
      </section>

      {/* Step A: Create a ReplyBase bot */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          A. Create a Bot in ReplyBase
        </h2>
        <p className="text-slate-300 mb-4">
          Each connected Facebook Page is powered by a ReplyBase bot. You need
          at least one bot before connecting. If you already have one, skip to
          step B.
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Bots</strong> from the sidebar.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">New Bot</strong>, name it (e.g.
            "Facebook Bot"), and save.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Optionally create a flow and assign it as the bot&apos;s{" "}
            <strong className="text-white">Entry Flow</strong> in bot settings.
          </li>
        </ol>
      </section>

      {/* Step B: Connect via Facebook OAuth */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          B. Sign In with Facebook
        </h2>
        <ol className="space-y-4 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Integrations</strong> from the
            sidebar and click{" "}
            <strong className="text-white">Facebook Messenger</strong>.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">Sign In with Facebook</strong>.
            A Facebook authorization window opens.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Log in to Facebook if prompted, then review and accept the
            permissions ReplyBase requests. These include access to your Pages
            and the ability to manage Messenger subscriptions.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            After authorization, you are redirected back to the ReplyBase
            integration page. Your Facebook Pages appear in a list.
          </li>
        </ol>
      </section>

      {/* Step C: Connect a Page */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          C. Connect Your Facebook Page
        </h2>
        <ol className="space-y-4 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Find the Facebook Page you want to connect in the list.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">Connect Page</strong> next to
            it. ReplyBase subscribes to the page&apos;s Messenger webhook.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            The page status updates to{" "}
            <strong className="text-green-400">Connected</strong>.
          </li>
        </ol>
      </section>

      {/* Step D: Assign a flow */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          D. Assign a Flow to Your Page
        </h2>
        <p className="text-slate-300 mb-4">
          Flows control what happens when someone messages your Page. Without a
          flow assigned, ReplyBase uses AI fallback responses.
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            In the Facebook integration page, find your connected Page.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Use the <strong className="text-white">Assign Flow</strong> dropdown
            to select an active flow.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Click <strong className="text-white">Save</strong>. The flow is now
            active for this page.
          </li>
        </ol>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          If You Don&apos;t See Your Page
        </h2>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Page is not appearing after sign-in
            </p>
            <p>
              During Facebook authorization, make sure you tick the checkbox
              next to every Page you want to manage. If you unchecked it,
              disconnect and reconnect your Facebook account to re-authorize.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Need to switch Facebook accounts
            </p>
            <p>
              Click <strong className="text-white">Disconnect</strong> on the
              integration page and sign in again with the correct Facebook
              account.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="not-prose flex items-center justify-between gap-4">
        <Link
          href="/docs/get-started/choose-channel"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <ArrowLeft size={16} /> Step 2 — Choose Your Channel
        </Link>
        <Link
          href="/docs/get-started/live-test"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Step 4 — Test Your Channel <ArrowRight size={16} />
        </Link>
      </div>
    </DocLayout>
  );
}
