// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as DefinitionsAPI from 'clun/resources/prompts/definitions/definitions';
import * as CategoriesAPI from 'clun/resources/prompts/definitions/categories';

export class Definitions extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Find a prompt definition by id
   */
  retrieve(promptDefinitionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/prompts/definitions/${promptDefinitionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update Prompt definition
   */
  update(
    promptDefinitionId: string,
    body?: DefinitionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(promptDefinitionId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    promptDefinitionId: string,
    body: DefinitionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(promptDefinitionId, {}, body);
    }
    return this._client.put(`/v1/prompts/definitions/${promptDefinitionId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List prompts and filter by category
   */
  list(query?: DefinitionListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    query: DefinitionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/prompts/definitions', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Find a prompt definition by id
   */
  delete(promptDefinitionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/prompts/definitions/${promptDefinitionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DefinitionUpdateParams {
  language?: string;

  prompt?: DefinitionUpdateParams.Prompt;
}

export namespace DefinitionUpdateParams {
  export interface Prompt {
    category?: string;

    description?: string;

    label?: string;

    shared?: boolean;

    template?: string;

    uid?: string;
  }
}

export interface DefinitionListParams {
  category?: string;
}

export namespace Definitions {
  export import DefinitionUpdateParams = DefinitionsAPI.DefinitionUpdateParams;
  export import DefinitionListParams = DefinitionsAPI.DefinitionListParams;
  export import Categories = CategoriesAPI.Categories;
}
