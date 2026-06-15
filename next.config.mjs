/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/himanshi-travel-task",
  assetPrefix: "/himanshi-travel-task/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
