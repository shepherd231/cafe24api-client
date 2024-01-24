import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90121
 *
 * @description
 * 내 쇼핑몰 정보 설정이 수정된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_supply
 *
 */
export interface OnMyStoreInfoSettingsUpdated {
  /**
   * @description
   * 이벤트 구분(타입)
   * 각 이벤트 NO. 참조
   */
  event_no: number;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     */
    mall_id: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     */
    shop_no: Cafe24Datetime;
    shop_name: string;
    /**
     * @description
     * 사업장 국가
     * 사업장이 있는 국가명
     *
     */
    country: string;
    /**
     * @description
     * 사업장 우편번호
     *
     */
    zipcode: Cafe24Datetime;
    /**
     * @description
     * 사업장 기본주소
     * 사업장의 주소 (시/군/도)
     *
     */
    address1: string;
    /**
     * @description
     * 사업장 상세주소
     *
     */
    address2: string;
    /**
     * @description
     * 대표전화
     *
     */
    president_phone: string;
  };
}
