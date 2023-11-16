import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90075
 *
 * @description
 * 품목의 재고가 품절되었거나, 품절이 해제된 경우
 *
 * (재고 1개 -&gt; 재고 0개)
 *
 * 또는
 *
 * (재고 0개 -&gt; 재고 1개)
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export interface OnProductInventoryChanged {
  /**
   * @description
   * 이벤트 구분(타입)
   * 각 이벤트 NO. 참조
   */
  event_no: number;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     */
    mall_id: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     */
    product_no: number;
    product_code: string;
    /**
     * @description
     * 가입일
     *
     */
    created_date: Cafe24Datetime;
    /**
     * @description
     * 상품이 수정된 일시
     * date
     */
    updated_date: Cafe24Datetime;
    /**
     * @description
     * 상품명
     * 최대글자수 : [250자]
     */
    product_name: string;
    /**
     * @description
     * 영문 상품명
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함
     * 최대글자수 : [250자]
     */
    eng_product_name: string;
    /**
     * @description
     * 공금사 상품명
     * 최대글자수 : [250자]
     */
    supply_product_name: string;
    /**
     * @description
     * 상품의 모델명
     * 최대글자수 : [100자]
     */
    model_name: string;
    /**
     * @description
     * 자체상품 코드
     * 사용자가 상품에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함
     * 최대글자수 : [40자]
     */
    custom_product_code: string;
    /**
     * @description
     * 상품상태
     * N : 신상품
     * B : 반품상품
     * R : 재고상품
     * U : 중고상품
     * E : 전시상품
     * F : 리퍼상품
     * S : 스크래치 상품
     */
    product_condition: Cafe24Enum;
    /**
     * @description
     * 상품 요약 설명
     * 최대글자수 : [255자]
     */
    summary_description: string;
    /**
     * @description
     * 상품 간략 설명
     *
     */
    simple_description: string;
    /**
     * @description
     * 상품 상세 설명
     *
     */
    description: string;
    /**
     * @description
     * 진열상태
     * T : 진열함
     * F : 진열안함
     */
    display: Cafe24Enum;
    /**
     * @description
     * 판매상태
     * T : 판매함
     * F : 판매안함
     */
    selling: Cafe24Enum;
    /**
     * @description
     * 상품 소비자가
     * 최소: [0]~최대: [2147483647]
     */
    retail_price: string;
    /**
     * @description
     * 상품 공급가
     * 최소: [0]~최대: [2147483647]
     */
    supply_price: Cafe24Datetime;
    /**
     * @description
     * 상품 판매가
     * 최소: [0]~최대: [2147483647]
     */
    price: Cafe24Datetime;
    /**
     * @description
     * 판매가 대체문구
     * 최대글자수 : [20자]
     */
    price_content: any;
    /**
     * @description
     * 성인인증이 필요한 상품인지 여부
     * T : 사용함
     * F : 사용안함
     */
    adult_certification: Cafe24Enum;
    /**
     * @description
     * 제조사 코드
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturer_code: string;
    /**
     * @description
     * 공급사 코드
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplier_code: string;
    /**
     * @description
     * 브랜드 코드
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brand_code: string;
    /**
     * @description
     * 트렌드 코드
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    trend_code: string;
    /**
     * @description
     * 제조일자
     * date
     */
    made_date: Cafe24Date;
    /**
     * @description
     * 출시일자
     * date
     */
    release_date: Cafe24Date;
    /**
     * @description
     * 원산지
     *
     */
    origin_place_code: number;
    shipping_scope: Cafe24Enum;
    /**
     * @description
     * 번역상태
     * T : 번역함
     * F : 번역안함
     */
    translated: Cafe24Enum;
    /**
     * @description
     * 현재 처리상태 문구 설명
     *
     */
    status_text: Cafe24Datetime;
    variant_code: string;
    /**
     * @description
     * 품목 품절표시 사용 여부 ???
     * T : 사용함
     * F : 사용안함
     */
    use_soldout: Cafe24Enum;
  };
}
