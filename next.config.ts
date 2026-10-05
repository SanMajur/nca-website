import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/media/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/overview-of-nca', destination: '/about-us', permanent: true },
      { source: '/vision-mission', destination: '/about-us', permanent: true },
      { source: '/core-objectives', destination: '/about-us', permanent: true },
      {
        source: '/functions-powers',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/organization-structure',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
