import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 장바구니(Carts)는 상품을 주문하기 전 한번에 주문할 수 있도록 상품을 미리 담아두는 기능입니다.
   * 장바구니 리소스에서는 Front API를 사용하여 특정 상품을 장바구니에 담을 수 있고 Admin API에서는 특정 회원의 장바구니를 조회할 수 있습니다.
   */
  export interface Carts {
    /**
     * @description
     * 장바구니 내의 아이템 코드 중복 여부
     *
     * T : 품목이 중복됨
     * F : 품목이 중복되지 않음
     *
     *
     */
    duplicatedItem: any;
    /**
     * @description
     * 품목
     *
     *
     */
    variants: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    productNo: any;
    /**
     * @description
     * 장바구니 타입
     *
     * A0000 : 일반
     * A0001 : 무이자
     *
     *
     */
    basketType: any;
    /**
     * @description
     * 배송비 선결제 설정
     *
     * P : 선불
     * C : 착불
     *
     *
     */
    prepaidShippingFee: any;
  }

  export interface CreateAShoppingCartInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
    /**
     * @description
     * 품목
     *
     * 장바구니에 추가할 품목의 개수와 품목 코드
     * 연동형 옵션을 장바구니에 담을 경우 options에서 option_code와 value_no를 사용하여 담을 수 있음
     *
     *
     */
    variants?: {
      /**
       * @description
       * 수량
       *
       *
       */
      quantity: any;
      /**
       * @description
       * 상품 품목 코드
       *
       *
       */
      variantsCode: any;
      options?: any[];
      additionalOptionValues?: any[];
    };
    /**
     * @description
     * 추가구성상품의 품목
     *
     *
     */
    addtionalProducts?: any;
    /**
     * @description
     * 상품번호
     *
     * 상품의 고유한 일련 번호
     * 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 장바구니 타입
     *
     * 무이자할부 가능한 상품일 경우 무이자 타입으로 설정 가능
     *
     * A0000 : 일반
     * A0001 : 무이자
     *
     * @required
     */
    basketType: any;
    /**
     * @description
     * 장바구니 중복체크
     *
     * 장바구니에 추가할 품목에 대하여 중복을 허용할지 여부
     * 중복을 허용하면 품목의 개수가 추가됨
     * 중복을 허용하지 않으면 해당 품목은 장바구니에 추가되지 않음
     *
     * T : 품목 중복체크
     * F : 품목 중복체크 안함
     *
     * @required
     */
    duplicatedItemCheck: any;
    /**
     * @description
     * 배송비 선결제 설정
     *
     * P : 선불
     * C : 착불
     *
     * @required
     */
    prepaidShippingFee: any;
  }

  export interface CreateAShoppingCartOutput {
    carts: {
      duplicatedItem: Cafe24Enum;
      variants: {
        quantity: number;
        variantsCode: string;
        options: {
          optionCode: string;
          valueNo: number;
        }[];
        additionalOptionValues: {
          key: string;
          title: string;
          type: string;
          value: string;
        }[];
      }[];
      productNo: number;
      basketType: string;
      prepaidShippingFee: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품을 장바구니에 담을 수 있습니다.
     * 해당 API는 로그인 세션(브라우저 세션)을 기반으로 동작합니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#create-a-shopping-cart
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carts": {
     *         "duplicated_item": "T",
     *         "variants": [
     *             {
     *                 "quantity": 1,
     *                 "variants_code": "P0000BJU000H",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000D",
     *                         "value_no": 95
     *                     },
     *                     {
     *                         "option_code": "O000000C",
     *                         "value_no": 76
     *                     }
     *                 ],
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "title": "Signature",
     *                         "type": "text",
     *                         "value": "John doe"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "title": "Requests and offers",
     *                         "type": "text",
     *                         "value": "Make it elegant"
     *                     }
     *                 ]
     *             },
     *             {
     *                 "quantity": 2,
     *                 "variants_code": "P0000BJU000D",
     *                 "options": [
     *                     {
     *                         "option_code": "O000000D",
     *                         "value_no": 24
     *                     },
     *                     {
     *                         "option_code": "O000000C",
     *                         "value_no": 56
     *                     }
     *                 ],
     *                 "additional_option_values": [
     *                     {
     *                         "key": "item_option_add",
     *                         "title": "Signature",
     *                         "type": "text",
     *                         "value": "John doe"
     *                     },
     *                     {
     *                         "key": "item_option_add",
     *                         "title": "Requests and offers",
     *                         "type": "text",
     *                         "value": "Make it elegant"
     *                     }
     *                 ]
     *             }
     *         ],
     *         "product_no": 950,
     *         "basket_type": "A0000",
     *         "prepaid_shipping_fee": "P"
     *     }
     * }
     * ```
     */
    createAShoppingCart(
      input: CreateAShoppingCartInput,
      options?: RequestOptions<CreateAShoppingCartInput>,
    ): Promise<AxiosResponse<CreateAShoppingCartOutput>>;
  }
}
