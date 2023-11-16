import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90142
 *
 * @description
 * 카카오싱크 설정이 변경된 경우
 *
 * Required permissions:
 * - mall.read_store
 *
 */
export interface OnKakaoSyncSettingsChanged {
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
     * 카카오싱크 설정상태
     * T : 사용함
     * F : 사용안함
     */
    kakaosync_used: Cafe24Enum;
    client_id: string;
  };
}
