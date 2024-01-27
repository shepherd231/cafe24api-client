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
   * 현금영수증 취소(Cashreceipt cancellation)는 발행된 현금영수증에 대해 신청취소 혹은 발행취소를 할 수 있는 기능입니다.
   */
  export interface CashreceiptCancellation {
    /**
      * @description
      * 현금영수증 번호
      * 
      * 
      */ 
    cashreceiptNo: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    orderId: any;
    /**
      * @description
      * 처리상태
      * 
      * 신청취소: canceled_request
      * 발행취소: canceled_issuance
      * 
      * 
      */ 
    status: any;
  }

  export interface UpdateACashReceiptCancellationInput {
    /**
      * @description
      * 현금영수증 번호
      * 
      * @required
      * 
      * 최소값: [1]
      */ 
    cashreceiptNo: any;
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
      * 취소 타입
      * 
      * 신청취소: request
      * 발행취소: issue
      * 
      * @required
      */ 
    type: any;
  }

  export interface UpdateACashReceiptCancellationOutput {
    cancellation: { 
    cashreceiptNo: number;
    orderId: string;
    status: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 발행된 현금영수증에 대해 신청취소 혹은 발행취소를 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-cash-receipt-cancellation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": {
     *         "cashreceipt_no": 11,
     *         "order_id": "20201013-0000096",
     *         "status": "canceled_request"
     *     }
     * }
     * ```
     */
    updateACashReceiptCancellation(
      input: UpdateACashReceiptCancellationInput,
      options?: AdminRequestOptions<UpdateACashReceiptCancellationOutput['cancellation']>,
    ): Promise<AxiosResponse<UpdateACashReceiptCancellationOutput>>;
  }
}
