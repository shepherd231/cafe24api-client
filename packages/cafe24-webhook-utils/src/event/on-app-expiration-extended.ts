import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90079
 *
 * @description
 * 쇼핑몰에 설치된 앱의 만료일이 연장된 경우
 *
 * Required permissions:
 * - mall.read_application
 *
 */
export interface OnAppExpirationExtended {
  /**
   * @description
   * 이벤트 구분(타입)
   */
  event_no: number;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mall_id: string;
    /**
     * @description
     * 앱 ID
     */
    client_id: string;
    /**
     * @description
     * 앱 관리 상품명
     */
    app_name: string;
    expire_date: Cafe24Datetime;
    /**
     * @description
     * 앱 만료일 연장 이전의 기존 만료일시
     */
    previous_expire_date: Cafe24Datetime;
    /**
     * @description
     * 앱 만료일 연장 일시
     */
    updated_date: Cafe24Datetime;
  };
}
