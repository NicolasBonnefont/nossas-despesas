const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['http://localhost:3000/','lh3.googleusercontent.com']
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    URL:process.env.URL
},

}

module.exports = nextConfig
