import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 적립금 통계(Points report)는 지정한 기간동안의 가용적립금의 증감 내역, 미가용 적립금의 총액 등 적립금과 관련된 통계를 조회할 수 있는 리소스입니다.
   */
  export interface PointsReport {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 가용 적립금 증가
     *
     *
     */
    availablePointsIncrease: any;
    /**
     * @description
     * 가용 적립금 차감
     *
     *
     */
    availablePointsDecrease: any;
    /**
     * @description
     * 가용 적립금 전체
     *
     *
     */
    availablePointsTotal: any;
    /**
     * @description
     * 미가용 적립금
     *
     *
     */
    unavailablePoints: any;
    /**
     * @description
     * 미가용 회원 쿠폰 적립금
     *
     *
     */
    unavailableCouponPoints: any;
  }

  export interface RetrieveAPointsReportByDateRangeInput {
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
     * 최대글자수 : [20자]
     */
    memberId?: any;
    /**
     * @description
     * 이메일
     *
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    groupNo?: any;
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

  export interface RetrieveAPointsReportByDateRangeOutput {
    report: {
      shopNo: number;
      availablePointsIncrease: string;
      availablePointsDecrease: string;
      availablePointsTotal: string;
      unavailablePoints: Cafe24Datetime;
      unavailableCouponPoints: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 기간 동안의 적립금의 증감에 관한 통계를 조회할 수 있습니다.
     * 가용 적립금의 증가, 차감, 전체를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-points-report-by-date-range
     *
     * @example 응답 예시
     * ```json
     * {
     *     "report": {
     *         "shop_no": 1,
     *         "available_points_increase": "100.00",
     *         "available_points_decrease": "20.00",
     *         "available_points_total": "80.00",
     *         "unavailable_points": "1500.00",
     *         "unavailable_coupon_points": "1169.00"
     *     }
     * }
     * ```
     */
    retrieveAPointsReportByDateRange(
      input: RetrieveAPointsReportByDateRangeInput,
      options?: RequestOptions<
        RetrieveAPointsReportByDateRangeOutput['report']
      >,
    ): Promise<AxiosResponse<RetrieveAPointsReportByDateRangeOutput>>;
  }
}
