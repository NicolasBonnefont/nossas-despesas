import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GoogleClientID!,
      clientSecret: process.env.GoogleClientSecret!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

