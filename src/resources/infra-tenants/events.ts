// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as EventsAPI from 'clun/resources/infra-tenants/events';

export class Events extends APIResource {
  /**
   * Push a new event
   */
  create(tenantId: string, body?: EventCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: EventCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/infra/tenants/${tenantId}/events`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EventCreateParams {
  eventDate?: string;

  eventDetails?: string;

  eventType?: string;

  owner?: string;

  tenantUid?: string;

  uid?: string;
}

export namespace Events {
  export import EventCreateParams = EventsAPI.EventCreateParams;
}
