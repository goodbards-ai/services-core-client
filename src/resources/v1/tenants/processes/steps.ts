// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Steps extends APIResource {
  /**
   * Retrieve Steps for a process
   */
  list(tenantId: string, processId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/processes/${processId}/steps`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
