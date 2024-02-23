// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as UsersAPI from 'clun/resources/iam/users';

export class Users extends APIResource {
  /**
   * Load context for a user from its uuid or email.
   */
  retrieve(user: string, options?: Core.RequestOptions): Core.APIPromise<UserRetrieveResponse> {
    return this._client.get(`/v1/iam/users/${user}`, options);
  }

  /**
   * Retrieving all users in a tenant.
   */
  list(tenantid: string, options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get(`/v1/iam/${tenantid}/users`, options);
  }

  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/iam/users/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Change user global settings
   */
  updateAccountSettings(
    userId: string,
    body?: UserUpdateAccountSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  updateAccountSettings(userId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  updateAccountSettings(
    userId: string,
    body: UserUpdateAccountSettingsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.updateAccountSettings(userId, {}, body);
    }
    return this._client.post(`/v1/iam/users/${userId}/update-account-settings`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Change user avatar
   */
  updateAvatar(
    userId: string,
    body?: UserUpdateAvatarParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  updateAvatar(userId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  updateAvatar(
    userId: string,
    body: UserUpdateAvatarParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.updateAvatar(userId, {}, body);
    }
    return this._client.post(`/v1/iam/users/${userId}/update-avatar`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Change use passord
   */
  updatePassword(
    userId: string,
    body?: UserUpdatePasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  updatePassword(userId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  updatePassword(
    userId: string,
    body: UserUpdatePasswordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.updatePassword(userId, {}, body);
    }
    return this._client.post(`/v1/iam/users/${userId}/update-password`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface UserRetrieveResponse {
  token?: string;

  avatar?: string;

  claims?: UserRetrieveResponse.Claims;

  encryptedPassword?: string;

  personalPrompt?: string;

  preferredTenant?: string;

  role?: string;

  tenants?: Array<UserRetrieveResponse.Tenant>;
}

export namespace UserRetrieveResponse {
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

export type UserListResponse = Array<unknown>;

export interface UserUpdateAccountSettingsParams {
  country?: string;

  email?: string;

  firstname?: string;

  language?: string;

  lastname?: string;

  personalPrompt?: string;

  preferredTenant?: string;

  role?: string;

  theme?: string;
}

export interface UserUpdateAvatarParams {
  avatar?: string;
}

export interface UserUpdatePasswordParams {
  newPassword?: string;

  oldPassword?: string;
}

export namespace Users {
  export import UserRetrieveResponse = UsersAPI.UserRetrieveResponse;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserUpdateAccountSettingsParams = UsersAPI.UserUpdateAccountSettingsParams;
  export import UserUpdateAvatarParams = UsersAPI.UserUpdateAvatarParams;
  export import UserUpdatePasswordParams = UsersAPI.UserUpdatePasswordParams;
}
