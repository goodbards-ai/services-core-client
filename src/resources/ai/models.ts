// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ModelsAPI from 'clun/resources/ai/models';

export class Models extends APIResource {
  /**
   * List models for a tenant
   */
  list(tenantId: string, query?: ModelListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    tenantId: string,
    query: ModelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(tenantId, {}, query);
    }
    return this._client.get(`/v1/${tenantId}/ai/models`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ModelListParams {
  name?: string;

  provider?: string;

  type?: string;
}

export namespace Models {
  export import ModelListParams = ModelsAPI.ModelListParams;
}
