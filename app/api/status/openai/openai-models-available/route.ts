import openaiClient from "@/config/openai/openai-config";
import { OpenAIHealth } from "@/helpers/openai-health/openai-health";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const healthOpenAI = new OpenAIHealth(openaiClient);

    const models = await healthOpenAI.checkAIModelsAvailable();

    return NextResponse.json({ models });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check OpenAI models",
      },
      { status: 500 }
    );
  }
}
