import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 공급사 지역별 배송비 설정(Suppliers users regionalsurcharges setting)을 통해 공급사별로 지역별 배송비를 설정값을 조회하거나 수정할 수 있습니다.
   *
   *
   */
  export interface SuppliersUsersRegionalsurchargesSetting {
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
     * 최대글자수 : [20자]
     */
    supplierId: any;
    /**
     * @description
     * 지역별 배송비 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useRegionalSurcharge: any;
    /**
     * @description
     * 지역 설정 방식
     *
     * A : 간편 설정
     * N : 지명 설정
     * Z : 우편번호 설정
     *
     *
     */
    regionSettingType: any;
    /**
     * @description
     * 제주 추가 배송비
     *
     * 최소: [0]~최대: [999999999]
     */
    jejuSurchargeAmount: any;
    /**
     * @description
     * 도서산간 추가 배송비
     *
     * 최소: [0]~최대: [999999999]
     */
    remoteAreaSurchargeAmount: any;
  }

  export interface RetrieveASupplierUserSRegionalShippingFeeSettingsInput {
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
     *
     * 최대글자수 : [20자]
     */
    supplierId: any;
  }

  export interface RetrieveASupplierUserSRegionalShippingFeeSettingsOutput {
    regionalsurcharge: {
      shopNo: number;
      supplierId: string;
      useRegionalSurcharge: Cafe24Enum;
      regionSettingType: Cafe24Enum;
      jejuSurchargeAmount: Cafe24Datetime;
      remoteAreaSurchargeAmount: Cafe24Datetime;
    };
  }
  export interface UpdateASupplierUserSRegionalShippingFeeSettingsInput {
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
     *
     * 최대글자수 : [20자]
     */
    supplierId: any;
    /**
     * @description
     * 지역별 배송비 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    useRegionalSurcharge: any;
    /**
     * @description
     * 지역 설정 방식
     *
     * A : 간편 설정
     * N : 지명 설정
     * Z : 우편번호 설정
     *
     * @required
     */
    regionSettingType: any;
    /**
     * @description
     * 제주 추가 배송비
     *
     * 최소: [0]~최대: [999999999]
     */
    jejuSurchargeAmount?: any;
    /**
     * @description
     * 도서산간 추가 배송비
     *
     * 최소: [0]~최대: [999999999]
     */
    remoteAreaSurchargeAmount?: any;
  }

  export interface UpdateASupplierUserSRegionalShippingFeeSettingsOutput {
    regionalsurcharge: {
      shopNo: number;
      supplierId: string;
      useRegionalSurcharge: Cafe24Enum;
      regionSettingType: Cafe24Enum;
      jejuSurchargeAmount: number;
      remoteAreaSurchargeAmount: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 공급사의 지역별 배송비 설정을 조회할 수 있습니다.
     * 지역별 배송비 사용 여부와 지역 설정 방식을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-supplier-user-s-regional-shipping-fee-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "regionalsurcharge": {
     *         "shop_no": 1,
     *         "supplier_id": "sampleid",
     *         "use_regional_surcharge": "T",
     *         "region_setting_type": "A",
     *         "jeju_surcharge_amount": "2200",
     *         "remote_area_surcharge_amount": "2500"
     *     }
     * }
     * ```
     */
    retrieveASupplierUserSRegionalShippingFeeSettings(
      input: RetrieveASupplierUserSRegionalShippingFeeSettingsInput,
      options?: RequestOptions<
        RetrieveASupplierUserSRegionalShippingFeeSettingsOutput['regionalsurcharge']
      >,
    ): Promise<
      AxiosResponse<RetrieveASupplierUserSRegionalShippingFeeSettingsOutput>
    >;
    /**
     * @description
     * 특정 공급사의 지역별 배송비 설정을 수정할 수 있습니다.
     * 지역별 배송비 사용 여부와 지역 설정 방식을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-supplier-user-s-regional-shipping-fee-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "regionalsurcharge": {
     *         "shop_no": 1,
     *         "supplier_id": "sampleid",
     *         "use_regional_surcharge": "F",
     *         "region_setting_type": "A",
     *         "jeju_surcharge_amount": 1500,
     *         "remote_area_surcharge_amount": 2000
     *     }
     * }
     * ```
     */
    updateASupplierUserSRegionalShippingFeeSettings(
      input: UpdateASupplierUserSRegionalShippingFeeSettingsInput,
      options?: RequestOptions<
        UpdateASupplierUserSRegionalShippingFeeSettingsOutput['regionalsurcharge']
      >,
    ): Promise<
      AxiosResponse<UpdateASupplierUserSRegionalShippingFeeSettingsOutput>
    >;
  }
}
