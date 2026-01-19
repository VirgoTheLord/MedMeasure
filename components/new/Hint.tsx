export function Hint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-background px-3 py-2 text-xs text-muted-foreground">
      <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
      {text}
    </div>
  );
}
