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
   * 상품의 품목(Products variants)은 쇼핑몰에서 판매되는 상품의 기본 단위입니다.
   * 쇼핑몰은 일반적으로 고객에게 다양한 선택권을 제공하기 위해 같은 상품이지만 사이즈가 다르거나, 혹은 색상이 다른 품목들을 판매합니다.
   * 품목의 조회, 등록, 수정 또는 삭제를 할 수 있습니다.
   */
  export interface ProductsVariants {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 상품 품목 코드
     *
     * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않음.
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variantCode: any;
    /**
     * @description
     * 옵션
     *
     *
     */
    options: any;
    /**
     * @description
     * 자체 품목 코드
     *
     * 사용자가 품목에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함.
     *
     * 최대글자수 : [40자]
     */
    customVariantCode: any;
    /**
     * @description
     * 진열상태
     *
     * 해당 품목을 진열할지 여부. 품목을 진열할 경우 상품 상세 또는 상품 목록에서 해당 품목을 선택할 수 있다. 품목이 진열되어있지 않을 경우 해당 품목이 표시되지 않으며 해당 품목을 구매할 수 없다.
     *
     * T : 판매함
     * F : 판매안함
     *
     *
     */
    display: any;
    /**
     * @description
     * 판매상태
     *
     * 해당 품목을 판매할지 여부. 진열은 되어있으나 판매는 하지 않을 경우 해당 품목은 &#34;품절&#34;로 표시되며 해당 품목을 구매할 수 없다. 품목이 &#34;판매함&#34; 상태여도 &#34;진열안함&#34;으로 되어있다면 해당 품목을 구매할 수 없다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    selling: any;
    /**
     * @description
     * 추가금액
     *
     * 해당 품목을 구매할 경우, 상품의 판매가에 더하여 지불해야하는 추가 가격.
     *
     *
     */
    additionalAmount: any;
    /**
     * @description
     * 재고 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useInventory: any;
    /**
     * @description
     * 중요재고 여부
     *
     * A : 일반재고
     * B : 중요재고
     *
     *
     */
    importantInventory: any;
    /**
     * @description
     * 재고 수량체크 기준
     *
     * A : 주문기준
     * B : 결제기준
     *
     *
     */
    inventoryControlType: any;
    /**
     * @description
     * 품절표시여부
     *
     * T : 품절표시 사용
     * F : 품절표시 사용안함
     *
     *
     */
    displaySoldout: any;
    /**
     * @description
     * 수량
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
    safetyInventory: any;
    /**
     * @description
     * 재고 리소스
     *
     * 품목의 재고 리소스
     *
     *
     */
    inventories: any;
    /**
     * @description
     * 자체품목코드 중복여부
     *
     * T : 중복됨
     * F : 중복안됨
     *
     *
     */
    duplicatedCustomVariantCode: any;
    /**
     * @description
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     *
     */
    productNo: any;
  }

  export interface RetrieveAListOfProductVariantsInput {
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
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 재고 리소스
     *
     * 품목의 재고 리소스
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * @embed
     */
    inventories?: any;
  }

  export interface RetrieveAListOfProductVariantsOutput {
    variants: {
      shopNo: number;
      variantCode: string;
      options: {
        name: string;
        value: string;
      }[];
      customVariantCode: string;
      display: Cafe24Enum;
      selling: Cafe24Enum;
      additionalAmount: string;
      useInventory: Cafe24Enum;
      importantInventory: Cafe24Enum;
      inventoryControlType: Cafe24Enum;
      displaySoldout: Cafe24Enum;
      quantity: number;
      safetyInventory: number;
    }[];
  }
  export interface RetrieveAProductVariantInput {
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
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 품목코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variantCode: any;
    /**
     * @description
     * 재고 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    inventories?: any;
  }

  export interface RetrieveAProductVariantOutput {
    variant: {
      shopNo: number;
      variantCode: string;
      options: {
        name: string;
        value: string;
      }[];
      customVariantCode: string;
      display: Cafe24Enum;
      selling: Cafe24Enum;
      additionalAmount: string;
      useInventory: Cafe24Enum;
      importantInventory: Cafe24Enum;
      inventoryControlType: Cafe24Enum;
      displaySoldout: Cafe24Enum;
      quantity: number;
      safetyInventory: number;
    };
  }
  export interface UpdateAProductVariantInput {
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
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 상품 품목 코드
     *
     * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않음.
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variantCode: any;
    /**
     * @description
     * 자체 품목 코드
     *
     * 사용자가 품목에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함.
     *
     * 최대글자수 : [40자]
     */
    customVariantCode?: any;
    /**
     * @description
     * 진열상태
     *
     * 해당 품목을 진열할지 여부. 품목을 진열할 경우 상품 상세 또는 상품 목록에서 해당 품목을 선택할 수 있다. 품목이 진열되어있지 않을 경우 해당 품목이 표시되지 않으며 해당 품목을 구매할 수 없다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    display?: any;
    /**
     * @description
     * 판매상태
     *
     * 해당 품목을 판매할지 여부. 진열은 되어있으나 판매는 하지 않을 경우 해당 품목은 &#34;품절&#34;로 표시되며 해당 품목을 구매할 수 없다. 품목이 &#34;판매함&#34; 상태여도 &#34;진열안함&#34;으로 되어있다면 해당 품목을 구매할 수 없다.
     *
     * T : 판매함
     * F : 판매안함
     *
     *
     */
    selling?: any;
    /**
     * @description
     * 추가금액
     *
     * 해당 품목을 구매할 경우, 상품의 판매가에 더하여 지불해야하는 추가 가격.
     *
     *
     */
    additionalAmount?: any;
    /**
     * @description
     * 수량
     *
     *
     */
    quantity?: any;
    /**
     * @description
     * 재고 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useInventory?: any;
    /**
     * @description
     * 중요재고 여부
     *
     * A : 일반재고
     * B : 중요재고
     *
     *
     */
    importantInventory?: any;
    /**
     * @description
     * 재고 수량체크 기준
     *
     * A : 주문기준
     * B : 결제기준
     *
     *
     */
    inventoryControlType?: any;
    /**
     * @description
     * 품절표시여부
     *
     * T : 품절표시 사용
     * F : 품절표시 사용안함
     *
     *
     */
    displaySoldout?: any;
    /**
     * @description
     * 안전재고수량
     *
     *
     */
    safetyInventory?: any;
  }

  export interface UpdateAProductVariantOutput {
    variant: {
      shopNo: number;
      variantCode: string;
      options: {
        name: string;
        value: string;
      }[];
      customVariantCode: string;
      duplicatedCustomVariantCode: Cafe24Enum;
      display: Cafe24Enum;
      selling: Cafe24Enum;
      additionalAmount: string;
      inventories: {
        shopNo: number;
        variantCode: string;
        quantity: number;
        useInventory: Cafe24Enum;
        importantInventory: Cafe24Enum;
        inventoryControlType: Cafe24Enum;
        displaySoldout: Cafe24Enum;
        safetyInventory: number;
      };
    };
  }
  export interface UpdateMultipleProductVariantsInput {
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
     * 상품번호
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 상품 품목 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variantCode: any;
    /**
     * @description
     * 자체 품목 코드
     *
     * 최대글자수 : [40자]
     */
    customVariantCode?: any;
    /**
     * @description
     * 진열상태
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    display?: any;
    /**
     * @description
     * 판매상태
     *
     * T : 판매함
     * F : 판매안함
     *
     *
     */
    selling?: any;
    /**
     * @description
     * 추가금액
     *
     *
     */
    additionalAmount?: any;
    /**
     * @description
     * 수량
     *
     *
     */
    quantity?: any;
    /**
     * @description
     * 재고 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useInventory?: any;
    /**
     * @description
     * 중요재고 여부
     *
     * A : 일반재고
     * B : 중요재고
     *
     *
     */
    importantInventory?: any;
    /**
     * @description
     * 재고 수량체크 기준
     *
     * A : 주문기준
     * B : 결제기준
     *
     *
     */
    inventoryControlType?: any;
    /**
     * @description
     * 품절표시여부
     *
     * T : 품절표시 사용
     * F : 품절표시 사용안함
     *
     *
     */
    displaySoldout?: any;
    /**
     * @description
     * 안전재고수량
     *
     *
     */
    safetyInventory?: any;
  }

  export interface UpdateMultipleProductVariantsOutput {
    variants: {
      shopNo: number;
      variantCode: string;
      customVariantCode: string;
      options: {
        name: string;
        value: string;
      }[];
      display: Cafe24Enum;
      selling: Cafe24Enum;
      additionalAmount: string;
      inventories: {
        shopNo: number;
        variantCode: string;
        quantity: number;
        useInventory: Cafe24Enum;
        importantInventory: Cafe24Enum;
        inventoryControlType: Cafe24Enum;
        displaySoldout: Cafe24Enum;
        safetyInventory: number;
      };
    }[];
  }
  export interface DeleteAProductVariantInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 상품 품목 코드
     *
     * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않음.
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variantCode: any;
  }

  export interface DeleteAProductVariantOutput {
    variant: {
      productNo: number;
      variantCode: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 품목을 목록으로 조회할 수 있습니다.
     * 상품 품목 코드, 진열상태, 판매상태 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-variants
     *
     * @example 응답 예시
     * ```json
     * {
     *     "variants": [
     *         {
     *             "shop_no": 1,
     *             "variant_code": "P000000R000C",
     *             "options": [
     *                 {
     *                     "name": "Color",
     *                     "value": "Blue"
     *                 },
     *                 {
     *                     "name": "Size",
     *                     "value": "Small"
     *                 }
     *             ],
     *             "custom_variant_code": "",
     *             "display": "T",
     *             "selling": "T",
     *             "additional_amount": "0.00",
     *             "use_inventory": "T",
     *             "important_inventory": "A",
     *             "inventory_control_type": "A",
     *             "display_soldout": "T",
     *             "quantity": 6,
     *             "safety_inventory": 7
     *         },
     *         {
     *             "shop_no": 1,
     *             "variant_code": "P000000R000D",
     *             "options": [
     *                 {
     *                     "name": "Color",
     *                     "value": "Red"
     *                 },
     *                 {
     *                     "name": "Size",
     *                     "value": "Small"
     *                 }
     *             ],
     *             "custom_variant_code": "",
     *             "display": "T",
     *             "selling": "T",
     *             "additional_amount": "0.00",
     *             "use_inventory": "T",
     *             "important_inventory": "B",
     *             "inventory_control_type": "A",
     *             "display_soldout": "T",
     *             "quantity": 15,
     *             "safety_inventory": 0
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductVariants(
      input: RetrieveAListOfProductVariantsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfProductVariantsOutput['variants'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductVariantsOutput>>;
    /**
     * @description
     * 상품의 특정 품목을 조회할 수 있습니다.
     * 옵션정보, 자체 품목 코드, 진열 및 판매상태 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-variant
     *
     * @example 응답 예시
     * ```json
     * {
     *     "variant": {
     *         "shop_no": 1,
     *         "variant_code": "P000000R000C",
     *         "options": [
     *             {
     *                 "name": "Color",
     *                 "value": "Black"
     *             },
     *             {
     *                 "name": "Size",
     *                 "value": "L"
     *             }
     *         ],
     *         "custom_variant_code": "",
     *         "display": "T",
     *         "selling": "T",
     *         "additional_amount": "0.00",
     *         "use_inventory": "T",
     *         "important_inventory": "A",
     *         "inventory_control_type": "A",
     *         "display_soldout": "T",
     *         "quantity": 3,
     *         "safety_inventory": 8
     *     }
     * }
     * ```
     */
    retrieveAProductVariant(
      input: RetrieveAProductVariantInput,
      options?: AdminRequestOptions<RetrieveAProductVariantOutput['variant']>,
    ): Promise<AxiosResponse<RetrieveAProductVariantOutput>>;
    /**
     * @description
     * 상품의 특정 품목을 수정할 수 있습니다.
     * 자체 품목 코드, 진열상태, 판매상태, 추가금액 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-variant
     *
     * @example 응답 예시
     * ```json
     * {
     *     "variant": {
     *         "shop_no": 1,
     *         "variant_code": "P000000R000A",
     *         "options": [
     *             {
     *                 "name": "Color",
     *                 "value": "Black"
     *             },
     *             {
     *                 "name": "Size",
     *                 "value": "L"
     *             }
     *         ],
     *         "custom_variant_code": "OPTION_CUSTOM_CODE",
     *         "duplicated_custom_variant_code": "F",
     *         "display": "T",
     *         "selling": "F",
     *         "additional_amount": "-1000.00",
     *         "inventories": {
     *             "shop_no": 1,
     *             "variant_code": "P000000R000A",
     *             "quantity": 15,
     *             "use_inventory": "T",
     *             "important_inventory": "A",
     *             "inventory_control_type": "B",
     *             "display_soldout": "T",
     *             "safety_inventory": 10
     *         }
     *     }
     * }
     * ```
     */
    updateAProductVariant(
      input: UpdateAProductVariantInput,
      options?: AdminRequestOptions<UpdateAProductVariantOutput['variant']>,
    ): Promise<AxiosResponse<UpdateAProductVariantOutput>>;
    /**
     * @description
     * 상품의 여러 품목을 한번에 수정할 수 있습니다.
     * 품목의 진열상태, 판매상태, 재고 사용여부 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-multiple-product-variants
     *
     * @example 응답 예시
     * ```json
     * {
     *     "variants": [
     *         {
     *             "shop_no": 1,
     *             "variant_code": "P000000P000B",
     *             "custom_variant_code": "OPTION_CUSTOM_CODE",
     *             "options": [
     *                 {
     *                     "name": "Color",
     *                     "value": "Black"
     *                 },
     *                 {
     *                     "name": "Size",
     *                     "value": "L"
     *                 }
     *             ],
     *             "display": "T",
     *             "selling": "F",
     *             "additional_amount": "-1000.00",
     *             "inventories": {
     *                 "shop_no": 1,
     *                 "variant_code": "P000000P000B",
     *                 "quantity": 15,
     *                 "use_inventory": "T",
     *                 "important_inventory": "A",
     *                 "inventory_control_type": "B",
     *                 "display_soldout": "T",
     *                 "safety_inventory": 6
     *             }
     *         },
     *         {
     *             "shop_no": 1,
     *             "variant_code": "P000000P000C",
     *             "custom_variant_code": "OPTION_CUSTOM_CODE",
     *             "options": [
     *                 {
     *                     "name": "Color",
     *                     "value": "Red"
     *                 },
     *                 {
     *                     "name": "Size",
     *                     "value": "M"
     *                 }
     *             ],
     *             "display": "T",
     *             "selling": "F",
     *             "additional_amount": "-1000.00",
     *             "inventories": {
     *                 "shop_no": 1,
     *                 "variant_code": "P000000P000B",
     *                 "quantity": 15,
     *                 "use_inventory": "T",
     *                 "important_inventory": "A",
     *                 "inventory_control_type": "B",
     *                 "display_soldout": "T",
     *                 "safety_inventory": 7
     *             }
     *         }
     *     ]
     * }
     * ```
     */
    updateMultipleProductVariants(
      input: UpdateMultipleProductVariantsInput,
      options?: AdminRequestOptions<
        UpdateMultipleProductVariantsOutput['variants'][number]
      >,
    ): Promise<AxiosResponse<UpdateMultipleProductVariantsOutput>>;
    /**
     * @description
     * 상품의 특정 품목을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-variant
     *
     * @example 응답 예시
     * ```json
     * {
     *     "variant": {
     *         "product_no": 16,
     *         "variant_code": "P000000P000A"
     *     }
     * }
     * ```
     */
    deleteAProductVariant(
      input: DeleteAProductVariantInput,
      options?: AdminRequestOptions<DeleteAProductVariantOutput['variant']>,
    ): Promise<AxiosResponse<DeleteAProductVariantOutput>>;
  }
}
