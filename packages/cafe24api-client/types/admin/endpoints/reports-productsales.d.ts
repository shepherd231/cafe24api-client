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
   * 상품판매통계(Reports productsales)를 활용하여 상품을 기준으로 판매된 통계를 조회할 수 있습니다.
   */
  export interface ReportsProductsales {
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
      * 상품번호
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 품목코드
      * 
      * 
      */ 
    variants_code: any;
    /**
      * @description
      * 상품 구매금액
      * 
      * 
      */ 
    product_price: any;
    /**
      * @description
      * 결제완료 수량
      * 
      * 
      */ 
    settle_count: any;
    /**
      * @description
      * 환불완료 수량
      * 
      * 
      */ 
    refund_count: any;
    /**
      * @description
      * 판매완료 수량
      * 
      * 
      */ 
    sale_count: any;
    /**
      * @description
      * 반품완료 수량
      * 
      * 
      */ 
    return_product_count: any;
    /**
      * @description
      * 교환완료 수량
      * 
      * 
      */ 
    exchange_product_count: any;
    /**
      * @description
      * 취소완료 수량
      * 
      * 
      */ 
    cancel_product_count: any;
    /**
      * @description
      * 누적 판매 수량
      * 
      * 
      */ 
    total_sale_count: any;
    /**
      * @description
      * 누적 취소 수량
      * 
      * 
      */ 
    total_cancel_count: any;
  }

  export interface RetrieveHourlyProductSalesStatisticsOfAStoreInput {
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
      * @default 100
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

  export interface RetrieveHourlyProductSalesStatisticsOfAStoreOutput {
    productsales: { 
    shop_no: number;
    collection_date: Cafe24Date;
    collection_hour: string;
    product_no: number;
    variants_code: string;
    product_price: Cafe24Datetime;
    settle_count: number;
    refund_count: number;
    sale_count: number;
    exchange_product_count: number;
    cancel_product_count: number;
    return_product_count: number;
    total_sale_count: number;
    total_cancel_count: number;
    }[];
    links: { 
    rel: string;
    href: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품을 기준으로 판매통계를 조회할 수 있습니다.
     * 품목코드, 결제완료 수량, 환불완료 수량, 누적판매 수량 등을 조회할 수 있습니다.
     * 특정 기간과 시간을 기준으로도 조회가 가능합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-hourly-product-sales-statistics-of-a-store
     *
     * @example 응답 예시
     * ```json
     * {
     *     "productsales": [
     *         {
     *             "shop_no": 1,
     *             "collection_date": "2021-02-25",
     *             "collection_hour": "16",
     *             "product_no": 25,
     *             "variants_code": "P000ZNEM000A",
     *             "product_price": "10000.00",
     *             "settle_count": 1,
     *             "refund_count": 0,
     *             "sale_count": 1,
     *             "exchange_product_count": 0,
     *             "cancel_product_count": 0,
     *             "return_product_count": 0,
     *             "total_sale_count": 1,
     *             "total_cancel_count": 0
     *         },
     *         {
     *             "shop_no": 1,
     *             "collection_date": "2021-02-25",
     *             "collection_hour": "15",
     *             "product_no": 26,
     *             "variants_code": "P000ZORU000A",
     *             "product_price": "1000.00",
     *             "settle_count": 1,
     *             "refund_count": 0,
     *             "sale_count": 1,
     *             "exchange_product_count": 0,
     *             "cancel_product_count": 0,
     *             "return_product_count": 0,
     *             "total_sale_count": 1,
     *             "total_cancel_count": 0
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/reports/productsales?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveHourlyProductSalesStatisticsOfAStore(
      input: RetrieveHourlyProductSalesStatisticsOfAStoreInput,
      options?: AdminRequestOptions<RetrieveHourlyProductSalesStatisticsOfAStoreOutput['productsales'][number]>,
    ): Promise<AxiosResponse<RetrieveHourlyProductSalesStatisticsOfAStoreOutput>>;
  }
}
