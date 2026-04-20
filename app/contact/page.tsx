import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ReplyBase — Talk to Our Team",
  description:
    "Have a question, need a demo, or want to discuss a custom plan? Contact the ReplyBase team — we reply fast.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact ReplyBase — Talk to Our Team",
    description:
      "Get in touch with the ReplyBase team for support, demos, or sales enquiries.",
    url: "https://replybase.co.uk/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
