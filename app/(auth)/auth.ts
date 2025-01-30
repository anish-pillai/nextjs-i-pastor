import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import { db } from '@/lib/db';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: 'jwt' },
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: '/login',
  },
  providers: [
    github({ allowDangerousEmailAccountLinking: true }),
    google({ allowDangerousEmailAccountLinking: true }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ['/profile', '/client-side', '/api/session'];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL('/login', nextUrl.origin);
        redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    session(params) {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.id as string,
          randomKey: params.token.randomKey,
        },
      };
    },
  },
});
