import { Property } from '../model';

export interface ResponseInfo {
  /**
   * @description
   * Response parameters.
   */
  properties: Property[];
  /**
   * @description
   * Example response body.
   */
  example?: string;
}
