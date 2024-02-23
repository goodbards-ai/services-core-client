// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as IamAPI from 'clun/resources/iam/iam';
import * as ClaimsAPI from 'clun/resources/iam/claims';
import * as LoginAPI from 'clun/resources/iam/login';
import * as RegisterAPI from 'clun/resources/iam/register';
import * as UsersAPI from 'clun/resources/iam/users';

export class Iam extends APIResource {
  claims: ClaimsAPI.Claims = new ClaimsAPI.Claims(this._client);
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  validRegistration(
    params?: IamValidRegistrationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  validRegistration(options?: Core.RequestOptions): Core.APIPromise<void>;
  validRegistration(
    params: IamValidRegistrationParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.validRegistration({}, params);
    }
    const { user } = params;
    return this._client.post('/v1/iam/valid-registration', {
      query: { user },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  validateEmail(params?: IamValidateEmailParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  validateEmail(options?: Core.RequestOptions): Core.APIPromise<void>;
  validateEmail(
    params: IamValidateEmailParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.validateEmail({}, params);
    }
    const { code, user } = params;
    return this._client.post('/v1/iam/validate-email', {
      query: { code, user },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface IamValidRegistrationParams {
  user?: string;
}

export interface IamValidateEmailParams {
  code?: string;

  user?: string;
}

export namespace Iam {
  export import IamValidRegistrationParams = IamAPI.IamValidRegistrationParams;
  export import IamValidateEmailParams = IamAPI.IamValidateEmailParams;
  export import Claims = ClaimsAPI.Claims;
  export import ClaimRetrieveResponse = ClaimsAPI.ClaimRetrieveResponse;
  export import Login = LoginAPI.Login;
  export import LoginCreateResponse = LoginAPI.LoginCreateResponse;
  export import LoginCreateParams = LoginAPI.LoginCreateParams;
  export import Register = RegisterAPI.Register;
  export import RegisterCreateParams = RegisterAPI.RegisterCreateParams;
  export import Users = UsersAPI.Users;
  export import UserRetrieveResponse = UsersAPI.UserRetrieveResponse;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserUpdateAccountSettingsParams = UsersAPI.UserUpdateAccountSettingsParams;
  export import UserUpdateAvatarParams = UsersAPI.UserUpdateAvatarParams;
  export import UserUpdatePasswordParams = UsersAPI.UserUpdatePasswordParams;
}
