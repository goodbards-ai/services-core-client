// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as TenantsAPI from 'clun/resources/infra/tenants/tenants';

export class Infra extends APIResource {
  tenants: TenantsAPI.Tenants = new TenantsAPI.Tenants(this._client);
}

export namespace Infra {
  export import Tenants = TenantsAPI.Tenants;
  export import TenantListResponse = TenantsAPI.TenantListResponse;
}
