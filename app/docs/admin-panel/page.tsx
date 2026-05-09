import { Metadata } from "next";
import DocLayout from "../_components/DocLayout";

export const metadata: Metadata = {
  title: "Workspace Owner Guide",
  description: "Management and operations guide for ReplyBase workspace owners.",
  alternates: {
    canonical: "/docs/admin-panel",
  },
};

export default function AdminPanelDoc() {
  return (
    <DocLayout
      title="Workspace Owner Guide"
      description="Guidance for workspace owners, billing, and account-level operations"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Ownership</h2>
        <p className="text-slate-300 mb-4">
          As a workspace owner, you have full control over your bots, channels, and billing.
        </p>
      </section>
    </DocLayout>
  );
}
