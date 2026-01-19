import { Card, CardContent } from "../ui/card";

export function SummaryCard({
  icon,
  label,
  value,
  subValue,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  highlight?: "good" | "bad";
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
            {subValue ? (
              <p
                className={`mt-1 text-xs ${
                  highlight === "good"
                    ? "text-emerald-600"
                    : highlight === "bad"
                      ? "text-rose-600"
                      : "text-muted-foreground"
                }`}
              >
                {subValue}
              </p>
            ) : null}
          </div>

          <div className="grid h-9 w-9 place-items-center rounded-xl border bg-muted">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
