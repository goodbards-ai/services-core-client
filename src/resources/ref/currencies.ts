// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as CurrenciesAPI from 'clun/resources/ref/currencies';

export class Currencies extends APIResource {
  /**
   * Retrieving all the available currencies.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CurrencyListResponse> {
    return this._client.get('/v1/ref/currencies', options);
  }
}

export type CurrencyListResponse = Array<unknown>;

export namespace Currencies {
  export import CurrencyListResponse = CurrenciesAPI.CurrencyListResponse;
}
