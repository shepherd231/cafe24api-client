import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 상품 SEO(Products seo)는 특정 상품의 SEO 에 대한 설정과 설정값의 조회가 가능한 기능입니다.
   * SEO는 검색엔진 최적화(Search Engine Optimization)의 약자로서 본 기능을 활용하여 검색엔진에 상품이나 쇼핑몰이 더 잘 검색될 수 있도록 할 수 있습니다.
   * 상품 SEO는 상품의 하위 리소스로서 특정 상품의 검색엔진 최적화 설정을 할 수 있습니다.
   */
  export interface ProductsSeo {
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
      * 브라우저 타이틀
      * 
      * 해당 상품의 상품 상세 페이지의 Title 태그에 표시되는 정보. Title 태그는 브라우저에 표시되는 정보로 검색엔진에서 검색시 가장 기본적인 정보이다.
      * 
      * 
      */ 
    metaTitle: any;
    /**
      * @description
      * 메타태그1 : Author
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. author 메타 태그에는 해당 상품을 제조한 사람 또는 등록한 사람을 기입한다.
      * 
      * 
      */ 
    metaAuthor: any;
    /**
      * @description
      * 메타태그2 : Description
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. description 태그에 검색 결과 페이지에서 검색 결과 아래에 표시될 간략한 정보를 입력할 수 있다.
      * 
      * 
      */ 
    metaDescription: any;
    /**
      * @description
      * 메타태그3 : Keywords
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. keyword 태그에 해당 상품이 검색되었으면 하는 검색 키워드를 입력할 수 있다.
      * 
      * 
      */ 
    metaKeywords: any;
    /**
      * @description
      * 상품 이미지 Alt 텍스트
      * 
      * 상품 이미지에 표시되는 Alt 텍스트 정보. Alt 텍스트를 입력해놓으면 검색엔진에서 이미지 검색시 검색될 가능성이 높아지며, 브라우저에서 이미지 대신 해당 텍스트를 출력할 수 있어 웹 접근성에도 유리하다.
      * 
      * 
      */ 
    metaAlt: any;
    /**
      * @description
      * 검색 엔진 노출 설정
      * 
      * 해당 상품을 검색엔진에 노출할 것인지 설정. &#39;노출안함&#39;으로 설정할 경우 해당 상품이 검색엔진에 노출되지 않는다.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    searchEngineExposure: any;
  }

  export interface RetrieveAProductSSeoSettingsInput {
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
  }

  export interface RetrieveAProductSSeoSettingsOutput {
    seo: { 
    shopNo: number;
    metaTitle: string;
    metaAuthor: string;
    metaDescription: string;
    metaKeywords: string;
    metaAlt: string;
    searchEngineExposure: Cafe24Enum;
    };
  }
  export interface UpdateProductSeoSettingsInput {
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
      * 브라우저 타이틀
      * 
      * 해당 상품의 상품 상세 페이지의 Title 태그에 표시되는 정보. Title 태그는 브라우저에 표시되는 정보로 검색엔진에서 검색시 가장 기본적인 정보이다.
      * 
      * 
      */ 
    metaTitle?: any;
    /**
      * @description
      * 메타태그1 : Author
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. author 메타 태그에는 해당 상품을 제조한 사람 또는 등록한 사람을 기입한다.
      * 
      * 
      */ 
    metaAuthor?: any;
    /**
      * @description
      * 메타태그2 : Description
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. description 태그에 검색 결과 페이지에서 검색 결과 아래에 표시될 간략한 정보를 입력할 수 있다.
      * 
      * 
      */ 
    metaDescription?: any;
    /**
      * @description
      * 메타태그3 : Keywords
      * 
      * 해당 상품의 상품 상세 페이지의 태그에 표시되는 정보. keyword 태그에 해당 상품이 검색되었으면 하는 검색 키워드를 입력할 수 있다.
      * 
      * 
      */ 
    metaKeywords?: any;
    /**
      * @description
      * 상품 이미지 Alt 텍스트
      * 
      * 상품 이미지에 표시되는 Alt 텍스트 정보. Alt 텍스트를 입력해놓으면 검색엔진에서 이미지 검색시 검색될 가능성이 높아지며, 브라우저에서 이미지 대신 해당 텍스트를 출력할 수 있어 웹 접근성에도 유리하다.
      * 
      * 
      */ 
    metaAlt?: any;
    /**
      * @description
      * 검색 엔진 노출 설정
      * 
      * 해당 상품을 검색엔진에 노출할 것인지 설정. &#39;노출안함&#39;으로 설정할 경우 해당 상품이 검색엔진에 노출되지 않는다.
      * 
      * 
      */ 
    searchEngineExposure?: any;
  }

  export interface UpdateProductSeoSettingsOutput {
    seo: { 
    shopNo: number;
    metaTitle: string;
    metaAuthor: string;
    metaDescription: string;
    metaKeywords: string;
    metaAlt: string;
    searchEngineExposure: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품의 SEO 설정을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-s-seo-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "meta_title": "product title",
     *         "meta_author": "This is Author",
     *         "meta_description": "This is Description.",
     *         "meta_keywords": "This is Keyword.",
     *         "meta_alt": "image1, image2",
     *         "search_engine_exposure": "T"
     *     }
     * }
     * ```
     */
    retrieveAProductSSeoSettings(
      input: RetrieveAProductSSeoSettingsInput,
      options?: RequestOptions<RetrieveAProductSSeoSettingsOutput['seo']>,
    ): Promise<AxiosResponse<RetrieveAProductSSeoSettingsOutput>>;
    /**
     * @description
     * 특정 상품의 SEO 설정을 수정할 수 있습니다.
     * 브라우저 타이틀, 메타태그, 검색엔진 노출 설정 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-seo-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "meta_title": "Updated title",
     *         "meta_author": "Updated Author",
     *         "meta_description": "Updated Description",
     *         "meta_keywords": "Updated Keywords",
     *         "meta_alt": "Upadted Alt Text",
     *         "search_engine_exposure": "T"
     *     }
     * }
     * ```
     */
    updateProductSeoSettings(
      input: UpdateProductSeoSettingsInput,
      options?: RequestOptions<UpdateProductSeoSettingsOutput['seo']>,
    ): Promise<AxiosResponse<UpdateProductSeoSettingsOutput>>;
  }
}
