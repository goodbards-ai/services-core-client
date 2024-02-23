// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class SurvivalAnalysis extends APIResource {
  /**
   * List survival analysis for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/survival-analysis`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
