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
      { source: '/mandate', destination: '/about-us/mandate', permanent: true },
      {
        source: '/board-of-directors',
        destination: '/about-us/board',
        permanent: true,
      },
      {
        source: '/advisory-council',
        destination: '/about-us/advisors',
        permanent: true,
      },
      {
        source: '/board-of-directors/:slug',
        destination: '/about-us/board',
        permanent: true,
      },
      {
        source: '/advisory-council/:slug',
        destination: '/about-us/advisors',
        permanent: true,
      },
      {
        source: '/leadership',
        destination: '/about-us/executive',
        permanent: true,
      },
      {
        source: '/leadership/:slug',
        destination: '/about-us/executive',
        permanent: true,
      },
      {
        source: '/executive-body',
        destination: '/about-us/executive',
        permanent: true,
      },
      {
        source: '/all-directorates',
        destination: '/about-us/directorates',
        permanent: true,
      },
      {
        source: '/directorates/:slug',
        destination: '/about-us/directorates',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
