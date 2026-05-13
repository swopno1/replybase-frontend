import { Metadata } from "next";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Webchat Embed Guide",
  description: "Learn how to embed the ReplyBase chat widget on your website.",
  alternates: {
    canonical: "/docs/webchat-embed",
  },
};

export default function WebchatEmbedDoc() {
  return (
    <DocLayout
      title="Webchat Embed Quickstart"
      description="Quickly add the ReplyBase chat widget to any website"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
        <p className="text-slate-300 mb-4">
          Copy and paste the following snippet into the <code>&lt;head&gt;</code> of your website:
        </p>
        <pre className="bg-slate-900 p-4 rounded-lg border border-slate-700 overflow-x-auto">
          <code className="text-indigo-400 text-sm">
{`<script
  src="https://app.replybase.co.uk/embed/replybase-webchat.js"
  data-public-key="YOUR_PUBLIC_KEY"
  async
></script>`}
          </code>
        </pre>
      </section>
    </DocLayout>
  );
}
