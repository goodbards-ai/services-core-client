// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/cases/definitions';

export class Definitions extends APIResource {
  /**
   * Details for a Case definition
   */
  retrieve(
    caseDefinitionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefinitionRetrieveResponse> {
    return this._client.get(`/v1/cases/definitions/${caseDefinitionId}`, options);
  }

  /**
   * List all case definitions.
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<DefinitionListResponse> {
    return this._client.get(`/v1/cases/${tenantId}/definitions`, options);
  }
}

export interface DefinitionRetrieveResponse {
  label?: string;

  params?: Array<DefinitionRetrieveResponse.Param>;

  processes?: Array<DefinitionRetrieveResponse.Process>;

  tenants?: Array<DefinitionRetrieveResponse.Tenant>;

  uid?: string;
}

export namespace DefinitionRetrieveResponse {
  export interface Param {
    constraints?: Param.Constraints;

    dataType?: string;

    defaultValue?: string;

    enumeration?: Array<string>;

    groupName?: string;

    groupPosition?: number;

    label?: string;

    multiValued?: boolean;

    paramPosition?: number;

    referenceList?: Param.ReferenceList;

    uid?: string;
  }

  export namespace Param {
    export interface Constraints {
      max?: number;

      maxLength?: number;

      min?: number;

      minLength?: number;

      pattern?: string;

      required?: boolean;
    }

    export interface ReferenceList {
      filterParamUidToReadValue?: string;

      filterUrlParam?: string;

      url?: string;
    }
  }

  export interface Process {
    description?: string;

    name?: string;

    uid?: string;

    version?: number;
  }

  export interface Tenant {
    label?: string;

    uid?: string;
  }
}

export type DefinitionListResponse = Array<unknown>;

export namespace Definitions {
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
}
