import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문의 배송비취소(Orders shippingfeecancellation)를 통해 주문의 취소현황을 조회하거나 취소처리를 요청할 수 있습니다.
   */
  export interface OrdersShippingfeecancellation {
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
     * 기본 배송비
     *
     *
     */
    defaultShippingFee: any;
    /**
     * @description
     * 공급사배송비
     *
     *
     */
    supplierShippingFee: any;
    /**
     * @description
     * 개별배송비
     *
     *
     */
    individualShippingFee: any;
    /**
     * @description
     * 해외배송비
     *
     *
     */
    internationalShippingFee: any;
    /**
     * @description
     * 해외배송 보험료
     *
     *
     */
    internationalShippingInsuranceFee: any;
    /**
     * @description
     * 추가 배송비
     *
     *
     */
    additionalShippingFee: any;
    /**
     * @description
     * 해외배송 부가금액
     *
     *
     */
    additionalHandlingFee: any;
    /**
     * @description
     * 지역별 배송비
     *
     *
     */
    regionalSurchargeAmount: any;
    /**
     * @description
     * 취소 번호
     *
     *
     */
    claimCode: any;
    /**
     * @description
     * 구분
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
    claimReasonType: any;
    /**
     * @description
     * 사유
     *
     *
     */
    claimReason: any;
    /**
     * @description
     * 환불 방식
     *
     *
     */
    refundMethod: any;
    /**
     * @description
     * 배송비할인 취소액
     *
     *
     */
    shippingDiscountAmount: any;
    /**
     * @description
     * 쿠폰할인 취소액
     *
     *
     */
    couponDiscountAmount: any;
    /**
     * @description
     * 환불금액
     *
     *
     */
    refundAmount: any;
    /**
     * @description
     * 사용된 적립금 반환액
     *
     *
     */
    pointUsed: any;
    /**
     * @description
     * 사용된 예치금 반환액
     *
     *
     */
    creditUsed: any;
    /**
     * @description
     * 복합 환불 금액
     *
     *
     */
    mixedRefundAmount: any;
    /**
     * @description
     * 복합 환불 방식
     *
     *
     */
    mixedRefundMethods: any;
    /**
     * @description
     * 주문상태
     *
     * canceled: 취소완료
     * canceling : 취소처리중
     *
     *
     */
    status: any;
    /**
     * @description
     * 가격에 세금 포함
     *
     * T: 세금포함
     * F: 세금제외
     *
     *
     */
    includeTax: any;
    /**
     * @description
     * 세금 정보
     *
     * 세금 관리자 앱을 사용 안 할 경우 null로 반환
     *
     *
     */
    tax: any;
  }

  export interface RetrieveShippingFeeCancellationDetailsOfAnOrderInput {
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
  }

  export interface RetrieveShippingFeeCancellationDetailsOfAnOrderOutput {
    shippingfeecancellation: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      claimReasonType: Cafe24Enum;
      claimReason: string;
      status: string;
      defaultShippingFee: Cafe24Datetime;
      supplierShippingFee: string;
      individualShippingFee: string;
      internationalShippingFee: string;
      internationalShippingInsuranceFee: string;
      additionalShippingFee: string;
      additionalHandlingFee: string;
      regionalSurchargeAmount: string;
      refundMethod: string;
      shippingDiscountAmount: Cafe24Datetime;
      couponDiscountAmount: string;
      refundAmount: Cafe24Datetime;
      pointUsed: string;
      creditUsed: string;
      mixedRefundAmount: string;
      mixedRefundMethods: any;
      includeTax: Cafe24Enum;
      tax: {
        name: string;
        amount: Cafe24Datetime;
      }[];
    }[];
  }
  export interface CreateAnOrderShippingFeeCancellationInput {
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
     * 취소사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 취소사유 구분
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
    claimReasonType?: any;
    /**
     * @description
     * 쿠폰 복원
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
     * 최대글자수 : [30자]
     */
    refundBankAccountHolder?: any;
    /**
     * @description
     * PG 취소 요청 여부
     *
     * T : 취소함
     * F : 취소안함
     *
     * @default F
     *
     *
     */
    paymentGatewayCancel?: any;
  }

  export interface CreateAnOrderShippingFeeCancellationOutput {
    shippingfeecancellation: {
      shopNo: number;
      orderId: string;
      claimCode: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문의 취소처리 현황을 목록으로 조회할 수 있습니다.
     * 기본 배송비, 공급사 배송비, 지역별 배송비 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-shipping-fee-cancellation-details-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingfeecancellation": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20200814-0000011",
     *             "claim_code": "C20200814-0000001",
     *             "claim_reason_type": "A",
     *             "claim_reason": "Free shipping",
     *             "status": "canceled",
     *             "default_shipping_fee": "2500.00",
     *             "supplier_shipping_fee": "0.00",
     *             "individual_shipping_fee": "0.00",
     *             "international_shipping_fee": "0.00",
     *             "international_shipping_insurance_fee": "0.00",
     *             "additional_shipping_fee": "0.00",
     *             "additional_handling_fee": "0.00",
     *             "regional_surcharge_amount": "0.00",
     *             "refund_method": "Cash refund",
     *             "shipping_discount_amount": "1000.00",
     *             "coupon_discount_amount": "0.00",
     *             "refund_amount": "1500.00",
     *             "point_used": "0.00",
     *             "credit_used": "0.00",
     *             "mixed_refund_amount": "0.00",
     *             "mixed_refund_methods": null,
     *             "include_tax": "T",
     *             "tax": [
     *                 {
     *                     "name": "vat",
     *                     "amount": "1000.00"
     *                 },
     *                 {
     *                     "name": "tax",
     *                     "amount": "800.00"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20200814-0000011",
     *             "claim_code": "C20200814-0000002",
     *             "claim_reason_type": "B",
     *             "claim_reason": "delayed delivery",
     *             "status": "canceling",
     *             "default_shipping_fee": "0.00",
     *             "supplier_shipping_fee": "0.00",
     *             "individual_shipping_fee": "0.00",
     *             "international_shipping_fee": "0.00",
     *             "international_shipping_insurance_fee": "0.00",
     *             "additional_shipping_fee": "0.00",
     *             "additional_handling_fee": "0.00",
     *             "regional_surcharge_amount": "0.00",
     *             "refund_method": "Cash refund",
     *             "shipping_discount_amount": "0.00",
     *             "coupon_discount_amount": "0.00",
     *             "refund_amount": "1500.00",
     *             "point_used": "0.00",
     *             "credit_used": "0.00",
     *             "mixed_refund_amount": "0.00",
     *             "mixed_refund_methods": null,
     *             "include_tax": "T",
     *             "tax": [
     *                 {
     *                     "name": "vat",
     *                     "amount": "1100.00"
     *                 },
     *                 {
     *                     "name": "tax",
     *                     "amount": "900.00"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveShippingFeeCancellationDetailsOfAnOrder(
      input: RetrieveShippingFeeCancellationDetailsOfAnOrderInput,
      options?: RequestOptions<
        RetrieveShippingFeeCancellationDetailsOfAnOrderOutput['shippingfeecancellation'][number]
      >,
    ): Promise<
      AxiosResponse<RetrieveShippingFeeCancellationDetailsOfAnOrderOutput>
    >;
    /**
     * @description
     * 주문의 취소처리를 요청할 수 있습니다.
     * 본 API는 취소를 요청하는 것이고 취소를 처리하는 것은 아닌 점 참고 부탁 드립니다.
     * PG 취소까지 자동으로 되는 것은 아니며 payment_gateway_cancel 파라메터를 T 로 하여 함께 요청해야만 PG도 동시에 취소요청 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-shipping-fee-cancellation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingfeecancellation": {
     *         "shop_no": 1,
     *         "order_id": "20200814-0000011",
     *         "claim_code": "C20200814-0000001"
     *     }
     * }
     * ```
     */
    createAnOrderShippingFeeCancellation(
      input: CreateAnOrderShippingFeeCancellationInput,
      options?: RequestOptions<
        CreateAnOrderShippingFeeCancellationOutput['shippingfeecancellation']
      >,
    ): Promise<AxiosResponse<CreateAnOrderShippingFeeCancellationOutput>>;
  }
}
