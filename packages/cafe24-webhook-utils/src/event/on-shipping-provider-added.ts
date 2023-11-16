import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90100
 *
 * @description
 * 쇼핑몰에 배송업체가 등록된 경우
 *
 * Required permissions:
 * - mall.read_shipping
 *
 */
export interface OnShippingProviderAdded {
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
     * 배송업체명
     *
     */
    sc_name: string;
    /**
     * @description
     * 기본배송사여부
     * T : 사용함
     * F : 사용안함
     */
    is_basic: Cafe24Enum;
    /**
     * @description
     * 대표 연락처
     *
     */
    phone1: Cafe24Datetime;
    /**
     * @description
     * 보조 연락처
     *
     */
    phone2: Cafe24Datetime;
    /**
     * @description
     * 이메일
     *
     */
    email: string;
    /**
     * @description
     * 기본 배송비
     *
     */
    shipping_money: Cafe24Datetime;
    homepage: string;
    /**
     * @description
     * 배송 추적 URL
     *
     */
    trace_url: Cafe24Datetime;
    /**
     * @description
     * 보내는 사람 이름
     *
     */
    sender_name: string;
    /**
     * @description
     * 보내는 사람 대표전화
     *
     */
    sender_phone: string;
    /**
     * @description
     * 보내는 사람 휴대전화
     *
     */
    sender_cellphone: string;
    /**
     * @description
     * 배송상품 무게
     *
     */
    weight: string;
    /**
     * @description
     * 배송상품 부피
     *
     */
    volume: string;
    /**
     * @description
     * 배송비 타입
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shipping_type: Cafe24Datetime;
    /**
     * @description
     * 박스 타입
     * 01 : 극소
     * 02 : 소
     * 03 : 중
     * 04 : 대
     * 05 : 특대
     */
    box_type: Cafe24Datetime;
    /**
     * @description
     * 보내는사람 주소(우편번호)
     *
     */
    sender_zipcode: Cafe24Datetime;
    /**
     * @description
     * 보내는사람 주소(기본주소)
     *
     */
    sender_address1: string;
    /**
     * @description
     * 보내는사람 주소(상세주소)
     *
     */
    sender_address2: string;
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
