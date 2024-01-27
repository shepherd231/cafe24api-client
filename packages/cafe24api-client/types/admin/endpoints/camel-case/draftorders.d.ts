import { AxiosResponse } from 'axios';
import { 
  Endpoint, 
  AdminRequestOptions, 
  Cafe24Datetime,
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from 'cafe24api-client';

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
    shopNo: any;
    /**
      * @description
      * 주문 번호
      * 
      * 
      */ 
    orderId: any;
    /**
      * @description
      * 가주문 가격 정보
      * 
      * 
      */ 
    paymentAmount: any;
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
    orderFromMobile: any;
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
    paymentMethod: any;
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
    shopNo?: any;
    /**
      * @description
      * 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    memberId?: any;
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
    orderFromMobile?: any;
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
    paymentMethod?: any;
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
    orderPlaceId?: any;
    /**
      * @description
      * 국가코드
      * 
      * 
      */ 
    countryCode?: any;
    /**
      * @description
      * PG사 명
      * 
      * 최대글자수 : [20자]
      */ 
    paymentGatewayName?: any;
    /**
      * @description
      * 수령자 명
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    receiverName: any;
    /**
      * @description
      * 수령자명 (영문)
      * 
      * 최대글자수 : [100자]
      */ 
    receiverNameEn?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 최대글자수 : [100자]
      */ 
    receiverNameFurigana?: any;
    /**
      * @description
      * 수령자 일반 전화
      * 
      * @required
      */ 
    receiverPhone: any;
    /**
      * @description
      * 수령자 휴대 전화
      * 
      * @required
      */ 
    receiverCellphone: any;
    /**
      * @description
      * 수령자 우편번호
      * 
      * 글자수 최소: [2자]~최대: [14자]
      */ 
    receiverZipcode?: any;
    /**
      * @description
      * 수령자 기본 주소
      * 
      * 
      */ 
    receiverAddress1?: any;
    /**
      * @description
      * 수령자 상세 주소
      * 
      * 
      */ 
    receiverAddress2?: any;
    /**
      * @description
      * 수령자 도시
      * 
      * 
      */ 
    receiverCity?: any;
    /**
      * @description
      * 수령자 주/지방
      * 
      * 
      */ 
    receiverState?: any;
    /**
      * @description
      * 배송 메세지
      * 
      * 
      */ 
    shippingMessage?: any;
    /**
      * @description
      * 주문자 이름
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    buyerName: any;
    /**
      * @description
      * 주문자 이메일
      * 
      * 이메일
      */ 
    buyerEmail?: any;
    /**
      * @description
      * 주문자 일반 전화
      * 
      * 
      */ 
    buyerPhone?: any;
    /**
      * @description
      * 주문자 휴대 전화
      * 
      * 
      */ 
    buyerCellphone?: any;
    /**
      * @description
      * 주문자 우편번호
      * 
      * @required
      * 
      * 글자수 최소: [2자]~최대: [14자]
      */ 
    buyerZipcode: any;
    /**
      * @description
      * 주문자 기본 주소
      * 
      * @required
      * 
      * 최대글자수 : [250자]
      */ 
    buyerAddress1: any;
    /**
      * @description
      * 주문자 상세 주소
      * 
      * @required
      */ 
    buyerAddress2: any;
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
    noShippingRequired?: any;
    /**
      * @description
      * 주문자 ip
      * 
      * IP
      */ 
    buyerIp?: any;
    /**
      * @description
      * 카드 거래 아이디
      * 
      * 최대글자수 : [100자]
      */ 
    transactionId?: any;
    /**
      * @description
      * 은행코드
      * 
      * 형식 : [a-z0-9_-]
      */ 
    bankCode?: any;
    /**
      * @description
      * 계좌번호
      * 
      * 최대글자수 : [30자]
      */ 
    bankAccountNo?: any;
    /**
      * @description
      * 예금주
      * 
      * 최대글자수 : [100자]
      */ 
    bankAccountOwnerName?: any;
    /**
      * @description
      * 배송 유형
      * 
      * A : 국내
      * B : 해외
      * 
      * 
      */ 
    shippingType?: any;
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
    sendOrderMessage?: any;
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
    sendPaymentGuideMessage?: any;
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
    sendOrderEmail?: any;
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
    clearanceInformationType?: any;
    /**
      * @description
      * 통관정보
      * 
      * 
      */ 
    clearanceInformation?: any;
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
    selfPaymentCancel?: any;
    /**
      * @description
      * 자체 결제 취소 URL
      * 
      * 
      */ 
    selfPaymentCancelUrl?: any;
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
    productNo: any;
    /**
      * @description
      * 상품코드
      * 
      * 
      */ 
    productCode: any;
    /**
      * @description
      * 상품옵션 아이디
      * 
      * 
      */ 
    optionId: any;
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
    productBundle?: any;
    /**
      * @description
      * 배송비 선결제 설정
      * P : 선불
      * C : 착불
      * 
      * 
      */ 
    prepaidShippingFee?: any;
    /**
      * @description
      * 세트상품번호
      * 
      * 
      */ 
    productBundleNo?: any;
    };
  }

  export interface CreateADraftOrderOutput {
    draftorders: { 
    shopNo: number;
    orderId: string;
    paymentAmount: { 
    totalAmount: number;
    totalDiscountAmount: number;
    };
    orderFromMobile: Cafe24Enum;
    paymentMethod: string;
    items: { 
    productNo: number;
    productCode: string;
    optionId: string;
    quantity: number;
    productBundle: Cafe24Enum;
    prepaidShippingFee: Cafe24Enum;
    productBundleNo: any;
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
      options?: AdminRequestOptions<CreateADraftOrderOutput['draftorders'][number]>,
    ): Promise<AxiosResponse<CreateADraftOrderOutput>>;
  }
}
