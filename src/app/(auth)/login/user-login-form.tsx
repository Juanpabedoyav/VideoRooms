"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { GithubIcon, GoogleIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface UserLoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({className, ...props}: UserLoginFormProps) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login account</CardTitle>
        <CardDescription>
          Enter your email to Login your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <span className="mr-2 h-4 w-4">
                <GithubIcon />
            </span>
            Github
          </Button>
          <Button variant="outline">
            <span className="mr-2 h-4 w-4">
                <GoogleIcon />
            </span>
            Google
          </Button>
        </div>
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
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Login account</Button>
      </CardFooter>
    </Card>
    </div>
  )
}