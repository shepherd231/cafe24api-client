import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 적립금 설정(Points setting)은 적립금 사용에 필요한 설정값을 관리하기 위한 기능입니다.
   */
  export interface PointsSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 적립금 지급 기준
      * 
      * C: 배송완료 후
      * P: 구매확정 후
      * 
      * 
      */ 
    point_issuance_standard: any;
    /**
      * @description
      * 적립금 지급 시점
      * 
      * 적립금 지급 기준이 C: 배송완료 후 일때 1/3/7/14/20을 입력할 수 있습니다.
      * 적립금 지급 기준이 P: 구매확정 후 일때 0/1/3/7/14/20을 입력할 수 있습니다.
      * 
      * 
      */ 
    payment_period: any;
    /**
      * @description
      * 적립금 명칭
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 적립금 표시 방식
      * 
      * 
      */ 
    format: any;
    /**
      * @description
      * 적립금 절사 단위
      * 
      * F : 절사안함
      * 0.01 : 0.01단위
      * 0.1 : 0.1단위
      * 1 : 1단위
      * 10 : 10단위
      * 100 : 100단위
      * 1000 : 1000단위
      * 
      * 
      */ 
    round_unit: any;
    /**
      * @description
      * 적립금 절사 방식
      * 
      * A : 내림
      * B : 반올림
      * C : 올림
      * 
      * 
      */ 
    round_type: any;
    /**
      * @description
      * 적립금 항목 노출 설정
      * 
      * P : 정율
      * W : 정액
      * WP : 정액/정율
      * PW : 정율/정액
      * 
      * 
      */ 
    display_type: any;
    /**
      * @description
      * 미가용 적립금 변환 기준 설정
      * 
      * M: 최초 상품 배송완료일/구매확정일 기준으로 적립
      * T: 마지막 상품 배송완료일/구매확정일 기준으로 적립
      * 
      * 
      */ 
    unusable_points_change_type: any;
  }

  export interface RetrievePointsSettingsInput {
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

  export interface RetrievePointsSettingsOutput {
    point: { 
    shop_no: number;
    point_issuance_standard: Cafe24Enum;
    payment_period: number;
    name: string;
    format: string;
    round_unit: Cafe24Datetime;
    round_type: Cafe24Enum;
    display_type: string;
    unusable_points_change_type: Cafe24Enum;
    };
  }
  export interface UpdatePointsSettingsInput {
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
      * 적립금 지급 기준
      * 
      * C: 배송완료 후
      * P: 구매확정 후
      * 
      * 
      */ 
    point_issuance_standard?: any;
    /**
      * @description
      * 적립금 지급 시점
      * 
      * 적립금 지급 기준이 C: 배송완료 후 일때 1/3/7/14/20을 입력할 수 있습니다.
      * 적립금 지급 기준이 P: 구매확정 후 일때 0/1/3/7/14/20을 입력할 수 있습니다.
      * 
      * 
      */ 
    payment_period?: any;
    /**
      * @description
      * 적립금 명칭
      * 
      * 
      */ 
    name?: any;
    /**
      * @description
      * 적립금 표시 방식
      * 
      * 
      */ 
    format?: any;
    /**
      * @description
      * 적립금 절사 단위
      * 
      * 화폐단위가 &#34;KRW&#34; &#34;JPY&#34; &#34;TWD&#34; &#34;VND&#34;일때 &#34;적립금 절사 단위&#34;를 F/1/10/100/1000을 입력할 수 있습니다.
      * 화폐단위가 &#34;KRW&#34; &#34;JPY&#34; &#34;TWD&#34; &#34;VND&#34;가 아닐때 &#34;적립금 절사 단위&#34;를 F/0.01/0.1/1/10을 입력할 수 있습니다.
      * 
      * 
      */ 
    round_unit?: any;
    /**
      * @description
      * 적립금 절사 방식
      * 
      * A : 내림
      * B : 반올림
      * C : 올림
      * 
      * 
      */ 
    round_type?: any;
    /**
      * @description
      * 적립금 항목 노출 설정
      * 
      * P : 정율
      * W : 정액
      * WP : 정액/정율
      * PW : 정율/정액
      * 
      * 
      */ 
    display_type?: any;
    /**
      * @description
      * 미가용 적립금 변환 기준 설정
      * 
      * M: 최초 상품 배송완료일/구매확정일 기준으로 적립
      * T: 마지막 상품 배송완료일/구매확정일 기준으로 적립
      * 
      * 
      */ 
    unusable_points_change_type?: any;
  }

  export interface UpdatePointsSettingsOutput {
    point: { 
    shop_no: number;
    point_issuance_standard: Cafe24Enum;
    payment_period: number;
    name: string;
    format: string;
    round_unit: Cafe24Datetime;
    round_type: Cafe24Enum;
    display_type: string;
    unusable_points_change_type: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 명칭, 지급 시점, 단위 등의 적립금 설정 값을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-points-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "point": {
     *         "shop_no": 1,
     *         "point_issuance_standard": "C",
     *         "payment_period": 20,
     *         "name": "mileage",
     *         "format": "$[:PRICE:]",
     *         "round_unit": "0.01",
     *         "round_type": "A",
     *         "display_type": "PW",
     *         "unusable_points_change_type": "M"
     *     }
     * }
     * ```
     */
    retrievePointsSettings(
      input: RetrievePointsSettingsInput,
      options?: RequestOptions<RetrievePointsSettingsOutput['point']>,
    ): Promise<AxiosResponse<RetrievePointsSettingsOutput>>;
    /**
     * @description
     * 적립금 설정 값을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-points-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "point": {
     *         "shop_no": 1,
     *         "point_issuance_standard": "C",
     *         "payment_period": 20,
     *         "name": "mileage",
     *         "format": "$[:PRICE:]",
     *         "round_unit": "100",
     *         "round_type": "A",
     *         "display_type": "PW",
     *         "unusable_points_change_type": "M"
     *     }
     * }
     * ```
     */
    updatePointsSettings(
      input: UpdatePointsSettingsInput,
      options?: RequestOptions<UpdatePointsSettingsOutput['point']>,
    ): Promise<AxiosResponse<UpdatePointsSettingsOutput>>;
  }
}
