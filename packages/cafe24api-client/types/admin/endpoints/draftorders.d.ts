import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 가주문(Draftorders)은 주문 예약 처리를 할 수 있는 기능입니다.
   * 가주문을 통해 결제 전에 주문번호, 결제금액 등의 주문 정보를 미리 확인할 수 있습니다.
   */
  export interface Draftorders {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 주문 번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 가주문 가격 정보
      * 
      * 
      */ 
    payment_amount: any;
    /**
      * @description
      * 모바일 구분
      * 
      * T : 모바일 주문
      * F : 모바일 주문 아님
      * 
      * @default F
      * 
      * 
      */ 
    order_from_mobile: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * cash : 무통장
      * card : 신용카드
      * cell : 휴대폰
      * tcash : 계좌이체
      * icash : 가상계좌
      * prepaid : 선불금
      * credit : 예치금
      * point : 적립금
      * pointfy : 통합포인트
      * cvs : 편의점
      * cod : 후불
      * coupon : 쿠폰
      * market_discount : 마켓할인
      * etc : 기타
      * 
      * 최대글자수 : [10자]
      */ 
    payment_method: any;
    /**
      * @description
      * 주문상품목록
      * 
      * 
      */ 
    items: any;
  }

  export interface CreateADraftOrderInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    member_id?: any;
    /**
      * @description
      * 모바일 구분
      * 
      * T : 모바일 주문
      * F : PC 주문
      * 
      * @default F
      * 
      * 
      */ 
    order_from_mobile?: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * cash : 무통장
      * card : 신용카드
      * icash : 가상계좌
      * tcash : 계좌이체
      * cell : 휴대폰
      * deferpay : 후불결제
      * point : 적립금
      * 
      * 최대글자수 : [10자]
      */ 
    payment_method?: any;
    /**
      * @description
      * 주문경로
      * 
      * self : PC 쇼핑몰(카페24 주문만 사용가능)
      * mobile : 모바일웹(카페24 주문만 사용가능)
      * mobile_d : 모바일앱(카페24 주문만 사용가능)
      * PAYPALSMARTBUTTON : 페이팔 스마트 버튼
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [40자]
      */ 
    order_place_id?: any;
    /**
      * @description
      * 국가코드
      * 
      * 
      */ 
    country_code?: any;
    /**
      * @description
      * PG사 명
      * 
      * 최대글자수 : [20자]
      */ 
    payment_gateway_name?: any;
    /**
      * @description
      * 수령자 명
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    receiver_name: any;
    /**
      * @description
      * 수령자명 (영문)
      * 
      * 최대글자수 : [100자]
      */ 
    receiver_name_en?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 최대글자수 : [100자]
      */ 
    receiver_name_furigana?: any;
    /**
      * @description
      * 수령자 일반 전화
      * 
      * @required
      */ 
    receiver_phone: any;
    /**
      * @description
      * 수령자 휴대 전화
      * 
      * @required
      */ 
    receiver_cellphone: any;
    /**
      * @description
      * 수령자 우편번호
      * 
      * 글자수 최소: [2자]~최대: [14자]
      */ 
    receiver_zipcode?: any;
    /**
      * @description
      * 수령자 기본 주소
      * 
      * 
      */ 
    receiver_address1?: any;
    /**
      * @description
      * 수령자 상세 주소
      * 
      * 
      */ 
    receiver_address2?: any;
    /**
      * @description
      * 수령자 도시
      * 
      * 
      */ 
    receiver_city?: any;
    /**
      * @description
      * 수령자 주/지방
      * 
      * 
      */ 
    receiver_state?: any;
    /**
      * @description
      * 배송 메세지
      * 
      * 
      */ 
    shipping_message?: any;
    /**
      * @description
      * 주문자 이름
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    buyer_name: any;
    /**
      * @description
      * 주문자 이메일
      * 
      * 이메일
      */ 
    buyer_email?: any;
    /**
      * @description
      * 주문자 일반 전화
      * 
      * 
      */ 
    buyer_phone?: any;
    /**
      * @description
      * 주문자 휴대 전화
      * 
      * 
      */ 
    buyer_cellphone?: any;
    /**
      * @description
      * 주문자 우편번호
      * 
      * @required
      * 
      * 글자수 최소: [2자]~최대: [14자]
      */ 
    buyer_zipcode: any;
    /**
      * @description
      * 주문자 기본 주소
      * 
      * @required
      * 
      * 최대글자수 : [250자]
      */ 
    buyer_address1: any;
    /**
      * @description
      * 주문자 상세 주소
      * 
      * @required
      */ 
    buyer_address2: any;
    /**
      * @description
      * 배송 주소 없음
      * 
      * T: 배송 주소 없음
      * F: 배송 주소 있음
      * 
      * @default F
      * 
      * 
      */ 
    no_shipping_required?: any;
    /**
      * @description
      * 주문자 ip
      * 
      * IP
      */ 
    buyer_ip?: any;
    /**
      * @description
      * 카드 거래 아이디
      * 
      * 최대글자수 : [100자]
      */ 
    transaction_id?: any;
    /**
      * @description
      * 은행코드
      * 
      * 형식 : [a-z0-9_-]
      */ 
    bank_code?: any;
    /**
      * @description
      * 계좌번호
      * 
      * 최대글자수 : [30자]
      */ 
    bank_account_no?: any;
    /**
      * @description
      * 예금주
      * 
      * 최대글자수 : [100자]
      */ 
    bank_account_owner_name?: any;
    /**
      * @description
      * 배송 유형
      * 
      * A : 국내
      * B : 해외
      * 
      * 
      */ 
    shipping_type?: any;
    /**
      * @description
      * 신규 주문 안내 메세지 발송 여부
      * 
      * T : 발송함
      * F : 발송안함
      * 
      * @default F
      * 
      * 
      */ 
    send_order_message?: any;
    /**
      * @description
      * 입금 안내 메세지 발송 여부
      * 
      * T : 발송함
      * F : 발송안함
      * 
      * @default F
      * 
      * 
      */ 
    send_payment_guide_message?: any;
    /**
      * @description
      * 신규 주문 안내 메일 발송 여부
      * 
      * T : 발송함
      * F : 발송안함
      * 
      * @default F
      * 
      * 
      */ 
    send_order_email?: any;
    /**
      * @description
      * 통관정보 유형
      * 
      * I : 신분증 ID
      * P : 여권번호
      * C : 개인통관고유부호
      * 
      * 
      */ 
    clearance_information_type?: any;
    /**
      * @description
      * 통관정보
      * 
      * 
      */ 
    clearance_information?: any;
    /**
      * @description
      * 자체 결제 취소 여부
      * 
      * T: 취소가능
      * F: 취소불가
      * 
      * @default F
      * 
      * 
      */ 
    self_payment_cancel?: any;
    /**
      * @description
      * 자체 결제 취소 URL
      * 
      * 
      */ 
    self_payment_cancel_url?: any;
    /**
      * @description
      * 주문상품목록
      * 
      * 
      */ 
    items?: { 
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 상품코드
      * 
      * 
      */ 
    product_code: any;
    /**
      * @description
      * 상품옵션 아이디
      * 
      * 
      */ 
    option_id: any;
    /**
      * @description
      * 주문 수량
      * 
      * 
      */ 
    quantity: any;
    /**
      * @description
      * 세트상품 여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    product_bundle?: any;
    /**
      * @description
      * 배송비 선결제 설정
      * P : 선불
      * C : 착불
      * 
      * 
      */ 
    prepaid_shipping_fee?: any;
    /**
      * @description
      * 세트상품번호
      * 
      * 
      */ 
    product_bundle_no?: any;
    };
  }

  export interface CreateADraftOrderOutput {
    draftorders: { 
    shop_no: number;
    order_id: string;
    payment_amount: { 
    total_amount: number;
    total_discount_amount: number;
    };
    order_from_mobile: Cafe24Enum;
    payment_method: string;
    items: { 
    product_no: number;
    product_code: string;
    option_id: string;
    quantity: number;
    product_bundle: Cafe24Enum;
    prepaid_shipping_fee: Cafe24Enum;
    product_bundle_no: any;
    }[];
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문 예약 처리를 합니다.
     * 주문 예약 처리를 통해 결제 전에 주문번호,결제금액 등의 주문 정보를 미리 확인할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-draft-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "draftorders": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20210930-0000245",
     *             "payment_amount": {
     *                 "total_amount": 18500,
     *                 "total_discount_amount": 0
     *             },
     *             "order_from_mobile": "F",
     *             "payment_method": "cash",
     *             "items": [
     *                 {
     *                     "product_no": 11,
     *                     "product_code": "P000000L",
     *                     "option_id": "000A",
     *                     "quantity": 3,
     *                     "product_bundle": "F",
     *                     "prepaid_shipping_fee": "P",
     *                     "product_bundle_no": null
     *                 },
     *                 {
     *                     "product_no": 10,
     *                     "product_code": "P000000J",
     *                     "option_id": "000A",
     *                     "quantity": 1,
     *                     "product_bundle": "F",
     *                     "prepaid_shipping_fee": "P",
     *                     "product_bundle_no": null
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20211013-0000093",
     *             "payment_amount": {
     *                 "total_price": 6500,
     *                 "total_discount": 0
     *             },
     *             "order_from_mobile": "F",
     *             "payment_method": "cash",
     *             "items": [
     *                 {
     *                     "product_no": 11,
     *                     "product_code": "P000000L",
     *                     "option_id": "000A",
     *                     "quantity": 3,
     *                     "product_bundle": "F",
     *                     "prepaid_shipping_fee": "P",
     *                     "product_bundle_no": null
     *                 },
     *                 {
     *                     "product_no": 11,
     *                     "product_code": "P000000L",
     *                     "option_id": "000A",
     *                     "quantity": 1,
     *                     "product_bundle": "F",
     *                     "prepaid_shipping_fee": "P",
     *                     "product_bundle_no": null
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createADraftOrder(
      input: CreateADraftOrderInput,
      options?: RequestOptions<CreateADraftOrderOutput['draftorders'][number]>,
    ): Promise<AxiosResponse<CreateADraftOrderOutput>>;
  }
}
