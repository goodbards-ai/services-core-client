// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as IndexDocumentAPI from 'clun/resources/ai/index-document';

export class IndexDocument extends APIResource {
  create(
    tenantId: string,
    uid: string,
    params?: IndexDocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  create(tenantId: string, uid: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    uid: string,
    params: IndexDocumentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.create(tenantId, uid, {}, params);
    }
    const { llm } = params;
    return this._client.post(`/v1/${tenantId}/ai/index-document/${uid}`, {
      query: { llm },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface IndexDocumentCreateParams {
  llm?: string;
}

export namespace IndexDocument {
  export import IndexDocumentCreateParams = IndexDocumentAPI.IndexDocumentCreateParams;
}
