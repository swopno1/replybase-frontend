import { Metadata } from "next";
import { Layout, Users, MessageSquare, Zap, Shield, Cpu, GitBranch } from "lucide-react";
import DocLayout from "../_components/DocLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Overview",
  description: "Learn about the ReplyBase platform, CRM, Inbox, and automated workflows.",
};

export default function PlatformOverviewPage() {
  return (
    <DocLayout
      title="Platform Overview"
      description="Everything you need to know about managing contacts, conversations, and automation."
    >
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Users className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Contacts & CRM</h2>
          </div>
          <p className="text-slate-300 mb-6">
            ReplyBase automatically captures and organizes your customer identities across all channels. 
            View contact history, update metadata, and track lead status in one unified view.
          </p>
          <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700 border-dashed text-center">
            <p className="text-slate-400 italic">
              Detailed CRM documentation coming soon. 
              {/* TODO: Add detailed guide for contact filtering, tagging, and lead management */}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Omnichannel Inbox</h2>
          </div>
          <p className="text-slate-300 mb-6">
            A unified messaging experience. Reply to customers on WhatsApp, Facebook, Telegram, and Webchat 
            without switching tabs.
          </p>
          <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700 border-dashed text-center">
            <p className="text-slate-400 italic">
              Inbox management guide coming soon.
              {/* TODO: Add instructions for manual agent takeover and message status tracking */}
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Zap className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI & Automation</h2>
          </div>
          <p className="text-slate-300 mb-6">
            Power your business with 24/7 automated replies. Use our Flow Builder for structured paths 
            and AI Fallback for natural language queries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/docs/platform/ai-workflows"
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700 rounded-xl transition-all group"
            >
              <div className="p-2 bg-indigo-600/10 group-hover:bg-indigo-600/20 text-indigo-400 rounded-lg shrink-0">
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-0.5">AI Workflows</h4>
                <p className="text-xs text-slate-500">Hybrid AI orchestration & fallback systems.</p>
              </div>
            </Link>
            <Link 
              href="/docs/platform/flow-builder"
              className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700 rounded-xl transition-all group"
            >
              <div className="p-2 bg-indigo-600/10 group-hover:bg-indigo-600/20 text-indigo-400 rounded-lg shrink-0">
                <GitBranch size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-0.5">Visual Flow Builder</h4>
                <p className="text-xs text-slate-500">Design interactive conversation branches & checkout flows.</p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <Shield className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Security & Workspace</h2>
          </div>
          <p className="text-slate-300 mb-6">
            Enterprise-grade data isolation and secure credential management for your peace of mind.
          </p>
          <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700 border-dashed text-center">
            <p className="text-slate-400 italic">
              Security documentation coming soon.
              {/* TODO: Add details about AES-256 encryption and tenant isolation */}
            </p>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}
