import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 주문(Order)은 쇼핑몰에서 고객이 상품의 구매의사를 쇼핑몰에 요청한 내역입니다.
   * 결제수단이 무통장입금인 경우 입금전에도 주문은 생성됩니다.
   * 쇼핑몰 운영자는 결제가 완료된 주문 정보를 참고하여 쇼핑몰 고객에게 물건을 배송합니다.
   * 주문 정보에는 주문과 결제를 진행한 주문자의 정보와 상품을 배송 받을 수령자 정보가 포함됩니다.
   * 주문은 품주, 주문자정보 등 여러 하위 리소스들을 갖고 있습니다.
   */
  export interface Orders {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 화폐단위
      * 
      * 해당 멀티쇼핑몰의 화폐단위
      * 
      * 
      */ 
    currency: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 마켓 구분값
      * 
      * 가격 비교 사이트를 통하여 마켓 등에서 상품 구매 시 해당 사이트를 구분하기 위한 ID
      * 
      * 
      */ 
    market_id: any;
    /**
      * @description
      * 마켓 주문 번호
      * 
      * 
      */ 
    market_order_no: any;
    /**
      * @description
      * 회원아이디
      * 
      * 
      */ 
    member_id: any;
    /**
      * @description
      * 회원 이메일
      * 
      * 
      */ 
    member_email: any;
    /**
      * @description
      * 회원인증여부
      * 
      * 회원 인증여부. 인증여부에 따라 3가지로 회원타입이 나눠짐.
      * 
      * T : 승인
      * B : 특별관리회원
      * J : 14세미만회원
      * 
      * 
      */ 
    member_authentication: any;
    /**
      * @description
      * 결제자명
      * 
      * 입금자 이름. 주문자 혹은 수령자 이름과는 다를 수 있음.
      * 
      * 
      */ 
    billing_name: any;
    /**
      * @description
      * 은행코드
      * 
      * bank_code 
      * 
      * 
      */ 
    bank_code: any;
    /**
      * @description
      * 입금자 은행명
      * 
      * 
      */ 
    bank_code_name: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * 주문자가 이용한 결제수단의 코드
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
      * giftcard : 제휴상품권
      * pointcard : 제휴포인트
      * etc : 기타
      * 
      * 
      */ 
    payment_method: any;
    /**
      * @description
      * 결제수단명
      * 
      * 주문자가 이용한 결제수단의 이름
      * 
      * 
      */ 
    payment_method_name: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    payment_gateway_names: any;
    /**
      * @description
      * 해외 결제수단명
      * 
      * 
      */ 
    sub_payment_method_name: any;
    /**
      * @description
      * 해외 결제수단코드
      * 
      * sub_payment_method_code 
      * 
      * 
      */ 
    sub_payment_method_code: any;
    /**
      * @description
      * 카드 거래 아이디
      * 
      * 
      */ 
    transaction_ids: any;
    /**
      * @description
      * 결제 여부
      * 
      * 결제가 완료되었는지 여부
      * 
      * T : 결제
      * F : 미결제
      * M : 부분 결제
      * 
      * 
      */ 
    paid: any;
    /**
      * @description
      * 취소 여부
      * 
      * T : 취소
      * F : 미취소
      * M : 부분 취소
      * 
      * 
      */ 
    canceled: any;
    /**
      * @description
      * 주문일
      * 
      * 
      */ 
    order_date: any;
    /**
      * @description
      * 최초 주문여부
      * 
      * 해당 주문이 최초 주문인지 여부
      * 
      * T : 최초 주문
      * F : 최초 주문 아님
      * 
      * 
      */ 
    first_order: any;
    /**
      * @description
      * 결제일
      * 
      * 
      */ 
    payment_date: any;
    /**
      * @description
      * 모바일 구분
      * 
      * 주문이 모바일에서 이루어졌는지 여부
      * 
      * T : 모바일 주문
      * F : 모바일 주문 아님
      * 
      * 
      */ 
    order_from_mobile: any;
    /**
      * @description
      * 에스크로 사용여부
      * 
      * 에스크로를 사용했는지 여부
      * 
      * T : 에스크로 사용
      * F : 에스크로 미사용
      * 
      * 
      */ 
    use_escrow: any;
    /**
      * @description
      * 주문시 회원등급
      * 
      * 
      */ 
    group_no_when_ordering: any;
    /**
      * @description
      * 최초 주문 금액
      * 
      * 
      */ 
    initial_order_amount: any;
    /**
      * @description
      * 현재 주문 금액
      * 
      * 실결제금액 중 coupon_shipping_fee_amount는 할인 금액 자동 계산을 사용할 때만 품목별로 배송비 배분이 가능하기 때문에 할인 금액 자동 계산 기능을 사용할 때만 노출됨
      * 
      * 
      */ 
    actual_order_amount: any;
    /**
      * @description
      * 계좌번호
      * 
      * 해당 주문건에 대한 쇼핑몰의 계좌번호
      * 
      * 
      */ 
    bank_account_no: any;
    /**
      * @description
      * 예금주
      * 
      * 
      */ 
    bank_account_owner_name: any;
    /**
      * @description
      * 마켓 판매자 아이디
      * 
      * 
      */ 
    market_seller_id: any;
    /**
      * @description
      * 최종 결제 금액
      * 
      * 
      */ 
    payment_amount: any;
    /**
      * @description
      * 주문취소일
      * 
      * 
      */ 
    cancel_date: any;
    /**
      * @description
      * 주문경로 텍스트
      * 
      * 
      */ 
    order_place_name: any;
    /**
      * @description
      * 주문경로
      * 
      * 
      */ 
    order_place_id: any;
    /**
      * @description
      * 후불결제 입금확인 가능 여부
      * 
      * T : 입금확인
      * F : 입금미확인
      * 
      * 
      */ 
    payment_confirmation: any;
    /**
      * @description
      * 결제 수수료
      * 
      * 
      */ 
    commission: any;
    /**
      * @description
      * 후불결제여부
      * 
      * T : 후불결제
      * F : 후불결제 아님
      * 
      * 
      */ 
    postpay: any;
    /**
      * @description
      * 관리자 입력 금액
      * 
      * 
      */ 
    admin_additional_amount: any;
    /**
      * @description
      * 추가 배송비
      * 
      * 
      */ 
    additional_shipping_fee: any;
    /**
      * @description
      * 해외배송 보험료
      * 
      * 
      */ 
    international_shipping_insurance: any;
    /**
      * @description
      * 해외배송 부가금액
      * 
      * 
      */ 
    additional_handling_fee: any;
    /**
      * @description
      * 배송 유형
      * 
      * 배송 유형. 국내배송인지 해외배송인지 여부
      * 
      * A : 국내
      * B : 해외
      * 
      * 
      */ 
    shipping_type: any;
    /**
      * @description
      * 배송 유형명
      * 
      * 배송 유형. 국내배송인지 해외배송인지 여부
      * 
      * 
      */ 
    shipping_type_text: any;
    /**
      * @description
      * 배송상태
      * 
      * F : 배송전
      * M : 배송중
      * T : 배송완료
      * W : 배송보류
      * X : 발주전
      * 
      * 
      */ 
    shipping_status: any;
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
      * 희망배송사 코드
      * 
      * 
      */ 
    wished_carrier_id: any;
    /**
      * @description
      * 희망배송사 명
      * 
      * 
      */ 
    wished_carrier_name: any;
    /**
      * @description
      * 반품승인일시
      * 
      * 
      */ 
    return_confirmed_date: any;
    /**
      * @description
      * 총 공급가액
      * 
      * 
      */ 
    total_supply_price: any;
    /**
      * @description
      * 네이버포인트
      * 
      * 
      */ 
    naver_point: any;
    /**
      * @description
      * 주문서 추가항목
      * 
      * 
      */ 
    additional_order_info_list: any;
    /**
      * @description
      * 매장수령여부
      * 
      * T : 매장수령
      * F : 매장수령 아님
      * 
      * 
      */ 
    store_pickup: any;
    /**
      * @description
      * 간편결제 결제사 이름
      * 
      * 
      */ 
    easypay_name: any;
    /**
      * @description
      * 여신상태
      * 
      * OK : GOOD
      * NG : NOT GOOD
      * ER : ERROR
      * 
      * 
      */ 
    loan_status: any;
    /**
      * @description
      * 정기결제 여부
      * 
      * T : 정기결제
      * F : 정기결제 아님
      * 
      * 
      */ 
    subscription: any;
    /**
      * @description
      * 품주 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    items: any;
    /**
      * @description
      * 수령자정보 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    receivers: any;
    /**
      * @description
      * 주문자정보 리소스
      * 
      * 
      */ 
    buyer: any;
    /**
      * @description
      * 배송비 정보
      * 
      * 
      */ 
    shipping_fee_detail: any;
    /**
      * @description
      * 지역별 배송비 정보
      * 
      * 
      */ 
    regional_surcharge_detail: any;
    /**
      * @description
      * 반품상세 리소스
      * 
      * 
      */ 
    return: any;
    /**
      * @description
      * 취소상세 리소스
      * 
      * 
      */ 
    cancellation: any;
    /**
      * @description
      * 교환상세 리소스
      * 
      * 
      */ 
    exchange: any;
    /**
      * @description
      * 멀티 배송지 여부
      * 
      * T : 멀티 배송지 주문
      * F : 멀티 배송지 주문 아님
      * 
      * 
      */ 
    multiple_addresses: any;
    /**
      * @description
      * 결제 화폐 환율 정보
      * 
      * 
      */ 
    exchange_rate: any;
    /**
      * @description
      * 최초 결제수단 코드
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
      * giftcard : 제휴상품권
      * pointcard : 제휴포인트
      * etc : 기타
      * 
      * 
      */ 
    first_payment_methods: any;
    /**
      * @description
      * 네이버페이 PG 결제 정보
      * 
      * P : PG결제
      * N : 네이버결제
      * 
      * 
      */ 
    naverpay_payment_information: any;
    /**
      * @description
      * 가격에 세금 포함
      * 
      * T: 세금포함
      * F: 세금제외
      * 
      * 
      */ 
    include_tax: any;
    /**
      * @description
      * 세금 상세 정보
      * 
      * 
      */ 
    tax_detail: any;
    /**
      * @description
      * 주문 서비스 유형
      * 
      * rental : 렌탈주문
      * 
      * 
      */ 
    service_type: any;
    /**
      * @description
      * 주문 서비스 데이터
      * 
      * 
      */ 
    service_data: any;
    /**
      * @description
      * 배송지 정보 표기 여부
      * 
      * T: 배송지 정보 표기
      * F: 배송지 정보 가림
      * 
      * 
      */ 
    show_shipping_address: any;
    /**
      * @description
      * 연동 된 SNS 제공코드
      * 
      * 
      */ 
    social_member_code: any;
    /**
      * @description
      * 연동 된 SNS명
      * 
      * 
      */ 
    social_name: any;
    /**
      * @description
      * 주문시 회원등급
      * 
      * 주문 당시의 회원등급
      * 
      * 
      */ 
    customer_group_no_when_ordering: any;
    /**
      * @description
      * 혜택 리소스
      * 
      * 
      */ 
    benefits: any;
    /**
      * @description
      * 쿠폰 리소스
      * 
      * 
      */ 
    coupons: any;
    /**
      * @description
      * 환불상세 리소스
      * 
      * 
      */ 
    refunds: any;
    /**
      * @description
      * 주문상태
      * 
      * prepare : 배송준비중
      * prepareproduct : 상품준비중
      * hold : 배송보류
      * unhold : 배송보류해제
      * 
      * 
      */ 
    process_status: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code: any;
    /**
      * @description
      * 구매확정 여부
      * 
      * 
      */ 
    purchase_confirmation: any;
    /**
      * @description
      * 적립금 회수
      * 
      * 
      */ 
    collect_points: any;
  }

  export interface RetrieveAListOfOrdersInput {
    /**
      * @description
      * 품주 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    items?: any;
    /**
      * @description
      * 수령자정보 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    receivers?: any;
    /**
      * @description
      * 주문자정보 리소스
      * 
      * @embed
      */ 
    buyer?: any;
    /**
      * @description
      * 반품상세 리소스
      * 
      * @embed
      */ 
    return?: any;
    /**
      * @description
      * 취소상세 리소스
      * 
      * @embed
      */ 
    cancellation?: any;
    /**
      * @description
      * 교환상세 리소스
      * 
      * @embed
      */ 
    exchange?: any;
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
    shop_no?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 검색을 시작할 기준일
      * 
      * 날짜
      */ 
    start_date?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 검색을 종료할 기준일
      * 검색 시작일과 같이 사용해야함.
      * 검색기간은 한 호출에 3개월 이상 검색 불가.
      * 
      * 날짜
      */ 
    end_date?: any;
    /**
      * @description
      * 주문번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 주문번호
      */ 
    order_id?: any;
    /**
      * @description
      * 주문상태
      * 
      * 주문상태. 주문 상태별로 각각의 코드가 있음.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * N00 : 입금전
      * N10 : 상품준비중
      * N20 : 배송준비중
      * N21 : 배송대기
      * N22 : 배송보류
      * N30 : 배송중
      * N40 : 배송완료
      * N50 : 구매확정
      * C00 : 취소신청
      * C10 : 취소접수 - 관리자
      * C11 : 취소접수거부 - 관리자
      * C34 : 취소처리중 - 환불전
      * C35 : 취소처리중 - 환불완료
      * C36 : 취소처리중 - 환불보류
      * C40 : 취소완료
      * C41 : 취소 완료 - 환불전
      * C42 : 취소 완료 - 환불요청중
      * C43 : 취소 완료 - 환불보류
      * C47 : 입금전취소 - 구매자
      * C48 : 입금전취소 - 자동취소
      * C49 : 입금전취소 - 관리자
      * R00 : 반품신청
      * R10 : 반품접수
      * R11 : 반품 접수 거부
      * R12 : 반품보류
      * R13 : 반품접수 - 수거완료(자동)
      * R20 : 반품 수거 완료
      * R30 : 반품처리중 - 수거전
      * R31 : 반품처리중 - 수거완료
      * R34 : 반품처리중 - 환불전
      * R36 : 반품처리중 - 환불보류
      * R40 : 반품완료 - 환불완료
      * R41 : 반품완료 - 환불전
      * R42 : 반품완료 - 환불요청중
      * R43 : 반품완료 - 환불보류
      * E00 : 교환신청
      * E10 : 교환접수
      * N01 : 교환접수 - 교환상품
      * E11 : 교환접수거부
      * E12 : 교환보류
      * E13 : 교환접수 - 수거완료(자동)
      * E20 : 교환준비
      * E30 : 교환처리중 - 수거전
      * E31 : 교환처리중 - 수거완료
      * E32 : 교환처리중 - 입금전
      * E33 : 교환처리중 - 입금완료
      * E34 : 교환처리중 - 환불전
      * E35 : 교환처리중 - 환불완료
      * E36 : 교환처리중 - 환불보류
      * E40 : 교환완료
      * E41 : 교환 완료 - 교환철회
      * E50 : 교환철회 - 판매자
      * E51 : 교환철회 - 구매자
      * 
      * 
      */ 
    order_status?: any;
    /**
      * @description
      * 결제상태
      * 
      * F : 입금전
      * M : 추가입금대기
      * T : 입금완료(수동)
      * A : 입금완료(자동)
      * P : 결제완료
      * 
      * 
      */ 
    payment_status?: any;
    /**
      * @description
      * 회원여부
      * 
      * 회원여부. 회원과 비회원 각각의 코드가 있음.
      * 
      * 2 : 회원
      * 3 : 비회원
      * 
      * 
      */ 
    member_type?: any;
    /**
      * @description
      * 회원등급번호
      * 
      * 
      */ 
    group_no?: any;
    /**
      * @description
      * 주문자명
      * 
      * 주문자 이름. 입금자 혹은 수령자 이름과는 다를 수 있음.
      * 
      * 
      */ 
    buyer_name?: any;
    /**
      * @description
      * 수령자명
      * 
      * 수령자 이름. 주문자 혹은 입금자 이름과는 다를 수 있음.
      * 
      * 
      */ 
    receiver_name?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 
      */ 
    name_furigana?: any;
    /**
      * @description
      * 수령자주소
      * 
      * 수령자 주소. 주문자 혹은 입금자 주소와는 다를 수 있음.
      * 
      * 
      */ 
    receiver_address?: any;
    /**
      * @description
      * 회원아이디
      * 
      * 회원 아이디
      * 
      * 
      */ 
    member_id?: any;
    /**
      * @description
      * 회원 이메일
      * 
      * 
      */ 
    member_email?: any;
    /**
      * @description
      * 상품번호
      * 
      * 상품 번호
      * 
      * 
      */ 
    product_no?: any;
    /**
      * @description
      * 상품코드
      * 
      * 상품 코드
      * 
      * 
      */ 
    product_code?: any;
    /**
      * @description
      * 검색날짜 유형
      * 
      * 검색을 위한 날짜 유형 기준. 기본값은 주문일로 설정되어 있음.
      * 
      * order_date : 주문일
      * pay_date : 결제일
      * shipbegin_date : 배송시작일
      * shipend_date : 배송완료일
      * cancel_date : 주문취소일
      * place_date : 발주일
      * cancel_request_date : 취소신청일
      * cancel_accept_date : 취소접수일
      * cancel_complete_date : 취소완료일
      * exchange_request_date : 교환신청일
      * exchange_accept_date : 교환접수일
      * exchange_complete_date : 교환완료일
      * return_request_date : 반품신청일
      * return_accept_date : 반품접수일
      * return_complete_date : 반품완료일
      * purchaseconfirmation_date : 구매확정일
      * 
      * @default order_date
      * 
      * 
      */ 
    date_type?: any;
    /**
      * @description
      * 공급사 아이디
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_id?: any;
    /**
      * @description
      * 주문경로
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
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
      * 
      * 
      */ 
    order_place_id?: any;
    /**
      * @description
      * 주문자 휴대 전화
      * 
      * 
      */ 
    buyer_cellphone?: any;
    /**
      * @description
      * 주문자 일반 전화
      * 
      * 
      */ 
    buyer_phone?: any;
    /**
      * @description
      * 주문자 이메일
      * 
      * 
      */ 
    buyer_email?: any;
    /**
      * @description
      * 유입경로
      * 
      * 
      */ 
    inflow_path?: any;
    /**
      * @description
      * 정기결제 여부
      * 
      * T : 정기결제
      * F : 정기결제 아님
      * 
      * 
      */ 
    subscription?: any;
    /**
      * @description
      * 마켓 주문 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [40자]
      */ 
    market_order_no?: any;
    /**
      * @description
      * 마켓 취소요청 여부
      * 
      * T : 취소 요청된 마켓 주문
      * 
      * 
      */ 
    market_cancel_request?: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * cash : 무통장
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * deferpay : 후불
      * cvs : 편의점
      * point : 선불금
      * mileage : 적립금
      * deposit : 예치금
      * giftcard : 제휴상품권
      * pointcard : 제휴포인트
      * etc : 기타
      * 
      * 
      */ 
    payment_method?: any;
    /**
      * @description
      * PG 이름
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    payment_gateway_name?: any;
    /**
      * @description
      * 마켓 판매자 아이디
      * 
      * 
      */ 
    market_seller_id?: any;
    /**
      * @description
      * 할인수단
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * point : 적립금
      * credit : 예치금
      * coupon : 쿠폰
      * market_discount : 마켓할인
      * discount_code : 할인코드
      * 
      * 
      */ 
    discount_method?: any;
    /**
      * @description
      * 할인코드
      * 
      * 
      */ 
    discount_code?: any;
    /**
      * @description
      * 배송사 아이디
      * 
      * 최소값: [1]
      */ 
    carrier_id?: any;
    /**
      * @description
      * 주문 라벨
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    labels?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * 조회하고자 하는 최대 건수를 지정할 수 있음.
      * 예) 10 입력시 10건만 표시함.
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [1000]
      */ 
    limit?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [15000]
      */ 
    offset?: any;
  }

  export interface RetrieveAListOfOrdersOutput {
    orders: { 
    shop_no: number;
    currency: string;
    order_id: string;
    market_id: string;
    market_order_no: any;
    member_id: string;
    member_email: string;
    member_authentication: Cafe24Enum;
    initial_order_amount: { 
    order_price_amount: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    points_spent_amount: string;
    credits_spent_amount: Cafe24Datetime;
    coupon_discount_price: Cafe24Datetime;
    coupon_shipping_fee_amount: string;
    membership_discount_amount: string;
    shipping_fee_discount_amount: Cafe24Datetime;
    set_product_discount_amount: string;
    app_discount_amount: string;
    point_incentive_amount: string;
    total_amount_due: string;
    payment_amount: Cafe24Datetime;
    market_other_discount_amount: string;
    tax: string;
    };
    actual_order_amount: { 
    order_price_amount: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    points_spent_amount: string;
    credits_spent_amount: Cafe24Datetime;
    coupon_discount_price: Cafe24Datetime;
    coupon_shipping_fee_amount: string;
    membership_discount_amount: string;
    shipping_fee_discount_amount: Cafe24Datetime;
    set_product_discount_amount: string;
    app_discount_amount: string;
    point_incentive_amount: string;
    total_amount_due: string;
    payment_amount: Cafe24Datetime;
    market_other_discount_amount: string;
    tax: string;
    };
    billing_name: string;
    bank_code: string;
    bank_code_name: string;
    payment_method: string[];
    payment_method_name: string[];
    payment_gateway_names: any;
    sub_payment_method_name: string;
    sub_payment_method_code: string;
    transaction_ids: any;
    paid: Cafe24Enum;
    canceled: Cafe24Enum;
    order_date: Cafe24Datetime;
    first_order: Cafe24Enum;
    payment_date: Cafe24Datetime;
    order_from_mobile: Cafe24Enum;
    use_escrow: Cafe24Enum;
    bank_account_no: Cafe24Datetime;
    bank_account_owner_name: string;
    market_seller_id: any;
    payment_amount: Cafe24Datetime;
    cancel_date: any;
    order_place_name: string;
    order_place_id: string;
    payment_confirmation: any;
    commission: string;
    postpay: Cafe24Enum;
    admin_additional_amount: string;
    additional_shipping_fee: string;
    international_shipping_insurance: string;
    additional_handling_fee: string;
    shipping_type: Cafe24Enum;
    shipping_type_text: string;
    shipping_status: Cafe24Enum;
    shipping_fee_detail: { 
    shipping_group_code: number;
    supplier_code: string;
    shipping_fee: Cafe24Datetime;
    cancel_shipping_fee: string;
    additional_shipping_fee: string;
    refunded_shipping_fee: string;
    return_shpping_fee: string;
    items: string[];
    }[];
    regional_surcharge_detail: { 
    shipping_group_code: number;
    supplier_code: string;
    regional_surcharge_amount: Cafe24Datetime;
    cancel_shipping_fee: string;
    additional_shipping_fee: string;
    refunded_shipping_fee: string;
    return_shpping_fee: string;
    items: string[];
    }[];
    wished_delivery_date: string;
    wished_delivery_time: any;
    wished_carrier_id: any;
    wished_carrier_name: any;
    return_confirmed_date: any;
    total_supply_price: Cafe24Datetime;
    naver_point: number;
    additional_order_info_list: { 
    id: number;
    name: string;
    value: string;
    input_type: Cafe24Enum;
    product_type: Cafe24Enum;
    applied_product_list: string[];
    }[];
    store_pickup: Cafe24Enum;
    easypay_name: string;
    loan_status: any;
    subscription: Cafe24Enum;
    multiple_addresses: Cafe24Enum;
    exchange_rate: string;
    first_payment_methods: string[];
    naverpay_payment_information: Cafe24Enum;
    market_discount_info: any;
    include_tax: Cafe24Enum;
    tax_detail: { 
    name: string;
    amount: string;
    price_before_tax: Cafe24Datetime;
    price_before_tax_type: Cafe24Enum;
    order_item_code: string[];
    country_tax_rate: string;
    region_tax: { 
    rate: string;
    taxation_method: Cafe24Enum;
    };
    product_tax_override: { 
    rate: string;
    taxation_method: Cafe24Enum;
    };
    shipping_tax_override: { 
    rate: any;
    taxation_method: any;
    };
    }[];
    service_type: string;
    service_data: { 
    key: string;
    value: Cafe24Datetime;
    title: string;
    }[];
    show_shipping_address: Cafe24Enum;
    social_member_code: any;
    social_name: any;
    }[];
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface RetrieveAnOrderInput {
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
      * 품주 리소스
      * 
      * @embed
      */ 
    items?: any;
    /**
      * @description
      * 수령자정보 리소스
      * 
      * @embed
      */ 
    receivers?: any;
    /**
      * @description
      * 주문자정보 리소스
      * 
      * @embed
      */ 
    buyer?: any;
    /**
      * @description
      * 혜택 리소스
      * 
      * @embed
      */ 
    benefits?: any;
    /**
      * @description
      * 쿠폰 리소스
      * 
      * @embed
      */ 
    coupons?: any;
    /**
      * @description
      * 반품상세 리소스
      * 
      * @embed
      */ 
    return?: any;
    /**
      * @description
      * 취소상세 리소스
      * 
      * @embed
      */ 
    cancellation?: any;
    /**
      * @description
      * 교환상세 리소스
      * 
      * @embed
      */ 
    exchange?: any;
    /**
      * @description
      * 환불상세 리소스
      * 
      * @embed
      */ 
    refunds?: any;
  }

  export interface RetrieveAnOrderOutput {
    order: { 
    shop_no: number;
    currency: string;
    order_id: string;
    market_id: string;
    market_order_no: any;
    member_id: string;
    member_authentication: Cafe24Enum;
    customer_group_no_when_ordering: number;
    initial_order_amount: { 
    order_price_amount: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    points_spent_amount: string;
    credits_spent_amount: Cafe24Datetime;
    coupon_discount_price: Cafe24Datetime;
    coupon_shipping_fee_amount: string;
    membership_discount_amount: string;
    shipping_fee_discount_amount: Cafe24Datetime;
    set_product_discount_amount: string;
    app_discount_amount: string;
    point_incentive_amount: string;
    total_amount_due: string;
    payment_amount: Cafe24Datetime;
    market_other_discount_amount: string;
    tax: string;
    };
    actual_order_amount: { 
    order_price_amount: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    points_spent_amount: string;
    credits_spent_amount: Cafe24Datetime;
    coupon_discount_price: string;
    coupon_shipping_fee_amount: string;
    membership_discount_amount: string;
    shipping_fee_discount_amount: string;
    set_product_discount_amount: string;
    app_discount_amount: string;
    point_incentive_amount: string;
    total_amount_due: string;
    payment_amount: Cafe24Datetime;
    market_other_discount_amount: string;
    tax: string;
    };
    billing_name: string;
    bank_code: string;
    bank_code_name: string;
    payment_method: string[];
    payment_method_name: string[];
    payment_gateway_names: any;
    sub_payment_method_name: string;
    sub_payment_method_code: string;
    transaction_ids: any;
    paid: Cafe24Enum;
    canceled: Cafe24Enum;
    order_date: Cafe24Datetime;
    first_order: Cafe24Enum;
    payment_date: Cafe24Datetime;
    order_from_mobile: Cafe24Enum;
    use_escrow: Cafe24Enum;
    bank_account_no: Cafe24Datetime;
    bank_account_owner_name: string;
    market_seller_id: any;
    payment_amount: Cafe24Datetime;
    cancel_date: any;
    order_place_name: string;
    order_place_id: string;
    payment_confirmation: any;
    commission: string;
    postpay: Cafe24Enum;
    admin_additional_amount: string;
    additional_shipping_fee: string;
    international_shipping_insurance: string;
    additional_handling_fee: string;
    shipping_type: Cafe24Enum;
    shipping_type_text: string;
    shipping_status: Cafe24Enum;
    shipping_fee_detail: { 
    shipping_group_code: number;
    supplier_code: string;
    shipping_fee: Cafe24Datetime;
    cancel_shipping_fee: string;
    additional_shipping_fee: string;
    refunded_shipping_fee: string;
    return_shpping_fee: string;
    items: string[];
    }[];
    regional_surcharge_detail: { 
    shipping_group_code: number;
    supplier_code: string;
    regional_surcharge_amount: Cafe24Datetime;
    cancel_shipping_fee: string;
    additional_shipping_fee: string;
    refunded_shipping_fee: string;
    return_shpping_fee: string;
    items: string[];
    }[];
    wished_delivery_date: string;
    wished_delivery_time: any;
    wished_carrier_id: any;
    wished_carrier_name: any;
    return_confirmed_date: any;
    total_supply_price: Cafe24Datetime;
    naver_point: number;
    additional_order_info_list: { 
    id: number;
    name: string;
    value: string;
    input_type: Cafe24Enum;
    product_type: Cafe24Enum;
    applied_product_list: string[];
    }[];
    store_pickup: Cafe24Enum;
    easypay_name: string;
    loan_status: any;
    subscription: Cafe24Enum;
    multiple_addresses: Cafe24Enum;
    exchange_rate: Cafe24Datetime;
    first_payment_methods: string[];
    naverpay_payment_information: Cafe24Enum;
    include_tax: Cafe24Enum;
    tax_detail: { 
    name: string;
    amount: string;
    price_before_tax: Cafe24Datetime;
    price_before_tax_type: Cafe24Enum;
    order_item_code: string[];
    country_tax_rate: string;
    region_tax: { 
    rate: string;
    taxation_method: Cafe24Enum;
    };
    product_tax_override: { 
    rate: string;
    taxation_method: Cafe24Enum;
    };
    shipping_tax_override: { 
    rate: any;
    taxation_method: any;
    };
    }[];
    service_type: string;
    service_data: { 
    key: string;
    value: Cafe24Datetime;
    title: string;
    }[];
    show_shipping_address: Cafe24Enum;
    social_member_code: any;
    social_name: any;
    };
  }
  export interface RetrieveACountOfOrdersInput {
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
    shop_no?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 검색을 시작할 기준일
      * 
      * 날짜
      */ 
    start_date?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 검색을 종료할 기준일
      * 검색 시작일과 같이 사용해야함.
      * 검색기간은 한 호출에 3개월 이상 검색 불가.
      * 
      * 날짜
      */ 
    end_date?: any;
    /**
      * @description
      * 주문번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 주문번호
      */ 
    order_id?: any;
    /**
      * @description
      * 주문상태
      * 
      * 주문상태. 주문 상태별로 각각의 코드가 있음.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * N00 : 입금전
      * N10 : 상품준비중
      * N20 : 배송준비중
      * N21 : 배송대기
      * N22 : 배송보류
      * N30 : 배송중
      * N40 : 배송완료
      * N50 : 구매확정
      * C00 : 취소신청
      * C10 : 취소접수 - 관리자
      * C11 : 취소접수거부 - 관리자
      * C34 : 취소처리중 - 환불전
      * C35 : 취소처리중 - 환불완료
      * C36 : 취소처리중 - 환불보류
      * C40 : 취소완료
      * C41 : 취소 완료 - 환불전
      * C42 : 취소 완료 - 환불요청중
      * C43 : 취소 완료 - 환불보류
      * C47 : 입금전취소 - 구매자
      * C48 : 입금전취소 - 자동취소
      * C49 : 입금전취소 - 관리자
      * R00 : 반품신청
      * R10 : 반품접수
      * R11 : 반품 접수 거부
      * R12 : 반품보류
      * R13 : 반품접수 - 수거완료(자동)
      * R20 : 반품 수거 완료
      * R30 : 반품처리중 - 수거전
      * R31 : 반품처리중 - 수거완료
      * R34 : 반품처리중 - 환불전
      * R36 : 반품처리중 - 환불보류
      * R40 : 반품완료 - 환불완료
      * R41 : 반품완료 - 환불전
      * R42 : 반품완료 - 환불요청중
      * R43 : 반품완료 - 환불보류
      * E00 : 교환신청
      * E10 : 교환접수
      * N01 : 교환접수 - 교환상품
      * E11 : 교환접수거부
      * E12 : 교환보류
      * E13 : 교환접수 - 수거완료(자동)
      * E20 : 교환준비
      * E30 : 교환처리중 - 수거전
      * E31 : 교환처리중 - 수거완료
      * E32 : 교환처리중 - 입금전
      * E33 : 교환처리중 - 입금완료
      * E34 : 교환처리중 - 환불전
      * E35 : 교환처리중 - 환불완료
      * E36 : 교환처리중 - 환불보류
      * E40 : 교환완료
      * E41 : 교환 완료 - 교환철회
      * E50 : 교환철회 - 판매자
      * E51 : 교환철회 - 구매자
      * 
      * 
      */ 
    order_status?: any;
    /**
      * @description
      * 결제상태
      * 
      * F : 입금전
      * M : 추가입금대기
      * T : 입금완료(수동)
      * A : 입금완료(자동)
      * P : 결제완료
      * 
      * 
      */ 
    payment_status?: any;
    /**
      * @description
      * 회원여부
      * 
      * 회원여부. 회원과 비회원 각각의 코드가 있음.
      * 
      * 2 : 회원
      * 3 : 비회원
      * 
      * 
      */ 
    member_type?: any;
    /**
      * @description
      * 회원등급번호
      * 
      * 
      */ 
    group_no?: any;
    /**
      * @description
      * 주문자명
      * 
      * 주문자 이름. 입금자 혹은 수령자 이름과는 다를 수 있음.
      * 
      * 
      */ 
    buyer_name?: any;
    /**
      * @description
      * 수령자명
      * 
      * 수령자 이름. 주문자 혹은 입금자 이름과는 다를 수 있음.
      * 
      * 
      */ 
    receiver_name?: any;
    /**
      * @description
      * 수령자명 (발음)
      * 
      * 
      */ 
    name_furigana?: any;
    /**
      * @description
      * 수령자주소
      * 
      * 수령자 주소. 주문자 혹은 입금자 주소와는 다를 수 있음.
      * 
      * 
      */ 
    receiver_address?: any;
    /**
      * @description
      * 회원아이디
      * 
      * 회원 아이디
      * 
      * 
      */ 
    member_id?: any;
    /**
      * @description
      * 회원 이메일
      * 
      * 
      */ 
    member_email?: any;
    /**
      * @description
      * 상품번호
      * 
      * 상품 번호
      * 
      * 
      */ 
    product_no?: any;
    /**
      * @description
      * 상품코드
      * 
      * 검색어를 상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
      * 
      * 
      */ 
    product_code?: any;
    /**
      * @description
      * 검색날짜 유형
      * 
      * 검색을 위한 날짜 유형 기준. 기본값은 주문일로 설정되어 있음.
      * 
      * order_date : 주문일
      * pay_date : 결제일
      * shipbegin_date : 배송시작일
      * shipend_date : 배송완료일
      * cancel_date : 주문취소일
      * place_date : 발주일
      * cancel_request_date : 취소신청일
      * cancel_accept_date : 취소접수일
      * cancel_complete_date : 취소완료일
      * exchange_request_date : 교환신청일
      * exchange_accept_date : 교환접수일
      * exchange_complete_date : 교환완료일
      * return_request_date : 반품신청일
      * return_accept_date : 반품접수일
      * return_complete_date : 반품완료일
      * purchaseconfirmation_date : 구매확정일
      * 
      * @default order_date
      * 
      * 
      */ 
    date_type?: any;
    /**
      * @description
      * 공급사 아이디
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_id?: any;
    /**
      * @description
      * 주문경로
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
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
      * 
      * 
      */ 
    order_place_id?: any;
    /**
      * @description
      * 주문자 휴대 전화
      * 
      * 
      */ 
    buyer_cellphone?: any;
    /**
      * @description
      * 주문자 일반 전화
      * 
      * 
      */ 
    buyer_phone?: any;
    /**
      * @description
      * 주문자 이메일
      * 
      * 
      */ 
    buyer_email?: any;
    /**
      * @description
      * 유입경로
      * 
      * 
      */ 
    inflow_path?: any;
    /**
      * @description
      * 정기결제 여부
      * 
      * T : 정기결제
      * F : 정기결제 아님
      * 
      * 
      */ 
    subscription?: any;
    /**
      * @description
      * 마켓 주문 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [40자]
      */ 
    market_order_no?: any;
    /**
      * @description
      * 마켓 취소요청 여부
      * 
      * T : 취소 요청된 마켓 주문
      * 
      * 
      */ 
    market_cancel_request?: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * cash : 무통장
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * deferpay : 후불
      * cvs : 편의점
      * point : 선불금
      * mileage : 적립금
      * deposit : 예치금
      * giftcard : 제휴상품권
      * pointcard : 제휴포인트
      * etc : 기타
      * 
      * 
      */ 
    payment_method?: any;
    /**
      * @description
      * PG 이름
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    payment_gateway_name?: any;
    /**
      * @description
      * 마켓 판매자 아이디
      * 
      * 
      */ 
    market_seller_id?: any;
    /**
      * @description
      * 할인수단
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * point : 적립금
      * credit : 예치금
      * coupon : 쿠폰
      * market_discount : 마켓할인
      * discount_code : 할인코드
      * 
      * 
      */ 
    discount_method?: any;
    /**
      * @description
      * 할인코드
      * 
      * 
      */ 
    discount_code?: any;
    /**
      * @description
      * 배송사 아이디
      * 
      * 최소값: [1]
      */ 
    carrier_id?: any;
    /**
      * @description
      * 주문 라벨
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    labels?: any;
  }

  export interface RetrieveACountOfOrdersOutput {
    count: number;
  }
  export interface UpdateStatusForMultipleOrdersInput {
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
      */ 
    order_id: any;
    /**
      * @description
      * 주문상태
      * 
      * prepare : 배송준비중
      * prepareproduct : 상품준비중
      * hold : 배송보류
      * unhold : 배송보류해제
      * 
      * 
      */ 
    process_status?: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code?: any;
    /**
      * @description
      * 구매확정 여부
      * 
      * T : 구매확정
      * F : 구매확정 철회
      * 
      * 
      */ 
    purchase_confirmation?: any;
    /**
      * @description
      * 적립금 회수
      * 
      * T: 회수
      * F: 회수안함
      * 
      * @default F
      * 
      * 
      */ 
    collect_points?: any;
    /**
      * @description
      * 배송지 정보 표기 여부
      * 
      * T: 배송지 정보 표기
      * F: 배송지 정보 가림
      * 
      * 
      */ 
    show_shipping_address?: any;
  }

  export interface UpdateStatusForMultipleOrdersOutput {
    orders: { 
    shop_no: number;
    order_id: string;
    process_status: string;
    order_item_code: string[];
    purchase_confirmation: any;
    collect_points: Cafe24Enum;
    show_shipping_address: any;
    }[];
  }
  export interface UpdateAnOrderStatusInput {
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
      */ 
    order_id: any;
    /**
      * @description
      * 주문상태
      * 
      * prepare : 배송준비중
      * prepareproduct : 상품준비중
      * hold : 배송보류
      * unhold : 배송보류해제
      * 
      * 
      */ 
    process_status?: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code?: any;
    /**
      * @description
      * 구매확정 여부
      * 
      * T : 구매확정
      * F : 구매확정 철회
      * 
      * 
      */ 
    purchase_confirmation?: any;
    /**
      * @description
      * 적립금 회수
      * 
      * T: 회수
      * F: 회수안함
      * 
      * @default F
      * 
      * 
      */ 
    collect_points?: any;
    /**
      * @description
      * 배송지 정보 표기 여부
      * 
      * T: 배송지 정보 표기
      * F: 배송지 정보 가림
      * 
      * 
      */ 
    show_shipping_address?: any;
  }

  export interface UpdateAnOrderStatusOutput {
    order: { 
    shop_no: number;
    process_status: string;
    order_item_code: string[];
    purchase_confirmation: any;
    collect_points: Cafe24Enum;
    show_shipping_address: any;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문을 목록으로 조회할 수 있습니다.
     * 주문번호, 화폐단위, 회원아이디 등을 조회할 수 있습니다.
     * 하위 리소스들을 embed 로 활용하면 한번의 호출에 필요한 정보를 더 많이 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "orders": [
     *         {
     *             "shop_no": 1,
     *             "currency": "KRW",
     *             "order_id": "20170710-0000013",
     *             "market_id": "self",
     *             "market_order_no": null,
     *             "member_id": "sampleid",
     *             "member_email": "sample@sample.com",
     *             "member_authentication": "T",
     *             "initial_order_amount": {
     *                 "order_price_amount": "5000.00",
     *                 "shipping_fee": "14000.00",
     *                 "points_spent_amount": "0.00",
     *                 "credits_spent_amount": "1500.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "coupon_shipping_fee_amount": "0.00",
     *                 "membership_discount_amount": "0.00",
     *                 "shipping_fee_discount_amount": "5500.00",
     *                 "set_product_discount_amount": "0.00",
     *                 "app_discount_amount": "0.00",
     *                 "point_incentive_amount": "0.00",
     *                 "total_amount_due": "0.00",
     *                 "payment_amount": "30000.00",
     *                 "market_other_discount_amount": "0.00",
     *                 "tax": "150.00"
     *             },
     *             "actual_order_amount": {
     *                 "order_price_amount": "5000.00",
     *                 "shipping_fee": "14000.00",
     *                 "points_spent_amount": "0.00",
     *                 "credits_spent_amount": "1500.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "coupon_shipping_fee_amount": "0.00",
     *                 "membership_discount_amount": "0.00",
     *                 "shipping_fee_discount_amount": "5500.00",
     *                 "set_product_discount_amount": "0.00",
     *                 "app_discount_amount": "0.00",
     *                 "point_incentive_amount": "0.00",
     *                 "total_amount_due": "0.00",
     *                 "payment_amount": "30000.00",
     *                 "market_other_discount_amount": "0.00",
     *                 "tax": "80.00"
     *             },
     *             "billing_name": "Test",
     *             "bank_code": "bank_26",
     *             "bank_code_name": "Sample Bank",
     *             "payment_method": [
     *                 "card",
     *                 "cash"
     *             ],
     *             "payment_method_name": [
     *                 "Card",
     *                 "Cash"
     *             ],
     *             "payment_gateway_names": null,
     *             "sub_payment_method_name": "PayPal",
     *             "sub_payment_method_code": "PM002",
     *             "transaction_ids": null,
     *             "paid": "T",
     *             "canceled": "F",
     *             "order_date": "2018-07-04T11:21:35+09:00",
     *             "first_order": "T",
     *             "payment_date": "2018-07-04T11:21:35+09:00",
     *             "order_from_mobile": "F",
     *             "use_escrow": "F",
     *             "bank_account_no": "12312422234",
     *             "bank_account_owner_name": "John Doe",
     *             "market_seller_id": null,
     *             "payment_amount": "30000.00",
     *             "cancel_date": null,
     *             "order_place_name": "Naver Pay",
     *             "order_place_id": "NCHECKOUT",
     *             "payment_confirmation": null,
     *             "commission": "0.00",
     *             "postpay": "F",
     *             "admin_additional_amount": "0.00",
     *             "additional_shipping_fee": "0.00",
     *             "international_shipping_insurance": "0.00",
     *             "additional_handling_fee": "0.00",
     *             "shipping_type": "A",
     *             "shipping_type_text": "Domestic Shipping",
     *             "shipping_status": "T",
     *             "shipping_fee_detail": [
     *                 {
     *                     "shipping_group_code": 80,
     *                     "supplier_code": "S0000000",
     *                     "shipping_fee": "2500.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170710-0000013-01",
     *                         "20170710-0000013-02"
     *                     ]
     *                 },
     *                 {
     *                     "shipping_group_code": 81,
     *                     "supplier_code": "S000000A",
     *                     "shipping_fee": "2500.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170710-0000013-03",
     *                         "20170710-0000013-04"
     *                     ]
     *                 }
     *             ],
     *             "regional_surcharge_detail": [
     *                 {
     *                     "shipping_group_code": 82,
     *                     "supplier_code": "S0000000",
     *                     "regional_surcharge_amount": "5000.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170710-0000013-01",
     *                         "20170710-0000013-02"
     *                     ]
     *                 },
     *                 {
     *                     "shipping_group_code": 83,
     *                     "supplier_code": "S000000A",
     *                     "regional_surcharge_amount": "4000.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170710-0000013-03",
     *                         "20170710-0000013-04"
     *                     ]
     *                 }
     *             ],
     *             "wished_delivery_date": "",
     *             "wished_delivery_time": null,
     *             "wished_carrier_id": null,
     *             "wished_carrier_name": null,
     *             "return_confirmed_date": null,
     *             "total_supply_price": "27000",
     *             "naver_point": 0,
     *             "additional_order_info_list": [
     *                 {
     *                     "id": 1,
     *                     "name": "addtional info1",
     *                     "value": "lorem ipsu",
     *                     "input_type": "A",
     *                     "product_type": "A",
     *                     "applied_product_list": [
     *                         "iPhone X",
     *                         "iPhone X case"
     *                     ]
     *                 },
     *                 {
     *                     "id": 2,
     *                     "name": "addtional info2",
     *                     "value": "Green",
     *                     "input_type": "A",
     *                     "product_type": "A",
     *                     "applied_product_list": [
     *                         "iPhone X",
     *                         "iPhone X case"
     *                     ]
     *                 }
     *             ],
     *             "store_pickup": "F",
     *             "easypay_name": "",
     *             "loan_status": null,
     *             "subscription": "T",
     *             "multiple_addresses": "F",
     *             "exchange_rate": "1.0000",
     *             "first_payment_methods": [
     *                 "card",
     *                 "giftcard"
     *             ],
     *             "naverpay_payment_information": "N",
     *             "market_discount_info": null,
     *             "include_tax": "F",
     *             "tax_detail": [
     *                 {
     *                     "name": "VAT",
     *                     "amount": "60.00",
     *                     "price_before_tax": "15000.00",
     *                     "price_before_tax_type": "I",
     *                     "order_item_code": [
     *                         "20170710-0000013-01",
     *                         "20170710-0000013-02"
     *                     ],
     *                     "country_tax_rate": "5.00",
     *                     "region_tax": {
     *                         "rate": "10.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "product_tax_override": {
     *                         "rate": "7.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "shipping_tax_override": {
     *                         "rate": null,
     *                         "taxation_method": null
     *                     }
     *                 },
     *                 {
     *                     "name": "TAX",
     *                     "amount": "20.00",
     *                     "price_before_tax": "2500.00",
     *                     "price_before_tax_type": "S",
     *                     "order_item_code": [
     *                         "20170710-0000013-01",
     *                         "20170710-0000013-02"
     *                     ],
     *                     "country_tax_rate": "5.00",
     *                     "region_tax": {
     *                         "rate": "10.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "product_tax_override": {
     *                         "rate": null,
     *                         "taxation_method": null
     *                     },
     *                     "shipping_tax_override": {
     *                         "rate": "7.00",
     *                         "taxation_method": "A"
     *                     }
     *                 }
     *             ],
     *             "service_type": "rental",
     *             "service_data": [
     *                 {
     *                     "key": "rental_period",
     *                     "value": "12",
     *                     "title": "rental period"
     *                 },
     *                 {
     *                     "key": "rental_amount",
     *                     "value": "10000",
     *                     "title": "rental amount"
     *                 }
     *             ],
     *             "show_shipping_address": "T",
     *             "social_member_code": null,
     *             "social_name": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "currency": "KRW",
     *             "order_id": "20170711-0000014",
     *             "market_id": "self",
     *             "market_order_no": null,
     *             "member_id": "sampleid",
     *             "member_email": "sample@sample.com",
     *             "member_authentication": "T",
     *             "initial_order_amount": {
     *                 "order_price_amount": "5000.00",
     *                 "shipping_fee": "7000.00",
     *                 "points_spent_amount": "0.00",
     *                 "credits_spent_amount": "1500.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "coupon_shipping_fee_amount": "0.00",
     *                 "membership_discount_amount": "0.00",
     *                 "shipping_fee_discount_amount": "5500.00",
     *                 "app_discount_amount": "0.00",
     *                 "point_incentive_amount": "0.00",
     *                 "total_amount_due": "0.00",
     *                 "payment_amount": "30000.00",
     *                 "market_other_discount_amount": "0.00",
     *                 "tax": "120.00"
     *             },
     *             "actual_order_amount": {
     *                 "order_price_amount": "5000.00",
     *                 "shipping_fee": "14000.00",
     *                 "points_spent_amount": "0.00",
     *                 "credits_spent_amount": "1500.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "coupon_shipping_fee_amount": "0.00",
     *                 "membership_discount_amount": "0.00",
     *                 "shipping_fee_discount_amount": "5500.00",
     *                 "app_discount_amount": "0.00",
     *                 "point_incentive_amount": "0.00",
     *                 "total_amount_due": "0.00",
     *                 "payment_amount": "30000.00",
     *                 "market_other_discount_amount": "0.00",
     *                 "tax": "60.00"
     *             },
     *             "billing_name": "123",
     *             "bank_code": "bank_26",
     *             "bank_code_name": "Sample Bank",
     *             "payment_method": [
     *                 "card",
     *                 "cash"
     *             ],
     *             "payment_method_name": [
     *                 "Card",
     *                 "Cash"
     *             ],
     *             "payment_gateway_names": null,
     *             "sub_payment_method_name": "PayPal",
     *             "sub_payment_method_code": "PM002",
     *             "transaction_ids": null,
     *             "paid": "T",
     *             "canceled": "F",
     *             "order_date": "2018-07-04T11:21:35+09:00",
     *             "first_order": "F",
     *             "payment_date": "2018-07-04T11:21:35+09:00",
     *             "order_from_mobile": "F",
     *             "use_escrow": "F",
     *             "bank_account_no": "12312422234",
     *             "bank_account_owner_name": "John Doe",
     *             "market_seller_id": null,
     *             "payment_amount": "10000.00",
     *             "cancel_date": null,
     *             "order_place_name": "Naver Pay",
     *             "order_place_id": "NCHECKOUT",
     *             "payment_confirmation": null,
     *             "commission": "0.00",
     *             "postpay": "F",
     *             "admin_additional_amount": "0.00",
     *             "additional_shipping_fee": "0.00",
     *             "international_shipping_insurance": "0.00",
     *             "additional_handling_fee": "0.00",
     *             "shipping_type": "A",
     *             "shipping_type_text": "Domestic Shipping",
     *             "shipping_status": "M",
     *             "shipping_fee_detail": [
     *                 {
     *                     "shipping_group_code": 90,
     *                     "supplier_code": "S0000000",
     *                     "shipping_fee": "2500.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170711-0000014-01",
     *                         "20170711-0000014-02"
     *                     ]
     *                 },
     *                 {
     *                     "shipping_group_code": 91,
     *                     "supplier_code": "S000000A",
     *                     "shipping_fee": "2500.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170711-0000014-03",
     *                         "20170711-0000014-04"
     *                     ]
     *                 }
     *             ],
     *             "regional_surcharge_detail": [
     *                 {
     *                     "shipping_group_code": 92,
     *                     "supplier_code": "S0000000",
     *                     "regional_surcharge_amount": "1000.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170711-0000014-01",
     *                         "20170711-0000014-02"
     *                     ]
     *                 },
     *                 {
     *                     "shipping_group_code": 93,
     *                     "supplier_code": "S000000A",
     *                     "regional_surcharge_amount": "1000.00",
     *                     "cancel_shipping_fee": "0.00",
     *                     "additional_shipping_fee": "0.00",
     *                     "refunded_shipping_fee": "0.00",
     *                     "return_shpping_fee": "0.00",
     *                     "items": [
     *                         "20170711-0000014-03",
     *                         "20170711-0000014-04"
     *                     ]
     *                 }
     *             ],
     *             "wished_delivery_date": "",
     *             "wished_delivery_time": null,
     *             "wished_carrier_id": null,
     *             "wished_carrier_name": null,
     *             "return_confirmed_date": null,
     *             "total_supply_price": "9000",
     *             "naver_point": 0,
     *             "additional_order_info_list": [],
     *             "store_pickup": "F",
     *             "easypay_name": "",
     *             "loan_status": null,
     *             "subscription": "F",
     *             "multiple_addresses": "T",
     *             "exchange_rate": "1063.2117",
     *             "first_payment_methods": [
     *                 "card",
     *                 "giftcard"
     *             ],
     *             "naverpay_payment_information": null,
     *             "include_tax": "F",
     *             "tax_detail": [
     *                 {
     *                     "name": "VAT",
     *                     "amount": "50.00",
     *                     "price_before_tax": "15000.00",
     *                     "price_before_tax_type": "I",
     *                     "order_item_code": [
     *                         "20170710-0000014-01",
     *                         "20170710-0000014-02"
     *                     ],
     *                     "country_tax_rate": "5.00",
     *                     "region_tax": {
     *                         "rate": "10.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "product_tax_override": {
     *                         "rate": "7.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "shipping_tax_override": {
     *                         "rate": null,
     *                         "taxation_method": null
     *                     }
     *                 },
     *                 {
     *                     "name": "TAX",
     *                     "amount": "10.00",
     *                     "price_before_tax": "2500.00",
     *                     "price_before_tax_type": "S",
     *                     "order_item_code": [
     *                         "20170710-0000014-01",
     *                         "20170710-0000014-02"
     *                     ],
     *                     "country_tax_rate": "5.00",
     *                     "region_tax": {
     *                         "rate": "10.00",
     *                         "taxation_method": "A"
     *                     },
     *                     "product_tax_override": {
     *                         "rate": null,
     *                         "taxation_method": null
     *                     },
     *                     "shipping_tax_override": {
     *                         "rate": "7.00",
     *                         "taxation_method": "A"
     *                     }
     *                 }
     *             ],
     *             "service_type": "rental",
     *             "service_data": [
     *                 {
     *                     "key": "rental_period",
     *                     "value": "12",
     *                     "title": "rental period"
     *                 },
     *                 {
     *                     "key": "rental_amount",
     *                     "value": "10000",
     *                     "title": "rental amount"
     *                 }
     *             ],
     *             "show_shipping_address": "T",
     *             "social_member_code": null,
     *             "social_name": null
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/orders?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfOrders(
      input: RetrieveAListOfOrdersInput,
      options?: RequestOptions<RetrieveAListOfOrdersOutput['orders'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfOrdersOutput>>;
    /**
     * @description
     * 주문 1건을 조회할 수 있습니다.
     * 주문번호, 회원아이디, 결제수단 등을 조회할 수 있습니다.
     * 하위 리소스들을 embed 로 활용하면 한번의 호출에 필요한 정보를 더 많이 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "shop_no": 1,
     *         "currency": "KRW",
     *         "order_id": "20170710-0000013",
     *         "market_id": "self",
     *         "market_order_no": null,
     *         "member_id": "sampleid",
     *         "member_authentication": "T",
     *         "customer_group_no_when_ordering": 1,
     *         "initial_order_amount": {
     *             "order_price_amount": "5000.00",
     *             "shipping_fee": "14000.00",
     *             "points_spent_amount": "0.00",
     *             "credits_spent_amount": "1500.00",
     *             "coupon_discount_price": "1000.00",
     *             "coupon_shipping_fee_amount": "0.00",
     *             "membership_discount_amount": "0.00",
     *             "shipping_fee_discount_amount": "5500.00",
     *             "set_product_discount_amount": "0.00",
     *             "app_discount_amount": "0.00",
     *             "point_incentive_amount": "0.00",
     *             "total_amount_due": "0.00",
     *             "payment_amount": "30000.00",
     *             "market_other_discount_amount": "0.00",
     *             "tax": "120.0"
     *         },
     *         "actual_order_amount": {
     *             "order_price_amount": "5000.00",
     *             "shipping_fee": "14000.00",
     *             "points_spent_amount": "0.00",
     *             "credits_spent_amount": "1500.00",
     *             "coupon_discount_price": "0.00",
     *             "coupon_shipping_fee_amount": "0.00",
     *             "membership_discount_amount": "0.00",
     *             "shipping_fee_discount_amount": "0.00",
     *             "set_product_discount_amount": "0.00",
     *             "app_discount_amount": "0.00",
     *             "point_incentive_amount": "0.00",
     *             "total_amount_due": "0.00",
     *             "payment_amount": "16000.00",
     *             "market_other_discount_amount": "0.00",
     *             "tax": "60.0"
     *         },
     *         "billing_name": "Test",
     *         "bank_code": "bank_26",
     *         "bank_code_name": "Sample Bank",
     *         "payment_method": [
     *             "card",
     *             "cash"
     *         ],
     *         "payment_method_name": [
     *             "Card",
     *             "Cash"
     *         ],
     *         "payment_gateway_names": null,
     *         "sub_payment_method_name": "PayPal",
     *         "sub_payment_method_code": "PM002",
     *         "transaction_ids": null,
     *         "paid": "T",
     *         "canceled": "F",
     *         "order_date": "2018-07-04T11:21:35+09:00",
     *         "first_order": "T",
     *         "payment_date": "2018-07-04T11:21:35+09:00",
     *         "order_from_mobile": "F",
     *         "use_escrow": "F",
     *         "bank_account_no": "12312422234",
     *         "bank_account_owner_name": "John Doe",
     *         "market_seller_id": null,
     *         "payment_amount": "30000.00",
     *         "cancel_date": null,
     *         "order_place_name": "Naver Pay",
     *         "order_place_id": "NCHECKOUT",
     *         "payment_confirmation": null,
     *         "commission": "0.00",
     *         "postpay": "F",
     *         "admin_additional_amount": "0.00",
     *         "additional_shipping_fee": "0.00",
     *         "international_shipping_insurance": "0.00",
     *         "additional_handling_fee": "0.00",
     *         "shipping_type": "A",
     *         "shipping_type_text": "Domestic Shipping",
     *         "shipping_status": "T",
     *         "shipping_fee_detail": [
     *             {
     *                 "shipping_group_code": 80,
     *                 "supplier_code": "S0000000",
     *                 "shipping_fee": "2500.00",
     *                 "cancel_shipping_fee": "0.00",
     *                 "additional_shipping_fee": "0.00",
     *                 "refunded_shipping_fee": "0.00",
     *                 "return_shpping_fee": "0.00",
     *                 "items": [
     *                     "20170710-0000013-01",
     *                     "20170710-0000013-02"
     *                 ]
     *             },
     *             {
     *                 "shipping_group_code": 81,
     *                 "supplier_code": "S000000A",
     *                 "shipping_fee": "2500.00",
     *                 "cancel_shipping_fee": "0.00",
     *                 "additional_shipping_fee": "0.00",
     *                 "refunded_shipping_fee": "0.00",
     *                 "return_shpping_fee": "0.00",
     *                 "items": [
     *                     "20170710-0000013-03",
     *                     "20170710-0000013-04"
     *                 ]
     *             }
     *         ],
     *         "regional_surcharge_detail": [
     *             {
     *                 "shipping_group_code": 82,
     *                 "supplier_code": "S0000000",
     *                 "regional_surcharge_amount": "5000.00",
     *                 "cancel_shipping_fee": "0.00",
     *                 "additional_shipping_fee": "0.00",
     *                 "refunded_shipping_fee": "0.00",
     *                 "return_shpping_fee": "0.00",
     *                 "items": [
     *                     "20170710-0000013-01",
     *                     "20170710-0000013-02"
     *                 ]
     *             },
     *             {
     *                 "shipping_group_code": 83,
     *                 "supplier_code": "S000000A",
     *                 "regional_surcharge_amount": "4000.00",
     *                 "cancel_shipping_fee": "0.00",
     *                 "additional_shipping_fee": "0.00",
     *                 "refunded_shipping_fee": "0.00",
     *                 "return_shpping_fee": "0.00",
     *                 "items": [
     *                     "20170710-0000013-03",
     *                     "20170710-0000013-04"
     *                 ]
     *             }
     *         ],
     *         "wished_delivery_date": "",
     *         "wished_delivery_time": null,
     *         "wished_carrier_id": null,
     *         "wished_carrier_name": null,
     *         "return_confirmed_date": null,
     *         "total_supply_price": "27000",
     *         "naver_point": 0,
     *         "additional_order_info_list": [
     *             {
     *                 "id": 1,
     *                 "name": "addtional info1",
     *                 "value": "lorem ipsu",
     *                 "input_type": "A",
     *                 "product_type": "A",
     *                 "applied_product_list": [
     *                     "iPhone X",
     *                     "iPhone X case"
     *                 ]
     *             },
     *             {
     *                 "id": 2,
     *                 "name": "addtional info2",
     *                 "value": "Green",
     *                 "input_type": "A",
     *                 "product_type": "A",
     *                 "applied_product_list": [
     *                     "iPhone X",
     *                     "iPhone X case"
     *                 ]
     *             }
     *         ],
     *         "store_pickup": "F",
     *         "easypay_name": "",
     *         "loan_status": null,
     *         "subscription": "T",
     *         "multiple_addresses": "F",
     *         "exchange_rate": "1063.2117",
     *         "first_payment_methods": [
     *             "card",
     *             "giftcard"
     *         ],
     *         "naverpay_payment_information": "N",
     *         "include_tax": "T",
     *         "tax_detail": [
     *             {
     *                 "name": "VAT",
     *                 "amount": "50.00",
     *                 "price_before_tax": "15000.00",
     *                 "price_before_tax_type": "I",
     *                 "order_item_code": [
     *                     "20170710-0000013-01",
     *                     "20170710-0000013-02"
     *                 ],
     *                 "country_tax_rate": "5.00",
     *                 "region_tax": {
     *                     "rate": "10.00",
     *                     "taxation_method": "A"
     *                 },
     *                 "product_tax_override": {
     *                     "rate": "7.00",
     *                     "taxation_method": "A"
     *                 },
     *                 "shipping_tax_override": {
     *                     "rate": null,
     *                     "taxation_method": null
     *                 }
     *             },
     *             {
     *                 "name": "TAX",
     *                 "amount": "10.00",
     *                 "price_before_tax": "2500.00",
     *                 "price_before_tax_type": "S",
     *                 "order_item_code": [
     *                     "20170710-0000013-01",
     *                     "20170710-0000013-02"
     *                 ],
     *                 "country_tax_rate": "5.00",
     *                 "region_tax": {
     *                     "rate": "10.00",
     *                     "taxation_method": "A"
     *                 },
     *                 "product_tax_override": {
     *                     "rate": null,
     *                     "taxation_method": null
     *                 },
     *                 "shipping_tax_override": {
     *                     "rate": "7.00",
     *                     "taxation_method": "A"
     *                 }
     *             }
     *         ],
     *         "service_type": "rental",
     *         "service_data": [
     *             {
     *                 "key": "rental_period",
     *                 "value": "12",
     *                 "title": "rental period"
     *             },
     *             {
     *                 "key": "rental_amount",
     *                 "value": "10000",
     *                 "title": "rental amount"
     *             }
     *         ],
     *         "show_shipping_address": "T",
     *         "social_member_code": null,
     *         "social_name": null
     *     }
     * }
     * ```
     */
    retrieveAnOrder(
      input: RetrieveAnOrderInput,
      options?: RequestOptions<RetrieveAnOrderOutput['order']>,
    ): Promise<AxiosResponse<RetrieveAnOrderOutput>>;
    /**
     * @description
     * 주문의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfOrders(
      input: RetrieveACountOfOrdersInput,
      options?: RequestOptions<RetrieveACountOfOrdersOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfOrdersOutput>>;
    /**
     * @description
     * 여러건의 주문의 주문상태를 수정할 수 있습니다.
     * 구매자나 수령자의 정보를 수정하기 위해서는 Orders buyer, Orders receivers 를 확인해주세요.
     * 주문의 배송처리는 Orders shipments 를 확인해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-status-for-multiple-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "orders": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20171207-0000021",
     *             "process_status": "prepare",
     *             "order_item_code": [
     *                 "20171207-0000021-01",
     *                 "20171207-0000021-02"
     *             ],
     *             "purchase_confirmation": null,
     *             "collect_points": "F",
     *             "show_shipping_address": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20171207-0000023",
     *             "process_status": "prepare",
     *             "order_item_code": [
     *                 "20171207-0000023-01",
     *                 "20171207-0000023-02"
     *             ],
     *             "purchase_confirmation": null,
     *             "collect_points": "F",
     *             "show_shipping_address": null
     *         }
     *     ]
     * }
     * ```
     */
    updateStatusForMultipleOrders(
      input: UpdateStatusForMultipleOrdersInput,
      options?: RequestOptions<UpdateStatusForMultipleOrdersOutput['orders'][number]>,
    ): Promise<AxiosResponse<UpdateStatusForMultipleOrdersOutput>>;
    /**
     * @description
     * 주문 1건의 주문상태를 수정할 수 있습니다.
     * 구매자나 수령자의 정보를 수정하기 위해서는 Orders buyer, Orders receivers 를 확인해주세요.
     * 주문의 배송처리는 Orders shipments 를 확인해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-status
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "shop_no": 1,
     *         "process_status": "prepare",
     *         "order_item_code": [
     *             "20180627-0000017-01",
     *             "20180627-0000017-02"
     *         ],
     *         "purchase_confirmation": null,
     *         "collect_points": "F",
     *         "show_shipping_address": null
     *     }
     * }
     * ```
     */
    updateAnOrderStatus(
      input: UpdateAnOrderStatusInput,
      options?: RequestOptions<UpdateAnOrderStatusOutput['order']>,
    ): Promise<AxiosResponse<UpdateAnOrderStatusOutput>>;
  }
}
