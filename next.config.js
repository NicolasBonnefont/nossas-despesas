const nextConfig = {
  experimental: {    
  },
  images: {
    domains: ['http://localhost:3000/','lh3.googleusercontent.com']
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    URL:process.env.URL,
    GoogleClientID:process.env.GoogleClientID,
    GoogleClientSecret:process.env.GoogleClientSecret,
    StripeSecret:process.env.StripeSecret,
    StripeEndPointSecret:process.env.StripeEndPointSecret
},

}

module.exports = nextConfig
