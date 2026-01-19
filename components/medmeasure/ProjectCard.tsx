import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { ProjectSummary } from "@/lib/types";

export default function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Patient {project.patientId}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Wound ID: {project.woundId}
            </p>
          </div>

          <Badge variant="secondary">{project.observations} obs</Badge>
        </div>

        <div className="mt-4 grid h-28 place-items-center rounded-xl border bg-muted/30 text-xs text-muted-foreground">
          Latest image thumbnail
        </div>

        <div className="mt-4 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Latest Area
            </span>
            <span className="font-medium text-foreground">
              {project.latestAreaCm2} cm²
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border bg-background px-3 py-2">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last Capture
            </span>
            <span className="font-medium text-foreground">
              {project.lastCapture}
            </span>
          </div>
        </div>

        <Link
          href={`/app/project/${project.patientId}`}
          className="mt-4 inline-flex w-full"
        >
          <div className="flex w-full items-center justify-center gap-2 rounded-xl border bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted/40">
            Open Project <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
