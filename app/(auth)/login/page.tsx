'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Page() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <div className='flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background'>
      <div className='w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16'>
          <h3 className='text-xl font-semibold dark:text-zinc-50'>Sign In</h3>
          <p className='text-sm text-gray-500 dark:text-zinc-400'>
            Use your email and password to sign in
          </p>
        </div>
        {providers &&
          Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
