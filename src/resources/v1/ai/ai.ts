// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as AIAPI from 'clun/resources/v1/ai/ai';
import * as GeneratedContentAPI from 'clun/resources/v1/ai/generated-content';
import * as StreamingAPI from 'clun/resources/v1/ai/streaming';

export class AI extends APIResource {
  streaming: StreamingAPI.Streaming = new StreamingAPI.Streaming(this._client);
  generatedContent: GeneratedContentAPI.GeneratedContent = new GeneratedContentAPI.GeneratedContent(
    this._client,
  );

  createChatCompletion(
    tenantId: string,
    body?: AICreateChatCompletionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  createChatCompletion(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  createChatCompletion(
    tenantId: string,
    body: AICreateChatCompletionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.createChatCompletion(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/ai/create-chat-completion`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  createCompletion(body?: AICreateCompletionParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  createCompletion(options?: Core.RequestOptions): Core.APIPromise<void>;
  createCompletion(
    body: AICreateCompletionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.createCompletion({}, body);
    }
    return this._client.post('/v1/{tenant-id}/ai/create-completion', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Generate content based on a dynamic prompt
   */
  createPrompt(
    tenantId: string,
    body?: AICreatePromptParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  createPrompt(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  createPrompt(
    tenantId: string,
    body: AICreatePromptParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.createPrompt(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/ai/create-prompt`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Generate content based on a dynamic prompt
   */
  generateContent(
    tenantId: string,
    body?: AIGenerateContentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  generateContent(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  generateContent(
    tenantId: string,
    body: AIGenerateContentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.generateContent(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/ai/generate-content`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  generateImage(
    tenantId: string,
    body?: AIGenerateImageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  generateImage(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  generateImage(
    tenantId: string,
    body: AIGenerateImageParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.generateImage(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/ai/generate-image`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  streamingInit(
    tenantId: string,
    body?: AIStreamingInitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  streamingInit(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  streamingInit(
    tenantId: string,
    body: AIStreamingInitParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.streamingInit(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/ai/generate-content/streaming-init`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AICreateChatCompletionParams {
  llm?: string;

  maxRetries?: number;

  maxTokens?: number;

  messages?: Array<AICreateChatCompletionParams.Message>;

  modelName?: string;

  promptId?: string;

  temperature?: number;

  timeout?: number;

  topK?: number;

  topP?: number;

  userId?: string;
}

export namespace AICreateChatCompletionParams {
  export interface Message {
    message?: string;

    type?: 'system' | 'user' | 'ai';
  }
}

export interface AICreateCompletionParams {
  llm?: string;

  maxRetries?: number;

  maxTokens?: number;

  modelName?: string;

  prompt?: string;

  temperature?: number;

  timeout?: number;

  topK?: number;

  topP?: number;
}

export interface AICreatePromptParams {
  audienceType?: string;

  callToActions?: string;

  description?: string;

  destinationURL?: string;

  documents?: Array<string>;

  emailType?: string;

  hashtags?: string;

  industries?: string;

  language?: string;

  llmRequest?: AICreatePromptParams.LlmRequest;

  numberOfWords?: number;

  productId?: string;

  productType?: string;

  promptDefinitionId?: string;

  quote?: string;

  releaseDate?: string;

  socialMediaPlatform?: string;

  sourceURL?: string;

  writingStyle?: string;
}

export namespace AICreatePromptParams {
  export interface LlmRequest {
    llm?: string;

    maxRetries?: number;

    maxTokens?: number;

    messages?: Array<LlmRequest.Message>;

    modelName?: string;

    promptId?: string;

    temperature?: number;

    timeout?: number;

    topK?: number;

    topP?: number;

    userId?: string;
  }

  export namespace LlmRequest {
    export interface Message {
      message?: string;

      type?: 'system' | 'user' | 'ai';
    }
  }
}

export interface AIGenerateContentParams {
  audienceType?: string;

  callToActions?: string;

  description?: string;

  destinationURL?: string;

  documents?: Array<string>;

  emailType?: string;

  hashtags?: string;

  industries?: string;

  language?: string;

  llmRequest?: AIGenerateContentParams.LlmRequest;

  numberOfWords?: number;

  productId?: string;

  productType?: string;

  promptDefinitionId?: string;

  quote?: string;

  releaseDate?: string;

  socialMediaPlatform?: string;

  sourceURL?: string;

  writingStyle?: string;
}

export namespace AIGenerateContentParams {
  export interface LlmRequest {
    llm?: string;

    maxRetries?: number;

    maxTokens?: number;

    messages?: Array<LlmRequest.Message>;

    modelName?: string;

    promptId?: string;

    temperature?: number;

    timeout?: number;

    topK?: number;

    topP?: number;

    userId?: string;
  }

  export namespace LlmRequest {
    export interface Message {
      message?: string;

      type?: 'system' | 'user' | 'ai';
    }
  }
}

export interface AIGenerateImageParams {
  llm?: string;

  modelName?: string;

  prompt?: string;

  quality?: string;

  size?: string;

  style?: string;
}

export interface AIStreamingInitParams {
  audienceType?: string;

  callToActions?: string;

  description?: string;

  destinationURL?: string;

  documents?: Array<string>;

  emailType?: string;

  hashtags?: string;

  industries?: string;

  language?: string;

  llmRequest?: AIStreamingInitParams.LlmRequest;

  numberOfWords?: number;

  productId?: string;

  productType?: string;

  promptDefinitionId?: string;

  quote?: string;

  releaseDate?: string;

  socialMediaPlatform?: string;

  sourceURL?: string;

  writingStyle?: string;
}

export namespace AIStreamingInitParams {
  export interface LlmRequest {
    llm?: string;

    maxRetries?: number;

    maxTokens?: number;

    messages?: Array<LlmRequest.Message>;

    modelName?: string;

    promptId?: string;

    temperature?: number;

    timeout?: number;

    topK?: number;

    topP?: number;

    userId?: string;
  }

  export namespace LlmRequest {
    export interface Message {
      message?: string;

      type?: 'system' | 'user' | 'ai';
    }
  }
}

export namespace AI {
  export import AICreateChatCompletionParams = AIAPI.AICreateChatCompletionParams;
  export import AICreateCompletionParams = AIAPI.AICreateCompletionParams;
  export import AICreatePromptParams = AIAPI.AICreatePromptParams;
  export import AIGenerateContentParams = AIAPI.AIGenerateContentParams;
  export import AIGenerateImageParams = AIAPI.AIGenerateImageParams;
  export import AIStreamingInitParams = AIAPI.AIStreamingInitParams;
  export import Streaming = StreamingAPI.Streaming;
  export import StreamingRetrieveResponse = StreamingAPI.StreamingRetrieveResponse;
  export import GeneratedContent = GeneratedContentAPI.GeneratedContent;
}
