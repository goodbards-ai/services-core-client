// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as PromptsAPI from 'clun/resources/tenant/prompts';

export class Prompts extends APIResource {
  /**
   * Find a prompt definition by id
   */
  retrieve(
    tenantId: string,
    promptDefinitionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/prompts/${promptDefinitionId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List prompts for a tenant
   */
  list(tenantId: string, query?: PromptListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    tenantId: string,
    query: PromptListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(tenantId, {}, query);
    }
    return this._client.get(`/v1/${tenantId}/prompts`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Find a prompt definition by id
   */
  copy(
    tenantId: string,
    promptDefinitionId: string,
    body?: PromptCopyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  copy(tenantId: string, promptDefinitionId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  copy(
    tenantId: string,
    promptDefinitionId: string,
    body: PromptCopyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.copy(tenantId, promptDefinitionId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/prompts/${promptDefinitionId}/copy`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Find a prompt definition by id
   */
  deploy(tenantId: string, promptDefinitionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/${tenantId}/prompts/${promptDefinitionId}/deploy`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PromptListParams {
  category?: string;
}

export interface PromptCopyParams {
  newName?: string;

  promptId?: string;
}

export namespace Prompts {
  export import PromptListParams = PromptsAPI.PromptListParams;
  export import PromptCopyParams = PromptsAPI.PromptCopyParams;
}
