export function MiniPill({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-xl border bg-background p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">
        {value}{" "}
        <span className="text-xs font-medium text-muted-foreground">
          {unit}
        </span>
      </p>
    </div>
  );
}
