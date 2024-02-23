// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as AIAPI from 'clun/resources/v1/ai/ai';
import * as StepsAPI from 'clun/resources/v1/steps/steps';
import * as TenantsAPI from 'clun/resources/v1/tenants/tenants';

export class V1 extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
}

export namespace V1 {
  export import Steps = StepsAPI.Steps;
  export import AI = AIAPI.AI;
  export import AICreateChatCompletionParams = AIAPI.AICreateChatCompletionParams;
  export import AICreateCompletionParams = AIAPI.AICreateCompletionParams;
  export import AICreatePromptParams = AIAPI.AICreatePromptParams;
  export import AIGenerateContentParams = AIAPI.AIGenerateContentParams;
  export import AIGenerateImageParams = AIAPI.AIGenerateImageParams;
  export import AIStreamingInitParams = AIAPI.AIStreamingInitParams;
  export import Tenants = TenantsAPI.Tenants;
}
