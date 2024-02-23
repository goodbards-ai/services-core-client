// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as AIAPI from 'clun/resources/ai/ai';
import * as IndexDocumentAPI from 'clun/resources/ai/index-document';
import * as ModelsAPI from 'clun/resources/ai/models';
import * as UnindexDocumentAPI from 'clun/resources/ai/unindex-document';
import * as GeneratedAPI from 'clun/resources/ai/generated/generated';

export class AI extends APIResource {
  generated: GeneratedAPI.Generated = new GeneratedAPI.Generated(this._client);
  indexDocument: IndexDocumentAPI.IndexDocument = new IndexDocumentAPI.IndexDocument(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  unindexDocument: UnindexDocumentAPI.UnindexDocument = new UnindexDocumentAPI.UnindexDocument(this._client);

  vectorize(body?: AIVectorizeParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  vectorize(options?: Core.RequestOptions): Core.APIPromise<void>;
  vectorize(
    body: AIVectorizeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.vectorize({}, body);
    }
    return this._client.post('/v1/{tenant-id}/ai/vectorize', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AIVectorizeParams {
  chunks?: Array<string>;

  llm?: string;

  modelName?: string;
}

export namespace AI {
  export import AIVectorizeParams = AIAPI.AIVectorizeParams;
  export import Generated = GeneratedAPI.Generated;
  export import IndexDocument = IndexDocumentAPI.IndexDocument;
  export import IndexDocumentCreateParams = IndexDocumentAPI.IndexDocumentCreateParams;
  export import Models = ModelsAPI.Models;
  export import ModelListParams = ModelsAPI.ModelListParams;
  export import UnindexDocument = UnindexDocumentAPI.UnindexDocument;
  export import UnindexDocumentCreateParams = UnindexDocumentAPI.UnindexDocumentCreateParams;
}
