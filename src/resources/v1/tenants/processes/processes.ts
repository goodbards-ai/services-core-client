// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as AuditAPI from 'clun/resources/v1/tenants/processes/audit';
import * as StepsAPI from 'clun/resources/v1/tenants/processes/steps';
import * as VariablesAPI from 'clun/resources/v1/tenants/processes/variables';

export class Processes extends APIResource {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  variables: VariablesAPI.Variables = new VariablesAPI.Variables(this._client);

  /**
   * Get details for a process
   */
  retrieve(tenantId: string, processId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/processes/${processId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Processes for a user
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/processes`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export namespace Processes {
  export import Audit = AuditAPI.Audit;
  export import Steps = StepsAPI.Steps;
  export import Variables = VariablesAPI.Variables;
}
