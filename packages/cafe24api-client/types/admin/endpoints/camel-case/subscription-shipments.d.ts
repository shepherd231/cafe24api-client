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
    subscriptionId: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 주문자 이름
     *
     *
     */
    buyerName: any;
    /**
     * @description
     * 주문자 우편번호
     *
     *
     */
    buyerZipcode: any;
    /**
     * @description
     * 주문자 기본 주소
     *
     *
     */
    buyerAddress1: any;
    /**
     * @description
     * 주문자 상세 주소
     *
     *
     */
    buyerAddress2: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: any;
    /**
     * @description
     * 수령자 명
     *
     * 최대글자수 : [100자]
     */
    receiverName: any;
    /**
     * @description
     * 수령자 우편번호
     *
     *
     */
    receiverZipcode: any;
    /**
     * @description
     * 수령자 기본 주소
     *
     *
     */
    receiverAddress1: any;
    /**
     * @description
     * 수령자 상세 주소
     *
     *
     */
    receiverAddress2: any;
    /**
     * @description
     * 수령자 일반 전화
     *
     *
     */
    receiverPhone: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     *
     */
    receiverCellphone: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     *
     */
    deliveryType: any;
    /**
     * @description
     * 희망배송일 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wishedDelivery: any;
    /**
     * @description
     * 희망배송시작시간
     *
     *
     */
    wishedDeliveryStartHour: any;
    /**
     * @description
     * 희망배송종료시간
     *
     *
     */
    wishedDeliveryEndHour: any;
    /**
     * @description
     * 가능한 빠른 배송시간
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wishedDeliveryHourAsap: any;
    /**
     * @description
     * 스토어픽업
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    storePickup: any;
    /**
     * @description
     * 안심번호
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useVirtualPhoneNo: any;
    /**
     * @description
     * 신청일자
     *
     *
     */
    createdDate: any;
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
    subscriptionState: any;
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
    dateType?: any;
    /**
     * @description
     * 검색 시작일
     *
     * @required
     *
     * 날짜
     */
    startDate: any;
    /**
     * @description
     * 검색 종료일
     *
     * @required
     *
     * 날짜
     */
    endDate: any;
    /**
     * @description
     * 정기배송 신청번호
     *
     *
     */
    subscriptionId?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    memberId?: any;
    /**
     * @description
     * 주문자 이름
     *
     * 최대글자수 : [100자]
     */
    buyerName?: any;
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
     * 상품번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    productNo?: any;
    /**
     * @description
     * 상품명
     *
     * 최대글자수 : [250자]
     */
    productName?: any;
    /**
     * @description
     * 상품코드
     *
     *
     */
    productCode?: any;
    /**
     * @description
     * 품목코드
     *
     *
     */
    variantCode?: any;
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
    subscriptionShipmentsCycle?: any;
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
    subscriptionState?: any;
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
      subscriptionId: string;
      memberId: string;
      buyerName: string;
      buyerZipcode: string;
      buyerAddress1: string;
      buyerAddress2: string;
      buyerPhone: string;
      buyerCellphone: string;
      buyerEmail: string;
      receiverName: string;
      receiverZipcode: string;
      receiverAddress1: string;
      receiverAddress2: string;
      receiverPhone: string;
      receiverCellphone: string;
      shippingMessage: string;
      shippingType: Cafe24Enum;
      wishedDelivery: Cafe24Enum;
      wishedDeliveryStartHour: Cafe24Datetime;
      wishedDeliveryEndHour: string;
      wishedDeliveryHourAsap: Cafe24Enum;
      createdDate: Cafe24Date;
      terminatedDate: any;
      subscriptionState: Cafe24Enum;
      items: {
        variantsCode: string;
        productCode: string;
        productNo: Cafe24Datetime;
        productName: string;
        optionValue: string;
        optionValueDefault: string;
        optionId: string;
        quantity: number;
        productPrice: Cafe24Datetime;
        optionPrice: string;
        shippingPaymentOption: Cafe24Enum;
        subscriptionShipmentsSequence: number;
        subscriptionState: Cafe24Enum;
        expectedPayDate: Cafe24Date;
        terminatedDate: any;
        productBundle: Cafe24Enum;
        productBundlePrice: any;
        bundleProductComponents: {
          variantsCode: any;
          productCode: any;
          productNo: any;
          productName: any;
          optionValue: any;
          optionValueDefault: any;
          optionId: any;
          quantity: any;
          productPrice: any;
          optionPrice: any;
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
    memberId: any;
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
     * 주문자 일반 전화
     *
     * 최대글자수 : [20자]
     */
    buyerPhone?: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    buyerCellphone: any;
    /**
     * @description
     * 주문자 이메일
     *
     * @required
     *
     * 이메일
     */
    buyerEmail: any;
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
     * 수령자 우편번호
     *
     * @required
     *
     * 글자수 최소: [2자]~최대: [13자]
     */
    receiverZipcode: any;
    /**
     * @description
     * 수령자 기본 주소
     *
     * @required
     */
    receiverAddress1: any;
    /**
     * @description
     * 수령자 상세 주소
     *
     * @required
     */
    receiverAddress2: any;
    /**
     * @description
     * 수령자 일반 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    receiverPhone: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    receiverCellphone: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage?: any;
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
    deliveryType?: any;
    /**
     * @description
     * 배송시작일
     *
     * @required
     *
     * 날짜
     */
    expectedDeliveryDate: any;
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
    subscriptionShipmentsCycle: any;
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
    wishedDelivery?: any;
    /**
     * @description
     * 희망배송시작시간
     *
     * 최소: [0]~최대: [23]
     */
    wishedDeliveryStartHour?: any;
    /**
     * @description
     * 희망배송종료시간
     *
     * 최소: [0]~최대: [23]
     */
    wishedDeliveryEndHour?: any;
    /**
     * @description
     * 가능한 빠른 배송시간
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    wishedDeliveryHourAsap?: any;
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
    storePickup?: any;
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
    useVirtualPhoneNo?: any;
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
      productCode: any;
      /**
       * @description
       * 상품번호
       *
       *
       */
      productNo: any;
      /**
       * @description
       * 상품명
       *
       *
       */
      productName: any;
      options?: any[];
      /**
       * @description
       * 상품옵션 아이디
       * @default 000A
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
       * 상품 판매가
       *
       *
       */
      productPrice: any;
      /**
       * @description
       * 옵션 추가 가격
       *
       *
       */
      optionPrice?: any;
      /**
       * @description
       * 선/착불 구분
       * C : 착불
       * P : 선결제
       * F : 무료
       *
       *
       */
      shippingPaymentOption?: any;
      /**
       * @description
       * 분류 번호
       *
       *
       */
      categoryNo?: any;
      /**
       * @description
       * 세트상품 여부
       * T : 세트상품
       * F : 세트상품 아님
       * @default F
       *
       *
       */
      productBundle?: any;
      bundleProductComponents?: any[];
    };
  }

  export interface CreateASubscriptionOutput {
    shipments: {
      subscriptionId: string;
      items: {
        variantCode: string;
        optionId: string;
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
    subscriptionId: any;
    /**
     * @description
     * 수령자 명
     *
     * 최대글자수 : [100자]
     */
    receiverName?: any;
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
     * 수령자 일반 전화
     *
     * 최대글자수 : [20자]
     */
    receiverPhone?: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     * 최대글자수 : [20자]
     */
    receiverCellphone?: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage?: any;
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
    subscriptionState?: any;
  }

  export interface UpdateASubscriptionOutput {
    shipments: {
      receiverName: string;
      receiverZipcode: string;
      receiverAddress1: string;
      receiverAddress2: string;
      receiverPhone: string;
      receiverCellphone: string;
      shippingMessage: string;
      subscriptionState: Cafe24Enum;
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
