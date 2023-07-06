import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
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
    signIn: "/signin",
    signOut:"/signout",
    error:"/"
  }

})

export { handler as GET, handler as POST };
