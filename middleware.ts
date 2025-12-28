import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  const publicPaths = ['/login', '/register', '/forgot-password']

  // Allow API routes for auth to pass through, and static assets
  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // If user is logged in
  if (token) {
    // If they are on a public (auth) path, redirect them to the dashboard
    if (publicPaths.includes(pathname)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }
  // If user is not logged in
  else {
    // And they are trying to access a protected route (not a public one)
    if (!publicPaths.includes(pathname)) {
        // Redirect them to the login page
        let from = pathname;
        if (req.nextUrl.search) {
            from += req.nextUrl.search;
        }

        return NextResponse.redirect(
            new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
        );
    }
  }

  return NextResponse.next()
}
