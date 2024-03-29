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
   * 결제상태(Payments)는 특정 주문의 결제상태에 대한 기능입니다.
   */
  export interface Payments {
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
     * paid: 입금확인
     * unpaid: 입금전
     * canceled: 결제취소
     *
     *
     */
    status: any;
    /**
     * @description
     * 자동입금 여부
     *
     * T: 자동입금
     * F: 수동입금
     *
     *
     */
    autoPaid: any;
    /**
     * @description
     * 결제취소 요청 정보
     *
     *
     */
    cancelRequest: any;
  }

  export interface UpdatePaymentStatusForMultipleOrdersInput {
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
     * 결제상태
     *
     * canceled의 경우 앱을 통해 추가된 PG사에서 결제를 취소할 경우에만 사용 가능
     *
     * paid: 입금확인
     * unpaid: 입금전
     * canceled: 결제취소
     *
     * @required
     */
    status: any;
    /**
     * @description
     * 자동입금 여부
     *
     * T: 자동입금
     * F: 수동입금
     *
     *
     */
    autoPaid?: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recoverInventory?: any;
    /**
     * @description
     * 결제취소 요청 정보
     *
     *
     */
    cancelRequest?: {
      /**
       * @description
       * 환불 처리 상태
       * P: 환불완료
       * F: 환불실패
       * @default F
       *
       *
       */
      refundStatus?: any;
      /**
       * @description
       * 부분 취소 여부
       * T: 부분취소
       * F: 전체취소
       * @default F
       *
       *
       */
      partialCancel?: any;
      /**
       * @description
       * 결제 PG사 이름
       *
       *
       */
      paymentGatewayName?: any;
      /**
       * @description
       * 결제수단 코드
       * card : 신용카드
       * tcash : 계좌이체
       * icash : 가상계좌
       * cell : 휴대폰
       * deferpay : 후불
       * cvs : 편의점
       * easypay : 간편결제
       * fpayment : 해외결제
       *
       *
       */
      paymentMethod?: any;
      /**
       * @description
       * 결제 PG 사의 응답 코드
       *
       *
       */
      responseCode?: any;
      /**
       * @description
       * 결제 PG 사의 응답 메시지
       *
       *
       */
      responseMessage?: any;
    };
  }

  export interface UpdatePaymentStatusForMultipleOrdersOutput {
    payments: {
      shopNo: number;
      orderId: string;
      status: string;
      cancelRequest: {
        refundStatus: Cafe24Enum;
        partialCancel: Cafe24Enum;
        paymentGatewayName: any;
        paymentMethod: any;
        responseCode: any;
        responseMessage: any;
      };
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 결제상태를 수정할 수 있습니다.
     * 결제취소 상태로 변경하고자 할 경우, 앱을 통해 등록된 PG사에서 결제를 취소할 경우에만 사용이 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-payment-status-for-multiple-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "payments": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20180402-0000032",
     *             "status": "paid",
     *             "cancel_request": {
     *                 "refund_status": "F",
     *                 "partial_cancel": "F",
     *                 "payment_gateway_name": null,
     *                 "payment_method": null,
     *                 "response_code": null,
     *                 "response_message": null
     *             }
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20180402-0000013",
     *             "status": "unpaid",
     *             "cancel_request": {
     *                 "refund_status": "F",
     *                 "partial_cancel": "F",
     *                 "payment_gateway_name": null,
     *                 "payment_method": null,
     *                 "response_code": null,
     *                 "response_message": null
     *             }
     *         }
     *     ]
     * }
     * ```
     */
    updatePaymentStatusForMultipleOrders(
      input: UpdatePaymentStatusForMultipleOrdersInput,
      options?: AdminRequestOptions<
        UpdatePaymentStatusForMultipleOrdersOutput['payments'][number]
      >,
    ): Promise<AxiosResponse<UpdatePaymentStatusForMultipleOrdersOutput>>;
  }
}
