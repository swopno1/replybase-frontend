"use client";

import DocLayout from "../_components/DocLayout";

export default function WebchatEmbedDoc() {
  return (
    <DocLayout
      title="Webchat Embed Quickstart"
      description="How to embed ReplyBase webchat on your site with correct domain and bot/channel configuration"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Before You Embed</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Create/select bot and assign the target flow.</li>
          <li>Configure webchat channel for the tenant/site.</li>
          <li>Set allowed domains to match production hostnames.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Embed Steps</h2>
        <ul className="space-y-2 text-slate-300">
          <li>Copy the embed snippet from the webchat setup screen.</li>
          <li>Place it near the end of your page body.</li>
          <li>Load page and confirm root container renders correctly.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Common Troubleshooting
        </h2>
        <ul className="space-y-2 text-slate-300">
          <li>Widget not loading: verify script URL and CSP allowances.</li>
          <li>403 responses: check allowed domains and token/session state.</li>
          <li>No responses: confirm bot flow assignment and backend health.</li>
        </ul>
      </section>
    </DocLayout>
  );
}
