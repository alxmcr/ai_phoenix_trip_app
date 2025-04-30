import { PriorityBadge } from "@/components/badges/priority-badge";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ActionableData } from "@/types/db/actionable";

type Props = {
  actionables: ActionableData[];
};

export function ActionablesSection({ actionables = [] }: Props) {
  if (actionables.length === 0) {
    return (
      <section className="w-full container px-4 md:px-0">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Actionable Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No actionables found</p>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 container px-4 py-4 md:px-0">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Actionable Insights</CardTitle>
          <CardDescription>Key issues that need attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {actionables.map((insight) => (
              <div
                key={insight.actionable_id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{insight.title}</h3>
                  <PriorityBadge
                    priority={insight.priority.toLocaleUpperCase()}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {insight.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="outline">{insight.department}</Badge>
                  <Badge variant="outline">{insight.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
