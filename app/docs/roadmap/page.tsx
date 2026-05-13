import { Metadata } from "next";
import { ArrowUpRight, Clock, CheckCircle2, Star, Calendar } from "lucide-react";
import Callout from "./_components/Callout";

export const metadata: Metadata = {
  title: "Product Roadmap",
  description: "See what we're building next for ReplyBase.",
};

const roadmap = [
  {
    quarter: "Q2 2026",
    status: "In Progress",
    items: [
      { title: "Advanced Webhooks", desc: "Push lead data to Zapier, Make, or your custom CRM." },
      { title: "Multi-Agent Workspaces", desc: "Collaborate with your team in the unified inbox." },
      { title: "Voice Note Processing", desc: "Transcribe and summarize WhatsApp voice messages." }
    ]
  },
  {
    quarter: "Q3 2026",
    status: "Planned",
    items: [
      { title: "Instagram Direct Integration", desc: "Connect your Instagram Business Profile." },
      { title: "AI Analytics v2", desc: "Sentiment analysis and conversion attribution." },
      { title: "Custom Embed Themes", desc: "Full CSS control over the webchat widget." }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white">
            <ArrowUpRight size={24} />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Product Roadmap</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          We're constantly improving ReplyBase based on customer feedback. Here's a look at what we've recently shipped and what's coming next.
        </p>
      </div>

      <div className="space-y-16 my-12">
        {roadmap.map((section) => (
          <section key={section.quarter}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-indigo-400" />
                <h2 className="text-2xl font-bold text-white">{section.quarter}</h2>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${section.status === 'In Progress' ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}>
                {section.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div key={item.title} className="bg-slate-800/30 border border-slate-700/50 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bg-linear-to-r from-indigo-600/10 to-transparent border-l-4 border-indigo-500 p-8 rounded-r-2xl">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Star size={20} className="text-indigo-400 fill-indigo-400" />
          Request a Feature
        </h3>
        <p className="text-slate-400 text-sm mb-6 max-w-xl">
          Is there a specific integration or automation you'd like to see? We build based on user demand. Join our Discord community or email us to share your ideas.
        </p>
        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm transition-all">
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
