import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // TODO: Add backend integration for email/password auth.
        // For now, this is a placeholder.
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Test User", email: "test@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }