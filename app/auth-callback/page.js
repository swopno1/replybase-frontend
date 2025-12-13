'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

function AuthCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const token = searchParams.get('token');
        const tenantId = searchParams.get('tenant_id');

        if (token) {
            // 1. Save Token to Cookies
            Cookies.set('token', token, { expires: 7 }); // Expires in 7 days
            if (tenantId) Cookies.set('tenant_id', tenantId);

            // 2. Redirect to Dashboard
            router.push('/dashboard');
        } else {
            // If no token, something went wrong
            router.push('/?error=auth_failed');
        }
    }, [router, searchParams]);

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-semibold">Logging you in...</h2>
                <p className="text-gray-500">Please wait a moment.</p>
            </div>
        </div>
    );
}

export default function AuthCallback() {
    return (
        <Suspense fallback={<div>Processing...</div>}>
            <AuthCallbackContent />
        </Suspense>
    );
}