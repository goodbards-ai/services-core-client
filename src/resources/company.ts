// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as CompanyAPI from 'clun/resources/company';

export class Company extends APIResource {
  /**
   * List companies for a tenant
   */
  retrieve(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/company`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  update(tenantId: string, body?: CompanyUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    tenantId: string,
    body: CompanyUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(tenantId, {}, body);
    }
    return this._client.put(`/v1/${tenantId}/company`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  delete(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/company`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CompanyUpdateParams {
  address?: string;

  contactEmail?: string;

  description?: string;

  hashtags?: Array<string>;

  keywords?: Array<string>;

  name?: string;

  uid?: string;

  website?: string;
}

export namespace Company {
  export import CompanyUpdateParams = CompanyAPI.CompanyUpdateParams;
}
