/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lastfm.freetls.fastly.net",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;

