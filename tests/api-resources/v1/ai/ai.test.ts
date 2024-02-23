// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ai', () => {
  test('createChatCompletion', async () => {
    const responsePromise = clun.v1.ai.createChatCompletion('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createChatCompletion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.createChatCompletion('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('createChatCompletion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.createChatCompletion(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          llm: 'string',
          maxRetries: 0,
          maxTokens: 0,
          messages: [
            { message: 'string', type: 'system' },
            { message: 'string', type: 'system' },
            { message: 'string', type: 'system' },
          ],
          modelName: 'string',
          promptId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          temperature: 0,
          timeout: 0,
          topK: 0,
          topP: 0,
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('createCompletion', async () => {
    const responsePromise = clun.v1.ai.createCompletion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createCompletion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(clun.v1.ai.createCompletion({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clun.NotFoundError,
    );
  });

  test('createCompletion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.createCompletion(
        {
          llm: 'string',
          maxRetries: 0,
          maxTokens: 0,
          modelName: 'string',
          prompt: 'string',
          temperature: 0,
          timeout: 0,
          topK: 0,
          topP: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('createPrompt', async () => {
    const responsePromise = clun.v1.ai.createPrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPrompt: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.createPrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('createPrompt: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.createPrompt(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          audienceType: 'string',
          callToActions: 'string',
          description: 'string',
          destinationURL: 'string',
          documents: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          emailType: 'string',
          hashtags: 'string',
          industries: 'string',
          language: 'string',
          llmRequest: {
            llm: 'string',
            modelName: 'string',
            temperature: 0,
            topK: 0,
            topP: 0,
            maxTokens: 0,
            maxRetries: 0,
            timeout: 0,
            promptId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            messages: [
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
            ],
          },
          numberOfWords: 0,
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          productType: 'string',
          promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quote: 'string',
          releaseDate: 'string',
          socialMediaPlatform: 'string',
          sourceURL: 'string',
          writingStyle: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('generateContent', async () => {
    const responsePromise = clun.v1.ai.generateContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateContent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.generateContent('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('generateContent: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.generateContent(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          audienceType: 'string',
          callToActions: 'string',
          description: 'string',
          destinationURL: 'string',
          documents: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          emailType: 'string',
          hashtags: 'string',
          industries: 'string',
          language: 'string',
          llmRequest: {
            llm: 'string',
            modelName: 'string',
            temperature: 0,
            topK: 0,
            topP: 0,
            maxTokens: 0,
            maxRetries: 0,
            timeout: 0,
            promptId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            messages: [
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
            ],
          },
          numberOfWords: 0,
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          productType: 'string',
          promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quote: 'string',
          releaseDate: 'string',
          socialMediaPlatform: 'string',
          sourceURL: 'string',
          writingStyle: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('generateImage', async () => {
    const responsePromise = clun.v1.ai.generateImage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateImage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.generateImage('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('generateImage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.generateImage(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          llm: 'string',
          modelName: 'string',
          prompt: 'string',
          quality: 'string',
          size: 'string',
          style: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('streamingInit', async () => {
    const responsePromise = clun.v1.ai.streamingInit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('streamingInit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.streamingInit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('streamingInit: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.v1.ai.streamingInit(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          audienceType: 'string',
          callToActions: 'string',
          description: 'string',
          destinationURL: 'string',
          documents: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          emailType: 'string',
          hashtags: 'string',
          industries: 'string',
          language: 'string',
          llmRequest: {
            llm: 'string',
            modelName: 'string',
            temperature: 0,
            topK: 0,
            topP: 0,
            maxTokens: 0,
            maxRetries: 0,
            timeout: 0,
            promptId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            messages: [
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
              { message: 'string', type: 'system' },
            ],
          },
          numberOfWords: 0,
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          productType: 'string',
          promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quote: 'string',
          releaseDate: 'string',
          socialMediaPlatform: 'string',
          sourceURL: 'string',
          writingStyle: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });
});
