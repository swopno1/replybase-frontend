import { Metadata } from "next";
import DocLayout from "../_components/DocLayout";

export const metadata: Metadata = {
  title: "Product Roadmap",
  description: "Explore the future of ReplyBase, including upcoming features and channel integrations.",
  alternates: {
    canonical: "/docs/roadmap",
  },
};

export default function RoadmapDoc() {
  return (
    <DocLayout
      title="Product Roadmap"
      description="The future direction of ReplyBase — what we are building next"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Upcoming Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h3 className="text-white font-semibold mb-2">WhatsApp Business</h3>
            <p className="text-slate-400 text-sm">Full support for WhatsApp Business API with automated lead capture and qualification.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <h3 className="text-white font-semibold mb-2">Instagram DM</h3>
            <p className="text-slate-400 text-sm">Automate your Instagram Direct Messages and never miss a social media lead.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Enhanced AI Capabilities</h2>
        <ul className="space-y-4 text-slate-300">
          <li>
            <strong className="text-white block">Multi-Model Support</strong>
            Choose between different AI models (GPT-4, Claude 3, etc.) to power your chatbot&apos;s personality and intelligence.
          </li>
          <li>
            <strong className="text-white block">Sentiment Analysis</strong>
            Automatically detect customer mood and escalate negative interactions to human agents.
          </li>
          <li>
            <strong className="text-white block">Knowledge Base Sync</strong>
            Automatically train your AI on your existing help articles, PDFs, and website content.
          </li>
        </ul>
      </section>

      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
        <h3 className="text-white font-bold mb-2">Have a feature request?</h3>
        <p className="text-slate-300 mb-4">We build ReplyBase for you. If there is a feature or integration you need, let us know.</p>
        <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
          Submit Feature Request
        </a>
      </div>
    </DocLayout>
  );
}
