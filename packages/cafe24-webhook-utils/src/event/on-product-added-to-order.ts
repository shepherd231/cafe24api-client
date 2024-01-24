import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90031
 *
 * @description
 * 쇼핑몰에 접수된 주문에 상품을 추가한 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 */
export interface OnProductAddedToOrder {
  /**
   * @description
   * 이벤트 구분(타입)
   */
  event_no: number;
  resource: {
    mall_id: string;
    event_shop_no: string;
    order_id: string;
    payment_gateway_name: string;
    currency: string;
    order_date: Cafe24Datetime;
    order_place_name: string;
    member_id: string;
    member_authentication: Cafe24Enum;
    buyer_name: string;
    buyer_email: string;
    buyer_phone: string;
    buyer_cellphone: string;
    group_no_when_ordering: string;
    first_order: Cafe24Enum;
    order_from_mobile: Cafe24Enum;
    paid: Cafe24Enum;
    payment_date: Cafe24Datetime;
    billing_name: string;
    bank_code: string;
    payment_method: string;
    easypay_name: string;
    use_escrow: Cafe24Enum;
    bank_account_no: string;
    order_price_amount: string;
    membership_discount_amount: string;
    actual_payment_amount: string;
    mileage_spent_amount: string;
    cancel_date: any;
    shipping_fee: string;
    shipping_type: Cafe24Enum;
    shipping_status: Cafe24Enum;
    wished_delivery_date: string;
    wished_delivery_time: string;
    shipping_message: string;
    order_place_id: string;
    ordering_product_code: string;
    ordering_product_name: string;
  };
}
