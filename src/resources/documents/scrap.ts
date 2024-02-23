// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ScrapAPI from 'clun/resources/documents/scrap';

export class Scrap extends APIResource {
  /**
   * Create a new document
   */
  create(tenantId: string, body?: ScrapCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: ScrapCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/documents/scrap`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ScrapCreateParams {
  expiryDate?: string;

  fileName?: string;

  folder?: string;

  marketingStage?: string;

  title?: string;

  url?: string;
}

export namespace Scrap {
  export import ScrapCreateParams = ScrapAPI.ScrapCreateParams;
}
