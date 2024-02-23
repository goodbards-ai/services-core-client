// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as AssetsAPI from 'clun/resources/assets';

export class Assets extends APIResource {
  /**
   * List assets for a tenant
   */
  list(tenantId: string, query?: AssetListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    tenantId: string,
    query: AssetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(tenantId, {}, query);
    }
    return this._client.get(`/v1/${tenantId}/assets`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AssetListParams {
  title?: string;

  version?: number;
}

export namespace Assets {
  export import AssetListParams = AssetsAPI.AssetListParams;
}
