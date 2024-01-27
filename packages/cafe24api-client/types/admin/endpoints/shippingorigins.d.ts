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
   * 출고지 관리(Shipping origins)는 출고지에 대한 정보를 관리하는 기능입니다.
   */
  export interface Shippingorigins {
    /**
      * @description
      * 출고지 코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    origin_code: any;
    /**
      * @description
      * 출고지 명
      * 
      * 최대글자수 : [50자]
      */ 
    origin_name: any;
    /**
      * @description
      * 출고지 기본설정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    default: any;
    /**
      * @description
      * 국가코드
      * 
      * 최대글자수 : [2자]
      */ 
    country_code: any;
    /**
      * @description
      * 우편번호
      * 
      * 최소글자수 : [2자]
      * 최대글자수 : [14자]
      */ 
    zipcode: any;
    /**
      * @description
      * 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address1: any;
    /**
      * @description
      * 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address2: any;
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
      * 출고지 품목 정보
      * 
      * 
      */ 
    variants: any;
  }

  export interface RetrieveAListOfShippingOriginsInput {
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfShippingOriginsOutput {
    shippingorigins: { 
    origin_code: string;
    origin_name: string;
    default: Cafe24Enum;
    contact: string;
    secondary_contact: string;
    zipcode: Cafe24Datetime;
    country_code: string;
    address1: string;
    address2: string;
    variants: string[];
    }[];
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface RetrieveAShippingOriginInput {
    /**
      * @description
      * 출고지 코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    origin_code: any;
  }

  export interface RetrieveAShippingOriginOutput {
    shippingorigin: { 
    origin_code: string;
    origin_name: string;
    default: Cafe24Enum;
    contact: string;
    secondary_contact: string;
    zipcode: Cafe24Datetime;
    country_code: string;
    address1: string;
    address2: string;
    variants: string[];
    };
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface CreateAShippingOriginInput {
    /**
      * @description
      * 출고지 명
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    origin_name: any;
    /**
      * @description
      * 기본 주소
      * 
      * @required
      * 
      * 최대글자수 : [255자]
      */ 
    address1: any;
    /**
      * @description
      * 상세 주소
      * 
      * @required
      * 
      * 최대글자수 : [255자]
      */ 
    address2: any;
    /**
      * @description
      * 국가코드
      * 
      * @required
      * 
      * 최대글자수 : [2자]
      */ 
    country_code: any;
    /**
      * @description
      * 출고지 기본설정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    default?: any;
    /**
      * @description
      * 우편번호
      * 
      * 최소글자수 : [2자]
      * 최대글자수 : [14자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 대표 연락처
      * 
      * 전화번호
      * 최대글자수 : [20자]
      */ 
    contact?: any;
    /**
      * @description
      * 보조 연락처
      * 
      * 전화번호
      * 최대글자수 : [20자]
      */ 
    secondary_contact?: any;
  }

  export interface CreateAShippingOriginOutput {
    shippingorigin: { 
    origin_code: string;
    origin_name: string;
    default: Cafe24Enum;
    contact: string;
    secondary_contact: string;
    zipcode: Cafe24Datetime;
    country_code: string;
    address1: string;
    address2: string;
    variants: any;
    };
  }
  export interface UpdateAShippingOriginInput {
    /**
      * @description
      * 출고지 코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    origin_code: any;
    /**
      * @description
      * 출고지 명
      * 
      * 최대글자수 : [50자]
      */ 
    origin_name?: any;
    /**
      * @description
      * 국가코드
      * 
      * 최대글자수 : [2자]
      */ 
    country_code?: any;
    /**
      * @description
      * 출고지 기본설정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    default?: any;
    /**
      * @description
      * 대표 연락처
      * 
      * 전화번호
      * 최대글자수 : [20자]
      */ 
    contact?: any;
    /**
      * @description
      * 보조 연락처
      * 
      * 전화번호
      * 최대글자수 : [20자]
      */ 
    secondary_contact?: any;
    /**
      * @description
      * 우편번호
      * 
      * 최소글자수 : [2자]
      * 최대글자수 : [14자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address1?: any;
    /**
      * @description
      * 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address2?: any;
  }

  export interface UpdateAShippingOriginOutput {
    shippingorigin: { 
    origin_code: string;
    origin_name: string;
    default: Cafe24Enum;
    contact: string;
    secondary_contact: string;
    zipcode: Cafe24Datetime;
    country_code: string;
    address1: string;
    address2: string;
    variants: any;
    };
  }
  export interface DeleteAShippingOriginInput {
    /**
      * @description
      * 출고지 코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    origin_code: any;
  }

  export interface DeleteAShippingOriginOutput {
    shippingorigin: { 
    origin_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 등록된 출고지를 목록으로 조회할 수 있습니다.
     * 품목 정보는 최대 100건까지 표기됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-shipping-origins
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingorigins": [
     *         {
     *             "origin_code": "W0000000",
     *             "origin_name": "Dongjak-gu Warehouse",
     *             "default": "F",
     *             "contact": "010-0000-0000",
     *             "secondary_contact": "010-0000-0000",
     *             "zipcode": "07071",
     *             "country_code": "KR",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "variants": [
     *                 "P000000C000Q",
     *                 "P000000C000R"
     *             ]
     *         },
     *         {
     *             "origin_code": "W000000B",
     *             "origin_name": "Boramae Warehouse",
     *             "default": "F",
     *             "contact": "010-0000-0000",
     *             "secondary_contact": "010-0000-0000",
     *             "zipcode": "07811",
     *             "country_code": "KR",
     *             "address1": "Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "15, Boramae-ro 5-gil",
     *             "variants": [
     *                 "P000000C000C",
     *                 "P000000C000F"
     *             ]
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "prev",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/shippingorigins?offset=0&limit=10"
     *         },
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/shippingorigins?offset=20&limit=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfShippingOrigins(
      input: RetrieveAListOfShippingOriginsInput,
      options?: AdminRequestOptions<RetrieveAListOfShippingOriginsOutput['shippingorigins'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfShippingOriginsOutput>>;
    /**
     * @description
     * 등록된 출고지를 상세 조회할 수 있습니다.
     * 품목 정보가 100건 이후의 모든 값이 조회됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-shipping-origin
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingorigin": {
     *         "origin_code": "W000000Q",
     *         "origin_name": "Dongjak-gu Warehouse",
     *         "default": "F",
     *         "contact": "010-0000-0000",
     *         "secondary_contact": "010-0000-0000",
     *         "zipcode": "07811",
     *         "country_code": "KR",
     *         "address1": "Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "15, Boramae-ro 5-gil",
     *         "variants": [
     *             "P000000B000B",
     *             "P000000B000C"
     *         ]
     *     },
     *     "links": [
     *         {
     *             "rel": "self",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/shippingorigins/W000000Q"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAShippingOrigin(
      input: RetrieveAShippingOriginInput,
      options?: AdminRequestOptions<RetrieveAShippingOriginOutput['shippingorigin']>,
    ): Promise<AxiosResponse<RetrieveAShippingOriginOutput>>;
    /**
     * @description
     * 배송 출고지로 활용될 출고지를 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-shipping-origin
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingorigin": {
     *         "origin_code": "W000000C",
     *         "origin_name": "Dongjak-gu warehouse",
     *         "default": "F",
     *         "contact": "010-0000-0000",
     *         "secondary_contact": "010-0000-0000",
     *         "zipcode": "07071",
     *         "country_code": "KR",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "variants": null
     *     }
     * }
     * ```
     */
    createAShippingOrigin(
      input: CreateAShippingOriginInput,
      options?: AdminRequestOptions<CreateAShippingOriginOutput['shippingorigin']>,
    ): Promise<AxiosResponse<CreateAShippingOriginOutput>>;
    /**
     * @description
     * 배송 출고지로 활용될 출고지를 등록할 수 있습니다.
     * 배송 관리자 활성화 시, 상품 및 품목별 출고지를 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-shipping-origin
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingorigin": {
     *         "origin_code": "W000000Q",
     *         "origin_name": "Dongjak-gu Warehouse",
     *         "default": "F",
     *         "contact": "010-0000-0000",
     *         "secondary_contact": "010-0000-0000",
     *         "zipcode": "07071",
     *         "country_code": "KR",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "variants": null
     *     }
     * }
     * ```
     */
    updateAShippingOrigin(
      input: UpdateAShippingOriginInput,
      options?: AdminRequestOptions<UpdateAShippingOriginOutput['shippingorigin']>,
    ): Promise<AxiosResponse<UpdateAShippingOriginOutput>>;
    /**
     * @description
     * 등록된 출고지를 삭제할 수 있습니다.
     * 기본출고지, 상품/품목이 할당된 출고지는 삭제할 수 없습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-shipping-origin
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingorigin": {
     *         "origin_code": "W000000Q"
     *     }
     * }
     * ```
     */
    deleteAShippingOrigin(
      input: DeleteAShippingOriginInput,
      options?: AdminRequestOptions<DeleteAShippingOriginOutput['shippingorigin']>,
    ): Promise<AxiosResponse<DeleteAShippingOriginOutput>>;
  }
}
