import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 시간단위 정산통계(Reports hourlysales)는 특정 날짜와 시간을 기준으로 각종 매출에 관한 데이터를 조회할 수 있습니다.
   */
  export interface ReportsHourlysales {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 정산 수집 일자
     *
     *
     */
    collectionDate: any;
    /**
     * @description
     * 정산 수집 시간
     *
     *
     */
    collectionHour: any;
    /**
     * @description
     * 주문수
     *
     *
     */
    orderCount: any;
    /**
     * @description
     * 품목수
     *
     *
     */
    itemCount: any;
    /**
     * @description
     * 상품 구매금액
     *
     *
     */
    orderPriceAmount: any;
    /**
     * @description
     * 할인금액
     *
     *
     */
    orderSalePrice: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: any;
    /**
     * @description
     * 쿠폰 할인금액
     *
     *
     */
    couponDiscountPrice: any;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualOrderAmount: any;
    /**
     * @description
     * 환불 금액
     *
     *
     */
    refundAmount: any;
    /**
     * @description
     * 순매출
     *
     *
     */
    sales: any;
    /**
     * @description
     * 적립금
     *
     *
     */
    usedPoints: any;
    /**
     * @description
     * 예치금
     *
     *
     */
    usedCredits: any;
    /**
     * @description
     * 네이버 마일리지
     *
     *
     */
    usedNaverPoints: any;
    /**
     * @description
     * 네이버캐시
     *
     *
     */
    usedNaverCash: any;
    /**
     * @description
     * 환불 적립금
     *
     *
     */
    refundPoints: any;
    /**
     * @description
     * 환불 예치금
     *
     *
     */
    refundCredits: any;
    /**
     * @description
     * 환불 네이버 마일리지
     *
     *
     */
    refundNaverPoints: any;
    /**
     * @description
     * 환불 네이버캐시
     *
     *
     */
    refundNaverCash: any;
  }

  export interface RetrieveHourlySalesStatisticsOfAStoreInput {
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
     * 검색 시작일
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
     * @required
     *
     * 날짜
     */
    endDate: any;
    /**
     * @description
     * 정산 수집 시간
     *
     * 수집 시간을 특정하여 검색
     * 00 ~ 23 까지의 값을 입력할 수 있다.
     *
     *
     */
    collectionHour?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 744
     *
     * 최소: [1]~최대: [1000]
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

  export interface RetrieveHourlySalesStatisticsOfAStoreOutput {
    hourlysales: {
      shopNo: number;
      collectionDate: Cafe24Date;
      collectionHour: Cafe24Datetime;
      orderCount: number;
      itemCount: number;
      orderPriceAmount: Cafe24Datetime;
      shippingFee: string;
      orderSalePrice: Cafe24Datetime;
      couponDiscountPrice: Cafe24Datetime;
      actualOrderAmount: Cafe24Datetime;
      refundAmount: string;
      sales: Cafe24Datetime;
      usedPoints: string;
      usedCredits: string;
      usedNaverPoints: string;
      usedNaverCash: string;
      refundPoints: string;
      refundCredits: string;
      refundNaverPoints: string;
      refundNaverCash: string;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 날짜와 시간을 기준으로 각종 매출에 관한 데이터를 목록으로 조회할 수 있습니다.
     * 주문수, 품목수, 구매금액, 할인금액 등을 조회할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-hourly-sales-statistics-of-a-store
     *
     * @example 응답 예시
     * ```json
     * {
     *     "hourlysales": [
     *         {
     *             "shop_no": 1,
     *             "collection_date": "2021-02-24",
     *             "collection_hour": "12",
     *             "order_count": 6,
     *             "item_count": 7,
     *             "order_price_amount": "53000.00",
     *             "shipping_fee": "40.00",
     *             "order_sale_price": "5050.00",
     *             "coupon_discount_price": "1000.00",
     *             "actual_order_amount": "46990.00",
     *             "refund_amount": "0.00",
     *             "sales": "46990.00",
     *             "used_points": "100.00",
     *             "used_credits": "0.00",
     *             "used_naver_points": "0.00",
     *             "used_naver_cash": "0.00",
     *             "refund_points": "0.00",
     *             "refund_credits": "0.00",
     *             "refund_naver_points": "0.00",
     *             "refund_naver_cash": "0.00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "collection_date": "2021-02-24",
     *             "collection_hour": "11",
     *             "order_count": 2,
     *             "item_count": 4,
     *             "order_price_amount": "85000.00",
     *             "shipping_fee": "20.00",
     *             "order_sale_price": "20.00",
     *             "coupon_discount_price": "0.00",
     *             "actual_order_amount": "85000.00",
     *             "refund_amount": "0.00",
     *             "sales": "85000.00",
     *             "used_points": "300.00",
     *             "used_credits": "0.00",
     *             "used_naver_points": "0.00",
     *             "used_naver_cash": "0.00",
     *             "refund_points": "0.00",
     *             "refund_credits": "0.00",
     *             "refund_naver_points": "0.00",
     *             "refund_naver_cash": "0.00"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/reports/hourlysales?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveHourlySalesStatisticsOfAStore(
      input: RetrieveHourlySalesStatisticsOfAStoreInput,
      options?: RequestOptions<
        RetrieveHourlySalesStatisticsOfAStoreOutput['hourlysales'][number]
      >,
    ): Promise<AxiosResponse<RetrieveHourlySalesStatisticsOfAStoreOutput>>;
  }
}
