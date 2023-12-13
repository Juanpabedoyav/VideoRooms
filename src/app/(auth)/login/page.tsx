import { Metadata } from "next"
import React from 'react'
import { UserLoginForm } from "./user-login-form"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"


export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
}
export default function LoginPage() {
  return (
    <>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8 z-10"
          )}
        >
          Back to create an account
        </Link>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to Login your account
              </p>
            </div>
            <UserLoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
