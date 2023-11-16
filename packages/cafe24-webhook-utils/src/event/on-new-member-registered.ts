import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90032
 *
 * @description
 * 쇼핑몰에 신규 회원이 가입한 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnNewMemberRegistered {
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
     * 회원 아이디
     *
     */
    member_id: string;
    group_no: number;
    /**
     * @description
     * 주문자명
     *
     */
    name: string;
    /**
     * @description
     * 운영자 별명
     * 최대글자수 : [50자]
     */
    nick_name: string;
    /**
     * @description
     * 회원 영문이름
     *
     */
    name_english: string;
    /**
     * @description
     * 회원 이름 발음 표기(일본어)
     *
     */
    name_phonetic: string;
    /**
     * @description
     * 가입일
     *
     */
    created_date: Cafe24Datetime;
    /**
     * @description
     * 회원 인증 여부
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    member_authentication: Cafe24Enum;
    /**
     * @description
     * 해당 회원의 생일
     *
     */
    birthday: string;
    /**
     * @description
     * 성별
     * M : 남자
     * F : 여자
     */
    gender: string;
    /**
     * @description
     * 일반 전화
     *
     */
    phone: string;
    /**
     * @description
     * 휴대 전화
     *
     */
    cellphone: string;
    /**
     * @description
     * SMS 수신여부
     * T : 수신
     * F : 수신안함
     */
    sms: Cafe24Enum;
    /**
     * @description
     * 이메일
     *
     */
    email: string;
    /**
     * @description
     * 뉴스메일 수신여부
     * T : 수신
     * F : 수신안함
     */
    news_mail: Cafe24Enum;
    /**
     * @description
     * 총 마일리지
     *
     */
    total_mileage: string;
    /**
     * @description
     * 가용 마일리지
     *
     */
    available_mileage: string;
    /**
     * @description
     * 추천인 ID
     *
     */
    recommend_id: string;
    /**
     * @description
     * 지역코드
     *
     */
    residence: string;
    /**
     * @description
     * 모바일앱 사용여부
     * T : 사용
     * F : 사용안함
     */
    use_mobile_app: Cafe24Enum;
    /**
     * @description
     * 회원타입
     * p : 개인
     * c : 사업자
     * f : 외국인
     */
    member_type: string;
  };
}
