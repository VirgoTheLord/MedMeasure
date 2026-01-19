import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/medmeasure/ProjectCard";
import { mockProjects } from "@/lib/mockData";
import { ArrowRight, PlusCircle, FolderOpen, Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top intro */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary">Dashboard</Badge>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Welcome to MedMeasure
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Start a new observation or open an existing patient record.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/new">
            <Button className="w-full gap-2 sm:w-auto">
              <PlusCircle className="h-4 w-4" />
              New Project
            </Button>
          </Link>
          <Link href="/open">
            <Button variant="outline" className="w-full gap-2 sm:w-auto">
              <FolderOpen className="h-4 w-4" />
              Open Existing
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Search */}
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">Quick Search</p>
              <p className="text-xs text-muted-foreground">
                Jump to a patient record by ID.
              </p>
            </div>

            <Link href="/app/open" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full gap-2 sm:w-auto">
                <Search className="h-4 w-4" />
                Search Patient ID
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Recent Projects */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Recent Observations</h2>
          <Badge variant="outline">{mockProjects.length} total</Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((p) => (
            <ProjectCard key={p.projectId} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
