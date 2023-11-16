import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90114
 *
 * @description
 * 쇼핑몰에 등록된 부운영자가 수정된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_supply
 *
 */
export interface OnSuboperatorUpdated {
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
     * 부운영자ID
     *
     */
    sub_admin_id: string;
    /**
     * @description
     * 부운영자 타입
     * A : 쇼핑몰운영자
     * S : 공급사운영자
     */
    sub_admin_type: Cafe24Enum;
    /**
     * @description
     * 부운영자명
     * 기본몰에 설정된 부운영자명/공급사 운영자명만 제공
     */
    user_name: string;
    available: Cafe24Enum;
    /**
     * @description
     * 멀티쇼핑몰 접근권한
     * T : 허용함
     * F : 허용안함
     */
    multishop_access_authority: string;
  };
}
