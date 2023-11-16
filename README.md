# cafe24api-client [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/shepherd231/cafe24api-client/blob/master/.github/CONTRIBUTING.md)

Unofficial [Cafe24](https://www.cafe24.com/) API client implemented in javascript/typescript.

## Installation

```bash
npm i cafe24api-client
```

## Usage

### Admin API / Front API

There are 2 clients for each [Admin API](https://developers.cafe24.com/docs/api/admin) and [Front API](https://developers.cafe24.com/docs/api/front).

```typescript
// Admin API
import { Cafe24AdminAPIClient } from 'cafe24api-client';

const client = new Cafe24AdminAPIClient({
  mallId: '<your-mall-id>',
});
```

```typescript
// Front API
import { Cafe24FrontAPIClient } from 'cafe24api-client';

const client = new Cafe24FrontAPIClient({
  mallId: '<your-mall-id>',
  clientId: '<your-cafe24-client-id>',
});
```

### Endpoint registerer

You can register needed endpoint sets to the client by importing each endpoint registerer.

Endpoint registerer is a function that takes a client instance and returns the client instance with registered endpoints.

It follows the path pattern like below, and only endpoints you've included will be bundled (if you're in bundling situation).

```bash
cafe24api-client/<admin|front>/endpoints/<endpoint-group-id>
```

Below is an example of registering endpoints.

> [!IMPORTANT]\
> Note that `cafe24api-client` uses `axios` under the hood,
> so the return value is an axios response object.
> 
> You can access the actual response data by `data` property.

```typescript
import { Cafe24AdminAPIClient } from 'cafe24api-client';
// This imports every endpoint methods 
// documented at https://developers.cafe24.com/docs/api/admin/#products
import Products from 'cafe24api-client/admin/endpoints/products';
// This imports every endpoint methods
// documented at https://developers.cafe24.com/docs/api/admin/#customers-paymentinformation
import CustomersPaymentinformation from 'cafe24api-client/admin/endpoints/customers-paymentinformation';

Cafe24AdminAPIClient.use(Products);
Cafe24AdminAPIClient.use(CustomersPaymentinformation);

const client = new Cafe24AdminAPIClient({
  mallId: '<your-mall-id>',
});

// Now you can use registered endpoints

// This calls https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-products
const { data } = await client.products.retrieveAListOfProducts(
  // First argument is a payload
  //
  // Pass request parameters documented at
  // corresponding endpoint documentation
  { product_no: [838, 835], },
  // Second argument is a configuration
  { fields: ['product_no', 'product_code', 'price'], }
);

```

#### Camel cased payload & response

Every endpoint methods by default uses camel cased keys for payload and response, as Cafe24 API uses snake cased keys.

If you want to use snake cased keys, you can import camel cased keys version of endpoint registerer which follows the path pattern like below.

```bash
cafe24api-client/<admin|front>/endpoints/camel-case/<endpoint-group-id>
```

Below is an example of registering endpoints with snake cased keys.

```typescript
import { Cafe24AdminAPIClient } from 'cafe24api-client';
import Products from 'cafe24api-client/admin/endpoints/products';
import CustomersPaymentinformation from 'cafe24api-client/admin/endpoints/customers-paymentinformation';

Cafe24AdminAPIClient.use(Products);
Cafe24AdminAPIClient.use(CustomersPaymentinformation);

const client = new Cafe24AdminAPIClient({
  mallId: '<your-mall-id>',
});

const { data } = await client.products.retrieveAListOfProducts(
  { productNo: [838, 835], },
  { fields: ['productNo', 'productCode', 'price'], }
);
```

### `Auth` Endpoint registerer

`Auth` endpoint group refers to:

- https://developers.cafe24.com/docs/api/admin/#authentication
- https://developers.cafe24.com/docs/api/admin/#get-access-token
- https://developers.cafe24.com/docs/api/admin/#get-access-token-using-refresh-token

This endpoint group is special as it is essential to use access tokens to call other endpoints when consuming Admin API.

Below is the example of registering and using `Auth` endpoints.

```typescript
import { Cafe24AdminAPIClient } from 'cafe24api-client';
import Auth from 'cafe24api-client/admin/endpoints/auth';

Cafe24AdminAPIClient.use(Auth);

const client = new Cafe24AdminAPIClient({
  mallId: '<your-mall-id>',
});

const { data } = await client.getAccessToken({
  client_id: '<your_client_id>',
  client_secret: '<your_client_secret>',
  code: '<your_code>',
  redirect_uri: '<your_redirect_uri>',
});
const accessToken = data.access_token;

// By calling this, you can now use access token to call other endpoints
client.setAccessToken(accessToken);
```

## Limitations

- Typescript interfaces provided by this library (e.g. `interface <method>Input`, `interface <method>Output`) are 
  - not fully typed (for `interface <method>Input` and `interface <schema>`), 
  - or fully documented with JSDoc (for `interface <method>Output`), 
  - or fully scraped subproperties exceeding 2 levels deep (for `interface <schema>` and `interface <method>Input`).
- This is because code generator [cafe24api-schema-scraper](./packages/cafe24api-schema-scraper/README.md) constructs property info for schema, input, and output seperately, and logic to merge them is not implemented yet. If you're interested in contributing, please check out [Contributing](#contributing) section below.

## Extras

This repository also contains set of tools to help you develop a service with Cafe24 API.

Check out the list below for other available packages.

- [cafe24-webhook-utils](./packages/cafe24-webhook-utils/README.md)
- [cafe24api-schema-scraper (not published)](./packages/cafe24api-schema-scraper/README.md)
- [cafe24-webhook-schema-generator (not published)](./packages/cafe24-webhook-schema-generator/README.md)

## Contributing

Any contribution is welcome! Check out [CONTRIBUTING.md](https://github.com/shepherd231/cafe24api-client/blob/master/.github/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/shepherd231/cafe24api-client/blob/master/.github/CODE_OF_CONDUCT.md) for more information on how to get started.

## License

`cafe24api-client` is licensed under a [MIT License](https://github.com/shepherd231/cafe24api-client/blob/master/LICENSE).
