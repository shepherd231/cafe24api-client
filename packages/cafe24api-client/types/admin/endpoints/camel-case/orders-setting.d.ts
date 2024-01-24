import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 취소/반품시 자동 수량 복구 및 할인/적립 금액 등 주문 설정에 대해 조회, 수정 할 수 있는 기능입니다.
   */
  export interface OrdersSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shopNo: any;
    /**
      * @description
      * 구매자 취소/교환/반품 신청 사용설정
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    claimRequest: any;
    /**
      * @description
      * 구매자 취소/교환/반품 신청 시 표시항목 설정
      * 
      * claim_request 항목이 T일 때만 확인이 가능하다.
      * 
      * S : 기본신청 항목 표시
      * D : 상세신청 항목 표시
      * 
      * 
      */ 
    claimRequestType: any;
    /**
      * @description
      * 구매자 취소/교환/반품 신청버튼 노출 범위 설정
      * 
      * cancel_N10 : 취소신청 상품준비중
      * cancel_N20 : 취소신청 배송준비중
      * cancel_N22 : 취소신청 배송보류
      * cancel_N21 : 취소신청 배송대기
      * exchange_N00 : 교환신청 입금전
      * exchange_N10 : 교환신청 상품준비중
      * exchange_N20 : 교환신청 배송준비중
      * exchange_N22 : 교환신청 배송보류
      * exchange_N21 : 교환신청 배송대기
      * exchange_N30 : 교환신청 배송중
      * exchange_N40 : 교환신청 배송완료
      * return_N30 : 반품신청 배송중
      * return_N40 : 반품신청 배송완료
      * 
      * 
      */ 
    claimRequestButtonExposure: any;
    /**
      * @description
      * 구매자 취소/교환/반품 신청버튼 노출 기준일
      * 
      * order_date : 주문 완료일 기준
      * shipend_date : 배송완료일 기준
      * 
      * 
      */ 
    claimRequestButtonDateType: any;
    /**
      * @description
      * 구매자 취소/교환/반품 신청버튼 노출 기간
      * 
      * 
      */ 
    claimRequestButtonPeriod: any;
    /**
      * @description
      * 취소/반품 시 자동 수량복구
      * 
      * T : 기본 설정
      * F : 개별 설정
      * 
      * 
      */ 
    stockRecover: any;
    /**
      * @description
      * 취소/반품 시 자동 수량복구 - 기본설정
      * 
      * T : 자동 복구함
      * F : 자동 복구 안함
      * M : 수량복구 여부를 확인함
      * 
      * 
      */ 
    stockRecoverBase: any;
    /**
      * @description
      * 취소/반품 시 자동 수량복구 - 개별설정
      * 
      * 
      */ 
    stockRecoverIndividual: any;
    /**
      * @description
      * 구매자 취소/반품 신청 건 자동 접수 설정
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    claimRequestAutoAccept: any;
    /**
      * @description
      * 취소/교환/반품 접수 시 할인/적립 금액 설정
      * 
      * 
      */ 
    refundBenefitSetting: any;
    /**
      * @description
      * 취소/교환/반품 접수 시 환불 접수 처리 설정
      * 
      * S : 동시에 처리함
      * D : 분리하여 처리함
      * 
      * 
      */ 
    refundProcessingSetting: any;
    /**
      * @description
      * 상품준비중 주문상태 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useProductPrepareStatus: any;
    /**
      * @description
      * 구매확정 버튼 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchaseConfirmationButton: any;
    /**
      * @description
      * 구매확정 버튼 적용 날짜
      * 
      * 
      */ 
    purchaseConfirmationButtonSetDate: any;
    /**
      * @description
      * 구매확정 자동체크 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchaseConfirmationAutoCheck: any;
    /**
      * @description
      * 구매확정 자동체크 기준일
      * 
      * 
      */ 
    purchaseConfirmationAutoCheckDay: any;
    /**
      * @description
      * 구매확정 자동체크 적용 날짜
      * 
      * 
      */ 
    purchaseConfirmationAutoCheckSetDate: any;
    /**
      * @description
      * 추가항목 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useAdditionalFields: any;
    /**
      * @description
      * 배송 후 교환/반품 신청 시 구매자부담 배송비 결제 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    customerPaysReturnShipping: any;
    /**
      * @description
      * 취소/교환/반품 시 환불계좌정보 등록 필수 여부
      * 
      * T : 필수
      * F : 선택
      * 
      * 
      */ 
    refundBankAccountRequired: any;
  }

  export interface RetrieveOrderSettingsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shopNo?: any;
  }

  export interface RetrieveOrderSettingsOutput {
    order: { 
    shopNo: number;
    claimRequest: Cafe24Enum;
    claimRequestType: Cafe24Enum;
    claimRequestButtonExposure: string[];
    claimRequestButtonDateType: string;
    claimRequestButtonPeriod: number;
    stockRecover: Cafe24Enum;
    stockRecoverBase: Cafe24Enum;
    stockRecoverIndividual: { 
    cancelBefore: any;
    cancelAfter: any;
    cancelReturn: any;
    };
    refundProcessingSetting: Cafe24Enum;
    claimRequestAutoAccept: Cafe24Enum;
    refundBenefitSetting: Cafe24Enum;
    useProductPrepareStatus: Cafe24Enum;
    usePurchaseConfirmationButton: Cafe24Enum;
    purchaseConfirmationButtonSetDate: any;
    usePurchaseConfirmationAutoCheck: Cafe24Enum;
    purchaseConfirmationAutoCheckDay: any;
    purchaseConfirmationAutoCheckSetDate: any;
    useAdditionalFields: Cafe24Enum;
    customerPaysReturnShipping: Cafe24Enum;
    refundBankAccountRequired: Cafe24Enum;
    };
  }
  export interface UpdateOrderSettingsInput {
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
      * 취소/교환/반품 접수 시 할인/적립 금액 설정
      * 
      * F: 전체 금액 기준으로 표시
      * T: 선택 품목 기준으로 표시
      * U: 할인금액 자동계산(설정한 이후 접수된 주문부터 적용)
      * 
      * 
      */ 
    refundBenefitSetting?: any;
    /**
      * @description
      * 상품준비중 주문상태 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useProductPrepareStatus?: any;
    /**
      * @description
      * 구매확정 버튼 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchaseConfirmationButton?: any;
    /**
      * @description
      * 구매확정 버튼 적용 날짜
      * 
      * 날짜
      */ 
    purchaseConfirmationButtonSetDate?: any;
    /**
      * @description
      * 구매확정 자동체크 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchaseConfirmationAutoCheck?: any;
    /**
      * @description
      * 구매확정 자동체크 기준일
      * 
      * 최소: [1]~최대: [30]
      */ 
    purchaseConfirmationAutoCheckDay?: any;
    /**
      * @description
      * 구매확정 자동체크 적용 날짜
      * 
      * 날짜
      */ 
    purchaseConfirmationAutoCheckSetDate?: any;
  }

  export interface UpdateOrderSettingsOutput {
    order: { 
    shopNo: number;
    refundBenefitSetting: Cafe24Enum;
    useProductPrepareStatus: Cafe24Enum;
    usePurchaseConfirmationButton: Cafe24Enum;
    purchaseConfirmationButtonSetDate: Cafe24Date;
    usePurchaseConfirmationAutoCheck: Cafe24Enum;
    purchaseConfirmationAutoCheckDay: number;
    purchaseConfirmationAutoCheckSetDate: Cafe24Date;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 취소/반품시 자동 수량 복구 및 할인/적립 금액 등 주문 설정에 대해 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-order-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "shop_no": 1,
     *         "claim_request": "T",
     *         "claim_request_type": "S",
     *         "claim_request_button_exposure": [
     *             "cancel_N20",
     *             "return_N40"
     *         ],
     *         "claim_request_button_date_type": "order_date",
     *         "claim_request_button_period": 30,
     *         "stock_recover": "T",
     *         "stock_recover_base": "T",
     *         "stock_recover_individual": {
     *             "cancel_before": null,
     *             "cancel_after": null,
     *             "cancel_return": null
     *         },
     *         "refund_processing_setting": "S",
     *         "claim_request_auto_accept": "T",
     *         "refund_benefit_setting": "U",
     *         "use_product_prepare_status": "T",
     *         "use_purchase_confirmation_button": "F",
     *         "purchase_confirmation_button_set_date": null,
     *         "use_purchase_confirmation_auto_check": "F",
     *         "purchase_confirmation_auto_check_day": null,
     *         "purchase_confirmation_auto_check_set_date": null,
     *         "use_additional_fields": "F",
     *         "customer_pays_return_shipping": "F",
     *         "refund_bank_account_required": "F"
     *     }
     * }
     * ```
     */
    retrieveOrderSettings(
      input: RetrieveOrderSettingsInput,
      options?: RequestOptions<RetrieveOrderSettingsOutput['order']>,
    ): Promise<AxiosResponse<RetrieveOrderSettingsOutput>>;
    /**
     * @description
     * 취소/교환/반품 접수 시의 할인/적립 금액 설정을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-order-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "shop_no": 1,
     *         "refund_benefit_setting": "U",
     *         "use_product_prepare_status": "T",
     *         "use_purchase_confirmation_button": "T",
     *         "purchase_confirmation_button_set_date": "2023-01-12",
     *         "use_purchase_confirmation_auto_check": "T",
     *         "purchase_confirmation_auto_check_day": 1,
     *         "purchase_confirmation_auto_check_set_date": "2023-01-12"
     *     }
     * }
     * ```
     */
    updateOrderSettings(
      input: UpdateOrderSettingsInput,
      options?: RequestOptions<UpdateOrderSettingsOutput['order']>,
    ): Promise<AxiosResponse<UpdateOrderSettingsOutput>>;
  }
}
