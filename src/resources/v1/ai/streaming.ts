// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as StreamingAPI from 'clun/resources/v1/ai/streaming';

export class Streaming extends APIResource {
  retrieve(tenantId: string, sessionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/v1/${tenantId}/ai/generate-content/streaming/${sessionId}`, options);
  }
}

export type StreamingRetrieveResponse = unknown;

export namespace Streaming {
  export import StreamingRetrieveResponse = StreamingAPI.StreamingRetrieveResponse;
}
