// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as CitiesAPI from 'clun/resources/ref/cities';

export class Cities extends APIResource {
  /**
   * Search cities, filtering
   */
  list(query?: CityListParams, options?: Core.RequestOptions): Core.APIPromise<CityListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CityListResponse>;
  list(
    query: CityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CityListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/ref/cities', { query, ...options });
  }
}

export type CityListResponse = Array<unknown>;

export interface CityListParams {
  /**
   * Optional expression to filter on names
   */
  contains?: string;

  /**
   * Optional code to filter by country
   */
  country?: string;

  /**
   * Optional flag to limit results
   */
  limit?: number;
}

export namespace Cities {
  export import CityListResponse = CitiesAPI.CityListResponse;
  export import CityListParams = CitiesAPI.CityListParams;
}
