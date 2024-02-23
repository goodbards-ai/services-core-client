// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';

export class Tasks extends APIResource {
  /**
   * List tasks in a queue
   */
  list(tenantId: string, queueId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/queues/${queueId}/tasks`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
