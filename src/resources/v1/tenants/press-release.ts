// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as PressReleaseAPI from 'clun/resources/v1/tenants/press-release';

export class PressRelease extends APIResource {
  update(
    tenantId: string,
    body?: PressReleaseUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    tenantId: string,
    body: PressReleaseUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(tenantId, {}, body);
    }
    return this._client.put(`/v1/${tenantId}/press-release`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  delete(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/press-release`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PressReleaseUpdateParams {
  boilerplate1?: string;

  boilerplate2?: string;

  boilerplate3?: string;

  ceoJobTitle?: string;

  ceoName?: string;

  contactEmail?: string;

  contactJobTitle?: string;

  contactName?: string;

  uid?: string;
}

export namespace PressRelease {
  export import PressReleaseUpdateParams = PressReleaseAPI.PressReleaseUpdateParams;
}
