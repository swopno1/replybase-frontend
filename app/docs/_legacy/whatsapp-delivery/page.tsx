import { Metadata } from "next";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "WhatsApp Business Guide",
  description: "Connect your WhatsApp Business account to ReplyBase (Beta).",
  alternates: {
    canonical: "/docs/whatsapp-delivery",
  },
};

export default function WhatsappDeliveryDoc() {
  return (
    <DocLayout
      title="WhatsApp Overview"
      description="WhatsApp Business Cloud API integration — now in Beta"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Beta Access</h2>
        <p className="text-slate-300 mb-4">
          The WhatsApp integration is currently in Beta. Please contact our
          team if you would like to participate in the testing phase.
        </p>
      </section>
    </DocLayout>
  );
}
