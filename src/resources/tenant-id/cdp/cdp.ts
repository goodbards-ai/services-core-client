// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'clun/resource';
import * as CampaignInteractionsAPI from 'clun/resources/tenant-id/cdp/campaign-interactions';
import * as CheckTableAPI from 'clun/resources/tenant-id/cdp/check-table';
import * as CompaniesAPI from 'clun/resources/tenant-id/cdp/companies';
import * as CustomerAPI from 'clun/resources/tenant-id/cdp/customer';
import * as CustomerJourneysAPI from 'clun/resources/tenant-id/cdp/customer-journeys';
import * as CustomersAPI from 'clun/resources/tenant-id/cdp/customers';
import * as MarketingCampaignsAPI from 'clun/resources/tenant-id/cdp/marketing-campaigns';

export class Cdp extends APIResource {
  campaignInteractions: CampaignInteractionsAPI.CampaignInteractions =
    new CampaignInteractionsAPI.CampaignInteractions(this._client);
  checkTable: CheckTableAPI.CheckTable = new CheckTableAPI.CheckTable(this._client);
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  customer: CustomerAPI.Customer = new CustomerAPI.Customer(this._client);
  customerJourneys: CustomerJourneysAPI.CustomerJourneys = new CustomerJourneysAPI.CustomerJourneys(
    this._client,
  );
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  marketingCampaigns: MarketingCampaignsAPI.MarketingCampaigns = new MarketingCampaignsAPI.MarketingCampaigns(
    this._client,
  );
}

export namespace Cdp {
  export import CampaignInteractions = CampaignInteractionsAPI.CampaignInteractions;
  export import CheckTable = CheckTableAPI.CheckTable;
  export import Companies = CompaniesAPI.Companies;
  export import Customer = CustomerAPI.Customer;
  export import CustomerCreateParams = CustomerAPI.CustomerCreateParams;
  export import CustomerJourneys = CustomerJourneysAPI.CustomerJourneys;
  export import Customers = CustomersAPI.Customers;
  export import MarketingCampaigns = MarketingCampaignsAPI.MarketingCampaigns;
}
