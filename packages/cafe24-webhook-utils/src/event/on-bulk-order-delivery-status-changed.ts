import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90071
 *
 * @description
 * 쇼핑몰에 접수된 주문의 배송상태가 변경된 경우 (일괄)
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export interface OnBulkOrderDeliveryStatusChanged {
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
     * 주문번호
     *
     */
    order_id: string;
    /**
     * @description
     * 후불결제 포함여부
     *
     */
    included_deferpay_order: string;
    /**
     * @description
     * 후불결제 주문번호
     *
     */
    deferpay_order_id: string;
  };
}
