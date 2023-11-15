import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문 취소(Orders cancellation) 는 배송 전의 특정 주문 하나를 취소 처리할 수 있는 기능입니다.
   * 해당 API를 사용하여 취소완료처리할 경우 환불완료 처리와 함께 PG 취소도 같이 진행할 수 있습니다.(payment_gateway_cancel : &#34;T&#34;로 요청시)
   */
  export interface OrdersCancellation {
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
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
     *
     *
     */
    status: any;
    /**
     * @description
     * 취소번호
     *
     *
     */
    claimCode: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recoverInventory: any;
    /**
     * @description
     * 철회 여부
     *
     * T : 철회함
     * F : 철회안함
     *
     *
     */
    undone: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    addMemoToo: any;
    /**
     * @description
     * 철회 사유 구분
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
    undoneReasonType: any;
    /**
     * @description
     * 철회 사유
     *
     *
     */
    undoneReason: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    exposeOrderDetail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     *
     */
    exposedUndoneReason: any;
  }

  export interface CreateAnOrderCancellationInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
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
     * PG 취소 요청 여부
     *
     * 주문을 취소함과 동시에 PG취소도 같이 처리할 수 있다.
     *
     * PG취소가 가능한 결제수단(신용카드, 실시간계좌이체)에서만 사용 가능하다.
     *
     * 결제수단이 복수인 주문(카드 등으로 결제한 주문을 결제 후 품목을 추가한 경우)의 경우에는 PG 결제를 취소할 수 없으며 관리자 화면에서 취소해야 한다.
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * T : 취소함
     * F : 취소안함
     *
     * @default F
     *
     *
     */
    paymentGatewayCancel?: any;
    /**
     * @description
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
     *
     * @required
     */
    status: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     * @default F
     *
     *
     */
    recoverInventory?: any;
    /**
     * @description
     * 쿠폰 복원
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * T : 복구함
     * F : 복구안함
     *
     * @default F
     *
     *
     */
    recoverCoupon?: any;
    /**
     * @description
     * 복원할 쿠폰 번호
     *
     *
     */
    recoverCouponNo?: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    addMemoToo?: any;
    /**
     * @description
     * 취소사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 취소사유 구분
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * A : 고객변심
     * B : 배송지연
     * C : 배송불가지역
     * L : 수출/통관 불가
     * D : 포장불량
     * E : 상품불만족
     * F : 상품정보상이
     * G : 서비스불만족
     * H : 품절
     * I : 기타
     *
     *
     */
    claimReasonType?: any;
    /**
     * @description
     * 네이버페이 취소사유 구분
     *
     * 쇼핑몰/오픈마켓/카카오페이 주문을 취소할 경우 사용 불가
     *
     * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * 51 : 구매 의사 취소
     * 52 : 색상 및 사이즈 변경
     * 53 : 다른 상품 잘못 주문
     * 54 : 서비스 및 상품 불만족
     * 55 : 배송 지연
     * 56 : 상품 품절
     * 60 : 상품 정보 상이
     *
     *
     */
    naverpayCancelReasonType?: any;
    /**
     * @description
     * 카카오페이 취소사유 구분
     *
     * 오픈마켓/네이버페이 주문을 취소할 경우 사용 불가
     *
     * K1 : 변심에 의한 상품 취소
     * K2 : 다른 옵션이나 상품을 잘못 주문함
     * K3 : 배송지연
     * K4 : 상품 파손 또는 불량
     * K5 : 다른 상품 오배송 또는 구성품 누락
     * K6 : 상품정보와 다름
     * K7 : 품절로 인한 배송 불가
     *
     *
     */
    kakaopayCancelReasonType?: any;
    /**
     * @description
     * 환불 방식
     *
     * T : 현금
     * F : 신용카드
     * M : 적립금
     * G : 계좌이체
     * C : 휴대폰
     * D : 예치금
     * Z : 후불
     * O : 선불금
     * V : 편의점
     * J : 제휴상품권
     * K : 제휴포인트
     * I : 기타
     *
     *
     */
    refundMethodCode?: any;
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
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     *
     */
    refundBankCode?: any;
    /**
     * @description
     * 환불은행명
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * ※ 해당 쇼핑몰이 EC Global 쇼핑몰일 경우 필수
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * 최대글자수 : [250자]
     */
    refundBankName?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
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
     * 품주코드
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

  export interface CreateAnOrderCancellationOutput {
    cancellation: {
      shopNo: number;
      orderId: string;
      status: string;
      claimCode: string;
      items: {
        orderItemCode: string;
        quantity: number;
      }[];
    };
  }
  export interface ChangeCancellationDetailsInput {
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
     * 취소번호
     *
     * @required
     */
    claimCode: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     * @required
     */
    recoverInventory: any;
    /**
     * @description
     * 철회 여부
     *
     * T : 철회함
     *
     * @required
     */
    undone: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    addMemoToo: any;
    /**
     * @description
     * 철회 사유 구분
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
     * @required
     */
    undoneReasonType: any;
    /**
     * @description
     * 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    undoneReason?: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     * @required
     */
    exposeOrderDetail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    exposedUndoneReason?: any;
  }

  export interface ChangeCancellationDetailsOutput {
    cancellation: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      recoverInventory: Cafe24Enum;
      items: {
        orderItemCode: string;
      }[];
      undone: Cafe24Enum;
      addMemoToo: Cafe24Enum;
      undoneReasonType: Cafe24Enum;
      undoneReason: string;
      exposeOrderDetail: Cafe24Enum;
      exposedUndoneReason: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 배송 전의 특정 주문을 취소할 수 있습니다.
     * 해당 API를 사용하여 취소할 경우 환불완료 처리와 함께 PG취소도 같이 진행할 수 있습니다.
     * 부분취소할 경우 각 환불 금액은 자동 계산되어 환불처리 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-cancellation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011",
     *         "status": "canceled",
     *         "claim_code": "C20190805-0000007",
     *         "items": [
     *             {
     *                 "order_item_code": "20190805-0000011-01",
     *                 "quantity": 4
     *             },
     *             {
     *                 "order_item_code": "20190805-0000011-02",
     *                 "quantity": 4
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAnOrderCancellation(
      input: CreateAnOrderCancellationInput,
      options?: RequestOptions<CreateAnOrderCancellationInput>,
    ): Promise<AxiosResponse<CreateAnOrderCancellationOutput>>;
    /**
     * @description
     * 주문의 취소접수를 철회할 수 있습니다.
     * 취소가 접수된 주문의 주문상태를 취소접수 이전의 상태로 수정할 수 있습니다.
     * 주문의 취소접수를 철회를 통해 취소접수를 철회하고 재고를 복구하거나 철회사유를 입력할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#change-cancellation-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011",
     *         "claim_code": "C20190805-0000007",
     *         "recover_inventory": "T",
     *         "items": [
     *             {
     *                 "order_item_code": "20190805-0000011-01"
     *             },
     *             {
     *                 "order_item_code": "20190805-0000011-02"
     *             }
     *         ],
     *         "undone": "T",
     *         "add_memo_too": "F",
     *         "undone_reason_type": "A",
     *         "undone_reason": "Change of mind",
     *         "expose_order_detail": "T",
     *         "exposed_undone_reason": "Dear customer, It has been undone as discussed. Thank you."
     *     }
     * }
     * ```
     */
    changeCancellationDetails(
      input: ChangeCancellationDetailsInput,
      options?: RequestOptions<ChangeCancellationDetailsInput>,
    ): Promise<AxiosResponse<ChangeCancellationDetailsOutput>>;
  }
}
