/** @type {import('next').NextConfig} */
const nextConfig = {
    // Thêm cấu hình này nếu bạn cần biến môi trường client-side
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    },
  };
  
  // Thay thế 'module.exports = nextConfig;' bằng 'export default nextConfig;'
  export default nextConfig;