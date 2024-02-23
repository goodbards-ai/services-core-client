// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  test('create', async () => {
    const responsePromise = clun.generativeAI.assets.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.create(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          associatedRequests: [
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
          ],
          content: 'string',
          createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          createdDate: '2019-12-27',
          lastModifiedBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          modifiedDate: '2019-12-27',
          title: 'string',
          versionNumber: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = clun.generativeAI.assets.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = clun.generativeAI.assets.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          associatedRequests: [
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
            {
              uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              tenantUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              provider: 'string',
              model: 'string',
              prompt: 'string',
              content: 'string',
              responseTime: 0,
              totalTokens: 0,
              inputTokens: 0,
              outputToken: 0,
              status: 'string',
              promptDefinitionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              promptName: 'string',
              promptCategory: 'string',
              title: 'string',
              createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              createdDate: '2019-12-27',
            },
          ],
          content: 'string',
          createdBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          createdDate: '2019-12-27',
          lastModifiedBy: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          modifiedDate: '2019-12-27',
          title: 'string',
          versionNumber: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = clun.generativeAI.assets.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.generativeAI.assets.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });
});
