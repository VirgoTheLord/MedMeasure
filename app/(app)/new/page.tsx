"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  PencilRuler,
  RotateCcw,
  Undo2,
  Redo2,
  Move,
  ZoomIn,
  Save,
} from "lucide-react";
import { Row } from "@/components/new/Row";
import { MeasurementPill } from "@/components/new/MeasurementPill";
import { ToolBtn } from "@/components/new/ToolBtn";
import { Hint } from "@/components/new/Hint";
import { Success } from "@/components/new/Success";
import { Error } from "@/components/new/Error";
import { Stepper } from "@/components/new/Stepper";

type StepId = 1 | 2 | 3 | 4;

function generateWoundId() {
  return `WD-${Math.floor(1000 + Math.random() * 9000)}`;
}

export default function NewProjectPage() {
  const router = useRouter();

  const [step, setStep] = useState<StepId>(1);

  const [patientId, setPatientId] = useState("");
  const [woundId, setWoundId] = useState(generateWoundId());
  const [notes, setNotes] = useState("");

  const [markerDetected, setMarkerDetected] = useState<boolean | null>(null);
  const [captured, setCaptured] = useState(false);

  const [areaCm2, setAreaCm2] = useState(12.84);
  const [perimeterCm, setPerimeterCm] = useState(18.21);

  const canNext = useMemo(() => {
    if (step === 1) return patientId.trim().length > 0;
    if (step === 2) return captured === true;
    if (step === 3) return true;
    return true;
  }, [step, patientId, captured]);

  const next = () => setStep((s) => Math.min(4, s + 1) as StepId);
  const prev = () => setStep((s) => Math.max(1, s - 1) as StepId);

  const saveProject = () => {
    // MVP dummy save: route to project page
    router.push(`/project/${encodeURIComponent(patientId || "PT-0000")}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">New Project</Badge>
            <Badge variant="outline">Wizard</Badge>
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Create new wound observation
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter details → capture image → edit boundary → save summary.
          </p>
        </div>

        <Link href="/dashboard" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full gap-2 sm:w-auto">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </section>

      {/* Stepper */}
      <Stepper step={step} />

      {/* Step content */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Step 1 — Patient details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patientId">Patient ID *</Label>
                <Input
                  id="patientId"
                  placeholder="PT-1024"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Required. Used to group observations.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="woundId">Wound ID</Label>
                <Input
                  id="woundId"
                  placeholder="WD-0001"
                  value={woundId}
                  onChange={(e) => setWoundId(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Auto-generated; can be edited.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Input
                id="notes"
                placeholder="Operator notes, wound location, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Step 2 — Camera capture (MVP mock)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
              {/* Camera box */}
              <div className="rounded-2xl border bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">Camera preview</p>
                    <p className="text-xs text-muted-foreground">
                      Detect ArUco marker before capture.
                    </p>
                  </div>
                  <Badge variant="secondary" className="gap-1">
                    <Camera className="h-3.5 w-3.5" />
                    Camera
                  </Badge>
                </div>

                <div className="mt-4 grid h-72 place-items-center rounded-2xl border bg-background">
                  <div className="text-center">
                    <PencilRuler className="mx-auto h-7 w-7 text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium">
                      Camera Preview Placeholder
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      (You’ll integrate camera + marker logic later)
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Button
                    variant="outline"
                    className="w-full gap-2 sm:w-auto"
                    onClick={() => setMarkerDetected(Math.random() > 0.35)}
                  >
                    <PencilRuler className="h-4 w-4" />
                    Detect ArUco Marker
                  </Button>

                  <Button
                    className="w-full gap-2 sm:w-auto"
                    onClick={() => setCaptured(true)}
                    disabled={markerDetected !== true}
                  >
                    <Camera className="h-4 w-4" />
                    Capture Image
                  </Button>
                </div>

                {/* Status */}
                <div className="mt-3">
                  {markerDetected === null ? (
                    <Hint text="Run detection to confirm marker presence." />
                  ) : markerDetected === true ? (
                    <Success text="Marker detected. Ready to capture." />
                  ) : (
                    <Error text="Marker not detected. Adjust camera and retry." />
                  )}
                </div>
              </div>

              {/* Info panel */}
              <div className="space-y-3">
                <Card className="overflow-hidden">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Capture details</p>
                    <div className="mt-3 space-y-2 text-sm">
                      <Row label="Patient ID" value={patientId || "—"} />
                      <Row label="Wound ID" value={woundId || "—"} />
                      <Row
                        label="Scale reference"
                        value={
                          markerDetected === true
                            ? "Detected"
                            : markerDetected === false
                            ? "Not detected"
                            : "Pending"
                        }
                      />
                      <Row
                        label="Capture status"
                        value={captured ? "Captured" : "Not captured"}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Next</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      After capture, you’ll correct perspective and outline the
                      wound boundary.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Step 3 — Boundary editing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
              {/* Canvas area */}
              <div className="rounded-2xl border bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">Editing workspace</p>
                    <p className="text-xs text-muted-foreground">
                      Mock UI (integrate drawing tool later).
                    </p>
                  </div>
                  <Badge variant="secondary">Editor</Badge>
                </div>

                {/* Toolbar */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToolBtn icon={<PencilRuler className="h-4 w-4" />} label="Draw" />
                  <ToolBtn icon={<Move className="h-4 w-4" />} label="Pan" />
                  <ToolBtn icon={<ZoomIn className="h-4 w-4" />} label="Zoom" />
                  <ToolBtn icon={<RotateCcw className="h-4 w-4" />} label="Reset" />
                  <ToolBtn icon={<Undo2 className="h-4 w-4" />} label="Undo" />
                  <ToolBtn icon={<Redo2 className="h-4 w-4" />} label="Redo" />
                </div>

                {/* Canvas placeholder */}
                <div className="mt-4 grid h-[380px] place-items-center rounded-2xl border bg-background">
                  <div className="text-center">
                    <p className="text-sm font-medium">Canvas placeholder</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Freehand draw • pinch zoom • pan • undo/redo
                    </p>
                  </div>
                </div>

                {/* Mobile action area */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MeasurementPill label="Area" value={`${areaCm2.toFixed(2)} cm²`} />
                  <MeasurementPill
                    label="Perimeter"
                    value={`${perimeterCm.toFixed(2)} cm`}
                  />
                </div>
              </div>

              {/* Side panel */}
              <div className="space-y-3">
                <Card>
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Live measurements</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Update these values when your actual tool calculates them.
                    </p>

                    <div className="mt-4 grid gap-3">
                      <div className="space-y-2">
                        <Label>Area (cm²)</Label>
                        <Input
                          value={areaCm2}
                          onChange={(e) => setAreaCm2(Number(e.target.value || 0))}
                          inputMode="decimal"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Perimeter (cm)</Label>
                        <Input
                          value={perimeterCm}
                          onChange={(e) =>
                            setPerimeterCm(Number(e.target.value || 0))
                          }
                          inputMode="decimal"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Tips</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                      <li>Keep boundary snug to the wound edge.</li>
                      <li>Use zoom for precision.</li>
                      <li>Undo/redo prevents mistakes.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Step 4 — Summary & save</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">Corrected image</p>
                        <p className="text-xs text-muted-foreground">
                          Placeholder preview
                        </p>
                      </div>
                      <Badge variant="secondary">Preview</Badge>
                    </div>

                    <div className="mt-4 grid h-72 place-items-center rounded-2xl border bg-muted/30">
                      <div className="text-center text-xs text-muted-foreground">
                        Corrected image preview placeholder
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <MeasurementPill
                        label="Area"
                        value={`${areaCm2.toFixed(2)} cm²`}
                      />
                      <MeasurementPill
                        label="Perimeter"
                        value={`${perimeterCm.toFixed(2)} cm`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <Card>
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Observation metadata</p>
                    <div className="mt-3 space-y-2 text-sm">
                      <Row label="Patient ID" value={patientId || "—"} />
                      <Row label="Wound ID" value={woundId || "—"} />
                      <Row label="Captured" value={captured ? "Yes" : "No"} />
                      <Row label="Marker" value={markerDetected ? "Yes" : "No"} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold">Save</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      This will create/append the observation in DB later.
                    </p>

                    <Button className="mt-4 w-full gap-2" onClick={saveProject}>
                      <Save className="h-4 w-4" />
                      Save Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Separator />

      {/* Footer actions */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" className="gap-2" onClick={prev} disabled={step === 1}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        <div className="flex items-center gap-2">
          <Badge variant="outline">Step {step}/4</Badge>
          <Button className="gap-2" onClick={next} disabled={!canNext || step === 4}>
            Next <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}











