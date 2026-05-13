"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Rocket, 
  MessageSquare, 
  Send, 
  Globe, 
  Phone, 
  Layout, 
  Shield, 
  Cpu, 
  Zap,
  HelpCircle,
  AlertCircle,
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  Activity,
  CreditCard,
  CheckSquare,
  Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { name: "Overview", href: "/docs", icon: BookOpen },
      { name: "Quick Start", href: "/docs/get-started", icon: Rocket },
      { name: "Account Setup", href: "/docs/get-started/account-setup", icon: Layout },
      { name: "Choose a Channel", href: "/docs/get-started/choose-channel", icon: Zap },
      { name: "Live Testing", href: "/docs/get-started/live-test", icon: Activity },
    ],
  },
  {
    title: "Channels",
    items: [
      { name: "Webchat Widget", href: "/docs/channels/webchat", icon: Globe },
      { name: "Facebook Messenger", href: "/docs/channels/facebook", icon: MessageSquare },
      { name: "Telegram Bot", href: "/docs/channels/telegram", icon: Send },
      { name: "WhatsApp Cloud API", href: "/docs/channels/whatsapp", icon: Phone },
    ],
  },
  {
    title: "Platform",
    items: [
      { name: "Dashboard Guide", href: "/docs/admin-panel", icon: Layout },
      { name: "AI Workflows", href: "/docs/platform/ai-workflows", icon: Cpu },
      { name: "Deployment Checklist", href: "/docs/platform/deployment-checklist", icon: CheckSquare },
      { name: "Security & Privacy", href: "/docs/security", icon: Shield },
      { name: "Plans & Limits", href: "/docs/features", icon: CreditCard },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "FAQ", href: "/docs/faq", icon: HelpCircle },
      { name: "Webchat API", href: "/docs/webchat-api-reference", icon: Code2 },
      { name: "Troubleshooting", href: "/docs/troubleshooting", icon: AlertCircle },
      { name: "Product Roadmap", href: "/docs/roadmap", icon: ArrowUpRight },
    ],
  },
];

export default function DocsSidebar({ isMobile }: { isMobile?: boolean }) {
  const pathname = usePathname();

  return (
    <aside className={cn(
      "w-64 sticky top-24 self-start h-[calc(100vh-6rem)] overflow-y-auto pr-6 pb-10 scrollbar-thin scrollbar-thumb-slate-800",
      isMobile ? "w-full h-auto sticky-none static" : "hidden lg:block"
    )}>
      <nav className="space-y-8">
        {navigation.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors group",
                        isActive
                          ? "bg-indigo-600/10 text-indigo-400"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      )}
                    >
                      <Icon 
                        size={18} 
                        className={cn(
                          "transition-colors",
                          isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
                        )} 
                      />
                      {item.name}
                      {isActive && (
                        <ChevronRight size={14} className="ml-auto text-indigo-400/50" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className="mt-10 pt-6 border-t border-slate-800">
        <Link 
          href="https://app.replybase.co.uk"
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 hover:text-indigo-400 transition-colors"
        >
          <ArrowUpRight size={14} />
          Go to Dashboard
        </Link>
      </div>
    </aside>
  );
}
