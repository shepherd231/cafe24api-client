import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 월별 리뷰 통계(Financials monthlyreviews)는 월별 리뷰 정보를 제공합니다.
   * 검색 기간 내의 월별 리뷰 개수 합계, 월별 리뷰 평점 평균을 확인할 수 있습니다.
   */
  export interface FinancialsMonthlyreviews {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 년월
      * 
      * 
      */ 
    month: any;
    /**
      * @description
      * 리뷰 개수 합계
      * 
      * 
      */ 
    count: any;
    /**
      * @description
      * 리뷰 평점 평균
      * 
      * 
      */ 
    rating_average: any;
  }

  export interface RetrieveTheTotalCountForMonthlyReviewsAndRatingsInput {
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
      * 검색 시작월
      * 
      * @required
      */ 
    start_month: any;
    /**
      * @description
      * 검색 종료월
      * 
      * @required
      */ 
    end_month: any;
  }

  export interface RetrieveTheTotalCountForMonthlyReviewsAndRatingsOutput {
    monthlyreviews: { 
    shop_no: number;
    month: Cafe24Datetime;
    count: number;
    rating_average: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 검색 기간 내의 월별 리뷰 정보를 조회합니다.
     * 월별 리뷰 개수 합계, 월별 리뷰 평점 평균을 확인할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-total-count-for-monthly-reviews-and-ratings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "monthlyreviews": [
     *         {
     *             "shop_no": 1,
     *             "month": "2022-04",
     *             "count": 3,
     *             "rating_average": 4
     *         },
     *         {
     *             "shop_no": 1,
     *             "month": "2022-05",
     *             "count": 5,
     *             "rating_average": 3.3300000000000001
     *         }
     *     ]
     * }
     * ```
     */
    retrieveTheTotalCountForMonthlyReviewsAndRatings(
      input: RetrieveTheTotalCountForMonthlyReviewsAndRatingsInput,
      options?: RequestOptions<RetrieveTheTotalCountForMonthlyReviewsAndRatingsOutput['monthlyreviews'][number]>,
    ): Promise<AxiosResponse<RetrieveTheTotalCountForMonthlyReviewsAndRatingsOutput>>;
  }
}
