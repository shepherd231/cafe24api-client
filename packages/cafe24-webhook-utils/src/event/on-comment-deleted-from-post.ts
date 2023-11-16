import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90037
 *
 * @description
 * 쇼핑몰 게시물의 댓글이 삭제된 경우
 *
 * Required permissions:
 * - mall.read_community
 *
 */
export interface OnCommentDeletedFromPost {
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
    /**
     * @description
     * 댓글 작성자 ID
     *
     */
    comment_member_id: string;
    /**
     * @description
     * 댓글 작성자명
     *
     */
    comment_writer: string;
  };
}
