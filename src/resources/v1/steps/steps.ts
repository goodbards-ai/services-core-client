// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/v1/steps/definitions';

export class Steps extends APIResource {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
}

export namespace Steps {
  export import Definitions = DefinitionsAPI.Definitions;
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
}
