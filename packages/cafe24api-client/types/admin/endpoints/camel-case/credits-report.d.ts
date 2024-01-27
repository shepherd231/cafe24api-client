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
   * 
   * 
   * 예치금 통계(Credit report)는 지정한 기간동안의 예치금 통계를 조회할 수 있는 리소스입니다.
   */
  export interface CreditsReport {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 지급 금액
      * 
      * 
      */ 
    increaseAmount: any;
    /**
      * @description
      * 차감 금액
      * 
      * 
      */ 
    decreaseAmount: any;
    /**
      * @description
      * 예치금 합계
      * 
      * 
      */ 
    creditsTotal: any;
  }

  export interface RetrieveACreditReportByDateRangeInput {
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
    adminId?: any;
    /**
      * @description
      * 검색필드
      * 
      * id : 아이디
      * reason : 처리사유
      * 
      * 
      */ 
    searchField?: any;
    /**
      * @description
      * 검색어
      * 
      * 
      */ 
    keyword?: any;
  }

  export interface RetrieveACreditReportByDateRangeOutput {
    report: { 
    shopNo: number;
    increaseAmount: Cafe24Datetime;
    decreaseAmount: string;
    creditsTotal: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 예치금 통계를 조회합니다.
     * 지급 금액, 차감 금액, 예치금 합계를 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-credit-report-by-date-range
     *
     * @example 응답 예시
     * ```json
     * {
     *     "report": {
     *         "shop_no": 1,
     *         "increase_amount": "1000.00",
     *         "decrease_amount": "0.00",
     *         "credits_total": "1000.00"
     *     }
     * }
     * ```
     */
    retrieveACreditReportByDateRange(
      input: RetrieveACreditReportByDateRangeInput,
      options?: AdminRequestOptions<RetrieveACreditReportByDateRangeOutput['report']>,
    ): Promise<AxiosResponse<RetrieveACreditReportByDateRangeOutput>>;
  }
}
