import { Metadata } from "next";
import DocLayout from "../../_components/DocLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telegram Bot Guide",
  description: "Connect your Telegram bot to ReplyBase for automated customer engagement.",
  alternates: {
    canonical: "/docs/telegram-delivery",
  },
};

export default function TelegramDeliveryDoc() {
  return (
    <DocLayout
      title="Telegram Channel Reference"
      description="Operational guide for Telegram bot automation"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Channel Overview</h2>
        <p className="text-slate-300 mb-4">
          The Telegram integration allows you to connect any Telegram bot to
          your ReplyBase workspace.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
        <ul className="space-y-2 text-slate-300">
          <li>• A Telegram account</li>
          <li>• A bot created via @BotFather</li>
          <li>
            • A ReplyBase workspace with a{" "}
            <Link href="/docs/features" className="text-indigo-400">
              compatible plan
            </Link>
          </li>
        </ul>
      </section>

      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
        <h3 className="text-white font-bold mb-2">Ready to connect?</h3>
        <p className="text-slate-300 mb-4">
          Follow our setup guide to get your bot token and connect to ReplyBase.
        </p>
        <Link
          href="/docs/get-started/telegram-setup"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Telegram Setup Guide
        </Link>
      </div>
    </DocLayout>
  );
}
