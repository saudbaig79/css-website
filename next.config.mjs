/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/services/marketing-investment', destination: '/services/marketing', permanent: true }]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
