import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 교환요청(Exchangerequests)은 주문에 대해 교환을 요청할 수 있는 기능입니다.
   */
  export interface Exchangerequests {
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
     * 품주 목록
     *
     *
     */
    items: any;
    /**
     * @description
     * 교환신청번호
     *
     *
     */
    exchange_request_no: any;
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
    order_item_code: any;
    /**
     * @description
     * 추가 PG 취소
     *
     *
     */
    additional_payment_gateway_cancel: any;
  }

  export interface BulkExchangeRequestApiInput {
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
     */
    order_id: any;
    /**
     * @description
     * 사유 구분
     *
     * A:고객변심
     * E:상품불만족
     * K:상품불량
     * J:배송오류
     * I:기타
     *
     * @required
     */
    reason_type: any;
    /**
     * @description
     * 교환신청 사유
     *
     * @required
     *
     * 최대글자수 : [2000자]
     */
    reason: any;
    /**
     * @description
     * 수거신청 여부
     *
     * T : 수거신청
     * F : 직접발송
     *
     *
     */
    request_pickup?: any;
    /**
     * @description
     * 수거지역 상세
     *
     *
     */
    pickup?: {
      /**
       * @description
       * 이름
       *
       *
       */
      name: any;
      /**
       * @description
       * 전화번호
       *
       *
       */
      phone?: any;
      /**
       * @description
       * 휴대전화
       *
       *
       */
      cellphone: any;
      /**
       * @description
       * 우편번호
       *
       *
       */
      zipcode: any;
      /**
       * @description
       * 기본 주소
       *
       *
       */
      address1: any;
      /**
       * @description
       * 상세 주소
       *
       *
       */
      address2: any;
    };
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    tracking_no?: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    shipping_company_name?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     *
     */
    refund_bank_code?: any;
    /**
     * @description
     * 환불은행명
     *
     * 최대글자수 : [250자]
     */
    refund_bank_name?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     *
     */
    refund_bank_account_no?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refund_bank_account_holder?: any;
    /**
     * @description
     * 품주 목록
     *
     *
     */
    items?: {
      /**
       * @description
       * 품주코드
       *
       *
       */
      order_item_code: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
    /**
     * @description
     * 교환상품정보
     *
     *
     */
    exchange_items?: {
      /**
       * @description
       * 상품번호
       *
       *
       */
      product_no: any;
      /**
       * @description
       * 상품 품목 코드
       *
       *
       */
      variant_code: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
  }

  export interface BulkExchangeRequestApiOutput {
    exchangerequests: {
      shop_no: number;
      order_id: string;
      exchange_request_no: number;
      items: {
        order_item_code: string;
        quantity: number;
      }[];
    }[];
  }
  export interface RejectAnExchangeRequestForMultipleItemsInput {
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
     */
    order_id: any;
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    order_item_code: any;
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
    reason_type?: any;
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
    display_reject_reason?: any;
    /**
     * @description
     * 거부 사유
     *
     * 최대글자수 : [2000자]
     */
    reject_reason?: any;
  }

  export interface RejectAnExchangeRequestForMultipleItemsOutput {
    exchangerequests: {
      shop_no: number;
      order_id: string;
      undone: Cafe24Enum;
      order_item_code: string[];
      additional_payment_gateway_cancel: {
        success: string[];
        fail: any;
      };
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문에 대해 교환요청 처리를 할 수 있습니다.
     * ,(콤마)로 여러 건을 동시에 교환요청 할 수 있습니다.
     * 교환사유와 수거신청 여부를 함께 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#bulk-exchange-request-api
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchangerequests": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "exchange_request_no": 8,
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01",
     *                     "quantity": 1
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000011-02",
     *                     "quantity": 3
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000022",
     *             "exchange_request_no": 9,
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000022-01",
     *                     "quantity": 2
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000022-02",
     *                     "quantity": 2
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    bulkExchangeRequestApi(
      input: BulkExchangeRequestApiInput,
      options?: RequestOptions<BulkExchangeRequestApiInput>,
    ): Promise<AxiosResponse<BulkExchangeRequestApiOutput>>;
    /**
     * @description
     * 교환이 요청된 주문의 특정 품주들에 대하여 교환요청중인 상태를 변경할 수 있습니다.
     * 접수거부를 할 수 있고 사유를 입력할 수 있습니다.
     * ,(콤마)로 여러 건의 교환요청 건에 대해 동시에 상태 변경 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#reject-an-exchange-request-for-multiple-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchangerequests": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "undone": "T",
     *             "order_item_code": [
     *                 "20190228-0000011-01",
     *                 "20190228-0000011-02"
     *             ],
     *             "additional_payment_gateway_cancel": {
     *                 "success": [
     *                     "20190228-0000011-01",
     *                     "20190228-0000011-02"
     *                 ],
     *                 "fail": null
     *             }
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000022",
     *             "undone": "T",
     *             "order_item_code": [
     *                 "20190228-0000022-01",
     *                 "20190228-0000022-02"
     *             ],
     *             "additional_payment_gateway_cancel": {
     *                 "success": [
     *                     "20190228-0000022-01",
     *                     "20190228-0000022-02"
     *                 ],
     *                 "fail": null
     *             }
     *         }
     *     ]
     * }
     * ```
     */
    rejectAnExchangeRequestForMultipleItems(
      input: RejectAnExchangeRequestForMultipleItemsInput,
      options?: RequestOptions<RejectAnExchangeRequestForMultipleItemsInput>,
    ): Promise<AxiosResponse<RejectAnExchangeRequestForMultipleItemsOutput>>;
  }
}
