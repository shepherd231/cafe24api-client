import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 메인분류 상품(Mains products)은 상품 메인진열의 순서에 관한 메인분류의 관계형 리소스입니다
   */
  export interface MainsProducts {
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
     * 상품번호
     *
     *
     */
    productNo: any;
    /**
     * @description
     * 상품명
     *
     *
     */
    productName: any;
    /**
     * @description
     * 제조사
     *
     *
     */
    manufacturerName: any;
    /**
     * @description
     * 원산지
     *
     *
     */
    originPlaceValue: any;
    /**
     * @description
     * 상품 소비자가
     *
     *
     */
    retailPrice: any;
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
    interestFreePeriod: any;
    /**
     * @description
     * 영문 상품명
     *
     *
     */
    engProductName: any;
    /**
     * @description
     * 자체상품 코드
     *
     *
     */
    customProductCode: any;
    /**
     * @description
     * 적립금
     *
     *
     */
    pointAmount: any;
    /**
     * @description
     * 브랜드 명
     *
     *
     */
    brandName: any;
    /**
     * @description
     * 모델명
     *
     *
     */
    modelName: any;
    /**
     * @description
     * 상품 판매가
     *
     *
     */
    priceExcludingTax: any;
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
    productCode: any;
    /**
     * @description
     * 상품 간략 설명
     *
     *
     */
    simpleDescription: any;
    /**
     * @description
     * 상품요약설명
     *
     *
     */
    summaryDescription: any;
    /**
     * @description
     * 공급사명
     *
     *
     */
    supplierName: any;
    /**
     * @description
     * 제조일자
     *
     *
     */
    madeDate: any;
    /**
     * @description
     * 사용후기 갯수
     *
     *
     */
    reviewCount: any;
    /**
     * @description
     * 유효기간
     *
     *
     */
    expirationDate: any;
    /**
     * @description
     * 쿠폰적용가
     *
     *
     */
    couponDiscountedPrice: any;
    /**
     * @description
     * 트렌드 명
     *
     *
     */
    trendName: any;
    /**
     * @description
     * 배송정보
     *
     *
     */
    shippingScope: any;
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
    shippingFeeType: any;
    /**
     * @description
     * 구간별 배송비
     *
     *
     */
    shippingRates: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: any;
    /**
     * @description
     * 할인판매가
     *
     *
     */
    discountPrice: any;
    /**
     * @description
     * 최적할인가
     *
     *
     */
    optimumDiscountPrice: any;
    /**
     * @description
     * 배송방법
     *
     *
     */
    shippingMethod: any;
    /**
     * @description
     * 할인 기간
     *
     *
     */
    promotionPeriod: any;
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
    translatedAdditionalDescription: any;
    /**
     * @description
     * 재고수량
     *
     *
     */
    stockQuantity: any;
    /**
     * @description
     * 상품문의(수)
     *
     *
     */
    questionCount: any;
    /**
     * @description
     * 상품자유게시판(수)
     *
     *
     */
    productArticleCount: any;
  }

  export interface RetrieveAListOfProductsInMainCategoryInput {
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
    shopNo?: any;
    /**
     * @description
     * 메인분류 번호
     *
     * @required
     */
    displayGroup: any;
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

  export interface RetrieveAListOfProductsInMainCategoryOutput {
    products: {
      shopNo: number;
      productNo: number;
      productName: string;
      manufacturerName: string;
      originPlaceValue: string;
      retailPrice: string;
      price: Cafe24Datetime;
      interestFreePeriod: string;
      engProductName: string;
      customProductCode: string;
      pointAmount: {
        paymentMethod: string;
        type: Cafe24Enum;
        value: string;
        rate: string;
      }[];
      brandName: string;
      modelName: string;
      priceExcludingTax: Cafe24Datetime;
      tax: Cafe24Datetime;
      productCode: string;
      simpleDescription: string;
      summaryDescription: string;
      supplierName: string;
      madeDate: string;
      reviewCount: number;
      expirationDate: {
        startDate: Cafe24Date;
        endDate: Cafe24Date;
      };
      couponDiscountedPrice: string;
      trendName: string;
      shippingScope: string;
      shippingFeeType: Cafe24Enum;
      shippingRates: string;
      shippingFee: Cafe24Datetime;
      discountPrice: string;
      optimumDiscountPrice: string;
      shippingMethod: string;
      promotionPeriod: {
        startDate: Cafe24Datetime;
        endDate: Cafe24Datetime;
        dcPrice: Cafe24Datetime;
      };
      color: Cafe24Datetime[];
      translatedAdditionalDescription: string;
      stockQuantity: number;
      questionCount: number;
      productArticleCount: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 메인분류에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품번호, 상품명, 고정 여부 등을 조회할 수 있습니다.
     * 상품은 동시에 여러 메인분류에 배정될 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products-in-main-category
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
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductsInMainCategory(
      input: RetrieveAListOfProductsInMainCategoryInput,
      options?: RequestOptions<
        RetrieveAListOfProductsInMainCategoryOutput['products'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductsInMainCategoryOutput>>;
  }
}
