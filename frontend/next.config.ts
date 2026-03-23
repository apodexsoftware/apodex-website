// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    // Aumentar timeout para imágenes grandes
    minimumCacheTTL: 60,
    // Deshabilitar optimización para imágenes de Sanity si persisten los problemas
    // unoptimized: true, // Descomenta esto si sigue fallando
  },
}

module.exports = nextConfig