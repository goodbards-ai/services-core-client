// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as BusinessesAPI from 'clun/resources/cases/businesses';
import * as DefinitionsAPI from 'clun/resources/cases/definitions';

export class Cases extends APIResource {
  businesses: BusinessesAPI.Businesses = new BusinessesAPI.Businesses(this._client);
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
}

export namespace Cases {
  export import Businesses = BusinessesAPI.Businesses;
  export import BusinessRetrieveResponse = BusinessesAPI.BusinessRetrieveResponse;
  export import BusinessListResponse = BusinessesAPI.BusinessListResponse;
  export import Definitions = DefinitionsAPI.Definitions;
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
}
