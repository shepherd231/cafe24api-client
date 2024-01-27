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
   * 혜택(Benefits)은 쇼핑몰 고객에게 제공하는 증정 또는 할인과 같은 고객 혜택입니다.
   * 혜택 리소스를 통해 고객에게 증정 또는 할인 등의 프로모션을 생성하거나 수정, 삭제할 수 있고 생성되어있는 혜택 정보를 조회할 수 있습니다.
   */
  export interface Benefits {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 혜택번호
      * 
      * 혜택이 생성된 경우 부여되는 고유 번호
      * 
      * 
      */ 
    benefitNo: any;
    /**
      * @description
      * 진행여부
      * 
      * 
      */ 
    useBenefit: any;
    /**
      * @description
      * 혜택명
      * 
      * 최대글자수 : [255자]
      */ 
    benefitName: any;
    /**
      * @description
      * 혜택 유형
      * 
      * 해당 혜택의 유형으로, 할인과 증정으로 구분됨
      * 
      * 
      */ 
    benefitDivision: any;
    /**
      * @description
      * 혜택 상세유형
      * 
      * 해당 혜택의 상세유형
      * 
      * 할인 : 기간할인, 재구매할인, 대량구매할인, 회원할인, 신규상품할인, 배송비할인
      * 증정 : 사은품증정, 1+N 이벤트
      * 
      * 
      */ 
    benefitType: any;
    /**
      * @description
      * 혜택 기간 설정
      * 
      * 해당 혜택이 적용되는 기간을 설정했는지 여부
      * 
      * 
      */ 
    useBenefitPeriod: any;
    /**
      * @description
      * 혜택 시작일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 시작되는 일시
      * 
      * 날짜
      */ 
    benefitStartDate: any;
    /**
      * @description
      * 혜택 종료일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 종료되는 일시
      * 
      * 날짜
      */ 
    benefitEndDate: any;
    /**
      * @description
      * 혜택 사용범위
      * 
      * 해당 혜택이 적용되는 범위 (PC, 모바일, 플러스앱)
      * 
      * 
      */ 
    platformTypes: any;
    /**
      * @description
      * 참여대상 설정
      * 
      * 해당 혜택이 적용되는 대상을 설정 (회원+비회원, 비회원, 회원)
      * 
      * 
      */ 
    useGroupBinding: any;
    /**
      * @description
      * 회원 등급
      * 
      * 참여대상을 회원으로 설정한 경우, 참여가 가능한 회원등급을 설정
      * 
      * 
      */ 
    customerGroupList: any;
    /**
      * @description
      * 상품 범위
      * 
      * 해당 혜택이 적용되는 상품의 범위
      * 
      * 전체상품 : 전체 상품에 혜택 적용
      * 특정상품 : 선택한 특정 상품에 대해서만 혜택 적용
      * 제외상품 : 선택한 특정 상품에 대해서만 혜택 적용 제외
      * 상품분류 : 선택한 상품 분류에 속한 상품에 대해서만 혜택 적용
      * 
      * 
      */ 
    productBindingType: any;
    /**
      * @description
      * 상품분류 혜택제외
      * 
      * 특정 상품분류에 대해 혜택 적용을 제외함 (각 유형별로 설정 가능여부가 다름)
      * 
      * 기간할인 : 전체상품, 특정상품인 경우 설정 가능
      * 신규상품할인 : 전체상품인 경우 설정 가능
      * 
      * 그 외 할인 및 증정유형에서는 설정 불가
      * 
      * 
      */ 
    useExceptCategory: any;
    /**
      * @description
      * 쿠폰 사용범위
      * 
      * 쿠폰이 있는 경우, 쿠폰을 중복하여 사용할 수 있는지 여부
      * 
      * 
      */ 
    availableCoupon: any;
    /**
      * @description
      * 아이콘 URL
      * 
      * 혜택이 적용되는 상품명에 아이콘이 노출되도록 아이콘 등록
      * 
      * 
      */ 
    iconUrl: any;
    /**
      * @description
      * 혜택 등록일
      * 
      * 해당 혜택이 등록된 일시
      * 
      * 
      */ 
    createdDate: any;
    /**
      * @description
      * 기간 할인 설정
      * 
      * 혜택의 상세유형이 기간 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    periodSale: any;
    /**
      * @description
      * 재구매 할인 설정
      * 
      * 혜택의 상세유형이 재구매 할인인 경우 그와 관련한 상세 설정
      * 
      * 
      */ 
    repurchaseSale: any;
    /**
      * @description
      * 대량구매 수량 설정
      * 
      * 혜택의 상세유형이 대량구매 할인인 경우 그와 관련한 상세 설정
      * 
      * 
      */ 
    bulkPurchaseSale: any;
    /**
      * @description
      * 회원 할인 설정
      * 
      * 혜택의 상세유형이 회원 할인인 경우 그와 관련한 상세 설정
      * 
      * 
      */ 
    memberSale: any;
    /**
      * @description
      * 신규상품할인 설정
      * 
      * 혜택의 상세유형이 신규상품 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    newProductSale: any;
    /**
      * @description
      * 배송비 할인 설정
      * 
      * 혜택의 상세유형이 배송비 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    shippingFeeSale: any;
    /**
      * @description
      * 사은품 설정
      * 
      * 혜택의 상세유형이 사은품 증정인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    gift: any;
    /**
      * @description
      * 1+N 이벤트 설정
      * 
      * 혜택의 상세유형이 1+N 이벤트인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    giftProductBundle: any;
  }

  export interface RetrieveAListOfCustomerBenefitsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 진행여부
      * 
      * T : 진행함
      * F : 진행안함
      * 
      * 
      */ 
    useBenefit?: any;
    /**
      * @description
      * 혜택명
      * 
      * 
      */ 
    benefitName?: any;
    /**
      * @description
      * 혜택 상세유형
      * 
      * 해당 혜택의 상세유형
      * 
      * DP : 기간할인
      * DR : 재구매할인
      * DQ : 대량구매할인
      * DM : 회원할인
      * DN : 신규상품할인
      * DV : 배송비할인
      * PG : 사은품
      * PB : 1+N 이벤트
      * 
      * 
      */ 
    benefitType?: any;
    /**
      * @description
      * 혜택 기간 타입
      * 
      * R : 혜택 등록일
      * S : 혜택 시작일
      * E : 혜택 종료일
      * 
      * 
      */ 
    periodType?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 날짜
      */ 
    benefitStartDate?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 날짜
      */ 
    benefitEndDate?: any;
    /**
      * @description
      * 혜택 사용범위
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * P : PC 쇼핑몰
      * M : 모바일쇼핑몰
      * A : 플러스앱
      * 
      * 
      */ 
    platformTypes?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfCustomerBenefitsOutput {
    benefits: { 
    shopNo: number;
    benefitNo: number;
    useBenefit: Cafe24Enum;
    benefitName: string;
    benefitDivision: Cafe24Enum;
    benefitType: string;
    useBenefitPeriod: Cafe24Enum;
    benefitStartDate: Cafe24Datetime;
    benefitEndDate: Cafe24Datetime;
    platformTypes: Cafe24Enum[];
    useGroupBinding: Cafe24Enum;
    customerGroupList: number[];
    productBindingType: Cafe24Enum;
    useExceptCategory: Cafe24Enum;
    iconUrl: string;
    availableCoupon: Cafe24Enum;
    }[];
  }
  export interface RetrieveACountOfCustomerBenefitsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 진행여부
      * 
      * T : 진행함
      * F : 진행안함
      * 
      * 
      */ 
    useBenefit?: any;
    /**
      * @description
      * 혜택명
      * 
      * 
      */ 
    benefitName?: any;
    /**
      * @description
      * 혜택 상세유형
      * 
      * 해당 혜택의 상세유형
      * 
      * DP : 기간할인
      * DR : 재구매할인
      * DQ : 대량구매할인
      * DM : 회원할인
      * DN : 신규상품할인
      * DV : 배송비할인
      * PG : 사은품
      * PB : 1+N 이벤트
      * 
      * 
      */ 
    benefitType?: any;
    /**
      * @description
      * 혜택 기간 타입
      * 
      * R : 혜택 등록일
      * S : 혜택 시작일
      * E : 혜택 종료일
      * 
      * 
      */ 
    periodType?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 날짜
      */ 
    benefitStartDate?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 날짜
      */ 
    benefitEndDate?: any;
    /**
      * @description
      * 혜택 사용범위
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * P : PC 쇼핑몰
      * M : 모바일쇼핑몰
      * A : 플러스앱
      * 
      * 
      */ 
    platformTypes?: any;
  }

  export interface RetrieveACountOfCustomerBenefitsOutput {
    count: number;
  }
  export interface RetrieveACustomerBenefitInput {
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
      * 혜택번호
      * 
      * 혜택이 생성된 경우 부여되는 고유 번호
      * 
      * @required
      */ 
    benefitNo: any;
  }

  export interface RetrieveACustomerBenefitOutput {
    benefit: { 
    shopNo: number;
    benefitNo: number;
    useBenefit: Cafe24Enum;
    benefitName: string;
    benefitDivision: Cafe24Enum;
    benefitType: string;
    useBenefitPeriod: Cafe24Enum;
    benefitStartDate: Cafe24Datetime;
    benefitEndDate: Cafe24Datetime;
    platformTypes: Cafe24Enum[];
    useGroupBinding: Cafe24Enum;
    customerGroupList: number[];
    productBindingType: Cafe24Enum;
    useExceptCategory: Cafe24Enum;
    availableCoupon: Cafe24Enum;
    iconUrl: string;
    createdDate: Cafe24Datetime;
    periodSale: { 
    productList: number[];
    addCategoryList: any;
    exceptCategoryList: number[];
    discountPurchasingQuantity: any;
    discountValue: string;
    discountValueUnit: Cafe24Enum;
    discountTruncationUnit: Cafe24Enum;
    discountTruncationMethod: Cafe24Enum;
    };
    repurchaseSale: any;
    bulkPurchaseSale: any;
    memberSale: any;
    newProductSale: any;
    shippingFeeSale: any;
    gift: any;
    giftProductBundle: any;
    };
  }
  export interface CreateACustomerBenefitInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 진행여부
      * 
      * T : 진행함
      * F : 진행안함
      * 
      * @required
      */ 
    useBenefit: any;
    /**
      * @description
      * 혜택명
      * 
      * @required
      * 
      * 최대글자수 : [255자]
      */ 
    benefitName: any;
    /**
      * @description
      * 혜택 유형
      * 
      * 해당 혜택의 유형으로, 할인과 증정으로 구분됨
      * 
      * D : 할인
      * P : 증정
      * 
      * @required
      */ 
    benefitDivision: any;
    /**
      * @description
      * 혜택 상세유형
      * 
      * 해당 혜택의 상세유형
      * 
      * DP : 기간할인
      * DN : 신규상품할인
      * DV : 배송비 할인
      * PG : 사은품
      * PB : 1+N 이벤트
      * 
      * @required
      */ 
    benefitType: any;
    /**
      * @description
      * 혜택 기간 설정
      * 
      * 해당 혜택이 적용되는 기간을 설정할지 여부
      * 
      * 사용함으로 설정하는 경우, 혜택 시작일과 종료일을 입력해야 함
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useBenefitPeriod?: any;
    /**
      * @description
      * 혜택 시작일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 시작되는 일시
      * 
      * 날짜
      */ 
    benefitStartDate?: any;
    /**
      * @description
      * 혜택 종료일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 종료되는 일시
      * 
      * 날짜
      */ 
    benefitEndDate?: any;
    /**
      * @description
      * 혜택 사용범위
      * 
      * 해당 혜택이 적용되는 범위
      * 
      * P : PC 쇼핑몰
      * M : 모바일쇼핑몰
      * A : 플러스앱
      * 
      * @required
      */ 
    platformTypes: any;
    /**
      * @description
      * 참여대상 설정
      * 
      * 해당 혜택이 적용되는 대상을 설정
      * 
      * A : 회원 + 비회원
      * N : 비회원
      * M : 회원
      * 
      * 
      */ 
    useGroupBinding?: any;
    /**
      * @description
      * 회원 등급
      * 
      * 참여대상을 회원으로 설정한 경우, 참여가 가능한 회원등급을 설정
      * 
      * 
      */ 
    customerGroupList?: any;
    /**
      * @description
      * 상품 범위
      * 
      * 해당 혜택이 적용되는 상품의 범위
      * 
      * A : 전체상품
      * P : 특정상품
      * E : 제외상품
      * C : 상품분류
      * 
      * 
      */ 
    productBindingType?: any;
    /**
      * @description
      * 상품분류 혜택제외
      * 
      * 특정 상품분류에 대해 혜택 적용을 제외함 (각 유형별로 설정 가능여부가 다름)
      * 
      * 기간할인 : 전체상품, 특정상품인 경우 설정 가능
      * 신규상품할인 : 전체상품인 경우 설정 가능
      * 
      * 그 외 할인 및 증정유형에서는 설정 불가
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useExceptCategory?: any;
    /**
      * @description
      * 쿠폰 사용범위
      * 
      * 쿠폰이 있는 경우, 쿠폰을 중복하여 사용할 수 있는지 여부
      * 
      * T : 모든 쿠폰 사용가능
      * F : 모든 쿠폰 사용제한
      * 
      * 
      */ 
    availableCoupon?: any;
    /**
      * @description
      * 기간 할인 설정
      * 
      * 혜택의 상세유형이 기간 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 할인 금액(discount_value_unit)이 비율(P)인 경우 할인 반올림 단위(discount_truncation_unit), 할인 단위 처리(discount_truncation_method) 필수 입력
      * 
      * 할인 금액(discount_value_unit)이 금액(W)인 경우 discount_purchasing_quantity 필수 입력
      * 
      * 
      */ 
    periodSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 제외 분류
      * 
      * 
      */ 
    exceptCategoryList?: any;
    /**
      * @description
      * 할인 구매수량
      * T : 구매수량에 따라
      * F : 구매수량에 관계없이
      * 
      * 
      */ 
    discountPurchasingQuantity?: any;
    /**
      * @description
      * 할인 값
      * 
      * 
      */ 
    discountValue?: any;
    /**
      * @description
      * 할인 기준
      * P : 비율
      * W : 금액
      * 
      * 
      */ 
    discountValueUnit?: any;
    /**
      * @description
      * 할인 반올림 단위
      * F : 절사안함
      * C : 0.01
      * B : 0.1
      * O : 1
      * T : 10
      * M : 100
      * H : 1000
      * 
      * 
      */ 
    discountTruncationUnit?: any;
    /**
      * @description
      * 할인 단위 처리
      * L : 내림
      * U : 반올림
      * C : 올림
      * 
      * 
      */ 
    discountTruncationMethod?: any;
    };
    /**
      * @description
      * 사은품 설정
      * 
      * 혜택의 상세유형이 사은품 증정인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    gift?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 첫 구매 여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    offerOnlyFirst?: any;
    /**
      * @description
      * 첫 구매 기준
      * O : 주문기준
      * D : 배송완료 기준
      * 
      * 
      */ 
    firstPurchaseType?: any;
    /**
      * @description
      * 최대가격 제한여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useUnlimitedPrice?: any;
    /**
      * @description
      * 구매가격 제한 (n 이상)
      * 
      * 
      */ 
    purchaseStartPrice?: any;
    /**
      * @description
      * 구매가격 제한 (n 미만)
      * 
      * 
      */ 
    purchaseLimitPrice?: any;
    giftProductList?: any[];
    };
    /**
      * @description
      * 신규상품할인 설정
      * 
      * 혜택의 상세유형이 신규상품 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 할인 금액(discount_value_unit)이 비율(P)인 경우 할인 반올림 단위(discount_truncation_unit), 할인 단위 처리(discount_truncation_method) 필수 입력
      * 
      * 할인 금액(discount_value_unit)이 금액(W)인 경우 discount_purchasing_quantity 필수 입력
      * 
      * 
      */ 
    newProductSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 제외 분류
      * 
      * 
      */ 
    exceptCategoryList?: any;
    /**
      * @description
      * 신상품 설정 기준일
      * I : 상품 등록일
      * U : 상품 최종 수정일
      * V : 상품 최종 진열일
      * 
      * 
      */ 
    newProductDateType: any;
    /**
      * @description
      * 신상품 설정 값
      * 
      * 
      */ 
    newProductDay: any;
    /**
      * @description
      * 신상품 설정 단위
      * D : 일
      * H : 시간
      * 
      * 
      */ 
    newProductTermType: any;
    /**
      * @description
      * 할인 구매수량
      * T : 구매수량에 따라
      * F : 구매수량에 관계없이
      * 
      * 
      */ 
    discountPurchasingQuantity?: any;
    /**
      * @description
      * 할인 값
      * 
      * 
      */ 
    discountValue: any;
    /**
      * @description
      * 할인 기준
      * P : 비율
      * W : 금액
      * 
      * 
      */ 
    discountValueUnit?: any;
    /**
      * @description
      * 할인 반올림 단위
      * F : 절사안함
      * C : 0.01
      * B : 0.1
      * O : 1
      * T : 10
      * M : 100
      * H : 1000
      * 
      * 
      */ 
    discountTruncationUnit?: any;
    /**
      * @description
      * 할인 단위 처리
      * L : 내림
      * U : 반올림
      * C : 올림
      * 
      * 
      */ 
    discountTruncationMethod?: any;
    };
    /**
      * @description
      * 배송비 할인 설정
      * 
      * 혜택의 상세유형이 배송비 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    shippingFeeSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 금액 기준 사용여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchasePriceCondition?: any;
    /**
      * @description
      * 금액 제한
      * 
      * 
      */ 
    totalPurchasePrice?: any;
    /**
      * @description
      * 지역별배송비 포함여부값
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    includeRegionalShippingRate?: any;
    };
    /**
      * @description
      * 1+N 이벤트 설정
      * 
      * 혜택의 상세유형이 1+N 이벤트인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 등록이 가능함
      * 
      * 
      */ 
    giftProductBundle?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 혜택 설정
      * P : 상품
      * I : 품목
      * 
      * 
      */ 
    productBundleType: any;
    /**
      * @description
      * 추가 상품 수량
      * 
      * 
      */ 
    productBundleCount: any;
    };
    /**
      * @description
      * 아이콘 URL
      * 
      * 혜택이 적용되는 상품명에 아이콘이 노출되도록 아이콘 등록
      * 
      * 
      */ 
    iconUrl?: any;
  }

  export interface CreateACustomerBenefitOutput {
    benefit: { 
    shopNo: number;
    benefitNo: number;
    useBenefit: Cafe24Enum;
    benefitName: string;
    benefitDivision: Cafe24Enum;
    benefitType: string;
    useBenefitPeriod: Cafe24Enum;
    benefitStartDate: Cafe24Datetime;
    benefitEndDate: Cafe24Datetime;
    platformTypes: Cafe24Enum[];
    useGroupBinding: Cafe24Enum;
    customerGroupList: number[];
    productBindingType: Cafe24Enum;
    useExceptCategory: Cafe24Enum;
    availableCoupon: Cafe24Enum;
    iconUrl: string;
    createdDate: Cafe24Datetime;
    periodSale: { 
    productList: number[];
    addCategoryList: any;
    exceptCategoryList: number[];
    discountPurchasingQuantity: any;
    discountValue: string;
    discountValueUnit: Cafe24Enum;
    discountTruncationUnit: Cafe24Enum;
    discountTruncationMethod: Cafe24Enum;
    };
    repurchaseSale: any;
    bulkPurchaseSale: any;
    memberSale: any;
    newProductSale: any;
    shippingFeeSale: any;
    gift: any;
    giftProductBundle: any;
    };
  }
  export interface UpdateACustomerBenefitInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 혜택번호
      * 
      * 혜택이 생성된 경우 부여되는 고유 번호
      * 
      * @required
      */ 
    benefitNo: any;
    /**
      * @description
      * 진행여부
      * 
      * T : 진행함
      * F : 진행안함
      * 
      * 
      */ 
    useBenefit?: any;
    /**
      * @description
      * 혜택명
      * 
      * 최대글자수 : [255자]
      */ 
    benefitName?: any;
    /**
      * @description
      * 혜택 기간 설정
      * 
      * 해당 혜택이 적용되는 기간을 설정할지 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useBenefitPeriod?: any;
    /**
      * @description
      * 혜택 시작일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 시작되는 일시
      * 
      * 혜택 시작일을 수정하고자 하는 경우, use_benefit_period 파라미터를 반드시 선언해야 함
      * 
      * 날짜
      */ 
    benefitStartDate?: any;
    /**
      * @description
      * 혜택 종료일
      * 
      * 혜택이 적용되는 기간을 설정한 경우, 해당 혜택이 종료되는 일시
      * 
      * 혜택 종료일을 수정하고자 하는 경우, use_benefit_period 파라미터를 반드시 선언해야 함
      * 
      * 날짜
      */ 
    benefitEndDate?: any;
    /**
      * @description
      * 혜택 사용범위
      * 
      * 해당 혜택이 적용되는 범위
      * 
      * P : PC 쇼핑몰
      * M : 모바일쇼핑몰
      * A : 플러스앱
      * 
      * 
      */ 
    platformTypes?: any;
    /**
      * @description
      * 참여대상 설정
      * 
      * 해당 혜택이 적용되는 대상을 설정
      * 
      * A : 회원 + 비회원
      * N : 비회원
      * M : 회원
      * 
      * 
      */ 
    useGroupBinding?: any;
    /**
      * @description
      * 회원 등급
      * 
      * 참여대상을 회원으로 설정한 경우, 참여가 가능한 회원등급을 설정
      * 
      * 회원 등급을 수정하고자 하는 경우, use_group_binding 파라미터를 반드시 선언해야 함
      * 
      * 
      */ 
    customerGroupList?: any;
    /**
      * @description
      * 상품 범위
      * 
      * 해당 혜택이 적용되는 상품의 범위
      * 
      * 상품 범위가 P,E,C 인 경우 기존에 설정된 상품 또는 분류를 수정하고자 하는 경우 product_binding_type 파라미터를 반드시 선언해야 함
      * 
      * A : 전체상품
      * P : 특정상품
      * E : 제외상품
      * C : 상품분류
      * 
      * 
      */ 
    productBindingType?: any;
    /**
      * @description
      * 상품분류 혜택제외
      * 
      * 특정 상품분류에 대해 혜택 적용을 제외함 (각 유형별로 설정 가능여부가 다름)
      * 
      * 기간할인 : 전체상품, 특정상품인 경우 설정 가능
      * 신규상품할인 : 전체상품인 경우 설정 가능
      * 
      * 그 외 할인 및 증정유형에서는 설정 불가
      * 
      * 기존에 설정된 제외 분류를 수정하고자 하는 경우, use_except_category 파라미터를 반드시 선언해야 함
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useExceptCategory?: any;
    /**
      * @description
      * 쿠폰 사용범위
      * 
      * 쿠폰이 있는 경우, 쿠폰을 중복하여 사용할 수 있는지 여부
      * 
      * T : 모든 쿠폰 사용가능
      * F : 모든 쿠폰 사용제한
      * 
      * 
      */ 
    availableCoupon?: any;
    /**
      * @description
      * 기간 할인 설정
      * 
      * 혜택의 상세유형이 기간 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 수정이 가능함
      * 
      * 할인 금액(discount_value_unit)이 비율(P)인 경우 할인 반올림 단위(discount_truncation_unit), 할인 단위 처리(discount_truncation_method) 필수 입력
      * 
      * 할인 금액(discount_value_unit)이 금액(W)인 경우 discount_purchasing_quantity 필수 입력
      * 
      * 
      */ 
    periodSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 제외 분류
      * 
      * 
      */ 
    exceptCategoryList?: any;
    /**
      * @description
      * 할인 구매수량
      * T : 구매수량에 따라
      * F : 구매수량에 관계없이
      * 
      * 
      */ 
    discountPurchasingQuantity?: any;
    /**
      * @description
      * 할인 값
      * 
      * 
      */ 
    discountValue?: any;
    /**
      * @description
      * 할인 기준
      * P : 비율
      * W : 금액
      * 
      * 
      */ 
    discountValueUnit?: any;
    /**
      * @description
      * 할인 반올림 단위
      * F : 절사안함
      * C : 0.01
      * B : 0.1
      * O : 1
      * T : 10
      * M : 100
      * H : 1000
      * 
      * 
      */ 
    discountTruncationUnit?: any;
    /**
      * @description
      * 할인 단위 처리
      * L : 내림
      * U : 반올림
      * C : 올림
      * 
      * 
      */ 
    discountTruncationMethod?: any;
    };
    /**
      * @description
      * 사은품 설정
      * 
      * 혜택의 상세유형이 사은품 증정인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 수정이 가능함
      * 
      * 
      */ 
    gift?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 첫 구매 여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    offerOnlyFirst?: any;
    /**
      * @description
      * 첫 구매 기준
      * O : 주문기준
      * D : 배송완료 기준
      * 
      * 
      */ 
    firstPurchaseType?: any;
    /**
      * @description
      * 최대가격 제한여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useUnlimitedPrice?: any;
    /**
      * @description
      * 구매가격 제한 (n 이상)
      * 
      * 
      */ 
    purchaseStartPrice?: any;
    /**
      * @description
      * 구매가격 제한 (n 미만)
      * 
      * 
      */ 
    purchaseLimitPrice?: any;
    giftProductList?: any[];
    };
    /**
      * @description
      * 1+N 이벤트 설정
      * 
      * 혜택의 상세유형이 1+N 이벤트인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 수정이 가능함
      * 
      * 
      */ 
    giftProductBundle?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 추가 상품 수량
      * 
      * 
      */ 
    productBundleCount?: any;
    };
    /**
      * @description
      * 신규상품할인 설정
      * 
      * 혜택의 상세유형이 신규상품 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 수정이 가능함
      * 
      * 할인 금액(discount_value_unit)이 비율(P)인 경우 할인 반올림 단위(discount_truncation_unit), 할인 단위 처리(discount_truncation_method) 필수 입력
      * 
      * 할인 금액(discount_value_unit)이 금액(W)인 경우 discount_purchasing_quantity 필수 입력
      * 
      * 
      */ 
    newProductSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 상품 분류
      * 
      * 
      */ 
    addCategoryList?: any;
    /**
      * @description
      * 제외 분류
      * 
      * 
      */ 
    exceptCategoryList?: any;
    /**
      * @description
      * 신상품 설정 기준일
      * I : 상품 등록일
      * U : 상품 최종 수정일
      * V : 상품 최종 진열일
      * 
      * 
      */ 
    newProductDateType?: any;
    /**
      * @description
      * 신상품 설정 값
      * 
      * 
      */ 
    newProductDay?: any;
    /**
      * @description
      * 신상품 설정 단위
      * D : 일
      * H : 시간
      * 
      * 
      */ 
    newProductTermType?: any;
    /**
      * @description
      * 할인 구매수량
      * T : 구매수량에 따라
      * F : 구매수량에 관계없이
      * 
      * 
      */ 
    discountPurchasingQuantity?: any;
    /**
      * @description
      * 할인 값
      * 
      * 
      */ 
    discountValue?: any;
    /**
      * @description
      * 할인 기준
      * P : 비율
      * W : 금액
      * 
      * 
      */ 
    discountValueUnit?: any;
    /**
      * @description
      * 할인 반올림 단위
      * F : 절사안함
      * C : 0.01
      * B : 0.1
      * O : 1
      * T : 10
      * M : 100
      * H : 1000
      * 
      * 
      */ 
    discountTruncationUnit?: any;
    /**
      * @description
      * 할인 단위 처리
      * L : 내림
      * U : 반올림
      * C : 올림
      * 
      * 
      */ 
    discountTruncationMethod?: any;
    };
    /**
      * @description
      * 배송비 할인 설정
      * 
      * 혜택의 상세유형이 배송비 할인인 경우 그와 관련한 상세 설정
      * 하위 요소가 입력되어야 정상적인 수정이 가능함
      * 
      * 
      */ 
    shippingFeeSale?: { 
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    productList?: any;
    /**
      * @description
      * 금액 기준 사용여부
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    usePurchasePriceCondition?: any;
    /**
      * @description
      * 금액 제한
      * 
      * 
      */ 
    totalPurchasePrice?: any;
    /**
      * @description
      * 지역별배송비 포함여부값
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    includeRegionalShippingRate?: any;
    };
    /**
      * @description
      * 아이콘 URL
      * 
      * 혜택이 적용되는 상품명에 아이콘이 노출되도록 아이콘 등록
      * (빈 값으로 요청 시, 기존에 등록된 아이콘 삭제됨)
      * 
      * 
      */ 
    iconUrl?: any;
  }

  export interface UpdateACustomerBenefitOutput {
    benefit: { 
    shopNo: number;
    benefitNo: number;
    useBenefit: Cafe24Enum;
    benefitName: string;
    benefitDivision: Cafe24Enum;
    benefitType: string;
    useBenefitPeriod: Cafe24Enum;
    benefitStartDate: Cafe24Datetime;
    benefitEndDate: Cafe24Datetime;
    platformTypes: Cafe24Enum[];
    useGroupBinding: Cafe24Enum;
    customerGroupList: number[];
    productBindingType: Cafe24Enum;
    useExceptCategory: Cafe24Enum;
    availableCoupon: Cafe24Enum;
    iconUrl: string;
    createdDate: Cafe24Datetime;
    periodSale: { 
    productList: number[];
    addCategoryList: any;
    exceptCategoryList: number[];
    discountPurchasingQuantity: any;
    discountValue: string;
    discountValueUnit: Cafe24Enum;
    discountTruncationUnit: Cafe24Enum;
    discountTruncationMethod: Cafe24Enum;
    };
    repurchaseSale: any;
    bulkPurchaseSale: any;
    memberSale: any;
    newProductSale: any;
    shippingFeeSale: any;
    gift: any;
    giftProductBundle: any;
    };
  }
  export interface DeleteACustomerBenefitInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
    /**
      * @description
      * 혜택번호
      * 
      * 혜택이 생성된 경우 부여되는 고유 번호
      * 
      * @required
      */ 
    benefitNo: any;
  }

  export interface DeleteACustomerBenefitOutput {
    benefit: { 
    shopNo: number;
    benefitNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 혜택을 목록으로 조회할 수 있습니다.
     * 혜택의 진행여부, 혜택명, 혜택유형 등을 조회할 수 있습니다.
     * 현재 진행중인 혜택만 조회하거나 특정 기간을 통해 혜택을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-benefits
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefits": [
     *         {
     *             "shop_no": 1,
     *             "benefit_no": 3,
     *             "use_benefit": "T",
     *             "benefit_name": "Group Sale",
     *             "benefit_division": "P",
     *             "benefit_type": "PG",
     *             "use_benefit_period": "T",
     *             "benefit_start_date": "2018-12-04T00:00:00+09:00",
     *             "benefit_end_date": "2018-12-04T23:55:00+09:00",
     *             "platform_types": [
     *                 "P",
     *                 "M"
     *             ],
     *             "use_group_binding": "M",
     *             "customer_group_list": [
     *                 1,
     *                 8,
     *                 9
     *             ],
     *             "product_binding_type": "A",
     *             "use_except_category": "T",
     *             "icon_url": "https://{domain}/web/upload/benefit/benefit_shop1_4975395c0f0de82b254843.gif",
     *             "available_coupon": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "benefit_no": 2,
     *             "use_benefit": "T",
     *             "benefit_name": "New Product Sale",
     *             "benefit_division": "D",
     *             "benefit_type": "DN",
     *             "use_benefit_period": null,
     *             "benefit_start_date": null,
     *             "benefit_end_date": null,
     *             "platform_types": [
     *                 "P",
     *                 "M"
     *             ],
     *             "use_group_binding": "N",
     *             "customer_group_list": [],
     *             "product_binding_type": "E",
     *             "use_except_category": "F",
     *             "icon_url": "https://{domain}/web/upload/benefit/benefit_shop1_8376295c0fcd29hb22h893.gif",
     *             "available_coupon": "T"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerBenefits(
      input: RetrieveAListOfCustomerBenefitsInput,
      options?: AdminRequestOptions<RetrieveAListOfCustomerBenefitsOutput['benefits'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerBenefitsOutput>>;
    /**
     * @description
     * 혜택의 수를 조회할 수 있습니다.
     * 현재 진행중인 혜택만 조회하거나 특정 기간을 통해 혜택을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customer-benefits
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfCustomerBenefits(
      input: RetrieveACountOfCustomerBenefitsInput,
      options?: AdminRequestOptions<RetrieveACountOfCustomerBenefitsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCustomerBenefitsOutput>>;
    /**
     * @description
     * 특정 혜택을 상세 조회할 수 있습니다.
     * 목록 조회에서는 제공되지 않는 기간할인, 회원 할인 등의 상세 설정을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-benefit
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefit": {
     *         "shop_no": 1,
     *         "benefit_no": 3,
     *         "use_benefit": "T",
     *         "benefit_name": "Sample Benefit",
     *         "benefit_division": "D",
     *         "benefit_type": "DP",
     *         "use_benefit_period": "T",
     *         "benefit_start_date": "2019-01-01T12:00:00+09:00",
     *         "benefit_end_date": "2019-01-31T12:00:00+09:00",
     *         "platform_types": [
     *             "P",
     *             "M"
     *         ],
     *         "use_group_binding": "M",
     *         "customer_group_list": [
     *             8,
     *             9
     *         ],
     *         "product_binding_type": "P",
     *         "use_except_category": "T",
     *         "available_coupon": "T",
     *         "icon_url": "https://{domain}/web/upload/benefit/benefit_shop1_4975395c0f0de82b254843.gif",
     *         "created_date": "2019-01-01T12:00:00+09:00",
     *         "period_sale": {
     *             "product_list": [
     *                 17,
     *                 25,
     *                 29
     *             ],
     *             "add_category_list": null,
     *             "except_category_list": [
     *                 168,
     *                 175,
     *                 177
     *             ],
     *             "discount_purchasing_quantity": null,
     *             "discount_value": "10.00",
     *             "discount_value_unit": "P",
     *             "discount_truncation_unit": "O",
     *             "discount_truncation_method": "U"
     *         },
     *         "repurchase_sale": null,
     *         "bulk_purchase_sale": null,
     *         "member_sale": null,
     *         "new_product_sale": null,
     *         "shipping_fee_sale": null,
     *         "gift": null,
     *         "gift_product_bundle": null
     *     }
     * }
     * ```
     */
    retrieveACustomerBenefit(
      input: RetrieveACustomerBenefitInput,
      options?: AdminRequestOptions<RetrieveACustomerBenefitOutput['benefit']>,
    ): Promise<AxiosResponse<RetrieveACustomerBenefitOutput>>;
    /**
     * @description
     * 혜택을 새롭게 생성할 수 있습니다.
     * 할인 또는 증정 중에 선택할 수 있으며 혜택 대상과 할인 기간 등을 선택할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-customer-benefit
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefit": {
     *         "shop_no": 1,
     *         "benefit_no": 3,
     *         "use_benefit": "T",
     *         "benefit_name": "Sample Benefit",
     *         "benefit_division": "D",
     *         "benefit_type": "DP",
     *         "use_benefit_period": "T",
     *         "benefit_start_date": "2019-01-01T12:00:00+09:00",
     *         "benefit_end_date": "2019-01-31T12:00:00+09:00",
     *         "platform_types": [
     *             "P",
     *             "M"
     *         ],
     *         "use_group_binding": "M",
     *         "customer_group_list": [
     *             8,
     *             9
     *         ],
     *         "product_binding_type": "P",
     *         "use_except_category": "T",
     *         "available_coupon": "T",
     *         "icon_url": "https://{domain}/web/upload/benefit/benefit_shop1_3648075d918c2c5ecae6.10781112.png",
     *         "created_date": "2019-01-01T12:00:00+09:00",
     *         "period_sale": {
     *             "product_list": [
     *                 17,
     *                 25,
     *                 29
     *             ],
     *             "add_category_list": null,
     *             "except_category_list": [
     *                 168,
     *                 175,
     *                 177
     *             ],
     *             "discount_purchasing_quantity": null,
     *             "discount_value": "10.00",
     *             "discount_value_unit": "P",
     *             "discount_truncation_unit": "O",
     *             "discount_truncation_method": "U"
     *         },
     *         "repurchase_sale": null,
     *         "bulk_purchase_sale": null,
     *         "member_sale": null,
     *         "new_product_sale": null,
     *         "shipping_fee_sale": null,
     *         "gift": null,
     *         "gift_product_bundle": null
     *     }
     * }
     * ```
     */
    createACustomerBenefit(
      input: CreateACustomerBenefitInput,
      options?: AdminRequestOptions<CreateACustomerBenefitOutput['benefit']>,
    ): Promise<AxiosResponse<CreateACustomerBenefitOutput>>;
    /**
     * @description
     * 특정 혜택을 수정할 수 있습니다.
     * 할인 유형을 제외하고 혜택 기간이나 진행 여부, 혜택 명 등의 세부 정보를 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-customer-benefit
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefit": {
     *         "shop_no": 1,
     *         "benefit_no": 3,
     *         "use_benefit": "T",
     *         "benefit_name": "Sample Benefit",
     *         "benefit_division": "D",
     *         "benefit_type": "DP",
     *         "use_benefit_period": "T",
     *         "benefit_start_date": "2019-01-01T12:00:00+09:00",
     *         "benefit_end_date": "2019-01-31T12:00:00+09:00",
     *         "platform_types": [
     *             "P",
     *             "M"
     *         ],
     *         "use_group_binding": "M",
     *         "customer_group_list": [
     *             8,
     *             9
     *         ],
     *         "product_binding_type": "P",
     *         "use_except_category": "T",
     *         "available_coupon": "T",
     *         "icon_url": "https://{domain}/web/upload/benefit/benefit_shop1_3648075d918c2c5ecae6.10781112.png",
     *         "created_date": "2019-01-01T12:00:00+09:00",
     *         "period_sale": {
     *             "product_list": [
     *                 17,
     *                 25,
     *                 29
     *             ],
     *             "add_category_list": null,
     *             "except_category_list": [
     *                 168,
     *                 175,
     *                 177
     *             ],
     *             "discount_purchasing_quantity": null,
     *             "discount_value": "10.00",
     *             "discount_value_unit": "P",
     *             "discount_truncation_unit": "O",
     *             "discount_truncation_method": "U"
     *         },
     *         "repurchase_sale": null,
     *         "bulk_purchase_sale": null,
     *         "member_sale": null,
     *         "new_product_sale": null,
     *         "shipping_fee_sale": null,
     *         "gift": null,
     *         "gift_product_bundle": null
     *     }
     * }
     * ```
     */
    updateACustomerBenefit(
      input: UpdateACustomerBenefitInput,
      options?: AdminRequestOptions<UpdateACustomerBenefitOutput['benefit']>,
    ): Promise<AxiosResponse<UpdateACustomerBenefitOutput>>;
    /**
     * @description
     * 생성된 혜택을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-customer-benefit
     *
     * @example 응답 예시
     * ```json
     * {
     *     "benefit": {
     *         "shop_no": 1,
     *         "benefit_no": 3
     *     }
     * }
     * ```
     */
    deleteACustomerBenefit(
      input: DeleteACustomerBenefitInput,
      options?: AdminRequestOptions<DeleteACustomerBenefitOutput['benefit']>,
    ): Promise<AxiosResponse<DeleteACustomerBenefitOutput>>;
  }
}
