// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as BusinessesAPI from 'clun/resources/cases/businesses';

export class Businesses extends APIResource {
  /**
   * Details for a business
   */
  retrieve(
    tenantId: string,
    business: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BusinessRetrieveResponse> {
    return this._client.get(`/v1/cases/${tenantId}/businesses/${business}`, options);
  }

  /**
   * List all businesses.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<BusinessListResponse> {
    return this._client.get('/v1/cases/businesses', options);
  }
}

export interface BusinessRetrieveResponse {
  code?: string;

  domains?: Array<BusinessRetrieveResponse.Domain>;

  label?: string;
}

export namespace BusinessRetrieveResponse {
  export interface Domain {
    bannerUrl?: string;

    cases?: Array<Domain.Case>;

    label?: string;

    uid?: string;
  }

  export namespace Domain {
    export interface Case {
      label?: string;

      uid?: string;
    }
  }
}

export type BusinessListResponse = Array<unknown>;

export namespace Businesses {
  export import BusinessRetrieveResponse = BusinessesAPI.BusinessRetrieveResponse;
  export import BusinessListResponse = BusinessesAPI.BusinessListResponse;
}
