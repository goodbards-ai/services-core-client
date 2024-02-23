// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Audit extends APIResource {
  /**
   * Retrieve audit information for a process
   */
  retrieve(tenantId: string, processId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/processes/${processId}/audit`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
