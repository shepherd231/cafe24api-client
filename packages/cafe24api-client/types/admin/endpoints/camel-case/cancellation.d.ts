import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 취소(Cancellation)는 특정 주문을 배송 전에 취소하는 기능입니다.
   * 판매자가 접수한 이후부터 생성되며 취소처리중의 단계를 거쳐 취소완료까지 진행됩니다.
   * 취소 리소스에서는 복수의 주문을 한번에 취소하거나 취소 상태를 수정하거나 조회할 수 있습니다.
   * 특정 주문을 취소할 때와 달리 PG 취소까지 진행되도록 취소할 수는 없습니다.
   */
  export interface Cancellation {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 취소번호
     *
     *
     */
    claimCode: any;
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
    claimReasonType: any;
    /**
     * @description
     * 사유
     *
     *
     */
    claimReason: any;
    /**
     * @description
     * 환불 방식
     *
     *
     */
    refundMethods: any;
    /**
     * @description
     * 비고
     *
     *
     */
    refundReason: any;
    /**
     * @description
     * 상품구매금액
     *
     *
     */
    orderPriceAmount: any;
    /**
     * @description
     * 환불금액
     *
     *
     */
    refundAmounts: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: any;
    /**
     * @description
     * 반품배송비 적용구분
     *
     *
     */
    returnShipType: any;
    /**
     * @description
     * 후불 결제 수수료
     *
     *
     */
    deferCommission: any;
    /**
     * @description
     * 제휴할인 취소액
     *
     *
     */
    partnerDiscountAmount: any;
    /**
     * @description
     * 상품별추가할인 취소액
     *
     *
     */
    addDiscountAmount: any;
    /**
     * @description
     * 회원등급할인 취소액
     *
     *
     */
    memberGradeDiscountAmount: any;
    /**
     * @description
     * 배송비할인 취소액
     *
     *
     */
    shippingDiscountAmount: any;
    /**
     * @description
     * 쿠폰할인 취소액
     *
     *
     */
    couponDiscountAmount: any;
    /**
     * @description
     * 사용된 적립금 반환액
     *
     *
     */
    pointUsed: any;
    /**
     * @description
     * 사용된 예치금 반환액
     *
     *
     */
    creditUsed: any;
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
    undoneReasonType: any;
    /**
     * @description
     * 철회 사유
     *
     *
     */
    undoneReason: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    exposeOrderDetail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     *
     */
    exposedUndoneReason: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items: any;
    /**
     * @description
     * 가격에 세금 포함
     *
     * T: 세금포함
     * F: 세금제외
     *
     *
     */
    includeTax: any;
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
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
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
    recoverInventory: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    addMemoToo: any;
  }

  export interface RetrieveAnOrderCancellationInput {
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
     * 취소번호
     *
     * @required
     */
    claimCode: any;
  }

  export interface RetrieveAnOrderCancellationOutput {
    cancellation: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      claimReasonType: Cafe24Enum;
      claimReason: string;
      refundMethods: string[];
      refundReason: string;
      orderPriceAmount: Cafe24Datetime;
      refundAmounts: {
        paymentMethod: string;
        amount: string;
      }[];
      shippingFee: string;
      returnShipType: string;
      deferCommission: string;
      partnerDiscountAmount: string;
      addDiscountAmount: string;
      memberGradeDiscountAmount: string;
      shippingDiscountAmount: string;
      couponDiscountAmount: string;
      pointUsed: string;
      creditUsed: string;
      undone: Cafe24Enum;
      undoneReasonType: any;
      undoneReason: any;
      exposeOrderDetail: any;
      exposedUndoneReason: any;
      items: {
        shopNo: number;
        itemNo: number;
        orderItemCode: string;
        variantCode: string;
        productNo: number;
        productCode: string;
        customProductCode: string;
        customVariantCode: string;
        engProductName: any;
        optionId: string;
        optionValue: string;
        optionValueDefault: string;
        additionalOptionValue: string;
        additionalOptionValues: {
          key: string;
          type: string;
          name: string;
          value: string;
        }[];
        productName: string;
        productNameDefault: string;
        productPrice: Cafe24Datetime;
        optionPrice: string;
        additionalDiscountPrice: string;
        couponDiscountPrice: Cafe24Datetime;
        appItemDiscountAmount: string;
        quantity: number;
        supplierProductName: string;
        supplierTransactionType: Cafe24Enum;
        supplierId: string;
        supplierName: string;
        trackingNo: Cafe24Datetime;
        shippingCode: string;
        claimCode: string;
        claimReasonType: Cafe24Enum;
        claimReason: string;
        refundBankName: string;
        refundBankAccountNo: Cafe24Datetime;
        refundBankAccountHolder: string;
        postExpressFlag: any;
        orderStatus: string;
        orderStatusAdditionalInfo: any;
        claimQuantity: number;
        statusCode: string;
        statusText: string;
        openMarketStatus: string;
        bundledShippingType: Cafe24Enum;
        shippingCompanyId: Cafe24Datetime;
        shippingCompanyName: string;
        shippingCompanyCode: Cafe24Datetime;
        productBundle: Cafe24Enum;
        productBundleNo: Cafe24Datetime;
        productBundleName: any;
        productBundleNameDefault: any;
        productBundleType: Cafe24Enum;
        wasProductBundle: any;
        originalBundleItemNo: any;
        naverPayOrderId: any;
        naverPayClaimStatus: string;
        individualShippingFee: string;
        shippingFeeType: Cafe24Enum;
        shippingFeeTypeText: string;
        shippingPaymentOption: Cafe24Enum;
        paymentInfoId: Cafe24Datetime;
        originalItemNo: number[];
        storePickup: Cafe24Enum;
        orderedDate: Cafe24Datetime;
        shippedDate: Cafe24Datetime;
        deliveredDate: Cafe24Datetime;
        cancelDate: any;
        returnRequestDate: any;
        returnConfirmedDate: any;
        returnCollectedDate: any;
        cancelRequestDate: any;
        refundDate: any;
        exchangeRequestDate: any;
        exchangeDate: any;
        productMaterial: any;
        productMaterialEng: any;
        clothFabric: any;
        productWeight: string;
        volumeSize: any;
        volumeSizeWeight: any;
        clearanceCategory: any;
        clearanceCategoryInfo: any;
        clearanceCategoryCode: any;
        hsCode: string;
        onePlusNEvent: any;
        originPlace: Cafe24Enum;
        gift: Cafe24Enum;
        itemGrantingGift: any;
        productBundleList: {
          productNo: number;
          productCode: string;
          variantCode: string;
          productName: Cafe24Datetime;
          productNameDefault: Cafe24Datetime;
          optionId: string;
          optionValue: string;
          optionValueDefault: string;
          additionalOptionValue: string;
          additionalOptionValues: {
            key: string;
            type: string;
            name: string;
            value: string;
          }[];
          quantity: number;
          supplierId: string;
          engProductName: any;
          hsCode: Cafe24Datetime;
          optionPrice: string;
        }[];
        marketCancelRequest: any;
        marketCancelRequestQuantity: any;
        marketFailReason: any;
        marketFailReasonGuide: any;
        marketItemSequence: any;
        marketItemNo: any;
        marketCustomVariantCode: any;
        optionType: Cafe24Enum;
        options: {
          optionCode: string;
          optionName: any;
          optionValue: {
            optionText: any;
            valueNo: number;
          };
        }[];
        marketDiscountAmount: string;
        labels: any;
        orderStatusBeforeCs: string;
        supplyPrice: Cafe24Datetime;
      }[];
      includeTax: Cafe24Enum;
      tax: {
        name: string;
        amount: Cafe24Datetime;
      }[];
    };
  }
  export interface CreateMultipleOrderCancellationsInput {
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
     * 주문번호
     *
     * @required
     */
    orderId: any;
    /**
     * @description
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
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
    recoverInventory?: any;
    /**
     * @description
     * 쿠폰 복원
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * T : 복구함
     * F : 복구안함
     *
     * @default F
     *
     *
     */
    recoverCoupon?: any;
    /**
     * @description
     * 복원할 쿠폰 번호
     *
     *
     */
    recoverCouponNo?: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    addMemoToo?: any;
    /**
     * @description
     * 취소사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 취소사유 구분
     *
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * A : 고객변심
     * B : 배송지연
     * C : 배송불가지역
     * L : 수출/통관 불가
     * D : 포장불량
     * E : 상품불만족
     * F : 상품정보상이
     * G : 서비스불만족
     * H : 품절
     * I : 기타
     *
     *
     */
    claimReasonType?: any;
    /**
     * @description
     * 네이버페이 취소사유 구분
     *
     * 쇼핑몰/오픈마켓/카카오페이 주문을 취소할 경우 사용 불가
     *
     * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * 51 : 구매 의사 취소
     * 52 : 색상 및 사이즈 변경
     * 53 : 다른 상품 잘못 주문
     * 54 : 서비스 및 상품 불만족
     * 55 : 배송 지연
     * 56 : 상품 품절
     * 60 : 상품 정보 상이
     *
     *
     */
    naverpayCancelReasonType?: any;
    /**
     * @description
     * 카카오페이 취소사유 구분
     *
     * 오픈마켓/네이버페이 주문을 취소할 경우 사용 불가
     *
     * K1 : 변심에 의한 상품 취소
     * K2 : 다른 옵션이나 상품을 잘못 주문함
     * K3 : 배송지연
     * K4 : 상품 파손 또는 불량
     * K5 : 다른 상품 오배송 또는 구성품 누락
     * K6 : 상품정보와 다름
     * K7 : 품절로 인한 배송 불가
     *
     *
     */
    kakaopayCancelReasonType?: any;
    /**
     * @description
     * 환불 방식
     *
     * (오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가)
     *
     * T : 현금
     * F : 신용카드
     * M : 적립금
     * G : 계좌이체
     * C : 휴대폰
     * D : 예치금
     * Z : 후불
     * O : 선불금
     * V : 편의점
     * J : 제휴상품권
     * K : 제휴포인트
     * I : 기타
     *
     *
     */
    refundMethodCode?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * refund_bank_code
     *
     * 해당 쇼핑몰이 EC Korea 쇼핑몰일 경우 필수
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     *
     */
    refundBankCode?: any;
    /**
     * @description
     * 환불은행명
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * ※ 해당 쇼핑몰이 EC Global 쇼핑몰일 경우 필수
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     * 최대글자수 : [250자]
     */
    refundBankName?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     * 오픈마켓/네이버페이/카카오페이 주문을 취소할 경우 사용 불가
     *
     *
     */
    refundBankAccountNo?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refundBankAccountHolder?: any;
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
      orderItemCode: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
  }

  export interface CreateMultipleOrderCancellationsOutput {
    cancellation: {
      shopNo: number;
      orderId: string;
      status: string;
      claimCode: string;
      items: {
        orderItemCode: string;
        quantity: number;
      }[];
    }[];
  }
  export interface ChangeCancellationDetailsInBulkInput {
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
     * 주문번호
     *
     * @required
     */
    orderId: any;
    /**
     * @description
     * 취소번호
     *
     * @required
     */
    claimCode: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     * @required
     */
    recoverInventory: any;
    /**
     * @description
     * 철회 여부
     *
     * T : 철회함
     *
     * @required
     */
    undone: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    addMemoToo: any;
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
     * @required
     */
    undoneReasonType: any;
    /**
     * @description
     * 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    undoneReason?: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     * @required
     */
    exposeOrderDetail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    exposedUndoneReason?: any;
  }

  export interface ChangeCancellationDetailsInBulkOutput {
    cancellation: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      recoverInventory: Cafe24Enum;
      items: {
        orderItemCode: string;
      }[];
      undone: Cafe24Enum;
      addMemoToo: Cafe24Enum;
      undoneReasonType: Cafe24Enum;
      undoneReason: string;
      exposeOrderDetail: Cafe24Enum;
      exposedUndoneReason: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 취소 완료되었거나 취소처리 진행중인 내역을 조회할 수 있습니다.
     * 환불 방식, 환불금액, 철회 사유 구분 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-order-cancellation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": {
     *         "shop_no": 1,
     *         "order_id": "20190607-0000018",
     *         "claim_code": "C20190610-0000001",
     *         "claim_reason_type": "A",
     *         "claim_reason": "Damaged products",
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
     *                 "claim_code": "C20190107-0000001",
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
     *                 "market_item_no": null,
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
     *                 "market_discount_amount": "0.00",
     *                 "labels": null,
     *                 "order_status_before_cs": "N20",
     *                 "supply_price": "1500.00"
     *             }
     *         ],
     *         "include_tax": "T",
     *         "tax": [
     *             {
     *                 "name": "vat",
     *                 "amount": "1000.00"
     *             },
     *             {
     *                 "name": "tax",
     *                 "amount": "800.00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAnOrderCancellation(
      input: RetrieveAnOrderCancellationInput,
      options?: RequestOptions<
        RetrieveAnOrderCancellationOutput['cancellation']
      >,
    ): Promise<AxiosResponse<RetrieveAnOrderCancellationOutput>>;
    /**
     * @description
     * 배송 전의 여러 주문을 취소할 수 있습니다.
     * 해당 API를 사용하여 취소할 경우 환불완료 처리까지는 되지만 PG 취소까지는 진행되지 않으며 별도 PG 취소처리를 해주어야 합니다.
     * 부분취소할 경우 각 환불 금액은 자동 계산되어 환불처리 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-multiple-order-cancellations
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "status": "canceled",
     *             "claim_code": "C20190805-0000007",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01",
     *                     "quantity": 4
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000011-02",
     *                     "quantity": 4
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000012",
     *             "status": "canceled",
     *             "claim_code": "C20190805-0000008",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000012-01",
     *                     "quantity": 4
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000012-02",
     *                     "quantity": 4
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createMultipleOrderCancellations(
      input: CreateMultipleOrderCancellationsInput,
      options?: RequestOptions<
        CreateMultipleOrderCancellationsOutput['cancellation'][number]
      >,
    ): Promise<AxiosResponse<CreateMultipleOrderCancellationsOutput>>;
    /**
     * @description
     * 주문의 취소 상태를 수정할 수 있습니다.
     * 취소가 접수된 주문의 주문 상태를 취소 접수 이전 상태로 철회할 수 있습니다.
     * 주문의 취소 상태를 수정하여 취소접수를 철회하고 재고를 복구하거나 철회사유를 입력할 수 있습니다.
     * 택배사에 이미 수거요청이 전달되었으나 수거가 필요하지 않게 될 경우, 택배사에 직접 연락하셔서 수거요청을 취소해주셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#change-cancellation-details-in-bulk
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cancellation": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190805-0000011",
     *             "claim_code": "C20190805-0000007",
     *             "recover_inventory": "T",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190805-0000011-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000011-02"
     *                 }
     *             ],
     *             "undone": "T",
     *             "add_memo_too": "F",
     *             "undone_reason_type": "A",
     *             "undone_reason": "Change of mind",
     *             "expose_order_detail": "T",
     *             "exposed_undone_reason": "Dear customer, It has been undone as discussed. Thank you."
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190805-0000012",
     *             "claim_code": "C20190805-0000008",
     *             "recover_inventory": "T",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190805-0000012-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190805-0000012-02"
     *                 }
     *             ],
     *             "undone": "T",
     *             "add_memo_too": "F",
     *             "undone_reason_type": "A",
     *             "undone_reason": "Change of mind",
     *             "expose_order_detail": "F",
     *             "exposed_undone_reason": null
     *         }
     *     ]
     * }
     * ```
     */
    changeCancellationDetailsInBulk(
      input: ChangeCancellationDetailsInBulkInput,
      options?: RequestOptions<
        ChangeCancellationDetailsInBulkOutput['cancellation'][number]
      >,
    ): Promise<AxiosResponse<ChangeCancellationDetailsInBulkOutput>>;
  }
}
