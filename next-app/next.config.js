/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { hostname: 'otewigpahpvetcqjdykt.supabase.co', protocol: 'https' },
    ],
  },
};

module.exports = nextConfig;
