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
    const prompt = buildPromptReview(review);

    // Create a response from OpenAI
    const response = await clientOpenAI.chat.completions.create({
      model: this.model,
      store: false,
      temperature: this.temperature,
      max_tokens: this.maxTokens,
      response_format: { type: "json_object" },
      messages: [
        {
          role: OpenAIMessageRoles.SYSTEM,
          content: this.directiveSystem,
        },
        {
          role: OpenAIMessageRoles.USER,
          content: prompt,
        },
      ],
    });

    // Print the response
    console.log("🚀 ~ ReviewAnalyzer ~ analyzeReview ~ response:", response);

    // Printy typeof response
    console.log(
      "🚀 ~ ReviewAnalyzer ~ analyzeReview ~ typeof response:",
      typeof response
    );

    return response;
  }
}
