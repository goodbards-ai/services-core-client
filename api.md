# Cases

## Businesses

Types:

- <code><a href="./src/resources/cases/businesses.ts">BusinessRetrieveResponse</a></code>
- <code><a href="./src/resources/cases/businesses.ts">BusinessListResponse</a></code>

Methods:

- <code title="get /v1/cases/{tenant-id}/businesses/{business}">client.cases.businesses.<a href="./src/resources/cases/businesses.ts">retrieve</a>(tenantId, business) -> BusinessRetrieveResponse</code>
- <code title="get /v1/cases/businesses">client.cases.businesses.<a href="./src/resources/cases/businesses.ts">list</a>() -> BusinessListResponse</code>

## Definitions

Types:

- <code><a href="./src/resources/cases/definitions.ts">DefinitionRetrieveResponse</a></code>
- <code><a href="./src/resources/cases/definitions.ts">DefinitionListResponse</a></code>

Methods:

- <code title="get /v1/cases/definitions/{case-definition-id}">client.cases.definitions.<a href="./src/resources/cases/definitions.ts">retrieve</a>(caseDefinitionId) -> DefinitionRetrieveResponse</code>
- <code title="get /v1/cases/{tenant-id}/definitions">client.cases.definitions.<a href="./src/resources/cases/definitions.ts">list</a>(tenantId) -> DefinitionListResponse</code>

# Iam

Methods:

- <code title="post /v1/iam/valid-registration">client.iam.<a href="./src/resources/iam/iam.ts">validRegistration</a>({ ...params }) -> void</code>
- <code title="post /v1/iam/validate-email">client.iam.<a href="./src/resources/iam/iam.ts">validateEmail</a>({ ...params }) -> void</code>

## Claims

Types:

- <code><a href="./src/resources/iam/claims.ts">ClaimRetrieveResponse</a></code>

Methods:

- <code title="get /v1/iam/claims">client.iam.claims.<a href="./src/resources/iam/claims.ts">retrieve</a>() -> ClaimRetrieveResponse</code>

## Login

Types:

- <code><a href="./src/resources/iam/login.ts">LoginCreateResponse</a></code>

Methods:

- <code title="post /v1/iam/login">client.iam.login.<a href="./src/resources/iam/login.ts">create</a>({ ...params }) -> LoginCreateResponse</code>

## Register

Methods:

- <code title="post /v1/iam/register">client.iam.register.<a href="./src/resources/iam/register.ts">create</a>({ ...params }) -> void</code>

## Users

Types:

- <code><a href="./src/resources/iam/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/iam/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /v1/iam/users/{user}">client.iam.users.<a href="./src/resources/iam/users.ts">retrieve</a>(user) -> UserRetrieveResponse</code>
- <code title="get /v1/iam/{tenantid}/users">client.iam.users.<a href="./src/resources/iam/users.ts">list</a>(tenantid) -> UserListResponse</code>
- <code title="delete /v1/iam/users/{user-id}">client.iam.users.<a href="./src/resources/iam/users.ts">delete</a>(userId) -> void</code>
- <code title="post /v1/iam/users/{user-id}/update-account-settings">client.iam.users.<a href="./src/resources/iam/users.ts">updateAccountSettings</a>(userId, { ...params }) -> void</code>
- <code title="post /v1/iam/users/{user-id}/update-avatar">client.iam.users.<a href="./src/resources/iam/users.ts">updateAvatar</a>(userId, { ...params }) -> void</code>
- <code title="post /v1/iam/users/{user-id}/update-password">client.iam.users.<a href="./src/resources/iam/users.ts">updatePassword</a>(userId, { ...params }) -> void</code>

# Infra

## Tenants

Types:

- <code><a href="./src/resources/infra/tenants/tenants.ts">TenantListResponse</a></code>

Methods:

- <code title="get /v1/infra/tenants">client.infra.tenants.<a href="./src/resources/infra/tenants/tenants.ts">list</a>() -> TenantListResponse</code>

### Events

Methods:

- <code title="get /v1/infra/tenants/{tenant-id}/events">client.infra.tenants.events.<a href="./src/resources/infra/tenants/events.ts">list</a>(tenantId, { ...params }) -> void</code>

# InfraTenants

## Events

Methods:

- <code title="post /v1/infra/tenants/{tenant-id}/events">client.infraTenants.events.<a href="./src/resources/infra-tenants/events.ts">create</a>(tenantId, { ...params }) -> void</code>

# Integrations

Methods:

- <code title="get /v1/{tenant-id}/integrations/{integration-id}">client.integrations.<a href="./src/resources/integrations/integrations.ts">retrieve</a>(tenantId, integrationId) -> void</code>
- <code title="put /v1/{tenant-id}/integrations/{integration-id}">client.integrations.<a href="./src/resources/integrations/integrations.ts">update</a>(tenantId, integrationId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/integrations">client.integrations.<a href="./src/resources/integrations/integrations.ts">list</a>(tenantId) -> void</code>
- <code title="get /v1/{tenant-id}/integrations/{integration-id}/{operation-name}">client.integrations.<a href="./src/resources/integrations/integrations.ts">operationName</a>(tenantId, integrationId, operationName) -> void</code>
- <code title="post /v1/{tenant-id}/integrations/{integration-id}/{operation-name}">client.integrations.<a href="./src/resources/integrations/integrations.ts">operationNameCreate</a>(tenantId, integrationId, operationName, { ...params }) -> void</code>

## Categories

Types:

- <code><a href="./src/resources/integrations/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /v1/integrations/categories">client.integrations.categories.<a href="./src/resources/integrations/categories.ts">list</a>() -> CategoryListResponse</code>

## Definitions

Types:

- <code><a href="./src/resources/integrations/definitions.ts">DefinitionRetrieveResponse</a></code>
- <code><a href="./src/resources/integrations/definitions.ts">DefinitionListResponse</a></code>

Methods:

- <code title="get /v1/integrations/definitions/{integration-id}">client.integrations.definitions.<a href="./src/resources/integrations/definitions.ts">retrieve</a>(integrationId) -> DefinitionRetrieveResponse</code>
- <code title="get /v1/integrations/definitions">client.integrations.definitions.<a href="./src/resources/integrations/definitions.ts">list</a>({ ...params }) -> DefinitionListResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

# Processes

## Definitions

Types:

- <code><a href="./src/resources/processes/definitions.ts">DefinitionRetrieveResponse</a></code>
- <code><a href="./src/resources/processes/definitions.ts">DefinitionListResponse</a></code>

Methods:

- <code title="get /v1/processes/definitions/{process-definition-id}">client.processes.definitions.<a href="./src/resources/processes/definitions.ts">retrieve</a>(processDefinitionId) -> DefinitionRetrieveResponse</code>
- <code title="get /v1/processes/definitions">client.processes.definitions.<a href="./src/resources/processes/definitions.ts">list</a>() -> DefinitionListResponse</code>

# Prompts

## Definitions

Methods:

- <code title="get /v1/prompts/definitions/{prompt-definition-id}">client.prompts.definitions.<a href="./src/resources/prompts/definitions/definitions.ts">retrieve</a>(promptDefinitionId) -> void</code>
- <code title="put /v1/prompts/definitions/{prompt-definition-id}">client.prompts.definitions.<a href="./src/resources/prompts/definitions/definitions.ts">update</a>(promptDefinitionId, { ...params }) -> void</code>
- <code title="get /v1/prompts/definitions">client.prompts.definitions.<a href="./src/resources/prompts/definitions/definitions.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /v1/prompts/definitions/{prompt-definition-id}">client.prompts.definitions.<a href="./src/resources/prompts/definitions/definitions.ts">delete</a>(promptDefinitionId) -> void</code>

### Categories

Methods:

- <code title="get /v1/prompts/definitions/categories">client.prompts.definitions.categories.<a href="./src/resources/prompts/definitions/categories.ts">list</a>() -> void</code>

# Public

## ContactUs

Methods:

- <code title="post /v1/public/contact-us">client.public.contactUs.<a href="./src/resources/public/contact-us.ts">create</a>({ ...params }) -> void</code>

## NotifyMe

Methods:

- <code title="post /v1/public/notify-me">client.public.notifyMe.<a href="./src/resources/public/notify-me.ts">create</a>({ ...params }) -> void</code>

# Ref

Types:

- <code><a href="./src/resources/ref/ref.ts">RefRetrieveResponse</a></code>

Methods:

- <code title="get /v1/ref/{list-name}">client.ref.<a href="./src/resources/ref/ref.ts">retrieve</a>(listName) -> RefRetrieveResponse</code>

## Cities

Types:

- <code><a href="./src/resources/ref/cities.ts">CityListResponse</a></code>

Methods:

- <code title="get /v1/ref/cities">client.ref.cities.<a href="./src/resources/ref/cities.ts">list</a>({ ...params }) -> CityListResponse</code>

## Countries

Types:

- <code><a href="./src/resources/ref/countries.ts">CountryListResponse</a></code>

Methods:

- <code title="get /v1/ref/countries">client.ref.countries.<a href="./src/resources/ref/countries.ts">list</a>({ ...params }) -> CountryListResponse</code>

## Currencies

Types:

- <code><a href="./src/resources/ref/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="get /v1/ref/currencies">client.ref.currencies.<a href="./src/resources/ref/currencies.ts">list</a>() -> CurrencyListResponse</code>

## Languages

Types:

- <code><a href="./src/resources/ref/languages.ts">LanguageListResponse</a></code>

Methods:

- <code title="get /v1/ref/languages">client.ref.languages.<a href="./src/resources/ref/languages.ts">list</a>() -> LanguageListResponse</code>

# V1

## Steps

### Definitions

Types:

- <code><a href="./src/resources/v1/steps/definitions.ts">DefinitionRetrieveResponse</a></code>

Methods:

- <code title="get /v1/steps/definitions/{step-definition-id}">client.v1.steps.definitions.<a href="./src/resources/v1/steps/definitions.ts">retrieve</a>(stepDefinitionId) -> DefinitionRetrieveResponse</code>

## AI

Methods:

- <code title="post /v1/{tenant-id}/ai/create-chat-completion">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">createChatCompletion</a>(tenantId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/ai/create-completion">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">createCompletion</a>({ ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/ai/create-prompt">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">createPrompt</a>(tenantId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/ai/generate-content">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">generateContent</a>(tenantId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/ai/generate-image">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">generateImage</a>(tenantId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/ai/generate-content/streaming-init">client.v1.ai.<a href="./src/resources/v1/ai/ai.ts">streamingInit</a>(tenantId, { ...params }) -> void</code>

### Streaming

Types:

- <code><a href="./src/resources/v1/ai/streaming.ts">StreamingRetrieveResponse</a></code>

Methods:

- <code title="get /v1/{tenant-id}/ai/generate-content/streaming/{sessionId}">client.v1.ai.streaming.<a href="./src/resources/v1/ai/streaming.ts">retrieve</a>(tenantId, sessionId) -> unknown</code>

### GeneratedContent

Methods:

- <code title="get /v1/{tenant-id}/ai/generated/content/{content-id}">client.v1.ai.generatedContent.<a href="./src/resources/v1/ai/generated-content.ts">retrieve</a>(tenantId, contentId) -> void</code>
- <code title="get /v1/{tenant-id}/ai/generated/content">client.v1.ai.generatedContent.<a href="./src/resources/v1/ai/generated-content.ts">list</a>(tenantId) -> void</code>

## Tenants

### PressRelease

Methods:

- <code title="put /v1/{tenant-id}/press-release">client.v1.tenants.pressRelease.<a href="./src/resources/v1/tenants/press-release.ts">update</a>(tenantId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/press-release">client.v1.tenants.pressRelease.<a href="./src/resources/v1/tenants/press-release.ts">delete</a>(tenantId) -> void</code>

### Processes

Methods:

- <code title="get /v1/{tenant-id}/processes/{process-id}">client.v1.tenants.processes.<a href="./src/resources/v1/tenants/processes/processes.ts">retrieve</a>(tenantId, processId) -> void</code>
- <code title="get /v1/{tenant-id}/processes">client.v1.tenants.processes.<a href="./src/resources/v1/tenants/processes/processes.ts">list</a>(tenantId) -> void</code>

#### Audit

Methods:

- <code title="get /v1/{tenant-id}/processes/{process-id}/audit">client.v1.tenants.processes.audit.<a href="./src/resources/v1/tenants/processes/audit.ts">retrieve</a>(tenantId, processId) -> void</code>

#### Steps

Methods:

- <code title="get /v1/{tenant-id}/processes/{process-id}/steps">client.v1.tenants.processes.steps.<a href="./src/resources/v1/tenants/processes/steps.ts">list</a>(tenantId, processId) -> void</code>

#### Variables

Methods:

- <code title="get /v1/{tenant-id}/processes/{process-id}/variables">client.v1.tenants.processes.variables.<a href="./src/resources/v1/tenants/processes/variables.ts">list</a>(tenantId, processId) -> void</code>

### Products

Methods:

- <code title="post /v1/{tenant-id}/products">client.v1.tenants.products.<a href="./src/resources/v1/tenants/products.ts">create</a>(tenantId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/products/{product-id}">client.v1.tenants.products.<a href="./src/resources/v1/tenants/products.ts">retrieve</a>(tenantId, productId) -> void</code>
- <code title="get /v1/{tenant-id}/products">client.v1.tenants.products.<a href="./src/resources/v1/tenants/products.ts">list</a>(tenantId) -> void</code>

# AI

Methods:

- <code title="post /v1/{tenant-id}/ai/vectorize">client.ai.<a href="./src/resources/ai/ai.ts">vectorize</a>({ ...params }) -> void</code>

## Generated

### Content

Methods:

- <code title="delete /v1/{tenant-id}/ai/generated/content/{content-id}">client.ai.generated.content.<a href="./src/resources/ai/generated/content.ts">delete</a>(tenantId, contentId) -> void</code>

### Images

Methods:

- <code title="get /v1/{tenant-id}/ai/generated/images/{image-id}">client.ai.generated.images.<a href="./src/resources/ai/generated/images.ts">retrieve</a>(tenantId, imageId) -> void</code>
- <code title="get /v1/{tenant-id}/ai/generated/images">client.ai.generated.images.<a href="./src/resources/ai/generated/images.ts">list</a>(tenantId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/ai/generated/images/{image-id}">client.ai.generated.images.<a href="./src/resources/ai/generated/images.ts">delete</a>(tenantId, imageId) -> void</code>
- <code title="get /v1/{tenant-id}/ai/generated/images/{image-id}/download">client.ai.generated.images.<a href="./src/resources/ai/generated/images.ts">download</a>(tenantId, imageId) -> void</code>

## IndexDocument

Methods:

- <code title="post /v1/{tenant-id}/ai/index-document/{uid}">client.ai.indexDocument.<a href="./src/resources/ai/index-document.ts">create</a>(tenantId, uid, { ...params }) -> void</code>

## Models

Methods:

- <code title="get /v1/{tenant-id}/ai/models">client.ai.models.<a href="./src/resources/ai/models.ts">list</a>(tenantId, { ...params }) -> void</code>

## UnindexDocument

Methods:

- <code title="post /v1/{tenant-id}/ai/unindex-document/{uid}">client.ai.unindexDocument.<a href="./src/resources/ai/unindex-document.ts">create</a>(tenantId, uid, { ...params }) -> void</code>

# Assets

Methods:

- <code title="get /v1/{tenant-id}/assets">client.assets.<a href="./src/resources/assets.ts">list</a>(tenantId, { ...params }) -> void</code>

# GenerativeAI

## Assets

Methods:

- <code title="post /v1/{tenant-id}/assets">client.generativeAI.assets.<a href="./src/resources/generative-ai/assets.ts">create</a>(tenantId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/assets/{asset-id}">client.generativeAI.assets.<a href="./src/resources/generative-ai/assets.ts">retrieve</a>(tenantId, assetId) -> void</code>
- <code title="put /v1/{tenant-id}/assets/{asset-id}">client.generativeAI.assets.<a href="./src/resources/generative-ai/assets.ts">update</a>(tenantId, assetId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/assets/{asset-id}">client.generativeAI.assets.<a href="./src/resources/generative-ai/assets.ts">delete</a>(tenantId, assetId) -> void</code>

# CaseManagement

## Cases

Types:

- <code><a href="./src/resources/case-management/cases.ts">CaseCreateResponse</a></code>
- <code><a href="./src/resources/case-management/cases.ts">CaseCloseResponse</a></code>

Methods:

- <code title="post /v1/{tenant-id}/cases">client.caseManagement.cases.<a href="./src/resources/case-management/cases.ts">create</a>(tenantId, { ...params }) -> CaseCreateResponse</code>
- <code title="get /v1/{tenant-id}/cases/{case-id}">client.caseManagement.cases.<a href="./src/resources/case-management/cases.ts">retrieve</a>(tenantId, caseId) -> void</code>
- <code title="get /v1/{tenant-id}/cases">client.caseManagement.cases.<a href="./src/resources/case-management/cases.ts">list</a>(tenantId) -> void</code>
- <code title="post /v1/{tenant-id}/cases/{case-id}/close">client.caseManagement.cases.<a href="./src/resources/case-management/cases.ts">close</a>(tenantId, caseId) -> CaseCloseResponse</code>
- <code title="post /v1/{tenant-id}/cases/{case-id}/linkDocument">client.caseManagement.cases.<a href="./src/resources/case-management/cases.ts">linkDocument</a>(tenantId, caseId, { ...params }) -> void</code>

# TenantID

## Cases

### Processes

Types:

- <code><a href="./src/resources/tenant-id/cases/processes.ts">ProcessCreateResponse</a></code>

Methods:

- <code title="post /v1/{tenant-id}/cases/{case-id}/processes">client.tenantId.cases.processes.<a href="./src/resources/tenant-id/cases/processes.ts">create</a>(tenantId, caseId, { ...params }) -> ProcessCreateResponse</code>

## Cdp

### CampaignInteractions

Methods:

- <code title="get /v1/{tenant-id}/cdp/campaign-interactions">client.tenantId.cdp.campaignInteractions.<a href="./src/resources/tenant-id/cdp/campaign-interactions.ts">list</a>(tenantId) -> void</code>

### CheckTable

Methods:

- <code title="get /v1/{tenant-id}/cdp/check-table">client.tenantId.cdp.checkTable.<a href="./src/resources/tenant-id/cdp/check-table.ts">list</a>() -> void</code>

### Companies

Methods:

- <code title="get /v1/{tenant-id}/cdp/companies">client.tenantId.cdp.companies.<a href="./src/resources/tenant-id/cdp/companies.ts">list</a>(tenantId) -> void</code>

### Customer

Methods:

- <code title="post /v1/{tenant-id}/cdp/customer">client.tenantId.cdp.customer.<a href="./src/resources/tenant-id/cdp/customer.ts">create</a>(tenantId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/cdp/customer/{cus-id}">client.tenantId.cdp.customer.<a href="./src/resources/tenant-id/cdp/customer.ts">delete</a>(tenantId, cusId) -> void</code>

### CustomerJourneys

Methods:

- <code title="get /v1/{tenant-id}/cdp/customer-journeys">client.tenantId.cdp.customerJourneys.<a href="./src/resources/tenant-id/cdp/customer-journeys.ts">list</a>(tenantId) -> void</code>

### Customers

Methods:

- <code title="get /v1/{tenant-id}/cdp/customers/{cus-id}">client.tenantId.cdp.customers.<a href="./src/resources/tenant-id/cdp/customers.ts">retrieve</a>(tenantId, cusId) -> void</code>
- <code title="get /v1/{tenant-id}/cdp/customers">client.tenantId.cdp.customers.<a href="./src/resources/tenant-id/cdp/customers.ts">list</a>(tenantId) -> void</code>

### MarketingCampaigns

Methods:

- <code title="get /v1/{tenant-id}/cdp/marketing-campaigns">client.tenantId.cdp.marketingCampaigns.<a href="./src/resources/tenant-id/cdp/marketing-campaigns.ts">list</a>(tenantId) -> void</code>

# Cdp

Methods:

- <code title="get /v1/{tenant-id}/cdp/read/{doc-id}">client.cdp.<a href="./src/resources/cdp/cdp.ts">read</a>(tenantId, docId) -> void</code>

## ObjectiveOptimizations

Methods:

- <code title="get /v1/{tenant-id}/cdp/objective-optimizations">client.cdp.objectiveOptimizations.<a href="./src/resources/cdp/objective-optimizations.ts">list</a>(tenantId) -> void</code>

## OrderDetails

Methods:

- <code title="get /v1/{tenant-id}/cdp/order-details">client.cdp.orderDetails.<a href="./src/resources/cdp/order-details.ts">list</a>(tenantId) -> void</code>

## Products

Methods:

- <code title="get /v1/{tenant-id}/cdp/products">client.cdp.products.<a href="./src/resources/cdp/products.ts">list</a>(tenantId) -> void</code>

## SurvivalAnalysis

Methods:

- <code title="get /v1/{tenant-id}/cdp/survival-analysis">client.cdp.survivalAnalysis.<a href="./src/resources/cdp/survival-analysis.ts">list</a>(tenantId) -> void</code>

# Chats

Methods:

- <code title="post /v1/{tenant-id}/chats">client.chats.<a href="./src/resources/chats/chats.ts">create</a>(tenantId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/chats/{chat-id}">client.chats.<a href="./src/resources/chats/chats.ts">retrieve</a>(tenantId, chatId) -> void</code>
- <code title="get /v1/{tenant-id}/chats">client.chats.<a href="./src/resources/chats/chats.ts">list</a>(tenantId) -> void</code>
- <code title="delete /v1/{tenant-id}/chats/{chat-id}">client.chats.<a href="./src/resources/chats/chats.ts">delete</a>(tenantId, chatId) -> void</code>
- <code title="post /v1/{tenant-id}/chats/{chat-id}/assistant">client.chats.<a href="./src/resources/chats/chats.ts">assistant</a>(tenantId, chatId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/chats/{chat-id}/rename">client.chats.<a href="./src/resources/chats/chats.ts">rename</a>(tenantId, chatId, { ...params }) -> void</code>

## Messages

Methods:

- <code title="post /v1/{tenant-id}/chats/{chat-id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">create</a>(tenantId, chatId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/chats/{chat-id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">retrieve</a>(tenantId, chatId) -> void</code>
- <code title="delete /v1/{tenant-id}/chats/{chat-id}/messages/{message-id}">client.chats.messages.<a href="./src/resources/chats/messages.ts">delete</a>(tenantId, chatId, messageId) -> void</code>

# Company

Methods:

- <code title="get /v1/{tenant-id}/company">client.company.<a href="./src/resources/company.ts">retrieve</a>(tenantId) -> void</code>
- <code title="put /v1/{tenant-id}/company">client.company.<a href="./src/resources/company.ts">update</a>(tenantId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/company">client.company.<a href="./src/resources/company.ts">delete</a>(tenantId) -> void</code>

# Documents

Methods:

- <code title="post /v1/{tenant-id}/documents">client.documents.<a href="./src/resources/documents/documents.ts">create</a>(tenantId, { ...params }) -> void</code>
- <code title="get /v1/{tenant-id}/documents/{doc-id}">client.documents.<a href="./src/resources/documents/documents.ts">retrieve</a>(tenantId, docId) -> void</code>
- <code title="get /v1/{tenant-id}/documents">client.documents.<a href="./src/resources/documents/documents.ts">list</a>(tenantId) -> void</code>
- <code title="delete /v1/{tenant-id}/documents/{doc-id}">client.documents.<a href="./src/resources/documents/documents.ts">delete</a>(tenantId, docId) -> void</code>
- <code title="get /v1/{tenant-id}/documents/{doc-id}/download">client.documents.<a href="./src/resources/documents/documents.ts">download</a>(tenantId, docId) -> void</code>

## Scrap

Methods:

- <code title="post /v1/{tenant-id}/documents/scrap">client.documents.scrap.<a href="./src/resources/documents/scrap.ts">create</a>(tenantId, { ...params }) -> void</code>

# Folders

Methods:

- <code title="get /v1/{tenant-id}/folders/{folder}">client.folders.<a href="./src/resources/folders.ts">retrieve</a>(tenantId, folder) -> void</code>

# PressRelease

Methods:

- <code title="get /v1/{tenant-id}/press-release">client.pressRelease.<a href="./src/resources/press-release.ts">retrieve</a>(tenantId) -> void</code>

# Tenant

Methods:

- <code title="post /v1/{tenant-id}/rename">client.tenant.<a href="./src/resources/tenant/tenant.ts">rename</a>(tenantId, { ...params }) -> void</code>

## Products

Methods:

- <code title="put /v1/{tenant-id}/products/{product-id}">client.tenant.products.<a href="./src/resources/tenant/products.ts">update</a>(tenantId, productId, { ...params }) -> void</code>
- <code title="delete /v1/{tenant-id}/products/{product-id}">client.tenant.products.<a href="./src/resources/tenant/products.ts">remove</a>(tenantId, productId) -> void</code>

## Prompts

Methods:

- <code title="get /v1/{tenant-id}/prompts/{prompt-definition-id}">client.tenant.prompts.<a href="./src/resources/tenant/prompts.ts">retrieve</a>(tenantId, promptDefinitionId) -> void</code>
- <code title="get /v1/{tenant-id}/prompts">client.tenant.prompts.<a href="./src/resources/tenant/prompts.ts">list</a>(tenantId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/prompts/{prompt-definition-id}/copy">client.tenant.prompts.<a href="./src/resources/tenant/prompts.ts">copy</a>(tenantId, promptDefinitionId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/prompts/{prompt-definition-id}/deploy">client.tenant.prompts.<a href="./src/resources/tenant/prompts.ts">deploy</a>(tenantId, promptDefinitionId) -> void</code>

## Queues

Methods:

- <code title="get /v1/{tenant-id}/queues/{queue-id}">client.tenant.queues.<a href="./src/resources/tenant/queues/queues.ts">retrieve</a>(tenantId, queueId) -> void</code>
- <code title="get /v1/{tenant-id}/queues">client.tenant.queues.<a href="./src/resources/tenant/queues/queues.ts">list</a>(tenantId) -> void</code>

### Tasks

Methods:

- <code title="get /v1/{tenant-id}/queues/{queue-id}/tasks">client.tenant.queues.tasks.<a href="./src/resources/tenant/queues/tasks.ts">list</a>(tenantId, queueId) -> void</code>

# ProcessEngine

## Tasks

Methods:

- <code title="get /v1/{tenant-id}/tasks/{task-id}">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">retrieve</a>(tenantId, taskId) -> void</code>
- <code title="put /v1/{tenant-id}/tasks/{task-id}">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">update</a>(tenantId, taskId, [ ...body ]) -> void</code>
- <code title="post /v1/{tenant-id}/tasks/{task-id}/complete">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">complete</a>(tenantId, taskId, [ ...body ]) -> void</code>
- <code title="post /v1/{tenant-id}/tasks/{task-id}/linkDocument">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">linkDocument</a>(tenantId, taskId, { ...params }) -> void</code>
- <code title="post /v1/{tenant-id}/tasks/{task-id}/lock">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">lock</a>(tenantId, taskId) -> void</code>
- <code title="post /v1/{tenant-id}/tasks/{task-id}/unlock">client.processEngine.tasks.<a href="./src/resources/process-engine/tasks.ts">unlock</a>(tenantId, taskId) -> void</code>
