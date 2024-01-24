import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 공급사 배송(Supplier Shipping)은 쇼핑몰의 각 공급사에 등록된 배송방법과 관련된 기능입니다.
   * 각각의 공급사에게 등록된 배송방법에 대한 정보를 조회하거나 수정할 수 있습니다.
   */
  export interface ShippingSuppliers {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 공급사 아이디
     *
     *
     */
    supplierId: any;
    /**
     * @description
     * 공급사 코드
     *
     *
     */
    supplierCode: any;
    /**
     * @description
     * 배송방법
     *
     * shipping_01 : 택배
     * shipping_02 : 빠른등기
     * shipping_04 : 직접배송
     * shipping_05 : 퀵배송
     * shipping_06 : 기타
     * shipping_07 : 화물배송
     * shipping_08 : 매장직접수령
     * shipping_09 : 배송필요 없음
     *
     *
     */
    shippingMethod: any;
    /**
     * @description
     * 기타배송
     *
     * 배송방법(shipping_method)이 shipping_06(기타) 일 때 기타 배송 정보
     *
     * 최대글자수 : [25자]
     */
    shippingEtc: any;
    /**
     * @description
     * 국내/해외배송 설정
     *
     * A : 국내배송
     * C : 해외배송
     * B : 국내/해외배송
     *
     *
     */
    shippingType: any;
    /**
     * @description
     * 배송지역
     *
     * 최대글자수 : [127자]
     */
    shippingPlace: any;
    /**
     * @description
     * 배송기간 시작일
     *
     * 최소값: [1]
     * 최대값: [100]
     */
    shippingStartDate: any;
    /**
     * @description
     * 배송기간 종료일
     *
     * 최소값: [1]
     * 최대값: [100]
     */
    shippingEndDate: any;
    /**
     * @description
     * 배송비타입
     *
     * T : 배송비 무료
     * R : 고정배송비 사용
     * M : 구매 금액에 따른 부과
     * D : 구매 금액별 차등 배송료 사용
     * W : 상품 무게별 차등 배송료 사용
     * C : 상품 수량별 차등 배송료 사용
     * N : 상품 수량에 비례하여 배송료 부과
     *
     *
     */
    shippingFeeType: any;
    /**
     * @description
     * 배송비 무료 최소금액
     *
     * 배송비타입(shipping_fee_type)이 &#34;M(구매 금엑에 따른 부과)&#34; 일 때 배송비를 무료로 만들기 위한 기준 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    freeShippingPrice: any;
    /**
     * @description
     * 배송비
     *
     * 배송비타입(shipping_fee_type)이 &#34;R(고정배송비 사용)&#34;이거나 &#34;M(구매 금액에 따른 부과)&#34;일 때 배송비 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    shippingFee: any;
    /**
     * @description
     * 상품 수량별 배송비
     *
     * 배송비타입(shipping_fee_type)이 &#34;N(상품 수량에 비례하여 배송료 부과)&#34;일 때 수량별 배송비 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    shippingFeeByQuantity: any;
    /**
     * @description
     * 배송비 상세 설정
     *
     * 배열 최대사이즈: [50]
     */
    shippingRates: any;
    /**
     * @description
     * 배송비 선결제 설정
     *
     * C : 착불
     * P : 선결제
     * B : 착불/선결제
     *
     *
     */
    prepaidShippingFee: any;
    /**
     * @description
     * 상품별 개별 배송료 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    shippingFeeByProduct: any;
    /**
     * @description
     * 상품중량
     *
     * 최소값: [0]
     * 최대값: [30]
     */
    productWeight: any;
    /**
     * @description
     * HS코드
     *
     * 최대글자수 : [20자]
     */
    hscode: any;
    /**
     * @description
     * 국가별 HS 코드
     *
     * 배열 최대사이즈: [50]
     */
    countryHscode: any;
  }

  export interface RetrieveASupplierSShippingSettingsInput {
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
     * 공급사 아이디
     *
     * @required
     */
    supplierId: any;
  }

  export interface RetrieveASupplierSShippingSettingsOutput {
    supplier: {
      shopNo: number;
      supplierId: string;
      supplierCode: string;
      shippingMethod: string;
      shippingEtc: any;
      shippingType: Cafe24Enum;
      shippingPlace: string;
      shippingStartDate: number;
      shippingEndDate: number;
      shippingFeeType: Cafe24Enum;
      freeShippingPrice: any;
      shippingFee: any;
      shippingFeeByQuantity: any;
      shippingRates: {
        shippingRatesMin: string;
        shippingRatesMax: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
      }[];
      prepaidShippingFee: Cafe24Enum;
      shippingFeeByProduct: Cafe24Enum;
      productWeight: string;
      hscode: Cafe24Datetime;
      countryHscode: {
        countryCode: string;
        hscode: Cafe24Datetime;
      }[];
    };
  }
  export interface UpdateASupplierSShippingSettingsInput {
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
     * 공급사 아이디
     *
     * @required
     */
    supplierId: any;
    /**
     * @description
     * 배송방법
     *
     * shipping_01 : 택배
     * shipping_02 : 빠른등기
     * shipping_04 : 직접배송
     * shipping_05 : 퀵배송
     * shipping_06 : 기타
     * shipping_07 : 화물배송
     * shipping_08 : 매장직접수령
     * shipping_09 : 배송필요 없음
     *
     *
     */
    shippingMethod?: any;
    /**
     * @description
     * 기타배송
     *
     * 배송방법(shipping_method)이 shipping_06(기타) 일 때 기타 배송 정보
     *
     * 최대글자수 : [25자]
     */
    shippingEtc?: any;
    /**
     * @description
     * 국내/해외배송 설정
     *
     * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * A : 국내배송
     * C : 해외배송
     * B : 국내/해외배송
     *
     *
     */
    shippingType?: any;
    /**
     * @description
     * 배송지역
     *
     * 최대글자수 : [127자]
     */
    shippingPlace?: any;
    /**
     * @description
     * 배송기간 시작일
     *
     * 최소값: [1]
     * 최대값: [100]
     */
    shippingStartDate?: any;
    /**
     * @description
     * 배송기간 종료일
     *
     * 최소값: [1]
     * 최대값: [100]
     */
    shippingEndDate?: any;
    /**
     * @description
     * 배송비타입
     *
     * T : 배송비 무료
     * R : 고정배송비 사용
     * M : 구매 금액에 따른 부과
     * D : 구매 금액별 차등 배송료 사용
     * W : 상품 무게별 차등 배송료 사용
     * C : 상품 수량별 차등 배송료 사용
     * N : 상품 수량에 비례하여 배송료 부과
     *
     *
     */
    shippingFeeType?: any;
    /**
     * @description
     * 배송비 무료 최소금액
     *
     * 배송비타입(shipping_fee_type)이 &#34;M(구매 금엑에 따른 부과)&#34; 일 때 배송비를 무료로 만들기 위한 기준 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    freeShippingPrice?: any;
    /**
     * @description
     * 배송비
     *
     * 배송비타입(shipping_fee_type)이 &#34;R(고정배송비 사용)&#34;이거나 &#34;M(구매 금액에 따른 부과)&#34;일 때 배송비 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    shippingFee?: any;
    /**
     * @description
     * 상품 수량별 배송비
     *
     * 배송비타입(shipping_fee_type)이 &#34;N(상품 수량에 비례하여 배송료 부과)&#34;일 때 수량별 배송비 금액
     *
     * 최소값: [0]
     * 최대값: [999999999]
     */
    shippingFeeByQuantity?: any;
    /**
     * @description
     * 배송비 상세 설정
     *
     * 배열 최대사이즈: [50]
     */
    shippingRates?: {
      /**
       * @description
       * 배송비 - 배송비 부과 기준 하한값
       *
       *
       */
      shippingRatesMin?: any;
      /**
       * @description
       * 배송비 - 배송비 부과 기준 상한값
       *
       *
       */
      shippingRatesMax?: any;
      /**
       * @description
       * 배송비
       *
       *
       */
      shippingFee?: any;
    };
    /**
     * @description
     * 배송비 선결제 설정
     *
     * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * C : 착불
     * P : 선결제
     * B : 착불/선결제
     *
     *
     */
    prepaidShippingFee?: any;
    /**
     * @description
     * 상품별 개별 배송료 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    shippingFeeByProduct?: any;
    /**
     * @description
     * 상품중량
     *
     * 최소값: [0]
     * 최대값: [30]
     */
    productWeight?: any;
    /**
     * @description
     * HS코드
     *
     * 최대글자수 : [20자]
     */
    hscode?: any;
    /**
     * @description
     * 국가별 HS 코드
     *
     * 배열 최대사이즈: [24]
     */
    countryHscode?: {
      /**
       * @description
       * 국가코드
       *
       *
       */
      countryCode?: any;
      /**
       * @description
       * HS코드
       *
       *
       */
      hscode?: any;
    };
  }

  export interface UpdateASupplierSShippingSettingsOutput {
    supplier: {
      shopNo: number;
      supplierId: string;
      supplierCode: string;
      shippingMethod: string;
      shippingEtc: any;
      shippingType: Cafe24Enum;
      shippingPlace: string;
      shippingStartDate: number;
      shippingEndDate: number;
      shippingFeeType: Cafe24Enum;
      freeShippingPrice: any;
      shippingFee: any;
      shippingFeeByQuantity: any;
      shippingRates: {
        shippingRatesMin: string;
        shippingRatesMax: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
      }[];
      prepaidShippingFee: Cafe24Enum;
      shippingFeeByProduct: Cafe24Enum;
      productWeight: string;
      hscode: Cafe24Datetime;
      countryHscode: {
        countryCode: string;
        hscode: Cafe24Datetime;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 공급사에게 등록된 배송방법에 대한 정보를 조회할 수 있습니다.
     * 공급사 코드, 배송방법, 배송지역 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-supplier-s-shipping-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "shop_no": 1,
     *         "supplier_id": "sampleid",
     *         "supplier_code": "S000000A",
     *         "shipping_method": "shipping_01",
     *         "shipping_etc": null,
     *         "shipping_type": "B",
     *         "shipping_place": "A Region.",
     *         "shipping_start_date": 3,
     *         "shipping_end_date": 7,
     *         "shipping_fee_type": "C",
     *         "free_shipping_price": null,
     *         "shipping_fee": null,
     *         "shipping_fee_by_quantity": null,
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "0.00",
     *                 "shipping_rates_max": "30000.00",
     *                 "shipping_fee": "3000.00"
     *             },
     *             {
     *                 "shipping_rates_min": "30000.00",
     *                 "shipping_rates_max": "50000.00",
     *                 "shipping_fee": "2500.00"
     *             }
     *         ],
     *         "prepaid_shipping_fee": "P",
     *         "shipping_fee_by_product": "T",
     *         "product_weight": "1.00",
     *         "hscode": "0101211000",
     *         "country_hscode": [
     *             {
     *                 "country_code": "JPN",
     *                 "hscode": "010121100"
     *             },
     *             {
     *                 "country_code": "CHN",
     *                 "hscode": "01022100"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveASupplierSShippingSettings(
      input: RetrieveASupplierSShippingSettingsInput,
      options?: RequestOptions<
        RetrieveASupplierSShippingSettingsOutput['supplier']
      >,
    ): Promise<AxiosResponse<RetrieveASupplierSShippingSettingsOutput>>;
    /**
     * @description
     * 공급사에게 등록된 배송방법에 대한 정보를 수정할 수 있습니다.
     * 배송방법, 배송지역, 배송비타입 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-supplier-s-shipping-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "shop_no": 1,
     *         "supplier_id": "sampleid",
     *         "supplier_code": "S000000A",
     *         "shipping_method": "shipping_01",
     *         "shipping_etc": null,
     *         "shipping_type": "B",
     *         "shipping_place": "A Region.",
     *         "shipping_start_date": 3,
     *         "shipping_end_date": 7,
     *         "shipping_fee_type": "D",
     *         "free_shipping_price": null,
     *         "shipping_fee": null,
     *         "shipping_fee_by_quantity": null,
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "0.00",
     *                 "shipping_rates_max": "30000.00",
     *                 "shipping_fee": "3000.00"
     *             },
     *             {
     *                 "shipping_rates_min": "30000.00",
     *                 "shipping_rates_max": "50000.00",
     *                 "shipping_fee": "2500.00"
     *             }
     *         ],
     *         "prepaid_shipping_fee": "P",
     *         "shipping_fee_by_product": "T",
     *         "product_weight": "1.00",
     *         "hscode": "0101211000",
     *         "country_hscode": [
     *             {
     *                 "country_code": "JPN",
     *                 "hscode": "010121100"
     *             },
     *             {
     *                 "country_code": "CHN",
     *                 "hscode": "01022100"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateASupplierSShippingSettings(
      input: UpdateASupplierSShippingSettingsInput,
      options?: RequestOptions<
        UpdateASupplierSShippingSettingsOutput['supplier']
      >,
    ): Promise<AxiosResponse<UpdateASupplierSShippingSettingsOutput>>;
  }
}
