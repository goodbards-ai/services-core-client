// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as LoginAPI from 'clun/resources/iam/login';

export class Login extends APIResource {
  /**
   * Connect a user and list tenants the user is part of for the UI to choose from.
   * This service is public
   */
  create(body?: LoginCreateParams, options?: Core.RequestOptions): Core.APIPromise<LoginCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<LoginCreateResponse>;
  create(
    body: LoginCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoginCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/iam/login', { body, ...options });
  }
}

export interface LoginCreateResponse {
  token?: string;

  avatar?: string;

  claims?: LoginCreateResponse.Claims;

  encryptedPassword?: string;

  personalPrompt?: string;

  preferredTenant?: string;

  role?: string;

  tenants?: Array<LoginCreateResponse.Tenant>;
}

export namespace LoginCreateResponse {
  export interface Claims {
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

  export interface Tenant {
    permissions?: Array<string>;

    queues?: Array<Tenant.Queue>;

    roles?: Array<string>;

    tenantDescription?: string;

    tenantName?: string;

    tenantUid?: string;
  }

  export namespace Tenant {
    export interface Queue {
      id?: string;

      label?: string;

      pendingTaskCount?: number;
    }
  }
}

export interface LoginCreateParams {
  email?: string;

  password?: string;
}

export namespace Login {
  export import LoginCreateResponse = LoginAPI.LoginCreateResponse;
  export import LoginCreateParams = LoginAPI.LoginCreateParams;
}
