import { OpenAIHealth } from "@/helpers/openai-health/openai-health";
import openaiClient from "@/lib/openai/openai-config";
import { parseOpenAIError } from "@/utils/openai/parse-openai-error";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const healthOpenAI = new OpenAIHealth(openaiClient);

    const models = await healthOpenAI.checkAIModelsAvailable();

    return NextResponse.json({ models });
  } catch (error) {
    const { status, code, message } = parseOpenAIError(error);

    return NextResponse.json(
      {
        code,
        error: message,
      },
      { status }
    );
  }
}
