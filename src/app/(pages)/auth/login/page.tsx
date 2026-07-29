import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LoginForm } from "@/app/features/auth/components/login-form";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <LoginForm />
    </main>
  );
}