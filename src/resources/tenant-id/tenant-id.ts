// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as CasesAPI from 'clun/resources/tenant-id/cases/cases';
import * as CdpAPI from 'clun/resources/tenant-id/cdp/cdp';

export class TenantID extends APIResource {
  cases: CasesAPI.Cases = new CasesAPI.Cases(this._client);
  cdp: CdpAPI.Cdp = new CdpAPI.Cdp(this._client);
}

export namespace TenantID {
  export import Cases = CasesAPI.Cases;
  export import Cdp = CdpAPI.Cdp;
}
