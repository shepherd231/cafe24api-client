import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 반품요청(Returnrequests)을 통해 특정 주문의 반품에 대한 요청을 접수하거나 거부할 수 있습니다.
   */
  export interface Returnrequests {
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
     * 품주 목록
     *
     *
     */
    items: any;
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

  export interface CreateAReturnRequestForMultipleItemsInput {
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
     */
    orderId: any;
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
    reasonType: any;
    /**
     * @description
     * 사유
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
     * @required
     */
    requestPickup: any;
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
    trackingNo?: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    shippingCompanyName?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     *
     */
    refundBankCode?: any;
    /**
     * @description
     * 환불은행명
     *
     * 최대글자수 : [250자]
     */
    refundBankName?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     *
     */
    refundBankAccountNo?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refundBankAccountHolder?: any;
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
      orderItemCode: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
  }

  export interface CreateAReturnRequestForMultipleItemsOutput {
    returnrequests: {
      shopNo: number;
      orderId: string;
      items: {
        orderItemCode: string;
        quantity: number;
      }[];
    }[];
  }
  export interface RejectAReturnRequestForMultipleItemsInput {
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
     * 최대글자수 : [2000자]
     */
    rejectReason?: any;
  }

  export interface RejectAReturnRequestForMultipleItemsOutput {
    returnrequests: {
      shopNo: number;
      orderId: string;
      undone: Cafe24Enum;
      orderItemCode: string[];
      additionalPaymentGatewayCancel: {
        success: string[];
        fail: any;
      };
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 반품을 요청할 수 있습니다.
     * 반품사유와 계좌환불인 경우 환불할 계좌번호를 입력할 수 있습니다.
     * ,(콤마)로 여러 건을 동시에 반품요청 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-return-request-for-multiple-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "returnrequests": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
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
    createAReturnRequestForMultipleItems(
      input: CreateAReturnRequestForMultipleItemsInput,
      options?: RequestOptions<CreateAReturnRequestForMultipleItemsInput>,
    ): Promise<AxiosResponse<CreateAReturnRequestForMultipleItemsOutput>>;
    /**
     * @description
     * 반품이 요청된 주문의 특정 품주들에 대하여 반품요청중인 상태를 변경할 수 있습니다.
     * 접수거부를 할 수 있고 사유를 입력할 수 있습니다.
     * ,(콤마)로 여러 건의 반품 요청을 동시에 접수거부 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#reject-a-return-request-for-multiple-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "returnrequests": [
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
    rejectAReturnRequestForMultipleItems(
      input: RejectAReturnRequestForMultipleItemsInput,
      options?: RequestOptions<RejectAReturnRequestForMultipleItemsInput>,
    ): Promise<AxiosResponse<RejectAReturnRequestForMultipleItemsOutput>>;
  }
}
