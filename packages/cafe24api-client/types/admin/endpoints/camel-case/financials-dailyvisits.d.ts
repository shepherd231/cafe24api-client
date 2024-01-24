import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 일별 방문수(Financials dailyvisits)는 검색 기간 내의 일별 방문수를 제공합니다.
   */
  export interface FinancialsDailyvisits {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 날짜
      * 
      * 
      */ 
    date: any;
    /**
      * @description
      * 방문수
      * 
      * 
      */ 
    visitorsCount: any;
  }

  export interface RetrieveACountOfDailyvisitsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
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
  }

  export interface RetrieveACountOfDailyvisitsOutput {
    dailyvisits: { 
    shopNo: number;
    date: Cafe24Date;
    visitorsCount: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 검색 기간 내의 일별 방문수를 조회합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-dailyvisits
     *
     * @example 응답 예시
     * ```json
     * {
     *     "dailyvisits": [
     *         {
     *             "shop_no": 1,
     *             "date": "2022-07-08",
     *             "visitors_count": 1000
     *         },
     *         {
     *             "shop_no": 1,
     *             "date": "2022-07-09",
     *             "visitors_count": 1000
     *         }
     *     ]
     * }
     * ```
     */
    retrieveACountOfDailyvisits(
      input: RetrieveACountOfDailyvisitsInput,
      options?: RequestOptions<RetrieveACountOfDailyvisitsOutput['dailyvisits'][number]>,
    ): Promise<AxiosResponse<RetrieveACountOfDailyvisitsOutput>>;
  }
}
