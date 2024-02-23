// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as EventsAPI from 'clun/resources/infra-tenants/events';

export class InfraTenants extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

export namespace InfraTenants {
  export import Events = EventsAPI.Events;
  export import EventCreateParams = EventsAPI.EventCreateParams;
}
