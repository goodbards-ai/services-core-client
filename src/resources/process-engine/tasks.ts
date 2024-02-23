// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as TasksAPI from 'clun/resources/process-engine/tasks';

export class Tasks extends APIResource {
  /**
   * Get task details.
   */
  retrieve(tenantId: string, taskId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/tasks/${taskId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update task variable and status
   */
  update(
    tenantId: string,
    taskId: string,
    body: TaskUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/v1/${tenantId}/tasks/${taskId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Complete a Task
   */
  complete(
    tenantId: string,
    taskId: string,
    body: TaskCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/${tenantId}/tasks/${taskId}/complete`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Attach a document to a task
   */
  linkDocument(
    tenantId: string,
    taskId: string,
    body?: TaskLinkDocumentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  linkDocument(tenantId: string, taskId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  linkDocument(
    tenantId: string,
    taskId: string,
    body: TaskLinkDocumentParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.linkDocument(tenantId, taskId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/tasks/${taskId}/linkDocument`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Lock task and get current details
   */
  lock(tenantId: string, taskId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/${tenantId}/tasks/${taskId}/lock`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Unlock task without modifications (need to be lock)
   */
  unlock(tenantId: string, taskId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/${tenantId}/tasks/${taskId}/unlock`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type TaskUpdateParams = Array<TaskUpdateParams.Body>;

export namespace TaskUpdateParams {
  export interface Body {
    location?: string;

    multivalued?: boolean;

    name?: string;

    parameterDefinitionUid?: string;

    permission?: string;

    required?: boolean;

    type?: string;

    uid?: string;

    value?: string;
  }
}

export type TaskCompleteParams = Array<TaskCompleteParams.Body>;

export namespace TaskCompleteParams {
  export interface Body {
    location?: string;

    multivalued?: boolean;

    name?: string;

    parameterDefinitionUid?: string;

    permission?: string;

    required?: boolean;

    type?: string;

    uid?: string;

    value?: string;
  }
}

export interface TaskLinkDocumentParams {
  documentUid?: string;

  variableUid?: string;
}

export namespace Tasks {
  export import TaskUpdateParams = TasksAPI.TaskUpdateParams;
  export import TaskCompleteParams = TasksAPI.TaskCompleteParams;
  export import TaskLinkDocumentParams = TasksAPI.TaskLinkDocumentParams;
}
