// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as CasesAPI from 'clun/resources/case-management/cases';

export class Cases extends APIResource {
  /**
   * Create a Case on a Tenant
   */
  create(
    tenantId: string,
    body?: CaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaseCreateResponse>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<CaseCreateResponse>;
  create(
    tenantId: string,
    body: CaseCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaseCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/cases`, { body, ...options });
  }

  /**
   * Show details for a case
   */
  retrieve(tenantId: string, caseId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cases/${caseId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List running cases on a Tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cases`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Close a Case
   */
  close(tenantId: string, caseId: string, options?: Core.RequestOptions): Core.APIPromise<CaseCloseResponse> {
    return this._client.post(`/v1/${tenantId}/cases/${caseId}/close`, options);
  }

  /**
   * Attach a document to a case variable
   */
  linkDocument(
    tenantId: string,
    caseId: string,
    body?: CaseLinkDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  linkDocument(tenantId: string, caseId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  linkDocument(
    tenantId: string,
    caseId: string,
    body: CaseLinkDocumentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.linkDocument(tenantId, caseId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/cases/${caseId}/linkDocument`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type CaseCreateResponse = Array<unknown>;

export type CaseCloseResponse = Array<unknown>;

export interface CaseCreateParams {
  businessKey?: string;

  caseDefinitionUid?: string;

  name?: string;

  params?: Array<CaseCreateParams.Param>;
}

export namespace CaseCreateParams {
  export interface Param {
    uid?: string;

    value?: string;
  }
}

export interface CaseLinkDocumentParams {
  documentUid?: string;

  variableUid?: string;
}

export namespace Cases {
  export import CaseCreateResponse = CasesAPI.CaseCreateResponse;
  export import CaseCloseResponse = CasesAPI.CaseCloseResponse;
  export import CaseCreateParams = CasesAPI.CaseCreateParams;
  export import CaseLinkDocumentParams = CasesAPI.CaseLinkDocumentParams;
}
