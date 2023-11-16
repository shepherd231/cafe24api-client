import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90084
 *
 * @description
 * 쇼핑몰 상품이 장바구니에 담긴 경우
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
export interface OnProductAddedToCart {
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
    shop_no: number;
    /**
     * @description
     * 회원 아이디
     *
     */
    member_id: string;
    /**
     * @description
     * 배송비 타입
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shipping_type: Cafe24Enum;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     */
    product_no: number;
    variant_code: string;
    quantity: number;
    product_bundle: Cafe24Enum;
  };
}
