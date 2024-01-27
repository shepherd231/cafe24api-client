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
   * 
   * 
   * 회원등급(CustomerGroups)은 쇼핑몰 회원을 등급별로 검색하여 관리할 수 있습니다.
   * 각 회원 등급 전체에게 메일, 적립금 지급, 선택한 회원의 등급 해제 및 변경을 할 수 있습니다.
   */
  export interface Customergroups {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 회원등급번호
      * 
      * 
      */ 
    group_no: any;
    /**
      * @description
      * 회원등급명
      * 
      * 
      */ 
    group_name: any;
    /**
      * @description
      * 회원 등급설명
      * 
      * 
      */ 
    group_description: any;
    /**
      * @description
      * 회원등급 아이콘
      * 
      * 
      */ 
    group_icon: any;
    /**
      * @description
      * 혜택 결제조건
      * 
      * A : 모든 결제
      * B : 현금 결제(무통장)
      * C : 현금 결제 외 모든 결제
      * 
      * 
      */ 
    benefits_paymethod: any;
    /**
      * @description
      * 구매시 할인/적립 혜택
      * 
      * F : 혜택없음
      * D : 구매금액 할인
      * M : 적립금 지급
      * P : 할인/적립 동시 적용
      * 
      * 
      */ 
    buy_benefits: any;
    /**
      * @description
      * 배송비 혜택
      * 
      * T : 배송비무료설정
      * F : 배송비무료설정안함
      * 
      * 
      */ 
    ship_benefits: any;
    /**
      * @description
      * 상품별 할인 중복설정
      * 
      * P : 상품별 가격할인만 적용
      * M : 회원등급별 가격할인만 적용
      * A : 둘다적용
      * 
      * 
      */ 
    product_availability: any;
    /**
      * @description
      * 구매금액 할인설정
      * 
      * 
      */ 
    discount_information: any;
    /**
      * @description
      * 적립금 지급설정
      * 
      * 
      */ 
    points_information: any;
    /**
      * @description
      * 모바일 추가 할인설정
      * 
      * 
      */ 
    mobile_discount_information: any;
    /**
      * @description
      * 모바일 추가 적립금설정
      * 
      * 
      */ 
    mobile_points_information: any;
    /**
      * @description
      * 할인 제한설정
      * 
      * 멀티쇼핑몰에서 등급별 할인 혜택 제한 사용 시 등급 별로 적용되는 할인 혜택 제한 설정 및 최대 할인 한도 정보.
      * 
      * 멀티쇼핑몰에서 등급별 할인 혜택 제한을 사용하지 않거나,
      * buy_benefits(구매 시 할인/적립 혜택)이 F(혜택없음) 또는 M(적립금 지급)일 경우 null로 반환
      * 
      * discount_limit_type(할인 혜택 제한 설정)
      * - A : 제한없음
      * - B : 할인금액 제한
      * - C : 할인횟수 제한
      * discount_amount_limit(최대 할인금액 한도) : discount_limit_type이 B가 아닐 경우 null
      * number_of_discount_limit(최대 할인횟수 한도) : discount_limit_type이 C가 아닐 경우 null로 반환.
      * 
      * 
      */ 
    discount_limit_information: any;
  }

  export interface RetrieveAListOfCustomerTiersInput {
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
      * 회원등급번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    group_no?: any;
    /**
      * @description
      * 회원등급명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 최대글자수 : [20자]
      */ 
    group_name?: any;
  }

  export interface RetrieveAListOfCustomerTiersOutput {
    customergroups: { 
    shop_no: number;
    group_no: number;
    group_name: string;
    group_description: string;
    group_icon: string;
    benefits_paymethod: Cafe24Enum;
    buy_benefits: Cafe24Enum;
    ship_benefits: Cafe24Enum;
    product_availability: Cafe24Enum;
    discount_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    points_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    mobile_discount_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    mobile_points_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    discount_limit_information: { 
    discount_limit_type: Cafe24Enum;
    discount_amount_limit: Cafe24Datetime;
    number_of_discount_limit: any;
    };
    }[];
  }
  export interface RetrieveACountOfCustomerTiersInput {
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
    /**
      * @description
      * 회원등급번호
      * 
      * 시스템이 회원등급에 부여한 번호.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    group_no?: any;
    /**
      * @description
      * 회원등급명
      * 
      * 회원등급을 만들 당시 지정한 회원등급의 이름.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 최대글자수 : [20자]
      */ 
    group_name?: any;
  }

  export interface RetrieveACountOfCustomerTiersOutput {
    count: number;
  }
  export interface RetrieveACustomerTierInput {
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
    /**
      * @description
      * 회원등급번호
      * 
      * 시스템이 회원등급에 부여한 번호.
      * 
      * @required
      */ 
    group_no: any;
  }

  export interface RetrieveACustomerTierOutput {
    customergroup: { 
    shop_no: number;
    group_no: number;
    group_name: string;
    group_description: string;
    group_icon: string;
    benefits_paymethod: Cafe24Enum;
    buy_benefits: Cafe24Enum;
    ship_benefits: Cafe24Enum;
    product_availability: Cafe24Enum;
    discount_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    points_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    mobile_discount_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    mobile_points_information: { 
    amount_product: Cafe24Datetime;
    amount_discount: string;
    discount_unit: Cafe24Enum;
    truncation_unit: Cafe24Datetime;
    max_discount: string;
    };
    discount_limit_information: { 
    discount_limit_type: Cafe24Enum;
    discount_amount_limit: Cafe24Datetime;
    number_of_discount_limit: any;
    };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 추가한 회원등급 속성을 목록으로 조회합니다.
     * 회원등급번호, 회원등급명, 주매시 할인/적립 혜택 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-tiers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customergroups": [
     *         {
     *             "shop_no": 1,
     *             "group_no": 1,
     *             "group_name": "Standard Membership",
     *             "group_description": "Group information",
     *             "group_icon": "https://{domain}/web/bbs_member_icon/member/1457000663.png",
     *             "benefits_paymethod": "A",
     *             "buy_benefits": "D",
     *             "ship_benefits": "F",
     *             "product_availability": "A",
     *             "discount_information": {
     *                 "amount_product": "100000.00",
     *                 "amount_discount": "100.00",
     *                 "discount_unit": "P",
     *                 "truncation_unit": "10",
     *                 "max_discount": "10.00"
     *             },
     *             "points_information": {
     *                 "amount_product": "100000.00",
     *                 "amount_discount": "20.00",
     *                 "discount_unit": "P",
     *                 "truncation_unit": "100",
     *                 "max_discount": "100.00"
     *             },
     *             "mobile_discount_information": {
     *                 "amount_product": "100000.00",
     *                 "amount_discount": "20.00",
     *                 "discount_unit": "P",
     *                 "truncation_unit": "100",
     *                 "max_discount": "100.00"
     *             },
     *             "mobile_points_information": {
     *                 "amount_product": "100000.00",
     *                 "amount_discount": "20.00",
     *                 "discount_unit": "P",
     *                 "truncation_unit": "100",
     *                 "max_discount": "100.00"
     *             },
     *             "discount_limit_information": {
     *                 "discount_limit_type": "B",
     *                 "discount_amount_limit": "100000.00",
     *                 "number_of_discount_limit": null
     *             }
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerTiers(
      input: RetrieveAListOfCustomerTiersInput,
      options?: AdminRequestOptions<RetrieveAListOfCustomerTiersOutput['customergroups'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerTiersOutput>>;
    /**
     * @description
     * 쇼핑몰에 추가한 회원등급의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customer-tiers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 1
     * }
     * ```
     */
    retrieveACountOfCustomerTiers(
      input: RetrieveACountOfCustomerTiersInput,
      options?: AdminRequestOptions<RetrieveACountOfCustomerTiersOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCustomerTiersOutput>>;
    /**
     * @description
     * 회원등급번호를 이용하여 해당 회원등급의 속성을 조회합니다.
     * 회원등급명, 등급설명, 혜택 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-tier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customergroup": {
     *         "shop_no": 1,
     *         "group_no": 1,
     *         "group_name": "Standard Membership",
     *         "group_description": "Group information",
     *         "group_icon": "https://{domain}/web/bbs_member_icon/member/1457000663.png",
     *         "benefits_paymethod": "A",
     *         "buy_benefits": "D",
     *         "ship_benefits": "F",
     *         "product_availability": "A",
     *         "discount_information": {
     *             "amount_product": "100000.00",
     *             "amount_discount": "100.00",
     *             "discount_unit": "P",
     *             "truncation_unit": "10",
     *             "max_discount": "10.00"
     *         },
     *         "points_information": {
     *             "amount_product": "100000.00",
     *             "amount_discount": "20.00",
     *             "discount_unit": "P",
     *             "truncation_unit": "100",
     *             "max_discount": "100.00"
     *         },
     *         "mobile_discount_information": {
     *             "amount_product": "100000.00",
     *             "amount_discount": "20.00",
     *             "discount_unit": "P",
     *             "truncation_unit": "100",
     *             "max_discount": "100.00"
     *         },
     *         "mobile_points_information": {
     *             "amount_product": "100000.00",
     *             "amount_discount": "20.00",
     *             "discount_unit": "P",
     *             "truncation_unit": "100",
     *             "max_discount": "100.00"
     *         },
     *         "discount_limit_information": {
     *             "discount_limit_type": "B",
     *             "discount_amount_limit": "100000.00",
     *             "number_of_discount_limit": null
     *         }
     *     }
     * }
     * ```
     */
    retrieveACustomerTier(
      input: RetrieveACustomerTierInput,
      options?: AdminRequestOptions<RetrieveACustomerTierOutput['customergroup']>,
    ): Promise<AxiosResponse<RetrieveACustomerTierOutput>>;
  }
}
