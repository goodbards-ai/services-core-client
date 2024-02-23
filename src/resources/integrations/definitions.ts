// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as DefinitionsAPI from 'clun/resources/integrations/definitions';

export class Definitions extends APIResource {
  /**
   * Show details for an integrations/connector
   */
  retrieve(
    integrationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefinitionRetrieveResponse> {
    return this._client.get(`/v1/integrations/definitions/${integrationId}`, options);
  }

  /**
   * List available connectors in the platform
   */
  list(query?: DefinitionListParams, options?: Core.RequestOptions): Core.APIPromise<DefinitionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DefinitionListResponse>;
  list(
    query: DefinitionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefinitionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/integrations/definitions', { query, ...options });
  }
}

export interface DefinitionRetrieveResponse {
  id?: string;

  category?: string;

  categoryLabel?: string;

  className?: string;

  configuration?: Array<DefinitionRetrieveResponse.Configuration>;

  description?: string;

  logo?: string;

  operations?: Array<DefinitionRetrieveResponse.Operation>;

  url?: string;
}

export namespace DefinitionRetrieveResponse {
  export interface Configuration {
    defaultValue?: string;

    description?: string;

    name?: string;

    required?: boolean;

    type?: string;

    uid?: string;
  }

  export interface Operation {
    description?: string;

    method?: string;

    parameters?: Array<Operation.Parameter>;
  }

  export namespace Operation {
    export interface Parameter {
      defaultValue?: string;

      description?: string;

      name?: string;

      required?: boolean;

      type?: string;

      uid?: string;
    }
  }
}

export type DefinitionListResponse = Array<unknown>;

export interface DefinitionListParams {
  /**
   * Optional expression to filter on names
   */
  category?: string;
}

export namespace Definitions {
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
  export import DefinitionListParams = DefinitionsAPI.DefinitionListParams;
}
