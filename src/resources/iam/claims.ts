// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as ClaimsAPI from 'clun/resources/iam/claims';

export class Claims extends APIResource {
  /**
   * This function read the token in Authorization header and validate it, parse it
   * and display claims in the output. (ADMIN Role Needed)
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ClaimRetrieveResponse> {
    return this._client.get('/v1/iam/claims', options);
  }
}

export interface ClaimRetrieveResponse {
  createdTime?: number;

  email?: string;

  expirationSeconds?: number;

  firstName?: string;

  groups?: Array<string>;

  issuer?: string;

  jti?: string;

  language?: string;

  lastName?: string;

  preferredUsername?: string;

  subject?: string;

  theme?: string;

  upn?: string;

  uuid?: string;
}

export namespace Claims {
  export import ClaimRetrieveResponse = ClaimsAPI.ClaimRetrieveResponse;
}
