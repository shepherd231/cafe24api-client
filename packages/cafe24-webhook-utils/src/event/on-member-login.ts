import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90143
 *
 * @description
 * 쇼핑몰 회원이 로그인한 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnMemberLogin {
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
     * 회원 아이디
     *
     */
    member_id: string;
    /**
     * @description
     * 회원등급명
     *
     */
    group_name: string;
    /**
     * @description
     * 유입경로
     * PC : PC로 접속 / Mobile : 모바일로 접속 mobile Web
     */
    inflow_name: string;
  };
}
