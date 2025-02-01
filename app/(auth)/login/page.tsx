'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800'>
      <Card className='p-8 w-full max-w-md space-y-8'>
        <div className='text-center space-y-2'>
          <div className='flex justify-center'>
            <Image
              src='/images/logo.png'
              alt='iPastor'
              width={50}
              height={50}
              priority
              unoptimized
            />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Welcome to iPastor
          </h1>
          <p className='text-gray-600 dark:text-gray-300'>
            Get wise counsel for life&apos;s challenges and technical guidance
            for your code
          </p>
        </div>

        <div className='space-y-4'>
          <Button
            variant='outline'
            className='w-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800'
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            <Image
              src='https://authjs.dev/img/providers/google.svg'
              alt='Google'
              width={20}
              height={20}
            />
            Continue with Google
          </Button>

          <Button
            variant='outline'
            className='w-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800'
            onClick={() => signIn('github', { callbackUrl: '/' })}
          >
            <Github className='size-5' />
            Continue with GitHub
          </Button>

          {/* <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => signIn("facebook", { callbackUrl: "/" })}
          >
            <Facebook className="w-5 h-5" />
            Continue with Facebook
          </Button> */}
        </div>

        <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
          By continuing, you agree to our{' '}
          <a
            href='#'
            className='text-indigo-600 hover:text-indigo-500 dark:text-indigo-400'
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href='#'
            className='text-indigo-600 hover:text-indigo-500 dark:text-indigo-400'
          >
            Privacy Policy
          </a>
        </div>
      </Card>
    </div>
  );
}

// export default function Page() {
//   const [providers, setProviders] = useState<any>(null);

//   useEffect(() => {
//     const fetchProviders = async () => {
//       const res = await getProviders();
//       setProviders(res);
//     };

//     fetchProviders();
//   }, []);

//   return (
//     <div className='flex h-dvh w-screen items-start pt-12 md:pt-0 md:items-center justify-center bg-background'>
//       <div className='w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12'>
//         <div className='flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16'>
//           <h3 className='text-xl font-semibold dark:text-zinc-50'>Sign In</h3>
//           <p className='text-sm text-gray-500 dark:text-zinc-400'>
//             Use your email and password to sign in
//           </p>
//         </div>
//         {providers &&
//           Object.values(providers).map((provider: any) => (
//             <div key={provider.name}>
//               <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
//                 Sign in with {provider.name}
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
