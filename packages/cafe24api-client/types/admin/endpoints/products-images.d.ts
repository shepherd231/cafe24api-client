import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 상품 이미지(Products Images)는 상품의 판매를 위해서 업로드한 상품의 사진이나 그림을 의미합니다.
   * 상품 이미지 API를 사용해 상품 상세설명에서 사용할 이미지를 업로드하거나, 상품의 이미지를 업로드할 수 있습니다.
   * 상품의 이미지는 Base64 코드 로 인코딩하여 업로드할 수 있습니다
   */
  export interface ProductsImages {
    /**
      * @description
      * 상세이미지
      * 
      * 
      */ 
    path: any;
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
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 상세이미지
      * 
      * 상품 상세 화면에 표시되는 상품 이미지.
      * 
      * 
      */ 
    detail_image: any;
    /**
      * @description
      * 목록이미지
      * 
      * 상품 분류 화면, 메인 화면, 상품 검색 화면에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    list_image: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
      * 
      * 
      */ 
    tiny_image: any;
    /**
      * @description
      * 축소이미지
      * 
      * 최근 본 상품 영역에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    small_image: any;
  }

  export interface UploadImagesInput {
    /**
      * @description
      * 상세이미지
      * 
      * ● 이미지 파일 용량 제한 : 10MB
      * ● 한 호출당 이미지 전체 용량 제한 : 30MB
      * 
      * @required
      */ 
    image: any;
  }

  export interface UploadImagesOutput {
    images: { 
    path: string;
    }[];
  }
  export interface UploadProductImagesInput {
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
      * 상세이미지
      * 
      * 상품 상세 화면에 표시되는 상품 이미지.
      * 
      * 
      */ 
    detail_image?: any;
    /**
      * @description
      * 목록이미지
      * 
      * 상품 분류 화면, 메인 화면, 상품 검색 화면에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    list_image?: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
      * 
      * 
      */ 
    tiny_image?: any;
    /**
      * @description
      * 축소이미지
      * 
      * 최근 본 상품 영역에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    small_image?: any;
    /**
      * @description
      * 이미지 업로드 타입
      * 
      * 이미지 타입이 대표 이미지 인지, 개별 이미지 인지 업로드 타입을 지정할 수 있음. 대표 이미지(A)로 업로드 하는 경우 상세이미지(detail_image)에 이미지를 업로드하면 다른 나머지 이미지에도 모두 반영됨.
      * 
      * A : 대표이미지등록
      * B : 개별이미지등록
      * 
      * @required
      */ 
    image_upload_type: any;
  }

  export interface UploadProductImagesOutput {
    image: { 
    shop_no: number;
    product_no: number;
    detail_image: string;
    list_image: string;
    tiny_image: string;
    small_image: string;
    };
  }
  export interface DeleteProductImagesInput {
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

  export interface DeleteProductImagesOutput {
    image: { 
    shop_no: number;
    product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 이미지를 업로드할 수 있습니다.
     * 상품에 이미지를 등록하기 위해서는 이미지를 먼저 업로드해야 합니다.
     * 상품의 이미지는 Base64 코드 로 인코딩하여 업로드할 수 있습니다
     *
     * @see https://developers.cafe24.com/docs/api/admin/#upload-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "images": [
     *         {
     *             "path": "https://{domain}/web/upload/NNEditor/20180130/12ecf27747401c8502ddd6b2e79e1e64.png"
     *         },
     *         {
     *             "path": "https://{domain}/web/upload/NNEditor/20180130/4672d70e72991f3e54627a8be4aea995.png"
     *         }
     *     ]
     * }
     * ```
     */
    uploadImages(
      input: UploadImagesInput,
      options?: RequestOptions<UploadImagesOutput['images'][number]>,
    ): Promise<AxiosResponse<UploadImagesOutput>>;
    /**
     * @description
     * 이미지를 상품에 등록할 수 있습니다.
     * 상품의 상세, 목록, 작은목록, 축소 이미지를 등록할 수 있습니다.
     * 이미지를 등록하기 전에 이미지가 업로드 되어있는지 먼저 확인해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#upload-product-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "image": {
     *         "shop_no": 1,
     *         "product_no": 20,
     *         "detail_image": "https://{domain}/web/product/big/201801/995feab7d359875e073ae82b48192a7b.jpeg",
     *         "list_image": "https://{domain}/web/product/medium/201801/995feab7d359875e073ae82b48192a7b.jpeg",
     *         "tiny_image": "https://{domain}/web/product/tiny/201801/995feab7d359875e073ae82b48192a7b.jpeg",
     *         "small_image": "https://{domain}/web/product/small/201801/995feab7d359875e073ae82b48192a7b.jpeg"
     *     }
     * }
     * ```
     */
    uploadProductImages(
      input: UploadProductImagesInput,
      options?: RequestOptions<UploadProductImagesOutput['image']>,
    ): Promise<AxiosResponse<UploadProductImagesOutput>>;
    /**
     * @description
     * 상품에 등록된 이미지를 삭제할 수 있습니다.
     * 상세이미지나 목록이미지 등의 구분 없이 상품에 등록된 모든 이미지가 삭제됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-product-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "image": {
     *         "shop_no": 1,
     *         "product_no": 20
     *     }
     * }
     * ```
     */
    deleteProductImages(
      input: DeleteProductImagesInput,
      options?: RequestOptions<DeleteProductImagesOutput['image']>,
    ): Promise<AxiosResponse<DeleteProductImagesOutput>>;
  }
}
