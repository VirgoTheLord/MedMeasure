import { CheckCircle2 } from "lucide-react";

export function Success({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-emerald-500/10 px-3 py-2 text-xs text-emerald-700 dark:text-emerald-300">
      <CheckCircle2 className="h-4 w-4" />
      {text}
    </div>
  );
}
