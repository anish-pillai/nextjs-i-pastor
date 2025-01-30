import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
};

export default nextConfig;
