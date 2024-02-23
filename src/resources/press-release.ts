// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class PressRelease extends APIResource {
  /**
   * Show press release information for a tenant
   */
  retrieve(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/press-release`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
