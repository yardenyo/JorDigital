import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/User";
import db from "@utils/db";
import { isPasswordValid } from "@utils/hash";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        await db.connect();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          await db.disconnect();
          throw new Error("No user found");
        }

        const isValid = await isPasswordValid(
          credentials.password,
          user.password
        );

        if (!isValid) {
          await db.disconnect();
          throw new Error("Password is not valid");
        }

        await db.disconnect();

        return { email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ session, token, user }) {
      console.log("jwt callback", { session, token, user });
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback", { session, token, user });
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
