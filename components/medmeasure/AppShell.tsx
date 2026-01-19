"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PencilRuler, LogOut } from "lucide-react";
import MobileBottomNav from "./MobileBottomNav";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Show mobile nav on authenticated pages; hide on login or undefined path
  const showBottomNav = pathname ? !pathname.startsWith("/login") : false;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* App Header */}
      <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
              <PencilRuler className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">MedMeasure</p>
              <p className="text-[11px] text-muted-foreground">
                Clinical MVP UI
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Container */}
      <main className="mx-auto w-full max-w-6xl px-4 py-6 pb-24">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      {showBottomNav ? <MobileBottomNav /> : null}
    </div>
  );
}
