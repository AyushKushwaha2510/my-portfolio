"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema, LoginSchemaType } from "../schemas/login.schema";
import { signInAction } from "../actions/sign-in.action";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchemaType) {
    startTransition(async () => {
      const result = await signInAction(values);

      if (!result.success) {
        // toast.error(result.message)
        console.log(result.message);
      }
    });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>
          Sign in to access your portfolio dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel>Email</FieldLabel>

              <FieldContent>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />

                <FieldDescription>
                  Enter your registered email.
                </FieldDescription>

                <FieldError>
                  {errors.email?.message}
                </FieldError>
              </FieldContent>
            </Field>

            <Field data-invalid={!!errors.password}>
              <FieldLabel>Password</FieldLabel>

              <FieldContent>
                <Input
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />

                <FieldError>
                  {errors.password?.message}
                </FieldError>
              </FieldContent>
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}