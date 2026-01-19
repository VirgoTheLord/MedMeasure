import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Camera,
  Calendar,
  TrendingDown,
  TrendingUp,
  Activity,
  ImageIcon,
} from "lucide-react";

import { mockPatientObservations } from "@/lib/mockPatientData";
import { Metric } from "@/components/open/Metric";
import { ObservationRow } from "@/components/open/ObservationRow";
import { SummaryCard } from "@/components/open/SummaryCard";

export default function PatientProjectPage({
  params,
}: {
  params: { patientId: string };
}) {
  const patientId = decodeURIComponent(params.patientId);

  const record = mockPatientObservations.find((p) => p.patientId === patientId);

  if (!record) return notFound();

  const observations = record.observations;
  const first = observations[0];
  const latest = observations[observations.length - 1];
  const previous =
    observations.length >= 2 ? observations[observations.length - 2] : null;

  const deltaArea = latest.areaCm2 - first.areaCm2;
  const percentChange = (deltaArea / first.areaCm2) * 100;

  const absChange = Math.abs(deltaArea);
  const improving = deltaArea < 0;

  // Rough healing rate: (first - latest) / (n-1) observations
  const healingRate =
    observations.length > 1
      ? (first.areaCm2 - latest.areaCm2) / (observations.length - 1)
      : 0;

  return (
    <div className="space-y-6">
      {/* Back */}
      <div className="flex items-center justify-between gap-3">
        <Link href="/open">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>

        <Link href="/new">
          <Button className="gap-2">
            <Camera className="h-4 w-4" />
            Add New Observation
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-2">
        <Badge variant="secondary">Patient Record</Badge>
        <h1 className="text-2xl font-semibold tracking-tight">
          Patient {record.patientId}
        </h1>
        <p className="text-sm text-muted-foreground">
          Wound ID:{" "}
          <span className="font-medium text-foreground">{record.woundId}</span>
        </p>
      </section>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          icon={<Calendar className="h-4 w-4" />}
          label="First Capture"
          value={first.capturedAt}
        />
        <SummaryCard
          icon={<Calendar className="h-4 w-4" />}
          label="Last Capture"
          value={record.lastCapture}
        />
        <SummaryCard
          icon={<Activity className="h-4 w-4" />}
          label="Observations"
          value={`${observations.length}`}
        />
        <SummaryCard
          icon={
            improving ? (
              <TrendingDown className="h-4 w-4" />
            ) : (
              <TrendingUp className="h-4 w-4" />
            )
          }
          label="Area change"
          value={`${percentChange.toFixed(1)}%`}
          subValue={`${deltaArea.toFixed(2)} cm²`}
          highlight={improving ? "good" : "bad"}
        />
      </div>

      {/* Latest + Previous images area */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Latest Observation</h2>
          <Badge variant="outline">{latest.capturedAt}</Badge>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Latest */}
          <Card className="overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Latest Image</p>
                <Badge>Latest</Badge>
              </div>

              <div className="grid h-56 place-items-center rounded-xl border bg-muted/30 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Corrected wound image (placeholder)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Metric
                  label="Area"
                  value={`${latest.areaCm2.toFixed(2)} cm²`}
                />
                <Metric
                  label="Perimeter"
                  value={`${latest.perimeterCm.toFixed(2)} cm`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Previous */}
          <Card className="overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Previous Image</p>
                <Badge variant="secondary">
                  {previous ? previous.capturedAt : "N/A"}
                </Badge>
              </div>

              <div className="grid h-56 place-items-center rounded-xl border bg-muted/30 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Previous wound image (placeholder)
                </div>
              </div>

              {previous ? (
                <div className="grid grid-cols-2 gap-3">
                  <Metric
                    label="Area"
                    value={`${previous.areaCm2.toFixed(2)} cm²`}
                  />
                  <Metric
                    label="Perimeter"
                    value={`${previous.perimeterCm.toFixed(2)} cm`}
                  />
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">
                  No previous observation available.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Healing Summary */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5 space-y-2">
            <p className="text-sm font-semibold">Progression Summary</p>
            <p className="text-sm text-muted-foreground leading-6">
              {improving ? (
                <>
                  Area reduced by{" "}
                  <span className="font-semibold text-foreground">
                    {absChange.toFixed(2)} cm²
                  </span>{" "}
                  since first capture.
                </>
              ) : (
                <>
                  Area increased by{" "}
                  <span className="font-semibold text-foreground">
                    {absChange.toFixed(2)} cm²
                  </span>{" "}
                  since first capture.
                </>
              )}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Metric
                label="First Area"
                value={`${first.areaCm2.toFixed(2)} cm²`}
              />
              <Metric
                label="Latest Area"
                value={`${latest.areaCm2.toFixed(2)} cm²`}
              />
              <Metric
                label="Healing rate"
                value={`${healingRate.toFixed(2)} cm² / obs`}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-3">
            <p className="text-sm font-semibold">Quick Actions</p>

            <Link href="/new">
              <Button className="w-full gap-2">
                <Camera className="h-4 w-4" />
                Capture New Observation
              </Button>
            </Link>

            <Link href="/open">
              <Button variant="outline" className="w-full">
                Search Another Patient
              </Button>
            </Link>

            <p className="text-xs text-muted-foreground">
              In MVP, images and calculations are placeholders until backend
              integration.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Observation Timeline */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Observation Timeline</h2>
          <Badge variant="outline">Chronological</Badge>
        </div>

        <div className="grid gap-3">
          {observations.map((obs, idx) => (
            <ObservationRow
              key={obs.id}
              obs={obs}
              isLatest={idx === observations.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
