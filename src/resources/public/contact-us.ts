// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import { isRequestOptions } from 'clun/core';
import * as ContactUsAPI from 'clun/resources/public/contact-us';

export class ContactUs extends APIResource {
  /**
   * Submit the contact us form
   */
  create(body?: ContactUsCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    body: ContactUsCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/v1/public/contact-us', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ContactUsCreateParams {
  budget?: string;

  companyName?: string;

  email?: string;

  employees?: string;

  message?: string;

  name?: string;

  phoneNumber?: string;
}

export namespace ContactUs {
  export import ContactUsCreateParams = ContactUsAPI.ContactUsCreateParams;
}
