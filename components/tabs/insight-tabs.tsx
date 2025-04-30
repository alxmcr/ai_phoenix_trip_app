"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";
import { getPriorityColor } from "@/utils/ui/priority-color";
import { BarChart, Briefcase, FileText, Lightbulb, Target } from "lucide-react";
import { ImpactIcon } from "../icons/5x5/impact-icon";
import { PriorityIcon } from "../icons/5x5/priority-icon";

interface Props {
  actionables: ActionableData[];
  recommendations: RecommendationData[];
}

export function InsightsTabs({ actionables, recommendations }: Props) {
  return (
    <Tabs defaultValue="actionables" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6 h-15">
        <TabsTrigger value="actionables" className="flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          Actionables
        </TabsTrigger>
        <TabsTrigger
          value="recommendations"
          className="flex items-center gap-2"
        >
          <Lightbulb className="h-4 w-4" />
          Recommendations
        </TabsTrigger>
      </TabsList>

      <TabsContent value="actionables">
        <div className="grid grid-cols-1 gap-4">
          {actionables.length > 0 ? (
            actionables.map((item) => (
              <Card key={item.actionable_id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <PriorityIcon priority={item.priority} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <Badge
                          className={getPriorityColor(
                            item.priority.toLocaleLowerCase()
                          )}
                        >
                          Priority: {item.priority.toLocaleUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Briefcase className="h-3 w-3" />
                          {item.department}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <FileText className="h-3 w-3" />
                          {item.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          Source: {item.source_aspect}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No actionables</div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="recommendations">
        <div className="grid grid-cols-1 gap-4">
          {recommendations.length > 0 ? (
            recommendations.map((item) => (
              <Card key={item.recommendation_id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ImpactIcon impact={item.impact} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="flex gap-2">
                          <Badge
                            className={getPriorityColor(
                              item.impact.toLocaleLowerCase()
                            )}
                          >
                            Impact: {item.impact.toLocaleUpperCase()}
                          </Badge>
                          {item.data_driven && (
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1 bg-green-400 text-black"
                            >
                              <BarChart className="h-3 w-3" />
                              Data-Driven
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Target className="h-3 w-3" />
                          {item.target_area}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={getPriorityColor(
                            item.effort_level.toLocaleLowerCase()
                          )}
                        >
                          Effort: {item.effort_level.toLocaleUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No recommendations</div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
