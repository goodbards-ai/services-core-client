// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as NotifyMeAPI from 'clun/resources/public/notify-me';

export class NotifyMe extends APIResource {
  /**
   * Register a user to the wait list
   */
  create(body?: NotifyMeCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    body: NotifyMeCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/public/notify-me', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface NotifyMeCreateParams {
  email?: string;
}

export namespace NotifyMe {
  export import NotifyMeCreateParams = NotifyMeAPI.NotifyMeCreateParams;
}
