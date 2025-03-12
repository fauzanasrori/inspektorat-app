/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/9.x/notionists/svg/**",
      },
    ],
    dangerouslyAllowSVG: true, // Mengizinkan pemuatan SVG
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;", // Tambahan keamanan
  },
};

export default nextConfig;
