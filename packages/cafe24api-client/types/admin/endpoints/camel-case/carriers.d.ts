import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 배송사(Carriers)는 쇼핑몰로부터 쇼핑몰 고객에게까지 상품을 배송하는 주체입니다.
   * 배송사를 등록하면 쇼핑몰에서 배송처리시 해당 배송사를 선택하여 배송 처리를 진행할 수 있습니다.
   * 배송사 리소스에서는 현재 등록되어있는 배송사를 조회하고 배송사를 생성, 수정, 삭제처리할 수 있습니다.
   */
  export interface Carriers {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId: any;
    /**
     * @description
     * 배송사 코드
     *
     * shipping_company_code
     *
     *
     */
    shippingCarrierCode: any;
    /**
     * @description
     * 배송사 명
     *
     *
     */
    shippingCarrier: any;
    /**
     * @description
     * 배송추적 URL
     *
     *
     */
    trackShipmentUrl: any;
    /**
     * @description
     * 국내/해외배송 설정
     *
     * A : 국내
     * B : 국내/해외
     * C : 해외
     *
     *
     */
    shippingType: any;
    /**
     * @description
     * 대표 연락처
     *
     *
     */
    contact: any;
    /**
     * @description
     * 보조 연락처
     *
     *
     */
    secondaryContact: any;
    /**
     * @description
     * 이메일
     *
     *
     */
    email: any;
    /**
     * @description
     * 기본 배송비
     *
     *
     */
    defaultShippingFee: any;
    /**
     * @description
     * 홈페이지 주소
     *
     *
     */
    homepageUrl: any;
    /**
     * @description
     * 기본배송사 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    defaultShippingCarrier: any;
    /**
     * @description
     * 배송비 설정 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    shippingFeeSetting: any;
    /**
     * @description
     * 배송비 설정 데이터
     *
     *
     */
    shippingFeeSettingDetail: any;
    /**
     * @description
     * 연동택배 예외정보 설정
     *
     *
     */
    expressExceptionSetting: any;
    /**
     * @description
     * link
     *
     *
     */
    links: any;
  }

  export interface RetrieveAListOfShippingCarriersInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
  }

  export interface RetrieveAListOfShippingCarriersOutput {
    carriers: {
      shopNo: number;
      carrierId: number;
      shippingCarrierCode: Cafe24Datetime;
      shippingCarrier: string;
      trackShipmentUrl: any;
      shippingType: Cafe24Enum;
      contact: string;
      secondaryContact: string;
      email: string;
      defaultShippingFee: any;
      homepageUrl: string;
      defaultShippingCarrier: Cafe24Enum;
      shippingFeeSetting: Cafe24Enum;
      shippingFeeSettingDetail: {
        shippingType: Cafe24Enum;
        availableShippingZone: string;
        minShippingPeriod: number;
        maxShippingPeriod: number;
        shippingInformation: string;
        shippingFeeSettingDomestic: {
          shippingFeeType: Cafe24Enum;
          shippingFee: any;
          minPrice: any;
          useProductCategory: Cafe24Enum;
          productCategoryList: {
            categoryNo: number;
            categoryName: string;
          }[];
          shippingFeeCriteria: Cafe24Enum;
          domesticShippingFeeList: {
            countryCode: string;
            conditional: Cafe24Enum;
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          availableShippingZone: any;
          availableShippingZoneList: any;
          availableOrderTime: any;
          startTime: any;
          endTime: any;
        };
        shippingFeeSettingOversea: {
          shippingFeeCriteria: any;
          shippingCountryList: {
            countryCode: string;
            countryName: string;
          }[];
          countryShippingFeeList: {
            countryCode: string;
            countryName: string;
            conditional: Cafe24Enum;
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          additionalHandlingFee: Cafe24Enum;
          additionalHandlingFeeList: {
            countryCode: string;
            countryName: string;
            text: string;
            minValue: string;
            maxValue: Cafe24Datetime;
            additionalHandlingFee: Cafe24Datetime;
            unit: string;
            roundingUnit: any;
            roundingRule: any;
          }[];
        };
      };
      expressExceptionSetting: {
        weight: Cafe24Datetime;
        volume: Cafe24Datetime;
        shippingType: any;
        boxType: any;
        senderName: string;
        senderCellphone: string;
        senderPhone: any;
        senderZipcode: any;
        senderAddress1: any;
        senderAddress2: any;
      };
    }[];
  }
  export interface RetrieveAShippingCarrierInput {
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
     * 배송업체 아이디
     *
     * @required
     */
    carrierId: any;
  }

  export interface RetrieveAShippingCarrierOutput {
    carrier: {
      shopNo: number;
      carrierId: number;
      shippingCarrierCode: Cafe24Datetime;
      shippingCarrier: string;
      trackShipmentUrl: any;
      contact: string;
      secondaryContact: string;
      email: string;
      defaultShippingFee: any;
      homepageUrl: string;
      defaultShippingCarrier: Cafe24Enum;
      shippingFeeSetting: Cafe24Enum;
      shippingFeeSettingDetail: {
        shippingType: Cafe24Enum;
        availableShippingZone: string;
        minShippingPeriod: number;
        maxShippingPeriod: number;
        shippingInformation: string;
        shippingFeeSettingDomestic: {
          shippingFeeType: Cafe24Enum;
          shippingFee: any;
          minPrice: any;
          useProductCategory: Cafe24Enum;
          productCategoryList: {
            categoryNo: number;
            categoryName: string;
          }[];
          shippingFeeCriteria: Cafe24Enum;
          domesticShippingFeeList: {
            countryCode: string;
            conditional: Cafe24Enum;
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          availableShippingZone: any;
          availableShippingZoneList: any;
          availableOrderTime: any;
          startTime: any;
          endTime: any;
        };
        shippingFeeSettingOversea: {
          shippingFeeCriteria: any;
          shippingCountryList: {
            countryCode: string;
            countryName: string;
          }[];
          countryShippingFeeList: {
            countryCode: string;
            countryName: string;
            conditional: string;
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          additionalHandlingFee: Cafe24Enum;
          additionalHandlingFeeList: {
            countryCode: string;
            countryName: string;
            text: string;
            minValue: string;
            maxValue: Cafe24Datetime;
            additionalHandlingFee: Cafe24Datetime;
            unit: string;
            roundingUnit: any;
            roundingRule: any;
          }[];
          maximumQuantity: any;
          productCategoryLimit: any;
          productCategoryLimitList: any;
        };
      };
      expressExceptionSetting: {
        weight: Cafe24Datetime;
        volume: Cafe24Datetime;
        shippingType: any;
        boxType: any;
        senderName: string;
        senderCellphone: string;
        senderPhone: any;
        senderZipcode: any;
        senderAddress1: any;
        senderAddress2: any;
      };
    };
  }
  export interface CreateAShippingCarrierInput {
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
     * 배송사 코드
     *
     * shipping_company_code
     *
     * @required
     */
    shippingCarrierCode: any;
    /**
     * @description
     * 대표 연락처
     *
     * @required
     *
     * 최대글자수 : [16자]
     */
    contact: any;
    /**
     * @description
     * 이메일
     *
     * @required
     *
     * 이메일
     * 최대글자수 : [255자]
     */
    email: any;
    /**
     * @description
     * 배송사 명
     *
     * 최대글자수 : [80자]
     */
    shippingCarrier?: any;
    /**
     * @description
     * 배송추적 URL
     *
     * 최대글자수 : [255자]
     */
    trackShipmentUrl?: any;
    /**
     * @description
     * 보조 연락처
     *
     * 최대글자수 : [16자]
     */
    secondaryContact?: any;
    /**
     * @description
     * 기본 배송비
     *
     *
     */
    defaultShippingFee?: any;
    /**
     * @description
     * 홈페이지 주소
     *
     * 최대글자수 : [255자]
     */
    homepageUrl?: any;
    /**
     * @description
     * 배송비 설정 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    shippingFeeSetting?: any;
    /**
     * @description
     * 배송비 설정 데이터
     *
     * ※shipping_fee_setting_detail의 하위요소에 대한 값 정의
     *
     * 1)shipping_fee_setting_domestic &gt; shipping_fee_type
     *
     * shipping_fee_type(배송비 설정)
     * T : 배송비 무료
     * R : 고정배송비 사용
     * M : 구매 금액에 따른 부과
     * D : 구매 금액별 차등 배송료 사용
     * W : 상품 무게별 차등 배송료 사용
     * C : 상품 수량별 차등 배송료 사용
     * N : 상품 수량에 비례하여 배송료 부과
     *
     * 2)shipping_fee_setting_domestic &gt; shipping_fee_criteria
     *
     * shipping_fee_criteria(배송비 청구 기준 주문금액 조건 설정)
     * D : 할인전, 정상판매가격 기준(권장)
     * A : 할인 적용 후 결제 금액 기준
     *
     * 3)shipping_fee_setting_oversea &gt; additional_handling_fee_list &gt; unit
     *
     * unit(해외배송 부가금액 단위)
     * W : 정액
     * P : 퍼센트
     *
     * 4)shipping_fee_setting_oversea &gt; additional_handling_fee_list &gt; rounding_unit
     *
     * rounding_unit(해외배송 부가금액 절사단위)
     * F : 절사안함
     * 0 : 1단위
     * 1 : 10단위
     * 2 : 100단위
     * 3 : 1000단위
     *
     * 5)shipping_fee_setting_oversea &gt; additional_handling_fee_list &gt; rounding_rule
     *
     * rounding_rule(해외배송 부가금액 절사방식)
     * L : 내림
     * U : 반올림
     * C : 올림
     *
     *
     */
    shippingFeeSettingDetail?: {
      /**
       * @description
       * 국내/해외배송 설정
       * A : 국내
       * B : 국내/해외
       * C : 해외
       * @default B
       *
       *
       */
      shippingType?: any;
      /**
       * @description
       * 배송가능 지역
       *
       *
       */
      availableShippingZone?: any;
      /**
       * @description
       * 배송가능 최소일
       *
       *
       */
      minShippingPeriod?: any;
      /**
       * @description
       * 배송가능 최대일
       *
       *
       */
      maxShippingPeriod?: any;
      /**
       * @description
       * 주문서 배송안내
       *
       *
       */
      shippingInformation?: any;
      shippingFeeSettingDomestic?: any[];
      shippingFeeSettingOversea?: any[];
    };
  }

  export interface CreateAShippingCarrierOutput {
    carrier: {
      shopNo: number;
      shippingCarrierCode: Cafe24Datetime;
      shippingCarrier: string;
      carrierId: number;
      contact: string;
      secondaryContact: string;
      email: string;
      defaultShippingFee: any;
      homepageUrl: string;
      trackShipmentUrl: any;
      shippingFeeSetting: Cafe24Enum;
      shippingFeeSettingDetail: {
        shippingType: Cafe24Enum;
        availableShippingZone: string;
        minShippingPeriod: number;
        maxShippingPeriod: number;
        shippingInformation: string;
        shippingFeeSettingDomestic: {
          shippingFeeType: Cafe24Enum;
          shippingFee: any;
          minPrice: any;
          useProductCategory: Cafe24Enum;
          productCategoryList: {
            categoryNo: number;
          }[];
          shippingFeeCriteria: Cafe24Enum;
          domesticShippingFeeList: {
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          availableShippingZone: any;
          availableShippingZoneList: any;
          availableOrderTime: any;
          startTime: any;
          endTime: any;
        };
        shippingFeeSettingOversea: {
          shippingFeeCriteria: any;
          shippingCountryList: {
            countryCode: string;
          }[];
          countryShippingFeeList: {
            countryCode: string;
            conditional: string;
            minValue: string;
            maxValue: Cafe24Datetime;
            shippingFee: Cafe24Datetime;
          }[];
          additionalHandlingFee: Cafe24Enum;
          additionalHandlingFeeList: {
            countryCode: string;
            text: string;
            minValue: string;
            maxValue: Cafe24Datetime;
            additionalHandlingFee: Cafe24Datetime;
            unit: Cafe24Enum;
            roundingUnit: any;
            roundingRule: any;
          }[];
          maximumQuantity: any;
          productCategoryLimit: any;
          productCategoryLimitList: any;
        };
      };
      links: {
        rel: string;
        href: string;
      }[];
    };
  }
  export interface UpdateAShippingCarrierInput {
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
     * 배송사 아이디
     *
     * @required
     */
    carrierId: any;
    /**
     * @description
     * 기본배송사 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    defaultShippingCarrier?: any;
  }

  export interface UpdateAShippingCarrierOutput {
    carrier: {
      shopNo: number;
      carrierId: number;
      defaultShippingCarrier: Cafe24Enum;
      links: {
        rel: string;
        href: string;
      }[];
    };
  }
  export interface DeleteAShippingCarrierInput {
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
     * 배송사 아이디
     *
     * @required
     */
    carrierId: any;
    /**
     * @description
     * 기본배송사 삭제 여부
     *
     * T : 삭제함
     * F : 삭제안함
     *
     * @default F
     *
     *
     */
    deleteDefaultCarrier?: any;
  }

  export interface DeleteAShippingCarrierOutput {
    carrier: {
      shopNo: number;
      carrierId: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 생성된 배송사를 목록으로 조회할 수 있습니다.
     * 배송사명, 배송사 코드, 배송비 설정 데이터 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-shipping-carriers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carriers": [
     *         {
     *             "shop_no": 1,
     *             "carrier_id": 3,
     *             "shipping_carrier_code": "0022",
     *             "shipping_carrier": "FASTBOX",
     *             "track_shipment_url": null,
     *             "shipping_type": "B",
     *             "contact": "02-0000-0000",
     *             "secondary_contact": "02-0000-0000",
     *             "email": "sample@sample.com",
     *             "default_shipping_fee": null,
     *             "homepage_url": "sample.sample.com",
     *             "default_shipping_carrier": "F",
     *             "shipping_fee_setting": "T",
     *             "shipping_fee_setting_detail": {
     *                 "shipping_type": "B",
     *                 "available_shipping_zone": "Sample place",
     *                 "min_shipping_period": 3,
     *                 "max_shipping_period": 7,
     *                 "shipping_information": "Sample text",
     *                 "shipping_fee_setting_domestic": {
     *                     "shipping_fee_type": "D",
     *                     "shipping_fee": null,
     *                     "min_price": null,
     *                     "use_product_category": "O",
     *                     "product_category_list": [
     *                         {
     *                             "category_no": 29,
     *                             "category_name": "Sample Category1"
     *                         },
     *                         {
     *                             "category_no": 30,
     *                             "category_name": "Sample Category2"
     *                         }
     *                     ],
     *                     "shipping_fee_criteria": "D",
     *                     "domestic_shipping_fee_list": [
     *                         {
     *                             "country_code": "KR",
     *                             "conditional": "D",
     *                             "min_value": "0.00",
     *                             "max_value": "10000.00",
     *                             "shipping_fee": "2500.00"
     *                         },
     *                         {
     *                             "country_code": "KR",
     *                             "conditional": "D",
     *                             "min_value": "10000.00",
     *                             "max_value": "20000.00",
     *                             "shipping_fee": "2500.00"
     *                         }
     *                     ],
     *                     "available_shipping_zone": null,
     *                     "available_shipping_zone_list": null,
     *                     "available_order_time": null,
     *                     "start_time": null,
     *                     "end_time": null
     *                 },
     *                 "shipping_fee_setting_oversea": {
     *                     "shipping_fee_criteria": null,
     *                     "shipping_country_list": [
     *                         {
     *                             "country_code": "KR",
     *                             "country_name": "KOREA(KOREA)"
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)"
     *                         }
     *                     ],
     *                     "country_shipping_fee_list": [
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "conditional": "D",
     *                             "min_value": "0.00",
     *                             "max_value": "50000.00",
     *                             "shipping_fee": "5000.00"
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "conditional": "D",
     *                             "min_value": "50000.00",
     *                             "max_value": "100000.00",
     *                             "shipping_fee": "2500.00"
     *                         }
     *                     ],
     *                     "additional_handling_fee": "T",
     *                     "additional_handling_fee_list": [
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "text": "Sample text",
     *                             "min_value": "0.00",
     *                             "max_value": "50000.00",
     *                             "additional_handling_fee": "5000.00",
     *                             "unit": "KRW",
     *                             "rounding_unit": null,
     *                             "rounding_rule": null
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "text": "Sample text",
     *                             "min_value": "50000.00",
     *                             "max_value": "100000.00",
     *                             "additional_handling_fee": "2500.00",
     *                             "unit": "KRW",
     *                             "rounding_unit": null,
     *                             "rounding_rule": null
     *                         }
     *                     ]
     *                 }
     *             },
     *             "express_exception_setting": {
     *                 "weight": "10000",
     *                 "volume": "120",
     *                 "shipping_type": null,
     *                 "box_type": null,
     *                 "sender_name": "SimplexInternet",
     *                 "sender_cellphone": "010-0000-0000",
     *                 "sender_phone": null,
     *                 "sender_zipcode": null,
     *                 "sender_address1": null,
     *                 "sender_address2": null
     *             }
     *         },
     *         {
     *             "shop_no": 1,
     *             "carrier_id": 4,
     *             "shipping_carrier_code": "0006",
     *             "shipping_carrier": "FASTBOX",
     *             "track_shipment_url": null,
     *             "shipping_type": "B",
     *             "contact": "02-0000-0000",
     *             "secondary_contact": "02-0000-0000",
     *             "email": "sample@sample.com",
     *             "default_shipping_fee": null,
     *             "homepage_url": "sample.sample.com",
     *             "default_shipping_carrier": "F",
     *             "shipping_fee_setting": "T",
     *             "shipping_fee_setting_detail": {
     *                 "shipping_type": "B",
     *                 "available_shipping_zone": "Sample place",
     *                 "min_shipping_period": 3,
     *                 "max_shipping_period": 7,
     *                 "shipping_information": "Sample text",
     *                 "shipping_fee_setting_domestic": {
     *                     "shipping_fee_type": "D",
     *                     "shipping_fee": null,
     *                     "min_price": null,
     *                     "use_product_category": "O",
     *                     "product_category_list": [
     *                         {
     *                             "category_no": 29,
     *                             "category_name": "Sample Category1"
     *                         },
     *                         {
     *                             "category_no": 30,
     *                             "category_name": "Sample Category2"
     *                         }
     *                     ],
     *                     "shipping_fee_criteria": "D",
     *                     "domestic_shipping_fee_list": [
     *                         {
     *                             "country_code": "KR",
     *                             "conditional": "D",
     *                             "min_value": "0.00",
     *                             "max_value": "10000.00",
     *                             "shipping_fee": "2500.00"
     *                         },
     *                         {
     *                             "country_code": "KR",
     *                             "conditional": "D",
     *                             "min_value": "10000.00",
     *                             "max_value": "20000.00",
     *                             "shipping_fee": "2500.00"
     *                         }
     *                     ],
     *                     "available_shipping_zone": null,
     *                     "available_shipping_zone_list": null,
     *                     "available_order_time": null,
     *                     "start_time": null,
     *                     "end_time": null
     *                 },
     *                 "shipping_fee_setting_oversea": {
     *                     "shipping_fee_criteria": null,
     *                     "shipping_country_list": [
     *                         {
     *                             "country_code": "KR",
     *                             "country_name": "KOREA(KOREA)"
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)"
     *                         }
     *                     ],
     *                     "country_shipping_fee_list": [
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "conditional": "D",
     *                             "min_value": "0.00",
     *                             "max_value": "50000.00",
     *                             "shipping_fee": "5000.00"
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "conditional": "D",
     *                             "min_value": "50000.00",
     *                             "max_value": "100000.00",
     *                             "shipping_fee": "2500.00"
     *                         }
     *                     ],
     *                     "additional_handling_fee": "T",
     *                     "additional_handling_fee_list": [
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "text": "Sample text",
     *                             "min_value": "0.00",
     *                             "max_value": "50000.00",
     *                             "additional_handling_fee": "5000.00",
     *                             "unit": "KRW",
     *                             "rounding_unit": null,
     *                             "rounding_rule": null
     *                         },
     *                         {
     *                             "country_code": "PH",
     *                             "country_name": "PHILIPPINES(PHILIPPINES)",
     *                             "text": "Sample text",
     *                             "min_value": "50000.00",
     *                             "max_value": "100000.00",
     *                             "additional_handling_fee": "2500.00",
     *                             "unit": "KRW",
     *                             "rounding_unit": null,
     *                             "rounding_rule": null
     *                         }
     *                     ]
     *                 }
     *             },
     *             "express_exception_setting": {
     *                 "weight": "10000",
     *                 "volume": "120",
     *                 "shipping_type": null,
     *                 "box_type": null,
     *                 "sender_name": "SimplexInternet",
     *                 "sender_cellphone": "010-0000-0000",
     *                 "sender_phone": null,
     *                 "sender_zipcode": null,
     *                 "sender_address1": null,
     *                 "sender_address2": null
     *             }
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfShippingCarriers(
      input: RetrieveAListOfShippingCarriersInput,
      options?: RequestOptions<
        RetrieveAListOfShippingCarriersOutput['carriers'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfShippingCarriersOutput>>;
    /**
     * @description
     * 특정 배송사 하나를 선택하여 상세조회할 수 있습니다.
     * 배송사명, 배송사 코드, 배송비 설정 데이터 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-shipping-carrier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carrier": {
     *         "shop_no": 1,
     *         "carrier_id": 4,
     *         "shipping_carrier_code": "0022",
     *         "shipping_carrier": "FASTBOX",
     *         "track_shipment_url": null,
     *         "contact": "02-0000-0000",
     *         "secondary_contact": "02-0000-0000",
     *         "email": "sample@sample.com",
     *         "default_shipping_fee": null,
     *         "homepage_url": "sample.sample.com",
     *         "default_shipping_carrier": "F",
     *         "shipping_fee_setting": "T",
     *         "shipping_fee_setting_detail": {
     *             "shipping_type": "B",
     *             "available_shipping_zone": "Sample place",
     *             "min_shipping_period": 3,
     *             "max_shipping_period": 7,
     *             "shipping_information": "Sample text",
     *             "shipping_fee_setting_domestic": {
     *                 "shipping_fee_type": "D",
     *                 "shipping_fee": null,
     *                 "min_price": null,
     *                 "use_product_category": "O",
     *                 "product_category_list": [
     *                     {
     *                         "category_no": 29,
     *                         "category_name": "Sample Category1"
     *                     },
     *                     {
     *                         "category_no": 30,
     *                         "category_name": "Sample Category2"
     *                     }
     *                 ],
     *                 "shipping_fee_criteria": "D",
     *                 "domestic_shipping_fee_list": [
     *                     {
     *                         "country_code": "KR",
     *                         "conditional": "D",
     *                         "min_value": "0.00",
     *                         "max_value": "10000.00",
     *                         "shipping_fee": "2500.00"
     *                     },
     *                     {
     *                         "country_code": "KR",
     *                         "conditional": "D",
     *                         "min_value": "10000.00",
     *                         "max_value": "20000.00",
     *                         "shipping_fee": "2500.00"
     *                     }
     *                 ],
     *                 "available_shipping_zone": null,
     *                 "available_shipping_zone_list": null,
     *                 "available_order_time": null,
     *                 "start_time": null,
     *                 "end_time": null
     *             },
     *             "shipping_fee_setting_oversea": {
     *                 "shipping_fee_criteria": null,
     *                 "shipping_country_list": [
     *                     {
     *                         "country_code": "KR",
     *                         "country_name": "KOREA(KOREA)"
     *                     },
     *                     {
     *                         "country_code": "PH",
     *                         "country_name": "PHILIPPINES(PHILIPPINES)"
     *                     }
     *                 ],
     *                 "country_shipping_fee_list": [
     *                     {
     *                         "country_code": "PH",
     *                         "country_name": "PHILIPPINES(PHILIPPINES)",
     *                         "conditional": "price",
     *                         "min_value": "0.00",
     *                         "max_value": "50000.00",
     *                         "shipping_fee": "5000.00"
     *                     },
     *                     {
     *                         "country_code": "PH",
     *                         "country_name": "PHILIPPINES(PHILIPPINES)",
     *                         "conditional": "price",
     *                         "min_value": "50000.00",
     *                         "max_value": "100000.00",
     *                         "shipping_fee": "2500.00"
     *                     }
     *                 ],
     *                 "additional_handling_fee": "T",
     *                 "additional_handling_fee_list": [
     *                     {
     *                         "country_code": "PH",
     *                         "country_name": "PHILIPPINES(PHILIPPINES)",
     *                         "text": "Sample text",
     *                         "min_value": "0.00",
     *                         "max_value": "50000.00",
     *                         "additional_handling_fee": "5000.00",
     *                         "unit": "KRW",
     *                         "rounding_unit": null,
     *                         "rounding_rule": null
     *                     },
     *                     {
     *                         "country_code": "PH",
     *                         "country_name": "PHILIPPINES(PHILIPPINES)",
     *                         "text": "Sample text",
     *                         "min_value": "50000.00",
     *                         "max_value": "100000.00",
     *                         "additional_handling_fee": "2500.00",
     *                         "unit": "KRW",
     *                         "rounding_unit": null,
     *                         "rounding_rule": null
     *                     }
     *                 ],
     *                 "maximum_quantity": null,
     *                 "product_category_limit": null,
     *                 "product_category_limit_list": null
     *             }
     *         },
     *         "express_exception_setting": {
     *             "weight": "10000",
     *             "volume": "120",
     *             "shipping_type": null,
     *             "box_type": null,
     *             "sender_name": "SimplexInternet",
     *             "sender_cellphone": "010-0000-0000",
     *             "sender_phone": null,
     *             "sender_zipcode": null,
     *             "sender_address1": null,
     *             "sender_address2": null
     *         }
     *     }
     * }
     * ```
     */
    retrieveAShippingCarrier(
      input: RetrieveAShippingCarrierInput,
      options?: RequestOptions<RetrieveAShippingCarrierOutput['carrier']>,
    ): Promise<AxiosResponse<RetrieveAShippingCarrierOutput>>;
    /**
     * @description
     * 배송사를 생성할 수 있습니다.
     * 배송사를 생성하면서 배송사별로 배송비 설정도 진행할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-shipping-carrier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carrier": {
     *         "shop_no": 1,
     *         "shipping_carrier_code": "0022",
     *         "shipping_carrier": "FASTBOX",
     *         "carrier_id": 4,
     *         "contact": "02-0000-0000",
     *         "secondary_contact": "02-0000-0000",
     *         "email": "sample@sample.com",
     *         "default_shipping_fee": null,
     *         "homepage_url": "sample.sample.com",
     *         "track_shipment_url": null,
     *         "shipping_fee_setting": "T",
     *         "shipping_fee_setting_detail": {
     *             "shipping_type": "B",
     *             "available_shipping_zone": "Sample place",
     *             "min_shipping_period": 3,
     *             "max_shipping_period": 7,
     *             "shipping_information": "Sample text",
     *             "shipping_fee_setting_domestic": {
     *                 "shipping_fee_type": "D",
     *                 "shipping_fee": null,
     *                 "min_price": null,
     *                 "use_product_category": "O",
     *                 "product_category_list": [
     *                     {
     *                         "category_no": 29
     *                     },
     *                     {
     *                         "category_no": 30
     *                     }
     *                 ],
     *                 "shipping_fee_criteria": "D",
     *                 "domestic_shipping_fee_list": [
     *                     {
     *                         "min_value": "0.00",
     *                         "max_value": "10000.00",
     *                         "shipping_fee": "2500.00"
     *                     },
     *                     {
     *                         "min_value": "10000.00",
     *                         "max_value": "20000.00",
     *                         "shipping_fee": "2500.00"
     *                     }
     *                 ],
     *                 "available_shipping_zone": null,
     *                 "available_shipping_zone_list": null,
     *                 "available_order_time": null,
     *                 "start_time": null,
     *                 "end_time": null
     *             },
     *             "shipping_fee_setting_oversea": {
     *                 "shipping_fee_criteria": null,
     *                 "shipping_country_list": [
     *                     {
     *                         "country_code": "KR"
     *                     },
     *                     {
     *                         "country_code": "PH"
     *                     }
     *                 ],
     *                 "country_shipping_fee_list": [
     *                     {
     *                         "country_code": "PH",
     *                         "conditional": "price",
     *                         "min_value": "0.00",
     *                         "max_value": "50000.00",
     *                         "shipping_fee": "5000.00"
     *                     },
     *                     {
     *                         "country_code": "PH",
     *                         "conditional": "price",
     *                         "min_value": "50000.00",
     *                         "max_value": "100000.00",
     *                         "shipping_fee": "2500.00"
     *                     }
     *                 ],
     *                 "additional_handling_fee": "T",
     *                 "additional_handling_fee_list": [
     *                     {
     *                         "country_code": "PH",
     *                         "text": "Sample text",
     *                         "min_value": "0.00",
     *                         "max_value": "50000.00",
     *                         "additional_handling_fee": "5000.00",
     *                         "unit": "W",
     *                         "rounding_unit": null,
     *                         "rounding_rule": null
     *                     },
     *                     {
     *                         "country_code": "PH",
     *                         "text": "Sample text",
     *                         "min_value": "50000.00",
     *                         "max_value": "100000.00",
     *                         "additional_handling_fee": "2500.00",
     *                         "unit": "W",
     *                         "rounding_unit": null,
     *                         "rounding_rule": null
     *                     }
     *                 ],
     *                 "maximum_quantity": null,
     *                 "product_category_limit": null,
     *                 "product_category_limit_list": null
     *             }
     *         },
     *         "links": [
     *             {
     *                 "rel": "self",
     *                 "href": "https://{mallid}.cafe24api.com/api/v2/admin/carriers/4"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAShippingCarrier(
      input: CreateAShippingCarrierInput,
      options?: RequestOptions<CreateAShippingCarrierOutput['carrier']>,
    ): Promise<AxiosResponse<CreateAShippingCarrierOutput>>;
    /**
     * @description
     * 특정 배송사를 수정할 수 있습니다.
     * 기본배송사 여부 설정값을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-shipping-carrier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carrier": {
     *         "shop_no": 1,
     *         "carrier_id": 4,
     *         "default_shipping_carrier": "T",
     *         "links": [
     *             {
     *                 "rel": "self",
     *                 "href": "https://{mallid}.cafe24api.com/api/v2/admin/carriers/4"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateAShippingCarrier(
      input: UpdateAShippingCarrierInput,
      options?: RequestOptions<UpdateAShippingCarrierOutput['carrier']>,
    ): Promise<AxiosResponse<UpdateAShippingCarrierOutput>>;
    /**
     * @description
     * 특정 배송사를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-shipping-carrier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carrier": {
     *         "shop_no": 1,
     *         "carrier_id": 4
     *     }
     * }
     * ```
     */
    deleteAShippingCarrier(
      input: DeleteAShippingCarrierInput,
      options?: RequestOptions<DeleteAShippingCarrierOutput['carrier']>,
    ): Promise<AxiosResponse<DeleteAShippingCarrierOutput>>;
  }
}
