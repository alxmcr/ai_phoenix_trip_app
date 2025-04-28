import { AnalyzerResponse } from '../../types/openai/analyzer';

export function parseAnalyzerResponse(response: string): AnalyzerResponse {
  try {
    // Remove any potential markdown code block formatting
    const cleanResponse = response.replace(/```json\n?|\n?```/g, '').trim();

    // Parse the JSON string
    const parsedResponse = JSON.parse(cleanResponse) as AnalyzerResponse;

    // Validate the structure
    if (!parsedResponse.sentiment || !parsedResponse.actionables || !parsedResponse.recommendations) {
      throw new Error('Invalid response structure');
    }

    // Validate sentiment object
    if (!parsedResponse.sentiment.score ||
        !parsedResponse.sentiment.label ||
        !parsedResponse.sentiment.summary ||
        !parsedResponse.sentiment.emotion_tone) {
      throw new Error('Invalid sentiment structure');
    }

    // Validate actionables array
    if (!Array.isArray(parsedResponse.actionables) ||
        parsedResponse.actionables.length < 4 ||
        parsedResponse.actionables.length > 6) {
      throw new Error('Invalid actionables array length');
    }

    // Validate recommendations array
    if (!Array.isArray(parsedResponse.recommendations) ||
        parsedResponse.recommendations.length < 2 ||
        parsedResponse.recommendations.length > 3) {
      throw new Error('Invalid recommendations array length');
    }

    return parsedResponse;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON format in OpenAI response');
    }
    throw error;
  }
}