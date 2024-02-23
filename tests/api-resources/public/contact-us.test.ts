// File generated from our OpenAPI spec by Stainless.

import Clun from 'clun';
import { Response } from 'node-fetch';

const clun = new Clun({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contactUs', () => {
  test('create', async () => {
    const responsePromise = clun.public.contactUs.create();
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
    await expect(clun.public.contactUs.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Clun.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      clun.public.contactUs.create(
        {
          budget: 'string',
          companyName: 'string',
          email: 'string',
          employees: 'string',
          message: 'string',
          name: 'string',
          phoneNumber: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Clun.NotFoundError);
  });
});
