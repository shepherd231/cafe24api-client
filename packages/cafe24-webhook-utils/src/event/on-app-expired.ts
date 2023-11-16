import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90078
 *
 * @description
 * 쇼핑몰에 설치된 앱이 만료된 경우
 *
 * Required permissions:
 * - mall.read_application
 *
 */
export interface OnAppExpired {
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
    /**
     * @description
     * 앱 만료일시
     */
    expired_date: Cafe24Datetime;
  };
}
