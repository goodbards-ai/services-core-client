// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as DefinitionsAPI from 'clun/resources/prompts/definitions/definitions';

export class Prompts extends APIResource {
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);
}

export namespace Prompts {
  export import Definitions = DefinitionsAPI.Definitions;
  export import DefinitionUpdateParams = DefinitionsAPI.DefinitionUpdateParams;
  export import DefinitionListParams = DefinitionsAPI.DefinitionListParams;
}
