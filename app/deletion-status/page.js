'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DeletionStatusContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded shadow text-center max-w-md">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Data Deletion Request Processed</h1>
                <p className="text-gray-700 mb-4">
                    Your request to remove data has been received and processed.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm text-gray-500">
                    Confirmation Code: <span className="font-mono text-black">{id || 'N/A'}</span>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                    Your credentials have been removed from our system.
                </p>
            </div>
        </div>
    );
}

export default function DeletionStatus() {
    return (
        <Suspense fallback={<div>Loading status...</div>}>
            <DeletionStatusContent />
        </Suspense>
    );
}