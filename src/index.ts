// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from 'clun/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['CLUN_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CLUN_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Clun API. */
export class Clun extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Clun API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['CLUN_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['CLUN_BASE_URL'] ?? https://localhost:8080/test-api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CLUN_BASE_URL'),
    bearerToken = Core.readEnv('CLUN_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.ClunError(
        "The CLUN_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Clun client with an bearerToken option, like new Clun({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://localhost:8080/test-api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.bearerToken = bearerToken;
  }

  cases: API.Cases = new API.Cases(this);
  iam: API.Iam = new API.Iam(this);
  infra: API.Infra = new API.Infra(this);
  infraTenants: API.InfraTenants = new API.InfraTenants(this);
  integrations: API.Integrations = new API.Integrations(this);
  models: API.Models = new API.Models(this);
  processes: API.Processes = new API.Processes(this);
  prompts: API.Prompts = new API.Prompts(this);
  public: API.Public = new API.Public(this);
  ref: API.Ref = new API.Ref(this);
  v1: API.V1 = new API.V1(this);
  ai: API.AI = new API.AI(this);
  assets: API.Assets = new API.Assets(this);
  generativeAI: API.GenerativeAI = new API.GenerativeAI(this);
  caseManagement: API.CaseManagement = new API.CaseManagement(this);
  tenantId: API.TenantID = new API.TenantID(this);
  cdp: API.Cdp = new API.Cdp(this);
  chats: API.Chats = new API.Chats(this);
  company: API.Company = new API.Company(this);
  documents: API.Documents = new API.Documents(this);
  folders: API.Folders = new API.Folders(this);
  pressRelease: API.PressRelease = new API.PressRelease(this);
  tenant: API.Tenant = new API.Tenant(this);
  processEngine: API.ProcessEngine = new API.ProcessEngine(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Clun = this;

  static ClunError = Errors.ClunError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  ClunError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Clun {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Cases = API.Cases;

  export import Iam = API.Iam;
  export import IamValidRegistrationParams = API.IamValidRegistrationParams;
  export import IamValidateEmailParams = API.IamValidateEmailParams;

  export import Infra = API.Infra;

  export import InfraTenants = API.InfraTenants;

  export import Integrations = API.Integrations;
  export import IntegrationUpdateParams = API.IntegrationUpdateParams;
  export import IntegrationOperationNameCreateParams = API.IntegrationOperationNameCreateParams;

  export import Models = API.Models;
  export import ModelListResponse = API.ModelListResponse;
  export import ModelListParams = API.ModelListParams;

  export import Processes = API.Processes;

  export import Prompts = API.Prompts;

  export import Public = API.Public;

  export import Ref = API.Ref;
  export import RefRetrieveResponse = API.RefRetrieveResponse;

  export import V1 = API.V1;

  export import AI = API.AI;
  export import AIVectorizeParams = API.AIVectorizeParams;

  export import Assets = API.Assets;
  export import AssetListParams = API.AssetListParams;

  export import GenerativeAI = API.GenerativeAI;

  export import CaseManagement = API.CaseManagement;

  export import TenantID = API.TenantID;

  export import Cdp = API.Cdp;

  export import Chats = API.Chats;
  export import ChatCreateParams = API.ChatCreateParams;
  export import ChatAssistantParams = API.ChatAssistantParams;
  export import ChatRenameParams = API.ChatRenameParams;

  export import Company = API.Company;
  export import CompanyUpdateParams = API.CompanyUpdateParams;

  export import Documents = API.Documents;
  export import DocumentCreateParams = API.DocumentCreateParams;

  export import Folders = API.Folders;

  export import PressRelease = API.PressRelease;

  export import Tenant = API.Tenant;
  export import TenantRenameParams = API.TenantRenameParams;

  export import ProcessEngine = API.ProcessEngine;
}

export default Clun;
