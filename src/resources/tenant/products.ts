// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ProductsAPI from 'clun/resources/tenant/products';

export class Products extends APIResource {
  update(
    tenantId: string,
    productId: string,
    body?: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(tenantId: string, productId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    tenantId: string,
    productId: string,
    body: ProductUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(tenantId, productId, {}, body);
    }
    return this._client.put(`/v1/${tenantId}/products/${productId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  remove(tenantId: string, productId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/products/${productId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ProductUpdateParams {
  description?: string;

  keywords?: Array<string>;

  name?: string;

  uid?: string;

  website?: string;
}

export namespace Products {
  export import ProductUpdateParams = ProductsAPI.ProductUpdateParams;
}
