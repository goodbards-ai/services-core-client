// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as IntegrationsAPI from 'clun/resources/integrations/integrations';
import * as CategoriesAPI from 'clun/resources/integrations/categories';
import * as DefinitionsAPI from 'clun/resources/integrations/definitions';

export class Integrations extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  definitions: DefinitionsAPI.Definitions = new DefinitionsAPI.Definitions(this._client);

  /**
   * Show details of an integration on a tenant
   */
  retrieve(tenantId: string, integrationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/integrations/${integrationId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update configuration for a connector
   */
  update(
    tenantId: string,
    integrationId: string,
    body: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/v1/${tenantId}/integrations/${integrationId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Show deployed connectors on a tenant with related configuration
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/integrations`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Show expected parameters for an operation on a connector
   */
  operationName(
    tenantId: string,
    integrationId: string,
    operationName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/integrations/${integrationId}/${operationName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Execute an operation on a connector
   */
  operationNameCreate(
    tenantId: string,
    integrationId: string,
    operationName: string,
    body: IntegrationOperationNameCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/${tenantId}/integrations/${integrationId}/${operationName}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type IntegrationUpdateParams = Record<string, unknown>;

export type IntegrationOperationNameCreateParams = Record<string, unknown>;

export namespace Integrations {
  export import IntegrationUpdateParams = IntegrationsAPI.IntegrationUpdateParams;
  export import IntegrationOperationNameCreateParams = IntegrationsAPI.IntegrationOperationNameCreateParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import Definitions = DefinitionsAPI.Definitions;
  export import DefinitionRetrieveResponse = DefinitionsAPI.DefinitionRetrieveResponse;
  export import DefinitionListResponse = DefinitionsAPI.DefinitionListResponse;
  export import DefinitionListParams = DefinitionsAPI.DefinitionListParams;
}
