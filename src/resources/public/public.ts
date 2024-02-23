// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as ContactUsAPI from 'clun/resources/public/contact-us';
import * as NotifyMeAPI from 'clun/resources/public/notify-me';

export class Public extends APIResource {
  contactUs: ContactUsAPI.ContactUs = new ContactUsAPI.ContactUs(this._client);
  notifyMe: NotifyMeAPI.NotifyMe = new NotifyMeAPI.NotifyMe(this._client);
}

export namespace Public {
  export import ContactUs = ContactUsAPI.ContactUs;
  export import ContactUsCreateParams = ContactUsAPI.ContactUsCreateParams;
  export import NotifyMe = NotifyMeAPI.NotifyMe;
  export import NotifyMeCreateParams = NotifyMeAPI.NotifyMeCreateParams;
}
