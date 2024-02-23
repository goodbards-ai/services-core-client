// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class CustomerJourneys extends APIResource {
  /**
   * List customer journeys for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/customer-journeys`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
