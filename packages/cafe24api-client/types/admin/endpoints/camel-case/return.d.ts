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
   * 반품(Return)은 쇼핑몰 고객이 배송 후 주문을 취소하는 것을 의미합니다.
   * 반품 리소스는 반품접수 이후부터 반품완료까지의 주문 상태를 조회할 수 있습니다.
   * 반품 리소스에서는 반품 정보를 조회하거나 반품을 처리할 수 있습니다.
   */
  export interface Return {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 반품번호
     *
     *
     */
    claimCode: any;
    /**
     * @description
     * 구분
     *
     * 판매자의 반품 접수 사유 구분.
     * 구매자의 반품 신청 사유는 items(품목 주문) &gt; claim_reason_type으로 조회할 수 있다.
     *
     * A:고객변심
     * B:배송지연
     * J:배송오류
     * C:배송불가지역
     * L:수출/통관 불가
     * D:포장불량
     * E:상품 불만족
     * F:상품정보상이
     * K:상품불량
     * G:서비스불만족
     * H:품절
     * I:기타
     *
     *
     */
    claimReasonType: any;
    /**
     * @description
     * 사유
     *
     * 판매자의 반품 접수 사유 상세 내용.
     * 구매자의 반품 신청 사유 상세 내용은 items(품목 주문) &gt; claim_reason으로 조회할 수 있다.
     *
     *
     */
    claimReason: any;
    /**
     * @description
     * 반품처리 예정일
     *
     *
     */
    claimDueDate: any;
    /**
     * @description
     * 반품주소
     *
     *
     */
    returnAddress: any;
    /**
     * @description
     * 수거지역 상세
     *
     *
     */
    pickup: any;
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    returnInvoiceNo: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    returnShippingCompanyName: any;
    /**
     * @description
     * 수거 신청 상태
     *
     * E : 수거 미신청
     * W : 수거 미접수
     * S : 수거접수대기(송장발급전)
     * F : 수거접수실패
     * T : 수거접수완료(송장발급완료)
     * N : 미집하
     *
     *
     */
    pickupRequestState: any;
    /**
     * @description
     * 환불 방식
     *
     *
     */
    refundMethods: any;
    /**
     * @description
     * 비고
     *
     *
     */
    refundReason: any;
    /**
     * @description
     * 상품구매금액
     *
     *
     */
    orderPriceAmount: any;
    /**
     * @description
     * 환불금액
     *
     *
     */
    refundAmounts: any;
    /**
     * @description
     * 배송비
     *
     * @default 0.00
     *
     *
     */
    shippingFee: any;
    /**
     * @description
     * 환불배송비
     *
     * @default 0.00
     *
     *
     */
    refundShippingFee: any;
    /**
     * @description
     * 지역별 환불배송비
     *
     * @default 0.00
     *
     *
     */
    refundRegionalSurcharge: any;
    /**
     * @description
     * 반품배송비 적용구분
     *
     *
     */
    returnShipType: any;
    /**
     * @description
     * 반품배송비
     *
     * @default 0.00
     *
     *
     */
    returnShippingFee: any;
    /**
     * @description
     * 반품배송비 상세
     *
     *
     */
    returnShippingFeeDetail: any;
    /**
     * @description
     * 지역별 반품배송비
     *
     * @default 0.00
     *
     *
     */
    returnRegionalSurcharge: any;
    /**
     * @description
     * 지역별 반품배송비 상세
     *
     *
     */
    returnRegionalSurchargeDetail: any;
    /**
     * @description
     * 추가 배송비
     *
     * @default 0.00
     *
     *
     */
    additionalShippingFee: any;
    /**
     * @description
     * 해외배송 보험료
     *
     * @default 0.00
     *
     *
     */
    internationalShippingInsurance: any;
    /**
     * @description
     * 해외배송 부가금액
     *
     * @default 0.00
     *
     *
     */
    internationalShippingAdditionalFee: any;
    /**
     * @description
     * 후불 결제 수수료
     *
     *
     */
    deferCommission: any;
    /**
     * @description
     * 제휴할인 취소액
     *
     *
     */
    partnerDiscountAmount: any;
    /**
     * @description
     * 상품별추가할인 취소액
     *
     *
     */
    addDiscountAmount: any;
    /**
     * @description
     * 회원등급할인 취소액
     *
     *
     */
    memberGradeDiscountAmount: any;
    /**
     * @description
     * 배송비할인 취소액
     *
     *
     */
    shippingDiscountAmount: any;
    /**
     * @description
     * 쿠폰할인 취소액
     *
     *
     */
    couponDiscountAmount: any;
    /**
     * @description
     * 사용된 적립금 반환액
     *
     *
     */
    pointUsed: any;
    /**
     * @description
     * 사용된 예치금 반환액
     *
     *
     */
    creditUsed: any;
    /**
     * @description
     * 철회 여부
     *
     * T : 철회함
     * F : 철회안함
     *
     *
     */
    undone: any;
    /**
     * @description
     * 철회 사유 구분
     *
     * A:고객변심
     * B:배송지연
     * J:배송오류
     * C:배송불가지역
     * L:수출/통관 불가
     * D:포장불량
     * E:상품 불만족
     * F:상품정보상이
     * K:상품불량
     * G:서비스불만족
     * H:품절
     * I:기타
     *
     *
     */
    undoneReasonType: any;
    /**
     * @description
     * 철회 사유
     *
     *
     */
    undoneReason: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    exposeOrderDetail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     *
     */
    exposedUndoneReason: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items: any;
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
     * 세금 정보
     *
     * 세금 관리자 앱을 사용 안 할 경우 null로 반환
     *
     *
     */
    tax: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId: any;
    /**
     * @description
     * 반송장 처리 성공 여부
     *
     * T : 성공
     * F : 실패
     * N : 미집하
     *
     *
     */
    returnInvoiceSuccess: any;
    /**
     * @description
     * 반송장 처리 실패 사유
     *
     *
     */
    returnInvoiceFailReason: any;
    /**
     * @description
     * 주문상태
     *
     * accepted : 반품접수
     * processing : 반품처리중
     * returned : 반품완료
     *
     *
     */
    status: any;
    /**
     * @description
     * 수거완료 여부
     *
     * T : 수거완료
     * F : 수거전
     *
     *
     */
    pickupCompleted: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recoverInventory: any;
    /**
     * @description
     * 수거신청 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    requestPickup: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    addMemoToo: any;
  }

  export interface RetrieveAReturnInput {
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
     * 반품번호
     *
     * @required
     */
    claimCode: any;
  }

  export interface RetrieveAReturnOutput {
    return: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      claimReasonType: Cafe24Enum;
      claimReason: string;
      claimDueDate: Cafe24Date;
      returnAddress: {
        zipcode: Cafe24Datetime;
        address1: string;
        address2: string;
        items: string[];
      };
      pickup: {
        usePickup: Cafe24Enum;
        sameAddress: any;
        name: any;
        phone: any;
        cellphone: any;
        zipcode: any;
        address: any;
      };
      returnInvoiceNo: Cafe24Datetime;
      returnShippingCompanyName: string;
      pickupRequestState: Cafe24Enum;
      refundMethods: string[];
      refundReason: string;
      orderPriceAmount: Cafe24Datetime;
      refundAmounts: {
        paymentMethod: string;
        amount: string;
      }[];
      shippingFee: Cafe24Datetime;
      refundShippingFee: Cafe24Datetime;
      refundRegionalSurcharge: Cafe24Datetime;
      returnShipType: string;
      returnShippingFee: string;
      returnShippingFeeDetail: {
        groupNo: number;
        returnShippingFee: string;
        items: string[];
      }[];
      returnRegionalSurcharge: string;
      returnRegionalSurchargeDetail: {
        groupNo: number;
        returnShippingFee: string;
        items: string[];
      }[];
      additionalShippingFee: string;
      internationalShippingInsurance: string;
      internationalShippingAdditionalFee: string;
      deferCommission: string;
      partnerDiscountAmount: string;
      addDiscountAmount: string;
      memberGradeDiscountAmount: string;
      shippingDiscountAmount: string;
      couponDiscountAmount: string;
      pointUsed: string;
      creditUsed: string;
      undone: Cafe24Enum;
      undoneReasonType: any;
      undoneReason: any;
      exposeOrderDetail: any;
      exposedUndoneReason: any;
      items: {
        shopNo: number;
        itemNo: number;
        orderItemCode: string;
        variantCode: string;
        productNo: number;
        productCode: string;
        customProductCode: string;
        engProductName: any;
        optionId: string;
        optionValue: string;
        optionValueDefault: string;
        additionalOptionValue: string;
        additionalOptionValues: {
          key: string;
          type: string;
          name: string;
          value: string;
        }[];
        productName: string;
        productNameDefault: string;
        productPrice: Cafe24Datetime;
        optionPrice: string;
        additionalDiscountPrice: string;
        couponDiscountPrice: Cafe24Datetime;
        appItemDiscountAmount: string;
        quantity: number;
        supplierProductName: string;
        supplierTransactionType: Cafe24Enum;
        supplierId: string;
        supplierName: string;
        trackingNo: Cafe24Datetime;
        shippingCode: string;
        claimCode: string;
        claimReasonType: Cafe24Enum;
        claimReason: string;
        refundBankName: string;
        refundBankAccountNo: Cafe24Datetime;
        refundBankAccountHolder: string;
        postExpressFlag: any;
        orderStatus: string;
        orderStatusAdditionalInfo: any;
        claimQuantity: number;
        statusCode: string;
        statusText: string;
        openMarketStatus: string;
        bundledShippingType: Cafe24Enum;
        shippingCompanyId: Cafe24Datetime;
        shippingCompanyName: string;
        shippingCompanyCode: Cafe24Datetime;
        productBundle: Cafe24Enum;
        productBundleNo: Cafe24Datetime;
        productBundleName: any;
        productBundleNameDefault: any;
        productBundleType: Cafe24Enum;
        wasProductBundle: any;
        originalBundleItemNo: any;
        naverPayOrderId: any;
        naverPayClaimStatus: string;
        individualShippingFee: string;
        shippingFeeType: Cafe24Enum;
        shippingFeeTypeText: string;
        shippingPaymentOption: Cafe24Enum;
        paymentInfoId: Cafe24Datetime;
        originalItemNo: number[];
        storePickup: Cafe24Enum;
        orderedDate: Cafe24Datetime;
        shippedDate: Cafe24Datetime;
        deliveredDate: Cafe24Datetime;
        cancelDate: any;
        returnRequestDate: any;
        returnConfirmedDate: any;
        returnCollectedDate: any;
        cancelRequestDate: any;
        refundDate: any;
        exchangeRequestDate: any;
        exchangeDate: any;
        productMaterial: any;
        productMaterialEng: any;
        clothFabric: any;
        productWeight: string;
        volumeSize: any;
        volumeSizeWeight: any;
        clearanceCategory: any;
        clearanceCategoryInfo: any;
        clearanceCategoryCode: any;
        hsCode: string;
        onePlusNEvent: any;
        originPlace: Cafe24Enum;
        gift: Cafe24Enum;
        itemGrantingGift: any;
        productBundleList: {
          productNo: number;
          productCode: string;
          variantCode: string;
          productName: Cafe24Datetime;
          productNameDefault: Cafe24Datetime;
          optionId: string;
          optionValue: string;
          optionValueDefault: string;
          additionalOptionValue: string;
          additionalOptionValues: {
            key: string;
            type: string;
            name: string;
            value: string;
          }[];
          quantity: number;
          supplierId: string;
          engProductName: any;
          hsCode: Cafe24Datetime;
          optionPrice: string;
        }[];
        marketCancelRequest: any;
        marketCancelRequestQuantity: any;
        marketFailReason: any;
        marketFailReasonGuide: any;
        marketItemSequence: any;
        marketItemNo: any;
        marketCustomVariantCode: any;
        optionType: Cafe24Enum;
        options: {
          optionCode: string;
          optionName: any;
          optionValue: {
            optionText: any;
            valueNo: number;
          };
        }[];
        marketDiscountAmount: string;
        labels: any;
        orderStatusBeforeCs: string;
        supplyPrice: Cafe24Datetime;
      }[];
      includeTax: Cafe24Enum;
      tax: {
        name: string;
        amount: Cafe24Datetime;
      }[];
      carrierId: any;
      returnInvoiceSuccess: any;
      returnInvoiceFailReason: any;
    };
  }
  export interface CreateMultipleOrderReturnsInput {
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
     * accepted : 반품접수
     * processing : 반품처리중
     * returned : 반품완료
     *
     * @required
     */
    status: any;
    /**
     * @description
     * 수거완료 여부
     *
     * T : 수거완료
     * F : 수거전
     *
     * @default F
     *
     *
     */
    pickupCompleted?: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     * @default F
     *
     *
     */
    recoverInventory?: any;
    /**
     * @description
     * 쿠폰 복원
     *
     * T : 복구함
     * F : 복구안함
     *
     * @default F
     *
     *
     */
    recoverCoupon?: any;
    /**
     * @description
     * 복원할 쿠폰 번호
     *
     *
     */
    recoverCouponNo?: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    addMemoToo?: any;
    /**
     * @description
     * 반품사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 반품사유 구분
     *
     * A : 고객변심
     * B : 배송지연
     * C : 배송불가지역
     * L : 수출/통관 불가
     * D : 포장불량
     * E : 상품불만족
     * F : 상품정보상이
     * G : 서비스불만족
     * H : 품절
     * I : 기타
     *
     *
     */
    claimReasonType?: any;
    /**
     * @description
     * 네이버페이 반품사유 구분
     *
     * 카카오페이 주문을 반품할 경우 사용 불가
     *
     * EC 베트남, 필리핀, 일본 버전에서는 사용할 수 없음.
     *
     * 51 : 구매 의사 취소
     * 52 : 색상 및 사이즈 변경
     * 53 : 다른 상품 잘못 주문
     * 54 : 서비스 및 상품 불만족
     * 55 : 배송 지연
     * 56 : 상품 품절
     * 57 : 배송 누락
     * 58 : 미배송
     * 59 : 상품 파손
     * 60 : 상품 정보 상이
     * 61 : 오배송
     * 62 : 색상 등 옵션이 다른 상품 잘못 배송
     *
     *
     */
    naverpayReturnReasonType?: any;
    /**
     * @description
     * 환불 방식
     *
     * T : 현금
     * F : 신용카드
     * M : 적립금
     * G : 계좌이체
     * C : 휴대폰
     * D : 예치금
     * Z : 후불
     * O : 선불금
     * V : 편의점
     * J : 제휴상품권
     * K : 제휴포인트
     * I : 기타
     *
     *
     */
    refundMethodCode?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * refund_bank_code
     *
     * ※ 해당 쇼핑몰이 EC Korea 쇼핑몰일 경우 필수
     *
     *
     */
    refundBankCode?: any;
    /**
     * @description
     * 환불은행명
     *
     * 환불 방식(refund_method)이 현금(T)일 경우 필수
     *
     * ※ 해당 쇼핑몰이 EC Global 쇼핑몰일 경우 필수
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     *
     * 최대글자수 : [250자]
     */
    refundBankName?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     * 환불수단(refund_method)이 &#34;현금(T)&#34;일 때만 사용 가능
     *
     *
     */
    refundBankAccountNo?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refundBankAccountHolder?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items?: {
      /**
       * @description
       * 품주코드
       *
       *
       */
      orderItemCode: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
    /**
     * @description
     * 수거신청 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    requestPickup?: any;
    /**
     * @description
     * 수거지역 상세
     *
     *
     */
    pickup?: {
      /**
       * @description
       * 이름
       *
       *
       */
      name?: any;
      /**
       * @description
       * 전화번호
       *
       *
       */
      phone?: any;
      /**
       * @description
       * 휴대전화
       *
       *
       */
      cellphone?: any;
      /**
       * @description
       * 우편번호
       *
       *
       */
      zipcode?: any;
      /**
       * @description
       * 기본 주소
       *
       *
       */
      address1?: any;
      /**
       * @description
       * 상세 주소
       *
       *
       */
      address2?: any;
    };
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    returnInvoiceNo?: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    returnShippingCompanyName?: any;
  }

  export interface CreateMultipleOrderReturnsOutput {
    return: {
      shopNo: number;
      orderId: string;
      status: string;
      claimCode: string;
      pickupCompleted: Cafe24Enum;
      items: {
        orderItemCode: string;
        quantity: number;
      }[];
    }[];
  }
  export interface UpdateAReturnInput {
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
     * 반품번호
     *
     * @required
     */
    claimCode: any;
    /**
     * @description
     * 주문상태
     *
     * processing : 반품처리중
     * returned : 반품완료
     *
     *
     */
    status?: any;
    /**
     * @description
     * 수거완료 여부
     *
     * T : 수거완료
     * F : 수거전
     *
     *
     */
    pickupCompleted?: any;
    /**
     * @description
     * 배송사 아이디
     *
     * 배송사에서 반송장번호 업데이트시 carrier_id 필수
     *
     *
     */
    carrierId?: any;
    /**
     * @description
     * 환불 방식
     *
     * T : 현금
     * F : 신용카드
     * M : 적립금
     * G : 계좌이체
     * C : 휴대폰
     * D : 예치금
     * Z : 후불
     * O : 선불금
     * V : 편의점
     * J : 제휴상품권
     * K : 제휴포인트
     * I : 기타
     *
     *
     */
    refundMethodCode?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refundBankAccountHolder?: any;
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    returnInvoiceNo?: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    returnShippingCompanyName?: any;
    /**
     * @description
     * 반송장 처리 성공 여부
     *
     * T : 성공
     * F : 실패
     * N : 미집하
     *
     *
     */
    returnInvoiceSuccess?: any;
    /**
     * @description
     * 반송장 처리 실패 사유
     *
     * 최대글자수 : [100자]
     */
    returnInvoiceFailReason?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items?: {
      /**
       * @description
       * 품주코드
       *
       *
       */
      orderItemCode?: any;
    };
    /**
     * @description
     * 쿠폰 복원
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recoverCoupon?: any;
    /**
     * @description
     * 복원할 쿠폰 번호
     *
     *
     */
    recoverCouponNo?: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recoverInventory?: any;
    /**
     * @description
     * 수거신청 여부
     *
     * 반송지 저장시 기본값은 &#34;수거신청함(T)&#34;
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    requestPickup?: any;
    /**
     * @description
     * 수거지역 상세
     *
     *
     */
    pickup?: {
      /**
       * @description
       * 이름
       *
       *
       */
      name?: any;
      /**
       * @description
       * 전화번호
       *
       *
       */
      phone?: any;
      /**
       * @description
       * 휴대전화
       *
       *
       */
      cellphone?: any;
      /**
       * @description
       * 우편번호
       *
       *
       */
      zipcode?: any;
      /**
       * @description
       * 기본 주소
       *
       *
       */
      address1?: any;
      /**
       * @description
       * 상세 주소
       *
       *
       */
      address2?: any;
    };
    /**
     * @description
     * 철회 여부
     *
     * T : 철회함
     *
     *
     */
    undone?: any;
    /**
     * @description
     * 관리자 메모에도 추가
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    addMemoToo?: any;
    /**
     * @description
     * 철회 사유 구분
     *
     * A:고객변심
     * B:배송지연
     * J:배송오류
     * C:배송불가지역
     * L:수출/통관 불가
     * D:포장불량
     * E:상품 불만족
     * F:상품정보상이
     * K:상품불량
     * G:서비스불만족
     * H:품절
     * I:기타
     *
     *
     */
    undoneReasonType?: any;
    /**
     * @description
     * 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    undoneReason?: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    exposeOrderDetail?: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    exposedUndoneReason?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     *
     */
    refundBankCode?: any;
    /**
     * @description
     * 환불은행명
     *
     * 최대글자수 : [250자]
     */
    refundBankName?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     *
     */
    refundBankAccountNo?: any;
  }

  export interface UpdateAReturnOutput {
    return: {
      shopNo: number;
      orderId: string;
      claimCode: string;
      status: string;
      pickupCompleted: Cafe24Enum;
      carrierId: any;
      returnInvoiceNo: any;
      returnShippingCompanyName: any;
      returnInvoiceSuccess: any;
      returnInvoiceFailReason: any;
      items: {
        orderItemCode: string;
      }[];
      refundMethodCode: Cafe24Enum[];
      refundBankCode: string;
      refundBankAccountNo: Cafe24Datetime;
      refundBankAccountHolder: string;
      combinedRefundMethod: any;
      recoverInventory: Cafe24Enum;
      requestPickup: any;
      pickup: {
        name: any;
        phone: any;
        cellphone: any;
        zipcode: any;
        address1: any;
        address2: any;
      };
      undone: any;
      addMemoToo: any;
      undoneReasonType: any;
      undoneReason: any;
      exposeOrderDetail: any;
      exposedUndoneReason: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문의 반품 정보를 조회할 수 있습니다.
     * 반품번호는 필수 입력값입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-return
     *
     * @example 응답 예시
     * ```json
     * {
     *     "return": {
     *         "shop_no": 1,
     *         "order_id": "20190607-0000018",
     *         "claim_code": "C20190610-0000001",
     *         "claim_reason_type": "A",
     *         "claim_reason": "Returns accepted",
     *         "claim_due_date": "2019-06-10",
     *         "return_address": {
     *             "zipcode": "07071",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "items": [
     *                 "20190607-0000018-01",
     *                 "20190607-0000018-02"
     *             ]
     *         },
     *         "pickup": {
     *             "use_pickup": "F",
     *             "same_address": null,
     *             "name": null,
     *             "phone": null,
     *             "cellphone": null,
     *             "zipcode": null,
     *             "address": null
     *         },
     *         "return_invoice_no": "12345678",
     *         "return_shipping_company_name": "DHL",
     *         "pickup_request_state": "E",
     *         "refund_methods": [
     *             "Refund to points",
     *             "Refund to card"
     *         ],
     *         "refund_reason": "Remark notes",
     *         "order_price_amount": "15000.00",
     *         "refund_amounts": [
     *             {
     *                 "payment_method": "point",
     *                 "amount": "160.00"
     *             },
     *             {
     *                 "payment_method": "card",
     *                 "amount": "160.00"
     *             }
     *         ],
     *         "shipping_fee": "2000.00",
     *         "refund_shipping_fee": "7000.00",
     *         "refund_regional_surcharge": "5000.00",
     *         "return_ship_type": "Charge",
     *         "return_shipping_fee": "-5000.00",
     *         "return_shipping_fee_detail": [
     *             {
     *                 "group_no": 278,
     *                 "return_shipping_fee": "-2500.00",
     *                 "items": [
     *                     "20190607-0000018-01",
     *                     "20190607-0000018-02"
     *                 ]
     *             },
     *             {
     *                 "group_no": 279,
     *                 "return_shipping_fee": "-2500.00",
     *                 "items": [
     *                     "20190607-0000018-03",
     *                     "20190607-0000018-04"
     *                 ]
     *             }
     *         ],
     *         "return_regional_surcharge": "-5000.00",
     *         "return_regional_surcharge_detail": [
     *             {
     *                 "group_no": 280,
     *                 "return_shipping_fee": "-2500.00",
     *                 "items": [
     *                     "20190607-0000018-01",
     *                     "20190607-0000018-02"
     *                 ]
     *             },
     *             {
     *                 "group_no": 281,
     *                 "return_shipping_fee": "-2500.00",
     *                 "items": [
     *                     "20190607-0000018-03",
     *                     "20190607-0000018-04"
     *                 ]
     *             }
     *         ],
     *         "additional_shipping_fee": "0.00",
     *         "international_shipping_insurance": "0.00",
     *         "international_shipping_additional_fee": "0.00",
     *         "defer_commission": "0.00",
     *         "partner_discount_amount": "0.00",
     *         "add_discount_amount": "0.00",
     *         "member_grade_discount_amount": "0.00",
     *         "shipping_discount_amount": "0.00",
     *         "coupon_discount_amount": "0.00",
     *         "point_used": "-15000.00",
     *         "credit_used": "0.00",
     *         "undone": "F",
     *         "undone_reason_type": null,
     *         "undone_reason": null,
     *         "expose_order_detail": null,
     *         "exposed_undone_reason": null,
     *         "items": [
     *             {
     *                 "shop_no": 1,
     *                 "item_no": 1,
     *                 "order_item_code": "20190607-0000018-01",
     *                 "variant_code": "P000000N000A",
     *                 "product_no": 14,
     *                 "product_code": "P000000N",
     *                 "custom_product_code": "",
     *                 "eng_product_name": null,
     *                 "option_id": "000A",
     *                 "option_value": "",
     *                 "option_value_default": "",
     *                 "additional_option_value": "",
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "text",
     *                         "name": "gift option",
     *                         "value": "yes"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "typeitem_granting_gift": "url",
     *                         "name": "Attached File",
     *                         "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                     }
     *                 ],
     *                 "product_name": "iPhone X",
     *                 "product_name_default": "iPhone X",
     *                 "product_price": "30000.00",
     *                 "option_price": "0.00",
     *                 "additional_discount_price": "0.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "app_item_discount_amount": "0.00",
     *                 "quantity": 1,
     *                 "supplier_product_name": "",
     *                 "supplier_transaction_type": "D",
     *                 "supplier_id": "S0000000",
     *                 "supplier_name": "Apple",
     *                 "tracking_no": "12345678",
     *                 "shipping_code": "D-20190607-0000018-00",
     *                 "claim_code": "C20190107-0000001",
     *                 "claim_reason_type": "A",
     *                 "claim_reason": "Sorry. I will cancel order for one item.",
     *                 "refund_bank_name": "Woori Bank",
     *                 "refund_bank_account_no": "1234567890",
     *                 "refund_bank_account_holder": "Holders Name",
     *                 "post_express_flag": null,
     *                 "order_status": "N40",
     *                 "order_status_additional_info": null,
     *                 "claim_quantity": 0,
     *                 "status_code": "N1",
     *                 "status_text": "Shipping Complete",
     *                 "open_market_status": "",
     *                 "bundled_shipping_type": "N",
     *                 "shipping_company_id": "2",
     *                 "shipping_company_name": "DHL",
     *                 "shipping_company_code": "0001",
     *                 "product_bundle": "F",
     *                 "product_bundle_no": "0",
     *                 "product_bundle_name": null,
     *                 "product_bundle_name_default": null,
     *                 "product_bundle_type": "C",
     *                 "was_product_bundle": null,
     *                 "original_bundle_item_no": null,
     *                 "naver_pay_order_id": null,
     *                 "naver_pay_claim_status": "PAYMENT_WAITING",
     *                 "individual_shipping_fee": "0.00",
     *                 "shipping_fee_type": "X",
     *                 "shipping_fee_type_text": "Free",
     *                 "shipping_payment_option": "F",
     *                 "payment_info_id": "0",
     *                 "original_item_no": [
     *                     242,
     *                     473
     *                 ],
     *                 "store_pickup": "F",
     *                 "ordered_date": "2019-06-07T15:55:51+09:00",
     *                 "shipped_date": "2019-06-07T15:56:52+09:00",
     *                 "delivered_date": "2019-06-07T15:57:05+09:00",
     *                 "cancel_date": null,
     *                 "return_request_date": null,
     *                 "return_confirmed_date": null,
     *                 "return_collected_date": null,
     *                 "cancel_request_date": null,
     *                 "refund_date": null,
     *                 "exchange_request_date": null,
     *                 "exchange_date": null,
     *                 "product_material": null,
     *                 "product_material_eng": null,
     *                 "cloth_fabric": null,
     *                 "product_weight": "1.00",
     *                 "volume_size": null,
     *                 "volume_size_weight": null,
     *                 "clearance_category": null,
     *                 "clearance_category_info": null,
     *                 "clearance_category_code": null,
     *                 "hs_code": "",
     *                 "one_plus_n_event": null,
     *                 "origin_place": " ",
     *                 "gift": "F",
     *                 "item_granting_gift": null,
     *                 "product_bundle_list": [
     *                     {
     *                         "product_no": 15,
     *                         "product_code": "P000000I",
     *                         "variant_code": "P000000P000A",
     *                         "product_name": "Sample Product 1",
     *                         "product_name_default": "Sample Product 1",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201100000",
     *                         "option_price": "0.00"
     *                     },
     *                     {
     *                         "product_no": 16,
     *                         "product_code": "P000000Q",
     *                         "variant_code": "P000000Q000A",
     *                         "product_name": "Sample Product 3",
     *                         "product_name_default": "Sample Product 3",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201201000",
     *                         "option_price": "0.00"
     *                     }
     *                 ],
     *                 "market_cancel_request": null,
     *                 "market_cancel_request_quantity": null,
     *                 "market_fail_reason": null,
     *                 "market_fail_reason_guide": null,
     *                 "market_item_sequence": null,
     *                 "market_item_no": null,
     *                 "market_custom_variant_code": null,
     *                 "option_type": "E",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000A",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 1
     *                         }
     *                     },
     *                     {
     *                         "option_code": "O000000B",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 2
     *                         }
     *                     }
     *                 ],
     *                 "market_discount_amount": "0.00",
     *                 "labels": null,
     *                 "order_status_before_cs": "N20",
     *                 "supply_price": "1500.00"
     *             },
     *             {
     *                 "shop_no": 1,
     *                 "item_no": 1,
     *                 "order_item_code": "20190607-0000018-02",
     *                 "variant_code": "P000000N000A",
     *                 "product_no": 15,
     *                 "product_code": "P000000N",
     *                 "custom_product_code": "",
     *                 "eng_product_name": null,
     *                 "option_id": "000A",
     *                 "option_value": "",
     *                 "option_value_default": "",
     *                 "additional_option_value": "",
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "text",
     *                         "name": "gift option",
     *                         "value": "yes"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "type": "url",
     *                         "name": "Attached File",
     *                         "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                     }
     *                 ],
     *                 "product_name": "iPhone X",
     *                 "product_name_default": "iPhone X",
     *                 "product_price": "30000.00",
     *                 "option_price": "0.00",
     *                 "additional_discount_price": "0.00",
     *                 "coupon_discount_price": "1000.00",
     *                 "app_item_discount_amount": "0.00",
     *                 "quantity": 1,
     *                 "supplier_product_name": "",
     *                 "supplier_transaction_type": "D",
     *                 "supplier_id": "S0000000",
     *                 "supplier_name": "Apple",
     *                 "tracking_no": "12345678",
     *                 "shipping_code": "D-20190607-0000018-00",
     *                 "claim_code": "C20190107-0000001",
     *                 "claim_reason_type": "A",
     *                 "claim_reason": "Sorry. I will cancel order for one item.",
     *                 "refund_bank_name": "Woori Bank",
     *                 "refund_bank_account_no": "1234567890",
     *                 "refund_bank_account_holder": "Holders Name",
     *                 "post_express_flag": null,
     *                 "order_status": "N40",
     *                 "order_status_additional_info": null,
     *                 "status_code": "N1",
     *                 "status_text": "Shipping Complete",
     *                 "open_market_status": "",
     *                 "bundled_shipping_type": "N",
     *                 "shipping_company_id": "2",
     *                 "shipping_company_name": "DHL",
     *                 "shipping_company_code": "0001",
     *                 "product_bundle": "F",
     *                 "product_bundle_no": "0",
     *                 "product_bundle_name": null,
     *                 "product_bundle_name_default": null,
     *                 "product_bundle_type": "C",
     *                 "was_product_bundle": null,
     *                 "original_bundle_item_no": null,
     *                 "naver_pay_order_id": null,
     *                 "naver_pay_claim_status": "PAYMENT_WAITING",
     *                 "individual_shipping_fee": "0.00",
     *                 "shipping_fee_type": "X",
     *                 "shipping_fee_type_text": "Free",
     *                 "shipping_payment_option": "F",
     *                 "payment_info_id": "0",
     *                 "original_item_no": [
     *                     242,
     *                     473
     *                 ],
     *                 "store_pickup": "F",
     *                 "ordered_date": "2019-06-07T15:55:51+09:00",
     *                 "shipped_date": "2019-06-07T15:56:52+09:00",
     *                 "delivered_date": "2019-06-07T15:57:05+09:00",
     *                 "cancel_date": null,
     *                 "return_request_date": null,
     *                 "return_confirmed_date": null,
     *                 "return_collected_date": null,
     *                 "cancel_request_date": null,
     *                 "refund_date": null,
     *                 "exchange_request_date": null,
     *                 "exchange_date": null,
     *                 "product_material": null,
     *                 "product_material_eng": null,
     *                 "cloth_fabric": null,
     *                 "product_weight": "1.00",
     *                 "volume_size": null,
     *                 "volume_size_weight": null,
     *                 "clearance_category": null,
     *                 "clearance_category_info": null,
     *                 "clearance_category_code": null,
     *                 "hs_code": "",
     *                 "one_plus_n_event": null,
     *                 "origin_place": " ",
     *                 "gift": "F",
     *                 "item_granting_gift": null,
     *                 "product_bundle_list": [
     *                     {
     *                         "product_no": 15,
     *                         "product_code": "P000000I",
     *                         "variant_code": "P000000P000A",
     *                         "product_name": "Sample Product 1",
     *                         "product_name_default": "Sample Product 1",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201100000",
     *                         "option_price": "0.00"
     *                     },
     *                     {
     *                         "product_no": 16,
     *                         "product_code": "P000000Q",
     *                         "variant_code": "P000000Q000A",
     *                         "product_name": "Sample Product 3",
     *                         "product_name_default": "Sample Product 3",
     *                         "option_id": "000A",
     *                         "option_value": "",
     *                         "option_value_default": "",
     *                         "additional_option_value": "",
     *                         "additional_option_values": [
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "text",
     *                                 "name": "gift option",
     *                                 "value": "yes"
     *                             },
     *                             {
     *                                 "key": "item_option_add",
     *                                 "type": "url",
     *                                 "name": "Attached File",
     *                                 "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                             }
     *                         ],
     *                         "quantity": 1,
     *                         "supplier_id": "S0000000",
     *                         "eng_product_name": null,
     *                         "hs_code": "0201201000",
     *                         "option_price": "0.00"
     *                     }
     *                 ],
     *                 "market_cancel_request": null,
     *                 "market_cancel_request_quantity": null,
     *                 "market_fail_reason": null,
     *                 "market_fail_reason_guide": null,
     *                 "market_item_sequence": null,
     *                 "market_item_no": null,
     *                 "market_custom_variant_code": null,
     *                 "option_type": "E",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000A",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 1
     *                         }
     *                     },
     *                     {
     *                         "option_code": "O000000B",
     *                         "option_name": null,
     *                         "option_value": {
     *                             "option_text": null,
     *                             "value_no": 2
     *                         }
     *                     }
     *                 ],
     *                 "market_discount_amount": "0.00",
     *                 "labels": null,
     *                 "order_status_before_cs": "N20",
     *                 "supply_price": "1500.00"
     *             }
     *         ],
     *         "include_tax": "T",
     *         "tax": [
     *             {
     *                 "name": "vat",
     *                 "amount": "1000.00"
     *             },
     *             {
     *                 "name": "tax",
     *                 "amount": "800.00"
     *             }
     *         ],
     *         "carrier_id": null,
     *         "return_invoice_success": null,
     *         "return_invoice_fail_reason": null
     *     }
     * }
     * ```
     */
    retrieveAReturn(
      input: RetrieveAReturnInput,
      options?: AdminRequestOptions<RetrieveAReturnOutput['return']>,
    ): Promise<AxiosResponse<RetrieveAReturnOutput>>;
    /**
     * @description
     * 여러 배송 후 주문을 반품 처리할 수 있는 기능입니다.
     * 해당 API를 사용하여 반품 처리할 경우 환불완료까지 처리 되지만 PG 취소까지는 진행되지 않으므로, 솔루션에서 별도 PG 취소처리를 해주어야 합니다.
     * 부분반품할 경우 각 환불 금액은 자동 계산되어 환불처리됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-multiple-order-returns
     *
     * @example 응답 예시
     * ```json
     * {
     *     "return": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "status": "returned",
     *             "claim_code": "C20190805-0000007",
     *             "pickup_completed": "T",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01",
     *                     "quantity": 4
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000011-02",
     *                     "quantity": 4
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000012",
     *             "status": "returned",
     *             "claim_code": "C20190805-0000008",
     *             "pickup_completed": "T",
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000012-01",
     *                     "quantity": 4
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000012-02",
     *                     "quantity": 4
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createMultipleOrderReturns(
      input: CreateMultipleOrderReturnsInput,
      options?: AdminRequestOptions<
        CreateMultipleOrderReturnsOutput['return'][number]
      >,
    ): Promise<AxiosResponse<CreateMultipleOrderReturnsOutput>>;
    /**
     * @description
     * 주문의 반품접수상태를 수정하는 기능입니다.
     * 반품이 접수된 주문을 수정할 수 있습니다.
     * Update return 을 통해 반품접수를 철회하거나, 재고를 복구하거나, 철회사유를 입력할 수 있습니다.
     * 택배사에 이미 수거요청이 전달되었으나 수거가 필요하지 않게 될 경우, 택배사에 직접 연락하셔서 수거요청을 취소해주셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-return
     *
     * @example 응답 예시
     * ```json
     * {
     *     "return": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000011",
     *             "claim_code": "C20190228-0000001",
     *             "status": "processing",
     *             "pickup_completed": "T",
     *             "carrier_id": null,
     *             "return_invoice_no": null,
     *             "return_shipping_company_name": null,
     *             "return_invoice_success": null,
     *             "return_invoice_fail_reason": null,
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000011-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000011-02"
     *                 }
     *             ],
     *             "refund_method_code": [
     *                 "F",
     *                 "T"
     *             ],
     *             "refund_bank_code": "bank_82",
     *             "refund_bank_account_no": "000000111111",
     *             "refund_bank_account_holder": "John Doe",
     *             "combined_refund_method": null,
     *             "recover_inventory": "T",
     *             "request_pickup": null,
     *             "pickup": {
     *                 "name": null,
     *                 "phone": null,
     *                 "cellphone": null,
     *                 "zipcode": null,
     *                 "address1": null,
     *                 "address2": null
     *             },
     *             "undone": null,
     *             "add_memo_too": null,
     *             "undone_reason_type": null,
     *             "undone_reason": null,
     *             "expose_order_detail": null,
     *             "exposed_undone_reason": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20190228-0000012",
     *             "claim_code": "C20190228-0000002",
     *             "status": "processing",
     *             "pickup_completed": "T",
     *             "return_invoice_no": null,
     *             "return_shipping_company_name": null,
     *             "return_invoice_success": null,
     *             "return_invoice_fail_reason": null,
     *             "items": [
     *                 {
     *                     "order_item_code": "20190228-0000012-01"
     *                 },
     *                 {
     *                     "order_item_code": "20190228-0000012-02"
     *                 }
     *             ],
     *             "refund_method_code": [
     *                 "F",
     *                 "T"
     *             ],
     *             "refund_bank_code": "bank_82",
     *             "refund_bank_account_no": "000000111111",
     *             "refund_bank_account_holder": "John Doe",
     *             "combined_refund_method": null,
     *             "recover_inventory": "T",
     *             "request_pickup": null,
     *             "pickup": {
     *                 "name": null,
     *                 "phone": null,
     *                 "cellphone": null,
     *                 "zipcode": null,
     *                 "address1": null,
     *                 "address2": null
     *             },
     *             "undone": null,
     *             "add_memo_too": null,
     *             "undone_reason_type": null,
     *             "undone_reason": null,
     *             "expose_order_detail": null,
     *             "exposed_undone_reason": null
     *         }
     *     ]
     * }
     * ```
     */
    updateAReturn(
      input: UpdateAReturnInput,
      options?: AdminRequestOptions<UpdateAReturnOutput['return'][number]>,
    ): Promise<AxiosResponse<UpdateAReturnOutput>>;
  }
}
