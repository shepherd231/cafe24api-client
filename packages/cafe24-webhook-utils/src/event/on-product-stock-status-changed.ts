import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90150
 *
 * @description
 * 쇼핑몰에 등록된 상품의 품절상태가 변경된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export interface OnProductStockStatusChanged {
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
     * 상품 품절 여부
     * T : 품절, F : 품절 아님
     *
     */
    sold_out_by_current_shop: Cafe24Enum;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     */
    product_no: number;
    /**
     * @description
     * 전체 쇼핑몰의 상품 품절 여부
     * “1”:“T”,“2”:“F”
     *
     */
    sold_out: {
      1: Cafe24Enum;
      2: Cafe24Enum;
      3: Cafe24Enum;
    };
  };
}
