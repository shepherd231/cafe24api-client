import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 배송(Shipping)은 쇼핑몰에 등록된 배송방법과 관련된 기능입니다.
   * 각각의 배송방법에 대한 상세 정보를 조회할 수 있습니다.
   */
  export interface Shipping {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
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
    shipping_method: any;
    /**
     * @description
     * 기타배송
     *
     *
     */
    shipping_etc: any;
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
    shipping_type: any;
    /**
     * @description
     * 배송기간
     *
     *
     */
    shipping_period: any;
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
    shipping_fee_type: any;
    /**
     * @description
     * 배송비
     *
     * 최대값: [999999999]
     */
    shipping_fee: any;
    /**
     * @description
     * 배송비 무료 최소금액
     *
     * 배송비 설정 &gt; 구매 금액에 따른 부과 일 경우 사용
     *
     * 최대값: [99999999999999]
     */
    free_shipping_price: any;
    /**
     * @description
     * 상품 수량별 배송비
     *
     * 배송비 설정 &gt; 상품 수량에 비례하여 배송료 부과 일 경우 사용
     *
     * 최대값: [999999999]
     */
    shipping_fee_by_quantity: any;
    /**
     * @description
     * 배송비 상세 설정
     *
     *
     */
    shipping_rates: any;
    /**
     * @description
     * 배송비 청구 기준 주문금액 조건 설정
     *
     * D : 할인전 정상판매가격 기준(권장)
     * L : 최종 주문(결제)금액 기준
     * A : 할인 적용 후 결제 금액 기준
     * R : 최종 실 결제금액 기준
     *
     *
     */
    shipping_fee_criteria: any;
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
    prepaid_shipping_fee: any;
    /**
     * @description
     * 상품중량
     *
     *
     */
    product_weight: any;
    /**
     * @description
     * 해외배송가능 국가 제한 여부
     *
     * T : 제한함
     * F : 제한안함
     *
     *
     */
    oversea_shipping_country: any;
    /**
     * @description
     * 배송국가
     *
     *
     */
    oversea_shipping_country_list: any;
    /**
     * @description
     * 배송비 국가별 개별 설정 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    country_shipping_fee: any;
    /**
     * @description
     * 국가별 배송비
     *
     *
     */
    country_shipping_fee_list: any;
    /**
     * @description
     * 해외배송 보험료
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    international_shipping_insurance: any;
    /**
     * @description
     * 반품주소
     *
     *
     */
    return_address: any;
    /**
     * @description
     * 배송규격
     *
     *
     */
    package_volume: any;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wished_delivery_date: any;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wished_delivery_time: any;
    /**
     * @description
     * HS코드
     *
     *
     */
    hs_code: any;
    /**
     * @description
     * 국가별 HS 코드
     *
     *
     */
    country_hs_code: any;
  }

  export interface RetrieveShippingReturnSettingsInput {
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

  export interface RetrieveShippingReturnSettingsOutput {
    shipping: {
      shop_no: number;
      shipping_method: string;
      shipping_etc: any;
      shipping_period: {
        minimum: number;
        maximum: number;
      };
      product_weight: string;
      shipping_fee_type: Cafe24Enum;
      shipping_fee: any;
      free_shipping_price: any;
      shipping_fee_by_quantity: any;
      shipping_rates: {
        min_value: string;
        max_value: Cafe24Datetime;
        shipping_fee: Cafe24Datetime;
      }[];
      shipping_fee_criteria: Cafe24Enum;
      prepaid_shipping_fee: Cafe24Enum;
      oversea_shipping_country: Cafe24Enum;
      oversea_shipping_country_list: {
        country_code: string;
      }[];
      country_shipping_fee: Cafe24Enum;
      country_shipping_fee_list: {
        country_code: string;
        conditional: string;
        min_value: string;
        max_value: Cafe24Datetime;
        shipping_fee: Cafe24Datetime;
      }[];
      international_shipping_insurance: Cafe24Enum;
      return_address: {
        zipcode: Cafe24Datetime;
        ziptype: string;
        address1: string;
        address2: string;
      };
      package_volume: {
        width: string;
        length: string;
        height: Cafe24Datetime;
      };
      wished_delivery_date: {
        use: Cafe24Enum;
        range: {
          minimum: number;
          maximum: number;
        };
        default: {
          minimum: any;
          use_fast_delivery: Cafe24Enum;
        };
      };
      wished_delivery_time: {
        use: Cafe24Enum;
        range: {
          start_hour: Cafe24Datetime;
          end_hour: string;
        }[];
        default: {
          range: {
            start_hour: Cafe24Datetime;
            end_hour: string;
          };
          use_fast_delivery: Cafe24Enum;
        };
      };
      hs_code: Cafe24Datetime;
      country_hs_code: {
        hs_code: Cafe24Datetime;
        country_code: string;
      }[];
    };
  }
  export interface UpdateStoreShippingReturnSettingsInput {
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
    shipping_method?: any;
    /**
     * @description
     * 기타배송
     *
     * 최대글자수 : [25자]
     */
    shipping_etc?: any;
    /**
     * @description
     * 배송기간
     *
     *
     */
    shipping_period?: {
      /**
       * @description
       * 최소 기간
       *
       *
       */
      minimum?: any;
      /**
       * @description
       * 최대 기간
       *
       *
       */
      maximum?: any;
    };
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
    shipping_fee_type?: any;
    /**
     * @description
     * 배송비
     *
     * 최대값: [999999999]
     */
    shipping_fee?: any;
    /**
     * @description
     * 배송비 무료 최소금액
     *
     * 최대값: [99999999999999]
     */
    free_shipping_price?: any;
    /**
     * @description
     * 상품 수량별 배송비
     *
     * 최대값: [999999999]
     */
    shipping_fee_by_quantity?: any;
    /**
     * @description
     * 배송비 상세 설정
     *
     *
     */
    shipping_rates?: {
      /**
       * @description
       * 조건 최소값
       *
       *
       */
      min_value?: any;
      /**
       * @description
       * 조건 최대값
       *
       *
       */
      max_value?: any;
      /**
       * @description
       * 배송비
       *
       *
       */
      shipping_fee?: any;
    };
    /**
     * @description
     * 배송비 청구 기준 주문금액 조건 설정
     *
     * D : 할인전 정상판매가격 기준(권장)
     * A : 할인 적용 후 결제 금액 기준
     *
     *
     */
    shipping_fee_criteria?: any;
    /**
     * @description
     * 배송비 선결제 설정
     *
     * EC 일본, 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * C : 착불
     * P : 선결제
     * B : 착불/선결제
     *
     *
     */
    prepaid_shipping_fee?: any;
    /**
     * @description
     * 상품중량
     *
     * 최소값: [0]
     * 최대값: [30]
     */
    product_weight?: any;
    /**
     * @description
     * 해외배송가능 국가 제한 여부
     *
     * T : 제한함
     * F : 제한안함
     *
     *
     */
    oversea_shipping_country?: any;
    /**
     * @description
     * 배송국가
     *
     *
     */
    oversea_shipping_country_list?: {
      /**
       * @description
       * 국가코드
       *
       *
       */
      country_code?: any;
    };
    /**
     * @description
     * 배송비 국가별 개별 설정 여부
     *
     * EC 일본, 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    country_shipping_fee?: any;
    /**
     * @description
     * 국가별 배송비
     *
     * EC 일본, 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     *
     */
    country_shipping_fee_list?: {
      /**
       * @description
       * 국가코드
       *
       *
       */
      country_code?: any;
      /**
       * @description
       * 배송비 책정 조건
       * quantity : 수량
       * weight : 무게
       * price : 가격
       *
       *
       */
      conditional?: any;
      /**
       * @description
       * 조건 최소값
       *
       *
       */
      min_value?: any;
      /**
       * @description
       * 조건 최대값
       *
       *
       */
      max_value?: any;
      /**
       * @description
       * 배송비
       *
       *
       */
      shipping_fee?: any;
    };
    /**
     * @description
     * 해외배송 보험료
     *
     * EC 한국 버전에서만 사용할 수 있음.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    international_shipping_insurance?: any;
    /**
     * @description
     * 반품주소
     *
     *
     */
    return_address?: {
      /**
       * @description
       * 우편번호
       *
       *
       */
      zipcode?: any;
      /**
       * @description
       * 우편번호 선택 국가
       *
       *
       */
      ziptype?: any;
      /**
       * @description
       * 기본 주소
       *
       *
       */
      address1?: any;
      /**
       * @description
       * 상세 주소
       *
       *
       */
      address2?: any;
    };
    /**
     * @description
     * 배송규격
     *
     *
     */
    package_volume?: {
      /**
       * @description
       * 가로
       *
       *
       */
      width?: any;
      /**
       * @description
       * 세로
       *
       *
       */
      length?: any;
      /**
       * @description
       * 높이
       *
       *
       */
      height?: any;
    };
  }

  export interface UpdateStoreShippingReturnSettingsOutput {
    shipping: {
      shop_no: number;
      shipping_method: string;
      shipping_etc: any;
      shipping_period: {
        minimum: number;
        maximum: number;
      };
      shipping_fee_type: Cafe24Enum;
      shipping_rates: {
        min_value: string;
        max_value: Cafe24Datetime;
        shipping_fee: Cafe24Datetime;
      }[];
      shipping_fee_criteria: Cafe24Enum;
      prepaid_shipping_fee: Cafe24Enum;
      product_weight: string;
      oversea_shipping_country: Cafe24Enum;
      oversea_shipping_country_list: {
        country_code: string;
      }[];
      country_shipping_fee: Cafe24Enum;
      country_shipping_fee_list: {
        country_code: string;
        conditional: string;
        min_value: string;
        max_value: Cafe24Datetime;
        shipping_fee: Cafe24Datetime;
      }[];
      international_shipping_insurance: Cafe24Enum;
      return_address: {
        zipcode: Cafe24Datetime;
        ziptype: string;
        address1: string;
        address2: string;
      };
      package_volume: {
        width: string;
        length: string;
        height: Cafe24Datetime;
      };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 배송방법에 대한 정보를 목록으로 조회할 수 있습니다.
     * 배송방법, 배송기간, 배송비 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-shipping-return-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipping": {
     *         "shop_no": 1,
     *         "shipping_method": "shipping_01",
     *         "shipping_etc": null,
     *         "shipping_period": {
     *             "minimum": 3,
     *             "maximum": 7
     *         },
     *         "product_weight": "1.00",
     *         "shipping_fee_type": "D",
     *         "shipping_fee": null,
     *         "free_shipping_price": null,
     *         "shipping_fee_by_quantity": null,
     *         "shipping_rates": [
     *             {
     *                 "min_value": "0.00",
     *                 "max_value": "10000.00",
     *                 "shipping_fee": "2500.00"
     *             },
     *             {
     *                 "min_value": "10000.00",
     *                 "max_value": "50000.00",
     *                 "shipping_fee": "1000.00"
     *             }
     *         ],
     *         "shipping_fee_criteria": "D",
     *         "prepaid_shipping_fee": "P",
     *         "oversea_shipping_country": "T",
     *         "oversea_shipping_country_list": [
     *             {
     *                 "country_code": "US"
     *             },
     *             {
     *                 "country_code": "JP"
     *             }
     *         ],
     *         "country_shipping_fee": "T",
     *         "country_shipping_fee_list": [
     *             {
     *                 "country_code": "US",
     *                 "conditional": "price",
     *                 "min_value": "1.00",
     *                 "max_value": "1000.00",
     *                 "shipping_fee": "1000.00"
     *             },
     *             {
     *                 "country_code": "JP",
     *                 "conditional": "quantity",
     *                 "min_value": "1",
     *                 "max_value": "3",
     *                 "shipping_fee": "1000.00"
     *             }
     *         ],
     *         "international_shipping_insurance": "T",
     *         "return_address": {
     *             "zipcode": "07071",
     *             "ziptype": "KOR",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall"
     *         },
     *         "package_volume": {
     *             "width": "22",
     *             "length": "19",
     *             "height": "9"
     *         },
     *         "wished_delivery_date": {
     *             "use": "T",
     *             "range": {
     *                 "minimum": 1,
     *                 "maximum": 3
     *             },
     *             "default": {
     *                 "minimum": null,
     *                 "use_fast_delivery": "T"
     *             }
     *         },
     *         "wished_delivery_time": {
     *             "use": "T",
     *             "range": [
     *                 {
     *                     "start_hour": "08",
     *                     "end_hour": "17"
     *                 },
     *                 {
     *                     "start_hour": "00",
     *                     "end_hour": "07"
     *                 }
     *             ],
     *             "default": {
     *                 "range": {
     *                     "start_hour": "08",
     *                     "end_hour": "17"
     *                 },
     *                 "use_fast_delivery": "F"
     *             }
     *         },
     *         "hs_code": "4203109010",
     *         "country_hs_code": [
     *             {
     *                 "hs_code": "61102000",
     *                 "country_code": "CHN"
     *             },
     *             {
     *                 "hs_code": "392690010",
     *                 "country_code": "JPN"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveShippingReturnSettings(
      input: RetrieveShippingReturnSettingsInput,
      options?: RequestOptions<
        RetrieveShippingReturnSettingsOutput['shipping']
      >,
    ): Promise<AxiosResponse<RetrieveShippingReturnSettingsOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 배송방법에 대한 정보를 수정할 수 있습니다.
     * 배송방법, 배송기간 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-store-shipping-return-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipping": {
     *         "shop_no": 1,
     *         "shipping_method": "shipping_01",
     *         "shipping_etc": null,
     *         "shipping_period": {
     *             "minimum": 5,
     *             "maximum": 12
     *         },
     *         "shipping_fee_type": "D",
     *         "shipping_rates": [
     *             {
     *                 "min_value": "0.00",
     *                 "max_value": "1000.00",
     *                 "shipping_fee": "3000.00"
     *             },
     *             {
     *                 "min_value": "1000.00",
     *                 "max_value": "10000.00",
     *                 "shipping_fee": "1500.00"
     *             }
     *         ],
     *         "shipping_fee_criteria": "D",
     *         "prepaid_shipping_fee": "B",
     *         "product_weight": "5.00",
     *         "oversea_shipping_country": "T",
     *         "oversea_shipping_country_list": [
     *             {
     *                 "country_code": "US"
     *             },
     *             {
     *                 "country_code": "JP"
     *             }
     *         ],
     *         "country_shipping_fee": "T",
     *         "country_shipping_fee_list": [
     *             {
     *                 "country_code": "US",
     *                 "conditional": "price",
     *                 "min_value": "1.00",
     *                 "max_value": "1000.00",
     *                 "shipping_fee": "1000.00"
     *             },
     *             {
     *                 "country_code": "JP",
     *                 "conditional": "quantity",
     *                 "min_value": "1",
     *                 "max_value": "3",
     *                 "shipping_fee": "1000.00"
     *             }
     *         ],
     *         "international_shipping_insurance": "T",
     *         "return_address": {
     *             "zipcode": "07071",
     *             "ziptype": "KOR",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall"
     *         },
     *         "package_volume": {
     *             "width": "22",
     *             "length": "19",
     *             "height": "9"
     *         }
     *     }
     * }
     * ```
     */
    updateStoreShippingReturnSettings(
      input: UpdateStoreShippingReturnSettingsInput,
      options?: RequestOptions<
        UpdateStoreShippingReturnSettingsOutput['shipping']
      >,
    ): Promise<AxiosResponse<UpdateStoreShippingReturnSettingsOutput>>;
  }
}
