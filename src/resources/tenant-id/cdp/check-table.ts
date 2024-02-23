// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class CheckTable extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/v1/{tenant-id}/cdp/check-table', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
