import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={cn("h-full transition-all hover:shadow-md", className)}>
      <CardContent className="flex flex-col justify-between p-6">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#93da97]/20 text-primary">
          {icon}
        </div>
        <div className="mt-4">
          <p className="font-space-grotesk text-lg font-bold">{title}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
