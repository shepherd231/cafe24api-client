import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 제조사(Manufacturers)는 상품의 제작정보 중 제조사에 입력하는 정보입니다.
   * 제조사는 상품을 제작, 생산한 주체를 나타내며, 상품을 구분하는 판매분류 중 하나입니다.
   * 상품은 반드시 하나의 제조사를 갖고 있습니다.(미지정시 &#39;자체제작&#39;을 사용함)
   * 제조사의 목록조회, 수 조회, 상세조회, 생성, 수정이 가능합니다.
   */
  export interface Manufacturers {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 제조사 코드
     *
     * 시스템이 부여한 제조사의 코드. 해당 쇼핑몰 내에서 제조사 코드는 중복되지 않는다.
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturer_code: any;
    /**
     * @description
     * 제조사명
     *
     * 제조사의 이름. 제조사명은 쇼핑몰 관리자 화면에서 제조사를 구분할 수 있는 기본적인 정보이다.
     *
     * 최대글자수 : [50자]
     */
    manufacturer_name: any;
    /**
     * @description
     * 대표자명
     *
     * 제조사의 대표자 이름.
     *
     * 최대글자수 : [30자]
     */
    president_name: any;
    /**
     * @description
     * 사용여부
     *
     * 해당 제조사를 사용하는지 여부 표시
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_manufacturer: any;
    /**
     * @description
     * 이메일
     *
     * 제조사의 문의 메일.
     *
     * 최대글자수 : [255자]
     */
    email: any;
    /**
     * @description
     * 전화번호
     *
     * 제조사의 전화번호.
     *
     * 최대글자수 : [20자]
     */
    phone: any;
    /**
     * @description
     * 홈페이지
     *
     * 제조사의 홈페이지 주소
     *
     * 최대글자수 : [255자]
     */
    homepage: any;
    /**
     * @description
     * 우편번호
     *
     * 제조사의 사업장 우편번호.
     *
     *
     */
    zipcode: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    country_code: any;
    /**
     * @description
     * 기본 주소
     *
     * 제조사의 사업장 주소(시/군/구 단위 표기)
     *
     * 최대글자수 : [255자]
     */
    address1: any;
    /**
     * @description
     * 상세 주소
     *
     * 제조사의 사업장 주소(상세 주소 표기)
     *
     * 최대글자수 : [255자]
     */
    address2: any;
    /**
     * @description
     * 생성일
     *
     *
     */
    created_date: any;
  }

  export interface RetrieveAListOfManufacturersInput {
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
     * 제조사 코드
     *
     * 조회하고자 하는 제조사의 코드.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_code?: any;
    /**
     * @description
     * 제조사명
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_name?: any;
    /**
     * @description
     * 제조사 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_manufacturer?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
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
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfManufacturersOutput {
    manufacturers: {
      shop_no: number;
      manufacturer_code: string;
      manufacturer_name: string;
      president_name: string;
      use_manufacturer: Cafe24Enum;
    }[];
  }
  export interface RetrieveAManufacturerInput {
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
     * 제조사 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturer_code: any;
  }

  export interface RetrieveAManufacturerOutput {
    manufacturer: {
      shop_no: number;
      manufacturer_code: string;
      manufacturer_name: string;
      president_name: string;
      email: string;
      phone: string;
      homepage: string;
      zipcode: Cafe24Datetime;
      country_code: string;
      address1: string;
      address2: string;
      created_date: Cafe24Datetime;
      use_manufacturer: Cafe24Enum;
    };
  }
  export interface RetrieveACountOfManufacturersInput {
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
     * 제조사 코드
     *
     * 조회하고자 하는 제조사의 코드.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_code?: any;
    /**
     * @description
     * 제조사명
     *
     * 검색어를 제조사명에 포함하고 있는 공급사 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_name?: any;
    /**
     * @description
     * 제조사 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_manufacturer?: any;
  }

  export interface RetrieveACountOfManufacturersOutput {
    count: number;
  }
  export interface CreateAManufacturerInput {
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
     * 제조사명
     *
     * @required
     */
    manufacturer_name: any;
    /**
     * @description
     * 대표자명
     *
     * @required
     *
     * 최대글자수 : [30자]
     */
    president_name: any;
    /**
     * @description
     * 이메일
     *
     * 최대글자수 : [255자]
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 전화번호
     *
     * 최대글자수 : [20자]
     * 전화번호
     */
    phone?: any;
    /**
     * @description
     * 홈페이지
     *
     * 최대글자수 : [255자]
     */
    homepage?: any;
    /**
     * @description
     * 우편번호
     *
     *
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
    /**
     * @description
     * 국가코드
     *
     *
     */
    country_code?: any;
    /**
     * @description
     * 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_manufacturer?: any;
  }

  export interface CreateAManufacturerOutput {
    manufacturer: {
      shop_no: number;
      manufacturer_code: string;
      manufacturer_name: string;
      president_name: string;
      email: string;
      phone: string;
      homepage: string;
      zipcode: Cafe24Datetime;
      country_code: string;
      address1: string;
      address2: string;
      use_manufacturer: Cafe24Enum;
    };
  }
  export interface UpdateAManufacturerInput {
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
     * 제조사 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturer_code: any;
    /**
     * @description
     * 제조사명
     *
     *
     */
    manufacturer_name?: any;
    /**
     * @description
     * 대표자명
     *
     *
     */
    president_name?: any;
    /**
     * @description
     * 이메일
     *
     * 최대글자수 : [255자]
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 전화번호
     *
     * 최대글자수 : [20자]
     * 전화번호
     */
    phone?: any;
    /**
     * @description
     * 홈페이지
     *
     * 최대글자수 : [255자]
     */
    homepage?: any;
    /**
     * @description
     * 우편번호
     *
     *
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
    /**
     * @description
     * 국가코드
     *
     *
     */
    country_code?: any;
    /**
     * @description
     * 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_manufacturer?: any;
  }

  export interface UpdateAManufacturerOutput {
    manufacturer: {
      shop_no: number;
      manufacturer_code: string;
      manufacturer_name: string;
      president_name: string;
      email: string;
      phone: string;
      homepage: string;
      zipcode: Cafe24Datetime;
      country_code: string;
      address1: string;
      address2: string;
      use_manufacturer: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 제조사들의 정보를 목록으로 조회합니다.
     * 제조사명, 대표자명, 전화번호 등을 조회할 수 있습니다.
     * 목록조회의 응답값은 상세조회보다 간소합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-manufacturers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "manufacturers": [
     *         {
     *             "shop_no": 1,
     *             "manufacturer_code": "M0000000",
     *             "manufacturer_name": "Sample Manufacturer",
     *             "president_name": "Sample Administrator",
     *             "use_manufacturer": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "manufacturer_code": "M000000C",
     *             "manufacturer_name": "Sample Manufacturer",
     *             "president_name": "Sample Administrator",
     *             "use_manufacturer": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfManufacturers(
      input: RetrieveAListOfManufacturersInput,
      options?: RequestOptions<
        RetrieveAListOfManufacturersOutput['manufacturers'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfManufacturersOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 제조사의 상세정보를 조회합니다.
     * 제조사명, 대표자명, 제조사 사용여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-manufacturer
     *
     * @example 응답 예시
     * ```json
     * {
     *     "manufacturer": {
     *         "shop_no": 1,
     *         "manufacturer_code": "M0000000",
     *         "manufacturer_name": "Sample Manufacturer",
     *         "president_name": "Sample User",
     *         "email": "sample@sample.com",
     *         "phone": "010-000-0000",
     *         "homepage": "http://sample.com",
     *         "zipcode": "00000",
     *         "country_code": "KR",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "created_date": "2018-09-01T15:00:00+09:00",
     *         "use_manufacturer": "T"
     *     }
     * }
     * ```
     */
    retrieveAManufacturer(
      input: RetrieveAManufacturerInput,
      options?: RequestOptions<RetrieveAManufacturerOutput['manufacturer']>,
    ): Promise<AxiosResponse<RetrieveAManufacturerOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 제조사의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-manufacturers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfManufacturers(
      input: RetrieveACountOfManufacturersInput,
      options?: RequestOptions<RetrieveACountOfManufacturersOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfManufacturersOutput>>;
    /**
     * @description
     * 쇼핑몰에 제조사를 새로 등록합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-manufacturer
     *
     * @example 응답 예시
     * ```json
     * {
     *     "manufacturer": {
     *         "shop_no": 1,
     *         "manufacturer_code": "M0000000",
     *         "manufacturer_name": "Sample Manufacturer",
     *         "president_name": "Sample User",
     *         "email": "sample@sample.com",
     *         "phone": "010-000-0000",
     *         "homepage": "http://sample.com",
     *         "zipcode": "00000",
     *         "country_code": "KR",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "use_manufacturer": "T"
     *     }
     * }
     * ```
     */
    createAManufacturer(
      input: CreateAManufacturerInput,
      options?: RequestOptions<CreateAManufacturerOutput['manufacturer']>,
    ): Promise<AxiosResponse<CreateAManufacturerOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 제조사의 정보를 수정합니다.
     * 제조사명, 대표자명, 전화번호 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-manufacturer
     *
     * @example 응답 예시
     * ```json
     * {
     *     "manufacturer": {
     *         "shop_no": 1,
     *         "manufacturer_code": "M000000A",
     *         "manufacturer_name": "Sample Manufacturer",
     *         "president_name": "Sample User",
     *         "email": "sample@sample.com",
     *         "phone": "010-000-0000",
     *         "homepage": "http://sample.com",
     *         "zipcode": "00000",
     *         "country_code": "KR",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "use_manufacturer": "T"
     *     }
     * }
     * ```
     */
    updateAManufacturer(
      input: UpdateAManufacturerInput,
      options?: RequestOptions<UpdateAManufacturerOutput['manufacturer']>,
    ): Promise<AxiosResponse<UpdateAManufacturerOutput>>;
  }
}
