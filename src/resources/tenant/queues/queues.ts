// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as TasksAPI from 'clun/resources/tenant/queues/tasks';

export class Queues extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Get details for a queue
   */
  retrieve(tenantId: string, queueId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/queues/${queueId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Queues for a user
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/queues`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export namespace Queues {
  export import Tasks = TasksAPI.Tasks;
}
