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
   * 정기배송 품목(Subscription shipments items)을 통해 정기배송 품목별 수정을 할 수 있습니다.
   */
  export interface SubscriptionShipmentsItems {
    /**
     * @description
     * 품목코드
     *
     *
     */
    variant_code: any;
    /**
     * @description
     * 상품옵션 아이디
     *
     *
     */
    option_id: any;
    /**
     * @description
     * 정기배송 상태
     *
     * U:이용중
     * P:일시정지
     * C:해지
     *
     *
     */
    subscription_state: any;
    /**
     * @description
     * 주문 수량
     *
     *
     */
    quantity: any;
    /**
     * @description
     * 배송예정일
     *
     *
     */
    expected_delivery_date: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     *
     */
    subscription_shipments_cycle: any;
  }

  export interface UpdateProductVariantsInSubscriptionInput {
    /**
     * @description
     * 정기배송 신청번호
     *
     * @required
     */
    subscription_id: any;
    /**
     * @description
     * 품목코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variant_code: any;
    /**
     * @description
     * 상품옵션 아이디
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [4자]~최대: [11자]
     */
    option_id: any;
    /**
     * @description
     * 정기배송 상태
     *
     * U:이용중
     * P:일시정지
     * C:해지
     *
     *
     */
    subscription_state?: any;
    /**
     * @description
     * 주문 수량
     *
     * 최소값: [1]
     */
    quantity?: any;
    /**
     * @description
     * 배송예정일
     *
     * 날짜
     */
    expected_delivery_date?: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     *
     */
    subscription_shipments_cycle?: any;
  }

  export interface UpdateProductVariantsInSubscriptionOutput {
    items: {
      variant_code: string;
      option_id: string;
      quantity: number;
      expected_delivery_date: Cafe24Date;
      subscription_shipments_cycle: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 정기배송 품목별 수정을 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-variants-in-subscription
     *
     * @example 응답 예시
     * ```json
     * {
     *     "items": [
     *         {
     *             "variant_code": "P00000BQ000A",
     *             "option_id": "000A",
     *             "quantity": 2,
     *             "expected_delivery_date": "2021-07-16",
     *             "subscription_shipments_cycle": "1M"
     *         },
     *         {
     *             "variant_code": "P00000AB000B",
     *             "option_id": "000B",
     *             "subscription_state": "C"
     *         }
     *     ]
     * }
     * ```
     */
    updateProductVariantsInSubscription(
      input: UpdateProductVariantsInSubscriptionInput,
      options?: AdminRequestOptions<
        UpdateProductVariantsInSubscriptionOutput['items'][number]
      >,
    ): Promise<AxiosResponse<UpdateProductVariantsInSubscriptionOutput>>;
  }
}
