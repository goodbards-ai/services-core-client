// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Content extends APIResource {
  /**
   * Delete one content
   */
  delete(tenantId: string, contentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/ai/generated/content/${contentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
