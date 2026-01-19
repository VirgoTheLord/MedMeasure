"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { mockPatientObservations } from "@/lib/mockPatientData";
import { Calendar, FolderOpen, ArrowRight, Search } from "lucide-react";

export default function OpenProjectPage() {
  const [patientId, setPatientId] = useState("");

  const results = useMemo(() => {
    const id = patientId.trim().toUpperCase();
    if (!id) return [];
    return mockPatientObservations.filter((p) => p.patientId.includes(id));
  }, [patientId]);

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary">Open Existing</Badge>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Search patient record
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter Patient ID to view all observations and progression.
          </p>
        </div>

        <Link href="/new" className="w-full sm:w-auto">
          <Button className="w-full gap-2 sm:w-auto">
            <FolderOpen className="h-4 w-4" />
            New Observation
          </Button>
        </Link>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Find patient</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row">
          <Input
            placeholder="Example: PT-1024"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <Button className="gap-2 sm:w-40">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </CardContent>
      </Card>

      <Separator />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Results</h2>
          <Badge variant="outline">{results.length}</Badge>
        </div>

        {results.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-sm font-medium">No results</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try searching with: PT-1024
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <Card key={p.patientId} className="overflow-hidden">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">
                        Patient {p.patientId}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Wound ID: {p.woundId}
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {p.observations.length} obs
                    </Badge>
                  </div>

                  <div className="grid h-28 place-items-center rounded-2xl border bg-muted/30 text-xs text-muted-foreground">
                    Latest thumbnail
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Last Capture
                      </span>
                      <span className="font-medium text-foreground">
                        {p.lastCapture}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
                      <span>Latest Area</span>
                      <span className="font-medium text-foreground">
                        {p.latestAreaCm2} cm²
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/project/${p.patientId}`}
                    className="inline-flex w-full"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      Open Summary <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
