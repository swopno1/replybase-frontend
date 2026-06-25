import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layout, Mail } from "lucide-react";
import Callout from "../../_components/Callout";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Account Setup Guide",
  description: "Learn how to create and configure your ReplyBase workspace.",
};

export default function AccountSetupPage() {
  return (
    <DocLayout
      title="Create Your Account"
      description="Get started with ReplyBase by creating your workspace. It takes less than two minutes and gives you immediate access to all core features."
      videoUrl="https://youtu.be/clHjHuhV3eI"
      videoTitle="Create Your Account In Minutes #ReplyBase"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Registration Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
            </div>
            <h3 className="font-bold text-white">Google Auth</h3>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Fastest way to get started. No passwords to remember.
          </p>
          <ul className="text-xs text-slate-500 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" /> One-click
              login
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" /> Instant
              workspace creation
            </li>
          </ul>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-400">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-white">Email & Password</h3>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Standard registration for those who prefer email logins.
          </p>
          <ul className="text-xs text-slate-500 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" /> Secure
              password auth
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" /> Team email
              support
            </li>
          </ul>
        </div>
      </div>

      <div className="not-prose mb-16">
        <Link
          href="https://app.replybase.co.uk/auth/register"
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/20"
        >
          Go to Registration <ArrowRight size={18} />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Layout size={24} className="text-indigo-400" />
        Workspace Overview
      </h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Once you&apos;ve registered, you&apos;ll land in your personal
        dashboard. Here&apos;s a quick tour of the key areas you&apos;ll be
        using:
      </p>

      <div className="space-y-4">
        {[
          {
            title: "Conversations",
            desc: "The central hub for all incoming customer messages.",
          },
          {
            title: "Flows",
            desc: "Where you build the logic and automated paths for your bots.",
          },
          {
            title: "Integrations",
            desc: "Connect your WhatsApp, Telegram, and Facebook channels.",
          },
          {
            title: "Knowledge Base",
            desc: "Upload docs to train your AI on your specific business data.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-slate-800/20 border border-slate-700/50 p-5 rounded-xl flex gap-4"
          >
            <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info" title="Security First">
        ReplyBase uses enterprise-grade encryption (AES-256) for all stored
        credentials and message history. Your data is isolated in your own
        tenant database.
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
        <span className="text-slate-500 text-sm">Step 1 of 4</span>
        <Link
          href="/docs/get-started/choose-channel"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
        >
          Step 2: Choose Your Channel <ArrowRight size={18} />
        </Link>
      </div>
    </DocLayout>
  );
}
