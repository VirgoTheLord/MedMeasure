import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Observation } from "@/lib/mockPatientData";

export function ObservationRow({
  obs,
  isLatest,
}: {
  obs: Observation;
  isLatest: boolean;
}) {
  return (
    <Card className={isLatest ? "border-foreground/20" : ""}>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">{obs.capturedAt}</p>
              {isLatest ? (
                <Badge>Latest</Badge>
              ) : (
                <Badge variant="secondary">Saved</Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Observation ID: {obs.id}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
            <Badge variant="outline">Area: {obs.areaCm2.toFixed(2)} cm²</Badge>
            <Badge variant="outline">
              Perimeter: {obs.perimeterCm.toFixed(2)} cm
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
