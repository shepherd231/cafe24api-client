import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90041
 *
 * @description
 * 쇼핑몰 상품이 일괄 수정된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export interface OnBulkProductUpdate {
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
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     */
    product_no: string;
    action: string;
  };
}
