import { Metadata } from "next";
import { Webhook, ShieldCheck, RefreshCw, Clock, ArrowUpRight } from "lucide-react";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Outgoing Webhooks",
  description: "Push real-time events from your ReplyBase workspace to any external system — Zapier, Make, your own CRM, or a custom endpoint.",
  alternates: {
    canonical: "/docs/api/webhooks",
  },
};

const events = [
  {
    name: "lead.created",
    desc: "Fired when a new lead is captured via a bot flow or form submission.",
  },
  {
    name: "lead.updated",
    desc: "Fired when a lead's status, tags, or enrichment data changes.",
  },
  {
    name: "conversation.new_message",
    desc: "Fired when a new inbound message arrives on any connected channel.",
  },
  {
    name: "contact.updated",
    desc: "Fired when contact details (name, email, phone) are updated.",
  },
  {
    name: "bot.flow_completed",
    desc: "Fired when a bot flow reaches an end node for a conversation.",
  },
];

export default function WebhooksPage() {
  return (
    <DocLayout
      title="Outgoing Webhooks"
      description="Push live events from ReplyBase to your own systems the moment they happen — new leads, incoming messages, status changes, and more."
    >
      {/* Coming Soon Banner */}
      <div className="flex items-start gap-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 px-5 py-4 mb-8">
        <Clock className="h-5 w-5 text-indigo-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-indigo-300">Coming Soon — Available Q3 2026</p>
          <p className="text-sm text-slate-400 mt-1">
            Outgoing webhooks are in active development for{" "}
            <span className="text-white font-medium">Scale and Business plan</span> subscribers.
            The event reference below reflects the planned delivery surface.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="space-y-4 mb-10">
        <h2 className="text-lg font-semibold text-white">How It Works</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Register an HTTPS endpoint in{" "}
          <span className="text-white">Settings → Integrations → Webhooks</span>. When a matching
          event occurs in your workspace, ReplyBase sends an HTTP{" "}
          <code className="text-indigo-400">POST</code> to your URL with a JSON payload and a
          signed <code className="text-indigo-400">X-ReplyBase-Signature</code> header for
          verification.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: ShieldCheck,
              title: "HMAC Signatures",
              desc: "Every delivery is signed with HMAC-SHA256 using your endpoint secret. Verify authenticity server-side before processing.",
            },
            {
              icon: RefreshCw,
              title: "Automatic Retries",
              desc: "Failed deliveries are retried 3× with exponential backoff. Endpoints that fail 10 times consecutively are auto-disabled.",
            },
            {
              icon: Webhook,
              title: "Delivery Logs",
              desc: "Inspect the last 50 delivery attempts per endpoint — status codes, response times, and payload previews — directly from Settings.",
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

      {/* Events */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Event Reference</h2>
        <div className="space-y-2">
          {events.map(({ name, desc }) => (
            <div
              key={name}
              className="flex items-start gap-4 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
            >
              <code className="text-sm text-indigo-300 font-mono shrink-0 mt-0.5">{name}</code>
              <span className="text-sm text-slate-400">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payload Example */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Example Payload</h2>
        <pre className="rounded-xl bg-slate-950 border border-slate-800 p-4 text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`POST https://your-endpoint.com/hooks/replybase
Content-Type: application/json
X-ReplyBase-Signature: sha256=abc123...

{
  "event": "lead.created",
  "timestamp": "2026-06-12T10:30:00Z",
  "workspace_id": "tenant_abc123",
  "data": {
    "id": "lead_xyz",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+44 7911 123456",
    "source": "webchat",
    "status": "qualified",
    "tags": ["lead-capture", "cta-email"],
    "created_at": "2026-06-12T10:30:00Z"
  }
}`}
        </pre>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">Ready to connect your stack?</p>
          <p className="text-xs text-slate-400 mt-0.5">
            Scale and Business subscribers get outgoing webhooks plus API key access.
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
