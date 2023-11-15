import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 교환 처리를 요청한 주문의 교환접수를 거부할 수 있습니다.
   */
  export interface OrdersExchangerequests {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 접수거부 여부
     *
     *
     */
    undone: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode: any;
    /**
     * @description
     * 추가 PG 취소
     *
     *
     */
    additionalPaymentGatewayCancel: any;
  }

  export interface RejectAnExchangeRequestInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    orderItemCode: any;
    /**
     * @description
     * 접수거부 여부
     *
     * T : 접수거부함
     *
     * @required
     */
    undone: any;
    /**
     * @description
     * 사유 구분
     *
     * A:고객변심
     * B:배송지연
     * J:배송오류
     * C:배송불가지역
     * L:수출/통관 불가
     * D:포장불량
     * E:상품 불만족
     * F:상품정보상이
     * K:상품불량
     * G:서비스불만족
     * H:품절
     * I:기타
     *
     *
     */
    reasonType?: any;
    /**
     * @description
     * 사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 주문상세내역 노출설정
     *
     * T : 노출함
     * F : 노출안함
     *
     * @default F
     *
     *
     */
    displayRejectReason?: any;
    /**
     * @description
     * 거부 사유
     *
     * 고객에게 노출되는 접수 거부 사유
     *
     * 최대글자수 : [2000자]
     */
    rejectReason?: any;
  }

  export interface RejectAnExchangeRequestOutput {
    exchangerequests: {
      shopNo: number;
      orderId: string;
      orderItemCode: string[];
      undone: Cafe24Enum;
      additionalPaymentGatewayCancel: {
        success: string[];
        fail: any;
      };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 교환 처리를 요청한 주문의 교환 접수를 거부합니다.
     * 교환신청번호, 거부 사유 등을 필수로 입력합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#reject-an-exchange-request
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchangerequests": {
     *         "shop_no": 1,
     *         "order_id": "20200723-0000001",
     *         "order_item_code": [
     *             "20200723-0000001-01",
     *             "20200723-0000001-02"
     *         ],
     *         "undone": "T",
     *         "additional_payment_gateway_cancel": {
     *             "success": [
     *                 "20200723-0000001-01",
     *                 "20200723-0000001-02"
     *             ],
     *             "fail": null
     *         }
     *     }
     * }
     * ```
     */
    rejectAnExchangeRequest(
      input: RejectAnExchangeRequestInput,
      options?: RequestOptions<RejectAnExchangeRequestInput>,
    ): Promise<AxiosResponse<RejectAnExchangeRequestOutput>>;
  }
}
