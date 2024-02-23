// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as TenantAPI from 'clun/resources/tenant/tenant';
import * as ProductsAPI from 'clun/resources/tenant/products';
import * as PromptsAPI from 'clun/resources/tenant/prompts';
import * as QueuesAPI from 'clun/resources/tenant/queues/queues';

export class Tenant extends APIResource {
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  prompts: PromptsAPI.Prompts = new PromptsAPI.Prompts(this._client);
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);

  rename(tenantId: string, body?: TenantRenameParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  rename(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  rename(
    tenantId: string,
    body: TenantRenameParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.rename(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/rename`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface TenantRenameParams {
  newName?: string;
}

export namespace Tenant {
  export import TenantRenameParams = TenantAPI.TenantRenameParams;
  export import Products = ProductsAPI.Products;
  export import ProductUpdateParams = ProductsAPI.ProductUpdateParams;
  export import Prompts = PromptsAPI.Prompts;
  export import PromptListParams = PromptsAPI.PromptListParams;
  export import PromptCopyParams = PromptsAPI.PromptCopyParams;
  export import Queues = QueuesAPI.Queues;
}
