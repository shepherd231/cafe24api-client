import { Cafe24AdminAPIClient } from '../../client';
import { Cafe24AdminAPIClientRegistry } from '../clients';

describe('Cafe24AdminAPIClientRegistry', () => {
  let registry: Cafe24AdminAPIClientRegistry;

  beforeAll(() => {
    registry = new Cafe24AdminAPIClientRegistry();
  });

  it('should be defined', () => {
    expect(registry).toBeDefined();
  });

  it('should register a client with mall id', () => {
    registry.register('mall-1');
    const client = registry.get('mall-1');
    expect(client).toBeInstanceOf(Cafe24AdminAPIClient);
    expect(client.mallId).toEqual('mall-1');
  });

  it('should register a client with an instance', () => {
    registry.register(new Cafe24AdminAPIClient({ mallId: 'mall-2' }));
    const client = registry.get('mall-2');
    expect(client).toBeInstanceOf(Cafe24AdminAPIClient);
    expect(client.mallId).toEqual('mall-2');
  });

  it('should not register a client if it already exists', () => {
    expect(() => {
      registry.register('mall-3');
      registry.register('mall-3');
    }).toThrow();
  });

  it('should register a client if it already exists with overwrite option', () => {
    expect(() => {
      registry.register('mall-4');
      registry.register('mall-4', { overwrite: true });
    }).not.toThrow();
  });
});
