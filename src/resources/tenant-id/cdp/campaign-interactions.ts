// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class CampaignInteractions extends APIResource {
  /**
   * List campaign interactions for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/campaign-interactions`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
