/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果您的GitHub Pages仓库不是在根域名下，请取消注释并修改下面的配置
  // basePath: '/linzai_officialweb',
  // assetPrefix: '/linzai_officialweb/',
};

module.exports = nextConfig; 