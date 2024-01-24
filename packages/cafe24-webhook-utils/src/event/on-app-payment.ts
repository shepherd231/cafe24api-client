import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90157
 *
 * @description
 * 쇼핑몰에 설치된 앱이 결제된 경우
 *
 */
export interface OnAppPayment {
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
     * 결제일시
     */
    payed_date: Cafe24Datetime;
    /**
     * @description
     * 결제통화
     */
    currency: string;
    /**
     * @description
     * 결제금액
     */
    amount: Cafe24Datetime;
    /**
     * @description
     * 요청채널
     * App : 인앱결제
     * Web : 유료결제
     */
    channel: string;
  };
}
