import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 상품상세정보(Productsdetail)는 상품 상세페이지에 노출되는 항목과 그 값을 조회할 수 있는 기능입니다.
   */
  export interface Productsdetail {
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
     * 축소이미지
     *
     * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
     *
     *
     */
    small_image: any;
    /**
     * @description
     * 추가이미지
     *
     * 상품 상세 화면 하단에 표시되는 상품의 추가 이미지. 축소 이미지와 비슷한 위치에 표시되며 PC 쇼핑몰에서는 마우스 오버시, 모바일 쇼핑몰에서는 이미지 스와이프(Swipe)시 추가 이미지를 확인할 수 있다.
     *
     * 배열 최대사이즈: [20]
     */
    additional_images: any;
    /**
     * @description
     * 상품명
     *
     * 상품의 이름. 상품명은 상품을 구분하는 가장 기초적인 정보이며 검색 정보가 된다. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    product_name: any;
    /**
     * @description
     * 제조사
     *
     * 제조사의 이름. 제조사명은 쇼핑몰 관리자 화면에서 제조사를 구분할 수 있는 기본적인 정보이다.
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
     * 시중에 판매되는 소비자 가격. 쇼핑몰의 가격을 강조하기 위한 비교 목적으로 사용함.
     *
     *
     */
    retail_price: any;
    /**
     * @description
     * 판매가
     *
     * 상품의 판매 가격. 쿠폰 및 혜택을 적용하기 전의 가격.
     * 상품 등록시엔 모든 멀티 쇼핑몰에 동일한 가격으로 등록하며, 멀티쇼핑몰별로 다른 가격을 입력하고자 할 경우 상품 수정을 통해 가격을 다르게 입력할 수 있다.
     * ※ 판매가 = [ 공급가 + (공급가 * 마진율) + 추가금액 ]
     *
     *
     */
    price: any;
    /**
     * @description
     * 무이자할부 기간
     *
     * 무이자할부가 설정되었을 때 적용 가능한 기간
     *
     *
     */
    interest_free_period: any;
    /**
     * @description
     * 영문 상품명
     *
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함.
     *
     *
     */
    eng_product_name: any;
    /**
     * @description
     * 자체상품 코드
     *
     * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
     *
     *
     */
    custom_product_code: any;
    /**
     * @description
     * 적립금
     *
     * 상품 주문시 받을 수 있는 적립금 금액. 설정에 따라 적립금을 결제수단에 상관 없이 공통적으로 받도록 설정하거나 결제수단별로 받도록 설정할 수 있다.
     *
     *
     */
    points_amount: any;
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
     * 상품의 모델명.
     *
     *
     */
    model_name: any;
    /**
     * @description
     * 상품 판매가
     *
     * 세금을 제외한 상품의 판매가
     * tax_calculation이 A(자동계산)일 경우 null로 반환됨.
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
     * 시스템이 상품에 부여한 코드. 해당 쇼핑몰 내에서 상품코드는 중복되지 않음.
     *
     *
     */
    product_code: any;
    /**
     * @description
     * 상품 간략 설명
     *
     * 상품에 대한 간략한 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
     *
     *
     */
    simple_description: any;
    /**
     * @description
     * 상품요약설명
     *
     * 상품에 대한 요약 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
     *
     *
     */
    summary_description: any;
    /**
     * @description
     * 공급사명
     *
     * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
     *
     *
     */
    supplier_name: any;
    /**
     * @description
     * 제조일자
     *
     * 상품을 제조한 제조일자.
     *
     *
     */
    made_date: any;
    /**
     * @description
     * 사용후기 갯수
     *
     * 상품을 선택하고 사용후기에 글이 등록된 수
     *
     *
     */
    review_count: any;
    /**
     * @description
     * 유효기간
     *
     * 상품을 정상적으로 사용할 수 있는 기간. 상품권이나 티켓 같은 무형 상품, 식품이나 화장품 같은 유형 상품의 유효기간을 표시.
     *
     *
     */
    expiration_date: any;
    /**
     * @description
     * 쿠폰적용가
     *
     * 상품에 쿠폰이 설정되었을 때 해당 쿠폰을 적용한 금액
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
     * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시. [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별배송료 설정이 사용안함인 경우 설정 불가.
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     *
     */
    shipping_scope: any;
    /**
     * @description
     * 배송비 타입
     *
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
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
     * 개별배송비를 사용할 경우 상품의 개별 배송비.
     *
     * shipping_rates_min : 배송비 구간 시작 기준
     * shipping_rates_max : 배송비 구간 종료 기준
     * shipping_fee : 배송비
     *
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
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
     * 상품에 할인이 설정되었을 때 할인을 적용한 판매가
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
     * 배송 수단 및 방법
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     *
     */
    shipping_method: any;
    /**
     * @description
     * 할인 기간
     *
     * 상품에 할인이 설정되었을 때 해당 할인이 적용되는 기간
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
    colors: any;
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
     * 상품을 선택하고 상품문의에 글이 등록된 수
     *
     *
     */
    question_count: any;
    /**
     * @description
     * 관련상품(수)
     *
     * 상품 등록/수정 시 관련상품으로 등록된 상품 수
     *
     *
     */
    relation_count: any;
    /**
     * @description
     * 상품소재
     *
     *
     */
    product_material: any;
    /**
     * @description
     * 상품자유게시판(수)
     *
     * 상품을 선택하고 상품자유게시판에 글이 등록된 수
     *
     *
     */
    product_article_count: any;
    /**
     * @description
     * 추가항목
     *
     * 상품 등록/수정 시 추가적으로 입력한 항목
     *
     *
     */
    additional_information: any;
    /**
     * @description
     * 결제수단
     *
     *
     */
    payment_methods: any;
    /**
     * @description
     * 추가구성상품
     *
     * 상품 등록/수정 시 추가구성상품으로 등록된 상품 수
     *
     *
     */
    add_products: any;
  }

  export interface RetrieveTheDetailsOfAProductInput {
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
     * 모바일 설정값 조회 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    mobile?: any;
  }

  export interface RetrieveTheDetailsOfAProductOutput {
    productsdetail: {
      shop_no: number;
      product_no: number;
      detail_image: string;
      small_image: string;
      additional_images: {
        big: string;
        medium: string;
        small: string;
      }[];
      product_name: string;
      manufacturer_name: string;
      origin_place_value: string;
      retail_price: string;
      price: Cafe24Datetime;
      interest_free_period: any;
      eng_product_name: string;
      custom_product_code: string;
      points_amount: {
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
      made_date: Cafe24Datetime;
      review_count: number;
      expiration_date: {
        start_date: Cafe24Date;
        end_date: Cafe24Date;
      };
      coupon_discounted_price: Cafe24Datetime;
      trend_name: string;
      shipping_scope: string;
      shipping_fee_type: Cafe24Enum;
      shipping_rates: any;
      shipping_fee: Cafe24Datetime;
      discount_price: Cafe24Datetime;
      optimum_discount_price: Cafe24Datetime;
      shipping_method: string;
      promotion_period: {
        start_date: Cafe24Datetime;
        end_date: Cafe24Datetime;
        dc_price: string;
      };
      colors: Cafe24Datetime[];
      translated_additional_description: string;
      stock_quantity: number;
      question_count: number;
      product_material: string;
      product_article_count: number;
      additional_information: {
        key: string;
        name: string;
        value: string;
      }[];
      payment_methods: string[];
      add_products: number[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 상세페이지에 노출되는 항목과 그 값을 조회할 수 있습니다.
     * 상품명, 제조사, 이미지 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-the-details-of-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "productsdetail": {
     *         "shop_no": 1,
     *         "product_no": 20,
     *         "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *         "additional_images": [
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/a2803c44ee8299486ff19be239cef7d0.jpg"
     *             },
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/e1ab68969d69287a828438c7684b14c4.jpg"
     *             }
     *         ],
     *         "product_name": "iPhone X",
     *         "manufacturer_name": "APPLE",
     *         "origin_place_value": "Korea",
     *         "retail_price": "0.00",
     *         "price": "11000.00",
     *         "interest_free_period": null,
     *         "eng_product_name": "iPhone Ten",
     *         "custom_product_code": "ABCD",
     *         "points_amount": [
     *             {
     *                 "payment_method": "card",
     *                 "type": "P",
     *                 "value": "110.00",
     *                 "rate": "10.00"
     *             },
     *             {
     *                 "payment_method": "cash",
     *                 "type": "W",
     *                 "value": "100.00",
     *                 "rate": null
     *             }
     *         ],
     *         "brand_name": "BRAND NAME",
     *         "model_name": "A1865",
     *         "price_excluding_tax": "10000.00",
     *         "tax": "1000.00",
     *         "product_code": "P000000X",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "supplier_name": "SUPPLIER NAME",
     *         "made_date": "2019-07-11T00:00:00+09:00",
     *         "review_count": 0,
     *         "expiration_date": {
     *             "start_date": "2019-07-08",
     *             "end_date": "2019-09-14"
     *         },
     *         "coupon_discounted_price": "9000.00",
     *         "trend_name": "TREND NAME",
     *         "shipping_scope": "Domestic/International shipping",
     *         "shipping_fee_type": "R",
     *         "shipping_rates": null,
     *         "shipping_fee": "2500.00",
     *         "discount_price": "10500.00",
     *         "optimum_discount_price": "8500.00",
     *         "shipping_method": "Courier Service",
     *         "promotion_period": {
     *             "start_date": "2019-07-11T00:00:00+09:00",
     *             "end_date": "2019-07-16T23:55:00+09:00",
     *             "dc_price": "220.00"
     *         },
     *         "colors": [
     *             "#000000",
     *             "#C20F0A"
     *         ],
     *         "translated_additional_description": "This is a translated additional description of product.",
     *         "stock_quantity": 10,
     *         "question_count": 0,
     *         "product_material": "Aluminum",
     *         "product_article_count": 0,
     *         "additional_information": [
     *             {
     *                 "key": "custom_option1",
     *                 "name": "gift option",
     *                 "value": "Yes"
     *             },
     *             {
     *                 "key": "custom_option1",
     *                 "name": "benefit option",
     *                 "value": "Yes"
     *             }
     *         ],
     *         "payment_methods": [
     *             "cash",
     *             "mileage"
     *         ],
     *         "add_products": [
     *             14,
     *             15
     *         ]
     *     }
     * }
     * ```
     */
    retrieveTheDetailsOfAProduct(
      input: RetrieveTheDetailsOfAProductInput,
      options?: RequestOptions<RetrieveTheDetailsOfAProductInput>,
    ): Promise<AxiosResponse<RetrieveTheDetailsOfAProductOutput>>;
  }
}
