import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

type StepId = 1 | 2 | 3 | 4;

export function Stepper({ step }: { step: StepId }) {
  const steps = [
    { id: 1, label: "Patient" },
    { id: 2, label: "Capture" },
    { id: 3, label: "Edit" },
    { id: 4, label: "Summary" },
  ];

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s) => {
            const active = step === s.id;
            const done = step > (s.id as StepId);
            return (
              <div
                key={s.id}
                className={cn(
                  "rounded-2xl border px-3 py-3 text-center",
                  active && "bg-muted",
                  done && "border-foreground/20"
                )}
              >
                <div className="mx-auto flex w-fit items-center gap-2 text-xs font-medium">
                  {done ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="grid h-5 w-5 place-items-center rounded-full border text-[11px]">
                      {s.id}
                    </span>
                  )}
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}