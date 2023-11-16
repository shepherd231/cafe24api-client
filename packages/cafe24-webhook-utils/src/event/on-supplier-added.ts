import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90090
 *
 * @description
 * 쇼핑몰에 공급사가 등록된 경우
 *
 * Required permissions:
 * - mall.read_supply
 *
 */
export interface OnSupplierAdded {
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
     * 공급사 코드
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplier_code: string;
    /**
     * @description
     * 공급사명
     *
     */
    supplier_name: string;
    /**
     * @description
     * 공급사 사용여부
     * T: 사용함
     * F: 사용안함
     */
    use_supplier: Cafe24Enum;
    /**
     * @description
     * 공급사 유형
     * D: 사입
     * C: 직배송
     */
    trading_type: Cafe24Enum;
    /**
     * @description
     * 공급사 구조
     * WS: 도매업체
     * SF: 사입업체
     * BS: 입점업체
     * ET: 기타
     */
    supplier_type: string;
    /**
     * @description
     * 거래상태
     * A: 거래중
     * P: 거래중지
     * N: 거래해지
     */
    status: Cafe24Enum;
    /**
     * @description
     * 정산유형
     * P : 수수료형
     * D : 매입형
     */
    payment_type: Cafe24Enum;
    /**
     * @description
     * 수수료율
     *
     */
    commission: string;
    /**
     * @description
     * 정산주기
     * 0: 선택안함
     * C: 일일정산
     * B: 주간정산
     * A: 월간정산
     */
    payment_period: Cafe24Enum;
  };
}
