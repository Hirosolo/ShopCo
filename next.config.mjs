/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Reduce client-side JS
  swcMinify: true,
  // Enable static generation
  staticPageGenerationTimeout: 60,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Remove console in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable SWR caching for ISR
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
