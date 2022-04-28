/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    cdnRaw: 'https://www.gitlab.com/abehidek/posts/-/raw/main',
    cdnRefs:
      'https://www.gitlab.com/abehidek/posts/-/refs/main/logs_tree/?format=json&offset=0',
  },
  images: {
    domains: ['www.gitlab.com'],
  },
};

module.exports = nextConfig;
