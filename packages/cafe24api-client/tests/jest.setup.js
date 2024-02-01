import Joi from 'joi';
import dotenv from 'dotenv';
import { server } from './mocks/server.js';

// Validate Node version. We need Node 18+ for testing.
const [major] = process.versions.node.split('.').map(Number);
if (major < 18) {
  throw new Error('Node 18+ is required for testing.');
}

// Load environment variables
dotenv.config();

// Validate environment variables
Joi.object({
  CAFE24_MALL_ID: Joi.string().required(),
  CAFE24_CLIENT_ID: Joi.string().required(),
}).validate(process.env, { allowUnknown: true });

// Run the mock server
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
