// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  test('retrieve', async () => {
    const responsePromise = clun.integrations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'string');
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
      clun.integrations.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = clun.integrations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'string', {
      foo: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await clun.integrations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'string', {
      foo: {},
    });
  });

  test('list', async () => {
    const responsePromise = clun.integrations.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.integrations.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('operationName', async () => {
    const responsePromise = clun.integrations.operationName(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'string',
      'string',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('operationName: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.integrations.operationName('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('operationNameCreate: only required params', async () => {
    const responsePromise = clun.integrations.operationNameCreate(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'string',
      'string',
      { foo: {} },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('operationNameCreate: required and optional params', async () => {
    const response = await clun.integrations.operationNameCreate(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      'string',
      'string',
      { foo: {} },
    );
  });
});
