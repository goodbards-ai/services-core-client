// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as DocumentsAPI from 'clun/resources/documents/documents';
import * as ScrapAPI from 'clun/resources/documents/scrap';
import { type Uploadable, multipartFormRequestOptions } from 'clun/core';

export class Documents extends APIResource {
  scrap: ScrapAPI.Scrap = new ScrapAPI.Scrap(this._client);

  /**
   * Create a new document
   */
  create(tenantId: string, body?: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: DocumentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(
      `/v1/${tenantId}/documents`,
      multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }

  /**
   * Access Document Details
   */
  retrieve(tenantId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/documents/${docId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List documents attached to a tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/documents`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update an existing document
   */
  delete(tenantId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/documents/${docId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a document
   */
  download(tenantId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/documents/${docId}/download`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DocumentCreateParams {
  documentType?: string;

  expiryDate?: string;

  file?: Uploadable;

  fileName?: string;

  folder?: string;

  marketingStage?: string;
}

export namespace Documents {
  export import DocumentCreateParams = DocumentsAPI.DocumentCreateParams;
  export import Scrap = ScrapAPI.Scrap;
  export import ScrapCreateParams = ScrapAPI.ScrapCreateParams;
}
