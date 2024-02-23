// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ChatsAPI from 'clun/resources/chats/chats';
import * as MessagesAPI from 'clun/resources/chats/messages';

export class Chats extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new Chat Session
   */
  create(tenantId: string, body?: ChatCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    tenantId: string,
    body: ChatCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create(tenantId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/chats`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Find a unique chat by Id
   */
  retrieve(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/chats/${chatId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List chats for current tenant
   */
  list(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/chats`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete a message
   */
  delete(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/${tenantId}/chats/${chatId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Interact with Ai Assistant
   */
  assistant(
    tenantId: string,
    chatId: string,
    body?: ChatAssistantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  assistant(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  assistant(
    tenantId: string,
    chatId: string,
    body: ChatAssistantParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.assistant(tenantId, chatId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/chats/${chatId}/assistant`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Create a new message in a conversation
   */
  rename(
    tenantId: string,
    chatId: string,
    body?: ChatRenameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  rename(tenantId: string, chatId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  rename(
    tenantId: string,
    chatId: string,
    body: ChatRenameParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.rename(tenantId, chatId, {}, body);
    }
    return this._client.post(`/v1/${tenantId}/chats/${chatId}/rename`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ChatCreateParams {
  chatUid?: string;

  description?: string;

  promptId?: string;

  startingDate?: string;

  tenantUid?: string;
}

export interface ChatAssistantParams {
  llm?: string;

  maxRetries?: number;

  maxTokens?: number;

  messages?: Array<ChatAssistantParams.Message>;

  modelName?: string;

  promptId?: string;

  temperature?: number;

  timeout?: number;

  topK?: number;

  topP?: number;

  userId?: string;
}

export namespace ChatAssistantParams {
  export interface Message {
    message?: string;

    type?: 'system' | 'user' | 'ai';
  }
}

export interface ChatRenameParams {
  newName?: string;
}

export namespace Chats {
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
  export import ChatAssistantParams = ChatsAPI.ChatAssistantParams;
  export import ChatRenameParams = ChatsAPI.ChatRenameParams;
  export import Messages = MessagesAPI.Messages;
  export import MessageCreateParams = MessagesAPI.MessageCreateParams;
}
