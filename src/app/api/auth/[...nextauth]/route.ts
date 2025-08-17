import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from "@/app/auth/actions/auth-actions";


export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@email.com" },
        password: { label: "Password", type: "password"}
      },
      async authorize(credentials) {

        const { password, email } = credentials!;
        const user = await signInEmailPassword(email, password)
        
        return user ?? null; 
      }
    })
    
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({user, account, profile, email, credentials}){
      return true;
    },
    async jwt({ user, token, account, profile}){
      const dbUser = await prisma.user.findUnique({ where: {
        email: token.email ?? 'no-email',
      }});
      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? 'no-id';
      console.log({token})
      return token;
    },
    async session({ session, token, user }) {
      if(session && session.user){
        session.user.roles = token.roles;
        session.user.id = token.id;
      }
      return session;
    }
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };