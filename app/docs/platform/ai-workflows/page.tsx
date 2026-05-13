import { Metadata } from "next";
import { Cpu, Zap, Brain, MessageSquare, Database, Sparkles } from "lucide-react";
import Callout from "../../_components/Callout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Workflow Systems",
  description: "Learn how ReplyBase uses AI to automate conversations and capture leads.",
};

export default function AIWorkflowsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
            <Cpu size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">AI Workflow Systems</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          ReplyBase isn't just a chatbot—it's an orchestration engine that combines structured flows with dynamic AI intelligence.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">How the AI Works</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Our AI system operates on a "Hybrid Orchestration" model. It attempts to follow your structured <strong>Flows</strong> first, and falls back to a <strong>Knowledge-Base AI</strong> when the user asks something outside of the flow.
      </p>

      {/* Visual Workflow Diagram */}
      <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 mb-12 overflow-x-auto">
        <div className="min-w-[600px] flex items-center justify-between relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="z-10 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white shadow-lg">
              <MessageSquare size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">User Input</span>
          </div>

          <div className="z-10 flex flex-col items-center gap-2">
            <div className="px-4 py-2 rounded-lg bg-indigo-600 border border-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20">
              Intent Analysis
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Orchestrator</span>
          </div>

          <div className="z-10 flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2 relative">
              <div className="h-0.5 w-8 bg-slate-800 absolute -left-8 top-1/2 -translate-y-1/2" />
              <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs">
                Structured Flow
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 relative">
              <div className="h-0.5 w-8 bg-slate-800 absolute -left-8 top-1/2 -translate-y-1/2" />
              <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs">
                Knowledge Base (RAG)
              </div>
            </div>
          </div>

          <div className="z-10 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-emerald-600 border border-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
              <Zap size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">AI Response</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <Brain className="text-indigo-400 mb-4" size={24} />
          <h4 className="font-bold text-white mb-2 text-sm">Intent Analysis</h4>
          <p className="text-xs text-slate-500 leading-relaxed">The AI analyzes every incoming message to determine if it matches a known flow trigger or a general inquiry.</p>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <Database className="text-indigo-400 mb-4" size={24} />
          <h4 className="font-bold text-white mb-2 text-sm">RAG Engine</h4>
          <p className="text-xs text-slate-500 leading-relaxed">Retrieval Augmented Generation ensures the AI only speaks using the data you've provided in your Knowledge Base.</p>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <Sparkles className="text-indigo-400 mb-4" size={24} />
          <h4 className="font-bold text-white mb-2 text-sm">Lead Extraction</h4>
          <p className="text-xs text-slate-500 leading-relaxed">The AI can automatically identify and extract names, emails, and phone numbers from natural conversation.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Knowledge Base Training</h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        To make your AI truly effective, you need to provide it with "context". In the <strong>Knowledge</strong> section of your dashboard, you can:
      </p>

      <ul className="space-y-4 mb-12">
        <li className="flex gap-4 p-4 bg-slate-800/20 rounded-xl border border-slate-800">
          <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-400">PDF</div>
          <div>
            <h4 className="font-bold text-white text-sm">Upload Documents</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Upload product manuals, service lists, or FAQ documents. The AI will index them for instant retrieval.</p>
          </div>
        </li>
        <li className="flex gap-4 p-4 bg-slate-800/20 rounded-xl border border-slate-800">
          <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-400">URL</div>
          <div>
            <h4 className="font-bold text-white text-sm">Website Scraping</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Provide your website URL, and our crawler will extract information from your pages automatically.</p>
          </div>
        </li>
      </ul>

      <Callout type="tip" title="Pro Tip: System Prompts">
        You can customize the "Personality" of your AI in the Bot Settings. Tell it to be "Professional and Concise" or "Friendly and Enthusiastic" to match your brand voice.
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Automation Limits</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Depending on your plan, there are limits on how many AI messages can be sent per month. You can track your usage in real-time on the <strong>Dashboard</strong>.
        </p>
        <Link href="/docs/features" className="text-indigo-400 hover:text-indigo-300 font-bold text-sm">
          View Plans & Limits →
        </Link>
      </div>
    </div>
  );
}
