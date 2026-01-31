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
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { MiniPill } from "@/components/landing/MiniPill";
import { Step } from "@/components/landing/Step";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { Stat } from "@/components/landing/Stat";
import { NavBar } from "@/components/landing/NavBar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background bg-[url('/bg.jpg')] bg-fixed bg-no-repeat bg-top text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-background/70" />
      <div className="relative z-10">
        <section className="relative overflow-hidden">
          <NavBar />
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <Badge variant="secondary" className="mb-4 font-space-grotesk">
                Advanced Wound Analysis Platform
              </Badge>

              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl font-space-grotesk">
                Wound imaging, tracing & progression tracking —
                <span className="text-muted-foreground"> simplified.</span>
              </h1>

              <p className="mt-4 text-pretty text-sm leading-6 text-muted-foreground sm:text-base font-space-grotesk">
                MedMeasure helps clinicians capture wound images, detect a
                reference scale (ArUco), correct perspective, outline
                boundaries, and track healing progress over time across
                observations.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full gap-2 sm:w-auto font-space-grotesk">
                    Open App <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#how-it-works" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-space-grotesk"
                  >
                    How it works
                  </Button>
                </a>
              </div>

              <div className="mt-6 text-xs text-muted-foreground font-space-grotesk">
                Mobile-first • Works on Android + iOS • Clinical Grade Interface
              </div>
            </div>

            {/* Hero Preview Card */}
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 font-space-grotesk">
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
        <section className="border-y bg-[#5e936c]/10 backdrop-blur-sm font-space-grotesk">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4">
            <Stat label="Mobile-first UI" value="360px+" />
            <Stat label="Core flows" value="New / Open" />
            <Stat label="Measurements" value="Area + Perimeter" />
            <Stat label="Cross-device ready" value="DB-backed" />
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20 font-space-grotesk">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" >Features</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Comprehensive Clinical Toolkit.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Designed for clinical capture workflows with clean UX, fast steps,
              and clear measurement output.
            </p>
          </div>

          <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-3">
            {/* Top Row: 3 Small Boxes */}
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Clinical-ready design"
              description="Minimal UI, clear typography, and low-error workflow structure."
              className="md:col-span-1"
            />
            <FeatureCard
              icon={<Camera className="h-6 w-6" />}
              title="Capture workflow"
              description="Camera-first UI with marker detection alerts and smooth capture steps."
              className="md:col-span-1"
            />
            <FeatureCard
              icon={<PencilRuler className="h-6 w-6" />}
              title="Boundary editing"
              description="Freehand outline tools, pan/zoom layout, and measurement overlays."
              className="md:col-span-1"
            />

            {/* Bottom Row: 1 Small Left, 1 Wide Right */}
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Progression tracking"
              description="Compare latest vs previous images and show healing trend summaries."
              className="md:col-span-1"
            />
            <FeatureCard
              icon={<Database className="h-6 w-6" />}
              title="Project-based records"
              description="Patient → Wound → Observations structure, ready for DB sync."
              className="md:col-span-2"
            />
          </div>
        </section>

        <Separator />

        {/* How it works */}
        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-20 font-space-grotesk"
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
        <section className="border-t bg-[#5e936c] font-space-grotesk">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:py-16 lg:flex-row lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight sm:text-3xl text-[#e6f7df]">
                Ready to Transform Wound Care?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-primary-foreground/70">
                Designed for seamless integration into clinical workflows. Reliable 
                detection, precise correction, and accurate measurements.
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
        {/* Footer */}
        <footer className="relative overflow-hidden bg-primary text-primary-foreground font-space-grotesk">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:py-24">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
                    <PencilRuler className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">
                    MedMeasure
                  </span>
                </div>
                <p className="max-w-xs text-sm text-primary-foreground/70">
                  Clinical grade wound measurement and tracking platform for modern
                  healthcare providers.
                </p>
                <div className="flex items-center gap-4 text-primary-foreground/70">
                  <Github className="h-5 w-5 cursor-pointer hover:text-primary-foreground transition-colors" />
                  <Twitter className="h-5 w-5 cursor-pointer hover:text-primary-foreground transition-colors" />
                  <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                  Product
                </h4>
                <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
                  <a href="#" className="hover:text-primary-foreground transition-colors">Features</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Integrations</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Changelog</a>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                  Company
                </h4>
                <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
                  <a href="#" className="hover:text-primary-foreground transition-colors">About Us</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Careers</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Blog</a>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                  Legal
                </h4>
                <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
                  <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-primary-foreground transition-colors">GDPR</a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
              <p>© {new Date().getFullYear()} MedMeasure. All rights reserved.</p>
              <p>Made with NextJS.</p>
            </div>
          </div>

          {/* Large Gradient Text Effect */}
          <div className="pointer-events-none absolute -bottom-3 lg:-bottom-20 left-1/2 w-[90%] -translate-x-1/2 select-none text-center">
            <h1 className="text-[4rem] font-bold leading-none tracking-tighter text-transparent opacity-10 bg-gradient-to-b from-primary-foreground to-transparent bg-clip-text sm:text-[10rem] lg:text-[14rem]">
              MedMeasure
            </h1>
          </div>
        </footer>
      </div>
    </main>
  );
}
