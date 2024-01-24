import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 대시보드(Dashboard)는 쇼핑몰의 주문 현황과 매출 현황 등 쇼핑몰 운영에 필요한 정보를 간략하게 요약해놓은 정보입니다.
   */
  export interface Dashboard {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 일일 현황 정보
     *
     * 일 단위의 매출 현황 정보
     *
     *
     */
    daily_sales_stats: any;
    /**
     * @description
     * 주간 매출 현황
     *
     * 주간 단위의 매출 현황 정보
     *
     *
     */
    weekly_sales_stats: any;
    /**
     * @description
     * 월간 매출 현황
     *
     * 월간 단위의 매출 현황 정보
     *
     *
     */
    monthly_sales_stats: any;
    /**
     * @description
     * 품절된 상품 수
     *
     * 품절된 상품의 수. 재고관리기능과 품절기능이 활성화 되어있을 경우 집계에 포함됨.
     *
     *
     */
    sold_out_products_count: any;
    /**
     * @description
     * 신규회원 수
     *
     * 신규가입한 회원의 숫자
     *
     *
     */
    new_members_count: any;
    /**
     * @description
     * 게시판 목록
     *
     * 해당 몰의 게시판의 리스트
     *
     *
     */
    board_list: any;
  }

  export interface RetrieveADashboardInput {
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
    shop_no?: any;
  }

  export interface RetrieveADashboardOutput {
    dashboard: {
      shop_no: number;
      daily_sales_stats: {
        title: Cafe24Datetime;
        date: Cafe24Date;
        order_price: string;
        paid_price: string;
        refund_price: string;
        order_count: number;
        payed_count: number;
        refund_count: number;
        prepareproduct_count: number;
        prepare_count: number;
        standby_count: number;
        shipping_count: number;
        shipped_count: number;
        canceled_count: number;
        returned_count: number;
        exchanged_count: number;
        ordered_total_count: number;
      }[];
      weekly_sales_stats: {
        ordered_total_price: string;
        payed_total_price: string;
        refunded_total_price: string;
        ordered_count: number;
        payed_count: number;
        refunded_count: number;
        ordered_average_total_price: string;
        payed_average_total_price: string;
        refunded_average_total_price: string;
        ordered_average_count: number;
        payed_average_count: number;
        refunded_average_count: number;
      };
      monthly_sales_stats: {
        ordered_total_price: string;
        payed_total_price: string;
        refunded_total_price: string;
        ordered_count: number;
        payed_count: number;
        refunded_count: number;
        ordered_average_total_price: string;
        payed_average_total_price: string;
        refunded_average_total_price: string;
        ordered_average_count: number;
        payed_average_count: number;
        refunded_average_count: number;
      };
      sold_out_products_count: number;
      new_members_count: number;
      board_list: {
        type: Cafe24Enum;
        board_no: number;
        board_name: string;
        new_registered_count: number;
        page_url: Cafe24Datetime;
      }[];
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 대시보드 정보를 조회합니다.
     * 매출 현황 정보등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-dashboard
     *
     * @example 응답 예시
     * ```json
     * {
     *     "dashboard": [
     *         {
     *             "shop_no": 1,
     *             "daily_sales_stats": [
     *                 {
     *                     "title": "December 20",
     *                     "date": "2017-12-20",
     *                     "order_price": "0.00",
     *                     "paid_price": "0.00",
     *                     "refund_price": "0.00",
     *                     "order_count": 0,
     *                     "payed_count": 0,
     *                     "refund_count": 0,
     *                     "prepareproduct_count": 0,
     *                     "prepare_count": 0,
     *                     "standby_count": 0,
     *                     "shipping_count": 0,
     *                     "shipped_count": 0,
     *                     "canceled_count": 0,
     *                     "returned_count": 0,
     *                     "exchanged_count": 0,
     *                     "ordered_total_count": 0
     *                 },
     *                 {
     *                     "title": "December 21 (Today)",
     *                     "date": "2017-12-21",
     *                     "order_price": "0.00",
     *                     "paid_price": "0.00",
     *                     "refund_price": "0.00",
     *                     "order_count": 0,
     *                     "payed_count": 0,
     *                     "refund_count": 0,
     *                     "prepareproduct_count": 0,
     *                     "prepare_count": 0,
     *                     "standby_count": 0,
     *                     "shipping_count": 0,
     *                     "shipped_count": 0,
     *                     "canceled_count": 0,
     *                     "returned_count": 0,
     *                     "exchanged_count": 0,
     *                     "ordered_total_count": 0
     *                 }
     *             ],
     *             "weekly_sales_stats": {
     *                 "ordered_total_price": "0.00",
     *                 "payed_total_price": "0.00",
     *                 "refunded_total_price": "0.00",
     *                 "ordered_count": 0,
     *                 "payed_count": 0,
     *                 "refunded_count": 0,
     *                 "ordered_average_total_price": "0.00",
     *                 "payed_average_total_price": "0.00",
     *                 "refunded_average_total_price": "0.00",
     *                 "ordered_average_count": 0,
     *                 "payed_average_count": 0,
     *                 "refunded_average_count": 0
     *             },
     *             "monthly_sales_stats": {
     *                 "ordered_total_price": "0.00",
     *                 "payed_total_price": "0.00",
     *                 "refunded_total_price": "0.00",
     *                 "ordered_count": 0,
     *                 "payed_count": 0,
     *                 "refunded_count": 0,
     *                 "ordered_average_total_price": "0.00",
     *                 "payed_average_total_price": "0.00",
     *                 "refunded_average_total_price": "0.00",
     *                 "ordered_average_count": 0,
     *                 "payed_average_count": 0,
     *                 "refunded_average_count": 0
     *             },
     *             "sold_out_products_count": 0,
     *             "new_members_count": 0,
     *             "board_list": [
     *                 {
     *                     "type": "B",
     *                     "board_no": 1,
     *                     "board_name": "공지사항",
     *                     "new_registered_count": 0,
     *                     "page_url": "/disp/admin/mobile/index#/bulletins?board_no=1"
     *                 },
     *                 {
     *                     "type": "B",
     *                     "board_no": 2,
     *                     "board_name": "뉴스/이벤트",
     *                     "new_registered_count": 0,
     *                     "page_url": "/disp/admin/mobile/index#/bulletins?board_no=2"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveADashboard(
      input: RetrieveADashboardInput,
      options?: RequestOptions<RetrieveADashboardOutput['dashboard'][number]>,
    ): Promise<AxiosResponse<RetrieveADashboardOutput>>;
  }
}
