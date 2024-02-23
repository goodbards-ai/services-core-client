// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ImagesAPI from 'clun/resources/ai/generated/images';

export class Images extends APIResource {
  /**
   * Get one Image
   */
  retrieve(tenantId: string, imageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/ai/generated/images/${imageId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List generated image for a tenant
   */
  list(tenantId: string, query?: ImageListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    tenantId: string,
    query: ImageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(tenantId, {}, query);
    }
    return this._client.get(`/v1/${tenantId}/ai/generated/images`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete one Image
   */
  delete(tenantId: string, imageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/ai/generated/images/${imageId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get one Image
   */
  download(tenantId: string, imageId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/ai/generated/images/${imageId}/download`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ImageListParams {
  count?: number;
}

export namespace Images {
  export import ImageListParams = ImagesAPI.ImageListParams;
}
