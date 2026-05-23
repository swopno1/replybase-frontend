"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function FoundingPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if the user has dismissed the modal before
    const hasDismissed = localStorage.getItem("foundingPromoDismissed");
    if (!hasDismissed) {
      // Delay showing the modal for 1.5s to let the user see the hero section
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissModal = () => {
    setIsOpen(false);
    localStorage.setItem("foundingPromoDismissed", "true");
  };

  const copyPromoCode = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("FOUNDING50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
        onClick={dismissModal}
        aria-hidden="true"
      />
      
      <div className="relative z-50 w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 p-8 text-left align-middle shadow-2xl transition-all motion-safe:animate-fade-in-up">
        <button
          onClick={dismissModal}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Gift className="h-8 w-8" />
          </div>
          
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Founding Member Offer
          </h3>
          <p className="text-slate-300 mb-6">
            Be one of our first <span className="font-bold text-white">20 subscribers</span> and get <span className="text-indigo-400 font-bold">50% OFF</span> for 12 months!
          </p>

          <div className="w-full bg-slate-950 rounded-xl p-4 mb-6 border border-slate-800 flex items-center justify-between group">
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1 text-left">Promo Code</p>
              <p className="text-xl font-mono font-bold text-white tracking-widest">FOUNDING50</p>
            </div>
            <button 
              onClick={copyPromoCode}
              className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Copy to clipboard"
            >
              {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
            </button>
          </div>

          <Link
            href="https://app.replybase.co.uk/auth/register?plan=grow&source=promo_modal&promo=FOUNDING50"
            onClick={dismissModal}
            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transform hover:scale-[1.02]"
          >
            Claim 50% Discount <ArrowRight className="h-5 w-5" />
          </Link>
          
          <p className="mt-4 text-xs text-slate-500">
            *Limited to the first 20 redemptions. Applies to any paid plan.
          </p>
        </div>
      </div>
    </div>
  );
}
