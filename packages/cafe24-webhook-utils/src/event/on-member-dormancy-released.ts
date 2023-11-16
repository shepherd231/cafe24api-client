import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90146
 *
 * @description
 * 쇼핑몰에 회원이 휴면회원 해제된 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnMemberDormancyReleased {
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
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     */
    event_shop_no: Cafe24Datetime;
    /**
     * @description
     * 회원 아이디
     *
     */
    member_id: string;
  };
}
