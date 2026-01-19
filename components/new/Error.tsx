import { AlertTriangle } from "lucide-react";

export function Error({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-rose-500/10 px-3 py-2 text-xs text-rose-700 dark:text-rose-300">
      <AlertTriangle className="h-4 w-4" />
      {text}
    </div>
  );
}
