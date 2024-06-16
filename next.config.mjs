export default {
  reactStrictMode: true, // Essential to catch potential problems early
  swcMinify: true, // Faster builds and smaller production builds
  experimental: {
    scrollRestoration: true, // Restores scroll position during navigation
  },
  images: { // Crucial to utilize image optimization capabilities for format like AVF or WebP
    domains: [], 
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => { // Adds support for features useful in client-side only environments
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Exposes environment variables to securely access configuration data
  },
};
