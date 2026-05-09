"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { CheckCircle, Mail, Info } from "lucide-react";

function DeletionStatusContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
              <CheckCircle className="text-green-500" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Data Deletion Request
            </h1>
            <p className="text-slate-400">
              Your request has been received and is being processed
            </p>
          </div>

          <div className="space-y-6">
            {id && (
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <p className="text-sm text-slate-400 mb-1">Confirmation Code</p>
                <p className="font-mono text-white">{id}</p>
              </div>
            )}

            <div className="bg-indigo-900/20 border border-indigo-700/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="text-indigo-400 mt-1" size={20} />
                <div>
                  <h2 className="text-white font-semibold mb-2 text-lg">
                    What Happens Next?
                  </h2>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>
                      • Your data deletion request will be processed within 30
                      days
                    </li>
                    <li>
                      • All personal information will be permanently removed
                      from our systems
                    </li>
                    <li>
                      • Conversation data associated with your account will be
                      anonymized
                    </li>
                    <li>
                      • Third-party integrations (Facebook, WhatsApp) will be
                      disconnected
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
              <div className="flex items-start gap-3">
                <Mail className="text-slate-400 mt-1" size={20} />
                <div>
                  <h2 className="text-white font-semibold mb-1 text-lg">
                    Email Confirmation
                  </h2>
                  <p className="text-sm text-slate-400">
                    A confirmation email has been sent to your registered email
                    address. Please check your inbox for further details.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h2 className="text-white font-semibold mb-3 text-lg">
                Data Retained for Legal Compliance
              </h2>
              <p className="text-sm text-slate-400 mb-3">
                The following data may be retained for legal, regulatory, or
                security purposes:
              </p>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Transaction records (for tax and accounting purposes)</li>
                <li>• Billing history (required by financial regulations)</li>
                <li>• Security logs (to prevent fraud and abuse)</li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-slate-400 mb-4">
                Need help or have questions?
              </p>
              <a
                href="mailto:admin@replybase.co.uk"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}

export default function DeletionStatusClient() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-slate-900">
          <div className="text-white">Loading deletion status...</div>
        </div>
      }
    >
      <DeletionStatusContent />
    </Suspense>
  );
}
