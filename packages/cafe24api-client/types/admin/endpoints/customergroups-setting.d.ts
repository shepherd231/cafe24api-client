import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  export interface CustomergroupsSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 회원등급 자동변경 사용설정
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    auto_update: any;
    /**
      * @description
      * 회원등급 자동변경 적용여부
      * 
      * T : 적용함(사용중)
      * F : 적용안함(사용대기)
      * 
      * 
      */ 
    use_auto_update: any;
    /**
      * @description
      * 회원 등급 기준
      * 
      * purchase_amount : 구매금액
      * purchase_count : 구매건수
      * purchase_amount_and_count : 구매금액과 구매건수
      * purchase_amount_or_count : 구매금액 또는 구매건수
      * shopping_index : 쇼핑지수
      * 
      * 
      */ 
    customer_tier_criteria: any;
    /**
      * @description
      * 구매 금액 정의
      * 
      * total_order_amount : 총 주문 금액
      * total_paid_amount : 총 결제 금액
      * credit_price : 총실결제금액 + 예치금
      * 
      * 
      */ 
    standard_purchase_amount: any;
    /**
      * @description
      * 오프라인 구매금액 포함여부
      * 
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    offline_purchase_amount: any;
    /**
      * @description
      * 구매 건수 정의
      * 
      * order_count : 주문 횟수
      * product_count : 상품(품목) 개수
      * 
      * 
      */ 
    standard_purchase_count: any;
    /**
      * @description
      * 오프라인 구매건수 포함여부
      * 
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    offline_purchase_count: any;
    /**
      * @description
      * 자동 변경 시 산정 주문 기준 설정
      * 
      * delivery_complete : 배송완료 기준
      * payment_complete : 결제완료 기준
      * 
      * 
      */ 
    auto_update_criteria: any;
    /**
      * @description
      * 취소/환불 금액(건) 차감 여부
      * 
      * T : 취소/환불 금액(건) 차감
      * F : 취소/환불 금액(건) 미차감
      * 
      * 
      */ 
    deduct_cancellation_refund: any;
    /**
      * @description
      * 자동 변경 주기
      * 
      * 1d : 매일
      * 3d : 3일
      * 1w : 1주
      * 1m : 1개월
      * 3m : 3개월
      * 6m : 6개월
      * 12m : 12개월
      * 
      * 
      */ 
    interval_auto_update: any;
    /**
      * @description
      * 등급 산정 누적 기간
      * 
      * now : 변경시점 직전까지
      * 1m : 최근 1개월
      * 3m : 최근 3개월
      * 6m : 최근 6개월
      * 12m : 최근 12개월
      * 24m : 최근 24개월
      * 36m : 최근 36개월
      * 
      * 
      */ 
    total_period: any;
    /**
      * @description
      * 자동 변경일(매주)
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 
      */ 
    interval_week: any;
    /**
      * @description
      * 자동 변경일(매월)
      * 
      * 1 : 1일
      * 5 : 5일
      * 10 : 10일
      * 15 : 15일
      * 20 : 20일
      * 25 : 25일
      * 
      * 
      */ 
    interval_month: any;
    /**
      * @description
      * 회원등급 변경 시점
      * 
      * 
      */ 
    auto_update_set_date: any;
    /**
      * @description
      * 등급별 할인 제한 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_discount_limit: any;
    /**
      * @description
      * 할인 제한 초기화 주기
      * 
      * 1d : 매일
      * 3d : 3일
      * 1w : 1주
      * 1m : 1개월
      * 
      * 
      */ 
    discount_limit_reset_period: any;
    /**
      * @description
      * 할인 제한 초기화 일자(매주)
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 
      */ 
    discount_limit_reset_week: any;
    /**
      * @description
      * 할인 제한 초기화 일자(매월)
      * 
      * 1 : 1일
      * 5 : 5일
      * 10 : 10일
      * 15 : 15일
      * 20 : 20일
      * 25 : 25일
      * 
      * 
      */ 
    discount_limit_reset_date: any;
    /**
      * @description
      * 할인 제한 시작 일자
      * 
      * 
      */ 
    discount_limit_begin_date: any;
    /**
      * @description
      * 할인 제한 종료 일자
      * 
      * 
      */ 
    discount_limit_end_date: any;
  }

  export interface RetrieveCustomerTierSettingsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
  }

  export interface RetrieveCustomerTierSettingsOutput {
    customergroup: { 
    shop_no: number;
    auto_update: Cafe24Enum;
    use_auto_update: Cafe24Enum;
    customer_tier_criteria: string;
    standard_purchase_amount: string;
    offline_purchase_amount: any;
    standard_purchase_count: string;
    offline_purchase_count: any;
    auto_update_criteria: string;
    deduct_cancellation_refund: Cafe24Enum;
    interval_auto_update: string;
    total_period: string;
    interval_week: any;
    interval_month: number;
    auto_update_set_date: Cafe24Datetime;
    use_discount_limit: Cafe24Enum;
    discount_limit_reset_period: string;
    discount_limit_reset_week: any;
    discount_limit_reset_date: number;
    discount_limit_begin_date: Cafe24Date;
    discount_limit_end_date: Cafe24Date;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-customer-tier-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customergroup": {
     *         "shop_no": 1,
     *         "auto_update": "T",
     *         "use_auto_update": "T",
     *         "customer_tier_criteria": "purchase_amount_and_purchase_count",
     *         "standard_purchase_amount": "total_order_amount",
     *         "offline_purchase_amount": null,
     *         "standard_purchase_count": "order_count",
     *         "offline_purchase_count": null,
     *         "auto_update_criteria": "payment_complete",
     *         "deduct_cancellation_refund": "T",
     *         "interval_auto_update": "1m",
     *         "total_period": "1m",
     *         "interval_week": null,
     *         "interval_month": 5,
     *         "auto_update_set_date": "2022-12-05 03:00:00",
     *         "use_discount_limit": "T",
     *         "discount_limit_reset_period": "1m",
     *         "discount_limit_reset_week": null,
     *         "discount_limit_reset_date": 5,
     *         "discount_limit_begin_date": "2022-12-05",
     *         "discount_limit_end_date": "2023-01-05"
     *     }
     * }
     * ```
     */
    retrieveCustomerTierSettings(
      input: RetrieveCustomerTierSettingsInput,
      options?: RequestOptions<RetrieveCustomerTierSettingsOutput['customergroup']>,
    ): Promise<AxiosResponse<RetrieveCustomerTierSettingsOutput>>;
  }
}
