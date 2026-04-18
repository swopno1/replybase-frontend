import Link from "next/link";
import Image from "next/image";
import NewsletterSubscribe from "./NewsletterSubscribe";

export default function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + Newsletter */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/image/logo.png"
                  alt="ReplyBase Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto bg-white rounded-full"
                />
                <span className="font-bold text-xl text-white">ReplyBase</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">
                AI-powered conversation automation platform for modern
                businesses.
              </p>
            </div>
            {/* NewsletterSubscribe: compact, integrated */}
            <div className="bg-slate-800/60 rounded-lg px-3 py-3 border border-slate-700/60">
              <NewsletterSubscribe compact />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:admin@replybase.co.uk"
                  className="hover:text-white"
                >
                  admin@replybase.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447822033580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +44 7822 033580
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/deletion-status" className="hover:text-white">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ReplyBase. All rights reserved.
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
