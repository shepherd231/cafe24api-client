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
   * 앱스토어 주문을 결제 완료한 경우 앱스토어 결제 조회를 통해 결제 내역을 확인할 수 있습니다.
   */
  export interface AppstorePayments {
    /**
      * @description
      * 결제번호
      * 
      * 앱스토어 주문의 주문 ID
      * 
      * 
      */ 
    orderId: any;
    /**
      * @description
      * 결제상태
      * 
      * paid : 결제완료
      * refund : 환불
      * 
      * 
      */ 
    paymentStatus: any;
    /**
      * @description
      * 결제 명
      * 
      * 앱스토어 주문의 주문 이름. 주문 생성시 지정이 가능하며, 사용자가 결제시 해당 결제의 내용이 무엇인지 알 수 있는 내용이어야 함.
      * 
      * 
      */ 
    title: any;
    /**
      * @description
      * 승인번호
      * 
      * 결제 승인 번호
      * 
      * 
      */ 
    approvalNo: any;
    /**
      * @description
      * 결제 PG사 이름
      * 
      * 
      */ 
    paymentGatewayName: any;
    /**
      * @description
      * 결제수단
      * 
      * 
      */ 
    paymentMethod: any;
    /**
      * @description
      * 결제금액
      * 
      * 
      */ 
    paymentAmount: any;
    /**
      * @description
      * 환불금액
      * 
      * 
      */ 
    refundAmount: any;
    /**
      * @description
      * 화폐단위
      * 
      * KRW : ￦ 원
      * USD : $ 달러
      * JPY : ¥ 엔
      * PHP : ₱ 페소
      * 
      * 
      */ 
    currency: any;
    /**
      * @description
      * 결제국가
      * 
      * 
      */ 
    localeCode: any;
    /**
      * @description
      * 정기과금 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    automaticPayment: any;
    /**
      * @description
      * 결제승인일
      * 
      * 
      */ 
    payDate: any;
    /**
      * @description
      * 환불승인일
      * 
      * 
      */ 
    refundDate: any;
    /**
      * @description
      * 만료일
      * 
      * 
      */ 
    expirationDate: any;
  }

  export interface RetrieveAListOfCafe24StorePaymentsInput {
    /**
      * @description
      * 주문번호
      * 
      * 조회하고자하는 앱스토어 주문 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    orderId?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 해당일 이후에 결제완료된 주문 검색
      * 
      * @required
      * 
      * 날짜
      */ 
    startDate: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 해당일 이전에 결제완료된 주문 검색
      * 
      * @required
      * 
      * 날짜
      */ 
    endDate: any;
    /**
      * @description
      * 화폐단위
      * 
      * KRW : ￦ 원
      * USD : $ 달러
      * JPY : ¥ 엔
      * PHP : ₱ 페소
      * 
      * 
      */ 
    currency?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * 조회하고자 하는 최대 건수를 지정할 수 있음.
      * 예) 10 입력시 10건만 표시함.
      * 
      * @default 20
      * 
      * 최소: [1]~최대: [50]
      */ 
    limit?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [10000]
      */ 
    offset?: any;
  }

  export interface RetrieveAListOfCafe24StorePaymentsOutput {
    payments: { 
    orderId: string;
    paymentStatus: string;
    title: string;
    approvalNo: Cafe24Datetime;
    paymentGatewayName: string;
    paymentMethod: string;
    paymentAmount: Cafe24Datetime;
    refundAmount: string;
    currency: string;
    localeCode: string;
    automaticPayment: Cafe24Enum;
    payDate: Cafe24Datetime;
    refundDate: any;
    expirationDate: Cafe24Datetime;
    }[];
  }
  export interface RetrieveACountOfCafe24StorePaymentsInput {
    /**
      * @description
      * 주문번호
      * 
      * 조회하고자하는 앱스토어 주문 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    orderId?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 해당일 이후에 결제완료된 주문 검색
      * 
      * @required
      * 
      * 날짜
      */ 
    startDate: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 해당일 이전에 결제완료된 주문 검색
      * 
      * @required
      * 
      * 날짜
      */ 
    endDate: any;
    /**
      * @description
      * 화폐단위
      * 
      * KRW : ￦ 원
      * USD : $ 달러
      * JPY : ¥ 엔
      * PHP : ₱ 페소
      * 
      * 
      */ 
    currency?: any;
  }

  export interface RetrieveACountOfCafe24StorePaymentsOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰 운영자가 결제한 앱스토어 이용 결제 내역의 카운트를 확인할 수 있습니다.
     * 결제상태, 결제명, 승인번호 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-cafe24-store-payments
     *
     * @example 응답 예시
     * ```json
     * {
     *     "payments": [
     *         {
     *             "order_id": "cafe24-20180704-100000000",
     *             "payment_status": "paid",
     *             "title": "App Name_App Store Order1",
     *             "approval_no": "10000000",
     *             "payment_gateway_name": "allat",
     *             "payment_method": "card",
     *             "payment_amount": "1000.00",
     *             "refund_amount": "0.00",
     *             "currency": "KRW",
     *             "locale_code": "ko_KR",
     *             "automatic_payment": "T",
     *             "pay_date": "2018-07-04T11:19:27+09:00",
     *             "refund_date": null,
     *             "expiration_date": "2018-08-04T11:19:27+09:00"
     *         },
     *         {
     *             "order_id": "cafe24-20180704-200000000",
     *             "payment_status": "refund",
     *             "title": "App Name_App Store Order2",
     *             "approval_no": "20000000",
     *             "payment_gateway_name": "allat",
     *             "payment_method": "card",
     *             "payment_amount": "1000.00",
     *             "refund_amount": "1000.00",
     *             "currency": "KRW",
     *             "locale_code": "ko_KR",
     *             "automatic_payment": "F",
     *             "pay_date": "2018-07-04T11:19:27+09:00",
     *             "refund_date": "2018-07-05T09:12:19+09:00",
     *             "expiration_date": null
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCafe24StorePayments(
      input: RetrieveAListOfCafe24StorePaymentsInput,
      options?: AdminRequestOptions<RetrieveAListOfCafe24StorePaymentsOutput['payments'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCafe24StorePaymentsOutput>>;
    /**
     * @description
     * 쇼핑몰 운영자가 결제한 앱스토어 이용 결제 내역을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-cafe24-store-payments
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfCafe24StorePayments(
      input: RetrieveACountOfCafe24StorePaymentsInput,
      options?: AdminRequestOptions<RetrieveACountOfCafe24StorePaymentsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCafe24StorePaymentsOutput>>;
  }
}
