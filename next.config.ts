import type { NextConfig } from 'next';

// The site is now a single page. Legacy routes from the previous site (old product suite,
// login/portal, pricing, etc.) redirect to the matching homepage section.
const toHome = [
  '/pricing',
  '/login',
  '/portal',
  '/case-studies',
  '/compliance',
  '/enterprise',
  '/industries',
  '/integrations',
  '/resources',
  '/security',
  '/solutions',
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/software', destination: '/#ecosystem', permanent: false },
      { source: '/software/:path*', destination: '/#ecosystem', permanent: false },
      { source: '/about', destination: '/#about', permanent: false },
      { source: '/contact', destination: '/#contact', permanent: false },
      { source: '/demo', destination: '/#contact', permanent: false },
      ...toHome.map((source) => ({ source, destination: '/', permanent: false })),
    ];
  },
};

export default nextConfig;
