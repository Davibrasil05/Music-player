/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lastfm.freetls.fastly.net",
      "encrypted-tbn0.gstatic.com",
      "placehold.co", // ADICIONADO
    ],
  },
};

module.exports = nextConfig;
