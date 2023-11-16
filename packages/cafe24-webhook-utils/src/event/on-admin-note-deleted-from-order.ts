import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90069
 *
 * @description
 * 쇼핑몰에 접수된 주문에 관리자메모가 삭제된 경우
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
export interface OnAdminNoteDeletedFromOrder {
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
     * 관리자메모 변경일
     * 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
     */
    requested_date: Cafe24Datetime;
    /**
     * @description
     * 주문경로
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    order_place_id: string;
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
