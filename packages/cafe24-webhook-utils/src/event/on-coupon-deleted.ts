import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90152
 *
 * @description
 * 쇼핑몰에 등록된 쿠폰이 삭제된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_promotion
 *
 */
export interface OnCouponDeleted {
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
    event_shop_no: number;
    /**
     * @description
     * 쿠폰타입
     * O : 온라인 쿠폰 / S : 오프라인 시리얼 쿠폰
     *
     */
    coupon_type: Cafe24Enum;
    /**
     * @description
     * 쿠폰번호
     *
     */
    coupon_no: number;
  };
}
