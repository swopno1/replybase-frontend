import { Metadata } from "next";
import Link from "next/link";
import { 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Lock
} from "lucide-react";
import Callout from "../../_components/Callout";

export const metadata: Metadata = {
  title: "Telegram Bot Integration Guide",
  description: "Step-by-step guide to connecting your Telegram bot to ReplyBase using BotFather.",
};

export default function TelegramChannelPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-sky-500">
            <Send size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Telegram Bot</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Connect your Telegram bot to ReplyBase in seconds. Automate group chats or private messages with AI-powered responses and seamless lead capture.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Setup Process</h2>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white font-bold text-sm">1</div>
            <h3 className="text-xl font-bold text-white">Create Bot via BotFather</h3>
          </div>
          <div className="pl-11 space-y-4">
            <p className="text-slate-400">
              BotFather is the official Telegram bot for creating other bots. Open <Link href="https://t.me/BotFather" className="text-indigo-400 hover:underline inline-flex items-center gap-1">@BotFather <ExternalLink size={12} /></Link> in your Telegram app.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
              <li>Send the <code>/newbot</code> command.</li>
              <li>Follow the prompts to choose a <strong>Display Name</strong> and a unique <strong>Username</strong> (must end in "bot").</li>
              <li>BotFather will provide a <strong>Bot Token</strong>. Copy this string.</li>
            </ul>
            <Callout type="warning" title="Security First">
              Keep your Bot Token private. Anyone with access to it can control your bot and read messages.
            </Callout>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white font-bold text-sm">2</div>
            <h3 className="text-xl font-bold text-white">Connect to ReplyBase</h3>
          </div>
          <div className="pl-11 space-y-4 text-slate-400">
            <p>Go to your ReplyBase Dashboard:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Navigate to <strong>Integrations {" > "} Telegram</strong>.</li>
              <li>Paste your <strong>Bot Token</strong> into the field.</li>
              <li>Click <strong>Connect Bot</strong>.</li>
            </ul>
            <p>ReplyBase will automatically validate the token and register the necessary webhooks with Telegram's servers.</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white font-bold text-sm">3</div>
            <h3 className="text-xl font-bold text-white">Configure Privacy Mode (Optional)</h3>
          </div>
          <div className="pl-11 space-y-4 text-slate-400">
            <p>If you plan to add your bot to groups, you may want it to see all messages:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Go back to <strong>@BotFather</strong>.</li>
              <li>Send <code>/setprivacy</code>.</li>
              <li>Select your bot and set it to <strong>Disabled</strong>.</li>
            </ul>
            <Callout type="info">
              When privacy mode is enabled (default), the bot only sees messages starting with "/" or those mentioning the bot's username.
            </Callout>
          </div>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Global Webhooks</h4>
            <p className="text-xs text-slate-500">Automatic registration of your callback URL for instant message delivery.</p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Media Support</h4>
            <p className="text-xs text-slate-500">Handle images and documents sent via Telegram directly in the dashboard.</p>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">Group Management</h4>
            <p className="text-xs text-slate-500">Connect a single bot to multiple Telegram groups for team automation.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-linear-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-4">Troubleshooting Webhooks</h3>
        <p className="text-slate-400 text-sm mb-6">
          If your bot is connected but not responding, verify your webhook status:
        </p>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[10px] text-indigo-300 overflow-x-auto">
          curl https://api.telegram.org/bot{"<YOUR_TOKEN>"}/getWebhookInfo
        </div>
        <p className="mt-4 text-xs text-slate-500 italic">
          Replace <code>{"<YOUR_TOKEN>"}</code> with your actual bot token. Look for <code>last_error_message</code> in the response.
        </p>
      </div>
    </div>
  );
}
