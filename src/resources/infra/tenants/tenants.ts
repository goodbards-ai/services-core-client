// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as TenantsAPI from 'clun/resources/infra/tenants/tenants';
import * as EventsAPI from 'clun/resources/infra/tenants/events';

export class Tenants extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  /**
   * Retrieving all the available tenants.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TenantListResponse> {
    return this._client.get('/v1/infra/tenants', options);
  }
}

export type TenantListResponse = Array<unknown>;

export namespace Tenants {
  export import TenantListResponse = TenantsAPI.TenantListResponse;
  export import Events = EventsAPI.Events;
  export import EventListParams = EventsAPI.EventListParams;
}
