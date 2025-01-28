import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Claude's placeholder images
  images: {
    domains: ['localhost'],
    // Common image domains users might need
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Useful for debugging production issues
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  // Recommended security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],

  // Webpack configuration for common use cases
  webpack: (config) => {
    // Handle SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;