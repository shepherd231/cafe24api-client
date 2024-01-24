import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문혜택(Orders benefits)은 특정 주문에 적용된 혜택에 관한 기능입니다.
   */
  export interface OrdersBenefits {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    order_item_code: any;
    /**
     * @description
     * 혜택번호
     *
     *
     */
    benefit_no: any;
    /**
     * @description
     * 혜택 유형
     *
     *
     */
    benefit_title: any;
    /**
     * @description
     * 혜택명
     *
     *
     */
    benefit_name: any;
    /**
     * @description
     * 혜택코드
     *
     *
     */
    benefit_code: any;
    /**
     * @description
     * 혜택 비율
     *
     *
     */
    benefit_percent: any;
    /**
     * @description
     * 혜택 금액
     *
     *
     */
    benefit_value: any;
    /**
     * @description
     * 앱 클라이언트 ID
     *
     *
     */
    benefit_app_key: any;
  }

  export interface RetrieveAListOfOrderBenefitsAppliedToAnOrderInput {
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
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * @required
     *
     * 주문번호
     */
    order_id: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [500]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfOrderBenefitsAppliedToAnOrderOutput {
    benefits: {
      shop_no: number;
      order_id: string;
      order_item_code: string;
      benefit_no: number;
      benefit_title: string;
      benefit_name: string;
      benefit_code: number;
      benefit_percent: Cafe24Datetime;
      benefit_value: string;
      benefit_app_key: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문에 적용된 혜택을 목록으로 조회할 수 있습니다.
     * 혜택코드, 혜택비율, 혜택금액 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-order-benefits-applied-to-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefits": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20201005-0000011",
     *             "order_item_code": "20201005-0000011-01",
     *             "benefit_no": 900,
     *             "benefit_title": "bulk order discount",
     *             "benefit_name": "bulk order discount name",
     *             "benefit_code": 966,
     *             "benefit_percent": "10%",
     *             "benefit_value": "500.00",
     *             "benefit_app_key": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20201005-0000011",
     *             "order_item_code": "20201005-0000011-01",
     *             "benefit_no": 901,
     *             "benefit_title": "customer discount",
     *             "benefit_name": "customer discount name",
     *             "benefit_code": 967,
     *             "benefit_percent": null,
     *             "benefit_value": "500.00",
     *             "benefit_app_key": null
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfOrderBenefitsAppliedToAnOrder(
      input: RetrieveAListOfOrderBenefitsAppliedToAnOrderInput,
      options?: RequestOptions<
        RetrieveAListOfOrderBenefitsAppliedToAnOrderOutput['benefits'][number]
      >,
    ): Promise<
      AxiosResponse<RetrieveAListOfOrderBenefitsAppliedToAnOrderOutput>
    >;
  }
}
