import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 트렌드(Trends)는 상품의 &#34;제작정보&#34; 중 트렌드에 해당하는 정보에 대한 기능입니다.
   * 트렌드는 상품을 구분하는 판매분류의 하나이며, 상품은 반드시 하나의 트렌드를 갖고 있습니다.(미지정시 &#34;기본트렌드&#34;를 사용함)
   */
  export interface Trends {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    trendCode: any;
    /**
      * @description
      * 트렌드 명
      * 
      * 최대글자수 : [50자]
      */ 
    trendName: any;
    /**
      * @description
      * 트렌드 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useTrend: any;
    /**
      * @description
      * 생성일
      * 
      * 
      */ 
    createdDate: any;
    /**
      * @description
      * 상품수
      * 
      * 
      */ 
    productCount: any;
  }

  export interface RetrieveAListOfTrendsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendCode?: any;
    /**
      * @description
      * 트렌드 명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendName?: any;
    /**
      * @description
      * 트렌드 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useTrend?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * 조회하고자 하는 최대 건수를 지정할 수 있음.
      * 예) 10 입력시 10건만 표시함.
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfTrendsOutput {
    trends: { 
    shopNo: number;
    trendCode: string;
    trendName: string;
    useTrend: Cafe24Enum;
    createdDate: Cafe24Datetime;
    productCount: number;
    }[];
  }
  export interface RetrieveACountOfTrendsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendCode?: any;
    /**
      * @description
      * 트렌드 명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendName?: any;
    /**
      * @description
      * 트렌드 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useTrend?: any;
  }

  export interface RetrieveACountOfTrendsOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 트렌드를 목록으로 조회할 수 있습니다.
     * 트렌드 코드, 트렌드 명, 사용여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-trends
     *
     * @example 응답 예시
     * ```json
     * {
     *     "trends": [
     *         {
     *             "shop_no": 1,
     *             "trend_code": "T0000000",
     *             "trend_name": "Default Trend",
     *             "use_trend": "T",
     *             "created_date": "2019-10-21T15:25:35+09:00",
     *             "product_count": 2
     *         },
     *         {
     *             "shop_no": 1,
     *             "trend_code": "T000000A",
     *             "trend_name": "Default Trend",
     *             "use_trend": "F",
     *             "created_date": "2019-10-21T15:25:35+09:00",
     *             "product_count": 3
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfTrends(
      input: RetrieveAListOfTrendsInput,
      options?: RequestOptions<RetrieveAListOfTrendsOutput['trends'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfTrendsOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 트렌드의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-trends
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfTrends(
      input: RetrieveACountOfTrendsInput,
      options?: RequestOptions<RetrieveACountOfTrendsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfTrendsOutput>>;
  }
}
