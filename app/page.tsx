import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  PencilRuler,
  LineChart,
  ShieldCheck,
  Smartphone,
  Database,
} from "lucide-react";
import { MiniPill } from "@/components/MiniPill";
import { Step } from "@/components/Step";
import { FeatureCard } from "@/components/FeatureCard";
import { Stat } from "@/components/Stat";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
              <PencilRuler className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Badge variant="secondary" className="mb-4">
              MVP-ready wound measurement UI
            </Badge>

            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Wound imaging, tracing & progression tracking —
              <span className="text-muted-foreground"> simplified.</span>
            </h1>

            <p className="mt-4 text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
              MedMeasure helps clinicians capture wound images, detect a reference
              scale (ArUco), correct perspective, outline boundaries, and track
              healing progress over time across observations.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  Open App <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  How it works
                </Button>
              </a>
            </div>

            <div className="mt-6 text-xs text-muted-foreground">
              Mobile-first • Works on Android + iOS • Frontend MVP
            </div>
          </div>

          {/* Hero Preview Card */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">New Observation</p>
                    <p className="text-xs text-muted-foreground">
                      Patient ID → Capture → Edit boundary → Save
                    </p>
                  </div>
                  <Badge>Camera</Badge>
                </div>

                <div className="mt-4 grid h-40 place-items-center rounded-xl border bg-muted/40">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Camera className="h-4 w-4" />
                    Camera preview placeholder
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border p-3">
                    <p className="text-xs text-muted-foreground">Area</p>
                    <p className="mt-1 font-semibold">12.84 cm²</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <p className="text-xs text-muted-foreground">Perimeter</p>
                    <p className="mt-1 font-semibold">18.21 cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">Progress Summary</p>
                    <p className="text-xs text-muted-foreground">
                      Track healing across multiple captures
                    </p>
                  </div>
                  <Badge variant="secondary">Analytics</Badge>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border p-3">
                    <p className="text-xs text-muted-foreground">
                      % change since first capture
                    </p>
                    <p className="mt-1 text-lg font-semibold">-22.6%</p>
                  </div>
                  <div className="rounded-xl border p-3">
                    <p className="text-xs text-muted-foreground">
                      Healing rate (cm²/day)
                    </p>
                    <p className="mt-1 text-lg font-semibold">0.31</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border bg-muted/30 p-3 text-xs text-muted-foreground">
                  <span>Last capture</span>
                  <span className="font-medium text-foreground">
                    Jan 19, 2026 • 04:12 PM
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted / Stats strip */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4">
          <Stat label="Mobile-first UI" value="360px+" />
          <Stat label="Core flows" value="New / Open" />
          <Stat label="Measurements" value="Area + Perimeter" />
          <Stat label="Cross-device ready" value="DB-backed" />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary">Features</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything needed for the MVP.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Designed for clinical capture workflows with clean UX, fast steps,
            and clear measurement output.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Camera className="h-5 w-5" />}
            title="Capture workflow"
            description="Camera-first UI with marker detection alerts and smooth capture steps."
          />
          <FeatureCard
            icon={<PencilRuler className="h-5 w-5" />}
            title="Boundary editing"
            description="Freehand outline tools, pan/zoom layout, and measurement overlays."
          />
          <FeatureCard
            icon={<LineChart className="h-5 w-5" />}
            title="Progression tracking"
            description="Compare latest vs previous images and show healing trend summaries."
          />
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Project-based records"
            description="Patient → Wound → Observations structure, ready for DB sync."
          />
          <FeatureCard
            icon={<Smartphone className="h-5 w-5" />}
            title="Responsive by default"
            description="Optimized for phones, then scales cleanly to tablets & desktop."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Clinical-ready design"
            description="Minimal UI, clear typography, and low-error workflow structure."
          />
        </div>
      </section>

      <Separator />

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="secondary">How it works</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Capture → correct → outline → measure → track.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              The UI is structured like a clinician workflow: minimal steps,
              maximum clarity. Editing tools are presented in a focused canvas
              layout with live measurement feedback.
            </p>

            <div className="mt-6 grid gap-3">
              <Step
                index="01"
                title="Enter patient details"
                desc="Patient ID, optional metadata and wound notes."
              />
              <Step
                index="02"
                title="Camera capture + ArUco detection"
                desc="Detect reference marker, show alerts, then capture image."
              />
              <Step
                index="03"
                title="Border editing + measurements"
                desc="Draw outline, zoom/pan, undo/redo, show area & perimeter."
              />
              <Step
                index="04"
                title="Summary & save"
                desc="Store observation and show change-over-time in the project view."
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Try demo app <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  View dashboard UI
                </Button>
              </Link>
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Editing Workspace</p>
                <Badge>Preview</Badge>
              </div>

              <div className="mt-4 grid h-64 place-items-center rounded-xl border bg-muted/40">
                <div className="text-center">
                  <p className="text-sm font-medium">Canvas placeholder</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Freehand draw • Zoom • Pan • Undo/Redo
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <MiniPill label="Area" value="12.84" unit="cm²" />
                <MiniPill label="Perimeter" value="18.21" unit="cm" />
                <MiniPill label="Marker" value="Detected" unit="" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:py-16 lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Ready to build the MedMeasure MVP frontend?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              This UI is structured for rapid development. Plug in your backend
              modules (ArUco detection, correction, measurements) anytime.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Open App <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Learn more
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
              <PencilRuler className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">MedMeasure</p>
              <p className="text-xs text-muted-foreground">
                Wound measurement MVP UI
              </p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MedMeasure. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}







