// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as AssetsAPI from 'clun/resources/generative-ai/assets';

export class Assets extends APIResource {
  /**
   * Create a new document
   */
  create(tenantId: string, body?: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: AssetCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/assets`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Find an Asset from its id
   */
  retrieve(tenantId: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/assets/${assetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  update(
    tenantId: string,
    assetId: string,
    body?: AssetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(tenantId: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    tenantId: string,
    assetId: string,
    body: AssetUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(tenantId, assetId, {}, body);
    }
    return this._client.put(`/v1/${tenantId}/assets/${assetId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  delete(tenantId: string, assetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/assets/${assetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AssetCreateParams {
  id?: string;

  associatedRequests?: Array<AssetCreateParams.AssociatedRequest>;

  content?: string;

  createdBy?: string;

  createdDate?: string;

  lastModifiedBy?: string;

  modifiedDate?: string;

  title?: string;

  versionNumber?: number;
}

export namespace AssetCreateParams {
  export interface AssociatedRequest {
    content?: string;

    createdBy?: string;

    createdDate?: string;

    inputTokens?: number;

    model?: string;

    outputToken?: number;

    prompt?: string;

    promptCategory?: string;

    promptDefinitionId?: string;

    promptName?: string;

    provider?: string;

    responseTime?: number;

    status?: string;

    tenantUid?: string;

    title?: string;

    totalTokens?: number;

    uid?: string;
  }
}

export interface AssetUpdateParams {
  id?: string;

  associatedRequests?: Array<AssetUpdateParams.AssociatedRequest>;

  content?: string;

  createdBy?: string;

  createdDate?: string;

  lastModifiedBy?: string;

  modifiedDate?: string;

  title?: string;

  versionNumber?: number;
}

export namespace AssetUpdateParams {
  export interface AssociatedRequest {
    content?: string;

    createdBy?: string;

    createdDate?: string;

    inputTokens?: number;

    model?: string;

    outputToken?: number;

    prompt?: string;

    promptCategory?: string;

    promptDefinitionId?: string;

    promptName?: string;

    provider?: string;

    responseTime?: number;

    status?: string;

    tenantUid?: string;

    title?: string;

    totalTokens?: number;

    uid?: string;
  }
}

export namespace Assets {
  export import AssetCreateParams = AssetsAPI.AssetCreateParams;
  export import AssetUpdateParams = AssetsAPI.AssetUpdateParams;
}
