// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as EventsAPI from 'clun/resources/infra/tenants/events';

export class Events extends APIResource {
  /**
   * List events for a tenants
   */
  list(tenantId: string, query?: EventListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    tenantId: string,
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list(tenantId, {}, query);
    }
    return this._client.get(`/v1/infra/tenants/${tenantId}/events`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EventListParams {
  /**
   * Optional max number of events
   */
  limit?: number;
}

export namespace Events {
  export import EventListParams = EventsAPI.EventListParams;
}
