import openaiClient from "@/config/openai/openai-config";
import { OpenAIHealth } from "@/helpers/openai-health/openai-health";
import { NextResponse } from "next/server";
import { HttpResponseCode } from "@/enums/http-response-code";
import { parseOpenAIError } from "@/utils/openai/parse-openai-error";

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
