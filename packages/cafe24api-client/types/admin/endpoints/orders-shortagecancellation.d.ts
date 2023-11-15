import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문의 재고부족취소(Orders shortagecancellation)는 이벤트 혹은 재고설정의 착오 등으로 인해 보유한 재고보다 많은 수량이 판매되었을 때
   * 취소완료 및 환불까지 처리할 수 있는 기능입니다.
   */
  export interface OrdersShortagecancellation {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 최소값: [1]
     */
    shop_no: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
     *
     *
     */
    status: any;
    /**
     * @description
     * 취소 번호
     *
     *
     */
    claim_code: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    items: any;
  }

  export interface CreateAnOrderCancellationOnStockShortageInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
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
     * PG 취소 요청 여부
     *
     * T : 취소함
     * F : 취소안함
     *
     * @default F
     *
     *
     */
    payment_gateway_cancel?: any;
    /**
     * @description
     * 할인금액 자동계산 플래그 보존여부
     *
     * 보존함 : T
     * 제거함 : F
     *
     * @default F
     *
     *
     */
    keep_auto_calculation?: any;
    /**
     * @description
     * 사은품 자동 회수
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    collect_gift?: any;
    /**
     * @description
     * 주문상태
     *
     * canceled : 취소완료
     * canceling : 취소처리중
     *
     * @required
     */
    status: any;
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
    recover_inventory?: any;
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
    recover_coupon?: any;
    /**
     * @description
     * 복원할 쿠폰 번호
     *
     *
     */
    recover_coupon_no?: any;
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
    add_memo_too?: any;
    /**
     * @description
     * 취소사유
     *
     * 최대글자수 : [2000자]
     */
    reason?: any;
    /**
     * @description
     * 취소사유 구분
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
    claim_reason_type?: any;
    /**
     * @description
     * 네이버페이 취소사유 구분
     *
     * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * 51 : 구매 의사 취소
     * 52 : 색상 및 사이즈 변경
     * 53 : 다른 상품 잘못 주문
     * 54 : 서비스 및 상품 불만족
     * 55 : 배송 지연
     * 56 : 상품 품절
     * 60 : 상품 정보 상이
     *
     *
     */
    naverpay_cancel_reason_type?: any;
    /**
     * @description
     * 카카오페이 취소사유 구분
     *
     * K1 : 변심에 의한 상품 취소
     * K2 : 다른 옵션이나 상품을 잘못 주문함
     * K3 : 배송지연
     * K4 : 상품 파손 또는 불량
     * K5 : 다른 상품 오배송 또는 구성품 누락
     * K6 : 상품정보와 다름
     * K7 : 품절로 인한 배송 불가
     *
     *
     */
    kakaopay_cancel_reason_type?: any;
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
    refund_method_code?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     *
     */
    refund_bank_code?: any;
    /**
     * @description
     * 환불은행명
     *
     * 최대글자수 : [250자]
     */
    refund_bank_name?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     *
     */
    refund_bank_account_no?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     * 최대글자수 : [15자]
     */
    refund_bank_account_holder?: any;
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
      order_item_code: any;
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
    };
  }

  export interface CreateAnOrderCancellationOnStockShortageOutput {
    shortagecancellation: {
      shop_no: number;
      order_id: string;
      status: string;
      claim_code: string;
      items: {
        order_item_code: string;
        quantity: number;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문을 취소처리 및 환불까지 처리할 수 있습니다.
     * 재고나 쿠폰의 복원 여부도 선택할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-cancellation-on-stock-shortage
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shortagecancellation": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011",
     *         "status": "canceled",
     *         "claim_code": "C20190805-0000007",
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
    createAnOrderCancellationOnStockShortage(
      input: CreateAnOrderCancellationOnStockShortageInput,
      options?: RequestOptions<CreateAnOrderCancellationOnStockShortageInput>,
    ): Promise<AxiosResponse<CreateAnOrderCancellationOnStockShortageOutput>>;
  }
}
