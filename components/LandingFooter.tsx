import Link from 'next/link';
import Image from 'next/image';

export default function LandingFooter() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/image/logo.png"
                                alt="ReplyBase Logo"
                                width={32}
                                height={32}
                                className="h-8 w-auto bg-white rounded-full"
                            />
                            <span className="font-bold text-xl text-white">ReplyBase</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Modern AI chatbot automation platform built for speed and reliability.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/#features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white">API</Link></li>
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
