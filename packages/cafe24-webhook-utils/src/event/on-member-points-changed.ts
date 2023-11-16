import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90148
 *
 * @description
 * 쇼핑몰 회원의 적립금이 변동된 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnMemberPointsChanged {
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
    shop_no: Cafe24Datetime;
    /**
     * @description
     * 회원 아이디
     *
     */
    member_id: string;
    mileage_money: number;
    avail_mileage: number;
    issue_datetime: Cafe24Datetime;
    /**
     * @description
     * 적립금 타입 코드
     * A, B, C 등
     */
    case: Cafe24Enum;
    /**
     * @description
     * 적립금 타입
     * 관리자 직접 적림금 부여, 주문취소로 인한 환불시 환불금을 적립금으로 부여 등
     */
    case_text: string;
    /**
     * @description
     * 적립 사유
     * API를 활용하여 적립금 증차감 시 입력한 사유가 출력됩니다.
     */
    reason: any;
  };
}
