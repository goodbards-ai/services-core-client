// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ProcessesAPI from 'clun/resources/tenant-id/cases/processes';

export class Processes extends APIResource {
  /**
   * Create a Process for a Case
   */
  create(
    tenantId: string,
    caseId: string,
    body?: ProcessCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProcessCreateResponse>;
  create(
    tenantId: string,
    caseId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProcessCreateResponse>;
  create(
    tenantId: string,
    caseId: string,
    body: ProcessCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProcessCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, caseId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/cases/${caseId}/processes`, { body, ...options });
  }
}

export type ProcessCreateResponse = Array<unknown>;

export interface ProcessCreateParams {
  businessKey?: string;

  name?: string;

  params?: Array<ProcessCreateParams.Param>;

  processDefinitionUid?: string;
}

export namespace ProcessCreateParams {
  export interface Param {
    uid?: string;

    value?: string;
  }
}

export namespace Processes {
  export import ProcessCreateResponse = ProcessesAPI.ProcessCreateResponse;
  export import ProcessCreateParams = ProcessesAPI.ProcessCreateParams;
}
