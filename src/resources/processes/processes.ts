// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/processes/definitions';

export class Processes extends APIResource {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
}

export namespace Processes {
  export import Definitions = DefinitionsAPI.Definitions;
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
}
