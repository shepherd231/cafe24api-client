import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 상품 추가 이미지(Products additionalimages)는 상품의 추가이미지를 나타내는 하위 리소스로, 상품(Products)리소스의 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsAdditionalimages {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 추가이미지
      * 
      * 
      */ 
    additional_image: any;
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    product_no: any;
  }

  export interface CreateAnAdditionalProductImageInput {
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
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 추가이미지
      * 
      * ● 최대요청건수 : 20개
      * ● 이미지 파일 용량 제한 : 5MB
      * ● 한 호출당 이미지 전체 용량 제한 : 30MB
      * 
      * @required
      */ 
    additional_image: any;
  }

  export interface CreateAnAdditionalProductImageOutput {
    additionalimage: { 
    shop_no: number;
    additional_image: { 
    big: string;
    medium: string;
    small: string;
    }[];
    };
  }
  export interface UpdateAnAdditionalProductImageInput {
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
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 추가이미지
      * 
      * ● 최대요청건수 : 20개
      * ● 이미지 파일 용량 제한 : 5MB
      * ● 한 호출당 이미지 전체 용량 제한 : 30MB
      * 
      * @required
      */ 
    additional_image: any;
  }

  export interface UpdateAnAdditionalProductImageOutput {
    additionalimage: { 
    shop_no: number;
    additional_image: { 
    big: string;
    medium: string;
    small: string;
    }[];
    };
  }
  export interface DeleteAnAdditionalProductImageInput {
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
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface DeleteAnAdditionalProductImageOutput {
    additionalimage: { 
    shop_no: number;
    product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 해당 상품의 추가 이미지를 등록할 수 있습니다.
     * 추가 이미지 업로드시 Base64로 인코드하여 업로드할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-additional-product-image
     *
     * @example 응답 예시
     * ```json
     * {
     *     "additionalimage": {
     *         "shop_no": 1,
     *         "additional_image": [
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/995feab7d359875e073ae82b4819a7.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/995feab7d359875e073ae82b4819a7.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/995feab7d359875e073ae82b4819a7.jpeg"
     *             },
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/95feab7d359875e073ae82b48192a.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/95feab7d359875e073ae82b48192a.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/95feab7d359875e073ae82b48192a.jpeg"
     *             },
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/995feab7d359875e073ae82b481.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/995feab7d359875e073ae82b481.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/995feab7d359875e073ae82b481.jpeg"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAnAdditionalProductImage(
      input: CreateAnAdditionalProductImageInput,
      options?: RequestOptions<CreateAnAdditionalProductImageOutput['additionalimage']>,
    ): Promise<AxiosResponse<CreateAnAdditionalProductImageOutput>>;
    /**
     * @description
     * 해당 상품의 추가 이미지를 수정할 수 있습니다.
     * 추가 이미지 업로드시 Base64로 인코드하여 업로드할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-additional-product-image
     *
     * @example 응답 예시
     * ```json
     * {
     *     "additionalimage": {
     *         "shop_no": 1,
     *         "additional_image": [
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/995feab7d359875e073ae82b4819a7.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/995feab7d359875e073ae82b4819a7.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/995feab7d359875e073ae82b4819a7.jpeg"
     *             },
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/95feab7d359875e073ae82b48192a.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/95feab7d359875e073ae82b48192a.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/95feab7d359875e073ae82b48192a.jpeg"
     *             },
     *             {
     *                 "big": "http://{domain}/web/product/extra/big/201801/995feab7d359875e073ae82b481.jpeg",
     *                 "medium": "http://{domain}/web/product/extra/medium/201801/995feab7d359875e073ae82b481.jpeg",
     *                 "small": "http://{domain}/web/product/extra/small/201801/995feab7d359875e073ae82b481.jpeg"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateAnAdditionalProductImage(
      input: UpdateAnAdditionalProductImageInput,
      options?: RequestOptions<UpdateAnAdditionalProductImageOutput['additionalimage']>,
    ): Promise<AxiosResponse<UpdateAnAdditionalProductImageOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-additional-product-image
     *
     * @example 응답 예시
     * ```json
     * {
     *     "additionalimage": {
     *         "shop_no": 1,
     *         "product_no": 20
     *     }
     * }
     * ```
     */
    deleteAnAdditionalProductImage(
      input: DeleteAnAdditionalProductImageInput,
      options?: RequestOptions<DeleteAnAdditionalProductImageOutput['additionalimage']>,
    ): Promise<AxiosResponse<DeleteAnAdditionalProductImageOutput>>;
  }
}
