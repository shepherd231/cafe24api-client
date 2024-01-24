import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 정기배송(Subscription shipments)은 정기배송에 대한 조회, 등록, 수정, 삭제를 할 수 있는 기능입니다.
   */
  export interface SubscriptionShipments {
    /**
     * @description
     * 정기배송 신청번호
     *
     *
     */
    subscription_id: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 주문자 이름
     *
     *
     */
    buyer_name: any;
    /**
     * @description
     * 주문자 우편번호
     *
     *
     */
    buyer_zipcode: any;
    /**
     * @description
     * 주문자 기본 주소
     *
     *
     */
    buyer_address1: any;
    /**
     * @description
     * 주문자 상세 주소
     *
     *
     */
    buyer_address2: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyer_phone: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyer_cellphone: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyer_email: any;
    /**
     * @description
     * 수령자 명
     *
     * 최대글자수 : [100자]
     */
    receiver_name: any;
    /**
     * @description
     * 수령자 우편번호
     *
     *
     */
    receiver_zipcode: any;
    /**
     * @description
     * 수령자 기본 주소
     *
     *
     */
    receiver_address1: any;
    /**
     * @description
     * 수령자 상세 주소
     *
     *
     */
    receiver_address2: any;
    /**
     * @description
     * 수령자 일반 전화
     *
     *
     */
    receiver_phone: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     *
     */
    receiver_cellphone: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shipping_message: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     *
     */
    delivery_type: any;
    /**
     * @description
     * 희망배송일 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wished_delivery: any;
    /**
     * @description
     * 희망배송시작시간
     *
     *
     */
    wished_delivery_start_hour: any;
    /**
     * @description
     * 희망배송종료시간
     *
     *
     */
    wished_delivery_end_hour: any;
    /**
     * @description
     * 가능한 빠른 배송시간
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wished_delivery_hour_asap: any;
    /**
     * @description
     * 스토어픽업
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    store_pickup: any;
    /**
     * @description
     * 안심번호
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_virtual_phone_no: any;
    /**
     * @description
     * 신청일자
     *
     *
     */
    created_date: any;
    /**
     * @description
     * 정기배송 상태
     *
     * U:이용중
     * P: 일시정지
     * C:해지
     *
     *
     */
    subscription_state: any;
    /**
     * @description
     * 주문상품목록
     *
     *
     */
    items: any;
  }

  export interface RetrieveASubscriptionInput {
    /**
     * @description
     * 검색날짜 유형
     *
     * created_date : 신청일
     * expected_pay_date : 결제예정일
     * terminated_date : 해지일
     *
     * @default created_date
     *
     *
     */
    date_type?: any;
    /**
     * @description
     * 검색 시작일
     *
     * @required
     *
     * 날짜
     */
    start_date: any;
    /**
     * @description
     * 검색 종료일
     *
     * @required
     *
     * 날짜
     */
    end_date: any;
    /**
     * @description
     * 정기배송 신청번호
     *
     *
     */
    subscription_id?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
    /**
     * @description
     * 주문자 이름
     *
     * 최대글자수 : [100자]
     */
    buyer_name?: any;
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
     * 상품번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_no?: any;
    /**
     * @description
     * 상품명
     *
     * 최대글자수 : [250자]
     */
    product_name?: any;
    /**
     * @description
     * 상품코드
     *
     *
     */
    product_code?: any;
    /**
     * @description
     * 품목코드
     *
     *
     */
    variant_code?: any;
    /**
     * @description
     * 배송주기
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     *
     */
    subscription_shipments_cycle?: any;
    /**
     * @description
     * 정기배송 상태
     *
     * U:이용중
     * P: 일시정지
     * C:해지
     *
     *
     */
    subscription_state?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 20
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [5000]
     */
    offset?: any;
  }

  export interface RetrieveASubscriptionOutput {
    shipments: {
      subscription_id: string;
      member_id: string;
      buyer_name: string;
      buyer_zipcode: string;
      buyer_address1: string;
      buyer_address2: string;
      buyer_phone: string;
      buyer_cellphone: string;
      buyer_email: string;
      receiver_name: string;
      receiver_zipcode: string;
      receiver_address1: string;
      receiver_address2: string;
      receiver_phone: string;
      receiver_cellphone: string;
      shipping_message: string;
      shipping_type: Cafe24Enum;
      wished_delivery: Cafe24Enum;
      wished_delivery_start_hour: Cafe24Datetime;
      wished_delivery_end_hour: string;
      wished_delivery_hour_asap: Cafe24Enum;
      created_date: Cafe24Date;
      terminated_date: any;
      subscription_state: Cafe24Enum;
      items: {
        variants_code: string;
        product_code: string;
        product_no: Cafe24Datetime;
        product_name: string;
        option_value: string;
        option_value_default: string;
        option_id: string;
        quantity: number;
        product_price: Cafe24Datetime;
        option_price: string;
        shipping_payment_option: Cafe24Enum;
        subscription_shipments_sequence: number;
        subscription_state: Cafe24Enum;
        expected_pay_date: Cafe24Date;
        terminated_date: any;
        product_bundle: Cafe24Enum;
        product_bundle_price: any;
        bundle_product_components: {
          variants_code: any;
          product_code: any;
          product_no: any;
          product_name: any;
          option_value: any;
          option_value_default: any;
          option_id: any;
          quantity: any;
          product_price: any;
          option_price: any;
        }[];
      }[];
    }[];
  }
  export interface CreateASubscriptionInput {
    /**
     * @description
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
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
     * 주문자 일반 전화
     *
     * 최대글자수 : [20자]
     */
    buyer_phone?: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    buyer_cellphone: any;
    /**
     * @description
     * 주문자 이메일
     *
     * @required
     *
     * 이메일
     */
    buyer_email: any;
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
     * 수령자 우편번호
     *
     * @required
     *
     * 글자수 최소: [2자]~최대: [13자]
     */
    receiver_zipcode: any;
    /**
     * @description
     * 수령자 기본 주소
     *
     * @required
     */
    receiver_address1: any;
    /**
     * @description
     * 수령자 상세 주소
     *
     * @required
     */
    receiver_address2: any;
    /**
     * @description
     * 수령자 일반 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    receiver_phone: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    receiver_cellphone: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shipping_message?: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     * @default A
     *
     *
     */
    delivery_type?: any;
    /**
     * @description
     * 배송시작일
     *
     * @required
     *
     * 날짜
     */
    expected_delivery_date: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     * @required
     */
    subscription_shipments_cycle: any;
    /**
     * @description
     * 희망배송일 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    wished_delivery?: any;
    /**
     * @description
     * 희망배송시작시간
     *
     * 최소: [0]~최대: [23]
     */
    wished_delivery_start_hour?: any;
    /**
     * @description
     * 희망배송종료시간
     *
     * 최소: [0]~최대: [23]
     */
    wished_delivery_end_hour?: any;
    /**
     * @description
     * 가능한 빠른 배송시간
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wished_delivery_hour_asap?: any;
    /**
     * @description
     * 스토어픽업
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    store_pickup?: any;
    /**
     * @description
     * 안심번호
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    use_virtual_phone_no?: any;
    /**
     * @description
     * 주문상품목록
     *
     *
     */
    items?: {
      /**
       * @description
       * 상품코드
       *
       *
       */
      product_code: any;
      /**
       * @description
       * 상품번호
       *
       *
       */
      product_no: any;
      /**
       * @description
       * 상품명
       *
       *
       */
      product_name: any;
      options?: any[];
      /**
       * @description
       * 상품옵션 아이디
       * @default 000A
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
       * 상품 판매가
       *
       *
       */
      product_price: any;
      /**
       * @description
       * 옵션 추가 가격
       *
       *
       */
      option_price?: any;
      /**
       * @description
       * 선/착불 구분
       * C : 착불
       * P : 선결제
       * F : 무료
       *
       *
       */
      shipping_payment_option?: any;
      /**
       * @description
       * 분류 번호
       *
       *
       */
      category_no?: any;
      /**
       * @description
       * 세트상품 여부
       * T : 세트상품
       * F : 세트상품 아님
       * @default F
       *
       *
       */
      product_bundle?: any;
      bundle_product_components?: any[];
    };
  }

  export interface CreateASubscriptionOutput {
    shipments: {
      subscription_id: string;
      items: {
        variant_code: string;
        option_id: string;
      }[];
    }[];
  }
  export interface UpdateASubscriptionInput {
    /**
     * @description
     * 정기배송 신청번호
     *
     * @required
     */
    subscription_id: any;
    /**
     * @description
     * 수령자 명
     *
     * 최대글자수 : [100자]
     */
    receiver_name?: any;
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
     * 수령자 일반 전화
     *
     * 최대글자수 : [20자]
     */
    receiver_phone?: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     * 최대글자수 : [20자]
     */
    receiver_cellphone?: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shipping_message?: any;
    /**
     * @description
     * 정기배송 상태
     *
     * U:이용중
     * P:일시정지
     * C:해지
     *
     *
     */
    subscription_state?: any;
  }

  export interface UpdateASubscriptionOutput {
    shipments: {
      receiver_name: string;
      receiver_zipcode: string;
      receiver_address1: string;
      receiver_address2: string;
      receiver_phone: string;
      receiver_cellphone: string;
      shipping_message: string;
      subscription_state: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 정기배송을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-subscription
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "subscription_id": "S-20210716-00000001",
     *             "member_id": "sampleid",
     *             "buyer_name": "John Doe",
     *             "buyer_zipcode": "123-456",
     *             "buyer_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "buyer_address2": "Professional Construction Hall",
     *             "buyer_phone": "02-0000-0000",
     *             "buyer_cellphone": "010-0000-0000",
     *             "buyer_email": "sample@sample.com",
     *             "receiver_name": "Jane Doe",
     *             "receiver_zipcode": "123-456",
     *             "receiver_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "receiver_address2": "Professional Construction Hall",
     *             "receiver_phone": "02-0000-0000",
     *             "receiver_cellphone": "010-0000-0000",
     *             "shipping_message": "Do Not Knock or Ring Bell",
     *             "shipping_type": "A",
     *             "wished_delivery": "T",
     *             "wished_delivery_start_hour": "10",
     *             "wished_delivery_end_hour": "18",
     *             "wished_delivery_hour_asap": "F",
     *             "created_date": "2021-05-16",
     *             "terminated_date": null,
     *             "subscription_state": "U",
     *             "items": [
     *                 {
     *                     "variants_code": "P000000I000A",
     *                     "product_code": "P000000I",
     *                     "product_no": "9",
     *                     "product_name": "iPhone X",
     *                     "option_value": "Color=Black, Size=XL",
     *                     "option_value_default": "Color=Black, Size=XL",
     *                     "option_id": "000A",
     *                     "quantity": 2,
     *                     "product_price": "5000.00",
     *                     "option_price": "0.00",
     *                     "shipping_payment_option": "P",
     *                     "subscription_shipments_sequence": 1,
     *                     "subscription_state": "U",
     *                     "expected_pay_date": "2021-07-20",
     *                     "terminated_date": null,
     *                     "product_bundle": "F",
     *                     "product_bundle_price": null,
     *                     "bundle_product_components": [
     *                         {
     *                             "variants_code": null,
     *                             "product_code": null,
     *                             "product_no": null,
     *                             "product_name": null,
     *                             "option_value": null,
     *                             "option_value_default": null,
     *                             "option_id": null,
     *                             "quantity": null,
     *                             "product_price": null,
     *                             "option_price": null
     *                         }
     *                     ]
     *                 },
     *                 {
     *                     "variants_code": "P000000A000B",
     *                     "product_code": "P000000A",
     *                     "product_no": "10",
     *                     "product_name": "Galaxy S",
     *                     "option_value": "Color=Black, Size=XL",
     *                     "option_value_default": "Color=Black, Size=XL",
     *                     "option_id": "000B",
     *                     "quantity": 2,
     *                     "product_price": "10000.00",
     *                     "option_price": "0.00",
     *                     "shipping_payment_option": "C",
     *                     "subscription_shipments_sequence": 1,
     *                     "subscription_state": "U",
     *                     "expected_pay_date": "2021-07-20",
     *                     "terminated_date": null,
     *                     "product_bundle": "F",
     *                     "product_bundle_price": null,
     *                     "bundle_product_components": [
     *                         {
     *                             "variants_code": null,
     *                             "product_code": null,
     *                             "product_no": null,
     *                             "product_name": null,
     *                             "option_value": null,
     *                             "option_value_default": null,
     *                             "option_id": null,
     *                             "quantity": null,
     *                             "product_price": null,
     *                             "option_price": null
     *                         }
     *                     ]
     *                 }
     *             ]
     *         },
     *         {
     *             "subscription_id": "S-20210716-00000002",
     *             "member_id": "sampleid",
     *             "buyer_name": "John Doe",
     *             "buyer_zipcode": "123-456",
     *             "buyer_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "buyer_address2": "Professional Construction Hall",
     *             "buyer_phone": "02-0000-0000",
     *             "buyer_cellphone": "010-0000-0000",
     *             "buyer_email": "sample@sample.com",
     *             "receiver_name": "Jane Doe",
     *             "receiver_zipcode": "123-456",
     *             "receiver_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "receiver_address2": "Professional Construction Hall",
     *             "receiver_phone": "02-0000-0000",
     *             "receiver_cellphone": "010-0000-0000",
     *             "shipping_message": "Do Not Knock or Ring Bell",
     *             "shipping_type": "A",
     *             "wished_delivery": "F",
     *             "wished_delivery_start_hour": "0",
     *             "wished_delivery_end_hour": "23",
     *             "wished_delivery_hour_asap": "F",
     *             "created_date": "2021-05-16",
     *             "terminated_date": null,
     *             "subscription_state": "C",
     *             "items": [
     *                 {
     *                     "variants_code": "P000000I000A",
     *                     "product_code": "P000000I",
     *                     "product_no": "9",
     *                     "product_name": "iPhone X",
     *                     "option_value": "Color=Black, Size=XL",
     *                     "option_value_default": "Color=Black, Size=XL",
     *                     "option_id": "000A",
     *                     "quantity": 2,
     *                     "product_price": "5000.00",
     *                     "option_price": "0.00",
     *                     "shipping_payment_option": "P",
     *                     "subscription_shipments_sequence": 1,
     *                     "subscription_state": "M",
     *                     "expected_pay_date": "2021-07-20",
     *                     "terminated_date": null,
     *                     "product_bundle": "F",
     *                     "product_bundle_price": null,
     *                     "bundle_product_components": [
     *                         {
     *                             "variants_code": null,
     *                             "product_code": null,
     *                             "product_no": null,
     *                             "product_name": null,
     *                             "option_id": null,
     *                             "option_value": null,
     *                             "option_value_default": null,
     *                             "quantity": null,
     *                             "product_price": null,
     *                             "option_price": null
     *                         }
     *                     ]
     *                 },
     *                 {
     *                     "variants_code": "P000000A000B",
     *                     "product_code": "P000000A",
     *                     "product_no": "10",
     *                     "product_name": "Galaxy S",
     *                     "option_value": null,
     *                     "option_value_default": "",
     *                     "option_id": "000B",
     *                     "quantity": 2,
     *                     "product_price": "10000.00",
     *                     "option_price": "0.00",
     *                     "shipping_payment_option": "C",
     *                     "subscription_shipments_sequence": 1,
     *                     "subscription_state": "O",
     *                     "expected_pay_date": "2021-07-20",
     *                     "terminated_date": null,
     *                     "product_bundle": "T",
     *                     "product_bundle_price": "1000.00",
     *                     "bundle_product_components": [
     *                         {
     *                             "variants_code": "P000000Z000A",
     *                             "product_code": "P000000Z",
     *                             "product_no": "25",
     *                             "product_name": "Protection Film",
     *                             "option_id": "000A",
     *                             "option_value": "Color=Black, Size=XL",
     *                             "option_value_default": "Color=Black, Size=XL",
     *                             "quantity": 1,
     *                             "product_price": "6000.00",
     *                             "option_price": "0.00"
     *                         },
     *                         {
     *                             "variants_code": "P000000J000A",
     *                             "product_code": "P000000J",
     *                             "product_no": "26",
     *                             "product_name": "Case",
     *                             "option_id": "000A",
     *                             "option_value": "Color=Black, Size=XL",
     *                             "option_value_default": "Color=Black, Size=XL",
     *                             "quantity": 1,
     *                             "product_price": "5000.00",
     *                             "option_price": "0.00"
     *                         }
     *                     ]
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveASubscription(
      input: RetrieveASubscriptionInput,
      options?: RequestOptions<
        RetrieveASubscriptionOutput['shipments'][number]
      >,
    ): Promise<AxiosResponse<RetrieveASubscriptionOutput>>;
    /**
     * @description
     * 정기배송을 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-subscription
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "subscription_id": "S-20180302-0000016",
     *             "items": [
     *                 {
     *                     "variant_code": "P000000I000A",
     *                     "option_id": "000A"
     *                 },
     *                 {
     *                     "variant_code": "P000000A000B",
     *                     "option_id": "000B"
     *                 }
     *             ]
     *         },
     *         {
     *             "subscription_id": "S-20180302-0000017",
     *             "items": [
     *                 {
     *                     "variant_code": "P000000I000A",
     *                     "option_id": "000A"
     *                 },
     *                 {
     *                     "variant_code": "P000000A000B",
     *                     "option_id": "000B"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createASubscription(
      input: CreateASubscriptionInput,
      options?: RequestOptions<CreateASubscriptionOutput['shipments'][number]>,
    ): Promise<AxiosResponse<CreateASubscriptionOutput>>;
    /**
     * @description
     * 정기배송 정보를 수정할 수 있습니다.
     * 정기배송 신청번호는 필수 입력값입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-subscription
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": {
     *         "receiver_name": "Jane Doe",
     *         "receiver_zipcode": "123-456",
     *         "receiver_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "receiver_address2": "Professional Construction Hall",
     *         "receiver_phone": "02-0000-0000",
     *         "receiver_cellphone": "010-0000-0000",
     *         "shipping_message": "Do Not Knock or Ring Bell",
     *         "subscription_state": "C"
     *     }
     * }
     * ```
     */
    updateASubscription(
      input: UpdateASubscriptionInput,
      options?: RequestOptions<UpdateASubscriptionOutput['shipments']>,
    ): Promise<AxiosResponse<UpdateASubscriptionOutput>>;
  }
}
