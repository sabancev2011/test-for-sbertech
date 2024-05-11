/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
          },
        ],
      },
      
      async rewrites() {
        return [
            {
                source: '/user',
                destination: '/'
            }
        ];
    }
};

export default nextConfig;
