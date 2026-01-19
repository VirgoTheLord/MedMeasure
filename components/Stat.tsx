export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-background p-4 text-center">
      <div className="text-lg font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
