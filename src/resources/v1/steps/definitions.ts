// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/v1/steps/definitions';

export class Definitions extends APIResource {
  /**
   * Get details for a Process definitions
   */
  retrieve(
    stepDefinitionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefinitionRetrieveResponse> {
    return this._client.get(`/v1/steps/definitions/${stepDefinitionId}`, options);
  }
}

export interface DefinitionRetrieveResponse {
  name?: string;

  next?: string;

  next_uid?: string;

  parameters?: Array<DefinitionRetrieveResponse.Parameter>;

  previous?: string;

  previous_uid?: string;

  stepType?: string;

  uid?: string;
}

export namespace DefinitionRetrieveResponse {
  export interface Parameter {
    dataType?: string;

    defaultValue?: string;

    label?: string;

    multiValued?: boolean;

    required?: boolean;

    uid?: string;
  }
}

export namespace Definitions {
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
}
