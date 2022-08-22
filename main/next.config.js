const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/color/:hex',
        destination: 'http://localhost:2000/color/:hex'
      }
    ];
  }
};

module.exports = nextConfig;
