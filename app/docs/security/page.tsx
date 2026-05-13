import { Metadata } from "next";
import { Shield, Lock, Eye, Server, Key, ShieldCheck } from "lucide-react";
import Callout from "../_components/Callout";

export const metadata: Metadata = {
  title: "Security & Privacy",
  description: "Learn how ReplyBase protects your customer data and integration credentials.",
};

export default function SecurityPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
            <Shield size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Security & Privacy</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Security is at the core of everything we build. We employ industry-standard protocols to ensure your data and your customers' conversations remain private and secure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="text-indigo-400" size={20} />
            <h3 className="font-bold text-white">Data Encryption</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            All data is encrypted at rest using AES-256 and in transit via TLS 1.3. This includes message history, contact details, and internal logs.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Key className="text-indigo-400" size={20} />
            <h3 className="font-bold text-white">Credential Vault</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Integration tokens (Meta, Telegram, WhatsApp) are stored in a secure hardware security module (HSM) and are never logged or exposed in cleartext.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy Compliance</h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        ReplyBase is designed to be GDPR and CCPA compliant. We provide tools for you to manage your customers' data rights:
      </p>

      <div className="space-y-4 mb-12">
        {[
          { title: "Data Deletion", desc: "Easily delete any contact and their entire message history from our servers with one click." },
          { title: "Data Portability", desc: "Export your leads and conversations in JSON or CSV format at any time." },
          { title: "Retention Policies", desc: "Configure how long messages are stored before being automatically purged." }
        ].map((item) => (
          <div key={item.title} className="bg-slate-800/20 border border-slate-700 p-5 rounded-xl flex gap-4">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info" title="Infrastructure">
        Our infrastructure is hosted on AWS in the London (eu-west-2) region, benefiting from their world-class physical security and compliance certifications (SOC 2, ISO 27001).
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Responsible AI & Data Privacy</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          We prioritize your intellectual property. ReplyBase utilizes <strong>Enterprise-tier API integrations</strong> with providers like Google Gemini and OpenAI. Under our service agreements:
        </p>
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 text-xs text-slate-500">
            <ShieldCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Zero Training:</strong> Your business data and customer conversations are <u>never</u> used to train global AI models.</span>
          </div>
          <div className="flex items-start gap-3 text-xs text-slate-500">
            <ShieldCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Context Isolation:</strong> Every AI interaction is strictly sandboxed to your workspace. No data leaks between tenants.</span>
          </div>
          <div className="flex items-start gap-3 text-xs text-slate-500">
            <ShieldCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Data Sovereignty:</strong> You retain full ownership of all Knowledge Base content and extracted lead data.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
