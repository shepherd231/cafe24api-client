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
   * 주문 환불(Orders refunds)은 특정 주문의 환불상태와 관련된 기능입니다.
   * 특정 주문의 환불상태를 수정할 수 있습니다.
   */
  export interface OrdersRefunds {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 환불번호
      * 
      * 
      */ 
    refundCode: any;
    /**
      * @description
      * 환불상태
      * 
      * 
      */ 
    status: any;
    /**
      * @description
      * 처리사유
      * 
      * 
      */ 
    reason: any;
  }

  export interface UpdateAnOrderRefundInput {
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
      * 환불번호
      * 
      * @required
      */ 
    refundCode: any;
    /**
      * @description
      * 환불상태
      * 
      * complete : 환불완료
      * 
      * @required
      */ 
    status: any;
    /**
      * @description
      * 처리사유
      * 
      * 최대글자수 : [2000자]
      */ 
    reason?: any;
    /**
      * @description
      * 환불처리후 SMS 발송 여부
      * 
      * T : 발송함
      * F : 발송안함
      * 
      * @default T
      * 
      * 
      */ 
    sendSms?: any;
    /**
      * @description
      * 환불처리후 메일 발송 여부
      * 
      * T : 발송함
      * F : 발송안함
      * 
      * @default T
      * 
      * 
      */ 
    sendMail?: any;
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

  export interface UpdateAnOrderRefundOutput {
    refund: { 
    shopNo: number;
    refundCode: string;
    status: string;
    reason: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 환불상태를 수정할 수 있습니다.
     * 처리사유를 입력할 수 있고 환불처리 후 SMS 나 메일도 발송되게끔 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-refund
     *
     * @example 응답 예시
     * ```json
     * {
     *     "refund": {
     *         "shop_no": 1,
     *         "refund_code": "C20190130-0000004",
     *         "status": "complete",
     *         "reason": "Refund complete"
     *     }
     * }
     * ```
     */
    updateAnOrderRefund(
      input: UpdateAnOrderRefundInput,
      options?: AdminRequestOptions<UpdateAnOrderRefundOutput['refund']>,
    ): Promise<AxiosResponse<UpdateAnOrderRefundOutput>>;
  }
}
