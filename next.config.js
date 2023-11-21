/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    CV_URL: process.env.CV_URL,
    POSITION: process.env.POSITION,
  },
};

module.exports = nextConfig;
