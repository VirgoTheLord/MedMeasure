import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, PencilRuler } from "lucide-react";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
            <PencilRuler className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight font-space-grotesk">
            MedMeasure
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button className="gap-2">
              Open App <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
