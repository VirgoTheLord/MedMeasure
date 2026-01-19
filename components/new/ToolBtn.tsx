import { Button } from "../ui/button";

export function ToolBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button variant="outline" size="sm" className="gap-2">
      {icon}
      {label}
    </Button>
  );
}