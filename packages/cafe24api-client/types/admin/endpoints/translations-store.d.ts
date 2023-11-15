import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 상점 번역 정보(Translations store)는, 상점의 번역 정보를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface TranslationsStore {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 번역 정보
     *
     *
     */
    translations: any;
  }

  export interface RetrieveAListOfStoreTranslationsInput {
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
     * 언어 코드
     *
     * 언어별로 번역된 정보에서 검색하고자 하는 언어를 선택하면, 해당 언어에 대한 번역 내용을 확인할 수 있습니다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    language_code?: any;
  }

  export interface RetrieveAListOfStoreTranslationsOutput {
    store: {
      shop_no: number;
      translations: {
        language_code: string;
        translated: Cafe24Enum;
        shop_name: string;
        company_name: string;
        company_registration_no: string;
        president_name: string;
        phone: string;
        email: string;
        fax: string;
        zipcode: Cafe24Datetime;
        address1: string;
        address2: string;
        customer_service_phone: string;
        customer_service_hours: string;
        privacy_officer_name: string;
        privacy_officer_email: string;
        updated_date: Cafe24Datetime;
      }[];
    };
  }
  export interface UpdateTheTranslationsOfAStoreInput {
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
     * 번역 정보
     *
     *
     */
    translations?: {
      /**
       * @description
       * 언어 코드
       *
       *
       */
      language_code: any;
      /**
       * @description
       * 쇼핑몰명
       *
       *
       */
      shop_name?: any;
      /**
       * @description
       * 상호명
       *
       *
       */
      company_name?: any;
      /**
       * @description
       * 사업자등록번호
       *
       *
       */
      company_registration_no?: any;
      /**
       * @description
       * 대표자명
       *
       *
       */
      president_name?: any;
      /**
       * @description
       * 전화번호
       *
       *
       */
      phone?: any;
      /**
       * @description
       * 이메일
       *
       *
       */
      email?: any;
      /**
       * @description
       * 팩스번호
       *
       *
       */
      fax?: any;
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
      /**
       * @description
       * 고객센터 상담/주문 전화
       *
       *
       */
      customer_service_phone?: any;
      /**
       * @description
       * 고객센터 운영시간
       *
       *
       */
      customer_service_hours?: any;
      /**
       * @description
       * 개인정보보호 책임자명
       *
       *
       */
      privacy_officer_name?: any;
      /**
       * @description
       * 개인정보보호 책임자 이메일
       *
       *
       */
      privacy_officer_email?: any;
    };
  }

  export interface UpdateTheTranslationsOfAStoreOutput {
    store: {
      shop_no: number;
      translations: {
        language_code: string;
        translated: Cafe24Enum;
        shop_name: string;
        company_name: string;
        company_registration_no: string;
        president_name: string;
        phone: string;
        email: string;
        fax: string;
        zipcode: Cafe24Datetime;
        address1: string;
        address2: string;
        customer_service_phone: string;
        customer_service_hours: string;
        privacy_officer_name: string;
        privacy_officer_email: string;
        updated_date: Cafe24Datetime;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상점의 번역 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-store-translations
     *
     * @example 응답 예시
     * ```json
     * {
     *     "store": {
     *         "shop_no": 1,
     *         "translations": [
     *             {
     *                 "language_code": "en_US",
     *                 "translated": "T",
     *                 "shop_name": "sample shop",
     *                 "company_name": "sample company",
     *                 "company_registration_no": "118-81-20586",
     *                 "president_name": "Jone Doe",
     *                 "phone": "02-0000-0000",
     *                 "email": "sample@sample.com",
     *                 "fax": "02-0000-0000",
     *                 "zipcode": "07071",
     *                 "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *                 "address2": "Professional Construction Hall",
     *                 "customer_service_phone": "02-0000-0000",
     *                 "customer_service_hours": "9:00 AM ~ 5:00 PM",
     *                 "privacy_officer_name": "Jane Doe",
     *                 "privacy_officer_email": "sample1@sample.com",
     *                 "updated_date": "2022-01-10T11:19:27+09:00"
     *             },
     *             {
     *                 "language_code": "es_ES",
     *                 "translated": "T",
     *                 "shop_name": "tienda de muestras",
     *                 "company_name": "compañía de muestras",
     *                 "company_registration_no": "118-81-20586",
     *                 "president_name": "Jone Doe",
     *                 "phone": "02-0000-0000",
     *                 "email": "sample@sample.com",
     *                 "fax": "02-0000-0000",
     *                 "zipcode": "07071",
     *                 "address1": "Sindaebang dong Dongjak-gu, Seúl, República de Corea",
     *                 "address2": "Hall de construcción profesional",
     *                 "customer_service_phone": "02-0000-0000",
     *                 "customer_service_hours": "9 de la mañana a 5 de la tarde",
     *                 "privacy_officer_name": "Jane Doe",
     *                 "privacy_officer_email": "sample1@sample.com",
     *                 "updated_date": "2022-01-10T11:19:27+09:00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAListOfStoreTranslations(
      input: RetrieveAListOfStoreTranslationsInput,
      options?: RequestOptions<RetrieveAListOfStoreTranslationsInput>,
    ): Promise<AxiosResponse<RetrieveAListOfStoreTranslationsOutput>>;
    /**
     * @description
     * 상점의 번역 정보를 수정할 수 있습니다.
     * 번역정보 수정시, 언어 코드는 필수 입력 항목입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-the-translations-of-a-store
     *
     * @example 응답 예시
     * ```json
     * {
     *     "store": {
     *         "shop_no": 1,
     *         "translations": [
     *             {
     *                 "language_code": "en_US",
     *                 "translated": "T",
     *                 "shop_name": "sample shop",
     *                 "company_name": "sample company",
     *                 "company_registration_no": "118-81-20586",
     *                 "president_name": "Jone Doe",
     *                 "phone": "02-0000-0000",
     *                 "email": "sample@sample.com",
     *                 "fax": "02-0000-0000",
     *                 "zipcode": "07071",
     *                 "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *                 "address2": "Professional Construction Hall",
     *                 "customer_service_phone": "02-0000-0000",
     *                 "customer_service_hours": "9:00 AM ~ 5:00 PM",
     *                 "privacy_officer_name": "Jane Doe",
     *                 "privacy_officer_email": "sample1@sample.com",
     *                 "updated_date": "2022-01-10T11:19:27+09:00"
     *             },
     *             {
     *                 "language_code": "es_ES",
     *                 "translated": "T",
     *                 "shop_name": "tienda de muestras",
     *                 "company_name": "compañía de muestras",
     *                 "company_registration_no": "118-81-20586",
     *                 "president_name": "Jone Doe",
     *                 "phone": "02-0000-0000",
     *                 "email": "sample@sample.com",
     *                 "fax": "02-0000-0000",
     *                 "zipcode": "07071",
     *                 "address1": "Sindaebang dong Dongjak-gu, Seúl, República de Corea",
     *                 "address2": "Hall de construcción profesional",
     *                 "customer_service_phone": "02-0000-0000",
     *                 "customer_service_hours": "9 de la mañana a 5 de la tarde",
     *                 "privacy_officer_name": "Jane Doe",
     *                 "privacy_officer_email": "sample1@sample.com",
     *                 "updated_date": "2022-01-10T11:19:27+09:00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateTheTranslationsOfAStore(
      input: UpdateTheTranslationsOfAStoreInput,
      options?: RequestOptions<UpdateTheTranslationsOfAStoreInput>,
    ): Promise<AxiosResponse<UpdateTheTranslationsOfAStoreOutput>>;
  }
}
