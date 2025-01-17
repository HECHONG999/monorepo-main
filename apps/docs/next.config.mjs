/** @type {import('next').NextConfig} */
const { SUB_MODULE_URL, WEB_URL } = process.env;
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sub-module",
        destination: `${SUB_MODULE_URL}/sub-module`,
      },
      {
        source: "/sub-module/:path+",
        destination: `${SUB_MODULE_URL}/sub-module/:path+`,
      },
      {
        source: "/sub-module-static/_next/:path+",
        destination: `${SUB_MODULE_URL}/sub-module-static/_next/:path+`,
      },
      {
        source: "/web",
        destination: `${WEB_URL}/web`,
      },
      {
        source: "/web/:path*",
        destination: `${WEB_URL}/web/:path*`,
      },
      {
        source: "/web-static/_next/:path+",
        destination: `${WEB_URL}/web-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
