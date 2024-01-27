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
   * 시간단위 정산통계(Reports hourlysales)는 특정 날짜와 시간을 기준으로 각종 매출에 관한 데이터를 조회할 수 있습니다.
   */
  export interface ReportsHourlysales {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 정산 수집 일자
      * 
      * 
      */ 
    collection_date: any;
    /**
      * @description
      * 정산 수집 시간
      * 
      * 
      */ 
    collection_hour: any;
    /**
      * @description
      * 주문수
      * 
      * 
      */ 
    order_count: any;
    /**
      * @description
      * 품목수
      * 
      * 
      */ 
    item_count: any;
    /**
      * @description
      * 상품 구매금액
      * 
      * 
      */ 
    order_price_amount: any;
    /**
      * @description
      * 할인금액
      * 
      * 
      */ 
    order_sale_price: any;
    /**
      * @description
      * 배송비
      * 
      * 
      */ 
    shipping_fee: any;
    /**
      * @description
      * 쿠폰 할인금액
      * 
      * 
      */ 
    coupon_discount_price: any;
    /**
      * @description
      * 실결제금액
      * 
      * 
      */ 
    actual_order_amount: any;
    /**
      * @description
      * 환불 금액
      * 
      * 
      */ 
    refund_amount: any;
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
    used_points: any;
    /**
      * @description
      * 예치금
      * 
      * 
      */ 
    used_credits: any;
    /**
      * @description
      * 네이버 마일리지
      * 
      * 
      */ 
    used_naver_points: any;
    /**
      * @description
      * 네이버캐시
      * 
      * 
      */ 
    used_naver_cash: any;
    /**
      * @description
      * 환불 적립금
      * 
      * 
      */ 
    refund_points: any;
    /**
      * @description
      * 환불 예치금
      * 
      * 
      */ 
    refund_credits: any;
    /**
      * @description
      * 환불 네이버 마일리지
      * 
      * 
      */ 
    refund_naver_points: any;
    /**
      * @description
      * 환불 네이버캐시
      * 
      * 
      */ 
    refund_naver_cash: any;
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
      * 정산 수집 시간
      * 
      * 수집 시간을 특정하여 검색
      * 00 ~ 23 까지의 값을 입력할 수 있다.
      * 
      * 
      */ 
    collection_hour?: any;
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
    shop_no: number;
    collection_date: Cafe24Date;
    collection_hour: Cafe24Datetime;
    order_count: number;
    item_count: number;
    order_price_amount: Cafe24Datetime;
    shipping_fee: string;
    order_sale_price: Cafe24Datetime;
    coupon_discount_price: Cafe24Datetime;
    actual_order_amount: Cafe24Datetime;
    refund_amount: string;
    sales: Cafe24Datetime;
    used_points: string;
    used_credits: string;
    used_naver_points: string;
    used_naver_cash: string;
    refund_points: string;
    refund_credits: string;
    refund_naver_points: string;
    refund_naver_cash: string;
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
      options?: AdminRequestOptions<RetrieveHourlySalesStatisticsOfAStoreOutput['hourlysales'][number]>,
    ): Promise<AxiosResponse<RetrieveHourlySalesStatisticsOfAStoreOutput>>;
  }
}
