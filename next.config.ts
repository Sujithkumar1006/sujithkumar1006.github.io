import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/sujithkumar1006.github.io' : '',
  assetPrefix: isProd ? '/sujithkumar1006.github.io/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

