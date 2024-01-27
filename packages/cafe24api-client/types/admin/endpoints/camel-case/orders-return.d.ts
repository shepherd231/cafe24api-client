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
   * 주문 반품(Orders return)은 특정 주문의 반품과 관련된 기능입니다.
   * 특정 주문을 반품처리 하거나, 반품처리중인 주문의 상태를 수정할 수 있습니다.
   */
  export interface OrdersReturn {
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
      * 반품번호
      * 
      * 
      */ 
    claimCode: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    items: any;
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
      * 배송사 아이디
      * 
      * 
      */ 
    carrierId: any;
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
      * 최대글자수 : [100자]
      */ 
    returnInvoiceFailReason: any;
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
      * 수거지역 상세
      * 
      * 
      */ 
    pickup: any;
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
      * 관리자 메모에도 추가
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    addMemoToo: any;
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
  }

  export interface CreateAnOrderReturnInput {
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
      * PG 취소 요청 여부
      * 
      * 주문을 반품처리함과 동시에 PG취소도 같이 처리할 수 있다.
      * 
      * PG취소가 가능한 결제수단(신용카드, 실시간계좌이체)에서만 사용 가능하다.
      * 
      * 결제수단이 복수인 주문(카드 등으로 결제한 주문을 결제 후 품목을 추가한 경우)의 경우에는 PG 결제를 취소할 수 없으며 관리자 화면에서 취소해야 한다.
      * 
      * 오픈마켓/네이버페이 주문을 취소할 경우 사용 불가
      * 
      * T : 취소함
      * F : 취소안함
      * 
      * @default F
      * 
      * 
      */ 
    paymentGatewayCancel?: any;
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
      * 환불 방식(refund_method)이 현금(T)일 경우 필수
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

  export interface CreateAnOrderReturnOutput {
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
    };
  }
  export interface UpdateAnOrderReturnInput {
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
      * 배송사 아이디
      * 
      * 배송사에서 반송장번호 업데이트시 carrier_id 필수
      * 
      * 
      */ 
    carrierId?: any;
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

  export interface UpdateAnOrderReturnOutput {
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
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 배송 후 주문 하나를 반품 처리할 수 있는 기능입니다.
     * 해당 API를 사용하여 반품완료처리할 경우 환불완료 처리와 함께 PG 취소도 같이 진행할 수 있습니다.(payment_gateway_cancel : &#34;T&#34;로 요청시)
     * 부분반품할 경우 각 환불 금액은 자동 계산되어 환불처리됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-return
     *
     * @example 응답 예시
     * ```json
     * {
     *     "return": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011",
     *         "status": "returned",
     *         "claim_code": "C20190805-0000007",
     *         "pickup_completed": "T",
     *         "items": [
     *             {
     *                 "order_item_code": "20190805-0000011-01",
     *                 "quantity": 4
     *             },
     *             {
     *                 "order_item_code": "20190805-0000011-02",
     *                 "quantity": 4
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAnOrderReturn(
      input: CreateAnOrderReturnInput,
      options?: AdminRequestOptions<CreateAnOrderReturnOutput['return']>,
    ): Promise<AxiosResponse<CreateAnOrderReturnOutput>>;
    /**
     * @description
     * 주문의 특정 반품번호의 반품접수상태를 수정하는 기능입니다.
     * 반품이 접수된 주문을 수정할 수 있습니다.
     * Update an orders return 을 통해 반품접수를 철회하거나, 재고를 복구하거나, 철회사유를 입력할 수 있습니다.
     * 택배사에 이미 수거요청이 전달되었으나 수거가 필요하지 않게 될 경우, 택배사에 직접 연락하셔서 수거요청을 취소해주셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-return
     *
     * @example 응답 예시
     * ```json
     * {
     *     "return": {
     *         "shop_no": 1,
     *         "order_id": "20190228-0000011",
     *         "claim_code": "C20190228-0000004",
     *         "status": "processing",
     *         "pickup_completed": "T",
     *         "carrier_id": null,
     *         "return_invoice_no": null,
     *         "return_shipping_company_name": null,
     *         "return_invoice_success": null,
     *         "return_invoice_fail_reason": null,
     *         "items": [
     *             {
     *                 "order_item_code": "20190228-0000011-01"
     *             },
     *             {
     *                 "order_item_code": "20190228-0000011-02"
     *             }
     *         ],
     *         "refund_method_code": [
     *             "F",
     *             "T"
     *         ],
     *         "refund_bank_code": "bank_82",
     *         "refund_bank_account_no": "000000111111",
     *         "refund_bank_account_holder": "John Doe",
     *         "combined_refund_method": null,
     *         "recover_inventory": "T",
     *         "request_pickup": null,
     *         "pickup": {
     *             "name": null,
     *             "phone": null,
     *             "cellphone": null,
     *             "zipcode": null,
     *             "address1": null,
     *             "address2": null
     *         },
     *         "undone": null,
     *         "add_memo_too": null,
     *         "undone_reason_type": null,
     *         "undone_reason": null,
     *         "expose_order_detail": null,
     *         "exposed_undone_reason": null
     *     }
     * }
     * ```
     */
    updateAnOrderReturn(
      input: UpdateAnOrderReturnInput,
      options?: AdminRequestOptions<UpdateAnOrderReturnOutput['return']>,
    ): Promise<AxiosResponse<UpdateAnOrderReturnOutput>>;
  }
}
