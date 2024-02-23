// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as RegisterAPI from 'clun/resources/iam/register';

export class Register extends APIResource {
  create(body?: RegisterCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    body: RegisterCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/iam/register', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RegisterCreateParams {
  birthDate?: string;

  country?: string;

  currency?: string;

  email?: string;

  firstName?: string;

  language?: string;

  lastName?: string;

  password?: string;
}

export namespace Register {
  export import RegisterCreateParams = RegisterAPI.RegisterCreateParams;
}
