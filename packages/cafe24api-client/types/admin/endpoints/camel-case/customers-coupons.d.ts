import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 회원 쿠폰(Customers coupons)은 특정 회원이 보유한 쿠폰에 관한 기능입니다.
   * 회원에게 발급된 쿠폰을 조회하거나 삭제할 수 있습니다.
   */
  export interface CustomersCoupons {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: any;
    /**
     * @description
     * 쿠폰 발급번호
     *
     *
     */
    issueNo: any;
    /**
     * @description
     * 쿠폰명
     *
     *
     */
    couponName: any;
    /**
     * @description
     * 사용가능 구매 금액 유형
     *
     * U : 제한 없음
     * O : 주문 금액 기준
     * P : 상품 금액 기준
     *
     *
     */
    availablePriceType: any;
    /**
     * @description
     * 사용가능 구매 금액 유형 상세
     *
     * U : 모든 상품의 주문 금액
     * I : 쿠폰 적용 상품의 주문 금액
     *
     *
     */
    availablePriceTypeDetail: any;
    /**
     * @description
     * 사용가능 구매 금액
     *
     *
     */
    availableMinPrice: any;
    /**
     * @description
     * 사용가능 결제수단
     *
     * all : 제한없음
     * R : 무통장입금
     * E : 가상계좌
     * C : 신용카드
     * A : 계좌이체
     * H : 휴대폰
     * M : 적립금
     * K : 케이페이
     * P : 페이나우
     * N : 페이코
     * O : 카카오페이
     * S : 스마일페이
     * V : 네이버페이
     * B : 편의점
     * D : 토스
     *
     *
     */
    availablePaymentMethods: any;
    /**
     * @description
     * 혜택 구분
     *
     * A : 할인금액
     * B : 할인율
     * C : 적립금액
     * D : 적립율
     * E : 기본배송비 할인(전액할인)
     * I : 기본배송비 할인(할인율)
     * H : 기본배송비 할인(할인금액)
     * F : 즉시적립
     * G : 예치금
     *
     *
     */
    benefitType: any;
    /**
     * @description
     * 혜택 금액
     *
     *
     */
    benefitPrice: any;
    /**
     * @description
     * 혜택 비율
     *
     *
     */
    benefitPercentage: any;
    /**
     * @description
     * 혜택 비율 절사 단위
     *
     *
     */
    benefitPercentageRoundUnit: any;
    /**
     * @description
     * 혜택 비율 최대 금액
     *
     *
     */
    benefitPercentageMaxPrice: any;
    /**
     * @description
     * 예치금 지급 금액
     *
     *
     */
    creditAmount: any;
    /**
     * @description
     * 발행일
     *
     *
     */
    issuedDate: any;
    /**
     * @description
     * 사용 기간 시작 일시
     *
     *
     */
    availableBeginDatetime: any;
    /**
     * @description
     * 사용 기간 종료 일시
     *
     *
     */
    availableEndDatetime: any;
  }

  export interface RetrieveAListOfCustomerCouponsInput {
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
     * 회원아이디
     *
     * @required
     */
    memberId: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [10000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfCustomerCouponsOutput {
    coupons: {
      shopNo: number;
      couponNo: Cafe24Datetime;
      issueNo: Cafe24Datetime;
      couponName: string;
      availablePriceType: Cafe24Enum;
      availablePriceTypeDetail: any;
      availableMinPrice: any;
      availablePaymentMethods: Cafe24Enum[];
      benefitType: Cafe24Enum;
      benefitPrice: string;
      benefitPercentage: any;
      benefitPercentageRoundUnit: any;
      benefitPercentageMaxPrice: any;
      creditAmount: any;
      issuedDate: Cafe24Datetime;
      availableBeginDatetime: Cafe24Datetime;
      availableEndDatetime: Cafe24Datetime;
    }[];
  }
  export interface RetrieveACountOfCustomerCouponsInput {
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
     * 회원아이디
     *
     * @required
     */
    memberId: any;
  }

  export interface RetrieveACountOfCustomerCouponsOutput {
    count: number;
  }
  export interface DeleteACustomerCouponInput {
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
     * 회원아이디
     *
     * @required
     */
    memberId: any;
    /**
     * @description
     * 쿠폰번호
     *
     * @required
     */
    couponNo: any;
    /**
     * @description
     * 쿠폰 발급번호
     *
     *
     */
    issueNo?: any;
  }

  export interface DeleteACustomerCouponOutput {
    coupon: {
      shopNo: number;
      couponNo: Cafe24Datetime;
      issueNo: Cafe24Datetime[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 회원에게 발급된 쿠폰을 목록으로 조회합니다.
     * 쿠폰번호, 혜택 구분, 적용 범위등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-coupons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupons": [
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000032",
     *             "issue_no": "9000000000000000040",
     *             "coupon_name": "Christmas Week Coupon",
     *             "available_price_type": "U",
     *             "available_price_type_detail": null,
     *             "available_min_price": null,
     *             "available_payment_methods": [
     *                 "R",
     *                 "E"
     *             ],
     *             "benefit_type": "A",
     *             "benefit_price": "10.00",
     *             "benefit_percentage": null,
     *             "benefit_percentage_round_unit": null,
     *             "benefit_percentage_max_price": null,
     *             "credit_amount": null,
     *             "issued_date": "2019-09-19T11:56:41+09:00",
     *             "available_begin_datetime": "2019-09-19T00:00:00+09:00",
     *             "available_end_datetime": "2019-09-22T23:00:00+09:00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000033",
     *             "issue_no": "9000000000000000050",
     *             "coupon_name": "Special Discount Coupon",
     *             "available_price_type": "O",
     *             "available_price_type_detail": "U",
     *             "available_min_price": "2.00",
     *             "available_payment_methods": [
     *                 "R",
     *                 "E"
     *             ],
     *             "benefit_type": "B",
     *             "benefit_price": null,
     *             "benefit_percentage": "10.0",
     *             "benefit_percentage_round_unit": "10",
     *             "benefit_percentage_max_price": null,
     *             "credit_amount": null,
     *             "issued_date": "2019-09-20T11:56:41+09:00",
     *             "available_begin_datetime": "2019-09-20T00:00:00+09:00",
     *             "available_end_datetime": "2019-09-23T23:00:00+09:00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerCoupons(
      input: RetrieveAListOfCustomerCouponsInput,
      options?: RequestOptions<
        RetrieveAListOfCustomerCouponsOutput['coupons'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerCouponsOutput>>;
    /**
     * @description
     * 회원에게 발급된 쿠폰의 개수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customer-coupons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 7
     * }
     * ```
     */
    retrieveACountOfCustomerCoupons(
      input: RetrieveACountOfCustomerCouponsInput,
      options?: RequestOptions<RetrieveACountOfCustomerCouponsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCustomerCouponsOutput>>;
    /**
     * @description
     * 회원에게 발급된 쿠폰을 삭제합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-customer-coupon
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupon": {
     *         "shop_no": 1,
     *         "coupon_no": "9000000000000000032",
     *         "issue_no": [
     *             "9000000000000000040",
     *             "9000000000000000041"
     *         ]
     *     }
     * }
     * ```
     */
    deleteACustomerCoupon(
      input: DeleteACustomerCouponInput,
      options?: RequestOptions<DeleteACustomerCouponOutput['coupon']>,
    ): Promise<AxiosResponse<DeleteACustomerCouponOutput>>;
  }
}
