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
   * 멀티쇼핑몰(Shops)은 한개의 몰아이디에서 두개 이상의 쇼핑몰을 운영하고 있는 경우 생성한 멀티 쇼핑몰의 정보입니다.
   * 멀티쇼핑몰은 최대 5개까지 생성이 가능하며, 각각 다른 언어와 화폐로 생성할 수 있어 다국어 쇼핑몰을 운영하기 용이합니다.
   */
  export interface Shops {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 기본샵 여부
     *
     * 기본샵 여부 구분
     *
     * T : 기본샵
     * F : 기본샵 아님
     *
     *
     */
    default: any;
    /**
     * @description
     * 쇼핑몰명
     *
     * 해당 멀티쇼핑몰의 쇼핑몰 이름
     *
     * 최대글자수 : [255자]
     */
    shopName: any;
    /**
     * @description
     * 사업자 거점 국가 코드
     *
     * business_country_code
     *
     *
     */
    businessCountryCode: any;
    /**
     * @description
     * 언어 코드
     *
     * 멀티쇼핑몰의 기본 언어 코드
     *
     * ko_KR : 국문
     * en_US : 영문
     * zh_CN : 중문(간체)
     * zh_TW : 중문(번체)
     * ja_JP : 일문
     * vi_VN : 베트남어
     *
     *
     */
    languageCode: any;
    /**
     * @description
     * 기본 언어명
     *
     * 멀티쇼핑몰의 기본 언어명
     *
     * 최대글자수 : [20자]
     */
    languageName: any;
    /**
     * @description
     * 결제 화폐 코드
     *
     * 멀티쇼핑몰의 결제 화폐 코드
     *
     * South Korean Won (KRW)
     * United States Dollar (USD)
     * Japanese Yen (JPY)
     * Chinese Yuan (CNY)
     * Taiwan Dollar (TWD)
     * Euro (EUR)
     * Brazilian Real (BRL)
     * Vietnamese Dong (VND)
     *
     * 형식 : [A-Z]
     */
    currencyCode: any;
    /**
     * @description
     * 결제 화폐명
     *
     * 멀티쇼핑몰의 결제 화폐명
     *
     *
     */
    currencyName: any;
    /**
     * @description
     * 참조 화폐 코드
     *
     * 멀티쇼핑몰의 참조 화폐 코드
     *
     * South Korean Won (KRW)
     * United States Dollar (USD)
     * Japanese Yen (JPY)
     * Chinese Yuan (CNY)
     *
     * 형식 : [A-Z]
     */
    referenceCurrencyCode: any;
    /**
     * @description
     * 참조 화폐명
     *
     * 멀티쇼핑몰의 참조 화폐명
     *
     *
     */
    referenceCurrencyName: any;
    /**
     * @description
     * PC 쇼핑몰 대표 디자인 번호
     *
     * 멀티쇼핑몰의 PC 쇼핑몰 대표 디자인 번호. 현재 쇼핑몰에서 사용하고 있는 디자인 번호를 나타낸다.
     *
     *
     */
    pcSkinNo: any;
    /**
     * @description
     * 모바일 쇼핑몰 대표 디자인 번호
     *
     * 모바일 쇼핑몰 대표 디자인 번호. 현재 쇼핑몰에서 사용하고 있는 디자인 번호를 나타낸다.
     *
     *
     */
    mobileSkinNo: any;
    /**
     * @description
     * 기본제공 도메인
     *
     * 기본제공하는 도메인
     *
     * 최대글자수 : [63자]
     */
    baseDomain: any;
    /**
     * @description
     * 대표도메인
     *
     * 멀티쇼핑몰 대표 도메인
     *
     * 최대글자수 : [63자]
     */
    primaryDomain: any;
    /**
     * @description
     * 연결 도메인
     *
     * 쇼핑몰에 연결된 도메인
     *
     *
     */
    slaveDomain: any;
    /**
     * @description
     * 활성화 여부
     *
     * 멀티쇼핑몰 활성화 여부
     *
     * T : 활성화
     * F : 비활성화
     *
     *
     */
    active: any;
    /**
     * @description
     * 표준시간대(타임존)
     *
     *
     */
    timezone: any;
    /**
     * @description
     * 표준시간대 정보
     *
     *
     */
    timezoneName: any;
    /**
     * @description
     * 표준시간대 날짜 표시형식
     *
     * 년/월/일 : YYYY-MM-DD
     * 월/일/년 : MM-DD-YYYY
     * 일/월/년 : DD-MM-YYYY
     *
     *
     */
    dateFormat: any;
    /**
     * @description
     * 표준시간대 시간 표시형식
     *
     * 시/분/초 표시 : hh:mm:ss
     * 시/분 표시 : hh:mm
     *
     *
     */
    timeFormat: any;
    /**
     * @description
     * 참조화폐 사용여부
     *
     *
     */
    useReferenceCurrency: any;
  }

  export interface RetrieveAListOfShopsInput {}

  export interface RetrieveAListOfShopsOutput {
    shops: {
      shopNo: number;
      default: Cafe24Enum;
      shopName: string;
      businessCountryCode: string;
      languageCode: string;
      languageName: string;
      currencyCode: string;
      currencyName: string;
      referenceCurrencyCode: string;
      referenceCurrencyName: any;
      pcSkinNo: number;
      mobileSkinNo: number;
      baseDomain: string;
      primaryDomain: string;
      slaveDomain: string[];
      active: Cafe24Enum;
      timezone: string;
      timezoneName: string;
      dateFormat: string;
      timeFormat: string;
      useReferenceCurrency: Cafe24Enum;
    }[];
  }
  export interface RetrieveAShopInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     * @required
     */
    shopNo: any;
  }

  export interface RetrieveAShopOutput {
    shop: {
      shopNo: number;
      default: Cafe24Enum;
      shopName: string;
      businessCountryCode: string;
      languageCode: string;
      languageName: string;
      currencyCode: string;
      currencyName: string;
      referenceCurrencyCode: string;
      referenceCurrencyName: any;
      pcSkinNo: any;
      mobileSkinNo: any;
      baseDomain: string;
      primaryDomain: string;
      slaveDomain: string[];
      active: Cafe24Enum;
      timezone: string;
      timezoneName: string;
      dateFormat: string;
      timeFormat: string;
      useReferenceCurrency: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 멀티쇼핑몰의 정보를 목록으로 조회할 수 있습니다.
     * 쇼핑몰명, 기본샵 여부, 기본 언어명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-shops
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shops": [
     *         {
     *             "shop_no": 1,
     *             "default": "T",
     *             "shop_name": "My Shop",
     *             "business_country_code": "KR",
     *             "language_code": "ko_KR",
     *             "language_name": "Korean",
     *             "currency_code": "KRW",
     *             "currency_name": "South Korean Won (KRW)",
     *             "reference_currency_code": "",
     *             "reference_currency_name": null,
     *             "pc_skin_no": 1,
     *             "mobile_skin_no": 2,
     *             "base_domain": "sampleid.cafe24.com",
     *             "primary_domain": "samplemall.com",
     *             "slave_domain": [
     *                 "sampledomain1.com",
     *                 "ko.sampledomain1.com"
     *             ],
     *             "active": "T",
     *             "timezone": "Asia/Seoul",
     *             "timezone_name": "(UTC+09:00) Seoul",
     *             "date_format": "YYYY-MM-DD",
     *             "time_format": "hh:mm:ss",
     *             "use_reference_currency": "F"
     *         },
     *         {
     *             "shop_no": 2,
     *             "default": "F",
     *             "shop_name": "My Shop USA",
     *             "business_country_code": "KR",
     *             "language_code": "en_US",
     *             "language_name": "English",
     *             "currency_code": "USD",
     *             "currency_name": "United States Dollar (USD)",
     *             "reference_currency_code": "",
     *             "reference_currency_name": null,
     *             "pc_skin_no": 3,
     *             "mobile_skin_no": 4,
     *             "base_domain": "sampleid.cafe24.com/shop2",
     *             "primary_domain": "en.samplemall.com",
     *             "slave_domain": [
     *                 "sampledomain2.com",
     *                 "en.sampledomain2.com"
     *             ],
     *             "active": "T",
     *             "timezone": "America/Los_Angeles",
     *             "timezone_name": "(UTC-08:00) Pacific Time (US & Canada)",
     *             "date_format": "MM-DD-YYYY",
     *             "time_format": "hh:mm:ss",
     *             "use_reference_currency": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfShops(
      input?: RetrieveAListOfShopsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfShopsOutput['shops'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfShopsOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 멀티쇼핑몰의 정보를 조회할 수 있습니다.
     * 쇼핑몰명, 언어, 결제 화폐정보 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-shop
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shop": {
     *         "shop_no": 1,
     *         "default": "T",
     *         "shop_name": "My Shop",
     *         "business_country_code": "KR",
     *         "language_code": "ko_KR",
     *         "language_name": "Korean",
     *         "currency_code": "KRW",
     *         "currency_name": "South Korean Won (KRW)",
     *         "reference_currency_code": "",
     *         "reference_currency_name": null,
     *         "pc_skin_no": null,
     *         "mobile_skin_no": null,
     *         "base_domain": "sampleid.cafe24.com",
     *         "primary_domain": "samplemall.com",
     *         "slave_domain": [
     *             "sampledomain1.com",
     *             "ko.sampledomain1.com"
     *         ],
     *         "active": "T",
     *         "timezone": "Asia/Seoul",
     *         "timezone_name": "(UTC+09:00) Seoul",
     *         "date_format": "YYYY-MM-DD",
     *         "time_format": "hh:mm:ss",
     *         "use_reference_currency": "F"
     *     }
     * }
     * ```
     */
    retrieveAShop(
      input: RetrieveAShopInput,
      options?: AdminRequestOptions<RetrieveAShopOutput['shop']>,
    ): Promise<AxiosResponse<RetrieveAShopOutput>>;
  }
}
