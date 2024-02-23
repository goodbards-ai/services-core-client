// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/processes/definitions';

export class Definitions extends APIResource {
  /**
   * Get details for a Process definitions
   */
  retrieve(
    processDefinitionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefinitionRetrieveResponse> {
    return this._client.get(`/v1/processes/definitions/${processDefinitionId}`, options);
  }

  /**
   * Get Process list
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DefinitionListResponse> {
    return this._client.get('/v1/processes/definitions', options);
  }
}

export interface DefinitionRetrieveResponse {
  createdBy?: DefinitionRetrieveResponse.CreatedBy;

  creationDate?: string;

  description?: string;

  lastModifiedBy?: DefinitionRetrieveResponse.LastModifiedBy;

  lastModifiedDate?: string;

  name?: string;

  params?: Array<DefinitionRetrieveResponse.Param>;

  steps?: Array<DefinitionRetrieveResponse.Step>;

  uid?: string;

  version?: number;
}

export namespace DefinitionRetrieveResponse {
  export interface CreatedBy {
    email?: string;

    uid?: string;
  }

  export interface LastModifiedBy {
    email?: string;

    uid?: string;
  }

  export interface Param {
    dataType?: string;

    defaultValue?: string;

    label?: string;

    multiValued?: boolean;

    required?: boolean;

    uid?: string;
  }

  export interface Step {
    coe?: string;

    coeId?: string;

    nextStep?: string;

    stepDefinitionId?: string;

    stepLabel?: string;

    stepType?: 'GATEWAY' | 'USER' | 'SCRIPT' | 'START' | 'END';

    taskId?: string;

    taskStatus?: 'PENDING' | 'LOCKED' | 'COMPLETED' | 'CANCELLED' | 'FAILED';
  }
}

export type DefinitionListResponse = Array<unknown>;

export namespace Definitions {
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
}
