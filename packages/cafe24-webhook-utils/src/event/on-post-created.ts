import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90033
 *
 * @description
 * 쇼핑몰에 게시물이 등록된 경우
 *
 * Required permissions:
 * - mall.read_community
 *
 */
export interface OnPostCreated {
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
     * 게시판 번호
     *
     */
    board_no: number;
    no: number;
    /**
     * @description
     * 게시물 여부
     * 쇼핑몰에 게시물이 등록된 경우
     * T : 있음
     * F : 없음
     */
    has_parent: Cafe24Enum;
    /**
     * @description
     * 회원 아이디
     *
     */
    member_id: string;
    /**
     * @description
     * 작성자명
     *
     */
    writer: string;
  };
}
