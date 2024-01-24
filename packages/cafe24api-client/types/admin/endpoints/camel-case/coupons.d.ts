import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 쿠폰(Coupons)은 상품의 가격을 할인하거나 배송비를 할인받을 수 있도록 쇼핑몰 회원에게 발급할 수 있는 혜택입니다.
   * 쿠폰은 쇼핑몰의 판매를 촉진하기 위해 사용할 수 있으며, 다양한 형태로 회원에게 발급할 수 있습니다.
   */
  export interface Coupons {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: any;
    /**
     * @description
     * 쿠폰유형
     *
     * 쿠폰유형. 온라인 쿠폰과 오프라인 시리얼 쿠폰 유형이 있음.
     *
     * O : 온라인 쿠폰
     * S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType: any;
    /**
     * @description
     * 쿠폰명
     *
     * 쿠폰의 이름
     *
     *
     */
    couponName: any;
    /**
     * @description
     * 쿠폰설명
     *
     * 쿠폰의 설명
     *
     *
     */
    couponDescription: any;
    /**
     * @description
     * 생성일
     *
     * 쿠폰의 생성 일자
     *
     *
     */
    createdDate: any;
    /**
     * @description
     * 쿠폰삭제 여부
     *
     * 쿠폰이 삭제되었는지 여부.
     *
     * T : 삭제
     * F : 삭제되지 않음
     *
     *
     */
    deleted: any;
    /**
     * @description
     * 쿠폰 완전삭제 (발급된 쿠폰 사용정지) 여부
     *
     * 쿠폰이 완전 삭제되었는지 여부. 쿠폰이 완전 삭제되면 기존에 발급된 쿠폰도 더 이상 사용이 불가함.
     *
     * T : 완전삭제
     * F : 완전삭제 아님
     *
     *
     */
    isStoppedIssuedCoupon: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 시작시간
     *
     * 쿠폰 발급을 조건부 자동발급으로 설정한 경우, 조건에 해당해도 발급을 일시정지하는 기간의 시작 시간
     *
     *
     */
    pauseBeginDatetime: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 종료시간
     *
     * 쿠폰 발급을 조건부 자동발급으로 설정한 경우, 조건에 해당해도 발급을 일시정지하는 기간의 종료 시간
     *
     *
     */
    pauseEndDatetime: any;
    /**
     * @description
     * 쿠폰혜택 상세내역 출력
     *
     * 쿠폰혜택의 상세 내역이 출력됨.
     *
     *
     */
    benefitText: any;
    /**
     * @description
     * 혜택 구분
     *
     * 혜택의 유형. 각각의 유형별로 부여하는 혜택이 다름.
     *
     *
     */
    benefitType: any;
    /**
     * @description
     * 혜택 금액
     *
     * 혜택으로 할인받는 금액
     *
     *
     */
    benefitPrice: any;
    /**
     * @description
     * 혜택 비율
     *
     * 혜택으로 할인받는 비율
     *
     *
     */
    benefitPercentage: any;
    /**
     * @description
     * 혜택 비율 절사 단위
     *
     * 혜택으로 할인받는 금액의 절사 단위
     *
     *
     */
    benefitPercentageRoundUnit: any;
    /**
     * @description
     * 혜택 비율 최대 금액
     *
     * 혜택으로 할인받을 수 있는 최대 금액
     *
     *
     */
    benefitPercentageMaxPrice: any;
    /**
     * @description
     * 배송비 할인 시 지역별 구분 포함 여부
     *
     * 배송비를 할인할 때 지역별 배송비를 포함할지 여부
     *
     * T : 지역별 구분 포함
     * F : 지역별 구분 미포함
     *
     * @default F
     *
     *
     */
    includeRegionalShippingRate: any;
    /**
     * @description
     * 해외배송 포함여부
     *
     * 쿠폰혜택에 해외배송을 포함할지 여부
     *
     * T : 해외배송 포함
     * F : 해외배송 미포함
     *
     * @default F
     *
     *
     */
    includeForeignDelivery: any;
    /**
     * @description
     * 쿠폰 직접 접근 경로
     *
     * 쿠폰에 직접 접근할 수 있는 경로
     *
     *
     */
    couponDirectUrl: any;
    /**
     * @description
     * 발급 구분
     *
     * 쿠폰의 발급형태 유형
     *
     *
     */
    issueType: any;
    /**
     * @description
     * 발급 하위 유형
     *
     * 쿠폰 발급의 세부 하위 유형
     *
     * M : 회원 대상
     * C : 실시간 접속자 대상
     * J : 회원 가입
     * D : 배송 완료 시
     * A : 기념일(생일)
     * I : 모듈(프로그램) 설치
     * P : 상품 후기 작성
     * O : 주문 완료 시
     * Q : 구매 수량 충족 시
     * F : 첫 구매 고객
     * N : 일정기간 미구매 회원 대상
     *
     *
     */
    issueSubType: any;
    /**
     * @description
     * 회원가입시 쿠폰 발급 여부
     *
     * 회원가입 시 발급해주는 쿠폰인지 여부
     *
     * T : 발급 대상
     * F : 발급 대상 아님
     *
     * @default F
     *
     *
     */
    issueMemberJoin: any;
    /**
     * @description
     * 회원가입시 추천인에게 쿠폰 발급 여부
     *
     * 회원가입시 추천인에게 발급해주는 쿠폰인지 여부
     *
     * T : 발급 대상
     * F : 발급 대상 아님
     *
     * @default F
     *
     *
     */
    issueMemberJoinRecommend: any;
    /**
     * @description
     * 회원가입시 쿠폰 발급 대상
     *
     * 회원가입시 쿠폰을 발급해줄 대상에 대한 구분
     *
     * A : SMS 수신동의 AND 이메일 수신동의
     * O : SMS 수신동의 OR 이메일 수신동의
     * S : SMS 수신동의
     * E : 이메일 수신동의
     *
     *
     */
    issueMemberJoinType: any;
    /**
     * @description
     * 발급가능 구매금액 유형
     *
     * 쿠폰으로 할인 시 할인 대상이 되는 금액의 기준
     *
     * O : 구매금액 기준
     * S : 실결제 금액기준
     *
     *
     */
    issueOrderAmountType: any;
    /**
     * @description
     * 쿠폰발급 가능한 주문시작일시
     *
     *
     */
    issueOrderStartDate: any;
    /**
     * @description
     * 쿠폰발급 가능한 주문종료일시
     *
     *
     */
    issueOrderEndDate: any;
    /**
     * @description
     * 발급 가능 구매 금액 제한 유형
     *
     * 쿠폰 발급 가능 구매금액을 제한할 수 있음
     *
     * U : 제한 없음
     * L : 최소 금액
     * S : 금액 범위
     *
     *
     */
    issueOrderAmountLimit: any;
    /**
     * @description
     * 발급 가능 최소 구매 금액
     *
     * 쿠폰 발급이 가능한 최소 구매 금액
     *
     *
     */
    issueOrderAmountMin: any;
    /**
     * @description
     * 발급 가능 최대 구매 금액
     *
     * 쿠폰 발급이 가능한 최대 구매 금액
     *
     *
     */
    issueOrderAmountMax: any;
    /**
     * @description
     * 주문경로
     *
     * 발급한 쿠폰의 사용 가능한 주문 경로
     *
     * W : 웹 쇼핑몰 전용
     * M : 모바일 쇼핑몰 전용
     * P : 플러스앱 전용
     *
     *
     */
    issueOrderPath: any;
    /**
     * @description
     * 발급단위
     *
     * 쿠폰 발급 단위
     *
     * O : 주문서단위 발급쿠폰
     * P : 상품단위 발급쿠폰
     *
     *
     */
    issueOrderType: any;
    /**
     * @description
     * 발급 대상 상품
     *
     * 쿠폰 발급 대상이 되는 상품
     *
     * U : 제한 없음
     * I : 선택 상품 적용
     * E : 선택 상품 제외
     *
     *
     */
    issueOrderAvailableProduct: any;
    /**
     * @description
     * 발급 대상 카테고리
     *
     * 쿠폰 발급 대상이 되는 카테고리
     *
     * U : 제한 없음
     * I : 선택 상품 적용
     * E : 선택 상품 제외
     *
     *
     */
    issueOrderAvailableCategory: any;
    /**
     * @description
     * 발급 조건 기념일 유형
     *
     * 쿠폰 발급 조건 기념일의 유형
     *
     * B : 생일
     * W : 결혼 기념일
     *
     *
     */
    issueAnniversaryType: any;
    /**
     * @description
     * 발급 조건 기념일 선발행 일수
     *
     * 기념일 쿠폰 미리 발급 가능한 일수
     *
     *
     */
    issueAnniversaryPreIssueDay: any;
    /**
     * @description
     * 발급 조건 설치 모듈 유형
     *
     * 모듈 설치 발급 쿠폰의 설치 모듈 유형
     *
     * S : 바로가기
     * B : 즐겨찾기
     * L : 라이브링콘
     *
     *
     */
    issueModuleType: any;
    /**
     * @description
     * 발급 조건 상품 후기 개수
     *
     * 쿠폰 발급에 필요한 상품 후기의 개수
     *
     *
     */
    issueReviewCount: any;
    /**
     * @description
     * 발급 조건 상품 후기 이미지 포함 여부
     *
     * 쿠폰 발급에 필요한 상품 후기에 이미지가 포함되어야 하는지 여부
     *
     * T : 포함
     * F : 미포함
     *
     * @default F
     *
     *
     */
    issueReviewHasImage: any;
    /**
     * @description
     * 쿠폰 발급가능 최소구매수량
     *
     * 쿠폰 발급이 가능한 최소 구매 수량
     *
     *
     */
    issueQuantityMin: any;
    /**
     * @description
     * 쿠폰 발급가능수량 판단기준
     *
     * 쿠폰 발급가능수량의 판단이 되는 기준
     *
     * P : 상품 수량 기준
     * O : 주문 수량 기준
     *
     *
     */
    issueQuntityType: any;
    /**
     * @description
     * 최대 발급수
     *
     * 쿠폰의 최대 발급수량
     *
     *
     */
    issueMaxCount: any;
    /**
     * @description
     * 동일인 재발급 가능 여부
     *
     * 동일한 고객에게 재발급할 수 있는 최대 쿠폰 수량
     *
     *
     */
    issueMaxCountByUser: any;
    /**
     * @description
     * 쿠폰발급 회당 발급수량 (1회 발급수량)
     *
     * 1회 발급할때의 쿠폰 발급수량
     *
     *
     */
    issueCountPerOnce: any;
    /**
     * @description
     * 발급된 수량
     *
     * 쿠폰이 발급된 수량
     *
     *
     */
    issuedCount: any;
    /**
     * @description
     * 발급대상 회원등급 번호
     *
     * 쿠폰발급 대상이 되는 회원등급의 번호
     *
     *
     */
    issueMemberGroupNo: any;
    /**
     * @description
     * 발급대상 회원등급 이름
     *
     * 쿠폰발급 대상이 되는 회원등급의 이름
     *
     *
     */
    issueMemberGroupName: any;
    /**
     * @description
     * 일정기간 미구매 대상 회원의 미구매 기간
     *
     * 일정 기간 미구매 회원 대상 발급시 발급 조건으로 설정한 구매이력이 없는 기간
     *
     *
     */
    issueNoPurchasePeriod: any;
    /**
     * @description
     * 자동 발행 예약 사용 여부
     *
     * 쿠폰 발급일자를 미리 예약하는 기능의 사용여부. 해당 예약 일시가 되면 쿠폰은 자동 발행 됨.
     *
     * T : 자동 발행 예약 사용
     * F : 자동 발행 예약 미사용
     *
     * @default F
     *
     *
     */
    issueReserved: any;
    /**
     * @description
     * 자동 발행 예약 발급 일시
     *
     * 설정된 쿠폰 자동 발행 예약 일시
     *
     *
     */
    issueReservedDate: any;
    /**
     * @description
     * 쿠폰 사용기간
     *
     * 쿠폰의 사용 가능한 기간
     *
     *
     */
    availableDate: any;
    /**
     * @description
     * 사용기간 유형
     *
     * 쿠폰의 사용 가능한 기간의 유형
     *
     *
     */
    availablePeriodType: any;
    /**
     * @description
     * 사용 기간 시작 일시
     *
     * 쿠폰 사용 가능 기간 시작일시
     *
     *
     */
    availableBeginDatetime: any;
    /**
     * @description
     * 사용 기간 종료 일시
     *
     * 쿠폰 사용 가능 기간 종료일시
     *
     *
     */
    availableEndDatetime: any;
    /**
     * @description
     * 사용 범위 유형
     *
     * 쿠폰 사용 가능한 접속경로의 유형
     *
     * @required
     */
    availableSite: any;
    /**
     * @description
     * 적용 범위
     *
     * 쿠폰 적용 가능한 범위. 상품 쿠폰으로 적용시 상품 하나에 대하여 쿠폰이 적용되며, 주문서 쿠폰으로 적용시 주문서 전체에 적용됨.
     *
     *
     */
    availableScope: any;
    /**
     * @description
     * 사용 가능 일수
     *
     * 쿠폰의 사용 가능 일수
     *
     *
     */
    availableDayFromIssued: any;
    /**
     * @description
     * 사용가능 구매 금액 유형
     *
     * 쿠폰의 사용가능 금액에 대한 기준. 상품 금액 기준일 경우 상품 가격에 수량을 곱한 금액을 기준으로 하며, 주문 금액 기준일 경우 해당 금액에 기타 할인, 배송비가 적용된 금액을 기준으로 계산한다.
     *
     * U : 제한 없음
     * O : 주문 금액 기준
     * P : 상품 금액 기준
     *
     *
     */
    availablePriceType: any;
    /**
     * @description
     * 사용가능 구매 금액 상세 유형
     *
     * U : 모든 상품의 주문 금액
     * I : 쿠폰 적용 상품의 주문 금액
     *
     *
     */
    availableOrderPriceType: any;
    /**
     * @description
     * 사용가능 구매 금액
     *
     * 쿠폰을 사용가능한 구매 금액
     *
     *
     */
    availableMinPrice: any;
    /**
     * @description
     * 적용 계산 기준
     *
     * 쿠폰을 적용할 기준이 되는 결제 금액. 쿠폰할인을 각종 할인(회원등급할인, 상품할인 등)전 주문금액에 적용할지, 각종 할인 후 금액에 적용할지 여부.
     *
     *
     */
    availableAmountType: any;
    /**
     * @description
     * 사용가능 결제수단
     *
     * 쿠폰 사용이 가능한 결제수단
     *
     * all : 제한없음
     * R : 무통장입금
     * E : 가상계좌
     * C : 신용카드
     * A : 계좌이체
     * H : 휴대폰
     * M : 적립금
     * K : 케이페이
     * P : 페이나우
     * N : 페이코
     * O : 카카오페이
     * S : 스마일페이
     * V : 네이버페이
     * B : 편의점
     * D : 토스
     *
     *
     */
    availablePaymentMethod: any;
    /**
     * @description
     * 쿠폰적용 상품 선택
     *
     * 쿠폰의 적용가능 상품 선택. 특정 상품을 제외하거나, 적용하거나 혹은 모든 상품에 대해서 쿠폰적용 여부를 선택할 수 있음.
     *
     *
     */
    availableProduct: any;
    /**
     * @description
     * 쿠폰적용 상품 리스트
     *
     *
     */
    availableProductList: any;
    /**
     * @description
     * 쿠폰적용 분류 선택
     *
     * 쿠폰의 적용가능 분류 선택. 특정 분류를 제외하거나, 적용하거나 혹은 모든 분류에 대해서 쿠폰적용 여부를 선택할 수 있음.
     *
     *
     */
    availableCategory: any;
    /**
     * @description
     * 쿠폰적용 분류 리스트
     *
     *
     */
    availableCategoryList: any;
    /**
     * @description
     * 주문서 당 동일쿠폰 최대 사용 수
     *
     * 한 주문서 당 동일한 쿠폰 최대 사용가능 수
     *
     *
     */
    availableCouponCountByOrder: any;
    /**
     * @description
     * 시리얼 쿠폰 생성방법
     *
     * 시리얼 쿠폰을 생성하는 방법
     *
     * A : 자동 생성
     * M : 직접 등록
     * E : 엑셀 업로드
     *
     *
     */
    serialGenerateMethod: any;
    /**
     * @description
     * 쿠폰 이미지 유형
     *
     * 쿠폰 이미지의 유형
     *
     * B : 기본 이미지 사용
     * C : 직접 업로드
     *
     *
     */
    couponImageType: any;
    /**
     * @description
     * 쿠폰 이미지 경로
     *
     * 쿠폰 이미지의 URL 경로
     *
     *
     */
    couponImagePath: any;
    /**
     * @description
     * 상품상세페이지 노출여부
     *
     * 상품상세페이지에 노출할지 여부
     *
     * T : 상품상세페이지 노출
     * F : 상품상세페이지 미노출
     *
     * @default F
     *
     *
     */
    showProductDetail: any;
    /**
     * @description
     * 로그인 시 쿠폰발급 알람 사용여부
     *
     * 회원 로그인 시 쿠폰발급 알람을 사용할지 여부
     *
     * T : 알람 사용
     * F : 알람 미사용
     *
     * @default F
     *
     *
     */
    useNotificationWhenLogin: any;
    /**
     * @description
     * 쿠폰발급 SMS 발송 여부
     *
     * 쿠폰 발급정보를 SMS로 발송할지 여부
     *
     * T : SMS 발송
     * F : SMS 미발송
     *
     * @default F
     *
     *
     */
    sendSmsForIssue: any;
    /**
     * @description
     * 쿠폰 발급정보 이메일 발송여부
     *
     * 쿠폰 발급정보를 이메일로 발송할지 여부
     *
     * T : 이메일 발송
     * F : 이메일 미발송
     *
     * @default F
     *
     *
     */
    sendEmailForIssue: any;
    /**
     * @description
     * 할인금액
     *
     *
     */
    discountAmount: any;
    /**
     * @description
     * 할인율
     *
     *
     */
    discountRate: any;
  }

  export interface RetrieveACountOfCouponsInput {
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
    shopNo?: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo?: any;
    /**
     * @description
     * 쿠폰유형
     *
     * 조회할 쿠폰의 유형
     *
     * O : 온라인 쿠폰
     * S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType?: any;
    /**
     * @description
     * 쿠폰명
     *
     *
     */
    couponName?: any;
    /**
     * @description
     * 혜택 구분
     *
     * 쿠폰으로 받는 혜택의 종류 구분
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * A : 할인금액
     * B : 할인율
     * C : 적립금액
     * D : 적립율
     * E : 기본배송비 할인(전액할인)
     * I : 기본배송비 할인(할인율)
     * H : 기본배송비 할인(할인금액)
     * J : 전체배송비 할인(전액할인)
     * F : 즉시적립
     * G : 예치금
     *
     *
     */
    benefitType?: any;
    /**
     * @description
     * 발급 구분
     *
     * 쿠폰의 발급형태 유형
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * M : 대상자 지정 발급
     * A : 조건부 자동 발급
     * D : 고객 다운로드 발급
     *
     *
     */
    issueType?: any;
    /**
     * @description
     * 발급 하위 유형
     *
     * 쿠폰 발급의 세부 하위 유형
     *
     * M : 회원 대상
     * C : 실시간 접속자 대상
     * J : 회원 가입
     * D : 배송 완료 시
     * A : 기념일(생일)
     * I : 모듈(프로그램) 설치
     * P : 상품 후기 작성
     * O : 주문 완료 시
     * Q : 구매 수량 충족 시
     * F : 첫 구매 고객
     * N : 일정기간 미구매 회원 대상
     *
     *
     */
    issueSubType?: any;
    /**
     * @description
     * 발급된 쿠폰 여부
     *
     * 쿠폰이 기존에 발급된 이력이 있는지 여부
     *
     * T : 발급이력이 있는 쿠폰
     * F : 발급이력이 없는 쿠폰
     *
     *
     */
    issuedFlag?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 쿠폰 생성일 기준 검색의 검색 시작일
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    createdStartDate?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 쿠폰 생성일 기준 검색의 검색 종료일
     * 검색 시작일과 같이 사용해야함.
     *
     * 날짜
     */
    createdEndDate?: any;
    /**
     * @description
     * 쿠폰삭제 여부
     *
     * 쿠폰이 삭제되었는지 여부.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * T : 삭제된 쿠폰
     * F : 삭제되지 않은 쿠폰
     *
     * @default F
     *
     *
     */
    deleted?: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 시작시간
     *
     * 쿠폰 발급이 일시정지 되기 시작한 시간.
     *
     * 날짜
     */
    pauseBeginDate?: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 종료시간
     *
     * 쿠폰 발급의 일시정지가 종료된 시간.
     *
     * 날짜
     */
    pauseEndDate?: any;
    /**
     * @description
     * 주문경로
     *
     * 발급한 쿠폰의 사용 가능한 주문 경로
     *
     * W : PC
     * M : 모바일
     * P : 플러스앱
     *
     *
     */
    issueOrderPath?: any;
    /**
     * @description
     * 발급단위
     *
     * P : 상품 쿠폰
     * O : 주문서 쿠폰
     *
     *
     */
    issueOrderType?: any;
    /**
     * @description
     * 자동 발행 예약 사용 여부
     *
     * T : 사용
     * F : 사용하지 않음
     *
     *
     */
    issueReserved?: any;
    /**
     * @description
     * 사용기간 유형
     *
     * 쿠폰 사용기간의 유형
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * F : 일반 기간
     * R : 쿠폰 발급일 기준
     * M : 당월 말까지 사용
     *
     *
     */
    availablePeriodType?: any;
    /**
     * @description
     * 해당 날짜에 발급 가능한 쿠폰 검색
     *
     * 해당하는 날짜에 발급 가능한 쿠폰 검색
     *
     * available_period_type이 F일 때만 유효
     *
     * 날짜
     */
    availableDatetime?: any;
    /**
     * @description
     * 사용 범위 유형
     *
     * 발급한 쿠폰의 사용 가능한 주문 경로
     *
     * W : 웹 쇼핑몰 전용
     * M : 모바일 쇼핑몰 전용
     * P : 플러스앱 전용
     *
     *
     */
    availableSite?: any;
    /**
     * @description
     * 적용 범위
     *
     * 쿠폰의 적용 가능한 범위가 상품인지 주문서단위 쿠폰인지 여부
     *
     * P : 상품 쿠폰
     * O : 주문서 쿠폰
     *
     *
     */
    availableScope?: any;
    /**
     * @description
     * 사용가능 구매 금액 유형
     *
     * 쿠폰이 사용 가능한 금액 기준이 주문 금액 기준인지 상품 금액 기준인지 제한이 없는지 여부
     *
     * U : 제한 없음
     * O : 주문 금액 기준
     * P : 상품 금액 기준
     *
     *
     */
    availablePriceType?: any;
    /**
     * @description
     * 사용가능 구매 금액 상세 유형
     *
     * U : 모든 상품의 주문 금액
     * I : 쿠폰 적용 상품의 주문 금액
     *
     *
     */
    availableOrderPriceType?: any;
  }

  export interface RetrieveACountOfCouponsOutput {
    count: number;
  }
  export interface RetrieveAListOfCouponsInput {
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
    shopNo?: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo?: any;
    /**
     * @description
     * 쿠폰유형
     *
     * O : 온라인 쿠폰
     * S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType?: any;
    /**
     * @description
     * 쿠폰명
     *
     *
     */
    couponName?: any;
    /**
     * @description
     * 혜택 구분
     *
     * 쿠폰으로 받는 혜택의 종류 구분
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * A : 할인금액
     * B : 할인율
     * C : 적립금액
     * D : 적립율
     * E : 기본배송비 할인(전액할인)
     * I : 기본배송비 할인(할인율)
     * H : 기본배송비 할인(할인금액)
     * J : 전체배송비 할인(전액할인)
     * F : 즉시적립
     * G : 예치금
     *
     *
     */
    benefitType?: any;
    /**
     * @description
     * 발급 구분
     *
     * 쿠폰의 발급형태 유형
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * M : 대상자 지정 발급
     * A : 조건부 자동 발급
     * D : 고객 다운로드 발급
     *
     *
     */
    issueType?: any;
    /**
     * @description
     * 발급 하위 유형
     *
     * 쿠폰 발급의 세부 하위 유형
     *
     * M : 회원 대상
     * C : 실시간 접속자 대상
     * J : 회원 가입
     * D : 배송 완료 시
     * A : 기념일(생일)
     * I : 모듈(프로그램) 설치
     * P : 상품 후기 작성
     * O : 주문 완료 시
     * Q : 구매 수량 충족 시
     * F : 첫 구매 고객
     * N : 일정기간 미구매 회원 대상
     *
     *
     */
    issueSubType?: any;
    /**
     * @description
     * 발급된 쿠폰 여부
     *
     * 쿠폰이 기존에 발급된 이력이 있는지 여부
     *
     * T : 발급이력이 있는 쿠폰
     * F : 발급이력이 없는 쿠폰
     *
     *
     */
    issuedFlag?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 쿠폰 생성일 기준 검색의 검색 시작일
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    createdStartDate?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 쿠폰 생성일 기준 검색의 검색 종료일
     * 검색 시작일과 같이 사용해야함.
     *
     * 날짜
     */
    createdEndDate?: any;
    /**
     * @description
     * 쿠폰삭제 여부
     *
     * 쿠폰이 삭제되었는지 여부.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * T : 삭제된 쿠폰
     * F : 삭제되지 않은 쿠폰
     *
     * @default F
     *
     *
     */
    deleted?: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 시작시간
     *
     * 쿠폰 일시정지일 기준 검색의 검색 시작일
     *
     * 날짜
     */
    pauseBeginDate?: any;
    /**
     * @description
     * 쿠폰 발급 일시정지 종료시간
     *
     * 쿠폰 일시정지일 기준 검색의 검색 종료일
     *
     * 날짜
     */
    pauseEndDate?: any;
    /**
     * @description
     * 주문경로
     *
     * 발급한 쿠폰의 사용 가능한 주문 경로
     *
     * W : PC
     * M : 모바일
     * P : 플러스앱
     *
     *
     */
    issueOrderPath?: any;
    /**
     * @description
     * 발급단위
     *
     * 쿠폰의 발급 단위가 상품인지 주문서단위 쿠폰인지 여부
     *
     * P : 상품 쿠폰
     * O : 주문서 쿠폰
     *
     *
     */
    issueOrderType?: any;
    /**
     * @description
     * 자동 발행 예약 사용 여부
     *
     * 쿠폰의 자동발행예약 사용여부
     *
     * T : 사용
     * F : 사용하지 않음
     *
     *
     */
    issueReserved?: any;
    /**
     * @description
     * 사용기간 유형
     *
     * 쿠폰 사용기간의 유형
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * F : 일반 기간
     * R : 쿠폰 발급일 기준
     * M : 당월 말까지 사용
     *
     *
     */
    availablePeriodType?: any;
    /**
     * @description
     * 해당 날짜에 발급 가능한 쿠폰 검색
     *
     * 해당하는 날짜에 발급 가능한 쿠폰 검색
     *
     * available_period_type이 F일 때만 유효
     *
     * 날짜
     */
    availableDatetime?: any;
    /**
     * @description
     * 사용 범위 유형
     *
     * 발급한 쿠폰의 사용 가능한 주문 경로
     *
     * W : 웹 쇼핑몰 전용
     * M : 모바일 쇼핑몰 전용
     * P : 플러스앱 전용
     *
     *
     */
    availableSite?: any;
    /**
     * @description
     * 적용 범위
     *
     * 쿠폰의 적용 가능한 범위가 상품인지 주문서단위 쿠폰인지 여부
     *
     * P : 상품 쿠폰
     * O : 주문서 쿠폰
     *
     *
     */
    availableScope?: any;
    /**
     * @description
     * 사용가능 구매 금액 유형
     *
     * 쿠폰이 사용 가능한 금액 기준이 주문 금액 기준인지 상품 금액 기준인지 제한이 없는지 여부
     *
     * U : 제한 없음
     * O : 주문 금액 기준
     * P : 상품 금액 기준
     *
     *
     */
    availablePriceType?: any;
    /**
     * @description
     * 사용가능 구매 금액 상세 유형
     *
     * U : 모든 상품의 주문 금액
     * I : 쿠폰 적용 상품의 주문 금액
     *
     *
     */
    availableOrderPriceType?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 100
     *
     * 최소: [1]~최대: [500]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfCouponsOutput {
    coupons: {
      shopNo: number;
      couponNo: Cafe24Datetime;
      couponType: Cafe24Enum;
      couponName: string;
      couponDescription: any;
      createdDate: Cafe24Datetime;
      deleted: Cafe24Enum;
      isStoppedIssuedCoupon: Cafe24Enum;
      pauseBeginDatetime: any;
      pauseEndDatetime: any;
      benefitText: string;
      benefitType: Cafe24Enum;
      benefitPrice: any;
      benefitPercentage: string;
      benefitPercentageRoundUnit: Cafe24Datetime;
      benefitPercentageMaxPrice: string;
      includeRegionalShippingRate: any;
      includeForeignDelivery: any;
      couponDirectUrl: string;
      issueType: Cafe24Enum;
      issueSubType: Cafe24Enum;
      issueMemberJoin: any;
      issueMemberJoinRecommend: any;
      issueMemberJoinType: any;
      issueOrderAmountType: any;
      issueOrderStartDate: any;
      issueOrderEndDate: any;
      issueOrderAmountLimit: any;
      issueOrderAmountMin: any;
      issueOrderAmountMax: any;
      issueOrderPath: any;
      issueOrderType: Cafe24Enum;
      issueOrderAvailableProduct: Cafe24Enum;
      issueOrderAvailableCategory: Cafe24Enum;
      issueAnniversaryType: any;
      issueAnniversaryPreIssueDay: any;
      issueModuleType: any;
      issueReviewCount: any;
      issueReviewHasImage: any;
      issueQuantityMin: any;
      issueQuntityType: any;
      issueMaxCount: any;
      issueMaxCountByUser: any;
      issueCountPerOnce: any;
      issuedCount: Cafe24Datetime;
      issueMemberGroupNo: any;
      issueMemberGroupName: any;
      issueNoPurchasePeriod: any;
      issueReserved: Cafe24Enum;
      issueReservedDate: any;
      availableDate: string;
      availablePeriodType: Cafe24Enum;
      availableBeginDatetime: Cafe24Datetime;
      availableEndDatetime: Cafe24Datetime;
      availableSite: string;
      availableScope: Cafe24Enum;
      availableDayFromIssued: any;
      availablePriceType: Cafe24Enum;
      availableOrderPriceType: any;
      availableMinPrice: any;
      availableAmountType: Cafe24Enum;
      availablePaymentMethod: string;
      availableProduct: Cafe24Enum;
      availableProductList: number[];
      availableCategory: Cafe24Enum;
      availableCategoryList: number[];
      availableCouponCountByOrder: number;
      serialGenerateMethod: any;
      couponImageType: Cafe24Enum;
      couponImagePath: any;
      showProductDetail: any;
      useNotificationWhenLogin: Cafe24Enum;
      sendSmsForIssue: Cafe24Enum;
      sendEmailForIssue: any;
    }[];
  }
  export interface CreateACouponInput {
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
     * 쿠폰명
     *
     * @required
     *
     * 글자수 최소: [1자]~최대: [50자]
     */
    couponName: any;
    /**
     * @description
     * 혜택 구분
     *
     * A : 할인금액
     * B : 할인율
     *
     * @required
     */
    benefitType: any;
    /**
     * @description
     * 발급 구분
     *
     * M : 대상자 지정 발급
     *
     * @required
     */
    issueType: any;
    /**
     * @description
     * 사용기간 유형
     *
     * F : 일반 기간
     * R : 쿠폰 발급일 기준
     * M : 당월 말까지 사용
     *
     * @required
     */
    availablePeriodType: any;
    /**
     * @description
     * 사용 기간 시작 일시
     *
     * 날짜
     */
    availableBeginDatetime?: any;
    /**
     * @description
     * 사용 기간 종료 일시
     *
     * 날짜
     */
    availableEndDatetime?: any;
    /**
     * @description
     * 사용 가능 일수
     *
     * 최소값: [1]
     * 최대값: [999]
     */
    availableDayFromIssued?: any;
    /**
     * @description
     * 사용 범위 유형
     *
     * W : 웹 쇼핑몰 전용
     * M : 모바일 쇼핑몰 전용
     *
     * @required
     */
    availableSite: any;
    /**
     * @description
     * 적용 범위
     *
     * P : 상품 쿠폰
     * O : 주문서 쿠폰
     *
     * @required
     */
    availableScope: any;
    /**
     * @description
     * 쿠폰적용 상품 선택
     *
     * U : 제한 없음
     * I : 선택 상품 적용
     * E : 선택 상품 제외
     *
     * @required
     */
    availableProduct: any;
    /**
     * @description
     * 쿠폰적용 상품 리스트
     *
     *
     */
    availableProductList?: any;
    /**
     * @description
     * 쿠폰적용 분류 선택
     *
     * U : 제한 없음
     * I : 선택 카테고리 적용
     * E : 선택 카테고리 제외
     *
     * @required
     */
    availableCategory: any;
    /**
     * @description
     * 쿠폰적용 분류 리스트
     *
     *
     */
    availableCategoryList?: any;
    /**
     * @description
     * 적용 계산 기준
     *
     * E : 할인(쿠폰 제외) 적용 전 결제 금액
     * I : 할인(쿠폰 제외) 적용 후 결제 금액
     *
     * @required
     */
    availableAmountType: any;
    /**
     * @description
     * 주문서 당 동일쿠폰 최대 사용 수
     *
     * @required
     *
     * 최소값: [1]
     * 최대값: [999]
     */
    availableCouponCountByOrder: any;
    /**
     * @description
     * 사용가능 구매 금액 유형
     *
     * U : 제한 없음
     * O : 주문 금액 기준
     * P : 상품 금액 기준
     *
     * @default U
     *
     *
     */
    availablePriceType?: any;
    /**
     * @description
     * 사용가능 구매 금액 상세 유형
     *
     * U : 모든 상품의 주문 금액
     * I : 쿠폰 적용 상품의 주문 금액
     *
     *
     */
    availableOrderPriceType?: any;
    /**
     * @description
     * 사용가능 구매 금액
     *
     * 최소: [0.01]~최대: [999999999]
     */
    availableMinPrice?: any;
    /**
     * @description
     * 할인금액
     *
     *
     */
    discountAmount?: {
      /**
       * @description
       * 혜택 금액
       *
       *
       */
      benefitPrice: any;
    };
    /**
     * @description
     * 할인율
     *
     *
     */
    discountRate?: {
      /**
       * @description
       * 혜택 비율
       *
       *
       */
      benefitPercentage: any;
      /**
       * @description
       * 혜택 비율 절사 단위
       *
       *
       */
      benefitPercentageRoundUnit: any;
      /**
       * @description
       * 혜택 비율 최대 금액
       *
       *
       */
      benefitPercentageMaxPrice: any;
    };
  }

  export interface CreateACouponOutput {
    coupon: {
      shopNo: number;
      couponNo: Cafe24Datetime;
      couponName: string;
      benefitType: Cafe24Enum;
      issueType: Cafe24Enum;
      availablePeriodType: Cafe24Enum;
      availableBeginDatetime: Cafe24Datetime;
      availableEndDatetime: Cafe24Datetime;
      availableDayFromIssued: any;
      availableSite: Cafe24Enum[];
      availableScope: Cafe24Enum;
      availableProduct: Cafe24Enum;
      availableProductList: number[];
      availableCategory: Cafe24Enum;
      availableCategoryList: number[];
      availableAmountType: Cafe24Enum;
      availableCouponCountByOrder: number;
      availablePriceType: Cafe24Enum;
      availableOrderPriceType: Cafe24Enum;
      availableMinPrice: string;
      discountAmount: {
        benefitPrice: string;
      };
      discountRate: any;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 생성된 쿠폰의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-coupons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 24
     * }
     * ```
     */
    retrieveACountOfCoupons(
      input: RetrieveACountOfCouponsInput,
      options?: RequestOptions<RetrieveACountOfCouponsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCouponsOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성된 쿠폰을 목록으로 조회합니다.
     * 쿠폰번호, 혜택 구분, 적용 범위등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-coupons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupons": [
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000033",
     *             "coupon_type": "O",
     *             "coupon_name": "Special Discount Coupon",
     *             "coupon_description": null,
     *             "created_date": "2017-12-19T14:39:22+09:00",
     *             "deleted": "F",
     *             "is_stopped_issued_coupon": "F",
     *             "pause_begin_datetime": null,
     *             "pause_end_datetime": null,
     *             "benefit_text": "20.0% Discount. No cuts. Maximum discount 50",
     *             "benefit_type": "B",
     *             "benefit_price": null,
     *             "benefit_percentage": "20.0",
     *             "benefit_percentage_round_unit": "0.1",
     *             "benefit_percentage_max_price": "50.00",
     *             "include_regional_shipping_rate": null,
     *             "include_foreign_delivery": null,
     *             "coupon_direct_url": "/exec/front/newcoupon/IssueDownload?coupon_no=",
     *             "issue_type": "M",
     *             "issue_sub_type": "M",
     *             "issue_member_join": null,
     *             "issue_member_join_recommend": null,
     *             "issue_member_join_type": null,
     *             "issue_order_amount_type": null,
     *             "issue_order_start_date": null,
     *             "issue_order_end_date": null,
     *             "issue_order_amount_limit": null,
     *             "issue_order_amount_min": null,
     *             "issue_order_amount_max": null,
     *             "issue_order_path": null,
     *             "issue_order_type": "O",
     *             "issue_order_available_product": "U",
     *             "issue_order_available_category": "U",
     *             "issue_anniversary_type": null,
     *             "issue_anniversary_pre_issue_day": null,
     *             "issue_module_type": null,
     *             "issue_review_count": null,
     *             "issue_review_has_image": null,
     *             "issue_quantity_min": null,
     *             "issue_quntity_type": null,
     *             "issue_max_count": null,
     *             "issue_max_count_by_user": null,
     *             "issue_count_per_once": null,
     *             "issued_count": "0",
     *             "issue_member_group_no": null,
     *             "issue_member_group_name": null,
     *             "issue_no_purchase_period": null,
     *             "issue_reserved": "F",
     *             "issue_reserved_date": null,
     *             "available_date": "2017-12-19 00:00 ~ 2017-12-22 23:00",
     *             "available_period_type": "F",
     *             "available_begin_datetime": "2017-12-19T00:00:00+09:00",
     *             "available_end_datetime": "2017-12-22T23:00:00+09:00",
     *             "available_site": "W,M",
     *             "available_scope": "O",
     *             "available_day_from_issued": null,
     *             "available_price_type": "U",
     *             "available_order_price_type": null,
     *             "available_min_price": null,
     *             "available_amount_type": "E",
     *             "available_payment_method": "R,E,C,A,H,M,K,P,N,O,S,V,B,D,W,X",
     *             "available_product": "I",
     *             "available_product_list": [
     *                 10,
     *                 11
     *             ],
     *             "available_category": "I",
     *             "available_category_list": [
     *                 25,
     *                 29
     *             ],
     *             "available_coupon_count_by_order": 1,
     *             "serial_generate_method": null,
     *             "coupon_image_type": "B",
     *             "coupon_image_path": null,
     *             "show_product_detail": null,
     *             "use_notification_when_login": "F",
     *             "send_sms_for_issue": "F",
     *             "send_email_for_issue": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000032",
     *             "coupon_type": "O",
     *             "coupon_name": "Christmas Week Coupon",
     *             "coupon_description": null,
     *             "created_date": "2017-12-18T11:56:41+09:00",
     *             "deleted": "F",
     *             "is_stopped_issued_coupon": "F",
     *             "pause_begin_datetime": null,
     *             "pause_end_datetime": null,
     *             "benefit_text": "discount for 10",
     *             "benefit_type": "A",
     *             "benefit_price": "10.00",
     *             "benefit_percentage": null,
     *             "benefit_percentage_round_unit": null,
     *             "benefit_percentage_max_price": null,
     *             "include_regional_shipping_rate": null,
     *             "include_foreign_delivery": null,
     *             "coupon_direct_url": "/exec/front/newcoupon/IssueDownload?coupon_no=",
     *             "issue_type": "M",
     *             "issue_sub_type": "M",
     *             "issue_member_join": null,
     *             "issue_member_join_recommend": null,
     *             "issue_member_join_type": null,
     *             "issue_order_amount_type": null,
     *             "issue_order_start_date": null,
     *             "issue_order_end_date": null,
     *             "issue_order_amount_limit": null,
     *             "issue_order_amount_min": null,
     *             "issue_order_amount_max": null,
     *             "issue_order_path": null,
     *             "issue_order_type": "O",
     *             "issue_order_available_product": "U",
     *             "issue_order_available_category": "U",
     *             "issue_anniversary_type": null,
     *             "issue_anniversary_pre_issue_day": null,
     *             "issue_module_type": null,
     *             "issue_review_count": null,
     *             "issue_review_has_image": null,
     *             "issue_quantity_min": null,
     *             "issue_quntity_type": null,
     *             "issue_max_count": null,
     *             "issue_max_count_by_user": null,
     *             "issue_count_per_once": null,
     *             "issued_count": "0",
     *             "issue_member_group_no": null,
     *             "issue_member_group_name": null,
     *             "issue_no_purchase_period": null,
     *             "issue_reserved": "F",
     *             "issue_reserved_date": null,
     *             "available_date": "2017-12-18 00:00 ~ 2017-12-21 23:00",
     *             "available_period_type": "F",
     *             "available_begin_datetime": "2017-12-18T00:00:00+09:00",
     *             "available_end_datetime": "2017-12-21T23:00:00+09:00",
     *             "available_site": "W,M",
     *             "available_scope": "O",
     *             "available_day_from_issued": null,
     *             "available_price_type": "U",
     *             "available_order_price_type": null,
     *             "available_min_price": null,
     *             "available_amount_type": "E",
     *             "available_payment_method": "R,E,C,A,H,M,K,P,N,O,S,V,B,D,W,X",
     *             "available_product": "U",
     *             "available_product_list": null,
     *             "available_category": "U",
     *             "available_category_list": null,
     *             "available_coupon_count_by_order": 1,
     *             "serial_generate_method": null,
     *             "coupon_image_type": "B",
     *             "coupon_image_path": null,
     *             "show_product_detail": null,
     *             "use_notification_when_login": "F",
     *             "send_sms_for_issue": "F",
     *             "send_email_for_issue": null
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCoupons(
      input: RetrieveAListOfCouponsInput,
      options?: RequestOptions<RetrieveAListOfCouponsOutput['coupons'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCouponsOutput>>;
    /**
     * @description
     * 쇼핑몰에서 사용할 쿠폰을 발행할 수 있습니다.
     * 쿠폰명, 혜택 구분, 적용 범위등을 지정하여 발행 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-coupon
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupon": {
     *         "shop_no": 1,
     *         "coupon_no": "9000000000000000018",
     *         "coupon_name": "Special Discount Coupon",
     *         "benefit_type": "A",
     *         "issue_type": "M",
     *         "available_period_type": "F",
     *         "available_begin_datetime": "2019-04-10T00:00:00+09:00",
     *         "available_end_datetime": "2019-04-13T23:00:00+09:00",
     *         "available_day_from_issued": null,
     *         "available_site": [
     *             "W",
     *             "M"
     *         ],
     *         "available_scope": "O",
     *         "available_product": "I",
     *         "available_product_list": [
     *             1,
     *             2
     *         ],
     *         "available_category": "I",
     *         "available_category_list": [
     *             1,
     *             2
     *         ],
     *         "available_amount_type": "E",
     *         "available_coupon_count_by_order": 1,
     *         "available_price_type": "O",
     *         "available_order_price_type": "U",
     *         "available_min_price": "1.00",
     *         "discount_amount": {
     *             "benefit_price": "3.00"
     *         },
     *         "discount_rate": null
     *     }
     * }
     * ```
     */
    createACoupon(
      input: CreateACouponInput,
      options?: RequestOptions<CreateACouponOutput['coupon']>,
    ): Promise<AxiosResponse<CreateACouponOutput>>;
  }
}
