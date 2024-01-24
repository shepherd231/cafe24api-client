import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 취소요청(Cancellationrequests)은 주문에 대한 취소요청에 관한 기능입니다.
   * 취소를 요청하거나 취소요청중인 주문을 접수거부 할 수 있습니다.
   */
  export interface Cancellationrequests {
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
  }

  export interface CreateACancellationRequestForMultipleItemsInput {
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
     * 취소사유 구분
     *
     * A:고객변심
     * B:배송지연
     * G:서비스불만족
     * I:기타
     *
     * @required
     */
    reasonType: any;
    /**
     * @description
     * 취소사유
     *
     * @required
     *
     * 최대글자수 : [2000자]
     */
    reason: any;
    /**
     * @description
     * 환불 은행 코드
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * refund_bank_code
     *
     * 해당 쇼핑몰이 EC Korea 쇼핑몰일 경우 필수
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     * 오픈마켓/네이버페이 주문을 취소할 경우 사용 불가
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

  export interface CreateACancellationRequestForMultipleItemsOutput {
    cancellationrequests: {
      shopNo: number;
      orderId: string;
      items: {
        orderItemCode: string;
        quantity: number;
      }[];
    }[];
  }
  export interface RejectACancellationRequestForMultipleItemsInput {
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

  export interface RejectACancellationRequestForMultipleItemsOutput {
    cancellationrequests: {
      shopNo: number;
      orderId: string;
      undone: Cafe24Enum;
      orderItemCode: string[];
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 취소를 요청할 수 있습니다.
     * 취소사유와 계좌환불인 경우 환불할 계좌번호를 입력할 수 있습니다.
     * ,(콤마)로 여러 건을 동시에 취소요청 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-cancellation-request-for-multiple-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellationrequests": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01",
     *                     "quantity": 2
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
     *                     "quantity": 1
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
    createACancellationRequestForMultipleItems(
      input: CreateACancellationRequestForMultipleItemsInput,
      options?: RequestOptions<
        CreateACancellationRequestForMultipleItemsOutput['cancellationrequests'][number]
      >,
    ): Promise<AxiosResponse<CreateACancellationRequestForMultipleItemsOutput>>;
    /**
     * @description
     * 취소가 요청된 주문의 특정 품주들에 대하여 취소요청중인 상태를 변경할 수 있습니다.
     * 접수거부를 할 수 있고 사유를 입력할 수 있습니다.
     * ,(콤마)로 여러 건을 동시에 취소요청 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#reject-a-cancellation-request-for-multiple-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellationrequests": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "undone": "T",
     *             "order_item_code": [
     *                 "20190228-0000011-01",
     *                 "20190228-0000011-02"
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000022",
     *             "undone": "T",
     *             "order_item_code": [
     *                 "20190228-0000022-01",
     *                 "20190228-0000022-02"
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    rejectACancellationRequestForMultipleItems(
      input: RejectACancellationRequestForMultipleItemsInput,
      options?: RequestOptions<
        RejectACancellationRequestForMultipleItemsOutput['cancellationrequests'][number]
      >,
    ): Promise<AxiosResponse<RejectACancellationRequestForMultipleItemsOutput>>;
  }
}
