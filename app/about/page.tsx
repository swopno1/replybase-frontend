import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ReplyBase — Why Every Conversation Matters",
  description:
    "ReplyBase helps businesses capture every lead and reply instantly—so you never miss an opportunity. Discover how our platform turns conversations into customers.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ReplyBase — Why Every Conversation Matters",
    description:
      "ReplyBase helps businesses capture every lead and reply instantly—so you never miss an opportunity.",
    url: "https://replybase.co.uk/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              About ReplyBase
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-400">
              <strong className="text-white">ReplyBase</strong> was built to
              solve a simple problem: businesses lose customers when they don’t
              reply fast enough.
            </p>
          </header>
          <Card className="bg-slate-800/50 border-slate-700/50 py-6">
            <CardContent className="space-y-4 text-slate-400 text-lg md:text-xl text-justify">
              <p>
                Today, people expect instant responses. Every missed or delayed
                reply can mean a lost opportunity. ReplyBase helps fix that by
                allowing businesses to capture every lead, respond instantly,
                and manage conversations in one place.
              </p>
              <p>
                Our platform combines automation with simplicity, making it easy
                to stay responsive without increasing workload or hiring more
                staff. No complexity, no hidden fees—just a system designed to
                help you convert more enquiries into customers.
              </p>
              <p>
                We work with businesses across industries, providing a reliable
                and scalable solution that grows with you.
              </p>
              <p>
                <strong className="text-white">
                  Because every conversation matters
                </strong>
                —and with ReplyBase, you won’t miss it.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
