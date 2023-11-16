import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90043
 *
 * @description
 * 쇼핑몰의 상품분류가 수정된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_product
 *
 */
export interface OnProductCategoryUpdated {
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
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     */
    event_shop_no: Cafe24Datetime;
    /**
     * @description
     * 상품분류의 고유한 일련 번호
     *
     */
    category_no: number;
    /**
     * @description
     * 상품분류명
     * 최대글자수 : [50자]
     */
    category_name: string;
    /**
     * @description
     * 상품분류 표시상태
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부
     * T : 표시함
     * F : 표시안함
     */
    use_display: Cafe24Enum;
    /**
     * @description
     * 메인분류 표시상태
     * T : 표시함
     * F : 표시안함
     */
    use_main: Cafe24Enum;
    /**
     * @description
     * 쇼핑몰 표시설정
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     */
    display_type: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열영역 구분
     * A : 전체
     * G : 영역별
     */
    product_display_scope: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     */
    product_display_type: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 키
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     */
    product_display_key: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 순서
     * D: 내림차순
     * A : 오름차순
     */
    product_display_sort: Cafe24Enum;
    /**
     * @description
     * 품절상품진열
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     */
    soldout_product_display: Cafe24Enum;
    /**
     * @description
     * 하위분류 상품진열
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     * T : 진열함
     * F : 진열안함
     */
    sub_category_product_display: Cafe24Enum;
  };
}
