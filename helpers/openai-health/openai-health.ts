import OpenAI from "openai";

interface IOpenAIHealth {
  checkAIModelsAvailable(): Promise<string[]>;
  checkAIModelHealth(modelName: string): Promise<boolean>;
}

export class OpenAIHealth implements IOpenAIHealth {
  private client: OpenAI;

  constructor(client: OpenAI) {
    this.client = client;
  }

  async checkAIModelsAvailable(): Promise<string[]> {
    const models = await this.client.models.list();
    return models.data.map((model) => model.id);
  }

  async checkAIModelHealth(modelName: string): Promise<boolean> {
    const modelInfo = await this.client.models.retrieve(modelName);

    // Check if the model is available
    if (!modelInfo) {
      return false;
    }

    return true;
  }
}
