// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as RefAPI from 'clun/resources/ref/ref';
import * as CitiesAPI from 'clun/resources/ref/cities';
import * as CountriesAPI from 'clun/resources/ref/countries';
import * as CurrenciesAPI from 'clun/resources/ref/currencies';
import * as LanguagesAPI from 'clun/resources/ref/languages';

export class Ref extends APIResource {
  cities: CitiesAPI.Cities = new CitiesAPI.Cities(this._client);
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);

  retrieve(listName: string, options?: Core.RequestOptions): Core.APIPromise<RefRetrieveResponse> {
    return this._client.get(`/v1/ref/${listName}`, options);
  }
}

export type RefRetrieveResponse = Array<RefRetrieveResponse.RefRetrieveResponseItem>;

export namespace RefRetrieveResponse {
  export interface RefRetrieveResponseItem {
    code?: string;

    name?: string;
  }
}

export namespace Ref {
  export import RefRetrieveResponse = RefAPI.RefRetrieveResponse;
  export import Cities = CitiesAPI.Cities;
  export import CityListResponse = CitiesAPI.CityListResponse;
  export import CityListParams = CitiesAPI.CityListParams;
  export import Countries = CountriesAPI.Countries;
  export import CountryListResponse = CountriesAPI.CountryListResponse;
  export import CountryListParams = CountriesAPI.CountryListParams;
  export import Currencies = CurrenciesAPI.Currencies;
  export import CurrencyListResponse = CurrenciesAPI.CurrencyListResponse;
  export import Languages = LanguagesAPI.Languages;
  export import LanguageListResponse = LanguagesAPI.LanguageListResponse;
}
