import { OpenAIMessageRoles } from "@/enums/openai/openai-message-roles";
import { OpenAIModels } from "@/enums/openai/openai-models";
import { OpenAITemperatures } from "@/enums/openai/openai-temperatures";
import clientOpenAI from "@/lib/openai/openai-config";
import { ReviewData } from "@/types/db/review";
import { buildPromptReview } from "@/utils/openai/builder-prompt-review";
import { DEFINITION_SYSTEM_TRAVEL_ASSISTANT_REVIEW_ANALYZER_JSON } from "./system-directive-json";

export class ReviewAnalyzer {
  private model: OpenAIModels;
  private temperature: OpenAITemperatures;
  private directiveSystem: string;
  private maxTokens: number;

  constructor() {
    this.model = OpenAIModels.GPT_3_5_TURBO;
    this.temperature = OpenAITemperatures.BALANCED_CREATIVE;
    this.directiveSystem =
      DEFINITION_SYSTEM_TRAVEL_ASSISTANT_REVIEW_ANALYZER_JSON;
    this.maxTokens = 2000;
  }

  // Use the Responses API from OpenAI to analyze the review
  // Source: https://platform.openai.com/docs/api-reference/responses/create
  // Roles: system, user
  async analyzeReview(review: ReviewData) {
    try {
      const prompt = buildPromptReview(review);
      console.log("🚀 ~ ReviewAnalyzer ~ analyzeReview ~ prompt:", prompt)
      console.log(OpenAIMessageRoles.SYSTEM)

      // Create a response from OpenAI
      const response = await clientOpenAI.responses.create({
        model: this.model,
        store: false,
        temperature: this.temperature,
        max_output_tokens: this.maxTokens,
        input: [
          {
            role: OpenAIMessageRoles.SYSTEM,
            content: this.directiveSystem,
          },
          {
            role: OpenAIMessageRoles.USER,
            content: prompt,
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "review_analyzed",
            schema: {
              type: "object",
              properties: {
                sentiment: {
                  type: "object",
                  properties: {
                    score: { type: "number" },
                    label: { type: "string" },
                    summary: { type: "string" },
                    emotion_tone: { type: "string" },
                  },
                  required: ["score", "label", "summary", "emotion_tone"],
                  additionalProperties: false,
                },
                actionables: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      priority: { type: "string" },
                      department: { type: "string" },
                      category: { type: "string" },
                      source_aspect: { type: "string" },
                    },
                    required: [
                      "title",
                      "description",
                      "priority",
                      "department",
                      "category",
                      "source_aspect",
                    ],
                    additionalProperties: false,
                  },
                },
                recommendations: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      title: { type: "string" },
                      description: { type: "string" },
                      impact: { type: "string" },
                      target_area: { type: "string" },
                      effort_level: { type: "string" },
                      data_driven: { type: "boolean" },
                    },
                    required: [
                      "title",
                      "description",
                      "impact",
                      "target_area",
                      "effort_level",
                      "data_driven",
                    ],
                    additionalProperties: false,
                  },
                },
              },
              required: ["sentiment", "actionables", "recommendations"],
              additionalProperties: false,
            },
          },
        },
      });

      // Print the response
      console.log("🚀 ~ ReviewAnalyzer ~ analyzeReview ~ response:", response);

      // Printy typeof response
      console.log(
        "🚀 ~ ReviewAnalyzer ~ analyzeReview ~ typeof response:",
        typeof response
      );

      return response;
    } catch (error) {
      console.error("Error analyzing review:", error);
      throw error;
    }
  }
}
