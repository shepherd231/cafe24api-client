import {
  Cafe24AdminAPIClient,
  Cafe24AdminAPIClientOptions,
  Cafe24FrontAPIClient,
  Cafe24FrontAPIClientOptions,
} from '../client';
import { InstanceRegistry, InstanceRegistryOptions } from './base';

export type Cafe24AdminAPIClientRegistryOptions = Omit<
  InstanceRegistryOptions<Cafe24AdminAPIClient, Cafe24AdminAPIClientOptions>,
  'instanceConstructor' | 'keyPropName'
>;

export class Cafe24AdminAPIClientRegistry extends InstanceRegistry<
  Cafe24AdminAPIClient,
  Cafe24AdminAPIClientOptions
> {
  constructor(options?: Cafe24AdminAPIClientRegistryOptions) {
    super({
      instanceConstructor: Cafe24AdminAPIClient,
      instanceDestructor: (instance) => instance.dispose(),
      keyPropName: 'mallId',
      displayName: 'Cafe24AdminAPIClientRegistry',
      ...options,
    });
  }
}

export type Cafe24FrontAPIClientRegistryOptions = Omit<
  InstanceRegistryOptions<Cafe24FrontAPIClient, Cafe24FrontAPIClientOptions>,
  'instanceConstructor' | 'keyPropName'
>;

export class Cafe24FrontAPIClientRegistry extends InstanceRegistry<
  Cafe24FrontAPIClient,
  Cafe24FrontAPIClientOptions
> {
  constructor(options?: Cafe24FrontAPIClientRegistryOptions) {
    super({
      instanceConstructor: Cafe24FrontAPIClient,
      instanceDestructor: (instance) => instance.dispose(),
      keyPropName: 'mallId',
      displayName: 'Cafe24FrontAPIClientRegistry',
      ...options,
    });
  }
}
