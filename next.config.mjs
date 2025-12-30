/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  experimental: {
  },
  allowedDevOrigins: ["192.168.1.51", "0.0.0.0", "localhost"],
}

export default nextConfig
