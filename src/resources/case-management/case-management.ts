// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as CasesAPI from 'clun/resources/case-management/cases';

export class CaseManagement extends APIResource {
  cases: CasesAPI.Cases = new CasesAPI.Cases(this._client);
}

export namespace CaseManagement {
  export import Cases = CasesAPI.Cases;
  export import CaseCreateResponse = CasesAPI.CaseCreateResponse;
  export import CaseCloseResponse = CasesAPI.CaseCloseResponse;
  export import CaseCreateParams = CasesAPI.CaseCreateParams;
  export import CaseLinkDocumentParams = CasesAPI.CaseLinkDocumentParams;
}
