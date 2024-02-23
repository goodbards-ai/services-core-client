// File generated from our OpenAPI spec by Stainless.

import * as Core from 'clun/core';
import { APIResource } from 'clun/resource';
import * as ObjectiveOptimizationsAPI from 'clun/resources/cdp/objective-optimizations';
import * as OrderDetailsAPI from 'clun/resources/cdp/order-details';
import * as ProductsAPI from 'clun/resources/cdp/products';
import * as SurvivalAnalysisAPI from 'clun/resources/cdp/survival-analysis';

export class Cdp extends APIResource {
  objectiveOptimizations: ObjectiveOptimizationsAPI.ObjectiveOptimizations =
    new ObjectiveOptimizationsAPI.ObjectiveOptimizations(this._client);
  orderDetails: OrderDetailsAPI.OrderDetails = new OrderDetailsAPI.OrderDetails(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  survivalAnalysis: SurvivalAnalysisAPI.SurvivalAnalysis = new SurvivalAnalysisAPI.SurvivalAnalysis(
    this._client,
  );

  /**
   * Read csv data from a document
   */
  read(tenantId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/${tenantId}/cdp/read/${docId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export namespace Cdp {
  export import ObjectiveOptimizations = ObjectiveOptimizationsAPI.ObjectiveOptimizations;
  export import OrderDetails = OrderDetailsAPI.OrderDetails;
  export import Products = ProductsAPI.Products;
  export import SurvivalAnalysis = SurvivalAnalysisAPI.SurvivalAnalysis;
}
