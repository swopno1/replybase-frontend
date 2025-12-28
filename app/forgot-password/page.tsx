'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // TODO: Add backend integration for password reset.
    // This is a placeholder.
    console.log('Password reset requested for:', email)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setMessage('If an account with that email exists, a password reset link has been sent.')
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-300">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-slate-800/50 p-8 shadow-xl border border-slate-700/50">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Or{' '}
            <Link href="/login" className="font-medium text-indigo-500 hover:text-indigo-400">
              return to sign in
            </Link>
          </p>
        </div>
        {message ? (
            <div className="text-center text-green-400">
                <p>{message}</p>
            </div>
        ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="relative block w-full appearance-none rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email address"
                    />
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50"
                    >
                    {loading ? 'Sending...' : 'Send reset link'}
                    </button>
                </div>
            </form>
        )}
      </div>
    </div>
  )
}
