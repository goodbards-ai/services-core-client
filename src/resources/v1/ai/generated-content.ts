// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class GeneratedContent extends APIResource {
  /**
   * Display one generated content
   */
  retrieve(tenantId: string, contentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/ai/generated/content/${contentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List generated content for a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/ai/generated/content`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
