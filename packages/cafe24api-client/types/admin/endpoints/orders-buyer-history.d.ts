import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 주문자 수정 이력(Buyer History)은 특정 주문의 주문자 정보가 수정된 이력을 나타냅니다.
   * 주문자 정보가 수정될 때마다 이력이 추가됩니다.
   * 주문자 수정 이력 리소스를 통해 특정 주문의 주문자 정보가 수정된 내역을 확인할 수 있습니다.
   */
  export interface OrdersBuyerHistory {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * 주문자명
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 주문자 이메일
      * 
      * 이메일
      */ 
    email: any;
    /**
      * @description
      * 주문자 일반 전화
      * 
      * 
      */ 
    phone: any;
    /**
      * @description
      * 주문자 휴대 전화
      * 
      * 
      */ 
    cellphone: any;
    /**
      * @description
      * 고객 알림
      * 
      * 
      */ 
    customer_notification: any;
    /**
      * @description
      * 수정일
      * 
      * 
      */ 
    updated_date: any;
    /**
      * @description
      * 주문자 수정자 ID
      * 
      * 
      */ 
    user_id: any;
    /**
      * @description
      * 주문자 수정자 명
      * 
      * 
      */ 
    user_name: any;
  }

  export interface RetrieveAListOfCustomerHistoryOfAnOrderInput {
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
      * 
      * 주문번호
      */ 
    order_id: any;
  }

  export interface RetrieveAListOfCustomerHistoryOfAnOrderOutput {
    history: { 
    shop_no: number;
    name: string;
    email: string;
    phone: string;
    cellphone: string;
    customer_notification: string;
    updated_date: Cafe24Datetime;
    user_id: string;
    user_name: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 주문자 수정 이력을 조회할 수 있습니다.
     * 주문자명, 주문자 이메일, 휴대전화 정보등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-history-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "history": [
     *         {
     *             "shop_no": 1,
     *             "name": "Floyd Mayweather",
     *             "email": "sample@gmail.com",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "customer_notification": "Customer Notify Sample",
     *             "updated_date": "2020-07-13T15:19:45+09:00",
     *             "user_id": "sampleid",
     *             "user_name": "John Doe"
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "Floyd Mayweather",
     *             "email": "sample@gmail.com",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "customer_notification": "Customer Notify Sample",
     *             "updated_date": "2020-07-13T15:19:45+09:00",
     *             "user_id": "sampleid",
     *             "user_name": "John Doe"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerHistoryOfAnOrder(
      input: RetrieveAListOfCustomerHistoryOfAnOrderInput,
      options?: RequestOptions<RetrieveAListOfCustomerHistoryOfAnOrderOutput['history'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerHistoryOfAnOrderOutput>>;
  }
}
