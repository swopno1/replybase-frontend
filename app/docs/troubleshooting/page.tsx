import { Metadata } from "next";
import { AlertCircle, Terminal, RefreshCw, MessageSquare, ShieldAlert, WifiOff } from "lucide-react";
import Callout from "../_components/Callout";

export const metadata: Metadata = {
  title: "Troubleshooting Guide",
  description: "Diagnose and fix common issues with ReplyBase integrations, webhooks, and AI responses.",
};

const issues = [
  {
    title: "Webhook Failures",
    icon: RefreshCw,
    problems: [
      {
        issue: "Meta Webhook Verification Fails",
        solution: "Ensure your 'Verify Token' exactly matches the one in your ReplyBase dashboard. Also, verify that your server is accessible from the internet (no 403 or 500 errors on the webhook endpoint)."
      },
      {
        issue: "Telegram Messages Not Delivering",
        solution: "Use the getWebhookInfo API to check for errors. If you see 'SSL error', ensure your domain has a valid, non-expired SSL certificate."
      }
    ]
  },
  {
    title: "AI Response Issues",
    icon: AlertCircle,
    problems: [
      {
        issue: "AI Says 'I don't know the answer'",
        solution: "Check your Knowledge Base. Make sure the relevant documents are uploaded and processed. Try increasing the 'Creativity' setting if the AI is being too restrictive."
      },
      {
        issue: "Slow Response Times",
        solution: "AI processing typically takes 1-3 seconds. If it takes longer, check if your Entry Flow has complex external API calls that might be timing out."
      }
    ]
  },
  {
    title: "Connection Errors",
    icon: WifiOff,
    problems: [
      {
        issue: "Facebook Page Disconnected",
        solution: "Facebook tokens expire if your password is changed or for security reasons. Go to Integrations > Facebook and click 'Reconnect' to refresh the session."
      },
      {
        issue: "Webchat Not Appearing",
        solution: "Verify that your Public Key is correct and that the script is not being blocked by a Content Security Policy (CSP) or an ad-blocker."
      }
    ]
  }
];

export default function TroubleshootingPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <ShieldAlert className="text-rose-500" />
          Troubleshooting
        </h1>
        <p className="text-lg text-slate-400">Solutions for common technical hurdles and configuration errors.</p>
      </div>

      <Callout type="info" title="Check System Health First">
        Before diving into deep troubleshooting, check our <code className="text-indigo-400">status.replybase.co.uk</code> page to ensure all systems are operational.
      </Callout>

      <div className="space-y-16 mt-12">
        {issues.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.title}>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">{group.title}</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {group.problems.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/20 border border-slate-700/50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      {item.issue}
                    </h3>
                    <div className="pl-4 border-l-2 border-slate-700">
                      <p className="text-slate-400 text-sm leading-relaxed">
                        <span className="text-indigo-400 font-bold uppercase text-[10px] block mb-1">Solution</span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-20 p-8 border border-dashed border-slate-700 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2 italic">"I've tried everything and it's still not working"</h3>
            <p className="text-slate-500 text-sm">
              Send us a screenshot of your error and your <strong>Workspace ID</strong>. We'll investigate the logs and get back to you within 24 hours.
            </p>
          </div>
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold border border-slate-700 transition-all shrink-0">
            Open Support Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
