// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Categories extends APIResource {
  /**
   * List prompts and filter by category
   */
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/prompts/definitions/categories', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
