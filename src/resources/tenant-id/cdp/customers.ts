// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Customers extends APIResource {
  /**
   * List customers for a tenant
   */
  retrieve(tenantId: string, cusId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/customers/${cusId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List customers for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/customers`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
