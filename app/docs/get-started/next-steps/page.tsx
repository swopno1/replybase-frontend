import { Metadata } from "next";
import Link from "next/link";
import { 
  Sparkles, 
  Globe, 
  Send, 
  MessageSquare, 
  Phone, 
  BarChart2, 
  Users, 
  ArrowLeft,
  ArrowRight,
  Zap,
  CreditCard
} from "lucide-react";
import Callout from "../../_components/Callout";

export const metadata: Metadata = {
  title: "You're Live! — Next Steps",
  description: "What to do after setting up your first ReplyBase chatbot channel.",
};

export default function NextStepsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-indigo-600/20 text-indigo-400">
            <Sparkles size={40} />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">You're Officially Live!</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Congratulations! Your first AI channel is now active. ReplyBase is ready to capture leads and support your customers 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link href="https://app.replybase.co.uk/conversations" className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all text-center">
          <div className="flex justify-center mb-4 text-indigo-400"><MessageSquare size={24} /></div>
          <h3 className="font-bold text-white text-sm mb-1">Unified Inbox</h3>
          <p className="text-xs text-slate-500">Monitor all incoming messages in real-time.</p>
        </Link>
        <Link href="https://app.replybase.co.uk/contacts" className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all text-center">
          <div className="flex justify-center mb-4 text-indigo-400"><Users size={24} /></div>
          <h3 className="font-bold text-white text-sm mb-1">CRM Access</h3>
          <p className="text-xs text-slate-500">View auto-captured lead profiles and history.</p>
        </Link>
        <Link href="https://app.replybase.co.uk/leads" className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all text-center">
          <div className="flex justify-center mb-4 text-indigo-400"><BarChart2 size={24} /></div>
          <h3 className="font-bold text-white text-sm mb-1">Lead Stats</h3>
          <p className="text-xs text-slate-500">Track conversion rates and campaign ROI.</p>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Expand Your Coverage</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Don't stop at one channel. Multiply your reach by connecting more platforms to your unified workspace.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <Link href="/docs/channels/webchat" className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all">
          <Globe size={20} className="text-indigo-400" />
          <div className="text-sm font-bold text-white">Embed Webchat Widget</div>
        </Link>
        <Link href="/docs/channels/facebook" className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all">
          <MessageSquare size={20} className="text-blue-500" />
          <div className="text-sm font-bold text-white">Connect Messenger Page</div>
        </Link>
        <Link href="/docs/channels/telegram" className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all">
          <Send size={20} className="text-sky-400" />
          <div className="text-sm font-bold text-white">Setup Telegram Bot</div>
        </Link>
        <Link href="/docs/channels/whatsapp" className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all">
          <Phone size={20} className="text-green-500" />
          <div className="text-sm font-bold text-white">Scale with WhatsApp API</div>
        </Link>
      </div>

      <Callout type="info" title="Need advanced automation?">
        Check out our <Link href="/docs/platform/ai-workflows" className="text-indigo-400 hover:underline">AI Workflows</Link> guide to learn how to build complex branching conversations and conditional lead capture.
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
        <Link href="/docs/get-started/live-test" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
          <ArrowLeft size={18} /> Step 4: Live Testing
        </Link>
        <Link href="/docs/platform/deployment-checklist" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
          Go Pro: Deployment Checklist <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
