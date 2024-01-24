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
    shopNo: any;
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
    orderId: any;
    /**
     * @description
     * 마켓 구분값
     *
     * 가격 비교 사이트를 통하여 마켓 등에서 상품 구매 시 해당 사이트를 구분하기 위한 ID
     *
     *
     */
    marketId: any;
    /**
     * @description
     * 마켓 주문 번호
     *
     *
     */
    marketOrderNo: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 회원 이메일
     *
     *
     */
    memberEmail: any;
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
    memberAuthentication: any;
    /**
     * @description
     * 결제자명
     *
     * 입금자 이름. 주문자 혹은 수령자 이름과는 다를 수 있음.
     *
     *
     */
    billingName: any;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     *
     *
     */
    bankCode: any;
    /**
     * @description
     * 입금자 은행명
     *
     *
     */
    bankCodeName: any;
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
    paymentMethod: any;
    /**
     * @description
     * 결제수단명
     *
     * 주문자가 이용한 결제수단의 이름
     *
     *
     */
    paymentMethodName: any;
    /**
     * @description
     * PG 이름
     *
     *
     */
    paymentGatewayNames: any;
    /**
     * @description
     * 해외 결제수단명
     *
     *
     */
    subPaymentMethodName: any;
    /**
     * @description
     * 해외 결제수단코드
     *
     * sub_payment_method_code
     *
     *
     */
    subPaymentMethodCode: any;
    /**
     * @description
     * 카드 거래 아이디
     *
     *
     */
    transactionIds: any;
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
    orderDate: any;
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
    firstOrder: any;
    /**
     * @description
     * 결제일
     *
     *
     */
    paymentDate: any;
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
    orderFromMobile: any;
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
    useEscrow: any;
    /**
     * @description
     * 주문시 회원등급
     *
     *
     */
    groupNoWhenOrdering: any;
    /**
     * @description
     * 최초 주문 금액
     *
     *
     */
    initialOrderAmount: any;
    /**
     * @description
     * 현재 주문 금액
     *
     * 실결제금액 중 coupon_shipping_fee_amount는 할인 금액 자동 계산을 사용할 때만 품목별로 배송비 배분이 가능하기 때문에 할인 금액 자동 계산 기능을 사용할 때만 노출됨
     *
     *
     */
    actualOrderAmount: any;
    /**
     * @description
     * 계좌번호
     *
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: any;
    /**
     * @description
     * 예금주
     *
     *
     */
    bankAccountOwnerName: any;
    /**
     * @description
     * 마켓 판매자 아이디
     *
     *
     */
    marketSellerId: any;
    /**
     * @description
     * 최종 결제 금액
     *
     *
     */
    paymentAmount: any;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: any;
    /**
     * @description
     * 주문경로
     *
     *
     */
    orderPlaceId: any;
    /**
     * @description
     * 후불결제 입금확인 가능 여부
     *
     * T : 입금확인
     * F : 입금미확인
     *
     *
     */
    paymentConfirmation: any;
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
    adminAdditionalAmount: any;
    /**
     * @description
     * 추가 배송비
     *
     *
     */
    additionalShippingFee: any;
    /**
     * @description
     * 해외배송 보험료
     *
     *
     */
    internationalShippingInsurance: any;
    /**
     * @description
     * 해외배송 부가금액
     *
     *
     */
    additionalHandlingFee: any;
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
    shippingType: any;
    /**
     * @description
     * 배송 유형명
     *
     * 배송 유형. 국내배송인지 해외배송인지 여부
     *
     *
     */
    shippingTypeText: any;
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
    shippingStatus: any;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: any;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 희망배송사 코드
     *
     *
     */
    wishedCarrierId: any;
    /**
     * @description
     * 희망배송사 명
     *
     *
     */
    wishedCarrierName: any;
    /**
     * @description
     * 반품승인일시
     *
     *
     */
    returnConfirmedDate: any;
    /**
     * @description
     * 총 공급가액
     *
     *
     */
    totalSupplyPrice: any;
    /**
     * @description
     * 네이버포인트
     *
     *
     */
    naverPoint: any;
    /**
     * @description
     * 주문서 추가항목
     *
     *
     */
    additionalOrderInfoList: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     *
     *
     */
    storePickup: any;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: any;
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
    loanStatus: any;
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
    shippingFeeDetail: any;
    /**
     * @description
     * 지역별 배송비 정보
     *
     *
     */
    regionalSurchargeDetail: any;
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
    multipleAddresses: any;
    /**
     * @description
     * 결제 화폐 환율 정보
     *
     *
     */
    exchangeRate: any;
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
    firstPaymentMethods: any;
    /**
     * @description
     * 네이버페이 PG 결제 정보
     *
     * P : PG결제
     * N : 네이버결제
     *
     *
     */
    naverpayPaymentInformation: any;
    /**
     * @description
     * 가격에 세금 포함
     *
     * T: 세금포함
     * F: 세금제외
     *
     *
     */
    includeTax: any;
    /**
     * @description
     * 세금 상세 정보
     *
     *
     */
    taxDetail: any;
    /**
     * @description
     * 주문 서비스 유형
     *
     * rental : 렌탈주문
     *
     *
     */
    serviceType: any;
    /**
     * @description
     * 주문 서비스 데이터
     *
     *
     */
    serviceData: any;
    /**
     * @description
     * 배송지 정보 표기 여부
     *
     * T: 배송지 정보 표기
     * F: 배송지 정보 가림
     *
     *
     */
    showShippingAddress: any;
    /**
     * @description
     * 연동 된 SNS 제공코드
     *
     *
     */
    socialMemberCode: any;
    /**
     * @description
     * 연동 된 SNS명
     *
     *
     */
    socialName: any;
    /**
     * @description
     * 주문시 회원등급
     *
     * 주문 당시의 회원등급
     *
     *
     */
    customerGroupNoWhenOrdering: any;
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
    processStatus: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode: any;
    /**
     * @description
     * 구매확정 여부
     *
     *
     */
    purchaseConfirmation: any;
    /**
     * @description
     * 적립금 회수
     *
     *
     */
    collectPoints: any;
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
    shopNo?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 검색을 시작할 기준일
     *
     * 날짜
     */
    startDate?: any;
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
    endDate?: any;
    /**
     * @description
     * 주문번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 주문번호
     */
    orderId?: any;
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
    orderStatus?: any;
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
    paymentStatus?: any;
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
    memberType?: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    groupNo?: any;
    /**
     * @description
     * 주문자명
     *
     * 주문자 이름. 입금자 혹은 수령자 이름과는 다를 수 있음.
     *
     *
     */
    buyerName?: any;
    /**
     * @description
     * 수령자명
     *
     * 수령자 이름. 주문자 혹은 입금자 이름과는 다를 수 있음.
     *
     *
     */
    receiverName?: any;
    /**
     * @description
     * 수령자명 (발음)
     *
     *
     */
    nameFurigana?: any;
    /**
     * @description
     * 수령자주소
     *
     * 수령자 주소. 주문자 혹은 입금자 주소와는 다를 수 있음.
     *
     *
     */
    receiverAddress?: any;
    /**
     * @description
     * 회원아이디
     *
     * 회원 아이디
     *
     *
     */
    memberId?: any;
    /**
     * @description
     * 회원 이메일
     *
     *
     */
    memberEmail?: any;
    /**
     * @description
     * 상품번호
     *
     * 상품 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    productNo?: any;
    /**
     * @description
     * 상품코드
     *
     * 상품 코드
     *
     *
     */
    productCode?: any;
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
    dateType?: any;
    /**
     * @description
     * 공급사 아이디
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supplierId?: any;
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
    orderPlaceId?: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone?: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone?: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail?: any;
    /**
     * @description
     * 유입경로
     *
     *
     */
    inflowPath?: any;
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
    marketOrderNo?: any;
    /**
     * @description
     * 마켓 취소요청 여부
     *
     * T : 취소 요청된 마켓 주문
     *
     *
     */
    marketCancelRequest?: any;
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
    paymentMethod?: any;
    /**
     * @description
     * PG 이름
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    paymentGatewayName?: any;
    /**
     * @description
     * 마켓 판매자 아이디
     *
     *
     */
    marketSellerId?: any;
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
    discountMethod?: any;
    /**
     * @description
     * 할인코드
     *
     *
     */
    discountCode?: any;
    /**
     * @description
     * 배송사 아이디
     *
     * 최소값: [1]
     */
    carrierId?: any;
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
      shopNo: number;
      currency: string;
      orderId: string;
      marketId: string;
      marketOrderNo: any;
      memberId: string;
      memberEmail: string;
      memberAuthentication: Cafe24Enum;
      initialOrderAmount: {
        orderPriceAmount: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
        pointsSpentAmount: string;
        creditsSpentAmount: Cafe24Datetime;
        couponDiscountPrice: Cafe24Datetime;
        couponShippingFeeAmount: string;
        membershipDiscountAmount: string;
        shippingFeeDiscountAmount: Cafe24Datetime;
        setProductDiscountAmount: string;
        appDiscountAmount: string;
        pointIncentiveAmount: string;
        totalAmountDue: string;
        paymentAmount: Cafe24Datetime;
        marketOtherDiscountAmount: string;
        tax: string;
      };
      actualOrderAmount: {
        orderPriceAmount: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
        pointsSpentAmount: string;
        creditsSpentAmount: Cafe24Datetime;
        couponDiscountPrice: Cafe24Datetime;
        couponShippingFeeAmount: string;
        membershipDiscountAmount: string;
        shippingFeeDiscountAmount: Cafe24Datetime;
        setProductDiscountAmount: string;
        appDiscountAmount: string;
        pointIncentiveAmount: string;
        totalAmountDue: string;
        paymentAmount: Cafe24Datetime;
        marketOtherDiscountAmount: string;
        tax: string;
      };
      billingName: string;
      bankCode: string;
      bankCodeName: string;
      paymentMethod: string[];
      paymentMethodName: string[];
      paymentGatewayNames: any;
      subPaymentMethodName: string;
      subPaymentMethodCode: string;
      transactionIds: any;
      paid: Cafe24Enum;
      canceled: Cafe24Enum;
      orderDate: Cafe24Datetime;
      firstOrder: Cafe24Enum;
      paymentDate: Cafe24Datetime;
      orderFromMobile: Cafe24Enum;
      useEscrow: Cafe24Enum;
      bankAccountNo: Cafe24Datetime;
      bankAccountOwnerName: string;
      marketSellerId: any;
      paymentAmount: Cafe24Datetime;
      cancelDate: any;
      orderPlaceName: string;
      orderPlaceId: string;
      paymentConfirmation: any;
      commission: string;
      postpay: Cafe24Enum;
      adminAdditionalAmount: string;
      additionalShippingFee: string;
      internationalShippingInsurance: string;
      additionalHandlingFee: string;
      shippingType: Cafe24Enum;
      shippingTypeText: string;
      shippingStatus: Cafe24Enum;
      shippingFeeDetail: {
        shippingGroupCode: number;
        supplierCode: string;
        shippingFee: Cafe24Datetime;
        cancelShippingFee: string;
        additionalShippingFee: string;
        refundedShippingFee: string;
        returnShppingFee: string;
        items: string[];
      }[];
      regionalSurchargeDetail: {
        shippingGroupCode: number;
        supplierCode: string;
        regionalSurchargeAmount: Cafe24Datetime;
        cancelShippingFee: string;
        additionalShippingFee: string;
        refundedShippingFee: string;
        returnShppingFee: string;
        items: string[];
      }[];
      wishedDeliveryDate: string;
      wishedDeliveryTime: any;
      wishedCarrierId: any;
      wishedCarrierName: any;
      returnConfirmedDate: any;
      totalSupplyPrice: Cafe24Datetime;
      naverPoint: number;
      additionalOrderInfoList: {
        id: number;
        name: string;
        value: string;
        inputType: Cafe24Enum;
        productType: Cafe24Enum;
        appliedProductList: string[];
      }[];
      storePickup: Cafe24Enum;
      easypayName: string;
      loanStatus: any;
      subscription: Cafe24Enum;
      multipleAddresses: Cafe24Enum;
      exchangeRate: string;
      firstPaymentMethods: string[];
      naverpayPaymentInformation: Cafe24Enum;
      marketDiscountInfo: any;
      includeTax: Cafe24Enum;
      taxDetail: {
        name: string;
        amount: string;
        priceBeforeTax: Cafe24Datetime;
        priceBeforeTaxType: Cafe24Enum;
        orderItemCode: string[];
        countryTaxRate: string;
        regionTax: {
          rate: string;
          taxationMethod: Cafe24Enum;
        };
        productTaxOverride: {
          rate: string;
          taxationMethod: Cafe24Enum;
        };
        shippingTaxOverride: {
          rate: any;
          taxationMethod: any;
        };
      }[];
      serviceType: string;
      serviceData: {
        key: string;
        value: Cafe24Datetime;
        title: string;
      }[];
      showShippingAddress: Cafe24Enum;
      socialMemberCode: any;
      socialName: any;
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
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
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
      shopNo: number;
      currency: string;
      orderId: string;
      marketId: string;
      marketOrderNo: any;
      memberId: string;
      memberAuthentication: Cafe24Enum;
      customerGroupNoWhenOrdering: number;
      initialOrderAmount: {
        orderPriceAmount: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
        pointsSpentAmount: string;
        creditsSpentAmount: Cafe24Datetime;
        couponDiscountPrice: Cafe24Datetime;
        couponShippingFeeAmount: string;
        membershipDiscountAmount: string;
        shippingFeeDiscountAmount: Cafe24Datetime;
        setProductDiscountAmount: string;
        appDiscountAmount: string;
        pointIncentiveAmount: string;
        totalAmountDue: string;
        paymentAmount: Cafe24Datetime;
        marketOtherDiscountAmount: string;
        tax: string;
      };
      actualOrderAmount: {
        orderPriceAmount: Cafe24Datetime;
        shippingFee: Cafe24Datetime;
        pointsSpentAmount: string;
        creditsSpentAmount: Cafe24Datetime;
        couponDiscountPrice: string;
        couponShippingFeeAmount: string;
        membershipDiscountAmount: string;
        shippingFeeDiscountAmount: string;
        setProductDiscountAmount: string;
        appDiscountAmount: string;
        pointIncentiveAmount: string;
        totalAmountDue: string;
        paymentAmount: Cafe24Datetime;
        marketOtherDiscountAmount: string;
        tax: string;
      };
      billingName: string;
      bankCode: string;
      bankCodeName: string;
      paymentMethod: string[];
      paymentMethodName: string[];
      paymentGatewayNames: any;
      subPaymentMethodName: string;
      subPaymentMethodCode: string;
      transactionIds: any;
      paid: Cafe24Enum;
      canceled: Cafe24Enum;
      orderDate: Cafe24Datetime;
      firstOrder: Cafe24Enum;
      paymentDate: Cafe24Datetime;
      orderFromMobile: Cafe24Enum;
      useEscrow: Cafe24Enum;
      bankAccountNo: Cafe24Datetime;
      bankAccountOwnerName: string;
      marketSellerId: any;
      paymentAmount: Cafe24Datetime;
      cancelDate: any;
      orderPlaceName: string;
      orderPlaceId: string;
      paymentConfirmation: any;
      commission: string;
      postpay: Cafe24Enum;
      adminAdditionalAmount: string;
      additionalShippingFee: string;
      internationalShippingInsurance: string;
      additionalHandlingFee: string;
      shippingType: Cafe24Enum;
      shippingTypeText: string;
      shippingStatus: Cafe24Enum;
      shippingFeeDetail: {
        shippingGroupCode: number;
        supplierCode: string;
        shippingFee: Cafe24Datetime;
        cancelShippingFee: string;
        additionalShippingFee: string;
        refundedShippingFee: string;
        returnShppingFee: string;
        items: string[];
      }[];
      regionalSurchargeDetail: {
        shippingGroupCode: number;
        supplierCode: string;
        regionalSurchargeAmount: Cafe24Datetime;
        cancelShippingFee: string;
        additionalShippingFee: string;
        refundedShippingFee: string;
        returnShppingFee: string;
        items: string[];
      }[];
      wishedDeliveryDate: string;
      wishedDeliveryTime: any;
      wishedCarrierId: any;
      wishedCarrierName: any;
      returnConfirmedDate: any;
      totalSupplyPrice: Cafe24Datetime;
      naverPoint: number;
      additionalOrderInfoList: {
        id: number;
        name: string;
        value: string;
        inputType: Cafe24Enum;
        productType: Cafe24Enum;
        appliedProductList: string[];
      }[];
      storePickup: Cafe24Enum;
      easypayName: string;
      loanStatus: any;
      subscription: Cafe24Enum;
      multipleAddresses: Cafe24Enum;
      exchangeRate: Cafe24Datetime;
      firstPaymentMethods: string[];
      naverpayPaymentInformation: Cafe24Enum;
      includeTax: Cafe24Enum;
      taxDetail: {
        name: string;
        amount: string;
        priceBeforeTax: Cafe24Datetime;
        priceBeforeTaxType: Cafe24Enum;
        orderItemCode: string[];
        countryTaxRate: string;
        regionTax: {
          rate: string;
          taxationMethod: Cafe24Enum;
        };
        productTaxOverride: {
          rate: string;
          taxationMethod: Cafe24Enum;
        };
        shippingTaxOverride: {
          rate: any;
          taxationMethod: any;
        };
      }[];
      serviceType: string;
      serviceData: {
        key: string;
        value: Cafe24Datetime;
        title: string;
      }[];
      showShippingAddress: Cafe24Enum;
      socialMemberCode: any;
      socialName: any;
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
    shopNo?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 검색을 시작할 기준일
     *
     * 날짜
     */
    startDate?: any;
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
    endDate?: any;
    /**
     * @description
     * 주문번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 주문번호
     */
    orderId?: any;
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
    orderStatus?: any;
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
    paymentStatus?: any;
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
    memberType?: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    groupNo?: any;
    /**
     * @description
     * 주문자명
     *
     * 주문자 이름. 입금자 혹은 수령자 이름과는 다를 수 있음.
     *
     *
     */
    buyerName?: any;
    /**
     * @description
     * 수령자명
     *
     * 수령자 이름. 주문자 혹은 입금자 이름과는 다를 수 있음.
     *
     *
     */
    receiverName?: any;
    /**
     * @description
     * 수령자명 (발음)
     *
     *
     */
    nameFurigana?: any;
    /**
     * @description
     * 수령자주소
     *
     * 수령자 주소. 주문자 혹은 입금자 주소와는 다를 수 있음.
     *
     *
     */
    receiverAddress?: any;
    /**
     * @description
     * 회원아이디
     *
     * 회원 아이디
     *
     *
     */
    memberId?: any;
    /**
     * @description
     * 회원 이메일
     *
     *
     */
    memberEmail?: any;
    /**
     * @description
     * 상품번호
     *
     * 상품 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    productNo?: any;
    /**
     * @description
     * 상품코드
     *
     * 검색어를 상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
     *
     *
     */
    productCode?: any;
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
    dateType?: any;
    /**
     * @description
     * 공급사 아이디
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supplierId?: any;
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
    orderPlaceId?: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone?: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone?: any;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail?: any;
    /**
     * @description
     * 유입경로
     *
     *
     */
    inflowPath?: any;
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
    marketOrderNo?: any;
    /**
     * @description
     * 마켓 취소요청 여부
     *
     * T : 취소 요청된 마켓 주문
     *
     *
     */
    marketCancelRequest?: any;
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
    paymentMethod?: any;
    /**
     * @description
     * PG 이름
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    paymentGatewayName?: any;
    /**
     * @description
     * 마켓 판매자 아이디
     *
     *
     */
    marketSellerId?: any;
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
    discountMethod?: any;
    /**
     * @description
     * 할인코드
     *
     *
     */
    discountCode?: any;
    /**
     * @description
     * 배송사 아이디
     *
     * 최소값: [1]
     */
    carrierId?: any;
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
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     */
    orderId: any;
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
    processStatus?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode?: any;
    /**
     * @description
     * 구매확정 여부
     *
     * T : 구매확정
     * F : 구매확정 철회
     *
     *
     */
    purchaseConfirmation?: any;
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
    collectPoints?: any;
    /**
     * @description
     * 배송지 정보 표기 여부
     *
     * T: 배송지 정보 표기
     * F: 배송지 정보 가림
     *
     *
     */
    showShippingAddress?: any;
  }

  export interface UpdateStatusForMultipleOrdersOutput {
    orders: {
      shopNo: number;
      orderId: string;
      processStatus: string;
      orderItemCode: string[];
      purchaseConfirmation: any;
      collectPoints: Cafe24Enum;
      showShippingAddress: any;
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
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     */
    orderId: any;
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
    processStatus?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode?: any;
    /**
     * @description
     * 구매확정 여부
     *
     * T : 구매확정
     * F : 구매확정 철회
     *
     *
     */
    purchaseConfirmation?: any;
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
    collectPoints?: any;
    /**
     * @description
     * 배송지 정보 표기 여부
     *
     * T: 배송지 정보 표기
     * F: 배송지 정보 가림
     *
     *
     */
    showShippingAddress?: any;
  }

  export interface UpdateAnOrderStatusOutput {
    order: {
      shopNo: number;
      processStatus: string;
      orderItemCode: string[];
      purchaseConfirmation: any;
      collectPoints: Cafe24Enum;
      showShippingAddress: any;
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
      options?: RequestOptions<
        UpdateStatusForMultipleOrdersOutput['orders'][number]
      >,
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
