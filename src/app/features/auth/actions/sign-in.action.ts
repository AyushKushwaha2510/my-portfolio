"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "../schemas/login.schema";

interface SignInInput {
  email: string;
  password: string;
}

export async function signInAction({ email, password }: SignInInput) {
  const validated = LoginSchema.safeParse({
    email,
    password,
  });

  if (!validated.success) {
    return {
      success: false,
      message: validated.error.issues[0].message,
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/admin",
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            message: "Invalid email or password",
          };

        default:
          return {
            success: false,
            message: "Authentication failed",
          };
      }
    }

    throw error;
  }
}
