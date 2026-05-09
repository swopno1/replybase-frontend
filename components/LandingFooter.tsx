import Link from "next/link";
import Image from "next/image";
import NewsletterSubscribe from "./NewsletterSubscribe";

export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand + Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/image/logo.png"
                  alt="ReplyBase - AI-powered conversation automation platform"
                  width={32}
                  height={32}
                  className="h-8 w-auto bg-white rounded-full"
                />
                <span className="font-bold text-xl text-white">ReplyBase</span>
              </div>
              <p className="text-sm text-slate-400 max-w-[280px] leading-relaxed">
                AI-powered conversation automation for modern businesses. Turn messages into revenue with ReplyBase.
              </p>
            </div>
            {/* NewsletterSubscribe: compact, integrated */}
            <div className="bg-slate-800/40 rounded-xl px-4 py-4 border border-slate-700/50 max-w-[340px]">
              <NewsletterSubscribe compact />
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:admin@replybase.co.uk"
                  className="hover:text-white transition-colors"
                >
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447822033580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/deletion-status" className="hover:text-white transition-colors">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ReplyBase. All rights reserved.{" "}
            <Link
              href="/credits"
              className="hover:text-slate-400 transition-colors"
            >
              Credits
            </Link>
          </p>
          <div className="mt-4 opacity-50 hover:opacity-80 transition-opacity">
            <p className="text-[10px] leading-tight text-slate-500">
              Developed by
              <a
                href="https://vivescriptsolutions.com"
                className="font-medium text-slate-400 hover:text-slate-200"
              >
                ViveScript Solutions LLC
              </a>
              &nbsp;— AI Automation • Chatbots • Workflow Engineering • Web
              Development
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <a
                href="https://vivescriptsolutions.com"
                className="text-[9px] text-slate-600 hover:text-slate-300"
              >
                AI Automation
              </a>
              <a
                href="https://vivescriptsolutions.com"
                className="text-[9px] text-slate-600 hover:text-slate-300"
              >
                Chatbot Developer
              </a>
              <a
                href="https://vivescriptsolutions.com"
                className="text-[9px] text-slate-600 hover:text-slate-300"
              >
                Google Workspace Automation
              </a>
              <a
                href="https://vivescriptsolutions.com"
                className="text-[9px] text-slate-600 hover:text-slate-300"
              >
                Workflow Engineering
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
