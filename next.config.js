/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.insprit.us" }],
        destination: "https://insprit.us/:path*",
        permanent: true,
      },
      {
        source: "/inspritus",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signin",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/signup",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
