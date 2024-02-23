// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as TasksAPI from 'clun/resources/process-engine/tasks';

export class ProcessEngine extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
}

export namespace ProcessEngine {
  export import Tasks = TasksAPI.Tasks;
  export import TaskUpdateParams = TasksAPI.TaskUpdateParams;
  export import TaskCompleteParams = TasksAPI.TaskCompleteParams;
  export import TaskLinkDocumentParams = TasksAPI.TaskLinkDocumentParams;
}
