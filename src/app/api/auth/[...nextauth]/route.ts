import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "853148335914-eqe8jsarp08bvvmvd4nl023k9r54ae4p.apps.googleusercontent.com",
      clientSecret: "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",
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
    signIn: "/login",
    signOut: "/",
    error: "/"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

