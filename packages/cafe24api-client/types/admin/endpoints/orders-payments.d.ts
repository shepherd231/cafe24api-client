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
   * 주문의 결제상태(Orders payments)는 특정 주문의 결제상태에 대한 기능입니다.
   */
  export interface OrdersPayments {
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
     * 결제금액 변경 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    change_payment_amount: any;
    /**
     * @description
     * 결제수단 변경 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    change_payment_method: any;
    /**
     * @description
     * 결제수단
     *
     *
     */
    payment_method: any;
    /**
     * @description
     * PG 결제 취소 실패 메시지
     *
     *
     */
    payment_gateway_failure_message: any;
    /**
     * @description
     * 관리자 입력 금액
     *
     *
     */
    admin_additional_amount: any;
    /**
     * @description
     * 결제 수수료
     *
     *
     */
    commission: any;
    /**
     * @description
     * 최초 결제 예정 금액
     *
     *
     */
    initial_estimated_payment_amount: any;
    /**
     * @description
     * 결제금액 변경 사유
     *
     *
     */
    change_payment_amount_reason: any;
  }

  export interface UpdateAnOrderPaymentStatusInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
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
     * 결제금액 변경 여부
     *
     * 입금전 상태에서만 결제금액 변경 가능
     *
     * 단, CS주문상태 또는 CS처리이력이 존재하는 경우에는 결제금액 변경 불가능함
     *
     * ※ 결제수단별 입금전 주문상태
     * - 무통장입금 : 입금전
     * - 다이비키 : 상품준비중 ~ 배송완료 [다이비키 입금전]
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    change_payment_amount: any;
    /**
     * @description
     * 결제수단 변경 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    change_payment_method: any;
    /**
     * @description
     * 결제수단
     *
     * cash: 무통장 입금
     * daibiki : 다이비키
     *
     *
     */
    payment_method?: any;
    /**
     * @description
     * 입금자명
     *
     * 결제수단을 무통장입금으로 변경할 경우(&#34;change_payment_method:&#34;T&#34;이고 &#34;payment_method&#34;:&#34;cash&#34;일 경우) 사용 가능
     *
     * 최대글자수 : [40자]
     */
    billing_name?: any;
    /**
     * @description
     * 무통장 입금 은행 ID
     *
     * 결제수단을 무통장입금으로 변경할 경우(&#34;change_payment_method:&#34;T&#34;이고 &#34;payment_method&#34;:&#34;cash&#34;일 경우) 사용 가능
     *
     *
     */
    bank_account_id?: any;
    /**
     * @description
     * 관리자 입력 금액
     *
     * 결제금액을 변경할 경우(&#34;change_payment_amount&#34;:&#34;T&#34;일 경우) 사용 가능
     *
     * 최소값: [0]
     * 최대값: [10000000]
     */
    admin_additional_amount?: any;
    /**
     * @description
     * 결제 수수료
     *
     * 결제수단을 다이비키로 변경할 경우(&#34;change_payment_amount:&#34;T&#34;이고 &#34;payment_method&#34;:&#34;daibiki&#34;일 경우) 사용 가능
     *
     * 최소값: [0]
     * 최대값: [10000000]
     */
    commission?: any;
    /**
     * @description
     * 결제금액 변경 사유
     *
     * 결제금액을 변경할 경우(&#34;change_payment_amount&#34;:&#34;T&#34;일 경우) 사용 가능
     *
     * 최대글자수 : [255자]
     */
    change_payment_amount_reason?: any;
  }

  export interface UpdateAnOrderPaymentStatusOutput {
    payment: {
      shop_no: number;
      order_id: string;
      change_payment_amount: Cafe24Enum;
      change_payment_method: Cafe24Enum;
      payment_method: string;
      payment_gateway_failure_message: any;
      admin_additional_amount: Cafe24Datetime;
      commission: any;
      initial_estimated_payment_amount: Cafe24Datetime;
      change_payment_amount_reason: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 결제상태를 수정할 수 있습니다.
     * 결제취소 상태로 변경하고자 할 경우, 앱을 통해 등록된 PG사에서 결제를 취소할 경우에만 사용이 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-payment-status
     *
     * @example 응답 예시
     * ```json
     * {
     *     "payment": {
     *         "shop_no": 1,
     *         "order_id": "20181203-0000022",
     *         "change_payment_amount": "T",
     *         "change_payment_method": "T",
     *         "payment_method": "cash",
     *         "payment_gateway_failure_message": null,
     *         "admin_additional_amount": "1000.00",
     *         "commission": null,
     *         "initial_estimated_payment_amount": "11000.00",
     *         "change_payment_amount_reason": "Remove shipping charge, add return fee"
     *     }
     * }
     * ```
     */
    updateAnOrderPaymentStatus(
      input: UpdateAnOrderPaymentStatusInput,
      options?: AdminRequestOptions<
        UpdateAnOrderPaymentStatusOutput['payment']
      >,
    ): Promise<AxiosResponse<UpdateAnOrderPaymentStatusOutput>>;
  }
}
