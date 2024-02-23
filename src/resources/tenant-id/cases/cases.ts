// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as ProcessesAPI from 'clun/resources/tenant-id/cases/processes';

export class Cases extends APIResource {
  processes: ProcessesAPI.Processes = new ProcessesAPI.Processes(this._client);
}

export namespace Cases {
  export import Processes = ProcessesAPI.Processes;
  export import ProcessCreateResponse = ProcessesAPI.ProcessCreateResponse;
  export import ProcessCreateParams = ProcessesAPI.ProcessCreateParams;
}
