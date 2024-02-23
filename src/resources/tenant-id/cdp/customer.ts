// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as CustomerAPI from 'clun/resources/tenant-id/cdp/customer';

export class Customer extends APIResource {
  /**
   * List customers for a tenant
   */
  create(tenantId: string, body?: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: CustomerCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/cdp/customer`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List customers for a tenant
   */
  delete(tenantId: string, cusId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/cdp/customer/${cusId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CustomerCreateParams {
  companyId?: string;

  customerCode?: string;

  customerType?: string;

  customerTypeInternal?: string;

  email?: string;

  firstName?: string;

  jobTitle?: string;

  lastName?: string;

  phone?: string;

  tenantUid?: string;

  uid?: string;
}

export namespace Customer {
  export import CustomerCreateParams = CustomerAPI.CustomerCreateParams;
}
