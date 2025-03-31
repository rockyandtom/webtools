/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // 如果你需要添加环境变量，可以在这里添加
  env: {
    SITE_NAME: '出海资料库',
  },
};

module.exports = nextConfig; 