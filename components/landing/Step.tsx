export function Step({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border bg-background p-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border bg-muted text-xs font-semibold">
        {index}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
