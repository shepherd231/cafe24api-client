import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 월별 매출(Financials monthlysales)은 PG사별, 월별 매출 정보를 제공합니다.
   * 검색 조건에 부합하는 매출 정보 검색이 가능합니다.
   */
  export interface FinancialsMonthlysales {
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
      * 결제 금액
      * 
      * 
      */ 
    payment_amount: any;
    /**
      * @description
      * 환불 금액
      * 
      * 
      */ 
    refund_amount: any;
    /**
      * @description
      * 판매건수
      * 
      * 
      */ 
    sales_count: any;
  }

  export interface RetrieveAListOfMonthlySalesInput {
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
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    payment_gateway_name?: any;
    /**
      * @description
      * PG사 발급 가맹점 ID
      * 
      * 
      */ 
    partner_id?: any;
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
    payment_method?: any;
  }

  export interface RetrieveAListOfMonthlySalesOutput {
    monthlysales: { 
    shop_no: number;
    month: Cafe24Datetime;
    payment_amount: Cafe24Datetime;
    refund_amount: Cafe24Datetime;
    sales_count: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 검색 시작월과 종료월, PG사 정보를 이용하여, 매출 정보를 조회합니다.
     * 결제 금액, 환불 금액 등을 확인할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-monthly-sales
     *
     * @example 응답 예시
     * ```json
     * {
     *     "monthlysales": [
     *         {
     *             "shop_no": 1,
     *             "month": "2020-09",
     *             "payment_amount": "150000.00",
     *             "refund_amount": "50000.00",
     *             "sales_count": 5
     *         },
     *         {
     *             "shop_no": 1,
     *             "month": "2020-10",
     *             "payment_amount": "270000.00",
     *             "refund_amount": "20000.00",
     *             "sales_count": 8
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfMonthlySales(
      input: RetrieveAListOfMonthlySalesInput,
      options?: RequestOptions<RetrieveAListOfMonthlySalesOutput['monthlysales'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfMonthlySalesOutput>>;
  }
}
