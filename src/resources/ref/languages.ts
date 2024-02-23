// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as LanguagesAPI from 'clun/resources/ref/languages';

export class Languages extends APIResource {
  /**
   * Retrieving all the available languages.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<LanguageListResponse> {
    return this._client.get('/v1/ref/languages', options);
  }
}

export type LanguageListResponse = Array<unknown>;

export namespace Languages {
  export import LanguageListResponse = LanguagesAPI.LanguageListResponse;
}
