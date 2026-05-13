"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Menu, X } from "lucide-react";
import DocsSidebar from "./DocsSidebar";
import { cn } from "@/lib/utils";

export default function DocsContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Generate breadcrumbs from pathname
  const pathSegments = pathname.split("/").filter((s) => s);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      href,
    };
  });

  return (
    <div className="flex-1 relative">
      {/* Mobile Header - Sticky */}
      <div className="lg:hidden sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Home size={14} />
          <ChevronRight size={12} />
          <span className="font-medium text-slate-200 truncate max-w-[150px]">
            {breadcrumbs[breadcrumbs.length - 1]?.name || "Documentation"}
          </span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - Desktop */}
          <DocsSidebar />

          {/* Sidebar - Mobile Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          
          <div className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 p-6 transform transition-transform duration-300 ease-in-out lg:hidden",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-white tracking-tight">Documentation</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-8rem)]">
              <DocsSidebar isMobile />
            </div>
          </div>
          
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Desktop Breadcrumbs */}
            <nav className="hidden lg:flex items-center gap-2 mb-8 text-sm text-slate-500">
              <Link href="/docs" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                <Home size={14} />
                <span>Docs</span>
              </Link>
              {breadcrumbs.slice(1).map((crumb, i) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight size={14} />
                  <Link 
                    href={crumb.href}
                    className={cn(
                      "hover:text-indigo-400 transition-colors",
                      i === breadcrumbs.length - 1 ? "text-slate-300 font-medium" : ""
                    )}
                  >
                    {crumb.name}
                  </Link>
                </div>
              ))}
            </nav>

            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
