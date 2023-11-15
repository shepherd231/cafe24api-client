import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 예치금(Credits)는 주문 환불시 환불수단으로서 받을 수 있는 현금성 자산입니다.
   * 별도의 Scope를 가지고 있으며 매우 민감한 API 이므로 이용에 주의를 기울여야 합니다.
   */
  export interface Credits {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 등록일
     *
     *
     */
    issue_date: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
    /**
     * @description
     * 회원등급명
     *
     *
     */
    group_name: any;
    /**
     * @description
     * 지급 금액
     *
     *
     */
    increase_amount: any;
    /**
     * @description
     * 차감 금액
     *
     *
     */
    decrease_amount: any;
    /**
     * @description
     * 잔액
     *
     *
     */
    balance: any;
    /**
     * @description
     * 관리자 아이디
     *
     *
     */
    admin_id: any;
    /**
     * @description
     * 관리자 이름
     *
     *
     */
    admin_name: any;
    /**
     * @description
     * 처리사유
     *
     *
     */
    reason: any;
    /**
     * @description
     * 예치금 유형
     *
     *
     */
    case: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
  }

  export interface RetrieveAListOfCreditsByDateRangeInput {
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
     * 예치금 증가/차감 여부
     *
     * I : 지급내역
     * D : 차감내역
     *
     *
     */
    type?: any;
    /**
     * @description
     * 예치금 유형
     *
     * A : 주문취소
     * B : 예치금환불
     * C : 상품구매
     * D : 임의조정
     * E : 현금환불
     * G : 충전
     *
     *
     */
    case?: any;
    /**
     * @description
     * 관리자 아이디
     *
     *
     */
    admin_id?: any;
    /**
     * @description
     * 주문번호
     *
     * 주문번호
     */
    order_id?: any;
    /**
     * @description
     * 검색필드
     *
     * id : 아이디
     * reason : 처리사유
     *
     *
     */
    search_field?: any;
    /**
     * @description
     * 검색어
     *
     *
     */
    keyword?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 50
     *
     * 최소: [1]~최대: [200]
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

  export interface RetrieveAListOfCreditsByDateRangeOutput {
    credits: {
      shop_no: number;
      issue_date: Cafe24Datetime;
      member_id: string;
      group_name: string;
      increase_amount: Cafe24Datetime;
      decrease_amount: string;
      balance: Cafe24Datetime;
      admin_id: string;
      admin_name: string;
      reason: string;
      case: Cafe24Enum;
      order_id: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 예치금을 목록으로 조회합니다.
     * 회원아이디, 지금 금액, 예치금 유형등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-credits-by-date-range
     *
     * @example 응답 예시
     * ```json
     * {
     *     "credits": [
     *         {
     *             "shop_no": 1,
     *             "issue_date": "2018-05-18T11:56:41+09:00",
     *             "member_id": "sampleid",
     *             "group_name": "Standard Membership",
     *             "increase_amount": "1000.00",
     *             "decrease_amount": "",
     *             "balance": "1000.00",
     *             "admin_id": "admin",
     *             "admin_name": "John Doe",
     *             "reason": "credits for order refund",
     *             "case": "C",
     *             "order_id": "20180421-0000010"
     *         },
     *         {
     *             "shop_no": 1,
     *             "issue_date": "2018-06-18T12:01:34+09:00",
     *             "member_id": "sampleid",
     *             "group_name": "Standard Membership",
     *             "increase_amount": "1000.00",
     *             "decrease_amount": "",
     *             "balance": "2000.00",
     *             "admin_id": "admin",
     *             "admin_name": "John Doe",
     *             "reason": "credits for order refund",
     *             "case": "B",
     *             "order_id": "20180425-0000012"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCreditsByDateRange(
      input: RetrieveAListOfCreditsByDateRangeInput,
      options?: RequestOptions<RetrieveAListOfCreditsByDateRangeInput>,
    ): Promise<AxiosResponse<RetrieveAListOfCreditsByDateRangeOutput>>;
  }
}
