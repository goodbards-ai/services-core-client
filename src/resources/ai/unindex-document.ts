// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as UnindexDocumentAPI from 'clun/resources/ai/unindex-document';

export class UnindexDocument extends APIResource {
  create(
    tenantId: string,
    uid: string,
    params?: UnindexDocumentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  create(tenantId: string, uid: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    uid: string,
    params: UnindexDocumentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.create(tenantId, uid, {}, params);
    }
    const { llm } = params;
    return this._client.post(`/v1/${tenantId}/ai/unindex-document/${uid}`, {
      query: { llm },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UnindexDocumentCreateParams {
  llm?: string;
}

export namespace UnindexDocument {
  export import UnindexDocumentCreateParams = UnindexDocumentAPI.UnindexDocumentCreateParams;
}
