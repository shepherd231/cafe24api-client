import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90046
 *
 * @description
 * 쇼핑몰에서 상품분류의 상품 진열 설정을 일괄변경한 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_product
 *
 */
export interface OnBulkProductCategoryDisplaySettingsChanged {
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
  };
}
