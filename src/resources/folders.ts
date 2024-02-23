// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Folders extends APIResource {
  /**
   * List folders attached to a tenant
   */
  retrieve(tenantId: string, folder: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/folders/${folder}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
