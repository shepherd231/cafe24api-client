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
   * 주문의 결제예정금액 계산(Orders calculation)은 주문의 배송국가 등을 체크하여 결제예정금액을 계산하는 기능입니다.
   */
  export interface OrdersCalculation {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 모바일 PC 여부
     *
     *
     */
    mobile: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     *
     */
    shippingType: any;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * icash : 가상계좌
     * tcash : 계좌이체
     * cell : 휴대폰
     * deferpay : 후불결제
     * point : 적립금
     *
     *
     */
    paymentMethod: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    countryCode: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId: any;
    /**
     * @description
     * 우편번호
     *
     *
     */
    zipcode: any;
    /**
     * @description
     * 전체주소
     *
     *
     */
    addressFull: any;
    /**
     * @description
     * 주/도
     *
     *
     */
    addressState: any;
    /**
     * @description
     * 주문상품목록
     *
     *
     */
    items: any;
    /**
     * @description
     * 회원등급 할인금액
     *
     *
     */
    membershipDiscountAmount: any;
    /**
     * @description
     * 배송비 할인금액
     *
     *
     */
    shippingFeeDiscountAmount: any;
    /**
     * @description
     * 상품별 할인금액
     *
     *
     */
    productDiscountAmount: any;
    /**
     * @description
     * 상품 구매금액
     *
     *
     */
    orderPriceAmount: any;
    /**
     * @description
     * 총 할인금액
     *
     *
     */
    totalDiscountAmount: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: any;
    /**
     * @description
     * 결제예정 금액
     *
     *
     */
    totalAmountDue: any;
    /**
     * @description
     * 배송비 상세정보
     *
     *
     */
    shippingFeeInformation: any;
  }

  export interface CalculateTotalDueInput {
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
     * 모바일 PC 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    mobile?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    memberId?: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     * @default A
     *
     *
     */
    shippingType?: any;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * icash : 가상계좌
     * tcash : 계좌이체
     * cell : 휴대폰
     * deferpay : 후불결제
     * point : 적립금
     *
     *
     */
    paymentMethod?: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    countryCode?: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId?: any;
    /**
     * @description
     * 우편번호
     *
     *
     */
    zipcode?: any;
    /**
     * @description
     * 전체주소
     *
     * 최대글자수 : [1000자]
     */
    addressFull?: any;
    /**
     * @description
     * 주/도
     *
     * 최대글자수 : [255자]
     */
    addressState?: any;
    /**
     * @description
     * 주문상품목록
     *
     *
     */
    items?: {
      /**
       * @description
       * 상품번호
       *
       *
       */
      productNo: any;
      /**
       * @description
       * 상품 품목 코드
       *
       *
       */
      variantCode: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
      /**
       * @description
       * 상품 판매가
       *
       *
       */
      productPrice: any;
      /**
       * @description
       * 옵션 추가 가격
       *
       *
       */
      optionPrice?: any;
      /**
       * @description
       * 세트상품 여부
       * T : 세트상품
       * F : 세트상품 아님
       * @default F
       *
       *
       */
      productBundle?: any;
      /**
       * @description
       * 세트상품번호
       *
       *
       */
      productBundleNo?: any;
      /**
       * @description
       * 배송비 선결제 설정
       * P : 선불
       * C : 착불
       * @default P
       *
       *
       */
      prepaidShippingFee?: any;
    };
  }

  export interface CalculateTotalDueOutput {
    calculation: {
      shopNo: number;
      mobile: Cafe24Enum;
      memberId: string;
      paymentMethod: string;
      shippingType: Cafe24Enum;
      countryCode: string;
      carrierId: number;
      zipcode: string;
      addressFull: string;
      addressState: string;
      items: {
        productNo: number;
        variantCode: string;
        quantity: number;
        productPrice: Cafe24Datetime;
        optionPrice: string;
        productBundle: Cafe24Enum;
        productBundleNo: any;
        prepaidShippingFee: Cafe24Enum;
        additionalDiscountPrice: string;
        additionalDiscountDetail: {
          customerDiscountAmount: any;
          newProductDiscountAmount: any;
          individualBundleProductDiscountAmount: string;
          repurchaseDiscountAmount: any;
          bulkPurchaseDiscountAmount: any;
          periodDiscountAmount: string;
        };
      }[];
      membershipDiscountAmount: string;
      shippingFeeDiscountAmount: Cafe24Datetime;
      productDiscountAmount: Cafe24Datetime;
      orderPriceAmount: Cafe24Datetime;
      totalDiscountAmount: Cafe24Datetime;
      shippingFee: Cafe24Datetime;
      totalAmountDue: Cafe24Datetime;
      shippingFeeInformation: {
        defaultShippingFee: string;
        supplierShippingFee: any;
        additonalAbroadShippingFee: any;
        additionalHandlingFee: any;
      };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문의 결제예정금액 계산 처리를 할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#calculate-total-due
     *
     * @example 응답 예시
     * ```json
     * {
     *     "calculation": {
     *         "shop_no": 1,
     *         "mobile": "F",
     *         "member_id": "sampleid",
     *         "payment_method": "cash",
     *         "shipping_type": "A",
     *         "country_code": "KR",
     *         "carrier_id": 15,
     *         "zipcode": "123-456",
     *         "address_full": "Professional Construction Hall, Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address_state": "STATE",
     *         "items": [
     *             {
     *                 "product_no": 14,
     *                 "variant_code": "P000000O000A",
     *                 "quantity": 1,
     *                 "product_price": "3000.00",
     *                 "option_price": "100.00",
     *                 "product_bundle": "F",
     *                 "product_bundle_no": null,
     *                 "prepaid_shipping_fee": "P",
     *                 "additional_discount_price": "930.00",
     *                 "additional_discount_detail": {
     *                     "customer_discount_amount": null,
     *                     "new_product_discount_amount": null,
     *                     "individual_bundle_product_discount_amount": "310.00",
     *                     "repurchase_discount_amount": null,
     *                     "bulk_purchase_discount_amount": null,
     *                     "period_discount_amount": "620.00"
     *                 }
     *             },
     *             {
     *                 "product_no": 10,
     *                 "variant_code": "P000000J000B",
     *                 "quantity": 1,
     *                 "product_price": "10000.00",
     *                 "option_price": "500.00",
     *                 "product_bundle": "T",
     *                 "product_bundle_no": 16,
     *                 "prepaid_shipping_fee": "P",
     *                 "additional_discount_price": "3150.00",
     *                 "additional_discount_detail": {
     *                     "customer_discount_amount": null,
     *                     "new_product_discount_amount": null,
     *                     "individual_bundle_product_discount_amount": "2100.00",
     *                     "repurchase_discount_amount": null,
     *                     "bulk_purchase_discount_amount": null,
     *                     "period_discount_amount": "1050.00"
     *                 }
     *             }
     *         ],
     *         "membership_discount_amount": "800.00",
     *         "shipping_fee_discount_amount": "2700.00",
     *         "product_discount_amount": "4080.00",
     *         "order_price_amount": "13600.00",
     *         "total_discount_amount": "7580.00",
     *         "shipping_fee": "2700.00",
     *         "total_amount_due": "8720.00",
     *         "shipping_fee_information": {
     *             "default_shipping_fee": "100.00",
     *             "supplier_shipping_fee": null,
     *             "additonal_abroad_shipping_fee": null,
     *             "additional_handling_fee": null
     *         }
     *     }
     * }
     * ```
     */
    calculateTotalDue(
      input: CalculateTotalDueInput,
      options?: AdminRequestOptions<CalculateTotalDueOutput['calculation']>,
    ): Promise<AxiosResponse<CalculateTotalDueOutput>>;
  }
}
