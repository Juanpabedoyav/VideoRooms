"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GithubIcon, GoogleIcon, SpinnerIcon } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const email = formData.get("email")
    const password = formData.get("password")
    console.log({ password, email })
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
     
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
             <Label className="sr-only" htmlFor="password">
             Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              name="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
                 <Input
              id="validate-password"
              placeholder="Validate Password"
              type="validate-password"
              name="validate-password"
              autoCapitalize="none"
              autoComplete="validate-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin">
                <SpinnerIcon />
              </span>
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button  variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin">
            <SpinnerIcon />
          </span>
         ) : ( 
          <span className="mr-2 h-4 w-4">

          <GithubIcon />
          </span>
         )}{" "}
        Github
      </Button>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin">
          <SpinnerIcon />
          </span>
        ) : (
          <span className="mr-2 h-4 w-4">
          <GoogleIcon />
          </span>
        )}{" "}
        Google
      </Button>
    </div>
  )
}