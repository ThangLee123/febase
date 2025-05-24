import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_BASE_URL:
      process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com",
  },
};

export default nextConfig;
