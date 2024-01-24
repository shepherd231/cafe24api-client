import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 일별 매출(Financials dailysales)은 PG사별, 일별 매출 정보를 제공합니다.
   * 검색 조건에 부합하는 매출 정보 검색이 가능합니다.
   */
  export interface FinancialsDailysales {
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
      * 결제 금액
      * 
      * 
      */ 
    paymentAmount: any;
    /**
      * @description
      * 환불 금액
      * 
      * 
      */ 
    refundAmount: any;
    /**
      * @description
      * 판매건수
      * 
      * 
      */ 
    salesCount: any;
  }

  export interface RetrieveAListOfDailySalesInput {
    /**
      * @description
      * 검색 시작일
      * 
      * @required
      */ 
    startDate: any;
    /**
      * @description
      * 검색 종료일
      * 
      * @required
      */ 
    endDate: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    paymentGatewayName?: any;
    /**
      * @description
      * PG사 발급 가맹점 ID
      * 
      * 
      */ 
    partnerId?: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * point : 선불금
      * cell : 휴대폰
      * 
      * 
      */ 
    paymentMethod?: any;
  }

  export interface RetrieveAListOfDailySalesOutput {
    dailysales: { 
    shopNo: number;
    date: Cafe24Date;
    paymentAmount: Cafe24Datetime;
    refundAmount: Cafe24Datetime;
    salesCount: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 검색 시작일과 종료일, PG사 정보를 이용하여 매출 정보를 조회합니다.
     * 결제 금액, 환불 금액 등을 확인할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-daily-sales
     *
     * @example 응답 예시
     * ```json
     * {
     *     "dailysales": [
     *         {
     *             "shop_no": 1,
     *             "date": "2020-12-01",
     *             "payment_amount": "150000.00",
     *             "refund_amount": "50000.00",
     *             "sales_count": 5
     *         },
     *         {
     *             "shop_no": 1,
     *             "date": "2020-12-02",
     *             "payment_amount": "270000.00",
     *             "refund_amount": "20000.00",
     *             "sales_count": 8
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfDailySales(
      input: RetrieveAListOfDailySalesInput,
      options?: RequestOptions<RetrieveAListOfDailySalesOutput['dailysales'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfDailySalesOutput>>;
  }
}
