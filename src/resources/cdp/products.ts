// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Products extends APIResource {
  /**
   * List products for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/products`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
