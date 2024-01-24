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
    shop_no: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrier_id: any;
    /**
     * @description
     * 배송사 코드
     *
     * shipping_company_code
     *
     *
     */
    shipping_carrier_code: any;
    /**
     * @description
     * 배송사 명
     *
     *
     */
    shipping_carrier: any;
    /**
     * @description
     * 배송추적 URL
     *
     *
     */
    track_shipment_url: any;
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
    shipping_type: any;
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
    secondary_contact: any;
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
    default_shipping_fee: any;
    /**
     * @description
     * 홈페이지 주소
     *
     *
     */
    homepage_url: any;
    /**
     * @description
     * 기본배송사 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    default_shipping_carrier: any;
    /**
     * @description
     * 배송비 설정 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    shipping_fee_setting: any;
    /**
     * @description
     * 배송비 설정 데이터
     *
     *
     */
    shipping_fee_setting_detail: any;
    /**
     * @description
     * 연동택배 예외정보 설정
     *
     *
     */
    express_exception_setting: any;
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
    shop_no?: any;
  }

  export interface RetrieveAListOfShippingCarriersOutput {
    carriers: {
      shop_no: number;
      carrier_id: number;
      shipping_carrier_code: Cafe24Datetime;
      shipping_carrier: string;
      track_shipment_url: any;
      shipping_type: Cafe24Enum;
      contact: string;
      secondary_contact: string;
      email: string;
      default_shipping_fee: any;
      homepage_url: string;
      default_shipping_carrier: Cafe24Enum;
      shipping_fee_setting: Cafe24Enum;
      shipping_fee_setting_detail: {
        shipping_type: Cafe24Enum;
        available_shipping_zone: string;
        min_shipping_period: number;
        max_shipping_period: number;
        shipping_information: string;
        shipping_fee_setting_domestic: {
          shipping_fee_type: Cafe24Enum;
          shipping_fee: any;
          min_price: any;
          use_product_category: Cafe24Enum;
          product_category_list: {
            category_no: number;
            category_name: string;
          }[];
          shipping_fee_criteria: Cafe24Enum;
          domestic_shipping_fee_list: {
            country_code: string;
            conditional: Cafe24Enum;
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          available_shipping_zone: any;
          available_shipping_zone_list: any;
          available_order_time: any;
          start_time: any;
          end_time: any;
        };
        shipping_fee_setting_oversea: {
          shipping_fee_criteria: any;
          shipping_country_list: {
            country_code: string;
            country_name: string;
          }[];
          country_shipping_fee_list: {
            country_code: string;
            country_name: string;
            conditional: Cafe24Enum;
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          additional_handling_fee: Cafe24Enum;
          additional_handling_fee_list: {
            country_code: string;
            country_name: string;
            text: string;
            min_value: string;
            max_value: Cafe24Datetime;
            additional_handling_fee: Cafe24Datetime;
            unit: string;
            rounding_unit: any;
            rounding_rule: any;
          }[];
        };
      };
      express_exception_setting: {
        weight: Cafe24Datetime;
        volume: Cafe24Datetime;
        shipping_type: any;
        box_type: any;
        sender_name: string;
        sender_cellphone: string;
        sender_phone: any;
        sender_zipcode: any;
        sender_address1: any;
        sender_address2: any;
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
    shop_no?: any;
    /**
     * @description
     * 배송업체 아이디
     *
     * @required
     */
    carrier_id: any;
  }

  export interface RetrieveAShippingCarrierOutput {
    carrier: {
      shop_no: number;
      carrier_id: number;
      shipping_carrier_code: Cafe24Datetime;
      shipping_carrier: string;
      track_shipment_url: any;
      contact: string;
      secondary_contact: string;
      email: string;
      default_shipping_fee: any;
      homepage_url: string;
      default_shipping_carrier: Cafe24Enum;
      shipping_fee_setting: Cafe24Enum;
      shipping_fee_setting_detail: {
        shipping_type: Cafe24Enum;
        available_shipping_zone: string;
        min_shipping_period: number;
        max_shipping_period: number;
        shipping_information: string;
        shipping_fee_setting_domestic: {
          shipping_fee_type: Cafe24Enum;
          shipping_fee: any;
          min_price: any;
          use_product_category: Cafe24Enum;
          product_category_list: {
            category_no: number;
            category_name: string;
          }[];
          shipping_fee_criteria: Cafe24Enum;
          domestic_shipping_fee_list: {
            country_code: string;
            conditional: Cafe24Enum;
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          available_shipping_zone: any;
          available_shipping_zone_list: any;
          available_order_time: any;
          start_time: any;
          end_time: any;
        };
        shipping_fee_setting_oversea: {
          shipping_fee_criteria: any;
          shipping_country_list: {
            country_code: string;
            country_name: string;
          }[];
          country_shipping_fee_list: {
            country_code: string;
            country_name: string;
            conditional: string;
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          additional_handling_fee: Cafe24Enum;
          additional_handling_fee_list: {
            country_code: string;
            country_name: string;
            text: string;
            min_value: string;
            max_value: Cafe24Datetime;
            additional_handling_fee: Cafe24Datetime;
            unit: string;
            rounding_unit: any;
            rounding_rule: any;
          }[];
          maximum_quantity: any;
          product_category_limit: any;
          product_category_limit_list: any;
        };
      };
      express_exception_setting: {
        weight: Cafe24Datetime;
        volume: Cafe24Datetime;
        shipping_type: any;
        box_type: any;
        sender_name: string;
        sender_cellphone: string;
        sender_phone: any;
        sender_zipcode: any;
        sender_address1: any;
        sender_address2: any;
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
    shop_no?: any;
    /**
     * @description
     * 배송사 코드
     *
     * shipping_company_code
     *
     * @required
     */
    shipping_carrier_code: any;
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
    shipping_carrier?: any;
    /**
     * @description
     * 배송추적 URL
     *
     * 최대글자수 : [255자]
     */
    track_shipment_url?: any;
    /**
     * @description
     * 보조 연락처
     *
     * 최대글자수 : [16자]
     */
    secondary_contact?: any;
    /**
     * @description
     * 기본 배송비
     *
     *
     */
    default_shipping_fee?: any;
    /**
     * @description
     * 홈페이지 주소
     *
     * 최대글자수 : [255자]
     */
    homepage_url?: any;
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
    shipping_fee_setting?: any;
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
    shipping_fee_setting_detail?: {
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
      shipping_type?: any;
      /**
       * @description
       * 배송가능 지역
       *
       *
       */
      available_shipping_zone?: any;
      /**
       * @description
       * 배송가능 최소일
       *
       *
       */
      min_shipping_period?: any;
      /**
       * @description
       * 배송가능 최대일
       *
       *
       */
      max_shipping_period?: any;
      /**
       * @description
       * 주문서 배송안내
       *
       *
       */
      shipping_information?: any;
      shipping_fee_setting_domestic?: any[];
      shipping_fee_setting_oversea?: any[];
    };
  }

  export interface CreateAShippingCarrierOutput {
    carrier: {
      shop_no: number;
      shipping_carrier_code: Cafe24Datetime;
      shipping_carrier: string;
      carrier_id: number;
      contact: string;
      secondary_contact: string;
      email: string;
      default_shipping_fee: any;
      homepage_url: string;
      track_shipment_url: any;
      shipping_fee_setting: Cafe24Enum;
      shipping_fee_setting_detail: {
        shipping_type: Cafe24Enum;
        available_shipping_zone: string;
        min_shipping_period: number;
        max_shipping_period: number;
        shipping_information: string;
        shipping_fee_setting_domestic: {
          shipping_fee_type: Cafe24Enum;
          shipping_fee: any;
          min_price: any;
          use_product_category: Cafe24Enum;
          product_category_list: {
            category_no: number;
          }[];
          shipping_fee_criteria: Cafe24Enum;
          domestic_shipping_fee_list: {
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          available_shipping_zone: any;
          available_shipping_zone_list: any;
          available_order_time: any;
          start_time: any;
          end_time: any;
        };
        shipping_fee_setting_oversea: {
          shipping_fee_criteria: any;
          shipping_country_list: {
            country_code: string;
          }[];
          country_shipping_fee_list: {
            country_code: string;
            conditional: string;
            min_value: string;
            max_value: Cafe24Datetime;
            shipping_fee: Cafe24Datetime;
          }[];
          additional_handling_fee: Cafe24Enum;
          additional_handling_fee_list: {
            country_code: string;
            text: string;
            min_value: string;
            max_value: Cafe24Datetime;
            additional_handling_fee: Cafe24Datetime;
            unit: Cafe24Enum;
            rounding_unit: any;
            rounding_rule: any;
          }[];
          maximum_quantity: any;
          product_category_limit: any;
          product_category_limit_list: any;
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
    shop_no?: any;
    /**
     * @description
     * 배송사 아이디
     *
     * @required
     */
    carrier_id: any;
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
    default_shipping_carrier?: any;
  }

  export interface UpdateAShippingCarrierOutput {
    carrier: {
      shop_no: number;
      carrier_id: number;
      default_shipping_carrier: Cafe24Enum;
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
    shop_no?: any;
    /**
     * @description
     * 배송사 아이디
     *
     * @required
     */
    carrier_id: any;
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
    delete_default_carrier?: any;
  }

  export interface DeleteAShippingCarrierOutput {
    carrier: {
      shop_no: number;
      carrier_id: number;
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
