import openaiClient from "@/config/openai/openai-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { OpenAIHealth } from "@/helpers/openai-health/openai-health";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const modelName = searchParams.get("modelName");

    if (!modelName) {
      return NextResponse.json(
        {
          error: "Model name is required",
        },
        { status: HttpResponseCode.BAD_REQUEST }
      );
    }
    const healthOpenAI = new OpenAIHealth(openaiClient);

    const isModelHealthy = await healthOpenAI.checkAIModelHealth(modelName);

    return NextResponse.json(
      { isModelHealthy },
      { status: HttpResponseCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check OpenAI models",
      },
      { status: 500 }
    );
  }
}
