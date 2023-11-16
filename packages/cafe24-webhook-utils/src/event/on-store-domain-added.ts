import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90117
 *
 * @description
 * 쇼핑몰 도메인이 추가된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_supply
 *
 */
export interface OnStoreDomainAdded {
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
     * 도메인 주소
     *
     */
    domain: string;
  };
}
