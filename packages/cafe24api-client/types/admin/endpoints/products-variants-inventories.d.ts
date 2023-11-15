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
     * 재고 사용여부
     *
     * 해당 품목에서 재고 관리를 사용할 것인지 여부. 해당 품목에 재고 관리를 사용할 경우 재고 수량을 입력할 수 있다. 재고 관리를 사용하지 않을 경우 해당 상품은 재고와 관계 없이 판매할 수 있으며, 재고 수량, 재고수량 체크 기준, 품절 표시 여부를 사용할 수 없다.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_inventory: any;
    /**
     * @description
     * 중요재고 여부
     *
     * 해당 재고를 중요하게 관리하는지 여부. 쇼핑몰에서는 검색을 하기위한 구분 데이터로 사용한다.
     *
     * A : 일반재고
     * B : 중요재고
     *
     *
     */
    important_inventory: any;
    /**
     * @description
     * 재고 수량체크 기준
     *
     * 재고 수량을 어느 시점에 차감할 것인지 여부. 무통장 입금처럼 결제 시점과 주문 시점이 다른 경우 재고를 차감하는 기준을 다르게 설정할 수 있다.
     *
     * 주문 기준 : 주문한 시점에 재고 차감. 무통장 입금의 경우 입금 완료가 되지 않아도 재고를 차감한다.
     * 결제 기준 : 결제한 시점에 재고 차감. 무통장 입금의 경우 입금 완료가 된 다음 재고를 차감한다.
     *
     * A : 주문기준
     * B : 결제기준
     *
     *
     */
    inventory_control_type: any;
    /**
     * @description
     * 품절표시여부
     *
     * 재고가 다 판매되었을 경우 해당 품목을 품절로 표시할 것인지 여부. 품절로 표시되면 주문을 할 수 없다. 모든 품목이 품절이 될 경우 해당 상품에 품절 아이콘이 표시된다.
     * &#34;표시안함&#34; 선택시 재고가 다 판매되어도 주문이 가능하며 재고가 마이너스(-)로 표기된다.
     *
     * T : 품절표시 사용
     * F : 품절표시 사용안함
     *
     *
     */
    display_soldout: any;
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
      use_inventory: Cafe24Enum;
      important_inventory: Cafe24Enum;
      inventory_control_type: Cafe24Enum;
      display_soldout: Cafe24Enum;
      quantity: number;
      safety_inventory: number;
      origin_code: string;
    };
  }
  export interface UpdateAProductVariantInventoryInput {
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
     * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않는다.
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variant_code: any;
    /**
     * @description
     * 재고 사용여부
     *
     * 해당 품목에서 재고 관리를 사용할 것인지 여부. 해당 품목에 재고 관리를 사용할 경우 재고 수량을 입력할 수 있다. 재고 관리를 사용하지 않을 경우 해당 상품은 재고와 관계 없이 판매할 수 있으며, 재고 수량, 재고수량 체크 기준, 품절 표시 여부를 사용할 수 없다.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_inventory?: any;
    /**
     * @description
     * 중요재고 여부
     *
     * 해당 재고를 중요하게 관리하는지 여부. 쇼핑몰에서는 검색을 하기위한 구분 데이터로 사용한다.
     *
     * A : 일반재고
     * B : 중요재고
     *
     *
     */
    important_inventory?: any;
    /**
     * @description
     * 재고 수량체크 기준
     *
     * 재고 수량을 어느 시점에 차감할 것인지 여부. 무통장 입금처럼 결제 시점과 주문 시점이 다른 경우 재고를 차감하는 기준을 다르게 설정할 수 있다.
     *
     * 주문 기준 : 주문한 시점에 재고 차감. 무통장 입금의 경우 입금 완료가 되지 않아도 재고를 차감한다.
     * 결제 기준 : 결제한 시점에 재고 차감. 무통장 입금의 경우 입금 완료가 된 다음 재고를 차감한다.
     *
     * A : 주문기준
     * B : 결제기준
     *
     *
     */
    inventory_control_type?: any;
    /**
     * @description
     * 품절표시여부
     *
     * 재고가 다 판매되었을 경우 해당 품목을 품절로 표시할 것인지 여부. 품절로 표시되면 주문을 할 수 없다. 모든 품목이 품절이 될 경우 해당 상품에 품절 아이콘이 표시된다.
     * &#34;표시안함&#34; 선택시 재고가 다 판매되어도 주문이 가능하며 재고가 마이너스(-)로 표기된다.
     *
     * T : 품절표시 사용
     * F : 품절표시 사용안함
     *
     *
     */
    display_soldout?: any;
    /**
     * @description
     * 수량
     *
     * 해당 품목에 판매가 가능한 재고 수량. 재고 수량은 주문 또는 결제시 차감되며, 품절 표시를 위하여 체크된다.
     *
     *
     */
    quantity?: any;
    /**
     * @description
     * 안전재고수량
     *
     *
     */
    safety_inventory?: any;
    /**
     * @description
     * 출고지 코드
     *
     *
     */
    origin_code?: any;
  }

  export interface UpdateAProductVariantInventoryOutput {
    inventory: {
      shop_no: number;
      variant_code: string;
      use_inventory: Cafe24Enum;
      important_inventory: Cafe24Enum;
      inventory_control_type: Cafe24Enum;
      display_soldout: Cafe24Enum;
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
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-inventory-details-of-a-product-variant
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inventory": {
     *         "shop_no": 1,
     *         "variant_code": "P000000R000C",
     *         "use_inventory": "T",
     *         "important_inventory": "A",
     *         "inventory_control_type": "B",
     *         "display_soldout": "F",
     *         "quantity": 0,
     *         "safety_inventory": 0,
     *         "origin_code": "W00000BT"
     *     }
     * }
     * ```
     */
    retrieveInventoryDetailsOfAProductVariant(
      input: RetrieveInventoryDetailsOfAProductVariantInput,
      options?: RequestOptions<RetrieveInventoryDetailsOfAProductVariantInput>,
    ): Promise<AxiosResponse<RetrieveInventoryDetailsOfAProductVariantOutput>>;
    /**
     * @description
     * 상품의 품목의 재고에 관한 정보를 수정할 수 있습니다.
     * 재고 관리의 사용여부, 중요재고의 여부, 안전재고 설정, 재고수량 수정 등을 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-variant-inventory
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inventory": {
     *         "shop_no": 1,
     *         "variant_code": "P00000GR000A",
     *         "use_inventory": "T",
     *         "important_inventory": "A",
     *         "inventory_control_type": "A",
     *         "display_soldout": "T",
     *         "quantity": 3,
     *         "safety_inventory": 8,
     *         "origin_code": "W00000BT"
     *     }
     * }
     * ```
     */
    updateAProductVariantInventory(
      input: UpdateAProductVariantInventoryInput,
      options?: RequestOptions<UpdateAProductVariantInventoryInput>,
    ): Promise<AxiosResponse<UpdateAProductVariantInventoryOutput>>;
  }
}
