import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90110
 *
 * @description
 * 쇼핑몰에 멀티쇼핑몰이 추가된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_supply
 *
 */
export interface OnMultiStoreAdded {
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
    language: string;
    /**
     * @description
     * 화폐단위
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    is_active: Cafe24Enum;
  };
}
