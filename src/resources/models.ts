// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ModelsAPI from 'clun/resources/models';

export class Models extends APIResource {
  /**
   * Retrieving all the ai models.
   */
  list(query?: ModelListParams, options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(
    query: ModelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/models', { query, ...options });
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    creator?: string;

    dimension?: number;

    name?: string;

    provider?: string;

    status?: string;

    type?:
      | 'CHAT_COMPLETION'
      | 'TEXT_EMBEDDINGS'
      | 'TEXT_GENERATION'
      | 'IMAGE_GENERATION'
      | 'SPEECH_TO_TEXT'
      | 'TEXT_TO_SPEECH'
      | 'IMAGE_RECOGNITION'
      | 'IMAGE_EMBEDDINGS'
      | 'VISION';
  }
}

export interface ModelListParams {
  name?: string;

  provider?: string;

  type?: string;
}

export namespace Models {
  export import ModelListResponse = ModelsAPI.ModelListResponse;
  export import ModelListParams = ModelsAPI.ModelListParams;
}
