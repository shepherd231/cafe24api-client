import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 교환(Exchange)은 주문의 교환 접수 상태를 변경하는 리소스입니다.
   * 교환 접수를 할 수 있으며 교환이 접수된 주문의 상태를 수정할 수 있습니다.
   */
  export interface Exchange {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 반품번호
      * 
      * 
      */ 
    claim_code: any;
    /**
      * @description
      * 구분
      * 
      * A:고객변심
      * B:배송지연
      * J:배송오류
      * C:배송불가지역
      * L:수출/통관 불가
      * D:포장불량
      * E:상품 불만족
      * F:상품정보상이
      * K:상품불량
      * G:서비스불만족
      * H:품절
      * I:기타
      * 
      * 
      */ 
    claim_reason_type: any;
    /**
      * @description
      * 사유
      * 
      * 
      */ 
    claim_reason: any;
    /**
      * @description
      * 교환처리 예정일
      * 
      * 
      */ 
    claim_due_date: any;
    /**
      * @description
      * 수령자
      * 
      * 
      */ 
    receiver: any;
    /**
      * @description
      * 교환 재발송 정보
      * 
      * 
      */ 
    reshipping_detail: any;
    /**
      * @description
      * 수거지 - 주소
      * 
      * 
      */ 
    pickup: any;
    /**
      * @description
      * 추가결제
      * 
      * 
      */ 
    additional_payment: any;
    /**
      * @description
      * 반품 송장 번호
      * 
      * 최대글자수 : [40자]
      */ 
    return_invoice_no: any;
    /**
      * @description
      * 반품 배송업체명
      * 
      * 
      */ 
    return_shipping_company_name: any;
    /**
      * @description
      * 환불 방식
      * 
      * 
      */ 
    refund_methods: any;
    /**
      * @description
      * 비고
      * 
      * 
      */ 
    refund_reason: any;
    /**
      * @description
      * 상품구매금액
      * 
      * 
      */ 
    order_price_amount: any;
    /**
      * @description
      * 환불금액
      * 
      * 
      */ 
    refund_amounts: any;
    /**
      * @description
      * 배송비
      * 
      * 
      */ 
    shipping_fee: any;
    /**
      * @description
      * 반품배송비 적용구분
      * 
      * 
      */ 
    return_ship_type: any;
    /**
      * @description
      * 후불 결제 수수료
      * 
      * 
      */ 
    defer_commission: any;
    /**
      * @description
      * 제휴할인 취소액
      * 
      * 
      */ 
    partner_discount_amount: any;
    /**
      * @description
      * 상품별추가할인 취소액
      * 
      * 
      */ 
    add_discount_amount: any;
    /**
      * @description
      * 회원등급할인 취소액
      * 
      * 
      */ 
    member_grade_discount_amount: any;
    /**
      * @description
      * 배송비할인 취소액
      * 
      * 
      */ 
    shipping_discount_amount: any;
    /**
      * @description
      * 쿠폰할인 취소액
      * 
      * 
      */ 
    coupon_discount_amount: any;
    /**
      * @description
      * 사용된 적립금 반환액
      * 
      * 
      */ 
    point_used: any;
    /**
      * @description
      * 사용된 예치금 반환액
      * 
      * 
      */ 
    credit_used: any;
    /**
      * @description
      * 철회 여부
      * 
      * T : 철회함
      * F : 철회안함
      * 
      * 
      */ 
    undone: any;
    /**
      * @description
      * 철회 사유 구분
      * 
      * A:고객변심
      * B:배송지연
      * J:배송오류
      * C:배송불가지역
      * L:수출/통관 불가
      * D:포장불량
      * E:상품 불만족
      * F:상품정보상이
      * K:상품불량
      * G:서비스불만족
      * H:품절
      * I:기타
      * 
      * 
      */ 
    undone_reason_type: any;
    /**
      * @description
      * 철회 사유
      * 
      * 
      */ 
    undone_reason: any;
    /**
      * @description
      * 주문상세내역 노출 여부
      * 
      * T : 노출함
      * F : 노출안함
      * 
      * 
      */ 
    expose_order_detail: any;
    /**
      * @description
      * 주문상세내역 노출 철회 사유
      * 
      * 
      */ 
    exposed_undone_reason: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    items: any;
    /**
      * @description
      * 교환상품
      * 
      * 
      */ 
    exchanged_items: any;
    /**
      * @description
      * 가격에 세금 포함
      * 
      * T: 세금포함
      * F: 세금제외
      * 
      * 
      */ 
    include_tax: any;
    /**
      * @description
      * 세금 정보
      * 
      * 세금 관리자 앱을 사용 안 할 경우 null로 반환
      * 
      * 
      */ 
    tax: any;
    /**
      * @description
      * 배송사 아이디
      * 
      * 
      */ 
    carrier_id: any;
    /**
      * @description
      * 반송장 처리 성공 여부
      * 
      * T : 성공
      * F : 실패
      * N : 미집하
      * 
      * 
      */ 
    return_invoice_success: any;
    /**
      * @description
      * 반송장 처리 실패 사유
      * 
      * 최대글자수 : [100자]
      */ 
    return_invoice_fail_reason: any;
    /**
      * @description
      * 주문상태
      * 
      * accept : 접수
      * collected : 수거완료
      * exchanged : 교환완료
      * 
      * 
      */ 
    status: any;
    /**
      * @description
      * 재고복구
      * 
      * T : 복구함
      * F : 복구안함
      * 
      * 
      */ 
    recover_inventory: any;
    /**
      * @description
      * 수거완료시 교환완료 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    exchanged_after_collected: any;
    /**
      * @description
      * 관리자 메모에도 추가
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    add_memo_too: any;
    /**
      * @description
      * 수거완료 여부
      * 
      * T : 수거완료
      * F : 수거전
      * 
      * 
      */ 
    pickup_completed: any;
  }

  export interface RetrieveAnExchangeInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 교환번호
      * 
      * @required
      */ 
    claim_code: any;
  }

  export interface RetrieveAnExchangeOutput {
    exchange: { 
    shop_no: number;
    order_id: string;
    claim_code: string;
    claim_reason_type: Cafe24Enum;
    claim_reason: string;
    claim_due_date: Cafe24Date;
    receiver: { 
    name: string;
    phone: string;
    cellphone: string;
    zipcode: Cafe24Datetime;
    address: string;
    shipping_message: string;
    };
    reshipping_detail: { 
    name: string;
    phone: string;
    cellphone: string;
    zipcode: Cafe24Datetime;
    address: string;
    shipping_message: string;
    };
    pickup: { 
    use_pickup: Cafe24Enum;
    same_address: Cafe24Enum;
    name: string;
    phone: string;
    cellphone: string;
    zipcode: Cafe24Datetime;
    address: string;
    };
    additional_payment: { 
    payment_amount: Cafe24Datetime;
    payment_method: string;
    billing_name: string;
    bank_name: string;
    bank_accout_no: Cafe24Datetime;
    bank_account_owner_name: string;
    order_price_amount: Cafe24Datetime;
    shipping_fee: string;
    additional_shipping_fee: string;
    postpay_commission: string;
    commission: string;
    credit_spent_amount: string;
    point_spent_amount: string;
    tax: { 
    name: string;
    amount: Cafe24Datetime;
    }[];
    };
    return_invoice_no: any;
    return_shipping_company_name: any;
    refund_methods: string[];
    refund_reason: string;
    order_price_amount: Cafe24Datetime;
    refund_amounts: { 
    payment_method: string;
    amount: string;
    }[];
    shipping_fee: string;
    return_ship_type: string;
    defer_commission: string;
    partner_discount_amount: string;
    add_discount_amount: string;
    member_grade_discount_amount: string;
    shipping_discount_amount: string;
    coupon_discount_amount: string;
    point_used: string;
    credit_used: string;
    undone: Cafe24Enum;
    undone_reason_type: any;
    undone_reason: any;
    expose_order_detail: any;
    exposed_undone_reason: any;
    items: { 
    shop_no: number;
    item_no: number;
    order_item_code: string;
    variant_code: string;
    product_no: number;
    product_code: string;
    custom_product_code: string;
    custom_variant_code: string;
    eng_product_name: any;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    product_name: string;
    product_name_default: string;
    product_price: Cafe24Datetime;
    option_price: string;
    additional_discount_price: string;
    coupon_discount_price: Cafe24Datetime;
    app_item_discount_amount: string;
    quantity: number;
    supplier_product_name: string;
    supplier_transaction_type: Cafe24Enum;
    supplier_id: string;
    supplier_name: string;
    tracking_no: Cafe24Datetime;
    shipping_code: string;
    claim_code: string;
    claim_reason_type: Cafe24Enum;
    claim_reason: string;
    refund_bank_name: string;
    refund_bank_account_no: Cafe24Datetime;
    refund_bank_account_holder: string;
    post_express_flag: any;
    order_status: string;
    order_status_additional_info: any;
    claim_quantity: number;
    status_code: string;
    status_text: string;
    open_market_status: string;
    bundled_shipping_type: Cafe24Enum;
    shipping_company_id: Cafe24Datetime;
    shipping_company_name: string;
    shipping_company_code: Cafe24Datetime;
    product_bundle: Cafe24Enum;
    product_bundle_no: Cafe24Datetime;
    product_bundle_name: any;
    product_bundle_name_default: any;
    product_bundle_type: Cafe24Enum;
    was_product_bundle: any;
    original_bundle_item_no: any;
    naver_pay_order_id: any;
    naver_pay_claim_status: string;
    individual_shipping_fee: string;
    shipping_fee_type: Cafe24Enum;
    shipping_fee_type_text: string;
    shipping_payment_option: Cafe24Enum;
    payment_info_id: Cafe24Datetime;
    original_item_no: number[];
    store_pickup: Cafe24Enum;
    ordered_date: Cafe24Datetime;
    shipped_date: Cafe24Datetime;
    delivered_date: Cafe24Datetime;
    cancel_date: any;
    return_request_date: any;
    return_confirmed_date: any;
    return_collected_date: any;
    cancel_request_date: any;
    refund_date: any;
    exchange_request_date: any;
    exchange_date: any;
    product_material: any;
    product_material_eng: any;
    cloth_fabric: any;
    product_weight: string;
    volume_size: any;
    volume_size_weight: any;
    clearance_category: any;
    clearance_category_info: any;
    clearance_category_code: any;
    hs_code: string;
    one_plus_n_event: any;
    origin_place: Cafe24Enum;
    gift: Cafe24Enum;
    item_granting_gift: any;
    product_bundle_list: { 
    product_no: number;
    product_code: string;
    variant_code: string;
    product_name: Cafe24Datetime;
    product_name_default: Cafe24Datetime;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    quantity: number;
    supplier_id: string;
    eng_product_name: any;
    hs_code: Cafe24Datetime;
    option_price: string;
    }[];
    market_cancel_request: any;
    market_cancel_request_quantity: any;
    market_fail_reason: any;
    market_fail_reason_guide: any;
    market_item_sequence: any;
    market_custom_variant_code: any;
    option_type: Cafe24Enum;
    options: { 
    option_code: string;
    option_name: any;
    option_value: { 
    option_text: any;
    value_no: number;
    };
    }[];
    order_status_before_cs: string;
    }[];
    exchanged_items: { 
    shop_no: number;
    item_no: number;
    order_item_code: string;
    variant_code: string;
    product_no: number;
    product_code: string;
    custom_product_code: string;
    custom_variant_code: string;
    eng_product_name: any;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    product_name: string;
    product_name_default: string;
    product_price: Cafe24Datetime;
    option_price: string;
    additional_discount_price: string;
    coupon_discount_price: Cafe24Datetime;
    app_item_discount_amount: string;
    quantity: number;
    supplier_product_name: string;
    supplier_transaction_type: Cafe24Enum;
    supplier_id: string;
    supplier_name: string;
    tracking_no: Cafe24Datetime;
    shipping_code: string;
    claim_code: string;
    claim_reason_type: Cafe24Enum;
    claim_reason: string;
    refund_bank_name: string;
    refund_bank_account_no: Cafe24Datetime;
    refund_bank_account_holder: string;
    post_express_flag: any;
    order_status: string;
    order_status_additional_info: any;
    claim_quantity: number;
    status_code: string;
    status_text: string;
    open_market_status: string;
    bundled_shipping_type: Cafe24Enum;
    shipping_company_id: Cafe24Datetime;
    shipping_company_name: string;
    shipping_company_code: Cafe24Datetime;
    product_bundle: Cafe24Enum;
    product_bundle_no: Cafe24Datetime;
    product_bundle_name: any;
    product_bundle_name_default: any;
    product_bundle_type: Cafe24Enum;
    was_product_bundle: any;
    original_bundle_item_no: any;
    naver_pay_order_id: any;
    naver_pay_claim_status: string;
    individual_shipping_fee: string;
    shipping_fee_type: Cafe24Enum;
    shipping_fee_type_text: string;
    shipping_payment_option: Cafe24Enum;
    payment_info_id: Cafe24Datetime;
    original_item_no: number[];
    store_pickup: Cafe24Enum;
    ordered_date: Cafe24Datetime;
    shipped_date: Cafe24Datetime;
    delivered_date: Cafe24Datetime;
    cancel_date: any;
    return_request_date: any;
    return_confirmed_date: any;
    return_collected_date: any;
    cancel_request_date: any;
    refund_date: any;
    exchange_request_date: any;
    exchange_date: any;
    product_material: any;
    product_material_eng: any;
    cloth_fabric: any;
    product_weight: string;
    volume_size: any;
    volume_size_weight: any;
    clearance_category: any;
    clearance_category_info: any;
    clearance_category_code: any;
    hs_code: string;
    one_plus_n_event: any;
    origin_place: Cafe24Enum;
    gift: Cafe24Enum;
    item_granting_gift: any;
    product_bundle_list: { 
    product_no: number;
    product_code: string;
    variant_code: string;
    product_name: Cafe24Datetime;
    product_name_default: Cafe24Datetime;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    quantity: number;
    supplier_id: string;
    eng_product_name: any;
    hs_code: Cafe24Datetime;
    option_price: string;
    }[];
    option_type: Cafe24Enum;
    options: { 
    option_code: string;
    option_name: any;
    option_value: { 
    option_text: any;
    value_no: number;
    };
    }[];
    order_status_before_cs: string;
    }[];
    include_tax: Cafe24Enum;
    tax: any;
    carrier_id: any;
    return_invoice_success: any;
    return_invoice_fail_reason: any;
    };
  }
  export interface CreateMultipleExchangesInput {
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
      * 주문번호
      * 
      * @required
      */ 
    order_id: any;
    /**
      * @description
      * 주문상태
      * 
      * accepted : 교환접수
      * exchanged : 교환완료
      * 
      * @required
      */ 
    status: any;
    /**
      * @description
      * 재고복구
      * 
      * T : 복구함
      * F : 복구안함
      * 
      * @default F
      * 
      * 
      */ 
    recover_inventory?: any;
    /**
      * @description
      * 관리자 메모에도 추가
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    add_memo_too?: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    items?: { 
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code: any;
    /**
      * @description
      * 수량
      * 
      * 
      */ 
    quantity: any;
    /**
      * @description
      * (동일상품 다른 옵션 교환시) 교환 상품 품목 코드
      * 
      * 
      */ 
    exchange_variant_code?: any;
    };
    /**
      * @description
      * 동일상품교환 여부
      * 
      * T : 동일상품교환
      * F : 다른상품교환
      * 
      * @required
      */ 
    same_product: any;
  }

  export interface CreateMultipleExchangesOutput {
    exchange: { 
    shop_no: number;
    order_id: string;
    status: string;
    claim_code: string;
    items: { 
    order_item_code: string;
    quantity: number;
    exchange_variant_code: any;
    }[];
    exchanged_items: { 
    order_item_code: string;
    }[];
    }[];
  }
  export interface UpdateMultipleOrderExchangesInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      */ 
    order_id: any;
    /**
      * @description
      * 교환번호
      * 
      * @required
      */ 
    claim_code: any;
    /**
      * @description
      * 주문상태
      * 
      * exchanged : 교환완료
      * 
      * 
      */ 
    status?: any;
    /**
      * @description
      * 수거완료 여부
      * 
      * T : 수거완료
      * F : 수거전
      * 
      * 
      */ 
    pickup_completed?: any;
    /**
      * @description
      * 재고복구
      * 
      * T : 복구함
      * F : 복구안함
      * 
      * 
      */ 
    recover_inventory?: any;
    /**
      * @description
      * 수거완료시 교환완료 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    exchanged_after_collected?: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    items?: { 
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code?: any;
    };
    /**
      * @description
      * 철회 여부
      * 
      * T : 철회함
      * 
      * 
      */ 
    undone?: any;
    /**
      * @description
      * 관리자 메모에도 추가
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    add_memo_too?: any;
    /**
      * @description
      * 철회 사유 구분
      * 
      * A:고객변심
      * B:배송지연
      * J:배송오류
      * C:배송불가지역
      * L:수출/통관 불가
      * D:포장불량
      * E:상품 불만족
      * F:상품정보상이
      * K:상품불량
      * G:서비스불만족
      * H:품절
      * I:기타
      * 
      * 
      */ 
    undone_reason_type?: any;
    /**
      * @description
      * 철회 사유
      * 
      * 최대글자수 : [2000자]
      */ 
    undone_reason?: any;
    /**
      * @description
      * 주문상세내역 노출 여부
      * 
      * T : 노출함
      * F : 노출안함
      * 
      * 
      */ 
    expose_order_detail?: any;
    /**
      * @description
      * 주문상세내역 노출 철회 사유
      * 
      * 최대글자수 : [2000자]
      */ 
    exposed_undone_reason?: any;
    /**
      * @description
      * 반품 송장 번호
      * 
      * 최대글자수 : [40자]
      */ 
    return_invoice_no?: any;
    /**
      * @description
      * 배송사 아이디
      * 
      * 
      */ 
    carrier_id?: any;
    /**
      * @description
      * 반송장 처리 성공 여부
      * 
      * T : 성공
      * F : 실패
      * N : 미집하
      * 
      * 
      */ 
    return_invoice_success?: any;
    /**
      * @description
      * 반송장 처리 실패 사유
      * 
      * 최대글자수 : [100자]
      */ 
    return_invoice_fail_reason?: any;
  }

  export interface UpdateMultipleOrderExchangesOutput {
    exchange: { 
    shop_no: number;
    order_id: string;
    claim_code: string;
    items: { 
    order_item_code: string;
    }[];
    status: string;
    pickup_completed: Cafe24Enum;
    carrier_id: any;
    return_invoice_no: any;
    return_invoice_success: any;
    return_invoice_fail_reason: any;
    recover_inventory: Cafe24Enum;
    exchanged_after_collected: any;
    undone: any;
    add_memo_too: any;
    undone_reason_type: any;
    undone_reason: any;
    expose_order_detail: any;
    exposed_undone_reason: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 교환번호를 입력하여, 교환이 접수된 주문건을 조회합니다.
     * 주문번호, 반품번호, 사유, 교환처리 예정일 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-exchange
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchange": {
     *         "shop_no": 1,
     *         "order_id": "20190607-0000018",
     *         "claim_code": "B20190610-0000001",
     *         "claim_reason_type": "A",
     *         "claim_reason": "Damaged product shipped",
     *         "claim_due_date": "2019-06-10",
     *         "receiver": {
     *             "name": "John Doe",
     *             "phone": "02-1111-2222",
     *             "cellphone": "010-1111-2222",
     *             "zipcode": "07071",
     *             "address": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "shipping_message": ""
     *         },
     *         "reshipping_detail": {
     *             "name": "John Doe",
     *             "phone": "02-1111-2222",
     *             "cellphone": "010-1111-2222",
     *             "zipcode": "07071",
     *             "address": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "shipping_message": ""
     *         },
     *         "pickup": {
     *             "use_pickup": "T",
     *             "same_address": "T",
     *             "name": "John Doe",
     *             "phone": "02-1111-2222",
     *             "cellphone": "010-111-2222",
     *             "zipcode": "07071",
     *             "address": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea"
     *         },
     *         "additional_payment": {
     *             "payment_amount": "10000.00",
     *             "payment_method": "Cash",
     *             "billing_name": "John Doe",
     *             "bank_name": "bank_05",
     *             "bank_accout_no": "1234567890",
     *             "bank_account_owner_name": "John Doe",
     *             "order_price_amount": "10000.00",
     *             "shipping_fee": "0.00",
     *             "additional_shipping_fee": "0.00",
     *             "postpay_commission": "0.00",
     *             "commission": "0.00",
     *             "credit_spent_amount": "0.00",
     *             "point_spent_amount": "0.00",
     *             "tax": [
     *                 {
     *                     "name": "vat",
     *                     "amount": "1000.00"
     *                 },
     *                 {
     *                     "name": "tax",
     *                     "amount": "800.00"
     *                 }
     *             ]
     *         },
     *         "return_invoice_no": null,
     *         "return_shipping_company_name": null,
     *         "refund_methods": [
     *             "Refund to points",
     *             "Refund to card"
     *         ],
     *         "refund_reason": "Points for damaged products",
     *         "order_price_amount": "15000.00",
     *         "refund_amounts": [
     *             {
     *                 "payment_method": "point",
     *                 "amount": "160.00"
     *             },
     *             {
     *                 "payment_method": "card",
     *                 "amount": "160.00"
     *             }
     *         ],
     *         "shipping_fee": "0.00",
     *         "return_ship_type": "Charge",
     *         "defer_commission": "0.00",
     *         "partner_discount_amount": "0.00",
     *         "add_discount_amount": "0.00",
     *         "member_grade_discount_amount": "0.00",
     *         "shipping_discount_amount": "0.00",
     *         "coupon_discount_amount": "0.00",
     *         "point_used": "-15000.00",
     *         "credit_used": "0.00",
     *         "undone": "F",
     *         "undone_reason_type": null,
     *         "undone_reason": null,
     *         "expose_order_detail": null,
     *         "exposed_undone_reason": null,
     *         "items": [
     *             {
     *                 "shop_no": 1,
     *                 "item_no": 1,
     *                 "order_item_code": "20190607-0000018-01",
     *                 "variant_code": "P000000N000A",
     *                 "product_no": 14,
     *                 "product_code": "P000000N",
     *                 "custom_product_code": "",
     *                 "custom_variant_code": "",
     *                 "eng_product_name": null,
     *                 "option_id": "000A",
     *                 "option_value": "",
     *                 "option_value_default": "",
     *                 "additional_option_value": "",
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "text",
     *                         "name": "gift option",
     *                         "value": "yes"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "url",
     *                         "name": "Attached File",
     *                         "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                     }
     *                 ],
     *                 "product_name": "iPhone X",
     *                 "product_name_default": "iPhone X",
     *                 "product_price": "30000.00",
     *                 "option_price": "0.00",
     *                 "additional_discount_price": "0.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "app_item_discount_amount": "0.00",
     *                 "quantity": 1,
     *                 "supplier_product_name": "",
     *                 "supplier_transaction_type": "D",
     *                 "supplier_id": "S0000000",
     *                 "supplier_name": "Apple",
     *                 "tracking_no": "12345678",
     *                 "shipping_code": "D-20190607-0000018-00",
     *                 "claim_code": "B20190610-0000001",
     *                 "claim_reason_type": "A",
     *                 "claim_reason": "Sorry. I will cancel order for one item.",
     *                 "refund_bank_name": "Woori Bank",
     *                 "refund_bank_account_no": "1234567890",
     *                 "refund_bank_account_holder": "Holders Name",
     *                 "post_express_flag": null,
     *                 "order_status": "N40",
     *                 "order_status_additional_info": null,
     *                 "claim_quantity": 0,
     *                 "status_code": "N1",
     *                 "status_text": "Shipping Complete",
     *                 "open_market_status": "",
     *                 "bundled_shipping_type": "N",
     *                 "shipping_company_id": "2",
     *                 "shipping_company_name": "DHL",
     *                 "shipping_company_code": "0001",
     *                 "product_bundle": "F",
     *                 "product_bundle_no": "0",
     *                 "product_bundle_name": null,
     *                 "product_bundle_name_default": null,
     *                 "product_bundle_type": "C",
     *                 "was_product_bundle": null,
     *                 "original_bundle_item_no": null,
     *                 "naver_pay_order_id": null,
     *                 "naver_pay_claim_status": "PAYMENT_WAITING",
     *                 "individual_shipping_fee": "0.00",
     *                 "shipping_fee_type": "X",
     *                 "shipping_fee_type_text": "Free",
     *                 "shipping_payment_option": "F",
     *                 "payment_info_id": "0",
     *                 "original_item_no": [
     *                     242,
     *                     473
     *                 ],
     *                 "store_pickup": "F",
     *                 "ordered_date": "2019-06-07T15:55:51+09:00",
     *                 "shipped_date": "2019-06-07T15:56:52+09:00",
     *                 "delivered_date": "2019-06-07T15:57:05+09:00",
     *                 "cancel_date": null,
     *                 "return_request_date": null,
     *                 "return_confirmed_date": null,
     *                 "return_collected_date": null,
     *                 "cancel_request_date": null,
     *                 "refund_date": null,
     *                 "exchange_request_date": null,
     *                 "exchange_date": null,
     *                 "product_material": null,
     *                 "product_material_eng": null,
     *                 "cloth_fabric": null,
     *                 "product_weight": "1.00",
     *                 "volume_size": null,
     *                 "volume_size_weight": null,
     *                 "clearance_category": null,
     *                 "clearance_category_info": null,
     *                 "clearance_category_code": null,
     *                 "hs_code": "",
     *                 "one_plus_n_event": null,
     *                 "origin_place": " ",
     *                 "gift": "F",
     *                 "item_granting_gift": null,
     *                 "product_bundle_list": [
     *                     {
     *                         "product_no": 15,
     *                         "product_code": "P000000I",
     *                         "variant_code": "P000000P000A",
     *                         "product_name": "Sample Product 1",
     *                         "product_name_default": "Sample Product 1",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201100000",
     *                         "option_price": "0.00"
     *                     },
     *                     {
     *                         "product_no": 16,
     *                         "product_code": "P000000Q",
     *                         "variant_code": "P000000Q000A",
     *                         "product_name": "Sample Product 3",
     *                         "product_name_default": "Sample Product 3",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201201000",
     *                         "option_price": "0.00"
     *                     }
     *                 ],
     *                 "market_cancel_request": null,
     *                 "market_cancel_request_quantity": null,
     *                 "market_fail_reason": null,
     *                 "market_fail_reason_guide": null,
     *                 "market_item_sequence": null,
     *                 "market_custom_variant_code": null,
     *                 "option_type": "E",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000A",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 1
     *                         }
     *                     },
     *                     {
     *                         "option_code": "O000000B",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 2
     *                         }
     *                     }
     *                 ],
     *                 "order_status_before_cs": "N20"
     *             }
     *         ],
     *         "exchanged_items": [
     *             {
     *                 "shop_no": 1,
     *                 "item_no": 1,
     *                 "order_item_code": "20190607-0000018-01",
     *                 "variant_code": "P000000N000A",
     *                 "product_no": 14,
     *                 "product_code": "P000000N",
     *                 "custom_product_code": "",
     *                 "custom_variant_code": "",
     *                 "eng_product_name": null,
     *                 "option_id": "000A",
     *                 "option_value": "",
     *                 "option_value_default": "",
     *                 "additional_option_value": "",
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "text",
     *                         "name": "gift option",
     *                         "value": "yes"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "url",
     *                         "name": "Attached File",
     *                         "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                     }
     *                 ],
     *                 "product_name": "iPhone X",
     *                 "product_name_default": "iPhone X",
     *                 "product_price": "30000.00",
     *                 "option_price": "0.00",
     *                 "additional_discount_price": "0.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "app_item_discount_amount": "0.00",
     *                 "quantity": 1,
     *                 "supplier_product_name": "",
     *                 "supplier_transaction_type": "D",
     *                 "supplier_id": "S0000000",
     *                 "supplier_name": "Apple",
     *                 "tracking_no": "12345678",
     *                 "shipping_code": "D-20190607-0000018-00",
     *                 "claim_code": "B20190610-0000001",
     *                 "claim_reason_type": "A",
     *                 "claim_reason": "Sorry. I will cancel order for one item.",
     *                 "refund_bank_name": "Woori Bank",
     *                 "refund_bank_account_no": "1234567890",
     *                 "refund_bank_account_holder": "Holders Name",
     *                 "post_express_flag": null,
     *                 "order_status": "N40",
     *                 "order_status_additional_info": null,
     *                 "claim_quantity": 0,
     *                 "status_code": "N1",
     *                 "status_text": "Shipping Complete",
     *                 "open_market_status": "",
     *                 "bundled_shipping_type": "N",
     *                 "shipping_company_id": "2",
     *                 "shipping_company_name": "DHL",
     *                 "shipping_company_code": "0001",
     *                 "product_bundle": "F",
     *                 "product_bundle_no": "0",
     *                 "product_bundle_name": null,
     *                 "product_bundle_name_default": null,
     *                 "product_bundle_type": "C",
     *                 "was_product_bundle": null,
     *                 "original_bundle_item_no": null,
     *                 "naver_pay_order_id": null,
     *                 "naver_pay_claim_status": "PAYMENT_WAITING",
     *                 "individual_shipping_fee": "0.00",
     *                 "shipping_fee_type": "X",
     *                 "shipping_fee_type_text": "Free",
     *                 "shipping_payment_option": "F",
     *                 "payment_info_id": "0",
     *                 "original_item_no": [
     *                     244
     *                 ],
     *                 "store_pickup": "F",
     *                 "ordered_date": "2019-06-07T15:55:51+09:00",
     *                 "shipped_date": "2019-06-07T15:56:52+09:00",
     *                 "delivered_date": "2019-06-07T15:57:05+09:00",
     *                 "cancel_date": null,
     *                 "return_request_date": null,
     *                 "return_confirmed_date": null,
     *                 "return_collected_date": null,
     *                 "cancel_request_date": null,
     *                 "refund_date": null,
     *                 "exchange_request_date": null,
     *                 "exchange_date": null,
     *                 "product_material": null,
     *                 "product_material_eng": null,
     *                 "cloth_fabric": null,
     *                 "product_weight": "1.00",
     *                 "volume_size": null,
     *                 "volume_size_weight": null,
     *                 "clearance_category": null,
     *                 "clearance_category_info": null,
     *                 "clearance_category_code": null,
     *                 "hs_code": "",
     *                 "one_plus_n_event": null,
     *                 "origin_place": " ",
     *                 "gift": "F",
     *                 "item_granting_gift": null,
     *                 "product_bundle_list": [
     *                     {
     *                         "product_no": 15,
     *                         "product_code": "P000000I",
     *                         "variant_code": "P000000P000A",
     *                         "product_name": "Sample Product 1",
     *                         "product_name_default": "Sample Product 1",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201100000",
     *                         "option_price": "0.00"
     *                     },
     *                     {
     *                         "product_no": 16,
     *                         "product_code": "P000000Q",
     *                         "variant_code": "P000000Q000A",
     *                         "product_name": "Sample Product 3",
     *                         "product_name_default": "Sample Product 3",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201201000",
     *                         "option_price": "0.00"
     *                     }
     *                 ],
     *                 "option_type": "E",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000A",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 1
     *                         }
     *                     },
     *                     {
     *                         "option_code": "O000000B",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 2
     *                         }
     *                     }
     *                 ],
     *                 "order_status_before_cs": "N20"
     *             }
     *         ],
     *         "include_tax": "T",
     *         "tax": null,
     *         "carrier_id": null,
     *         "return_invoice_success": null,
     *         "return_invoice_fail_reason": null
     *     }
     * }
     * ```
     */
    retrieveAnExchange(
      input: RetrieveAnExchangeInput,
      options?: RequestOptions<RetrieveAnExchangeOutput['exchange']>,
    ): Promise<AxiosResponse<RetrieveAnExchangeOutput>>;
    /**
     * @description
     * 교환이 신청된 주문의 상태를 교환접수 혹은 교환완료로 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-multiple-exchanges
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchange": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190805-0000011",
     *             "status": "accepted",
     *             "claim_code": "B20190805-0000007",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190805-0000011-01",
     *                     "quantity": 4,
     *                     "exchange_variant_code": null
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000011-02",
     *                     "quantity": 4,
     *                     "exchange_variant_code": "P000000R000C"
     *                 }
     *             ],
     *             "exchanged_items": [
     *                 {
     *                     "order_item_code": "20190805-0000011-03"
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000011-04"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190805-0000012",
     *             "status": "accepted",
     *             "claim_code": "B20190805-0000008",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190805-0000012-01",
     *                     "quantity": 4,
     *                     "exchange_variant_code": null
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000012-02",
     *                     "quantity": 4,
     *                     "exchange_variant_code": null
     *                 }
     *             ],
     *             "exchanged_items": [
     *                 {
     *                     "order_item_code": "20190805-0000012-03"
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000012-04"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createMultipleExchanges(
      input: CreateMultipleExchangesInput,
      options?: RequestOptions<CreateMultipleExchangesOutput['exchange'][number]>,
    ): Promise<AxiosResponse<CreateMultipleExchangesOutput>>;
    /**
     * @description
     * 교환이 접수된 주문의 상태를 수정 할 수 있습니다.
     * 다건의 주문에 대해 교환접수를 철회하거나, 재고를 복구하거나, 철회사유를 입력할 수 있습니다.
     * 택배사에 이미 수거요청이 전달되었으나 수거가 필요하지 않게 될 경우, 택배사에 직접 연락하셔서 수거요청을 취소해주셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-multiple-order-exchanges
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchange": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "claim_code": "B20190228-0000001",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000011-02"
     *                 }
     *             ],
     *             "status": "processing",
     *             "pickup_completed": "T",
     *             "carrier_id": null,
     *             "return_invoice_no": null,
     *             "return_invoice_success": null,
     *             "return_invoice_fail_reason": null,
     *             "recover_inventory": "T",
     *             "exchanged_after_collected": null,
     *             "undone": null,
     *             "add_memo_too": null,
     *             "undone_reason_type": null,
     *             "undone_reason": null,
     *             "expose_order_detail": null,
     *             "exposed_undone_reason": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000012",
     *             "claim_code": "B20190228-0000002",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000012-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000012-02"
     *                 }
     *             ],
     *             "status": "processing",
     *             "pickup_completed": "T",
     *             "carrier_id": null,
     *             "return_invoice_no": null,
     *             "return_invoice_success": null,
     *             "return_invoice_fail_reason": null,
     *             "recover_inventory": "T",
     *             "exchanged_after_collected": null,
     *             "undone": null,
     *             "add_memo_too": null,
     *             "undone_reason_type": null,
     *             "undone_reason": null,
     *             "expose_order_detail": null,
     *             "exposed_undone_reason": null
     *         }
     *     ]
     * }
     * ```
     */
    updateMultipleOrderExchanges(
      input: UpdateMultipleOrderExchangesInput,
      options?: RequestOptions<UpdateMultipleOrderExchangesOutput['exchange'][number]>,
    ): Promise<AxiosResponse<UpdateMultipleOrderExchangesOutput>>;
  }
}
