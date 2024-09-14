import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

 
const nextConfig = {
  reactStrictMode: true,
  
  webpack(config, { dev, isServer }) {
    // Use 'eval-source-map' for development to ensure performance
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';
    }

    // Ensure the config has optimization and minimizer settings
    if (isServer && config.optimization && Array.isArray(config.optimization.minimizer)) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer && minimizer.options) {
          minimizer.options.parallel = 2;
        }
      });
    }

    return config;
  },
  swcMinify: true,  
  productionBrowserSourceMaps: true, // Disable source maps in development
  optimizeFonts: true, // Disable font optimization 
  images: {
     
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: '**', // Allow all hostnames
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all hostnames
      }, 
 
  ],
  },
};

export default bundleAnalyzer(nextConfig);
