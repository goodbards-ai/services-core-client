// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as AssetsAPI from 'clun/resources/generative-ai/assets';

export class GenerativeAI extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
}

export namespace GenerativeAI {
  export import Assets = AssetsAPI.Assets;
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetUpdateParams = AssetsAPI.AssetUpdateParams;
}
