import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 환불(Refunds)은 주문의 상태가 환불과 관련된 상태에 대해 조회할 수 있는 기능입니다.
   * 환불전, 환불보류, 환불완료 단계가 아닌 주문에 대해서는 조회할 수 없으므로 주문상태를 잘 확인하고 사용해주세요.
   */
  export interface Refunds {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 회원 이메일
     *
     *
     */
    member_email: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyer_email: any;
    /**
     * @description
     * 주문일
     *
     *
     */
    order_date: any;
    /**
     * @description
     * 환불접수일자
     *
     *
     */
    accepted_refund_date: any;
    /**
     * @description
     * 환불완료일자
     *
     *
     */
    refund_date: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 환불번호
     *
     *
     */
    refund_code: any;
    /**
     * @description
     * 품주코드 목록
     *
     *
     */
    order_item_code: any;
    /**
     * @description
     * 수량
     *
     *
     */
    quantity: any;
    /**
     * @description
     * 실환불금액
     *
     *
     */
    actual_refund_amount: any;
    /**
     * @description
     * 사용된 적립금 반환액
     *
     *
     */
    used_points: any;
    /**
     * @description
     * 사용된 예치금 반환액
     *
     *
     */
    used_credits: any;
    /**
     * @description
     * 화폐단위
     *
     *
     */
    currency: any;
    /**
     * @description
     * 결제수단
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * icash : 가상계좌
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * giftcard : 제휴상품권
     * pointcard : 제휴포인트
     * etc : 기타
     *
     *
     */
    payment_methods: any;
    /**
     * @description
     * 환불 결제수단
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * giftcard : 제휴상품권
     * pointcard : 제휴포인트
     * etc : 기타
     *
     *
     */
    refund_payment_methods: any;
    /**
     * @description
     * PG 취소상태
     *
     * F : 취소전
     * M : 부분취소 완료
     * T : 전체취소 완료
     *
     *
     */
    payment_gateway_cancel_statuses: any;
    /**
     * @description
     * PG 취소처리 일자
     *
     *
     */
    payment_gateway_cancel_dates: any;
    /**
     * @description
     * 환불상태
     *
     * T : 환불완료
     * F : 환불전
     *
     *
     */
    status: any;
    /**
     * @description
     * 환불 방식
     *
     *
     */
    refund_methods: any;
    /**
     * @description
     * 환불은행명
     *
     *
     */
    refund_bank_name: any;
    /**
     * @description
     * 환불 계좌번호
     *
     *
     */
    refund_bank_account_no: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     *
     */
    refund_bank_account_holder: any;
    /**
     * @description
     * 가격에 세금 포함
     *
     * T: 세금포함
     * F: 세금제외
     *
     *
     */
    include_tax: any;
    /**
     * @description
     * 세금 정보
     *
     * 세금 관리자 앱을 사용 안 할 경우 null로 반환
     *
     *
     */
    tax: any;
    /**
     * @description
     * 적립금 반환액
     *
     *
     */
    refund_point: any;
    /**
     * @description
     * 예치금 반환액
     *
     *
     */
    refund_credit: any;
    /**
     * @description
     * 네이버 포인트 반환액
     *
     *
     */
    refund_naver_point: any;
    /**
     * @description
     * 네이버 캐시 반환액
     *
     *
     */
    refund_naver_cash: any;
    /**
     * @description
     * 환불금액
     *
     *
     */
    refund_amount: any;
    /**
     * @description
     * 상품 판매가
     *
     *
     */
    product_price: any;
    /**
     * @description
     * 배송비
     *
     * @default 0.00
     *
     *
     */
    shipping_fee: any;
    /**
     * @description
     * 환불배송비
     *
     * @default 0.00
     *
     *
     */
    refund_shipping_fee: any;
    /**
     * @description
     * 지역별 환불배송비
     *
     * @default 0.00
     *
     *
     */
    refund_regional_surcharge: any;
    /**
     * @description
     * 반품배송비
     *
     * @default 0.00
     *
     *
     */
    return_shipping_fee: any;
    /**
     * @description
     * 지역별 반품배송비
     *
     * @default 0.00
     *
     *
     */
    return_regional_surcharge: any;
    /**
     * @description
     * 추가 배송비
     *
     * @default 0.00
     *
     *
     */
    additional_shipping_fee: any;
    /**
     * @description
     * 해외배송 보험료
     *
     * @default 0.00
     *
     *
     */
    international_shipping_insurance: any;
    /**
     * @description
     * 해외배송 부가금액
     *
     * @default 0.00
     *
     *
     */
    international_shipping_additional_fee: any;
    /**
     * @description
     * 배송비할인
     *
     *
     */
    shipping_fee_discount_amount: any;
    /**
     * @description
     * 후불 결제 수수료
     *
     *
     */
    cod_fees: any;
    /**
     * @description
     * 상품별 할인금액
     *
     *
     */
    product_discount_amount: any;
    /**
     * @description
     * 회원등급 할인금액
     *
     *
     */
    member_group_discount_amount: any;
    /**
     * @description
     * 앱 상품할인금액
     *
     *
     */
    app_item_discount_amount: any;
    /**
     * @description
     * 앱 주문할인금액​​​
     *
     *
     */
    app_discount_amount: any;
    /**
     * @description
     * 쿠폰 할인금액
     *
     *
     */
    coupon_discount_amount: any;
    /**
     * @description
     * 세트상품 할인금액
     *
     *
     */
    product_bundle_discount_amount: any;
    /**
     * @description
     * 적립금사용금액
     *
     *
     */
    points_spent_amount: any;
    /**
     * @description
     * 예치금사용금액
     *
     *
     */
    credits_spent_amount: any;
    /**
     * @description
     * 네이버포인트
     *
     *
     */
    naver_point: any;
    /**
     * @description
     * 네이버캐시
     *
     *
     */
    naver_cash: any;
    /**
     * @description
     * 상품 추가 결제금액
     *
     *
     */
    additional_product_amount: any;
    /**
     * @description
     * 관리자 입력 금액
     *
     *
     */
    manually_input_amount: any;
    /**
     * @description
     * 변경된 환불금액
     *
     *
     */
    changed_refund_amount: any;
    /**
     * @description
     * 환불 담당자
     *
     *
     */
    refund_manager: any;
    /**
     * @description
     * 환불사유
     *
     *
     */
    refund_reason: any;
    /**
     * @description
     * 환불처리후 SMS 발송 여부
     *
     * T : 발송함
     * F : 발송안함
     *
     *
     */
    send_sms: any;
    /**
     * @description
     * 환불처리후 메일 발송 여부
     *
     * T : 발송함
     * F : 발송안함
     *
     *
     */
    send_mail: any;
    /**
     * @description
     * 품주 리소스
     *
     *
     */
    items: any;
  }

  export interface RetrieveAListOfRefundsInput {
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
     * 검색 시작일
     *
     * @required
     *
     * 날짜
     */
    start_date: any;
    /**
     * @description
     * 검색 종료일
     *
     * @required
     *
     * 날짜
     */
    end_date: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * accepted_refund_date : 환불접수일
     * refund_date : 환불완료일
     *
     * @default refund_date
     *
     *
     */
    date_type?: any;
    /**
     * @description
     * 회원 이메일
     *
     *
     */
    member_email?: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyer_email?: any;
    /**
     * @description
     * 주문번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 주문번호
     */
    order_id?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [500]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [15000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfRefundsOutput {
    refunds: {
      shop_no: number;
      member_id: string;
      member_email: string;
      buyer_email: string;
      order_date: Cafe24Datetime;
      accepted_refund_date: Cafe24Datetime;
      refund_date: Cafe24Datetime;
      order_id: string;
      refund_code: string;
      order_item_code: string[];
      quantity: number;
      actual_refund_amount: Cafe24Datetime;
      used_points: string;
      used_credits: string;
      currency: string;
      payment_methods: string[];
      refund_payment_methods: string[];
      payment_gateway_cancel_statuses: {
        payment_method: string;
        cancel_status: Cafe24Enum;
      }[];
      payment_gateway_cancel_dates: {
        payment_method: string;
        cancel_date: Cafe24Datetime;
      }[];
      status: Cafe24Enum;
      refund_methods: string[];
      refund_bank_name: string;
      refund_bank_account_no: Cafe24Datetime;
      refund_bank_account_holder: string;
      include_tax: Cafe24Enum;
      tax: {
        name: string;
        amount: Cafe24Datetime;
      }[];
    }[];
  }
  export interface RetrieveARefundInput {
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
     * 환불번호
     *
     * @required
     */
    refund_code: any;
    /**
     * @description
     * 품주 리소스
     *
     * @embed
     */
    items?: any;
  }

  export interface RetrieveARefundOutput {
    refund: {
      shop_no: number;
      order_id: string;
      refund_code: string;
      currency: string;
      accepted_refund_date: Cafe24Datetime;
      refund_date: Cafe24Datetime;
      status: Cafe24Enum;
      refund_point: string;
      refund_credit: string;
      refund_naver_point: string;
      refund_naver_cash: string;
      refund_amount: Cafe24Datetime;
      product_price: Cafe24Datetime;
      shipping_fee: Cafe24Datetime;
      refund_shipping_fee: Cafe24Datetime;
      refund_regional_surcharge: Cafe24Datetime;
      return_shipping_fee: string;
      return_regional_surcharge: string;
      additional_shipping_fee: string;
      international_shipping_insurance: string;
      international_shipping_additional_fee: string;
      shipping_fee_discount_amount: string;
      cod_fees: string;
      product_discount_amount: string;
      member_group_discount_amount: string;
      app_item_discount_amount: string;
      app_discount_amount: string;
      coupon_discount_amount: string;
      product_bundle_discount_amount: string;
      points_spent_amount: string;
      credits_spent_amount: string;
      naver_point: string;
      naver_cash: string;
      additional_product_amount: string;
      manually_input_amount: string;
      changed_refund_amount: string;
      refund_bank_name: string;
      refund_bank_account_no: Cafe24Datetime;
      refund_bank_account_holder: string;
      refund_manager: string;
      refund_reason: string;
      refund_methods: string[];
      send_sms: Cafe24Enum;
      send_mail: Cafe24Enum;
      payment_methods: string[];
      refund_payment_methods: string[];
      include_tax: Cafe24Enum;
      tax: {
        name: string;
        amount: Cafe24Datetime;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 환불과 관련된 상태인 주문들을 목록으로 조회할 수 있습니다.
     * 회원 이메일, 주문일, 환불접수일자 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-refunds
     *
     * @example 응답 예시
     * ```json
     * {
     *     "refunds": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "member_email": "sample@sample.com",
     *             "buyer_email": "sample@sample.com",
     *             "order_date": "2019-11-21T14:47:54+09:00",
     *             "accepted_refund_date": "2019-11-21T14:49:45+09:00",
     *             "refund_date": "2019-11-22T17:31:50+09:00",
     *             "order_id": "20191121-0000032",
     *             "refund_code": "C20191121-0000003",
     *             "order_item_code": [
     *                 "20191121-0000032-01"
     *             ],
     *             "quantity": 1,
     *             "actual_refund_amount": "12610.00",
     *             "used_points": "0.00",
     *             "used_credits": "0.00",
     *             "currency": "KRW",
     *             "payment_methods": [
     *                 "cash",
     *                 "card"
     *             ],
     *             "refund_payment_methods": [
     *                 "cash",
     *                 "card"
     *             ],
     *             "payment_gateway_cancel_statuses": [
     *                 {
     *                     "payment_method": "card",
     *                     "cancel_status": "T"
     *                 },
     *                 {
     *                     "payment_method": "giftcard",
     *                     "cancel_status": "T"
     *                 }
     *             ],
     *             "payment_gateway_cancel_dates": [
     *                 {
     *                     "payment_method": "card",
     *                     "cancel_date": "2023-07-10T12:05:10+09:00"
     *                 },
     *                 {
     *                     "payment_method": "giftcard",
     *                     "cancel_date": "2023-07-11T16:11:20+09:00"
     *                 }
     *             ],
     *             "status": "T",
     *             "refund_methods": [
     *                 "Cash refund",
     *                 "Credit card refund"
     *             ],
     *             "refund_bank_name": "Woori Bank",
     *             "refund_bank_account_no": "1234567890",
     *             "refund_bank_account_holder": "John Doe",
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
     *             "member_id": "sampleid",
     *             "member_email": "sample@sample.com",
     *             "buyer_email": "sample@sample.com",
     *             "order_date": "2019-11-18T17:28:33+09:00",
     *             "accepted_refund_date": "2019-11-18T17:31:00+09:00",
     *             "refund_date": "2019-11-18T17:31:50+09:00",
     *             "order_id": "20191118-0000018",
     *             "refund_code": "C20191118-0000001",
     *             "order_item_code": [
     *                 "20191118-0000018-01",
     *                 "20191118-0000018-02"
     *             ],
     *             "quantity": 2,
     *             "actual_refund_amount": "17610.00",
     *             "used_points": "0.00",
     *             "used_credits": "0.00",
     *             "currency": "KRW",
     *             "payment_methods": [
     *                 "cash",
     *                 "card"
     *             ],
     *             "refund_payment_methods": [
     *                 "cash",
     *                 "card"
     *             ],
     *             "payment_gateway_cancel_statuses": [
     *                 {
     *                     "payment_method": "giftcard",
     *                     "cancel_status": "T"
     *                 },
     *                 {
     *                     "payment_method": "pointcard",
     *                     "cancel_status": "T"
     *                 }
     *             ],
     *             "payment_gateway_cancel_dates": [
     *                 {
     *                     "payment_method": "giftcard",
     *                     "cancel_date": "2023-07-09T12:05:10+09:00"
     *                 },
     *                 {
     *                     "payment_method": "pointcard",
     *                     "cancel_date": "2023-07-08T16:11:20+09:00"
     *                 }
     *             ],
     *             "status": "T",
     *             "refund_methods": [
     *                 "Cash refund",
     *                 "Credit card refund"
     *             ],
     *             "refund_bank_name": "Woori Bank",
     *             "refund_bank_account_no": "1234567890",
     *             "refund_bank_account_holder": "John Doe",
     *             "include_tax": "F",
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
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfRefunds(
      input: RetrieveAListOfRefundsInput,
      options?: RequestOptions<RetrieveAListOfRefundsOutput['refunds'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfRefundsOutput>>;
    /**
     * @description
     * 특정 환불번호에 대한 정보를 조회할 수 있습니다.
     * 환불 사유, 환불 결제 수당 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-refund
     *
     * @example 응답 예시
     * ```json
     * {
     *     "refund": {
     *         "shop_no": 1,
     *         "order_id": "20191118-0000018",
     *         "refund_code": "C20191118-0000001",
     *         "currency": "KRW",
     *         "accepted_refund_date": "2019-11-18T17:31:00+09:00",
     *         "refund_date": "2019-11-18T17:31:50+09:00",
     *         "status": "T",
     *         "refund_point": "0.00",
     *         "refund_credit": "0.00",
     *         "refund_naver_point": "0.00",
     *         "refund_naver_cash": "0.00",
     *         "refund_amount": "17610.00",
     *         "product_price": "15110.00",
     *         "shipping_fee": "2500.00",
     *         "refund_shipping_fee": "2000.00",
     *         "refund_regional_surcharge": "1000.00",
     *         "return_shipping_fee": "-300.00",
     *         "return_regional_surcharge": "-200.00",
     *         "additional_shipping_fee": "0.00",
     *         "international_shipping_insurance": "0.00",
     *         "international_shipping_additional_fee": "0.00",
     *         "shipping_fee_discount_amount": "0.00",
     *         "cod_fees": "0.00",
     *         "product_discount_amount": "0.00",
     *         "member_group_discount_amount": "0.00",
     *         "app_item_discount_amount": "0.00",
     *         "app_discount_amount": "0.00",
     *         "coupon_discount_amount": "0.00",
     *         "product_bundle_discount_amount": "0.00",
     *         "points_spent_amount": "0.00",
     *         "credits_spent_amount": "0.00",
     *         "naver_point": "0.00",
     *         "naver_cash": "0.00",
     *         "additional_product_amount": "0.00",
     *         "manually_input_amount": "0.00",
     *         "changed_refund_amount": "0.00",
     *         "refund_bank_name": "Woori Bank",
     *         "refund_bank_account_no": "1234567890",
     *         "refund_bank_account_holder": "John Doe",
     *         "refund_manager": "admin_user",
     *         "refund_reason": "Refund to cash",
     *         "refund_methods": [
     *             "Cash refund",
     *             "Credit card refund"
     *         ],
     *         "send_sms": "T",
     *         "send_mail": "T",
     *         "payment_methods": [
     *             "cash",
     *             "card"
     *         ],
     *         "refund_payment_methods": [
     *             "cash",
     *             "card"
     *         ],
     *         "include_tax": "T",
     *         "tax": [
     *             {
     *                 "name": "vat",
     *                 "amount": "1000.00"
     *             },
     *             {
     *                 "name": "tax",
     *                 "amount": "800.00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveARefund(
      input: RetrieveARefundInput,
      options?: RequestOptions<RetrieveARefundOutput['refund']>,
    ): Promise<AxiosResponse<RetrieveARefundOutput>>;
  }
}
