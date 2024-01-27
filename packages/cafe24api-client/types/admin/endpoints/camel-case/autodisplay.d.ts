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
   * 자동 진열(Autodisplay)은 상품 분류에 특정 조건에 따라 상품을 자동으로 진열해주는 기능입니다.
   * 예를 들어 가장 판매량이 높은 순서대로 상품을 진열하거나 좋아요 수가 높은 수 등으로 진열되도록 설정할 수 있습니다.
   * 해당 리소스에서는 자동 진열 조건을 생성하거나, 수정, 삭제하고 자동 진열 조건을 조회할 수 있습니다.
   */
  export interface Autodisplay {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 자동진열 번호
     *
     *
     */
    displayNo: any;
    /**
     * @description
     * 메인분류 여부
     *
     * T: 메인분류
     * F: 상품분류
     *
     *
     */
    useMain: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    categoryNo: any;
    /**
     * @description
     * 상세 상품분류
     *
     *
     */
    displayGroup: any;
    /**
     * @description
     * 자동진열 최대 상품 수
     *
     * 최소: [1]~최대: [200]
     */
    displayCount: any;
    /**
     * @description
     * 예약진열 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useReservation: any;
    /**
     * @description
     * 예약 시작일
     *
     *
     */
    startDate: any;
    /**
     * @description
     * 해시태그 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useHashtag: any;
    /**
     * @description
     * 해시태그
     *
     *
     */
    hashTags: any;
    /**
     * @description
     * 정렬순서
     *
     * AOD: 주문 수 높은 순서대로
     * AOA: 주문 수 낮은 순서대로
     * AVD: 조회 수 높은 순서대로
     * AVA: 조회 수 낮은 순서대로
     * ARD: 주문율 높은 순서대로
     * ARA: 주문율 낮은 순서대로
     * ACD: 클릭 가치 높은 순서대로
     * AND: 신규 등록된 순서대로
     * APD: 판매가 높은 순서대로
     * APA: 판매가 낮은 순서대로
     * RD : 최근 등록상품이 위로
     * RA : 최근 등록상품이 아래로
     * UD : 최근 수정상품이 위로
     * UA : 최근 수정상품이 아래로
     * NA : 상품명 가나다순
     * ND : 상품명 가나다역순
     * PD : 판매가 높은 상품이 위로
     * PA : 판매가 높은 상품이 아래로
     * SD : 판매량 높은 상품이 위로
     * SA : 판매량 높은 상품이 아래로
     * CD : 조회수가 높은 상품이 위로
     * CA : 조회수가 높은 상품이 아래로
     * LD : 좋아요수가 높은 상품이 위로
     * LA : 좋아요수가 높은 상품이 아래로
     *
     *
     */
    displaySort: any;
    /**
     * @description
     * 업데이트 시간
     *
     * 배열 최대사이즈: [24]
     */
    timetable: any;
    /**
     * @description
     * 데이터 집계 기간
     *
     * 1: 1일
     * 3: 3일
     * 7: 1주(7일)
     * 30: 30일
     *
     *
     */
    period: any;
    /**
     * @description
     * 제외 분류 설정
     *
     * A: 모든 분류에 적용
     * C : 이 분류만 적용
     *
     *
     */
    exceptCategoriesScope: any;
    /**
     * @description
     * 제외 분류
     *
     *
     */
    exceptCategories: any;
  }

  export interface RetrieveAListOfAutoLayoutsInput {
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
     * 자동진열 번호
     *
     *
     */
    displayNo?: any;
  }

  export interface RetrieveAListOfAutoLayoutsOutput {
    autodisplay: {
      shopNo: number;
      displayNo: number;
      useMain: Cafe24Enum;
      categoryNo: number;
      displayGroup: number;
      displayCount: number;
      useReservation: Cafe24Enum;
      startDate: Cafe24Datetime;
      useHashtag: Cafe24Enum;
      hashTags: any;
      displaySort: string;
      timetable: number[];
      period: number;
      exceptCategoriesScope: Cafe24Enum;
      exceptCategories: number[];
    }[];
  }
  export interface CreateAutoLayoutForSelectedProductCategoryInput {
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
     * 메인분류 여부
     *
     * T: 메인분류
     * F: 상품분류
     *
     * @required
     */
    useMain: any;
    /**
     * @description
     * 분류 번호
     *
     * @required
     */
    categoryNo: any;
    /**
     * @description
     * 상세 상품분류
     *
     * @required
     */
    displayGroup: any;
    /**
     * @description
     * 자동진열 최대 상품 수
     *
     * @required
     *
     * 최소: [1]~최대: [200]
     */
    displayCount: any;
    /**
     * @description
     * 예약진열 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     * @required
     */
    useReservation: any;
    /**
     * @description
     * 예약 시작일
     *
     *
     */
    startDate?: any;
    /**
     * @description
     * 해시태그 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     * @required
     */
    useHashtag: any;
    /**
     * @description
     * 해시태그
     *
     *
     */
    hashTags?: any;
    /**
     * @description
     * 정렬순서
     *
     * 정렬 조건(RD, RA, UD, UA, NA, ND, PD, PA, SD, SA, AD, AA, LD, LA)은 use_hashtag가 &#34;T&#34;일 경우에만 사용 가능
     *
     * AOD: 주문 수 높은 순서대로
     * AOA: 주문 수 낮은 순서대로
     * AVD: 조회 수 높은 순서대로
     * AVA: 조회 수 낮은 순서대로
     * ARD: 주문율 높은 순서대로
     * ARA: 주문율 낮은 순서대로
     * ACD: 클릭 가치 높은 순서대로
     * AND: 신규 등록된 순서대로
     * APD: 판매가 높은 순서대로
     * APA: 판매가 낮은 순서대로
     * RD : 최근 등록상품이 위로
     * RA : 최근 등록상품이 아래로
     * UD : 최근 수정상품이 위로
     * UA : 최근 수정상품이 아래로
     * NA : 상품명 가나다순
     * ND : 상품명 가나다역순
     * PD : 판매가 높은 상품이 위로
     * PA : 판매가 높은 상품이 아래로
     * SD : 판매량 높은 상품이 위로
     * SA : 판매량 높은 상품이 아래로
     * CD : 조회수가 높은 상품이 위로
     * CA : 조회수가 높은 상품이 아래로
     * LD : 좋아요수가 높은 상품이 위로
     * LA : 좋아요수가 높은 상품이 아래로
     *
     *
     */
    displaySort?: any;
    /**
     * @description
     * 업데이트 시간
     *
     * 배열 최대사이즈: [24]
     */
    timetable?: any;
    /**
     * @description
     * 데이터 집계 기간
     *
     * 1: 1일
     * 3: 3일
     * 7: 1주(7일)
     * 30: 30일
     *
     *
     */
    period?: any;
    /**
     * @description
     * 제외 분류 설정
     *
     * A: 모든 분류에 적용
     * C : 이 분류만 적용
     *
     * @default A
     *
     *
     */
    exceptCategoriesScope?: any;
    /**
     * @description
     * 제외 분류
     *
     *
     */
    exceptCategories?: any;
  }

  export interface CreateAutoLayoutForSelectedProductCategoryOutput {
    autodisplay: {
      shopNo: number;
      displayNo: number;
      useMain: Cafe24Enum;
      categoryNo: number;
      displayGroup: number;
      displayCount: number;
      useReservation: Cafe24Enum;
      startDate: Cafe24Datetime;
      useHashtag: Cafe24Enum;
      hashTags: any;
      displaySort: string;
      timetable: number[];
      period: number;
      exceptCategoriesScope: Cafe24Enum;
      exceptCategories: number[];
    };
  }
  export interface UpdateAutoLayoutForSelectedProductCategoryInput {
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
     * 자동진열 번호
     *
     * @required
     */
    displayNo: any;
    /**
     * @description
     * 자동진열 최대 상품 수
     *
     * 최소: [1]~최대: [200]
     */
    displayCount?: any;
    /**
     * @description
     * 예약진열 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useReservation?: any;
    /**
     * @description
     * 예약 시작일
     *
     *
     */
    startDate?: any;
    /**
     * @description
     * 해시태그 사용여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useHashtag?: any;
    /**
     * @description
     * 해시태그
     *
     *
     */
    hashTags?: any;
    /**
     * @description
     * 정렬순서
     *
     * 정렬 조건(RD, RA, UD, UA, NA, ND, PD, PA, SD, SA, AD, AA, LD, LA)은 use_hashtag가 &#34;T&#34;일 경우에만 사용 가능
     *
     * AOD: 주문 수 높은 순서대로
     * AOA: 주문 수 낮은 순서대로
     * AVD: 조회 수 높은 순서대로
     * AVA: 조회 수 낮은 순서대로
     * ARD: 주문율 높은 순서대로
     * ARA: 주문율 낮은 순서대로
     * ACD: 클릭 가치 높은 순서대로
     * AND: 신규 등록된 순서대로
     * APD: 판매가 높은 순서대로
     * APA: 판매가 낮은 순서대로
     * RD : 최근 등록상품이 위로
     * RA : 최근 등록상품이 아래로
     * UD : 최근 수정상품이 위로
     * UA : 최근 수정상품이 아래로
     * NA : 상품명 가나다순
     * ND : 상품명 가나다역순
     * PD : 판매가 높은 상품이 위로
     * PA : 판매가 높은 상품이 아래로
     * SD : 판매량 높은 상품이 위로
     * SA : 판매량 높은 상품이 아래로
     * CD : 조회수가 높은 상품이 위로
     * CA : 조회수가 높은 상품이 아래로
     * LD : 좋아요수가 높은 상품이 위로
     * LA : 좋아요수가 높은 상품이 아래로
     *
     *
     */
    displaySort?: any;
    /**
     * @description
     * 업데이트 시간
     *
     * 배열 최대사이즈: [24]
     */
    timetable?: any;
    /**
     * @description
     * 데이터 집계 기간
     *
     * 1: 1일
     * 3: 3일
     * 7: 1주(7일)
     * 30: 30일
     *
     *
     */
    period?: any;
    /**
     * @description
     * 제외 분류 설정
     *
     * A: 모든 분류에 적용
     * C : 이 분류만 적용
     *
     *
     */
    exceptCategoriesScope?: any;
    /**
     * @description
     * 제외 분류
     *
     *
     */
    exceptCategories?: any;
  }

  export interface UpdateAutoLayoutForSelectedProductCategoryOutput {
    autodisplay: {
      shopNo: number;
      displayNo: number;
      useMain: Cafe24Enum;
      categoryNo: number;
      displayGroup: number;
      displayCount: number;
      useReservation: Cafe24Enum;
      startDate: Cafe24Datetime;
      useHashtag: Cafe24Enum;
      hashTags: any;
      displaySort: string;
      timetable: number[];
      period: number;
      exceptCategoriesScope: Cafe24Enum;
      exceptCategories: number[];
    };
  }
  export interface DeleteAutoLayoutForSelectedProductCategoryInput {
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
     * 자동진열 번호
     *
     * @required
     */
    displayNo: any;
  }

  export interface DeleteAutoLayoutForSelectedProductCategoryOutput {
    autodisplay: {
      displayNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 생성된 모든 자동 진열을 목록을 통해 조회할 수 있습니다.
     * 자동진열 번호, 예약진열 사용여부, 자동진열 최대 상품 수 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-auto-layouts
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autodisplay": [
     *         {
     *             "shop_no": 1,
     *             "display_no": 1,
     *             "use_main": "T",
     *             "category_no": 1,
     *             "display_group": 2,
     *             "display_count": 12,
     *             "use_reservation": "T",
     *             "start_date": "2020-01-01T10:00:00+09:00",
     *             "use_hashtag": "F",
     *             "hash_tags": null,
     *             "display_sort": "ACD",
     *             "timetable": [
     *                 12,
     *                 20
     *             ],
     *             "period": 1,
     *             "except_categories_scope": "C",
     *             "except_categories": [
     *                 30,
     *                 41
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "display_no": 2,
     *             "use_main": "F",
     *             "category_no": 24,
     *             "display_group": 2,
     *             "display_count": 48,
     *             "use_reservation": "F",
     *             "start_date": null,
     *             "use_hashtag": "T",
     *             "hash_tags": [
     *                 "new",
     *                 "winter"
     *             ],
     *             "display_sort": "RD",
     *             "timetable": [
     *                 12,
     *                 20
     *             ],
     *             "period": 7,
     *             "except_categories_scope": "A",
     *             "except_categories": [
     *                 30,
     *                 41
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfAutoLayouts(
      input: RetrieveAListOfAutoLayoutsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfAutoLayoutsOutput['autodisplay'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfAutoLayoutsOutput>>;
    /**
     * @description
     * 특정 조건에 따라 자동 진열을 생성합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-auto-layout-for-selected-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autodisplay": {
     *         "shop_no": 1,
     *         "display_no": 1,
     *         "use_main": "T",
     *         "category_no": 1,
     *         "display_group": 2,
     *         "display_count": 12,
     *         "use_reservation": "T",
     *         "start_date": "2020-01-01T10:00:00+09:00",
     *         "use_hashtag": "F",
     *         "hash_tags": null,
     *         "display_sort": "ACD",
     *         "timetable": [
     *             12,
     *             20
     *         ],
     *         "period": 1,
     *         "except_categories_scope": "A",
     *         "except_categories": [
     *             30,
     *             41
     *         ]
     *     }
     * }
     * ```
     */
    createAutoLayoutForSelectedProductCategory(
      input: CreateAutoLayoutForSelectedProductCategoryInput,
      options?: AdminRequestOptions<
        CreateAutoLayoutForSelectedProductCategoryOutput['autodisplay']
      >,
    ): Promise<AxiosResponse<CreateAutoLayoutForSelectedProductCategoryOutput>>;
    /**
     * @description
     * 기존 자동 진열을 수정합니다.
     * 자동진열 최대 상품 수, 예약진열 사용여부 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-auto-layout-for-selected-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autodisplay": {
     *         "shop_no": 1,
     *         "display_no": 1,
     *         "use_main": "T",
     *         "category_no": 1,
     *         "display_group": 2,
     *         "display_count": 12,
     *         "use_reservation": "T",
     *         "start_date": "2020-01-01T10:00:00+09:00",
     *         "use_hashtag": "F",
     *         "hash_tags": null,
     *         "display_sort": "ACD",
     *         "timetable": [
     *             0,
     *             12
     *         ],
     *         "period": 1,
     *         "except_categories_scope": "C",
     *         "except_categories": [
     *             30,
     *             41
     *         ]
     *     }
     * }
     * ```
     */
    updateAutoLayoutForSelectedProductCategory(
      input: UpdateAutoLayoutForSelectedProductCategoryInput,
      options?: AdminRequestOptions<
        UpdateAutoLayoutForSelectedProductCategoryOutput['autodisplay']
      >,
    ): Promise<AxiosResponse<UpdateAutoLayoutForSelectedProductCategoryOutput>>;
    /**
     * @description
     * 생성된 자동 진열을 삭제합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-auto-layout-for-selected-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autodisplay": {
     *         "display_no": 1
     *     }
     * }
     * ```
     */
    deleteAutoLayoutForSelectedProductCategory(
      input: DeleteAutoLayoutForSelectedProductCategoryInput,
      options?: AdminRequestOptions<
        DeleteAutoLayoutForSelectedProductCategoryOutput['autodisplay']
      >,
    ): Promise<AxiosResponse<DeleteAutoLayoutForSelectedProductCategoryOutput>>;
  }
}
