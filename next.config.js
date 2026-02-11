/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  webpack(config, { isServer }) {
    if(!isServer) {
      config.resolve.fallback = { 
        net: false,
        tls: false,
        fs: false
      };
    }
    
    return config
  }
}
