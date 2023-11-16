import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90154
 *
 * @description
 * 쇼핑몰 쿠폰의 발급 상태가 변경된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_promotion
 *
 */
export interface OnCouponIssuanceStatusChanged {
  /**
   * @description
   * 이벤트 구분(타입)
   * 각 이벤트 NO. 참조
   */
  event_no: Cafe24Datetime;
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
    event_shop_no: number;
    /**
     * @description
     * 쿠폰번호
     *
     */
    coupon_no: number;
    coupon_name: string;
    /**
     * @description
     * 쿠폰 발급 상태 코드
     *
     */
    issue_status_code: string;
    /**
     * @description
     * 쿠폰 발급 상태
     * 발급중
     *
     */
    issue_status: string;
    /**
     * @description
     * 발급 상태 변경 유형
     * pause : 발급 중지 / restart : 발급 재개
     *
     */
    mode: string;
    /**
     * @description
     * 발급 상태 변경 유형 상세
     * 발급 중지 유형) later : 발급 중지 기간 설정 / now : 즉시 발급 중지
     * 발급 재개 유형) later : 발급 중지 해제일 변경 / now : 즉시 발급 재개
     *
     */
    type: string;
    /**
     * @description
     * 시작일시
     *
     */
    start_date: Cafe24Datetime;
    /**
     * @description
     * 해제일시
     * 즉시 발급 중지일 경우 빈 값으로 나타납니다.
     */
    end_date: Cafe24Datetime;
  };
}
