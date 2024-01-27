import { AxiosResponse } from 'axios';
import { 
  Endpoint, 
  AdminRequestOptions, 
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
   * 쿠폰 설정(Coupons setting)은 쇼핑몰에서 사용할 쿠폰의 기본적인 설정을 입력할 수 있습니다.
   * 쿠폰의 할인, 적립 기능의 사용여부와 제한조건, 진열 등 다양한 측면의 설정이 가능합니다.
   */
  export interface CouponsSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * 쿠폰사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    use_coupon: any;
    /**
      * @description
      * 쿠폰 사용 제한
      * 
      * A:주문서+상품별 쿠폰 사용
      * O:주문서 쿠폰만 사용
      * P:상품별 쿠폰만 사용
      * 
      * 
      */ 
    available_issue_type: any;
    /**
      * @description
      * 적립금 동시사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    allow_using_coupons_with_points: any;
    /**
      * @description
      * 할인 동시사용
      * 
      * A:쿠폰+회원등급 할인 동시 사용
      * C:쿠폰만 사용
      * G:회원등급 할인만 사용
      * 
      * 
      */ 
    allow_using_coupons_with_discounts: any;
    /**
      * @description
      * 상품/주문서 동시사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    allow_using_product_and_order_coupons: any;
    /**
      * @description
      * 쿠폰 복원 설정
      * 
      * 
      */ 
    recover_coupon_setting: any;
    /**
      * @description
      * 쿠폰 사용 개수 제한
      * 
      * 
      */ 
    max_coupon_count: any;
    /**
      * @description
      * 추가 사용 쿠폰
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    use_additional_coupon: any;
    /**
      * @description
      * 추가 사용 쿠폰 번호
      * 
      * 
      */ 
    additional_coupon_no: any;
    /**
      * @description
      * 비회원 노출설정
      * 
      * T:노출함
      * F:노출안함
      * 
      * 
      */ 
    show_coupon_to_non_members: any;
    /**
      * @description
      * 회원등급할인이 지정된 쿠폰 포함
      * 
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    show_group_coupon_to_non_members: any;
    /**
      * @description
      * 발급된 쿠폰 표시 여부
      * 
      * T:노출함
      * F:노출안함
      * 
      * 
      */ 
    show_issued_coupon: any;
    /**
      * @description
      * 정렬 기준
      * 
      * A:쿠폰 시작일자
      * B:쿠폰 종료일자
      * C:쿠폰 발급일자
      * D:할인/적립금액
      * E:할인/적립율
      * 
      * 
      */ 
    sorting_type: any;
    /**
      * @description
      * 기본 쿠폰 다운로드 이미지
      * 
      * 1:TYPE1
      * 2:TYPE2
      * 3:TYPE3
      * 4:TYPE4
      * 5:TYPE5
      * 
      * 
      */ 
    download_image_type: any;
    /**
      * @description
      * 기본 쿠폰 배경 이미지
      * 
      * 1:TYPE1
      * 2:TYPE2
      * 3:TYPE3
      * 4:TYPE4
      * 5:TYPE5
      * 
      * 
      */ 
    background_image_type: any;
  }

  export interface RetrieveCouponSettingsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
  }

  export interface RetrieveCouponSettingsOutput {
    coupon: { 
    shop_no: number;
    use_coupon: Cafe24Enum;
    available_issue_type: Cafe24Enum;
    allow_using_coupons_with_points: Cafe24Enum;
    allow_using_coupons_with_discounts: Cafe24Enum;
    allow_using_product_and_order_coupons: Cafe24Enum;
    recover_coupon_setting: { 
    restore_viewpoint: Cafe24Enum;
    cancel_before_pay: Cafe24Enum;
    cancel_after_pay: Cafe24Enum;
    return: Cafe24Enum;
    exchange: Cafe24Enum;
    part: Cafe24Enum;
    };
    max_coupon_count: { 
    product_per_product: number;
    order_per_order: number;
    product_and_order_per_order: number;
    product_per_order: number;
    product_and_order_per_day: number;
    };
    use_additional_coupon: Cafe24Enum;
    additional_coupon_no: { 
    coupon_no: Cafe24Datetime;
    }[];
    show_coupon_to_non_members: Cafe24Enum;
    show_group_coupon_to_non_members: Cafe24Enum;
    show_issued_coupon: Cafe24Enum;
    sorting_type: Cafe24Enum;
    download_image_type: Cafe24Datetime;
    background_image_type: Cafe24Datetime;
    };
  }
  export interface UpdateCouponSettingsInput {
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
      * 쿠폰사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    use_coupon?: any;
    /**
      * @description
      * 쿠폰 사용 제한
      * 
      * A:주문서+상품별 쿠폰 사용
      * O:주문서 쿠폰만 사용
      * P:상품별 쿠폰만 사용
      * 
      * 
      */ 
    available_issue_type?: any;
    /**
      * @description
      * 적립금 동시사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    allow_using_coupons_with_points?: any;
    /**
      * @description
      * 할인 동시사용
      * 
      * A:쿠폰+회원등급 할인 동시 사용
      * C:쿠폰만 사용
      * G:회원등급 할인만 사용
      * 
      * 
      */ 
    allow_using_coupons_with_discounts?: any;
    /**
      * @description
      * 상품/주문서 동시사용
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    allow_using_product_and_order_coupons?: any;
    /**
      * @description
      * 쿠폰 복원 설정
      * 
      * 
      */ 
    recover_coupon_setting?: { 
    /**
      * @description
      * 쿠폰 복원 시점
      * A: 취소/교환/반품 접수
      * B: 취소/교환/반품 완료
      * 
      * 
      */ 
    restore_viewpoint?: any;
    /**
      * @description
      * 입금전취소
      * T:자동 복원함
      * F:자동 복원 안함
      * M:쿠폰복원 여부를 확인함
      * 
      * 
      */ 
    cancel_before_pay?: any;
    /**
      * @description
      * 입금후 취소
      * T:자동 복원함
      * F:자동 복원 안함
      * M:쿠폰복원 여부를 확인함
      * 
      * 
      */ 
    cancel_after_pay?: any;
    /**
      * @description
      * 반품
      * T:자동 복원함
      * F:자동 복원 안함
      * M:쿠폰복원 여부를 확인함
      * 
      * 
      */ 
    return?: any;
    /**
      * @description
      * 교환
      * T:자동 복원함
      * F:자동 복원 안함
      * M:쿠폰복원 여부를 확인함
      * 
      * 
      */ 
    exchange?: any;
    /**
      * @description
      * 부분 취소/반품/교환
      * F:쿠폰 복원 안함
      * M:쿠폰복원 여부를 확인함
      * 
      * 
      */ 
    part?: any;
    };
    /**
      * @description
      * 쿠폰 사용 개수 제한
      * 
      * 
      */ 
    max_coupon_count?: { 
    /**
      * @description
      * 상품당 상품쿠폰 사용 개수 제한
      * 
      * 
      */ 
    product_per_product?: any;
    /**
      * @description
      * 1회 주문당 주문서 쿠폰 개수 제한
      * 
      * 
      */ 
    order_per_order?: any;
    /**
      * @description
      * 주문건당 (주문서+상품쿠폰) 쿠폰 개수 제한
      * 
      * 
      */ 
    product_and_order_per_order?: any;
    /**
      * @description
      * 1회 주문당 상품쿠폰 쿠폰 개수 제한
      * 
      * 
      */ 
    product_per_order?: any;
    /**
      * @description
      * 일간 (주문서+상품쿠폰) 쿠폰 개수 제한
      * 
      * 
      */ 
    product_and_order_per_day?: any;
    };
    /**
      * @description
      * 추가 사용 쿠폰
      * 
      * T:사용함
      * F:사용안함
      * 
      * 
      */ 
    use_additional_coupon?: any;
    /**
      * @description
      * 추가 사용 쿠폰 번호
      * 
      * 배열 최대사이즈: [5]
      */ 
    additional_coupon_no?: { 
    /**
      * @description
      * 쿠폰번호
      * 
      * 
      */ 
    coupon_no?: any;
    };
    /**
      * @description
      * 비회원 노출설정
      * 
      * T:노출함
      * F:노출안함
      * 
      * 
      */ 
    show_coupon_to_non_members?: any;
    /**
      * @description
      * 회원등급할인이 지정된 쿠폰 포함
      * 
      * T : 포함
      * F : 미포함
      * 
      * 
      */ 
    show_group_coupon_to_non_members?: any;
    /**
      * @description
      * 발급된 쿠폰 표시 여부
      * 
      * T:노출함
      * F:노출안함
      * 
      * 
      */ 
    show_issued_coupon?: any;
    /**
      * @description
      * 정렬 기준
      * 
      * A:쿠폰 시작일자
      * B:쿠폰 종료일자
      * C:쿠폰 발급일자
      * D:할인/적립금액
      * E:할인/적립율
      * 
      * 
      */ 
    sorting_type?: any;
    /**
      * @description
      * 기본 쿠폰 다운로드 이미지
      * 
      * 1:TYPE1
      * 2:TYPE2
      * 3:TYPE3
      * 4:TYPE4
      * 5:TYPE5
      * 
      * 
      */ 
    download_image_type?: any;
    /**
      * @description
      * 기본 쿠폰 배경 이미지
      * 
      * 1:TYPE1
      * 2:TYPE2
      * 3:TYPE3
      * 4:TYPE4
      * 5:TYPE5
      * 
      * 
      */ 
    background_image_type?: any;
  }

  export interface UpdateCouponSettingsOutput {
    coupon: { 
    shop_no: number;
    use_coupon: Cafe24Enum;
    available_issue_type: Cafe24Enum;
    allow_using_coupons_with_points: Cafe24Enum;
    allow_using_coupons_with_discounts: Cafe24Enum;
    allow_using_product_and_order_coupons: Cafe24Enum;
    recover_coupon_setting: { 
    restore_viewpoint: Cafe24Enum;
    cancel_before_pay: Cafe24Enum;
    cancel_after_pay: Cafe24Enum;
    return: Cafe24Enum;
    exchange: Cafe24Enum;
    part: Cafe24Enum;
    };
    max_coupon_count: { 
    product_per_product: number;
    order_per_order: number;
    product_and_order_per_order: number;
    product_per_order: number;
    product_and_order_per_day: number;
    };
    use_additional_coupon: Cafe24Enum;
    additional_coupon_no: { 
    coupon_no: Cafe24Datetime;
    }[];
    show_coupon_to_non_members: Cafe24Enum;
    show_group_coupon_to_non_members: Cafe24Enum;
    show_issued_coupon: Cafe24Enum;
    sorting_type: Cafe24Enum;
    download_image_type: Cafe24Datetime;
    background_image_type: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쿠폰 사용 여부나 쿠폰과 할인 동시 사용 여부 등 설정 정보를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-coupon-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupon": {
     *         "shop_no": 1,
     *         "use_coupon": "T",
     *         "available_issue_type": "A",
     *         "allow_using_coupons_with_points": "T",
     *         "allow_using_coupons_with_discounts": "A",
     *         "allow_using_product_and_order_coupons": "T",
     *         "recover_coupon_setting": {
     *             "restore_viewpoint": "A",
     *             "cancel_before_pay": "M",
     *             "cancel_after_pay": "T",
     *             "return": "F",
     *             "exchange": "F",
     *             "part": "F"
     *         },
     *         "max_coupon_count": {
     *             "product_per_product": 0,
     *             "order_per_order": 1,
     *             "product_and_order_per_order": 0,
     *             "product_per_order": 0,
     *             "product_and_order_per_day": 1
     *         },
     *         "use_additional_coupon": "T",
     *         "additional_coupon_no": [
     *             {
     *                 "coupon_no": "6067316237600000009"
     *             },
     *             {
     *                 "coupon_no": "6066806189000000005"
     *             }
     *         ],
     *         "show_coupon_to_non_members": "T",
     *         "show_group_coupon_to_non_members": "F",
     *         "show_issued_coupon": "T",
     *         "sorting_type": "B",
     *         "download_image_type": "1",
     *         "background_image_type": "2"
     *     }
     * }
     * ```
     */
    retrieveCouponSettings(
      input: RetrieveCouponSettingsInput,
      options?: AdminRequestOptions<RetrieveCouponSettingsOutput['coupon']>,
    ): Promise<AxiosResponse<RetrieveCouponSettingsOutput>>;
    /**
     * @description
     * 쿠폰 설정 정보를 수정합니다.
     * 쿠폰 사용여부, 쿠폰 사용 제한, 쿠폰 사용 개수 제한 등의 정보를 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-coupon-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupon": {
     *         "shop_no": 1,
     *         "use_coupon": "T",
     *         "available_issue_type": "A",
     *         "allow_using_coupons_with_points": "T",
     *         "allow_using_coupons_with_discounts": "A",
     *         "allow_using_product_and_order_coupons": "T",
     *         "recover_coupon_setting": {
     *             "restore_viewpoint": "B",
     *             "cancel_before_pay": "M",
     *             "cancel_after_pay": "T",
     *             "return": "F",
     *             "exchange": "F",
     *             "part": "F"
     *         },
     *         "max_coupon_count": {
     *             "product_per_product": 0,
     *             "order_per_order": 1,
     *             "product_and_order_per_order": 0,
     *             "product_per_order": 0,
     *             "product_and_order_per_day": 1
     *         },
     *         "use_additional_coupon": "T",
     *         "additional_coupon_no": [
     *             {
     *                 "coupon_no": "6067316237600000009"
     *             },
     *             {
     *                 "coupon_no": "6066806189000000005"
     *             }
     *         ],
     *         "show_coupon_to_non_members": "T",
     *         "show_group_coupon_to_non_members": "F",
     *         "show_issued_coupon": "T",
     *         "sorting_type": "B",
     *         "download_image_type": "1",
     *         "background_image_type": "2"
     *     }
     * }
     * ```
     */
    updateCouponSettings(
      input: UpdateCouponSettingsInput,
      options?: AdminRequestOptions<UpdateCouponSettingsOutput['coupon']>,
    ): Promise<AxiosResponse<UpdateCouponSettingsOutput>>;
  }
}
