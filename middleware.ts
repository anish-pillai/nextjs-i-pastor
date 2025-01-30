export { auth as middleware } from '@/app/(auth)/auth';

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

// import NextAuth from 'next-auth';

// import { authConfig } from '@/app/(auth)/auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ['/', '/:id', '/api/:path*', '/login'],
// };
