// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource iam', () => {
  test('validRegistration', async () => {
    const responsePromise = clun.iam.validRegistration();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validRegistration: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(clun.iam.validRegistration({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clun.NotFoundError,
    );
  });

  test('validRegistration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.iam.validRegistration(
        { user: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });

  test('validateEmail', async () => {
    const responsePromise = clun.iam.validateEmail();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validateEmail: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(clun.iam.validateEmail({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clun.NotFoundError,
    );
  });

  test('validateEmail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.iam.validateEmail(
        { code: 'string', user: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });
});
