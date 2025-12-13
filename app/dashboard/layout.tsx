'use client';

import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    // Middleware now handles authentication protection for this route group.

    // Render the dashboard pages
    return (
        <div className="min-h-screen bg-gray-50">
            {/* You can add a shared Navbar/Sidebar here */}
            <main>{children}</main>
        </div>
    );
}