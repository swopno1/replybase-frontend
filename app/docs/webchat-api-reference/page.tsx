import { Metadata } from "next";
import DocLayout from "../_components/DocLayout";

export const metadata: Metadata = {
  title: "Webchat API Reference",
  description: "Technical documentation for the ReplyBase Webchat API, including methods and events.",
  alternates: {
    canonical: "/docs/webchat-api-reference",
  },
};

export default function WebchatApiReferenceDoc() {
  return (
    <DocLayout
      title="Webchat API Reference"
      description="Technical documentation for the ReplyBase Webchat client API"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Methods</h2>
        <div className="space-y-6">
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <code className="text-indigo-400 font-mono text-sm block mb-2">window.ReplyBase.open()</code>
            <p className="text-slate-300 text-sm">Programmatically open the chat widget.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <code className="text-indigo-400 font-mono text-sm block mb-2">window.ReplyBase.close()</code>
            <p className="text-slate-300 text-sm">Programmatically close the chat widget.</p>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}
