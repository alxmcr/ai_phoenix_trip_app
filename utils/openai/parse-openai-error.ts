import { HttpResponseCode } from "@/enums/http-response-code";

export function parseOpenAIError(error: any) {
  if (error?.status && error?.error) {
    return {
      status: error.status,
      code: error.error.code || "openai_error",
      message: error.error.message || "An error occurred with the OpenAI API.",
    };
  }

  return {
    status: HttpResponseCode.INTERNAL_SERVER_ERROR,
    code: "unknown_error",
    message: "An unexpected error occurred.",
  };
}
