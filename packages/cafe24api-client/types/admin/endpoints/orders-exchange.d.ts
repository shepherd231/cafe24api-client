import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 주문 교환(Orders exchange)은 주문의 교환 접수 상태와 관련된 기능입니다.
   * 특정 주문에 대해 교환 접수를 할 수 있으며 교환이 접수된 주문의 상태를 수정할 수 있습니다.
   */
  export interface OrdersExchange {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
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
     * accept : 접수
     * collected : 수거완료
     * exchanged : 교환완료
     *
     *
     */
    status: any;
    /**
     * @description
     * 교환번호
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
    /**
     * @description
     * 교환상품
     *
     *
     */
    exchanged_items: any;
    /**
     * @description
     * 수거완료 여부
     *
     * T : 수거완료
     * F : 수거전
     *
     *
     */
    pickup_completed: any;
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    return_invoice_no: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    return_shipping_company_name: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recover_inventory: any;
    /**
     * @description
     * 수거완료시 교환완료 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    exchanged_after_collected: any;
    /**
     * @description
     * 수거신청 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    request_pickup: any;
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
    add_memo_too: any;
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
    undone_reason_type: any;
    /**
     * @description
     * 철회 사유
     *
     *
     */
    undone_reason: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    expose_order_detail: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     *
     */
    exposed_undone_reason: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrier_id: any;
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
    return_invoice_success: any;
    /**
     * @description
     * 반송장 처리 실패 사유
     *
     * 최대글자수 : [100자]
     */
    return_invoice_fail_reason: any;
  }

  export interface CreateAnOrderExchangeInput {
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
     * 주문상태
     *
     * accepted : 교환접수
     * exchanged : 교환완료
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
      /**
       * @description
       * (동일상품 다른 옵션 교환시) 교환 상품 품목 코드
       *
       *
       */
      exchange_variant_code?: any;
    };
    /**
     * @description
     * 동일상품교환 여부
     *
     * T : 동일상품교환
     * F : 다른상품교환
     *
     * @required
     */
    same_product: any;
  }

  export interface CreateAnOrderExchangeOutput {
    exchange: {
      shop_no: number;
      order_id: string;
      status: string;
      claim_code: string;
      items: {
        order_item_code: string;
        quantity: number;
        exchange_variant_code: any;
      }[];
      exchanged_items: {
        order_item_code: string;
      }[];
    };
  }
  export interface UpdateAnOrderExchangeInput {
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
     * 교환번호
     *
     * @required
     */
    claim_code: any;
    /**
     * @description
     * 주문상태
     *
     * exchanged : 교환완료
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
    pickup_completed?: any;
    /**
     * @description
     * 반품 송장 번호
     *
     * 최대글자수 : [40자]
     */
    return_invoice_no?: any;
    /**
     * @description
     * 반품 배송업체명
     *
     * 최대글자수 : [30자]
     */
    return_shipping_company_name?: any;
    /**
     * @description
     * 재고복구
     *
     * T : 복구함
     * F : 복구안함
     *
     *
     */
    recover_inventory?: any;
    /**
     * @description
     * 수거완료시 교환완료 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    exchanged_after_collected?: any;
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
      order_item_code?: any;
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
    request_pickup?: any;
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
    add_memo_too?: any;
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
    undone_reason_type?: any;
    /**
     * @description
     * 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    undone_reason?: any;
    /**
     * @description
     * 주문상세내역 노출 여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    expose_order_detail?: any;
    /**
     * @description
     * 주문상세내역 노출 철회 사유
     *
     * 최대글자수 : [2000자]
     */
    exposed_undone_reason?: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrier_id?: any;
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
    return_invoice_success?: any;
    /**
     * @description
     * 반송장 처리 실패 사유
     *
     * 최대글자수 : [100자]
     */
    return_invoice_fail_reason?: any;
  }

  export interface UpdateAnOrderExchangeOutput {
    exchange: {
      shop_no: number;
      order_id: string;
      claim_code: string;
      status: string;
      pickup_completed: Cafe24Enum;
      carrier_id: any;
      return_invoice_no: any;
      return_shipping_company_name: any;
      return_invoice_success: any;
      return_invoice_fail_reason: any;
      recover_inventory: Cafe24Enum;
      exchanged_after_collected: any;
      items: {
        order_item_code: string;
      }[];
      request_pickup: any;
      pickup: {
        name: any;
        phone: any;
        cellphone: any;
        zipcode: any;
        address1: any;
        address2: any;
      };
      undone: any;
      add_memo_too: any;
      undone_reason_type: any;
      undone_reason: any;
      expose_order_detail: any;
      exposed_undone_reason: any;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문을 교환 접수 처리합니다.
     * 동일상품교환 여부와 재고복구 상태를 입력할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-exchange
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchange": {
     *         "shop_no": 1,
     *         "order_id": "20190805-0000011",
     *         "status": "accepted",
     *         "claim_code": "B20190805-0000007",
     *         "items": [
     *             {
     *                 "order_item_code": "20190805-0000011-01",
     *                 "quantity": 4,
     *                 "exchange_variant_code": null
     *             },
     *             {
     *                 "order_item_code": "20190805-0000011-02",
     *                 "quantity": 4,
     *                 "exchange_variant_code": "P000000R000C"
     *             }
     *         ],
     *         "exchanged_items": [
     *             {
     *                 "order_item_code": "20190805-0000011-03"
     *             },
     *             {
     *                 "order_item_code": "20190805-0000011-04"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAnOrderExchange(
      input: CreateAnOrderExchangeInput,
      options?: RequestOptions<CreateAnOrderExchangeInput>,
    ): Promise<AxiosResponse<CreateAnOrderExchangeOutput>>;
    /**
     * @description
     * 교환이 접수된 주문의 상태를 수정할 수 있습니다.
     * 단건의 주문에 대해 교환접수를 철회하고 재고를 복구하거나 철회사유를 입력할 수 있습니다.
     * 택배사에 이미 수거요청이 전달되었으나 수거가 필요하지 않게 될 경우, 택배사에 직접 연락하셔서 수거요청을 취소해주셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-exchange
     *
     * @example 응답 예시
     * ```json
     * {
     *     "exchange": {
     *         "shop_no": 1,
     *         "order_id": "20190228-0000011",
     *         "claim_code": "B20190228-0000004",
     *         "status": "processing",
     *         "pickup_completed": "T",
     *         "carrier_id": null,
     *         "return_invoice_no": null,
     *         "return_shipping_company_name": null,
     *         "return_invoice_success": null,
     *         "return_invoice_fail_reason": null,
     *         "recover_inventory": "T",
     *         "exchanged_after_collected": null,
     *         "items": [
     *             {
     *                 "order_item_code": "20190228-0000011-01"
     *             },
     *             {
     *                 "order_item_code": "20190228-0000011-02"
     *             }
     *         ],
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
    updateAnOrderExchange(
      input: UpdateAnOrderExchangeInput,
      options?: RequestOptions<UpdateAnOrderExchangeInput>,
    ): Promise<AxiosResponse<UpdateAnOrderExchangeOutput>>;
  }
}
