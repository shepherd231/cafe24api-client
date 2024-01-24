import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 상품 번역 정보(Translations products)는, 상품의 번역 정보를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface TranslationsProducts {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    productNo: any;
    /**
      * @description
      * 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    productName: any;
    /**
      * @description
      * 번역 정보
      * 
      * 
      */ 
    translations: any;
  }

  export interface RetrieveAListOfProductTranslationsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shopNo?: any;
    /**
      * @description
      * 상품번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productNo?: any;
    /**
      * @description
      * 상품명
      * 
      * 상품의 상품명에 해당되는 번역 정보를 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productName?: any;
    /**
      * @description
      * 언어 코드
      * 
      * 번역 정보의 언어 코드에 해당되는 번역 정보를 검색
      * 언어별로 번역된 정보에서 검색하고자 하는 언어를 선택하면, 해당 언어에 대한 번역 내용을 확인할 수 있습니다.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    languageCode?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfProductTranslationsOutput {
    products: { 
    shopNo: number;
    productNo: number;
    productName: string;
    translations: { 
    translated: Cafe24Enum;
    languageCode: string;
    productName: string;
    productTag: string;
    description: string;
    mobileDescription: string;
    simpleDescription: string;
    summaryDescription: string;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    productMaterial: string;
    seo: { 
    metaTitle: string;
    metaAuthor: string;
    metaDescription: string;
    metaKeywords: string;
    metaAlt: string;
    };
    options: { 
    name: string;
    value: string[];
    }[];
    updatedDate: Cafe24Datetime;
    }[];
    }[];
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface UpdateProductTranslationInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
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
      * 번역 정보
      * 
      * 
      */ 
    translations?: { 
    /**
      * @description
      * 언어 코드
      * 
      * 
      */ 
    languageCode: any;
    /**
      * @description
      * 상품명
      * 
      * 
      */ 
    productName?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 
      */ 
    productTag?: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 
      */ 
    paymentInfo?: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 
      */ 
    shippingInfo?: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 
      */ 
    exchangeInfo?: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 
      */ 
    serviceInfo?: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 
      */ 
    summaryDescription?: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simpleDescription?: any;
    /**
      * @description
      * 상품상세설명
      * 
      * 
      */ 
    description?: any;
    /**
      * @description
      * 모바일 상품 상세설명
      * 
      * 
      */ 
    mobileDescription?: any;
    /**
      * @description
      * 상품소재
      * 
      * 
      */ 
    productMaterial?: any;
    seo?: any[];
    options?: any[];
    };
  }

  export interface UpdateProductTranslationOutput {
    product: { 
    shopNo: number;
    productNo: number;
    productName: string;
    translations: { 
    translated: Cafe24Enum;
    languageCode: string;
    productName: string;
    productTag: string;
    description: string;
    mobileDescription: string;
    simpleDescription: string;
    summaryDescription: string;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    productMaterial: string;
    seo: { 
    metaTitle: string;
    metaAuthor: string;
    metaDescription: string;
    metaKeywords: string;
    metaAlt: string;
    };
    options: { 
    name: string;
    value: string[];
    }[];
    updatedDate: Cafe24Datetime;
    }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 번역 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-translations
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 10,
     *             "product_name": "iPhone X",
     *             "translations": [
     *                 {
     *                     "translated": "T",
     *                     "language_code": "en_US",
     *                     "product_name": "iPhone X",
     *                     "product_tag": "translated,edu,test,sample",
     *                     "description": "Sample Translated Description.",
     *                     "mobile_description": "Sample Translated Mobile Description.",
     *                     "simple_description": "This is translated simple description.",
     *                     "summary_description": "This is translated Product Summary.",
     *                     "payment_info": "Sample translated payment info. You have to Pay.",
     *                     "shipping_info": "Sample translated shipping info. You have to ship.",
     *                     "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                     "service_info": "Sample translated service info. You have to service.",
     *                     "product_material": "Translated material",
     *                     "seo": {
     *                         "meta_title": "product title",
     *                         "meta_author": "This is Author",
     *                         "meta_description": "This is Description.",
     *                         "meta_keywords": "This is Keyword.",
     *                         "meta_alt": "image1, image2"
     *                     },
     *                     "options": [
     *                         {
     *                             "name": "color",
     *                             "value": [
     *                                 "red",
     *                                 "green",
     *                                 "blue"
     *                             ]
     *                         },
     *                         {
     *                             "name": "size",
     *                             "value": [
     *                                 "large",
     *                                 "small"
     *                             ]
     *                         }
     *                     ],
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 },
     *                 {
     *                     "translated": "T",
     *                     "language_code": "es_ES",
     *                     "product_name": "iPhone X",
     *                     "product_tag": "translated,edu,test,sample",
     *                     "description": "Sample Translated Description.",
     *                     "mobile_description": "Sample Translated Mobile Description.",
     *                     "simple_description": "This is translated simple description.",
     *                     "summary_description": "This is translated Product Summary.",
     *                     "payment_info": "Sample translated payment info. You have to Pay.",
     *                     "shipping_info": "Sample translated shipping info. You have to ship.",
     *                     "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                     "service_info": "Sample translated service info. You have to service.",
     *                     "product_material": "Translated material",
     *                     "seo": {
     *                         "meta_title": "product title",
     *                         "meta_author": "This is Author",
     *                         "meta_description": "This is Description.",
     *                         "meta_keywords": "This is Keyword.",
     *                         "meta_alt": "image1, image2"
     *                     },
     *                     "options": [
     *                         {
     *                             "name": "color",
     *                             "value": [
     *                                 "red",
     *                                 "green",
     *                                 "blue"
     *                             ]
     *                         },
     *                         {
     *                             "name": "size",
     *                             "value": [
     *                                 "large",
     *                                 "small"
     *                             ]
     *                         }
     *                     ],
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 11,
     *             "product_name": "iPhone X",
     *             "translations": [
     *                 {
     *                     "translated": "T",
     *                     "language_code": "en_US",
     *                     "product_name": "iPhone X",
     *                     "product_tag": "translated,edu,test,sample",
     *                     "description": "Sample Translated Description.",
     *                     "mobile_description": "Sample Translated Mobile Description.",
     *                     "simple_description": "This is translated simple description.",
     *                     "summary_description": "This is translated Product Summary.",
     *                     "payment_info": "Sample translated payment info. You have to Pay.",
     *                     "shipping_info": "Sample translated shipping info. You have to ship.",
     *                     "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                     "service_info": "Sample translated service info. You have to service.",
     *                     "product_material": "Translated material",
     *                     "seo": {
     *                         "meta_title": "product title",
     *                         "meta_author": "This is Author",
     *                         "meta_description": "This is Description.",
     *                         "meta_keywords": "This is Keyword.",
     *                         "meta_alt": "image1, image2"
     *                     },
     *                     "options": [
     *                         {
     *                             "name": "Color",
     *                             "value": [
     *                                 "Red",
     *                                 "Blue",
     *                                 "Yellow"
     *                             ]
     *                         },
     *                         {
     *                             "name": "Size",
     *                             "value": [
     *                                 "Small",
     *                                 "Large"
     *                             ]
     *                         }
     *                     ],
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 },
     *                 {
     *                     "translated": "T",
     *                     "language_code": "es_ES",
     *                     "product_name": "iPhone X",
     *                     "product_tag": "translated,edu,test,sample",
     *                     "description": "Sample Translated Description.",
     *                     "mobile_description": "Sample Translated Mobile Description.",
     *                     "simple_description": "This is translated simple description.",
     *                     "summary_description": "This is translated Product Summary.",
     *                     "payment_info": "Sample translated payment info. You have to Pay.",
     *                     "shipping_info": "Sample translated shipping info. You have to ship.",
     *                     "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                     "service_info": "Sample translated service info. You have to service.",
     *                     "product_material": "Translated material",
     *                     "seo": {
     *                         "meta_title": "product title",
     *                         "meta_author": "This is Author",
     *                         "meta_description": "This is Description.",
     *                         "meta_keywords": "This is Keyword.",
     *                         "meta_alt": "image1, image2"
     *                     },
     *                     "options": [
     *                         {
     *                             "name": "Color",
     *                             "value": [
     *                                 "Red",
     *                                 "Blue",
     *                                 "Yellow"
     *                             ]
     *                         },
     *                         {
     *                             "name": "Size",
     *                             "value": [
     *                                 "Small",
     *                                 "Large"
     *                             ]
     *                         }
     *                     ],
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 }
     *             ]
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/translations/products?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductTranslations(
      input: RetrieveAListOfProductTranslationsInput,
      options?: RequestOptions<RetrieveAListOfProductTranslationsOutput['products'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProductTranslationsOutput>>;
    /**
     * @description
     * 상품의 번역 정보를 수정할 수 있습니다.
     * 번역정보 수정시, 언어 코드는 필수 입력 항목입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-translation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 10,
     *         "product_name": "iPhone X",
     *         "translations": [
     *             {
     *                 "translated": "T",
     *                 "language_code": "en_US",
     *                 "product_name": "iPhone X",
     *                 "product_tag": "translated,edu,test,sample",
     *                 "description": "Sample Translated Description.",
     *                 "mobile_description": "Sample Translated Mobile Description.",
     *                 "simple_description": "This is translated simple description.",
     *                 "summary_description": "This is translated Product Summary.",
     *                 "payment_info": "Sample translated payment info. You have to Pay.",
     *                 "shipping_info": "Sample translated shipping info. You have to ship.",
     *                 "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                 "service_info": "Sample translated service info. You have to service.",
     *                 "product_material": "Translated material",
     *                 "seo": {
     *                     "meta_title": "product title",
     *                     "meta_author": "This is Author",
     *                     "meta_description": "This is Description.",
     *                     "meta_keywords": "This is Keyword.",
     *                     "meta_alt": "image1, image2"
     *                 },
     *                 "options": [
     *                     {
     *                         "name": "Color",
     *                         "value": [
     *                             "Red",
     *                             "Blue",
     *                             "Yellow"
     *                         ]
     *                     },
     *                     {
     *                         "name": "Size",
     *                         "value": [
     *                             "Small",
     *                             "Large"
     *                         ]
     *                     }
     *                 ],
     *                 "updated_date": "2018-01-19T11:19:27+09:00"
     *             },
     *             {
     *                 "translated": "T",
     *                 "language_code": "es_ES",
     *                 "product_name": "iPhone X",
     *                 "product_tag": "translated,edu,test,sample",
     *                 "description": "Sample Translated Description.",
     *                 "mobile_description": "Sample Translated Mobile Description.",
     *                 "simple_description": "This is translated simple description.",
     *                 "summary_description": "This is translated Product Summary.",
     *                 "payment_info": "Sample translated payment info. You have to Pay.",
     *                 "shipping_info": "Sample translated shipping info. You have to ship.",
     *                 "exchange_info": "Sample translated exchange info. You have to exchange.",
     *                 "service_info": "Sample translated service info. You have to service.",
     *                 "product_material": "Translated material",
     *                 "seo": {
     *                     "meta_title": "product title",
     *                     "meta_author": "This is Author",
     *                     "meta_description": "This is Description.",
     *                     "meta_keywords": "This is Keyword.",
     *                     "meta_alt": "image1, image2"
     *                 },
     *                 "options": [
     *                     {
     *                         "name": "Color",
     *                         "value": [
     *                             "Red",
     *                             "Blue",
     *                             "Yellow"
     *                         ]
     *                     },
     *                     {
     *                         "name": "Size",
     *                         "value": [
     *                             "Small",
     *                             "Large"
     *                         ]
     *                     }
     *                 ],
     *                 "updated_date": "2018-01-19T11:19:27+09:00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateProductTranslation(
      input: UpdateProductTranslationInput,
      options?: RequestOptions<UpdateProductTranslationOutput['product']>,
    ): Promise<AxiosResponse<UpdateProductTranslationOutput>>;
  }
}
