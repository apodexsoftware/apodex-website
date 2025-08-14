/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necesario para export estático
  },
};

export default nextConfig;
