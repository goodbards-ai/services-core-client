// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as MessagesAPI from 'clun/resources/chats/messages';

export class Messages extends APIResource {
  /**
   * Create a new message in a conversation
   */
  create(
    tenantId: string,
    chatId: string,
    body?: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  create(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    chatId: string,
    body: MessageCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, chatId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/chats/${chatId}/messages`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Display one one conversation
   */
  retrieve(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/chats/${chatId}/messages`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete a message
   */
  delete(
    tenantId: string,
    chatId: string,
    messageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/chats/${chatId}/messages/${messageId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface MessageCreateParams {
  author?: string;

  content?: string;

  timestamp?: string;

  type?: 'system' | 'user' | 'ai';

  uid?: string;
}

export namespace Messages {
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
}
