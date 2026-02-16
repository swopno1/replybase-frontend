'use client';

import { useState, FormEvent } from 'react';
import { requestDataDeletion } from '@/app/actions/replybase-api';

export function DataDeletionForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    type: 'success' | 'error';
    message: string;
    statusUrl?: string;
    confirmationCode?: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const response = await requestDataDeletion(email);

    if (response.success && response.data) {
      setResult({
        type: 'success',
        message: 'Your data deletion request has been submitted successfully.',
        statusUrl: response.data.statusUrl,
        confirmationCode: response.data.confirmationCode,
      });
      setEmail('');
    } else {
      setResult({
        type: 'error',
        message: response.error || 'Failed to submit request. Please try again.',
      });
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={loading}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Submitting Request...' : 'Request Data Deletion'}
        </button>
      </form>

      {result && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            result.type === 'success'
              ? 'bg-green-900/20 border border-green-700/50'
              : 'bg-red-900/20 border border-red-700/50'
          }`}
        >
          <p
            className={`font-medium ${
              result.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {result.message}
          </p>

          {result.confirmationCode && (
            <div className="mt-3 space-y-2">
              <p className="text-sm text-slate-300">
                <strong>Confirmation Code:</strong> {result.confirmationCode}
              </p>
              {result.statusUrl && (
                <a
                  href={result.statusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-indigo-400 hover:underline"
                >
                  Check Status →
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <p className="text-xs text-slate-500 mt-4">
        By submitting this form, you are requesting the deletion of all your personal data
        associated with this email address in accordance with GDPR.
      </p>
    </div>
  );
}
