import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90080
 *
 * @description
 * 쇼핑몰 회원정보가 변경된 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnMemberInfoChanged {
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
  diff_key: string[];
  /**
   * @description
   * 회원정보 변경위치
   * EC_FRONT : 프론트 회원정보수정에서 수정
   * EC_ADMIN : 몰 어드민에서 관리자가 수정
   */
  sub_event_code: string;
}
