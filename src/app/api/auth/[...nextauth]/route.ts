import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth"

// Your full auth configuration belongs here
const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // Add providers here, e.g., Google, Email
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // This is a placeholder. Replace with your actual admin role logic.
        // For example, check if user.email is in a list of admin emails.
        const isAdmin = user.email === "admin@example.com";
        token.role = isAdmin ? "admin" : "user";
      }
      return token;
    },
    async session({ session, token }) {
      // Add the role to the session object
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  // If you want to require authentication for all pages, you can add this.
  // pages: {
  //   signIn: '/login',
  // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
