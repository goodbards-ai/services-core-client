// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as PressReleaseAPI from 'clun/resources/v1/tenants/press-release';
import * as ProductsAPI from 'clun/resources/v1/tenants/products';
import * as ProcessesAPI from 'clun/resources/v1/tenants/processes/processes';

export class Tenants extends APIResource {
  pressRelease: PressReleaseAPI.PressRelease = new PressReleaseAPI.PressRelease(this._client);
  processes: ProcessesAPI.Processes = new ProcessesAPI.Processes(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
}

export namespace Tenants {
  export import PressRelease = PressReleaseAPI.PressRelease;
  export import PressReleaseUpdateParams = PressReleaseAPI.PressReleaseUpdateParams;
  export import Processes = ProcessesAPI.Processes;
  export import Products = ProductsAPI.Products;
  export import ProductCreateParams = ProductsAPI.ProductCreateParams;
}
