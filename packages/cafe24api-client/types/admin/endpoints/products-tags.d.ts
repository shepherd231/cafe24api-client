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
   * 상품 태그(Products tags)는 상품이 특정 단어로 검색 되어야할 경우 추가할 수 있는 검색 키워드와 관련된 기능입니다.
   * 상품 태그는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   * 상품명이나 상품 상세 설명 외에 다른 단어로도 상품이 검색되길 원할 경우 검색어를 상품에 추가할 수 있습니다.
   */
  export interface ProductsTags {
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
     * 상품 태그
     *
     * @required
     */
    tags: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     *
     */
    product_no: any;
    /**
     * @description
     * 상품 태그
     *
     * 검색 또는 분류를 위하여 상품에 입력하는 검색어 정보(해시태그)
     *
     *
     */
    tag: any;
  }

  export interface RetrieveACountOfAProductSProductTagsInput {
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
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    product_no: any;
  }

  export interface RetrieveACountOfAProductSProductTagsOutput {
    count: number;
  }
  export interface RetrieveAListOfAProductSProductTagsInput {
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
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    product_no: any;
  }

  export interface RetrieveAListOfAProductSProductTagsOutput {
    tags: {
      shop_no: number;
      tags: string[];
    };
  }
  export interface CreateProductTagsInput {
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
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 상품 태그
     *
     * @required
     *
     * 배열 최대사이즈: [50]
     */
    tags: any;
  }

  export interface CreateProductTagsOutput {
    tag: {
      shop_no: number;
      product_no: number;
      tags: string[];
    };
  }
  export interface DeleteAProductTagInput {
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
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 상품 태그
     *
     * 검색 또는 분류를 위하여 상품에 입력하는 검색어 정보(해시태그)
     *
     *
     */
    tag?: any;
  }

  export interface DeleteAProductTagOutput {
    tag: {
      shop_no: number;
      product_no: number;
      tag: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품에 등록된 상품 태그의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-a-product-s-product-tags
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfAProductSProductTags(
      input: RetrieveACountOfAProductSProductTagsInput,
      options?: AdminRequestOptions<
        RetrieveACountOfAProductSProductTagsOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfAProductSProductTagsOutput>>;
    /**
     * @description
     * 상품에 등록된 태그를 목록으로 조회할 수 있습니다.
     * 상품 태그, 상품번호 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-a-product-s-product-tags
     *
     * @example 응답 예시
     * ```json
     * {
     *     "tags": {
     *         "shop_no": 1,
     *         "tags": [
     *             "Tag1",
     *             "Tag2"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAListOfAProductSProductTags(
      input: RetrieveAListOfAProductSProductTagsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfAProductSProductTagsOutput['tags']
      >,
    ): Promise<AxiosResponse<RetrieveAListOfAProductSProductTagsOutput>>;
    /**
     * @description
     * 특정 상품에 검색 또는 분류를 위한 상품 태그를 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-product-tags
     *
     * @example 응답 예시
     * ```json
     * {
     *     "tag": {
     *         "shop_no": 1,
     *         "product_no": 7,
     *         "tags": [
     *             "Tag1",
     *             "Tag2"
     *         ]
     *     }
     * }
     * ```
     */
    createProductTags(
      input: CreateProductTagsInput,
      options?: AdminRequestOptions<CreateProductTagsOutput['tag']>,
    ): Promise<AxiosResponse<CreateProductTagsOutput>>;
    /**
     * @description
     * 특정 상품에 등록된 특정 태그를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-tag
     *
     * @example 응답 예시
     * ```json
     * {
     *     "tag": {
     *         "shop_no": 1,
     *         "product_no": 7,
     *         "tag": "Tag1"
     *     }
     * }
     * ```
     */
    deleteAProductTag(
      input: DeleteAProductTagInput,
      options?: AdminRequestOptions<DeleteAProductTagOutput['tag']>,
    ): Promise<AxiosResponse<DeleteAProductTagOutput>>;
  }
}
