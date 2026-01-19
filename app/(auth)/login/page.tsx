"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { PencilRuler, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@medmeasure.app");
  const [password, setPassword] = useState("demo123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login → just redirect
    router.push("/app/dashboard");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
              <PencilRuler className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              MedMeasure
            </span>
          </Link>

          <Badge variant="secondary" className="hidden sm:inline-flex">
            Dummy Auth (MVP)
          </Badge>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto flex min-h-[calc(100vh-56px)] max-w-6xl items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <Card className="overflow-hidden">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl">Login</CardTitle>
              <p className="text-sm text-muted-foreground">
                Use demo credentials to access the MVP UI.
              </p>
            </CardHeader>

            <CardContent className="space-y-5">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@hospital.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  Login <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <div className="rounded-2xl border bg-muted/30 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">Demo login</p>
                    <p className="text-xs text-muted-foreground">
                      Quick access for review & testing.
                    </p>
                  </div>
                  <Badge variant="secondary">Demo</Badge>
                </div>

                <div className="mt-3 grid gap-2 text-sm">
                  <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{email}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
                    <span className="text-muted-foreground">Password</span>
                    <span className="font-medium">{password}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-4 w-full"
                  onClick={() => router.push("/dashboard")}
                >
                  Continue as Demo
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                By continuing, you agree to MVP testing usage only.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
