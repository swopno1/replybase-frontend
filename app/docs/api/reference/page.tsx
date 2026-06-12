import { Metadata } from "next";
import { Zap, Key, Code2, ArrowUpRight, Clock } from "lucide-react";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "API Reference",
  description: "Programmatic access to your ReplyBase workspace — manage bots, contacts, conversations, and leads via REST API.",
  alternates: {
    canonical: "/docs/api/reference",
  },
};

const endpoints = [
  {
    method: "GET",
    path: "/v1/contacts",
    desc: "List all contacts in your workspace",
  },
  {
    method: "GET",
    path: "/v1/contacts/:id",
    desc: "Retrieve a single contact with conversation history",
  },
  {
    method: "GET",
    path: "/v1/conversations",
    desc: "List conversations with optional channel and status filters",
  },
  {
    method: "GET",
    path: "/v1/leads",
    desc: "List leads with score, status, and enrichment data",
  },
  {
    method: "POST",
    path: "/v1/leads/:id/tags",
    desc: "Add tags to a lead record",
  },
  {
    method: "POST",
    path: "/v1/messages",
    desc: "Send an outbound message to a contact on a connected channel",
  },
  {
    method: "GET",
    path: "/v1/bots",
    desc: "List bots configured in your workspace",
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  POST: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PUT: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  DELETE: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function ApiReferencePage() {
  return (
    <DocLayout
      title="API Reference"
      description="Programmatic access to your ReplyBase workspace. Build integrations, sync contacts, send messages, and manage leads from your own stack."
    >
      {/* Coming Soon Banner */}
      <div className="flex items-start gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-5 py-4 mb-8">
        <Clock className="h-5 w-5 text-indigo-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-indigo-300">Coming Soon — Available Q3 2026</p>
          <p className="text-sm text-slate-400 mt-1">
            The REST API is under active development and will be available to{" "}
            <span className="text-white font-medium">Business plan</span> subscribers first.
            The endpoint overview below reflects the planned API surface.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="space-y-4 mb-10">
        <h2 className="text-lg font-semibold text-white">Overview</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          The ReplyBase REST API lets you read and write to your workspace programmatically.
          All requests are authenticated via a Bearer API key generated in{" "}
          <span className="text-white">Settings → Integrations → API Keys</span>.
        </p>
        <div className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-3 font-mono text-sm">
          <span className="text-slate-500">Base URL</span>
          <br />
          <span className="text-indigo-400">https://app.replybase.co.uk/api/v1</span>
        </div>
        <div className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-3 font-mono text-sm">
          <span className="text-slate-500">Authentication</span>
          <br />
          <span className="text-green-400">Authorization: Bearer rb_live_xxxxxxxxxxxxxxxx</span>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Key Concepts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Key,
              title: "API Keys",
              desc: "Scoped keys with read/write permissions. Rotate or revoke at any time from Settings.",
            },
            {
              icon: Code2,
              title: "REST + JSON",
              desc: "Standard REST conventions. All requests and responses use application/json.",
            },
            {
              icon: Zap,
              title: "Rate Limits",
              desc: "Business plan: 1,000 req/min. Scale plan: 200 req/min. Headers included in every response.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <Icon className="h-5 w-5 text-indigo-400 mb-2" />
              <p className="text-sm font-semibold text-white mb-1">{title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planned Endpoints */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Planned Endpoints</h2>
        <div className="space-y-2">
          {endpoints.map(({ method, path, desc }) => (
            <div
              key={path}
              className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
            >
              <span
                className={`text-[11px] font-bold uppercase px-2 py-0.5 rounded border font-mono shrink-0 ${methodColors[method] ?? ""}`}
              >
                {method}
              </span>
              <code className="text-sm text-slate-300 font-mono shrink-0">{path}</code>
              <span className="text-sm text-slate-500 hidden sm:block">— {desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">Get notified when the API launches</p>
          <p className="text-xs text-slate-400 mt-0.5">
            Business plan subscribers will get early access and full API documentation.
          </p>
        </div>
        <a
          href="https://app.replybase.co.uk/register"
          className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          Get Started
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </DocLayout>
  );
}
