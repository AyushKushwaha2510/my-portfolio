import { loginUser } from "@/app/features/auth/services/auth.service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        return await loginUser(
          credentials.email as string,
          credentials.password as string,
        );
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
});
