import { AxiosResponse } from 'axios';
import { 
  Endpoint, 
  RequestOptions, 
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
   * 카테고리 상품(Categories products)은 카테고리의 상품의 표시 순서, 고정 여부, 진열 영역 등을 조회, 수정할 수 있는 관계형 리소스입니다.
   */
  export interface CategoriesProducts {
    /**
      * @description
      * 멀티쇼핑몰 번호
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
      * 상품명
      * 
      * 
      */ 
    product_name: any;
    /**
      * @description
      * 제조사
      * 
      * 
      */ 
    manufacturer_name: any;
    /**
      * @description
      * 원산지
      * 
      * 
      */ 
    origin_place_value: any;
    /**
      * @description
      * 상품 소비자가
      * 
      * 
      */ 
    retail_price: any;
    /**
      * @description
      * 판매가
      * 
      * 
      */ 
    price: any;
    /**
      * @description
      * 무이자할부 기간
      * 
      * 
      */ 
    interest_free_period: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 
      */ 
    eng_product_name: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 
      */ 
    custom_product_code: any;
    /**
      * @description
      * 적립금
      * 
      * 
      */ 
    point_amount: any;
    /**
      * @description
      * 브랜드 명
      * 
      * 
      */ 
    brand_name: any;
    /**
      * @description
      * 모델명
      * 
      * 
      */ 
    model_name: any;
    /**
      * @description
      * 상품 판매가
      * 
      * 
      */ 
    price_excluding_tax: any;
    /**
      * @description
      * 세액
      * 
      * 
      */ 
    tax: any;
    /**
      * @description
      * 상품코드
      * 
      * 
      */ 
    product_code: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simple_description: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 
      */ 
    summary_description: any;
    /**
      * @description
      * 공급사명
      * 
      * 
      */ 
    supplier_name: any;
    /**
      * @description
      * 제조일자
      * 
      * 
      */ 
    made_date: any;
    /**
      * @description
      * 사용후기 갯수
      * 
      * 
      */ 
    review_count: any;
    /**
      * @description
      * 유효기간
      * 
      * 
      */ 
    expiration_date: any;
    /**
      * @description
      * 쿠폰적용가
      * 
      * 
      */ 
    coupon_discounted_price: any;
    /**
      * @description
      * 트렌드 명
      * 
      * 
      */ 
    trend_name: any;
    /**
      * @description
      * 배송정보
      * 
      * 
      */ 
    shipping_scope: any;
    /**
      * @description
      * 배송비 타입
      * 
      * T : 배송비 무료
      * R : 고정배송비 사용
      * M : 구매 금액에 따른 부과
      * D : 구매 금액별 차등 배송료 사용
      * W : 상품 무게별 차등 배송료 사용
      * C : 상품 수량별 차등 배송료 사용
      * N : 상품 수량에 비례하여 배송료 부과
      * 
      * 
      */ 
    shipping_fee_type: any;
    /**
      * @description
      * 구간별 배송비
      * 
      * 
      */ 
    shipping_rates: any;
    /**
      * @description
      * 배송비
      * 
      * 
      */ 
    shipping_fee: any;
    /**
      * @description
      * 할인판매가
      * 
      * 
      */ 
    discount_price: any;
    /**
      * @description
      * 최적할인가
      * 
      * 
      */ 
    optimum_discount_price: any;
    /**
      * @description
      * 배송방법
      * 
      * 
      */ 
    shipping_method: any;
    /**
      * @description
      * 할인 기간
      * 
      * 
      */ 
    promotion_period: any;
    /**
      * @description
      * 상품색상
      * 
      * 
      */ 
    color: any;
    /**
      * @description
      * 상품 추가설명 번역정보
      * 
      * 
      */ 
    translated_additional_description: any;
    /**
      * @description
      * 재고수량
      * 
      * 
      */ 
    stock_quantity: any;
    /**
      * @description
      * 상품문의(수)
      * 
      * 
      */ 
    question_count: any;
    /**
      * @description
      * 상품자유게시판(수)
      * 
      * 
      */ 
    product_article_count: any;
  }

  export interface RetrieveAListOfProductsByCategoryInput {
    /**
      * @description
      * 모바일 설정값 조회 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    mobile?: any;
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
      * 분류 번호
      * 
      * @required
      */ 
    category_no: any;
    /**
      * @description
      * 상세 상품분류
      * 
      * 1 : 일반상품
      * 2 : 추천상품
      * 3 : 신상품
      * 
      * @required
      * 
      * 최소: [1]~최대: [3]
      */ 
    display_group: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 100
      * 
      * 최소: [1]~최대: [200]
      */ 
    limit?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
  }

  export interface RetrieveAListOfProductsByCategoryOutput {
    products: { 
    shop_no: number;
    product_no: number;
    product_name: string;
    manufacturer_name: string;
    origin_place_value: string;
    retail_price: string;
    price: Cafe24Datetime;
    interest_free_period: string;
    eng_product_name: string;
    custom_product_code: string;
    point_amount: { 
    payment_method: string;
    type: Cafe24Enum;
    value: string;
    rate: string;
    }[];
    brand_name: string;
    model_name: string;
    price_excluding_tax: Cafe24Datetime;
    tax: Cafe24Datetime;
    product_code: string;
    simple_description: string;
    summary_description: string;
    supplier_name: string;
    made_date: string;
    review_count: number;
    expiration_date: { 
    start_date: Cafe24Date;
    end_date: Cafe24Date;
    };
    coupon_discounted_price: string;
    trend_name: string;
    shipping_scope: string;
    shipping_fee_type: Cafe24Enum;
    shipping_rates: string;
    shipping_fee: Cafe24Datetime;
    discount_price: string;
    optimum_discount_price: string;
    shipping_method: string;
    promotion_period: { 
    start_date: Cafe24Datetime;
    end_date: Cafe24Datetime;
    dc_price: string;
    };
    color: Cafe24Datetime[];
    translated_additional_description: string;
    stock_quantity: number;
    question_count: number;
    product_article_count: number;
    }[];
  }
  export interface RetrieveACountOfProductsByCategoryInput {
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
      * 분류 번호
      * 
      * @required
      */ 
    category_no: any;
    /**
      * @description
      * 상세 상품분류
      * 
      * 1 : 일반상품
      * 2 : 추천상품
      * 3 : 신상품
      * 
      * @required
      * 
      * 최소: [1]~최대: [3]
      */ 
    display_group: any;
  }

  export interface RetrieveACountOfProductsByCategoryOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 카테고리에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품은 동시에 여러 카테고리에 배정될 수 있습니다.
     * 상품번호, 표시 순서, 판매 여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 20,
     *             "product_name": "iPhone X",
     *             "manufacturer_name": "APPLE",
     *             "origin_place_value": "Korea",
     *             "retail_price": "0.00",
     *             "price": "11000.00",
     *             "interest_free_period": "",
     *             "eng_product_name": "iPhone Ten",
     *             "custom_product_code": "",
     *             "point_amount": [
     *                 {
     *                     "payment_method": "card",
     *                     "type": "P",
     *                     "value": "110.00",
     *                     "rate": "10.00"
     *                 },
     *                 {
     *                     "payment_method": "cash",
     *                     "type": "W",
     *                     "value": "100.00",
     *                     "rate": ""
     *                 }
     *             ],
     *             "brand_name": "",
     *             "model_name": "A1865",
     *             "price_excluding_tax": "10000.00",
     *             "tax": "1000.00",
     *             "product_code": "P000000X",
     *             "simple_description": "This is Product Description.",
     *             "summary_description": "This is Product Summary.",
     *             "supplier_name": "SUPPLIER NAME",
     *             "made_date": "",
     *             "review_count": 0,
     *             "expiration_date": {
     *                 "start_date": "2019-07-08",
     *                 "end_date": "2019-09-14"
     *             },
     *             "coupon_discounted_price": "",
     *             "trend_name": "",
     *             "shipping_scope": "Domestic/International shipping",
     *             "shipping_fee_type": "R",
     *             "shipping_rates": "",
     *             "shipping_fee": "2500.00",
     *             "discount_price": "",
     *             "optimum_discount_price": "",
     *             "shipping_method": "Courier Service",
     *             "promotion_period": {
     *                 "start_date": "2019-07-11T00:00:00+09:00",
     *                 "end_date": "2019-07-16T23:55:00+09:00",
     *                 "dc_price": "220.00"
     *             },
     *             "color": [
     *                 "#000000",
     *                 "#C20F0A"
     *             ],
     *             "translated_additional_description": "This is a translated additional description of product.",
     *             "stock_quantity": 10,
     *             "question_count": 0,
     *             "product_article_count": 0
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 21,
     *             "product_name": "iPhone X",
     *             "manufacturer_name": "APPLE",
     *             "origin_place_value": "Korea",
     *             "retail_price": "0.00",
     *             "price": "11000.00",
     *             "interest_free_period": "",
     *             "eng_product_name": "iPhone Ten",
     *             "custom_product_code": "",
     *             "point_amount": [
     *                 {
     *                     "payment_method": "mileage",
     *                     "type": "W",
     *                     "value": "100.00",
     *                     "rate": ""
     *                 }
     *             ],
     *             "brand_name": "",
     *             "model_name": "A1865",
     *             "price_excluding_tax": "10000.00",
     *             "tax": "1000.00",
     *             "product_code": "P000000X",
     *             "simple_description": "This is Product Description.",
     *             "summary_description": "This is Product Summary.",
     *             "supplier_name": "SUPPLIER NAME",
     *             "made_date": "",
     *             "review_count": 0,
     *             "expiration_date": {
     *                 "start_date": "2019-07-08",
     *                 "end_date": "2019-09-14"
     *             },
     *             "coupon_discounted_price": "",
     *             "trend_name": "",
     *             "shipping_scope": "Domestic/International shipping",
     *             "shipping_fee_type": "W",
     *             "shipping_rates": [
     *                 {
     *                     "shipping_rates_min": "1.00",
     *                     "shipping_rates_max": "2.00",
     *                     "shipping_fee": "2500.00"
     *                 },
     *                 {
     *                     "shipping_rates_min": "2.00",
     *                     "shipping_rates_max": "3.00",
     *                     "shipping_fee": "3000.00"
     *                 }
     *             ],
     *             "shipping_fee": "",
     *             "discount_price": "",
     *             "optimum_discount_price": "",
     *             "shipping_method": "Courier Service",
     *             "promotion_period": {
     *                 "start_date": "2019-07-11T00:00:00+09:00",
     *                 "end_date": "2019-07-16T23:55:00+09:00",
     *                 "dc_price": "220"
     *             },
     *             "color": [
     *                 "#000000",
     *                 "#C20F0A"
     *             ],
     *             "translated_additional_description": "This is a translated additional description of product.",
     *             "stock_quantity": 10,
     *             "question_count": 0,
     *             "product_article_count": 0
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductsByCategory(
      input: RetrieveAListOfProductsByCategoryInput,
      options?: RequestOptions<RetrieveAListOfProductsByCategoryOutput['products'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProductsByCategoryOutput>>;
    /**
     * @description
     * 특정 카테고리에 배정된 상품의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-products-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfProductsByCategory(
      input: RetrieveACountOfProductsByCategoryInput,
      options?: RequestOptions<RetrieveACountOfProductsByCategoryOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductsByCategoryOutput>>;
  }
}
