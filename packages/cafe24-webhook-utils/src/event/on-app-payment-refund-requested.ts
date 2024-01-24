import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90158
 *
 * @description
 * 쇼핑몰에 설치된 앱의 결제 환불을 요청한 경우
 *
 */
export interface OnAppPaymentRefundRequested {
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
     * 환불 사유 코드
     * A : App의 기능이 정상동작 하지 않음
     * B : App으로 인해 쇼핑몰 성능이 저하됨
     * C : 개인정보유출 등 법적이슈가 있음
     * D : 안내된 기능을 모두 충족하지 못함
     * E : 구매자의 사유로 판매자와 합의하였음
     * Z : 기타사유
     */
    reason_code: Cafe24Enum;
    /**
     * @description
     * 상세사유
     */
    reason_detail: string;
    /**
     * @description
     * 요청일시
     */
    request_date: Cafe24Datetime;
  };
}
