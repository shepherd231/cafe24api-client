import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90077
 *
 * @description
 * 쇼핑몰에 설치된 앱이 삭제된 경우
 *
 * Required permissions:
 * - mall.read_application
 *
 */
export interface OnAppDeleted {
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
     * 앱 삭제일시
     */
    deleted_date: Cafe24Datetime;
  };
}
