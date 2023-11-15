import { Property } from '../model';

export interface RequestInfo {
  /**
   * @description
   * Request parameters.
   */
  properties: Property[];
  /**
   * @description
   * Example request body.
   */
  example?: string;
}
