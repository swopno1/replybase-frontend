import { Metadata } from "next";
import { CheckSquare, AlertCircle, ShieldCheck, Zap, Globe, MessageSquare, Brain } from "lucide-react";
import Callout from "../../_components/Callout";

export const metadata: Metadata = {
  title: "Production Deployment Checklist",
  description: "Ensure your ReplyBase integration is secure and ready for live customers.",
};

const checklist = [
  {
    category: "Security & Permissions",
    icon: ShieldCheck,
    items: [
      { title: "Allowed Domains", desc: "Verify that only your production domains are in the 'Allowed Domains' list for Webchat." },
      { title: "Permanent Tokens", desc: "For WhatsApp, ensure you've generated a permanent System User token rather than a 24-hour test token." },
      { title: "Secure Verify Tokens", desc: "Double-check that your Webhook Verify Tokens are unique and not shared." }
    ]
  },
  {
    category: "AI & Knowledge",
    icon: Brain,
    items: [
      { title: "Knowledge Base Processing", desc: "Confirm all documents are 'Processed' and not stuck in 'Pending'." },
      { title: "System Prompt Review", desc: "Test the AI's tone one last time in the Simulator to ensure it matches your brand voice." },
      { title: "Fallback Logic", desc: "Ensure your 'I don't know' responses provide a way for the user to contact a human." }
    ]
  },
  {
    category: "Integration Health",
    icon: Zap,
    items: [
      { title: "Webhook Subscription", desc: "Confirm you are subscribed to all necessary events (messages, postbacks, statuses)." },
      { title: "Lead Mapping", desc: "Run a test lead capture to ensure data is appearing correctly in your CRM/Dashboard." },
      { title: "Error Notifications", desc: "Enable email or browser notifications for failed message deliveries." }
    ]
  }
];



export default function DeploymentChecklistPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-600">
            <CheckSquare size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Deployment Checklist</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Before you flip the switch and send live traffic to your AI chatbot, run through this checklist to ensure a smooth launch.
        </p>
      </div>

      <Callout type="info" title="Go Live With Confidence">
        A successful deployment is more than just a working connection. It's about security, data integrity, and a great user experience.
      </Callout>

      <div className="space-y-16 mt-12">
        {checklist.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">{group.category}</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {group.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-slate-800/20 border border-slate-700/50 rounded-2xl group hover:border-emerald-500/30 transition-all">
                    <div className="mt-1 h-5 w-5 rounded border-2 border-slate-700 group-hover:border-emerald-500 flex items-center justify-center transition-colors">
                      <div className="h-2 w-2 rounded-sm bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-20 p-8 bg-emerald-600/10 border border-emerald-500/20 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-2">Ready to Launch?</h3>
        <p className="text-slate-400 text-sm mb-6">
          If you've checked off all the items above, your integration is production-ready. We recommend starting with a small percentage of traffic (if using Webchat) to monitor performance.
        </p>
        <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition-all">
          Mark Project as Live
        </button>
      </div>
    </div>
  );
}
