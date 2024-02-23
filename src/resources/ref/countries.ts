// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as CountriesAPI from 'clun/resources/ref/countries';

export class Countries extends APIResource {
  /**
   * Retrieving all the available countries.
   */
  list(query?: CountryListParams, options?: Core.RequestOptions): Core.APIPromise<CountryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CountryListResponse>;
  list(
    query: CountryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CountryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/ref/countries', { query, ...options });
  }
}

export type CountryListResponse = Array<unknown>;

export interface CountryListParams {
  /**
   * Optional expression to filter on names
   */
  contains?: string;
}

export namespace Countries {
  export import CountryListResponse = CountriesAPI.CountryListResponse;
  export import CountryListParams = CountriesAPI.CountryListParams;
}
