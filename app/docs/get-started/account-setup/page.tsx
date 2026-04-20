"use client";

import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AccountSetupDoc() {
  return (
    <DocLayout
      title="Step 1 — Create Your Account"
      description="Register at app.replybase.co.uk and get your workspace ready in under two minutes"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shrink-0">
          1
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">Step 1 of 5 · ~2 minutes</div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      {/* What you'll do */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What You Will Do</h2>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
            Register a new account at app.replybase.co.uk
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
            Your tenant workspace is created automatically on registration
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
            Land in the dashboard and orient yourself
          </li>
        </ul>
      </section>

      {/* Register */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. Register Your Account
        </h2>
        <p className="text-slate-400 text-sm mb-5">
          You can register with your{" "}
          <strong className="text-white">Google account</strong> (one click, no
          form to fill) or with{" "}
          <strong className="text-white">email and password</strong>. Both
          methods create a workspace automatically.
        </p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-800 border border-indigo-700/50 rounded-xl p-4">
            <p className="text-white font-semibold text-sm mb-1">
              Option A — Google
            </p>
            <p className="text-slate-400 text-xs mb-3">
              Fastest — no form required
            </p>
            <ol className="space-y-1.5 text-slate-300 text-xs">
              <li>1. Open the register page.</li>
              <li>
                2. Click{" "}
                <strong className="text-white">Continue with Google</strong>.
              </li>
              <li>3. Select your Google account.</li>
              <li>4. You land in the dashboard — workspace is ready.</li>
            </ol>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <p className="text-white font-semibold text-sm mb-1">
              Option B — Email &amp; Password
            </p>
            <p className="text-slate-400 text-xs mb-3">Fill in a short form</p>
            <ol className="space-y-1.5 text-slate-300 text-xs">
              <li>1. Open the register page.</li>
              <li>
                2. Enter First Name, Last Name, Email, and a Password (min. 8
                characters).
              </li>
              <li>
                3. Click <strong className="text-white">Create Account</strong>.
              </li>
              <li>4. You land in the dashboard — workspace is ready.</li>
            </ol>
          </div>
        </div>

        <div className="not-prose">
          <Link
            href="https://app.replybase.co.uk/auth/register"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Open Registration Page
          </Link>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-5 text-sm text-slate-400">
          The Apple sign-in button is visible on the login screen but is not yet
          active.
        </div>
      </section>

      {/* Dashboard orientation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          2. Orient Yourself in the Dashboard
        </h2>
        <p className="text-slate-300 mb-4">
          After logging in you land on the main dashboard. The left sidebar
          gives you access to every area:
        </p>
        <div className="space-y-2">
          {[
            {
              area: "Conversations",
              note: "All incoming messages from every connected channel",
            },
            {
              area: "Contacts",
              note: "People who have messaged you, with identity and history",
            },
            {
              area: "Leads",
              note: "Contacts captured through your conversation flows",
            },
            {
              area: "Bots",
              note: "Your AI agents — create and manage bots here",
            },
            {
              area: "Flows",
              note: "Conversation flow editor for structured automation",
            },
            {
              area: "Integrations",
              note: "Connect channels: Webchat, Facebook, WhatsApp, Telegram",
            },
            { area: "Billing", note: "Manage your plan and subscription" },
          ].map(({ area, note }) => (
            <div
              key={area}
              className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm"
            >
              <span className="text-indigo-400 font-semibold w-28 shrink-0">
                {area}
              </span>
              <span className="text-slate-400">{note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Choose a plan */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          3. Your Starting Plan
        </h2>
        <p className="text-slate-300 mb-4">
          New accounts start on the{" "}
          <strong className="text-white">Free plan</strong>, which includes:
        </p>
        <div className="space-y-2 mb-5">
          {[
            { label: "Bots", value: "1 bot" },
            { label: "Automations", value: "200 / month" },
            { label: "AI responses", value: "100 / month" },
            { label: "Channels", value: "Webchat, Facebook, Website Forms" },
            { label: "CRM access", value: "Not included" },
            { label: "API access", value: "Not included" },
            { label: "Support", value: "Community" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm"
            >
              <span className="text-slate-400">{label}</span>
              <span className="text-slate-300 font-medium">{value}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 mb-4">
          <p className="text-white font-medium mb-1">
            Free plan — pick one channel
          </p>
          <p>
            Free users can connect{" "}
            <strong className="text-white">one channel</strong> — either Webchat
            or Facebook Messenger. Telegram and WhatsApp require a paid plan
            (Starter £29/mo or higher).
          </p>
        </div>
        <p className="text-slate-300 text-sm">
          Upgrade at any time from{" "}
          <Link
            href="https://app.replybase.co.uk/pricing"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Billing &gt; Plans
          </Link>
          . Paid plans include a 14-day free trial — no card charged until the
          trial ends.
        </p>
      </section>

      {/* Next step */}
      <div className="not-prose bg-indigo-900/20 border border-indigo-700/50 rounded-xl p-6">
        <p className="text-white font-semibold mb-1">Account created?</p>
        <p className="text-slate-400 text-sm mb-4">
          Next, choose which channel you want to set up first.
        </p>
        <Link
          href="/docs/get-started/choose-channel"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Step 2 — Choose Your Channel <ArrowRight size={16} />
        </Link>
      </div>
    </DocLayout>
  );
}
