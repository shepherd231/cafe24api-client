import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90029
 *
 * @description
 * 쇼핑몰에 접수된 주문의 환불상태가 변경된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export interface OnOrderRefundStatusChanged {
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
     * 주문번호
     *
     */
    order_id: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     */
    payment_gateway_name: string;
    /**
     * @description
     * 화폐단위
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     * date
     */
    order_date: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     */
    order_place_name: string;
    /**
     * @description
     * 회원 아이디
     *
     */
    member_id: string;
    /**
     * @description
     * 회원 인증 여부
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    member_authentication: any;
    /**
     * @description
     * 주문자명
     *
     */
    buyer_name: string;
    /**
     * @description
     * 주문자 이메일
     *
     */
    buyer_email: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     */
    buyer_phone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     */
    buyer_cellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     */
    group_no_when_ordering: Cafe24Datetime;
    /**
     * @description
     * 최초 주문여부
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    first_order: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    order_from_mobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     * date
     */
    payment_date: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     */
    billing_name: string;
    /**
     * @description
     * 은행코드
     * bank_code
     */
    bank_code: string;
    /**
     * @description
     * 결제수단 코드
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    payment_method: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     */
    easypay_name: string;
    /**
     * @description
     * 에스크로 사용여부
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    use_escrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     */
    bank_account_no: string;
    /**
     * @description
     * 주문금액
     *
     */
    order_price_amount: Cafe24Datetime;
    /**
     * @description
     * 회원할인금액
     *
     */
    membership_discount_amount: string;
    /**
     * @description
     * 실결제금액
     *
     */
    actual_payment_amount: Cafe24Datetime;
    /**
     * @description
     * 적립금 사용금액
     *
     */
    mileage_spent_amount: string;
    /**
     * @description
     * 주문취소일
     *
     */
    cancel_date: any;
    /**
     * @description
     * 배송비
     *
     */
    shipping_fee: string;
    /**
     * @description
     * 배송비 타입
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shipping_type: Cafe24Enum;
    /**
     * @description
     * 배송상태
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shipping_status: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     */
    wished_delivery_date: string;
    /**
     * @description
     * 희망배송시간
     *
     */
    wished_delivery_time: any;
    /**
     * @description
     * 반품승인일시
     *
     */
    return_confirmed_date: any;
    /**
     * @description
     * 매장수령여부
     * T : 매장수령
     * F : 매장수령 아님
     */
    store_pickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     */
    shipping_message: string;
    /**
     * @description
     * 주문경로
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    order_place_id: string;
    /**
     * @description
     * 주문 상품
     *
     */
    ordering_product_code: string;
    /**
     * @description
     * 주문 상품명
     *
     */
    ordering_product_name: string;
  };
}
