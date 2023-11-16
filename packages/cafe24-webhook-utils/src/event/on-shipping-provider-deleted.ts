import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90102
 *
 * @description
 * 쇼핑몰에 등록된 배송업체가 삭제된 경우
 *
 * Required permissions:
 * - mall.read_shipping
 *
 */
export interface OnShippingProviderDeleted {
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
     * 배송업체 ID
     *
     */
    sc_id: Cafe24Datetime;
    /**
     * @description
     * 처리자 ID
     *
     */
    executor_id: string;
    /**
     * @description
     * 처리자 구분
     *
     */
    execute_method: string;
  };
}
