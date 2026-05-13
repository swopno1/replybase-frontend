"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";

type DocLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function DocLayout({
  title,
  description,
  children,
}: DocLayoutProps) {
  return (
    <div className="max-w-4xl">
      <Link
        href="/docs"
        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Documentation
      </Link>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-slate-400 mb-8">{description}</p>
        {children}
      </article>
    </div>
  );
}
