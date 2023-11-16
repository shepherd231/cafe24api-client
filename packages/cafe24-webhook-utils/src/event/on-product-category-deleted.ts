import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90044
 *
 * @description
 * 쇼핑몰에서 상품분류가 삭제된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_product
 *
 */
export interface OnProductCategoryDeleted {
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
     * 상품분류의 고유한 일련 번호
     *
     */
    category_no: number;
  };
}
