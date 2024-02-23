// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as CategoriesAPI from 'clun/resources/integrations/categories';

export class Categories extends APIResource {
  /**
   * List connectors categories.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    return this._client.get('/v1/integrations/categories', options);
  }
}

export type CategoryListResponse = Array<unknown>;

export namespace Categories {
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
}
