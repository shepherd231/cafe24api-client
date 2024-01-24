import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 공급사 지역별 배송비(Suppliers users regionalsurcharges)를 통해 공급사별로 지역별 배송비를 설정하거나, 설정된 정보를 조회할 수 있습니다.
   * 
   * 
   */
  export interface SuppliersUsersRegionalsurcharges {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 지역별 배송비 등록 번호
      * 
      * 
      */ 
    regional_surcharge_no: any;
    /**
      * @description
      * 공급사 아이디
      * 
      * 최대글자수 : [20자]
      */ 
    supplier_id: any;
    /**
      * @description
      * 국가코드
      * 
      * KR : 대한민국
      * JP : 일본
      * VN : 베트남
      * 
      * 최대글자수 : [2자]
      */ 
    country_code: any;
    /**
      * @description
      * 특수지역명
      * 
      * 최대글자수 : [255자]
      */ 
    region_name: any;
    /**
      * @description
      * 지역명
      * 
      * 추가배송비를 부과할 지역이름
      * 지역 설정방식(region_setting_type)이 &#39;N&#39;으로 설정 되어있는 경우 필수 입력
      * 
      * 최대글자수 : [300자]
      */ 
    surcharge_region_name: any;
    /**
      * @description
      * 시작 우편번호
      * 
      * 지역 설정 방식(region_setting_type)이 &#39;Z&#39;로 설정 되어있는 경우 필수 입력
      * 
      * 최대글자수 : [8자]
      */ 
    start_zipcode: any;
    /**
      * @description
      * 끝 우편번호
      * 
      * 지역 설정 방식(region_setting_type)이 &#39;Z&#39;로 설정 되어있는 경우 필수 입력
      * 
      * 최대글자수 : [8자]
      */ 
    end_zipcode: any;
    /**
      * @description
      * 지역 추가 배송비
      * 
      * 부과할 추가배송비 금액
      * 
      * 최소: [1]~최대: [999999999]
      */ 
    regional_surcharge_amount: any;
    /**
      * @description
      * 지역별 배송비 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_regional_surcharge: any;
  }

  export interface RetrieveASupplierUserSListOfRegionalShippingFeesInput {
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
      * 공급사 아이디
      * 
      * @required
      * 
      * 최대글자수 : [20자]
      */ 
    supplier_id: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [10000]
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

  export interface RetrieveASupplierUserSListOfRegionalShippingFeesOutput {
    regionalsurcharges: { 
    shop_no: number;
    regional_surcharge_no: number;
    supplier_id: string;
    country_code: string;
    region_name: string;
    surcharge_region_name: any;
    start_zipcode: Cafe24Datetime;
    end_zipcode: Cafe24Datetime;
    regional_surcharge_amount: Cafe24Datetime;
    }[];
  }
  export interface CreateRegionalShippingFeeForASupplierUserInput {
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
      * 공급사 아이디
      * 
      * @required
      * 
      * 최대글자수 : [20자]
      */ 
    supplier_id: any;
    /**
      * @description
      * 국가코드
      * 
      * EC 한국, 일본, 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * KR : 대한민국
      * JP : 일본
      * VN : 베트남
      * 
      * 최대글자수 : [2자]
      */ 
    country_code?: any;
    /**
      * @description
      * 특수지역명
      * 
      * @required
      * 
      * 최대글자수 : [255자]
      */ 
    region_name: any;
    /**
      * @description
      * 지역별 배송비 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @required
      */ 
    use_regional_surcharge: any;
    /**
      * @description
      * 지역명
      * 
      * 최대글자수 : [300자]
      */ 
    surcharge_region_name?: any;
    /**
      * @description
      * 시작 우편번호
      * 
      * 최대글자수 : [8자]
      */ 
    start_zipcode?: any;
    /**
      * @description
      * 끝 우편번호
      * 
      * 최대글자수 : [8자]
      */ 
    end_zipcode?: any;
    /**
      * @description
      * 지역 추가 배송비
      * 
      * @required
      * 
      * 최소: [1]~최대: [999999999]
      */ 
    regional_surcharge_amount: any;
  }

  export interface CreateRegionalShippingFeeForASupplierUserOutput {
    regionalsurcharge: { 
    shop_no: number;
    regional_surcharge_no: number;
    supplier_id: string;
    county_code: string;
    region_name: string;
    use_regional_surcharge: Cafe24Enum;
    surcharge_region_name: any;
    start_zipcode: Cafe24Datetime;
    end_zipcode: Cafe24Datetime;
    regional_surcharge_amount: Cafe24Datetime;
    };
  }
  export interface DeleteSupplierUserSRegionalShippingFeeSettingsInput {
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
      * 공급사 아이디
      * 
      * @required
      * 
      * 최대글자수 : [20자]
      */ 
    supplier_id: any;
    /**
      * @description
      * 지역별 배송비 등록 번호
      * 
      * @required
      */ 
    regional_surcharge_no: any;
  }

  export interface DeleteSupplierUserSRegionalShippingFeeSettingsOutput {
    regionalsurcharge: { 
    shop_no: number;
    supplier_id: string;
    regional_surcharge_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 공급사의 등록된 지역별 배송비 설정을 목록으로 조회할 수 있습니다.
     * 국가코드, 지역명, 지역 추가 배송비 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-supplier-user-s-list-of-regional-shipping-fees
     *
     * @example 응답 예시
     * ```json
     * {
     *     "regionalsurcharges": [
     *         {
     *             "shop_no": 1,
     *             "regional_surcharge_no": 2,
     *             "supplier_id": "sampleid",
     *             "country_code": "KR",
     *             "region_name": "Korea",
     *             "surcharge_region_name": null,
     *             "start_zipcode": "63000",
     *             "end_zipcode": "63644",
     *             "regional_surcharge_amount": "6000.00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "regional_surcharge_no": 3,
     *             "supplier_id": "sampleid",
     *             "country_code": "KR",
     *             "region_name": "Korea",
     *             "surcharge_region_name": null,
     *             "start_zipcode": "40200",
     *             "end_zipcode": "40240",
     *             "regional_surcharge_amount": "5000.00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveASupplierUserSListOfRegionalShippingFees(
      input: RetrieveASupplierUserSListOfRegionalShippingFeesInput,
      options?: RequestOptions<RetrieveASupplierUserSListOfRegionalShippingFeesOutput['regionalsurcharges'][number]>,
    ): Promise<AxiosResponse<RetrieveASupplierUserSListOfRegionalShippingFeesOutput>>;
    /**
     * @description
     * 특정 공급사의 지역별 배송비 설정을 등록할 수 있습니다.
     * 공급사 하나당 지역별로 여러 배송비를 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-regional-shipping-fee-for-a-supplier-user
     *
     * @example 응답 예시
     * ```json
     * {
     *     "regionalsurcharge": {
     *         "shop_no": 1,
     *         "regional_surcharge_no": 4,
     *         "supplier_id": "sampleid",
     *         "county_code": "KR",
     *         "region_name": "Korea",
     *         "use_regional_surcharge": "T",
     *         "surcharge_region_name": null,
     *         "start_zipcode": "63000",
     *         "end_zipcode": "63644",
     *         "regional_surcharge_amount": "6000.00"
     *     }
     * }
     * ```
     */
    createRegionalShippingFeeForASupplierUser(
      input: CreateRegionalShippingFeeForASupplierUserInput,
      options?: RequestOptions<CreateRegionalShippingFeeForASupplierUserOutput['regionalsurcharge']>,
    ): Promise<AxiosResponse<CreateRegionalShippingFeeForASupplierUserOutput>>;
    /**
     * @description
     * 특정 공급사의 등록된 지역별 배송비 설정을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-supplier-user-s-regional-shipping-fee-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "regionalsurcharge": {
     *         "shop_no": 1,
     *         "supplier_id": "sampleid",
     *         "regional_surcharge_no": 4
     *     }
     * }
     * ```
     */
    deleteSupplierUserSRegionalShippingFeeSettings(
      input: DeleteSupplierUserSRegionalShippingFeeSettingsInput,
      options?: RequestOptions<DeleteSupplierUserSRegionalShippingFeeSettingsOutput['regionalsurcharge']>,
    ): Promise<AxiosResponse<DeleteSupplierUserSRegionalShippingFeeSettingsOutput>>;
  }
}
