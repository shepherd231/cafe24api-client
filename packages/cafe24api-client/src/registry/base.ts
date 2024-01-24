import { LRUCache } from 'lru-cache';
import { merge } from 'merge';

export interface InstanceRegistryOptions<T, O> {
  instanceConstructor: new (options: O) => T;
  keyPropName: string;
  instanceDestructor?: (instance: T) => void;
  displayName?: string;
  cacheOptions?: LRUCache.Options<string, T, unknown>;
  defaultClientOptions?: Partial<O>;
}

/**
 * @description
 * A registry for instances of a class.
 *
 * @typeParam T - The type of the instance.
 *                It should include the key property with `keyPropName` as its name.
 * @typeParam O - The type of the options for the instance constructor.
 *                It should include the key property with `keyPropName` as its name.
 */
export class InstanceRegistry<T, O> {
  private readonly registry: LRUCache<string, T>;
  private readonly keyPropName: string;
  private readonly instanceConstructor: new (options: O) => T;
  private readonly instanceDestructor?: (instance: T) => void;
  private readonly defaultClientOptions?: Partial<O>;
  private readonly displayName?: string;

  constructor(options: InstanceRegistryOptions<T, O>) {
    const cacheOptions = merge(
      true,
      {
        max: 500,
      },
      options?.cacheOptions,
    );
    this.registry = new LRUCache<string, T>(cacheOptions);

    this.keyPropName = options.keyPropName;
    this.instanceConstructor = options.instanceConstructor;
    this.instanceDestructor = options?.instanceDestructor;
    this.defaultClientOptions = options?.defaultClientOptions;
    this.displayName = options?.displayName ?? 'InstanceRegistry';
  }

  public get(key: string): T {
    return this.registry.get(key);
  }

  public has(key: string): boolean {
    return this.registry.has(key);
  }

  public clear(): void {
    this.registry.clear();
  }

  public remove(key: string): boolean {
    const instance = this.registry.get(key);
    if (instance && this.instanceDestructor) {
      this.instanceDestructor(instance);
    }
    return this.registry.delete(key);
  }

  public register(
    instanceOrOptions: T | O,
    options?: { overwrite?: boolean },
  ): this {
    // Get the mall ID from the instance or the argument
    const key = instanceOrOptions[this.keyPropName] as string;

    // If the mall ID is already registered and overwrite is not allowed, throw an error
    if (!options?.overwrite && this.registry.has(key)) {
      throw new Error(`${this.displayName}: ${key} is already registered`);
    }

    // Get the instance from the argument or create a new instance with default options
    const instance =
      instanceOrOptions instanceof this.instanceConstructor
        ? instanceOrOptions
        : new this.instanceConstructor({
            [this.keyPropName]: key,
            ...this.defaultClientOptions,
            ...instanceOrOptions,
          } as any);

    // Register the instance
    this.registry.set(key, instance);

    return this;
  }
}
