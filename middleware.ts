import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const cookies = req.headers.get('cookie');
  const { pathname } = new URL(req.url);

  // Allow access to login page and static assets
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Example: Allow all image requests
  if (
    req.nextUrl.pathname.startsWith('/images') ||
    req.nextUrl.pathname.startsWith('/fonts')
  ) {
    return NextResponse.next();
  }

  // Check if the session token cookie is present
  const sessionToken = cookies?.match(/authjs\.session-token=([^;]+)/)?.[1];

  if (!sessionToken) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('callbackUrl', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  // Allow the request to continue if the session token exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
