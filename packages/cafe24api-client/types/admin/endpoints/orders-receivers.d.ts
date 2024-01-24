import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 주문수령자 정보(Orders receivers)는 주문한 상품을 배송 받을 수령자의 이름, 연락처, 주소 등의 정보에 대한 기능 입니다.
   * 수령자 정보는 하위 리소스로서 주문(Order) 하위에서만 사용할 수 있습니다.
   */
  export interface OrdersReceivers {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * 수령자명
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 
      */ 
    name_furigana: any;
    /**
      * @description
      * 전화번호
      * 
      * 
      */ 
    phone: any;
    /**
      * @description
      * 수령자 휴대 전화
      * 
      * 
      */ 
    cellphone: any;
    /**
      * @description
      * 수령자 안심번호
      * 
      * 
      */ 
    virtual_phone_no: any;
    /**
      * @description
      * 우편번호
      * 
      * 
      */ 
    zipcode: any;
    /**
      * @description
      * 기본 주소
      * 
      * 
      */ 
    address1: any;
    /**
      * @description
      * 상세 주소
      * 
      * 
      */ 
    address2: any;
    /**
      * @description
      * 주/도
      * 
      * 
      */ 
    address_state: any;
    /**
      * @description
      * 시/군/도시
      * 
      * 
      */ 
    address_city: any;
    /**
      * @description
      * 도로명
      * 
      * 
      */ 
    address_street: any;
    /**
      * @description
      * 전체주소
      * 
      * 
      */ 
    address_full: any;
    /**
      * @description
      * 수령자명 (영문)
      * 
      * 
      */ 
    name_en: any;
    /**
      * @description
      * 수령자 도시 (영문)
      * 
      * 
      */ 
    city_en: any;
    /**
      * @description
      * 수령자 주 (영문)
      * 
      * 
      */ 
    state_en: any;
    /**
      * @description
      * 수령자 주소 (영문)
      * 
      * 
      */ 
    street_en: any;
    /**
      * @description
      * 국가코드
      * 
      * 
      */ 
    country_code: any;
    /**
      * @description
      * 국가명
      * 
      * 
      */ 
    country_name: any;
    /**
      * @description
      * 국가명 (영문)
      * 
      * 
      */ 
    country_name_en: any;
    /**
      * @description
      * 배송 메세지
      * 
      * 
      */ 
    shipping_message: any;
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
    clearance_information_type: any;
    /**
      * @description
      * 통관정보
      * 
      * 
      */ 
    clearance_information: any;
    /**
      * @description
      * 희망배송일
      * 
      * 
      */ 
    wished_delivery_date: any;
    /**
      * @description
      * 희망배송시간
      * 
      * 
      */ 
    wished_delivery_time: any;
    /**
      * @description
      * 배송번호
      * 
      * 
      */ 
    shipping_code: any;
    /**
      * @description
      * 기본배송지 변경 여부
      * 
      * T : 변경함
      * F : 변경안함
      * 
      * 
      */ 
    change_default_shipping_address: any;
    /**
      * @description
      * 가능한 빠른 배송일 설정 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_date: any;
    /**
      * @description
      * 가능한 빠른 배송시간 설정 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_time: any;
  }

  export interface RetrieveAListOfRecipientsOfAnOrderInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 배송번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    shipping_code?: any;
  }

  export interface RetrieveAListOfRecipientsOfAnOrderOutput {
    receivers: { 
    shop_no: number;
    name: string;
    name_furigana: string;
    phone: string;
    cellphone: string;
    virtual_phone_no: any;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    name_en: any;
    city_en: any;
    state_en: any;
    street_en: any;
    country_code: string;
    country_name: any;
    country_name_en: any;
    shipping_message: string;
    clearance_information_type: Cafe24Enum;
    clearance_information: string;
    wished_delivery_date: string;
    wished_delivery_time: any;
    shipping_code: string;
    }[];
  }
  export interface UpdateOrderRecipientsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 수령자명
      * 
      * 최대글자수 : [20자]
      */ 
    name?: any;
    /**
      * @description
      * 수령자 일반 전화
      * 
      * 한국몰일 경우 02-0000-0000 형태로 입력
      * 그외 해외몰일 경우 국가번호-000-0000 형태로 입력
      * 
      * 최대글자수 : [20자]
      */ 
    phone?: any;
    /**
      * @description
      * 수령자 휴대 전화
      * 
      * 한국몰일 경우 010-0000-0000 형태로 입력
      * 그외 해외몰일 경우 국가번호-000-0000 형태로 입력
      * 
      * 최대글자수 : [20자]
      */ 
    cellphone?: any;
    /**
      * @description
      * 배송 메세지
      * 
      * 
      */ 
    shipping_message?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 해외몰 중 일본몰인 경우에만 필수 입력
      * 
      * 
      */ 
    name_furigana?: any;
    /**
      * @description
      * 우편번호
      * 
      * 최소글자수 : [2자]
      * 최대글자수 : [14자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address1?: any;
    /**
      * @description
      * 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address2?: any;
    /**
      * @description
      * 주/도
      * 
      * 해외몰인 경우 필수 입력
      * 
      * 
      */ 
    address_state?: any;
    /**
      * @description
      * 시/군/도시
      * 
      * 해외몰인 경우 필수 입력
      * 
      * 
      */ 
    address_city?: any;
    /**
      * @description
      * 수령자명 (영문)
      * 
      * 
      */ 
    name_en?: any;
    /**
      * @description
      * 수령자 도시 (영문)
      * 
      * 
      */ 
    city_en?: any;
    /**
      * @description
      * 수령자 주 (영문)
      * 
      * 
      */ 
    state_en?: any;
    /**
      * @description
      * 수령자 주소 (영문)
      * 
      * 
      */ 
    street_en?: any;
    /**
      * @description
      * 국가코드
      * 
      * 해외몰인 경우 필수 입력
      * 한국 : KR / 중국: CN / 일본: JP / 필리핀: PH / 미국: US / 대만: TW / 베트남 : VN
      * 
      * 
      */ 
    country_code?: any;
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
      * 배송번호
      * 
      * 
      */ 
    shipping_code?: any;
    /**
      * @description
      * 기본배송지 변경 여부
      * 
      * T : 변경함
      * F : 변경안함
      * 
      * @default F
      * 
      * 
      */ 
    change_default_shipping_address?: any;
    /**
      * @description
      * 수령자 안심번호
      * 
      * 복수 배송지 주문일 경우 수령자 안심번호 수정 불가
      * 
      * 
      */ 
    virtual_phone_no?: any;
    /**
      * @description
      * 희망배송일
      * 
      * 날짜
      */ 
    wished_delivery_date?: any;
    /**
      * @description
      * 가능한 빠른 배송일 설정 여부
      * 
      * 가능한 빠른 배송시간 설정 여부&#39;가 &#39;T&#39; 일때는 null 로 응답함
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_date?: any;
    /**
      * @description
      * 희망배송시간
      * 
      * 희망배송 시작시간(start_hour)
      * 00~23 까지 입력 가능
      * 
      * 희망배송 종료시간(end_hour)
      * 00~23 까지 입력 가능
      * 
      * 
      */ 
    wished_delivery_time?: { 
    /**
      * @description
      * 희망배송 시작시간
      * 
      * 
      */ 
    start_hour?: any;
    /**
      * @description
      * 희망배송 종료시간
      * 
      * 
      */ 
    end_hour?: any;
    };
    /**
      * @description
      * 가능한 빠른 배송시간 설정 여부
      * 
      * 가능한 빠른 배송일 설정 여부&#39;가 &#39;T&#39; 일때는 null 로 응답함
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_time?: any;
  }

  export interface UpdateOrderRecipientsOutput {
    receivers: { 
    shop_no: number;
    name: string;
    name_furigana: string;
    phone: string;
    cellphone: string;
    virtual_phone_no: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    address_state: string;
    address_city: string;
    address_street: string;
    address_full: string;
    name_en: string;
    city_en: string;
    state_en: string;
    street_en: string;
    country_code: string;
    country_name: string;
    country_name_en: string;
    shipping_message: string;
    shipping_code: string;
    clearance_information_type: any;
    clearance_information: any;
    change_default_shipping_address: Cafe24Enum;
    wished_delivery_date: Cafe24Date;
    use_fast_delivery_date: Cafe24Enum;
    wished_delivery_time: { 
    start_hour: Cafe24Datetime;
    end_hour: Cafe24Datetime;
    };
    use_fast_delivery_time: Cafe24Enum;
    }[];
  }
  export interface ChangeShippingInformationInput {
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
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 배송번호
      * 
      * @required
      */ 
    shipping_code: any;
    /**
      * @description
      * 수령자명
      * 
      * 최대글자수 : [20자]
      */ 
    name?: any;
    /**
      * @description
      * 수령자 일반 전화
      * 
      * 최대글자수 : [20자]
      */ 
    phone?: any;
    /**
      * @description
      * 수령자 휴대 전화
      * 
      * 최대글자수 : [20자]
      */ 
    cellphone?: any;
    /**
      * @description
      * 배송 메세지
      * 
      * 
      */ 
    shipping_message?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 
      */ 
    name_furigana?: any;
    /**
      * @description
      * 우편번호
      * 
      * 최소글자수 : [2자]
      * 최대글자수 : [14자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address1?: any;
    /**
      * @description
      * 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    address2?: any;
    /**
      * @description
      * 주/도
      * 
      * 
      */ 
    address_state?: any;
    /**
      * @description
      * 시/군/도시
      * 
      * 
      */ 
    address_city?: any;
    /**
      * @description
      * 수령자명 (영문)
      * 
      * 
      */ 
    name_en?: any;
    /**
      * @description
      * 수령자 도시 (영문)
      * 
      * 
      */ 
    city_en?: any;
    /**
      * @description
      * 수령자 주 (영문)
      * 
      * 
      */ 
    state_en?: any;
    /**
      * @description
      * 수령자 주소 (영문)
      * 
      * 
      */ 
    street_en?: any;
    /**
      * @description
      * 국가코드
      * 
      * 
      */ 
    country_code?: any;
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
      * 기본배송지 변경 여부
      * 
      * T : 변경함
      * F : 변경안함
      * 
      * @default F
      * 
      * 
      */ 
    change_default_shipping_address?: any;
    /**
      * @description
      * 수령자 안심번호
      * 
      * 복수 배송지 주문일 경우 수령자 안심번호 수정 불가
      * 
      * 
      */ 
    virtual_phone_no?: any;
    /**
      * @description
      * 희망배송일
      * 
      * 날짜
      */ 
    wished_delivery_date?: any;
    /**
      * @description
      * 가능한 빠른 배송일 설정 여부
      * 
      * 가능한 빠른 배송시간 설정 여부&#39;가 &#39;T&#39; 일때는 null 로 응답함
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_date?: any;
    /**
      * @description
      * 희망배송시간
      * 
      * 희망배송 시작시간(start_hour)
      * 00~23 까지 입력 가능
      * 
      * 희망배송 종료시간(end_hour)
      * 00~23 까지 입력 가능
      * 
      * 
      */ 
    wished_delivery_time?: { 
    /**
      * @description
      * 희망배송 시작시간
      * 
      * 
      */ 
    start_hour?: any;
    /**
      * @description
      * 희망배송 종료시간
      * 
      * 
      */ 
    end_hour?: any;
    };
    /**
      * @description
      * 가능한 빠른 배송시간 설정 여부
      * 
      * 가능한 빠른 배송일 설정 여부&#39;가 &#39;T&#39; 일때는 null 로 응답함
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_fast_delivery_time?: any;
    /**
      * @description
      * 주소 직접입력
      * 
      * 
      */ 
    receiver_direct_input_check?: any;
  }

  export interface ChangeShippingInformationOutput {
    receiver: { 
    shop_no: number;
    name: string;
    name_furigana: string;
    phone: string;
    cellphone: string;
    virtual_phone_no: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    address_state: string;
    address_city: string;
    address_street: string;
    address_full: string;
    name_en: string;
    city_en: string;
    state_en: string;
    street_en: string;
    country_code: string;
    country_name: string;
    country_name_en: string;
    shipping_message: string;
    clearance_information_type: any;
    clearance_information: any;
    change_default_shipping_address: Cafe24Enum;
    wished_delivery_date: Cafe24Date;
    use_fast_delivery_date: Cafe24Enum;
    wished_delivery_time: { 
    start_hour: Cafe24Datetime;
    end_hour: Cafe24Datetime;
    };
    use_fast_delivery_time: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 수령자정보를 목록으로 조회할 수 있습니다.
     * 수령자명, 휴대전화 번호, 주소 등을 조회할 수 있습니다.
     * 부분배송이나 분할배송 등의 경우 하나의 주문에 수령자는 여럿일 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-recipients-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "receivers": [
     *         {
     *             "shop_no": 1,
     *             "name": "John Doe",
     *             "name_furigana": "John Doe",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "virtual_phone_no": null,
     *             "zipcode": "06258",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "name_en": null,
     *             "city_en": null,
     *             "state_en": null,
     *             "street_en": null,
     *             "country_code": "",
     *             "country_name": null,
     *             "country_name_en": null,
     *             "shipping_message": "Sample shipping message",
     *             "clearance_information_type": "C",
     *             "clearance_information": "P123456789012",
     *             "wished_delivery_date": "",
     *             "wished_delivery_time": null,
     *             "shipping_code": "D-20200928-0000011-00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfRecipientsOfAnOrder(
      input: RetrieveAListOfRecipientsOfAnOrderInput,
      options?: RequestOptions<RetrieveAListOfRecipientsOfAnOrderOutput['receivers'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfRecipientsOfAnOrderOutput>>;
    /**
     * @description
     * 특정 주문의 수령자정보를 수정할 수 있습니다.
     * 복수 배송지 주문일 경우에는 수령자 안심번호는 수정하실 수 없습니다.
     * 수령자명, 수령자 휴대 전화 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-order-recipients
     *
     * @example 응답 예시
     * ```json
     * {
     *     "receivers": [
     *         {
     *             "shop_no": 1,
     *             "name": "John Doe",
     *             "name_furigana": "",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "virtual_phone_no": "0500-0000-0000",
     *             "zipcode": "06258",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "address_state": "",
     *             "address_city": "",
     *             "address_street": "",
     *             "address_full": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea Professional Construction Hall",
     *             "name_en": "",
     *             "city_en": "",
     *             "state_en": "",
     *             "street_en": "",
     *             "country_code": "",
     *             "country_name": "",
     *             "country_name_en": "",
     *             "shipping_message": "Sample shipping message",
     *             "shipping_code": "D-20170710-0000013-00",
     *             "clearance_information_type": null,
     *             "clearance_information": null,
     *             "change_default_shipping_address": "T",
     *             "wished_delivery_date": "2017-07-17",
     *             "use_fast_delivery_date": "F",
     *             "wished_delivery_time": {
     *                 "start_hour": "08",
     *                 "end_hour": "12"
     *             },
     *             "use_fast_delivery_time": "F"
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "Jane Kim",
     *             "name_furigana": "",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "virtual_phone_no": "0500-0000-0000",
     *             "zipcode": "04312",
     *             "address1": "5, Hyochangwon-ro 70-gil, Yongsan-gu, Seoul, Republic of Korea",
     *             "address2": "2F, Shinwha Building",
     *             "address_state": "",
     *             "address_city": "",
     *             "address_street": "",
     *             "address_full": "5, Hyochangwon-ro 70-gil, Yongsan-gu, Seoul, Republic of Korea 2F, Shinwha Building",
     *             "name_en": "",
     *             "city_en": "",
     *             "state_en": "",
     *             "street_en": "",
     *             "country_code": "",
     *             "country_name": "",
     *             "country_name_en": "",
     *             "shipping_message": "Sample shipping message",
     *             "shipping_code": "D-20170710-0000013-01",
     *             "clearance_information_type": null,
     *             "clearance_information": null,
     *             "change_default_shipping_address": "F",
     *             "wished_delivery_date": "2017-07-17",
     *             "use_fast_delivery_date": "F",
     *             "wished_delivery_time": {
     *                 "start_hour": "08",
     *                 "end_hour": "12"
     *             },
     *             "use_fast_delivery_time": "F"
     *         }
     *     ]
     * }
     * ```
     */
    updateOrderRecipients(
      input: UpdateOrderRecipientsInput,
      options?: RequestOptions<UpdateOrderRecipientsOutput['receivers'][number]>,
    ): Promise<AxiosResponse<UpdateOrderRecipientsOutput>>;
    /**
     * @description
     * 특정 주문의 특정 배송번호에 대한 수령자정보를 수정할 수 있습니다.
     * 배송번호와 관계없이 수령자정보를 수정하기 위해서는 Update orders receivers 를 이용해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#change-shipping-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "receiver": {
     *         "shop_no": 1,
     *         "name": "John Doe",
     *         "name_furigana": "",
     *         "phone": "02-0000-0000",
     *         "cellphone": "010-0000-0000",
     *         "virtual_phone_no": "0500-0000-0000",
     *         "zipcode": "06258",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "address_state": "",
     *         "address_city": "",
     *         "address_street": "",
     *         "address_full": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea Professional Construction Hall",
     *         "name_en": "",
     *         "city_en": "",
     *         "state_en": "",
     *         "street_en": "",
     *         "country_code": "",
     *         "country_name": "",
     *         "country_name_en": "",
     *         "shipping_message": "Sample shipping message",
     *         "clearance_information_type": null,
     *         "clearance_information": null,
     *         "change_default_shipping_address": "F",
     *         "wished_delivery_date": "2017-07-17",
     *         "use_fast_delivery_date": "F",
     *         "wished_delivery_time": {
     *             "start_hour": "08",
     *             "end_hour": "12"
     *         },
     *         "use_fast_delivery_time": "F"
     *     }
     * }
     * ```
     */
    changeShippingInformation(
      input: ChangeShippingInformationInput,
      options?: RequestOptions<ChangeShippingInformationOutput['receiver']>,
    ): Promise<AxiosResponse<ChangeShippingInformationOutput>>;
  }
}
