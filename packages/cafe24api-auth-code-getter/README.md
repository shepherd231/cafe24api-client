# cafe24api-auth-code-getter

Provides utilities to get [cafe24 api auth code](https://developers.cafe24.com/docs/en/api/admin/#get-authentication-code)

## Installation

```bash
npm install cafe24api-auth-code-getter
```

## Usage

### CLI

You can use the CLI to get the auth code.

```bash
$ cafe24api-auth-code-getter run \
..  --mall-id <your-mall-id> \
..  --email <your-mall-admin-email> \
..  --password <your-mall-admin-password> \
..  --client-id <your-client-id> \
..  --redirect-uri <your-redirect-uri> \
..  --scope <your-scope> \
..  --state <your-state>
```

> Note that `--state` flag is optional.

This will result in the following output:

```bash
$ Getting auth code...
$ Successfully got auth code!
$ Auth code: <auth-code> (state: <state>)
```

You can also set the environment variables and run the command without any flags.

```bash
# .env
CAFE24_MALL_ID="<your-mall-id>"
CAFE24_MALL_PASSWORD="<your-mall-admin-password>"
CAFE24_CLIENT_ID="<your-client-id>"
CAFE24_AUTH_REDIRECT_URI="<your-redirect-uri>"
CAFE24_AUTH_SCOPE="<your-comma-seperated-scopes>"

# Run the command
$ cafe24api-auth-code-getter run
```

### Programmatic access

You can also use the package programmatically.

```typescript
import { getAuthCode } from 'cafe24api-auth-code-getter';

// Get the auth code
const { code, state } = await getAuthCode({
  mallId: '<your-mall-id>',
  email: '<your-mall-admin-email>',
  password: '<your-mall>',
  clientId: '<your-client-id>',
  redirectUri: '<your-redirect-uri>',
  scope: '<your-scope>',
  state: '<your-state>',
});

// Do something with the auth code
console.log('Auth code:', code);
console.log('State:', state);
```
