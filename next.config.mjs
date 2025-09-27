/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      // se usar outros domínios de imagem, adicione aqui
      // { protocol: 'https', hostname: 'i.imgur.com' },
    ],
  },
};
export default nextConfig;
