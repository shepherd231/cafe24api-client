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
   * 
   * 
   * 품주(Items)는 쇼핑몰 고객이 주문할 때 구매한 품목 정보입니다.
   * 쇼핑몰의 품목은 쇼핑몰에서 판매하는 상품의 기본 단위로, 품주에는 구입한 상품의 품목 정보와 더불어, 구매시 선택한 옵션, 주문 수량 등의 정보를 추가로 확인할 수 있습니다.
   * 품주는 하위 리소스로서 주문(Order) 하위에서만 사용할 수 있습니다.
   * 품주의 조회와 상태변경, 취소/교환/반품 요청 사유 등의 입력과 수정이 가능합니다.
   */
  export interface OrdersItems {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 품주 아이디
      * 
      * 품목별 주문번호의 아이디
      * 
      * 
      */ 
    item_no: any;
    /**
      * @description
      * 품주코드
      * 
      * 품목별 주문번호의 코드
      * 
      * 
      */ 
    order_item_code: any;
    /**
      * @description
      * 품목코드
      * 
      * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않음.
      * 
      * 
      */ 
    variant_code: any;
    /**
      * @description
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 상품코드
      * 
      * 시스템이 상품에 부여한 코드. 해당 쇼핑몰 내에서 상품코드는 중복되지 않음.
      * 
      * 
      */ 
    product_code: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 
      */ 
    internal_product_name: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 최대글자수 : [40자]
      */ 
    custom_product_code: any;
    /**
      * @description
      * 자체 품목 코드
      * 
      * 
      */ 
    custom_variant_code: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 상품의 영문 이름. 해외 배송 등에 사용 가능함.
      * 
      * 
      */ 
    eng_product_name: any;
    /**
      * @description
      * 상품옵션 아이디
      * 
      * 상품옵션의 아이디
      * 
      * 
      */ 
    option_id: any;
    /**
      * @description
      * 옵션값
      * 
      * 주문한 상품의 옵션값
      * 
      * 
      */ 
    option_value: any;
    /**
      * @description
      * 기본옵션값
      * 
      * 
      */ 
    option_value_default: any;
    /**
      * @description
      * 추가입력 옵션 값
      * 
      * 
      */ 
    additional_option_value: any;
    /**
      * @description
      * 추가입력 옵션 목록
      * 
      * 
      */ 
    additional_option_values: any;
    /**
      * @description
      * 상품명
      * 
      * 상품의 이름. 상품명은 상품을 구분하는 가장 기초적인 정보이며 검색 정보가 됨.
      * 
      * 
      */ 
    product_name: any;
    /**
      * @description
      * 기본 상품명
      * 
      * 
      */ 
    product_name_default: any;
    /**
      * @description
      * 상품 판매가
      * 
      * 상품의 판매가. 멀티쇼핑몰 운영 시에는 판매가를 쇼핑별 화폐단위로 환산하여 보여줌.
      * 
      * 
      */ 
    product_price: any;
    /**
      * @description
      * 옵션 추가 가격
      * 
      * 옵션별로 해당하는 추가 가격이 있을 경우 그 추가가격.
      * 
      * 
      */ 
    option_price: any;
    /**
      * @description
      * 상품추가할인액
      * 
      * 상품에 대한 추가 할인금액
      * 
      * 
      */ 
    additional_discount_price: any;
    /**
      * @description
      * 상품별 쿠폰 할인금액
      * 
      * 
      */ 
    coupon_discount_price: any;
    /**
      * @description
      * 앱 상품할인금액
      * 
      * 
      */ 
    app_item_discount_amount: any;
    /**
      * @description
      * 품목별 결제금액
      * 
      * 
      */ 
    payment_amount: any;
    /**
      * @description
      * 수량
      * 
      * 주문한 상품의 수량
      * 
      * 
      */ 
    quantity: any;
    /**
      * @description
      * 상품 세금 구분
      * 
      * A : 과세
      * B : 면세
      * C : 비과세
      * 
      * 
      */ 
    product_tax_type: any;
    /**
      * @description
      * 과세율
      * 
      * 
      */ 
    tax_rate: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 공급사의 상품명
      * 
      * 
      */ 
    supplier_product_name: any;
    /**
      * @description
      * 공급사 거래 유형
      * 
      * 공급사의 거래 유형
      * 
      * D: 직등록형
      * P: 수수료형
      * 
      * 
      */ 
    supplier_transaction_type: any;
    /**
      * @description
      * 공급사 아이디
      * 
      * 공급사의 아이디
      * 
      * 
      */ 
    supplier_id: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름
      * 
      * 
      */ 
    supplier_name: any;
    /**
      * @description
      * 송장번호
      * 
      * 
      */ 
    tracking_no: any;
    /**
      * @description
      * 배송번호
      * 
      * 배송번호. 품목별 주문번호를 배송준비중으로 처리하면 시스템이 자동으로 부여하는 번호.
      * 
      * 
      */ 
    shipping_code: any;
    /**
      * @description
      * 취소/교환/반품 번호
      * 
      * 
      */ 
    claim_code: any;
    /**
      * @description
      * 취소/교환/반품 요청 사유 타입
      * 
      * 구매자의 취소/교환/반품 신청 사유 구분.
      * 판매자의 접수 사유는 각 취소/교환/반품 리소스의 claim_reason_type으로 조회할 수 있다.
      * 
      * 구매자 취소 신청
      * A:고객변심
      * G:서비스불만족
      * B:배송지연
      * I:기타
      * 
      * 구매자 교환/반품 신청
      * O:고객변심
      * P:상품 불만족
      * V:상품불량
      * W:배송오류
      * 
      * 판매자 취소/교환/반품 신청
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
    claim_reason_type: any;
    /**
      * @description
      * 취소/교환/반품 요청 사유
      * 
      * 구매자의 취소/교환/반품 신청 사유 상세 내용.
      * 판매자의 접수 사유는 각 취소/교환/반품 리소스의 claim_reason으로 조회할 수 있다.
      * 
      * 
      */ 
    claim_reason: any;
    /**
      * @description
      * 환불은행명
      * 
      * 
      */ 
    refund_bank_name: any;
    /**
      * @description
      * 환불 계좌번호
      * 
      * 
      */ 
    refund_bank_account_no: any;
    /**
      * @description
      * 환불계좌 예금주 명의
      * 
      * 
      */ 
    refund_bank_account_holder: any;
    /**
      * @description
      * 우체국 택배연동
      * 
      * 우체국 택배연동 상태
      * 
      * 
      */ 
    post_express_flag: any;
    /**
      * @description
      * 주문상태
      * 
      * 주문상태. 주문 상태별로 각각의 코드가 있음.
      * 
      * 
      */ 
    order_status: any;
    /**
      * @description
      * 철회상태
      * 
      * Cancellation : 취소철회
      * Exchange : 교환철회
      * Return : 반품철회
      * 
      * 
      */ 
    request_undone: any;
    /**
      * @description
      * 주문상태 추가정보
      * 
      * 주문상태의 추가정보
      * 
      * 
      */ 
    order_status_additional_info: any;
    /**
      * @description
      * 취소/교환/반품 요청 수량
      * 
      * 
      */ 
    claim_quantity: any;
    /**
      * @description
      * 현재 처리상태 코드
      * 
      * 현재 처리상태의 코드
      * 
      * N1 : 정상
      * N2 : 교환상품
      * C1 : 입금전취소
      * C2 : 배송전취소
      * C3 : 반품
      * E1 : 교환
      * 
      * 
      */ 
    status_code: any;
    /**
      * @description
      * 현재 처리상태
      * 
      * 현재 처리상태 문구설명
      * 
      * 
      */ 
    status_text: any;
    /**
      * @description
      * 마켓연동 상태값
      * 
      * 
      */ 
    open_market_status: any;
    /**
      * @description
      * 묶음배송 타입
      * 
      * 배송 대상 주문건의 묶음배송 유형
      * 
      * N : 단일 주문 일반 배송(Normal)
      * C :복합 주문 결합 배송(Combination)
      * 
      * 
      */ 
    bundled_shipping_type: any;
    /**
      * @description
      * 배송업체 아이디
      * 
      * 배송업체의 아이디
      * 
      * 
      */ 
    shipping_company_id: any;
    /**
      * @description
      * 배송업체 이름
      * 
      * 배송업체의 이름
      * 
      * 
      */ 
    shipping_company_name: any;
    /**
      * @description
      * 배송업체 코드
      * 
      * shipping_company_code 
      * 
      * 
      */ 
    shipping_company_code: any;
    /**
      * @description
      * 세트상품 여부
      * 
      * T : 세트상품
      * F : 세트상품 아님
      * 
      * 
      */ 
    product_bundle: any;
    /**
      * @description
      * 세트상품번호
      * 
      * 분리형 세트상품의 번호
      * 일체형 세트 상품의 번호는 product_no에서 표시됨.
      * 
      * 
      */ 
    product_bundle_no: any;
    /**
      * @description
      * 세트상품명
      * 
      * 분리형 세트상품의 이름
      * 일체형 세트 상품의 이름은 product_name에서 표시됨
      * 
      * 
      */ 
    product_bundle_name: any;
    /**
      * @description
      * 세트상품명(기본)
      * 
      * 분리형 세트상품의 이름
      * 일체형 세트 상품의 이름은 product_name에서 표시됨
      * 
      * 
      */ 
    product_bundle_name_default: any;
    /**
      * @description
      * 세트상품 타입
      * 
      * 세트상품의 타입
      * 
      * C : 일체형
      * S : 분리형
      * 
      * 
      */ 
    product_bundle_type: any;
    /**
      * @description
      * 세트품주 분리여부
      * 
      * 세트상품의 품목주문번호 분리 여부
      * 
      * T : 분리되었던 적이 있음
      * 
      * 
      */ 
    was_product_bundle: any;
    /**
      * @description
      * 분리된 세트상품의 기존 품주번호
      * 
      * 분리형 세트 상품의 기존 품목 번호
      * 
      * 
      */ 
    original_bundle_item_no: any;
    /**
      * @description
      * 네이버페이 상품별 주문번호
      * 
      * 네이버페이 주문의 상품별 주문번호
      * 
      * 
      */ 
    naver_pay_order_id: any;
    /**
      * @description
      * 네이버페이 클레임 타입
      * 
      * 네이버페이 주문의 클레임 타입
      * 
      * PAYMENT_WAITING : 입금대기
      * PAYED : 결제완료
      * DELIVERING : 배송중
      * DELIVERED : 배송완료
      * PURCHASE_DECIDED : 구매확정
      * EXCHANGED : 교환
      * CANCELED : 취소
      * RETURNED : 반품
      * CANCELED_BY_NOPAYMENT : 미입금취소
      * NOT_YET : 발주 미확인
      * OK : 발주 확인
      * CANCEL : 발주 확인 해제
      * CANCEL_REQUEST : 취소요청
      * CANCELING : 취소처리중
      * CANCEL_DONE : 취소처리완료
      * CANCEL_REJECT : 취소철회
      * RETURN_REQUEST : 반품요청
      * COLLECTING : 수거처리중
      * COLLECT_DONE : 수거완료
      * RETURN_DONE : 반품완료
      * RETURN_REJECT : 반품철회
      * EXCHANGE_REQUEST : 교환요청
      * COLLECTING : 수거처리중
      * COLLECT_DONE : 수거완료
      * EXCHANGE_REDELIVERING : 교환 재배송 중
      * EXCHANGE_DONE : 교환완료
      * EXCHANGE_REJECT : 교환거부
      * PURCHASE_DECISION_HOLDBACK : 구매 확정 보류
      * PURCHASE_DECISION_HOLDBACK_REDELIVERING : 구매 확정 보류 재배송 중
      * PURCHASE_DECISION_REQUEST : 구매 확정 요청
      * PURCHASE_DECISION_HOLDBACK_RELEASE : 구매 확정 보류 해제
      * ADMIN_CANCELING : 직권 취소 중
      * ADMIN_CANCEL_DONE : 직권 취소 완료
      * 
      * 
      */ 
    naver_pay_claim_status: any;
    /**
      * @description
      * 개별배송비
      * 
      * 개별 배송비
      * 
      * 
      */ 
    individual_shipping_fee: any;
    /**
      * @description
      * 배송비 타입
      * 
      * (개별배송비를 사용할 경우) 상품의 배송비 타입.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * T : 무료
      * F : 착불
      * D : 차등(금액)
      * M : 조건(금액)
      * I : 고정
      * N : 비례(수량)
      * W : 차등(무게)
      * C : 차등(수량)
      * X : 기본배송
      * 
      * 
      */ 
    shipping_fee_type: any;
    /**
      * @description
      * 배송비타입
      * 
      * 배송비 타입 설명
      * 
      * 
      */ 
    shipping_fee_type_text: any;
    /**
      * @description
      * 선/착불 구분
      * 
      * C : 착불
      * P : 선결제
      * F : 무료
      * 
      * 
      */ 
    shipping_payment_option: any;
    /**
      * @description
      * 결제정보 아이디
      * 
      * 
      */ 
    payment_info_id: any;
    /**
      * @description
      * 기존 품주 아이디
      * 
      * 
      */ 
    original_item_no: any;
    /**
      * @description
      * 매장수령여부
      * 
      * 매장수령 상품 여부
      * 
      * T : 매장수령
      * F : 매장수령 아님
      * 
      * 
      */ 
    store_pickup: any;
    /**
      * @description
      * 주문일
      * 
      * 
      */ 
    ordered_date: any;
    /**
      * @description
      * 배송시작일
      * 
      * 배송 시작일
      * 
      * 
      */ 
    shipped_date: any;
    /**
      * @description
      * 배송완료일
      * 
      * 배송 완료일
      * 
      * 
      */ 
    delivered_date: any;
    /**
      * @description
      * 구매확정일
      * 
      * 
      */ 
    purchaseconfirmation_date: any;
    /**
      * @description
      * 주문취소일
      * 
      * 주문 취소일
      * 
      * 
      */ 
    cancel_date: any;
    /**
      * @description
      * 반품승인일시
      * 
      * 
      */ 
    return_confirmed_date: any;
    /**
      * @description
      * 반품요청일
      * 
      * 반품 요청일
      * 
      * 
      */ 
    return_request_date: any;
    /**
      * @description
      * 반품수거일
      * 
      * 
      */ 
    return_collected_date: any;
    /**
      * @description
      * 취소요청일
      * 
      * 주문취소 요청일
      * 
      * 
      */ 
    cancel_request_date: any;
    /**
      * @description
      * 환불완료일
      * 
      * 환불 완료일
      * 
      * 
      */ 
    refund_date: any;
    /**
      * @description
      * 교환요청일
      * 
      * 교환 요청일
      * 
      * 
      */ 
    exchange_request_date: any;
    /**
      * @description
      * 교환완료일
      * 
      * 교환 완료일
      * 
      * 
      */ 
    exchange_date: any;
    /**
      * @description
      * 상품소재
      * 
      * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
      * 
      * 
      */ 
    product_material: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품소재 영문 설명
      * 
      * 
      */ 
    product_material_eng: any;
    /**
      * @description
      * 옷감
      * 
      * 상품이 의류인 경우, 옷감. 일본 택배사를 이용할 경우, 택배사에 따라 의류 통관시 옷감 정보를 입력 받는 경우가 있음.
      * 
      * 
      */ 
    cloth_fabric: any;
    /**
      * @description
      * 상품 중량
      * 
      * 상품의 전체 중량(kg). 배송을 위해 상품 자체의 무게와 박스 무게, 포장무게를 모두 포함한 중량 기재가 필요하다.
      * 
      * 
      */ 
    product_weight: any;
    /**
      * @description
      * 상품 부피
      * 
      * 상품의 부피
      * 
      * 
      */ 
    volume_size: any;
    /**
      * @description
      * 상품 부피 무게
      * 
      * 상품의 부피 무게
      * 
      * 
      */ 
    volume_size_weight: any;
    /**
      * @description
      * 해외통관용 상품구분
      * 
      * 
      */ 
    clearance_category: any;
    /**
      * @description
      * 해외통관용 상품정보
      * 
      * 
      */ 
    clearance_category_info: any;
    /**
      * @description
      * 해외통관코드
      * 
      * clearance_category_code 
      * 
      * 
      */ 
    clearance_category_code: any;
    /**
      * @description
      * HS코드
      * 
      * 통관을 위한 hs 코드
      * 
      * 
      */ 
    hs_code: any;
    /**
      * @description
      * 1+N이벤트 여부
      * 
      * 1개 구매시 N개 증정하는 이벤트 여부
      * 
      * 
      */ 
    one_plus_n_event: any;
    /**
      * @description
      * 원산지정보
      * 
      * 상품의 원산지
      * 
      * 
      */ 
    origin_place: any;
    /**
      * @description
      * 원산지 코드
      * 
      * 
      */ 
    origin_place_no: any;
    /**
      * @description
      * 원산지 국가코드
      * 
      * 
      */ 
    made_in_code: any;
    /**
      * @description
      * 원산지기타정보
      * 
      * 
      */ 
    origin_place_value: any;
    /**
      * @description
      * 사은품 여부
      * 
      * 상품이 사은품인지 여부
      * 
      * T : 사은품
      * F : 사은품 아님
      * 
      * 
      */ 
    gift: any;
    /**
      * @description
      * 사은품증정 조건품주목록
      * 
      * 
      */ 
    item_granting_gift: any;
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
      * 세트상품 목록
      * 
      * 
      */ 
    product_bundle_list: any;
    /**
      * @description
      * 마켓 취소요청 여부
      * 
      * T : 취소 요청된 마켓 주문
      * F : 취소 요청되지 않은 마켓 주문
      * 
      * 
      */ 
    market_cancel_request: any;
    /**
      * @description
      * 마켓 취소신청 수량
      * 
      * 
      */ 
    market_cancel_request_quantity: any;
    /**
      * @description
      * 마켓 실패사유
      * 
      * 
      */ 
    market_fail_reason: any;
    /**
      * @description
      * 마켓 실패사유 가이드
      * 
      * 
      */ 
    market_fail_reason_guide: any;
    /**
      * @description
      * 외부 품목별 번호
      * 
      * 
      */ 
    market_item_no: any;
    /**
      * @description
      * 마켓 자체 품목 코드
      * 
      * 
      */ 
    market_custom_variant_code: any;
    /**
      * @description
      * 옵션 구성방식
      * 
      * T : 조합형
      * E : 연동형
      * F : 독립형
      * 
      * 
      */ 
    option_type: any;
    /**
      * @description
      * 옵션
      * 
      * 
      */ 
    options: any;
    /**
      * @description
      * 상품별 마켓 할인금액
      * 
      * 
      */ 
    market_discount_amount: any;
    /**
      * @description
      * 주문 라벨
      * 
      * 
      */ 
    labels: any;
    /**
      * @description
      * CS 전 주문상태
      * 
      * 
      */ 
    order_status_before_cs: any;
    /**
      * @description
      * 상품 공급가
      * 
      * 
      */ 
    supply_price: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 취소/교환/반품 타입
      * 
      * 
      */ 
    claim_type: any;
    /**
      * @description
      * 취소/교환/반품 요청 상태
      * 
      * 
      */ 
    claim_status: any;
  }

  export interface RetrieveAListOfOrderItemsInput {
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
      * 공급사 아이디
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_id?: any;
  }

  export interface RetrieveAListOfOrderItemsOutput {
    items: { 
    shop_no: number;
    item_no: number;
    order_item_code: string;
    variant_code: string;
    product_no: number;
    product_code: string;
    internal_product_name: string;
    custom_product_code: string;
    custom_variant_code: string;
    eng_product_name: any;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    product_name: string;
    product_name_default: string;
    product_price: Cafe24Datetime;
    option_price: string;
    additional_discount_price: string;
    coupon_discount_price: Cafe24Datetime;
    app_item_discount_amount: string;
    payment_amount: Cafe24Datetime;
    quantity: number;
    product_tax_type: Cafe24Enum;
    tax_rate: number;
    supplier_product_name: string;
    supplier_transaction_type: Cafe24Enum;
    supplier_id: string;
    supplier_name: string;
    tracking_no: Cafe24Datetime;
    shipping_code: string;
    claim_code: string;
    claim_reason_type: Cafe24Enum;
    claim_reason: string;
    refund_bank_name: string;
    refund_bank_account_no: Cafe24Datetime;
    refund_bank_account_holder: string;
    post_express_flag: any;
    order_status: string;
    request_undone: any;
    claim_quantity: number;
    order_status_additional_info: any;
    status_code: string;
    status_text: string;
    open_market_status: string;
    bundled_shipping_type: Cafe24Enum;
    shipping_company_id: Cafe24Datetime;
    shipping_company_name: string;
    shipping_company_code: Cafe24Datetime;
    product_bundle: Cafe24Enum;
    product_bundle_no: Cafe24Datetime;
    product_bundle_name: any;
    product_bundle_name_default: any;
    product_bundle_type: Cafe24Enum;
    was_product_bundle: any;
    original_bundle_item_no: any;
    naver_pay_order_id: any;
    naver_pay_claim_status: string;
    individual_shipping_fee: string;
    shipping_fee_type: Cafe24Enum;
    shipping_fee_type_text: string;
    shipping_payment_option: Cafe24Enum;
    payment_info_id: Cafe24Datetime;
    original_item_no: number[];
    store_pickup: Cafe24Enum;
    ordered_date: Cafe24Datetime;
    shipped_date: Cafe24Datetime;
    delivered_date: Cafe24Datetime;
    purchaseconfirmation_date: Cafe24Datetime;
    cancel_date: any;
    return_confirmed_date: any;
    return_request_date: any;
    return_collected_date: any;
    cancel_request_date: any;
    refund_date: any;
    exchange_request_date: any;
    exchange_date: any;
    product_material: any;
    product_material_eng: any;
    cloth_fabric: any;
    product_weight: string;
    volume_size: any;
    volume_size_weight: any;
    clearance_category: any;
    clearance_category_info: any;
    clearance_category_code: any;
    hs_code: string;
    one_plus_n_event: any;
    origin_place: string;
    origin_place_no: number;
    made_in_code: string;
    origin_place_value: string;
    gift: Cafe24Enum;
    item_granting_gift: any;
    subscription: Cafe24Enum;
    product_bundle_list: { 
    product_no: number;
    product_code: string;
    variant_code: string;
    product_name: Cafe24Datetime;
    product_name_default: Cafe24Datetime;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    quantity: number;
    supplier_id: string;
    eng_product_name: any;
    hs_code: Cafe24Datetime;
    product_price: Cafe24Datetime;
    option_price: string;
    custom_product_code: string;
    custom_variant_code: any;
    }[];
    market_cancel_request: any;
    market_cancel_request_quantity: any;
    market_fail_reason: any;
    market_fail_reason_guide: any;
    market_item_no: any;
    market_custom_variant_code: any;
    option_type: Cafe24Enum;
    options: { 
    option_code: string;
    option_name: any;
    option_value: { 
    option_text: any;
    value_no: number;
    };
    }[];
    market_discount_amount: string;
    labels: any;
    order_status_before_cs: any;
    supply_price: Cafe24Datetime;
    }[];
  }
  export interface CreateAnOrderItemInput {
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
      */ 
    order_id: any;
    /**
      * @description
      * 세트품주 분리여부
      * 
      * T : 세트상품 나눔
      * F : 세트상품 나눔 안함
      * 
      * @default F
      * 
      * 
      */ 
    was_product_bundle?: any;
    /**
      * @description
      * 분리된 세트상품의 기존 품주번호
      * 
      * 
      */ 
    original_bundle_item_no?: any;
    /**
      * @description
      * 품목코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [12자]~최대: [12자]
      */ 
    variant_code: any;
  }

  export interface CreateAnOrderItemOutput {
    items: { 
    shop_no: number;
    item_no: number;
    order_item_code: string;
    variant_code: string;
    product_no: number;
    product_code: string;
    custom_product_code: string;
    custom_variant_code: string;
    eng_product_name: string;
    option_id: string;
    option_value: string;
    option_value_default: string;
    additional_option_value: string;
    additional_option_values: { 
    key: string;
    type: string;
    name: string;
    value: string;
    }[];
    product_name: Cafe24Datetime;
    product_name_default: Cafe24Datetime;
    product_price: Cafe24Datetime;
    option_price: string;
    additional_discount_price: Cafe24Datetime;
    coupon_discount_price: string;
    app_item_discount_amount: string;
    payment_amount: Cafe24Datetime;
    quantity: number;
    product_tax_type: Cafe24Enum;
    tax_rate: number;
    supplier_product_name: string;
    supplier_transaction_type: Cafe24Enum;
    supplier_id: string;
    supplier_name: string;
    tracking_no: any;
    shipping_code: string;
    claim_code: any;
    claim_reason_type: any;
    claim_reason: any;
    refund_bank_name: string;
    refund_bank_account_no: string;
    refund_bank_account_holder: string;
    post_express_flag: any;
    order_status: string;
    request_undone: any;
    order_status_additional_info: string;
    claim_quantity: number;
    status_code: string;
    status_text: string;
    open_market_status: string;
    bundled_shipping_type: Cafe24Enum;
    shipping_company_id: Cafe24Datetime;
    shipping_company_name: any;
    shipping_company_code: any;
    product_bundle: Cafe24Enum;
    product_bundle_no: string;
    product_bundle_name: any;
    product_bundle_name_default: any;
    product_bundle_type: Cafe24Enum;
    was_product_bundle: Cafe24Enum;
    original_bundle_item_no: string;
    naver_pay_order_id: any;
    naver_pay_claim_status: any;
    individual_shipping_fee: string;
    shipping_fee_type: Cafe24Enum;
    shipping_fee_type_text: string;
    shipping_payment_option: Cafe24Enum;
    payment_info_id: Cafe24Datetime;
    original_item_no: any[];
    store_pickup: Cafe24Enum;
    ordered_date: any;
    shipped_date: any;
    delivered_date: any;
    cancel_date: any;
    return_confirmed_date: any;
    return_request_date: any;
    return_collected_date: any;
    cancel_request_date: any;
    refund_date: any;
    exchange_request_date: any;
    exchange_date: any;
    product_material: string;
    product_material_eng: any;
    cloth_fabric: any;
    product_weight: any;
    volume_size: any;
    volume_size_weight: any;
    clearance_category: any;
    clearance_category_info: any;
    clearance_category_code: any;
    hs_code: string;
    one_plus_n_event: any;
    origin_place: string;
    origin_place_no: number;
    made_in_code: string;
    origin_place_value: string;
    gift: Cafe24Enum;
    item_granting_gift: any;
    subscription: Cafe24Enum;
    product_bundle_list: any;
    market_cancel_request: any;
    market_cancel_request_quantity: any;
    market_fail_reason: any;
    market_fail_reason_guide: any;
    market_item_no: any;
    market_custom_variant_code: any;
    option_type: any;
    options: any[];
    market_discount_amount: string;
    order_status_before_cs: any;
    }[];
  }
  export interface UpdateAnOrderItem1Input {
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
      * 품주코드
      * 
      * @required
      */ 
    order_item_code: any;
    /**
      * @description
      * 취소/교환/반품 타입
      * 
      * C:취소
      * R:반품
      * 
      * @required
      */ 
    claim_type: any;
    /**
      * @description
      * 취소/교환/반품 요청 상태
      * 
      * T : 신청함
      * F : 신청안함
      * 
      * @required
      */ 
    claim_status: any;
    /**
      * @description
      * 취소/교환/반품 요청 사유 타입
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
      * @required
      */ 
    claim_reason_type: any;
    /**
      * @description
      * 취소/교환/반품 요청 사유
      * 
      * 
      */ 
    claim_reason?: any;
    /**
      * @description
      * 취소/교환/반품 요청 수량
      * 
      * 
      */ 
    claim_quantity?: any;
  }

  export interface UpdateAnOrderItem1Output {
    item: { 
    shop_no: number;
    order_id: string;
    order_item_code: string;
    claim_type: Cafe24Enum;
    claim_status: Cafe24Enum;
    claim_reason_type: Cafe24Enum;
    claim_reason: string;
    claim_quantity: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문의 모든 품주를 조회할 수 있습니다.
     * 품주코드, 상품번호, 자체 품목 코드 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-order-items
     *
     * @example 응답 예시
     * ```json
     * {
     *     "items": [
     *         {
     *             "shop_no": 1,
     *             "item_no": 1,
     *             "order_item_code": "20170710-0000013-01",
     *             "variant_code": "P000000N000A",
     *             "product_no": 14,
     *             "product_code": "P000000N",
     *             "internal_product_name": "iPhone XS",
     *             "custom_product_code": "",
     *             "custom_variant_code": "C001",
     *             "eng_product_name": null,
     *             "option_id": "000A",
     *             "option_value": "",
     *             "option_value_default": "",
     *             "additional_option_value": "",
     *             "additional_option_values": [
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "text",
     *                     "name": "gift option",
     *                     "value": "yes"
     *                 },
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "url",
     *                     "name": "Attached File",
     *                     "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                 }
     *             ],
     *             "product_name": "iPhone X",
     *             "product_name_default": "iPhone X",
     *             "product_price": "30000.00",
     *             "option_price": "0.00",
     *             "additional_discount_price": "0.00",
     *             "coupon_discount_price": "1000.00",
     *             "app_item_discount_amount": "0.00",
     *             "payment_amount": "29000.00",
     *             "quantity": 1,
     *             "product_tax_type": "A",
     *             "tax_rate": 10,
     *             "supplier_product_name": "",
     *             "supplier_transaction_type": "D",
     *             "supplier_id": "S0000000",
     *             "supplier_name": "Apple",
     *             "tracking_no": "12345678",
     *             "shipping_code": "D-20170710-0000013-00",
     *             "claim_code": "C20190107-0000001",
     *             "claim_reason_type": "A",
     *             "claim_reason": "Damaged product",
     *             "refund_bank_name": "Woori Bank",
     *             "refund_bank_account_no": "1234567890",
     *             "refund_bank_account_holder": "Holders Name",
     *             "post_express_flag": null,
     *             "order_status": "N40",
     *             "request_undone": null,
     *             "claim_quantity": 0,
     *             "order_status_additional_info": null,
     *             "status_code": "N1",
     *             "status_text": "Shipping Complete",
     *             "open_market_status": "",
     *             "bundled_shipping_type": "N",
     *             "shipping_company_id": "2",
     *             "shipping_company_name": "DHL",
     *             "shipping_company_code": "0001",
     *             "product_bundle": "F",
     *             "product_bundle_no": "0",
     *             "product_bundle_name": null,
     *             "product_bundle_name_default": null,
     *             "product_bundle_type": "C",
     *             "was_product_bundle": null,
     *             "original_bundle_item_no": null,
     *             "naver_pay_order_id": null,
     *             "naver_pay_claim_status": "PAYMENT_WAITING",
     *             "individual_shipping_fee": "0.00",
     *             "shipping_fee_type": "X",
     *             "shipping_fee_type_text": "Free",
     *             "shipping_payment_option": "F",
     *             "payment_info_id": "0",
     *             "original_item_no": [
     *                 242,
     *                 473
     *             ],
     *             "store_pickup": "F",
     *             "ordered_date": "2017-07-10 15:55:51",
     *             "shipped_date": "2017-07-10 15:56:52",
     *             "delivered_date": "2017-07-10 15:57:05",
     *             "purchaseconfirmation_date": "2017-07-10 15:58:07",
     *             "cancel_date": null,
     *             "return_confirmed_date": null,
     *             "return_request_date": null,
     *             "return_collected_date": null,
     *             "cancel_request_date": null,
     *             "refund_date": null,
     *             "exchange_request_date": null,
     *             "exchange_date": null,
     *             "product_material": null,
     *             "product_material_eng": null,
     *             "cloth_fabric": null,
     *             "product_weight": "1.00",
     *             "volume_size": null,
     *             "volume_size_weight": null,
     *             "clearance_category": null,
     *             "clearance_category_info": null,
     *             "clearance_category_code": null,
     *             "hs_code": "",
     *             "one_plus_n_event": null,
     *             "origin_place": "Domestic",
     *             "origin_place_no": 1798,
     *             "made_in_code": "KR",
     *             "origin_place_value": "",
     *             "gift": "F",
     *             "item_granting_gift": null,
     *             "subscription": "T",
     *             "product_bundle_list": [
     *                 {
     *                     "product_no": 15,
     *                     "product_code": "P000000I",
     *                     "variant_code": "P000000P000A",
     *                     "product_name": "샘플상품 1",
     *                     "product_name_default": "샘플상품 1",
     *                     "option_id": "000A",
     *                     "option_value": "",
     *                     "option_value_default": "",
     *                     "additional_option_value": "",
     *                     "additional_option_values": [
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "text",
     *                             "name": "gift option",
     *                             "value": "yes"
     *                         },
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "url",
     *                             "name": "Attached File",
     *                             "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                         }
     *                     ],
     *                     "quantity": 1,
     *                     "supplier_id": "S0000000",
     *                     "eng_product_name": null,
     *                     "hs_code": "0201100000",
     *                     "product_price": "10000.00",
     *                     "option_price": "0.00",
     *                     "custom_product_code": "",
     *                     "custom_variant_code": null
     *                 },
     *                 {
     *                     "product_no": 16,
     *                     "product_code": "P000000Q",
     *                     "variant_code": "P000000Q000A",
     *                     "product_name": "샘플상품 3",
     *                     "product_name_default": "샘플상품 3",
     *                     "option_id": "000A",
     *                     "option_value": "",
     *                     "option_value_default": "",
     *                     "additional_option_value": "",
     *                     "additional_option_values": [
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "text",
     *                             "name": "gift option",
     *                             "value": "yes"
     *                         },
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "url",
     *                             "name": "Attached File",
     *                             "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                         }
     *                     ],
     *                     "quantity": 1,
     *                     "supplier_id": "S0000000",
     *                     "eng_product_name": null,
     *                     "hs_code": "0201201000",
     *                     "product_price": "20000.00",
     *                     "option_price": "0.00",
     *                     "custom_product_code": "",
     *                     "custom_variant_code": null
     *                 }
     *             ],
     *             "market_cancel_request": null,
     *             "market_cancel_request_quantity": null,
     *             "market_fail_reason": null,
     *             "market_fail_reason_guide": null,
     *             "market_item_no": null,
     *             "market_custom_variant_code": null,
     *             "option_type": "E",
     *             "options": [
     *                 {
     *                     "option_code": "O000000A",
     *                     "option_name": null,
     *                     "option_value": {
     *                         "option_text": null,
     *                         "value_no": 1
     *                     }
     *                 },
     *                 {
     *                     "option_code": "O000000B",
     *                     "option_name": null,
     *                     "option_value": {
     *                         "option_text": null,
     *                         "value_no": 2
     *                     }
     *                 }
     *             ],
     *             "market_discount_amount": "0.00",
     *             "labels": null,
     *             "order_status_before_cs": null,
     *             "supply_price": "1500.00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "item_no": 2,
     *             "order_item_code": "20170710-0000013-02",
     *             "variant_code": "P000000N000B",
     *             "product_no": 14,
     *             "product_code": "P000000N",
     *             "internal_product_name": "iPhone XS",
     *             "custom_product_code": "",
     *             "custom_variant_code": "C002",
     *             "eng_product_name": null,
     *             "option_id": "000B",
     *             "option_value": "",
     *             "option_value_default": "",
     *             "additional_option_value": "",
     *             "additional_option_values": [
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "text",
     *                     "name": "gift option",
     *                     "value": "yes"
     *                 },
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "url",
     *                     "name": "Attached File",
     *                     "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123082.gif"
     *                 }
     *             ],
     *             "product_name": "iPhone XS",
     *             "product_name_default": "iPhone XS",
     *             "product_price": "30000.00",
     *             "option_price": "0.00",
     *             "additional_discount_price": "0.00",
     *             "coupon_discount_price": "1000.00",
     *             "app_item_discount_amount": "0.00",
     *             "payment_amount": "29000.00",
     *             "quantity": 1,
     *             "product_tax_type": "A",
     *             "tax_rate": 10,
     *             "supplier_product_name": "",
     *             "supplier_transaction_type": "D",
     *             "supplier_id": "S0000000",
     *             "supplier_name": "Apple",
     *             "tracking_no": "12345678",
     *             "shipping_code": "D-20170710-0000013-00",
     *             "claim_code": "C20190107-0000002",
     *             "claim_reason_type": "A",
     *             "claim_reason": "Damaged product",
     *             "refund_bank_name": "Woori Bank",
     *             "refund_bank_account_no": "1234567890",
     *             "refund_bank_account_holder": "Holders Name",
     *             "post_express_flag": null,
     *             "order_status": "N40",
     *             "request_undone": null,
     *             "claim_quantity": 0,
     *             "order_status_additional_info": null,
     *             "status_code": "N1",
     *             "status_text": "Shipping Complete",
     *             "open_market_status": "",
     *             "bundled_shipping_type": "N",
     *             "shipping_company_id": "2",
     *             "shipping_company_name": "DHL",
     *             "shipping_company_code": "0001",
     *             "product_bundle": "F",
     *             "product_bundle_no": "0",
     *             "product_bundle_name": null,
     *             "product_bundle_name_default": null,
     *             "product_bundle_type": "C",
     *             "was_product_bundle": null,
     *             "original_bundle_item_no": null,
     *             "naver_pay_order_id": null,
     *             "naver_pay_claim_status": "PAYMENT_WAITING",
     *             "individual_shipping_fee": "0.00",
     *             "shipping_fee_type": "X",
     *             "shipping_fee_type_text": "Free",
     *             "shipping_payment_option": "F",
     *             "payment_info_id": "0",
     *             "original_item_no": [
     *                 242,
     *                 473
     *             ],
     *             "store_pickup": "F",
     *             "ordered_date": "2017-07-10 15:55:51",
     *             "shipped_date": "2017-07-10 15:56:52",
     *             "delivered_date": "2017-07-10 15:57:05",
     *             "purchaseconfirmation_date": "2017-07-10 15:58:07",
     *             "cancel_date": null,
     *             "return_confirmed_date": null,
     *             "return_request_date": null,
     *             "return_collected_date": null,
     *             "cancel_request_date": null,
     *             "refund_date": null,
     *             "exchange_request_date": null,
     *             "exchange_date": null,
     *             "product_material": null,
     *             "product_material_eng": null,
     *             "cloth_fabric": null,
     *             "product_weight": "1.00",
     *             "volume_size": null,
     *             "volume_size_weight": null,
     *             "clearance_category": null,
     *             "clearance_category_info": null,
     *             "clearance_category_code": null,
     *             "hs_code": "",
     *             "one_plus_n_event": null,
     *             "origin_place": "Domestic",
     *             "origin_place_no": 1798,
     *             "made_in_code": "KR",
     *             "origin_place_value": "",
     *             "gift": "F",
     *             "item_granting_gift": null,
     *             "subscription": "T",
     *             "product_bundle_list": [
     *                 {
     *                     "product_no": 15,
     *                     "product_code": "P000000I",
     *                     "variant_code": "P000000P000A",
     *                     "product_name": "샘플상품 1",
     *                     "product_name_default": "샘플상품 1",
     *                     "option_id": "000A",
     *                     "option_value": "",
     *                     "option_value_default": "",
     *                     "additional_option_value": "",
     *                     "additional_option_values": [
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "text",
     *                             "name": "gift option",
     *                             "value": "yes"
     *                         },
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "url",
     *                             "name": "Attached File",
     *                             "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                         }
     *                     ],
     *                     "quantity": 1,
     *                     "supplier_id": "S0000000",
     *                     "eng_product_name": null,
     *                     "hs_code": "0201100000",
     *                     "product_price": "10000.00",
     *                     "option_price": "0.00"
     *                 },
     *                 {
     *                     "product_no": 16,
     *                     "product_code": "P000000Q",
     *                     "variant_code": "P000000Q000A",
     *                     "product_name": "샘플상품 3",
     *                     "product_name_default": "샘플상품 3",
     *                     "option_id": "000A",
     *                     "option_value": "",
     *                     "option_value_default": "",
     *                     "additional_option_value": "",
     *                     "additional_option_values": [
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "text",
     *                             "name": "gift option",
     *                             "value": "yes"
     *                         },
     *                         {
     *                             "key": "item_option_add",
     *                             "type": "url",
     *                             "name": "Attached File",
     *                             "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                         }
     *                     ],
     *                     "quantity": 1,
     *                     "supplier_id": "S0000000",
     *                     "eng_product_name": null,
     *                     "hs_code": "0201201000",
     *                     "product_price": "20000.00",
     *                     "option_price": "0.00"
     *                 }
     *             ],
     *             "market_cancel_request": null,
     *             "market_cancel_request_quantity": null,
     *             "market_fail_reason": null,
     *             "market_fail_reason_guide": null,
     *             "market_item_no": null,
     *             "market_custom_variant_code": null,
     *             "option_type": "E",
     *             "options": [
     *                 {
     *                     "option_code": "O000000A",
     *                     "option_name": null,
     *                     "option_value": {
     *                         "option_text": null,
     *                         "value_no": 1
     *                     }
     *                 },
     *                 {
     *                     "option_code": "O000000B",
     *                     "option_name": null,
     *                     "option_value": {
     *                         "option_text": null,
     *                         "value_no": 2
     *                     }
     *                 }
     *             ],
     *             "market_discount_amount": "0.00",
     *             "labels": null,
     *             "order_status_before_cs": "N20",
     *             "supply_price": "1500.00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfOrderItems(
      input: RetrieveAListOfOrderItemsInput,
      options?: AdminRequestOptions<RetrieveAListOfOrderItemsOutput['items'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfOrderItemsOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-item
     *
     * @example 응답 예시
     * ```json
     * {
     *     "items": [
     *         {
     *             "shop_no": 1,
     *             "item_no": 3315,
     *             "order_item_code": "20220908-0000017-02",
     *             "variant_code": "P000000I000A",
     *             "product_no": 9,
     *             "product_code": "P000000I",
     *             "custom_product_code": "",
     *             "custom_variant_code": "",
     *             "eng_product_name": "",
     *             "option_id": "000A",
     *             "option_value": "",
     *             "option_value_default": "",
     *             "additional_option_value": "",
     *             "additional_option_values": [
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "text",
     *                     "name": "gift option",
     *                     "value": "yes"
     *                 },
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "url",
     *                     "name": "Attached File",
     *                     "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                 }
     *             ],
     *             "product_name": "Sample Product 1",
     *             "product_name_default": "Sample Product 1",
     *             "product_price": "5000.00",
     *             "option_price": "0.00",
     *             "additional_discount_price": "9000.00",
     *             "coupon_discount_price": "0.00",
     *             "app_item_discount_amount": "0.00",
     *             "payment_amount": "36000.00",
     *             "quantity": 10,
     *             "product_tax_type": "A",
     *             "tax_rate": 10,
     *             "supplier_product_name": "",
     *             "supplier_transaction_type": "D",
     *             "supplier_id": "S0000000",
     *             "supplier_name": "Insourced",
     *             "tracking_no": null,
     *             "shipping_code": "D-20220908-0000017-00",
     *             "claim_code": null,
     *             "claim_reason_type": null,
     *             "claim_reason": null,
     *             "refund_bank_name": "",
     *             "refund_bank_account_no": "",
     *             "refund_bank_account_holder": "",
     *             "post_express_flag": null,
     *             "order_status": "N00",
     *             "request_undone": null,
     *             "order_status_additional_info": "",
     *             "claim_quantity": 0,
     *             "status_code": "N1",
     *             "status_text": "awaiting payment",
     *             "open_market_status": "",
     *             "bundled_shipping_type": "N",
     *             "shipping_company_id": "0",
     *             "shipping_company_name": null,
     *             "shipping_company_code": null,
     *             "product_bundle": "F",
     *             "product_bundle_no": "",
     *             "product_bundle_name": null,
     *             "product_bundle_name_default": null,
     *             "product_bundle_type": "C",
     *             "was_product_bundle": "T",
     *             "original_bundle_item_no": "20220908-0000017-01",
     *             "naver_pay_order_id": null,
     *             "naver_pay_claim_status": null,
     *             "individual_shipping_fee": "0.00",
     *             "shipping_fee_type": "X",
     *             "shipping_fee_type_text": "Flat rate",
     *             "shipping_payment_option": "P",
     *             "payment_info_id": "0",
     *             "original_item_no": [],
     *             "store_pickup": "F",
     *             "ordered_date": null,
     *             "shipped_date": null,
     *             "delivered_date": null,
     *             "cancel_date": null,
     *             "return_confirmed_date": null,
     *             "return_request_date": null,
     *             "return_collected_date": null,
     *             "cancel_request_date": null,
     *             "refund_date": null,
     *             "exchange_request_date": null,
     *             "exchange_date": null,
     *             "product_material": "",
     *             "product_material_eng": null,
     *             "cloth_fabric": null,
     *             "product_weight": null,
     *             "volume_size": null,
     *             "volume_size_weight": null,
     *             "clearance_category": null,
     *             "clearance_category_info": null,
     *             "clearance_category_code": null,
     *             "hs_code": "",
     *             "one_plus_n_event": null,
     *             "origin_place": "Domestic",
     *             "origin_place_no": 1798,
     *             "made_in_code": "KR",
     *             "origin_place_value": "",
     *             "gift": "F",
     *             "item_granting_gift": null,
     *             "subscription": "F",
     *             "product_bundle_list": null,
     *             "market_cancel_request": null,
     *             "market_cancel_request_quantity": null,
     *             "market_fail_reason": null,
     *             "market_fail_reason_guide": null,
     *             "market_item_no": null,
     *             "market_custom_variant_code": null,
     *             "option_type": null,
     *             "options": [],
     *             "market_discount_amount": "0.00",
     *             "order_status_before_cs": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "item_no": 3316,
     *             "order_item_code": "20220908-0000017-03",
     *             "variant_code": "P000000J000A",
     *             "product_no": 10,
     *             "product_code": "P000000J",
     *             "custom_product_code": "",
     *             "custom_variant_code": "",
     *             "eng_product_name": "",
     *             "option_id": "000A",
     *             "option_value": "",
     *             "option_value_default": "",
     *             "additional_option_value": "",
     *             "additional_option_values": [
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "text",
     *                     "name": "gift option",
     *                     "value": "yes"
     *                 },
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "url",
     *                     "name": "Attached File",
     *                     "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                 }
     *             ],
     *             "product_name": "Sample Product 2",
     *             "product_name_default": "Sample Product 2",
     *             "product_price": "10000.00",
     *             "option_price": "0.00",
     *             "additional_discount_price": "18000.00",
     *             "coupon_discount_price": "0.00",
     *             "app_item_discount_amount": "0.00",
     *             "payment_amount": "72000.00",
     *             "quantity": 10,
     *             "product_tax_type": "A",
     *             "tax_rate": 10,
     *             "supplier_product_name": "",
     *             "supplier_transaction_type": "D",
     *             "supplier_id": "S0000000",
     *             "supplier_name": "Insourced",
     *             "tracking_no": null,
     *             "shipping_code": "D-20220908-0000017-00",
     *             "claim_code": null,
     *             "claim_reason_type": null,
     *             "claim_reason": null,
     *             "refund_bank_name": "",
     *             "refund_bank_account_no": "",
     *             "refund_bank_account_holder": "",
     *             "post_express_flag": null,
     *             "order_status": "N00",
     *             "request_undone": null,
     *             "order_status_additional_info": "",
     *             "claim_quantity": 0,
     *             "status_code": "N1",
     *             "status_text": "awaiting payment",
     *             "open_market_status": "",
     *             "bundled_shipping_type": "N",
     *             "shipping_company_id": "0",
     *             "shipping_company_name": null,
     *             "shipping_company_code": null,
     *             "product_bundle": "F",
     *             "product_bundle_no": "",
     *             "product_bundle_name": null,
     *             "product_bundle_name_default": null,
     *             "product_bundle_type": "C",
     *             "was_product_bundle": "T",
     *             "original_bundle_item_no": "20220908-0000017-01",
     *             "naver_pay_order_id": null,
     *             "naver_pay_claim_status": null,
     *             "individual_shipping_fee": "0.00",
     *             "shipping_fee_type": "X",
     *             "shipping_fee_type_text": "Flat rate",
     *             "shipping_payment_option": "P",
     *             "payment_info_id": "0",
     *             "original_item_no": [],
     *             "store_pickup": "F",
     *             "ordered_date": null,
     *             "shipped_date": null,
     *             "delivered_date": null,
     *             "cancel_date": null,
     *             "return_confirmed_date": null,
     *             "return_request_date": null,
     *             "return_collected_date": null,
     *             "cancel_request_date": null,
     *             "refund_date": null,
     *             "exchange_request_date": null,
     *             "exchange_date": null,
     *             "product_material": "",
     *             "product_material_eng": null,
     *             "cloth_fabric": null,
     *             "product_weight": null,
     *             "volume_size": null,
     *             "volume_size_weight": null,
     *             "clearance_category": null,
     *             "clearance_category_info": null,
     *             "clearance_category_code": null,
     *             "hs_code": "",
     *             "one_plus_n_event": null,
     *             "origin_place": "Domestic",
     *             "origin_place_no": 1798,
     *             "made_in_code": "KR",
     *             "origin_place_value": "",
     *             "gift": "F",
     *             "item_granting_gift": null,
     *             "subscription": "F",
     *             "product_bundle_list": null,
     *             "market_cancel_request": null,
     *             "market_cancel_request_quantity": null,
     *             "market_fail_reason": null,
     *             "market_fail_reason_guide": null,
     *             "market_item_no": null,
     *             "market_custom_variant_code": null,
     *             "option_type": null,
     *             "options": [],
     *             "market_discount_amount": "0.00",
     *             "order_status_before_cs": null
     *         }
     *     ]
     * }
     * ```
     */
    createAnOrderItem(
      input: CreateAnOrderItemInput,
      options?: AdminRequestOptions<CreateAnOrderItemOutput['items'][number]>,
    ): Promise<AxiosResponse<CreateAnOrderItemOutput>>;
    /**
     * @description
     * 주문의 품주 1개에 대한 주문상태를 수정할 수 있습니다.
     * 품주를 취소/교환/반품으로 상태를 변경하고 사유를 입력할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-item-1
     *
     * @example 응답 예시
     * ```json
     * {
     *     "item": {
     *         "shop_no": 1,
     *         "order_id": "20190613-0000027",
     *         "order_item_code": "20190613-0000027-01",
     *         "claim_type": "C",
     *         "claim_status": "T",
     *         "claim_reason_type": "A",
     *         "claim_reason": "Damaged product",
     *         "claim_quantity": 1
     *     }
     * }
     * ```
     */
    updateAnOrderItem1(
      input: UpdateAnOrderItem1Input,
      options?: AdminRequestOptions<UpdateAnOrderItem1Output['item']>,
    ): Promise<AxiosResponse<UpdateAnOrderItem1Output>>;
  }
}
