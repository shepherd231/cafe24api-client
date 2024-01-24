import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 재고(Inventories)는 판매 가능한 해당 품목의 수량을 의미합니다. 재고는 품목(Variants)별로 존재하며 해당 재고 이상 품목이 판매되면 해당 상품은 품절 상태가 됩니다.
   */
  export interface ProductsVariantsInventories {
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
     * 품목코드
     *
     * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않는다.
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variant_code: any;
    /**
     * @description
     * 수량
     *
     * 해당 품목에 판매가 가능한 재고 수량. 재고 수량은 주문 또는 결제시 차감되며, 품절 표시를 위하여 체크된다.
     *
     *
     */
    quantity: any;
    /**
     * @description
     * 안전재고수량
     *
     *
     */
    safety_inventory: any;
    /**
     * @description
     * 출고지 코드
     *
     *
     */
    origin_code: any;
  }

  export interface RetrieveInventoryDetailsOfAProductVariantInput {
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
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 품목코드
     *
     * 판매 수량을 검색할 품목 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variant_code: any;
  }

  export interface RetrieveInventoryDetailsOfAProductVariantOutput {
    inventory: {
      shop_no: number;
      variant_code: string;
      quantity: number;
      safety_inventory: number;
      origin_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 품목의 재고를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-inventory-details-of-a-product-variant
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inventory": {
     *         "shop_no": 1,
     *         "variant_code": "P000000R000C",
     *         "quantity": 0,
     *         "safety_inventory": 0,
     *         "origin_code": "W00000BT"
     *     }
     * }
     * ```
     */
    retrieveInventoryDetailsOfAProductVariant(
      input: RetrieveInventoryDetailsOfAProductVariantInput,
      options?: RequestOptions<
        RetrieveInventoryDetailsOfAProductVariantOutput['inventory']
      >,
    ): Promise<AxiosResponse<RetrieveInventoryDetailsOfAProductVariantOutput>>;
  }
}
