import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90159
 *
 * @description
 * 쇼핑몰에 설치된 앱의 결제 환불이 완료된 경우
 *
 */
export interface OnAppPaymentRefundCompleted {
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
     * 주문번호
     */
    order_id: string;
    /**
     * @description
     * 결제통화
     */
    currency: string;
    /**
     * @description
     * 환불금액
     */
    refunded_amount: string;
    expire_date: Cafe24Datetime;
    /**
     * @description
     * 환불일시
     */
    refunded_date: Cafe24Datetime;
  };
}
