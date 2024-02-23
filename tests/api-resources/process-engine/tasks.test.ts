// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('retrieve', async () => {
    const responsePromise = clun.processEngine.tasks.retrieve(
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
      clun.processEngine.tasks.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = clun.processEngine.tasks.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      [{}, {}, {}],
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await clun.processEngine.tasks.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      [
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
      ],
    );
  });

  test('complete: only required params', async () => {
    const responsePromise = clun.processEngine.tasks.complete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      [{}, {}, {}],
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await clun.processEngine.tasks.complete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      [
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
        {
          uid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          parameterDefinitionUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          value: 'string',
          name: 'string',
          type: 'string',
          multivalued: true,
          required: true,
          location: 'string',
          permission: 'string',
        },
      ],
    );
  });

  test('linkDocument', async () => {
    const responsePromise = clun.processEngine.tasks.linkDocument(
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

  test('linkDocument: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.processEngine.tasks.linkDocument(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('linkDocument: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.processEngine.tasks.linkDocument(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          documentUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          variableUid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('lock', async () => {
    const responsePromise = clun.processEngine.tasks.lock(
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

  test('lock: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.processEngine.tasks.lock(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('unlock', async () => {
    const responsePromise = clun.processEngine.tasks.unlock(
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

  test('unlock: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.processEngine.tasks.unlock(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });
});
