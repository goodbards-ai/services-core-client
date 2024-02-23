// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Variables extends APIResource {
  /**
   * Retrieve Variables for a process
   */
  list(tenantId: string, processId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/processes/${processId}/variables`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
