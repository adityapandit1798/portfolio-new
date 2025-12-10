import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Good for static hosting compatibility
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // IMPORTANT: Since you have a public/CNAME file, you are using a custom domain.
  // When using a custom domain, you do NOT need a basePath.
  // If you remove the CNAME file to use the default GitHub Pages URL (username.github.io/portfolio-new),
  // you MUST uncomment the basePath line below.
  basePath: '/portfolio-new',
};

export default nextConfig;