import { AxiosResponse } from 'axios';
import {
  Endpoint,
  AdminRequestOptions,
  Cafe24Datetime,
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 자동금액 계산(autocalculation)은 취소/교환/반품시 할인 금액 등 주문 단위의 금액을 자동으로 배분해주는 기능입니다.
   * 해당 리소스에서는 특정 주문에 대해 자동금액 계산을 해제할 수 있습니다.
   */
  export interface OrdersAutocalculation {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
  }

  export interface RemoveAutoCalculationSettingOfAnOrderInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    order_id: any;
  }

  export interface RemoveAutoCalculationSettingOfAnOrderOutput {
    autocalculation: {
      shop_no: number;
      order_id: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문에 자동금액 계산을 해제하여 취소/교환/반품이 가능하도록 할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#remove-auto-calculation-setting-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autocalculation": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011"
     *     }
     * }
     * ```
     */
    removeAutoCalculationSettingOfAnOrder(
      input: RemoveAutoCalculationSettingOfAnOrderInput,
      options?: AdminRequestOptions<
        RemoveAutoCalculationSettingOfAnOrderOutput['autocalculation']
      >,
    ): Promise<AxiosResponse<RemoveAutoCalculationSettingOfAnOrderOutput>>;
  }
}
