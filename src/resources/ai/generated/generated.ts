// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as ContentAPI from 'clun/resources/ai/generated/content';
import * as ImagesAPI from 'clun/resources/ai/generated/images';

export class Generated extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
}

export namespace Generated {
  export import Content = ContentAPI.Content;
  export import Images = ImagesAPI.Images;
  export import ImageListParams = ImagesAPI.ImageListParams;
}
