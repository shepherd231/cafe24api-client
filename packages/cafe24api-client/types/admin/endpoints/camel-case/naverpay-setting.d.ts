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
   * 네이버페이 설정(Naverpay Setting)은 쇼핑몰의 네이버페이 공통인증키를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface NaverpaySetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 네이버 공통 인증키
      * 
      * 
      */ 
    authenticationKey: any;
    /**
      * @description
      * 네이버페이 연동버전
      * 
      * 
      */ 
    naverpayVersion: any;
    /**
      * @description
      * 페이센터 ID
      * 
      * 
      */ 
    shopId: any;
    /**
      * @description
      * 네이버페이 구매 버튼 노출
      * 
      * 
      */ 
    isButtonShow: any;
    /**
      * @description
      * 네이버 주문연동
      * 
      * 
      */ 
    isUsedOrder: any;
    /**
      * @description
      * 네이버 구매평연동
      * 
      * 
      */ 
    isUsedReview: any;
    /**
      * @description
      * 네이버 구매평노출
      * 
      * 
      */ 
    isShowReview: any;
    /**
      * @description
      * 네이버페이 구매 버튼 클릭 시 페이지 이동
      * 
      * 
      */ 
    isOrderPage: any;
    /**
      * @description
      * 네이버 가맹점 인증키
      * 
      * 
      */ 
    certiKey: any;
    /**
      * @description
      * 네이버 버튼 인증키
      * 
      * 
      */ 
    imageKey: any;
    /**
      * @description
      * 네이버 버튼 디자인 : PC 상품상세페이지
      * 
      * 
      */ 
    naverButtonPcProduct: any;
    /**
      * @description
      * 네이버 버튼 디자인 : PC 장바구니페이지
      * 
      * 
      */ 
    naverButtonPcBasket: any;
    /**
      * @description
      * 네이버 버튼 디자인 : Mobile 상품상세페이지
      * 
      * 
      */ 
    naverButtonMobileProduct: any;
    /**
      * @description
      * 네이버 버튼 디자인 : Mobile 장바구니페이지
      * 
      * 
      */ 
    naverButtonMobileBasket: any;
  }

  export interface RetrieveNaverPaySettingsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shopNo?: any;
  }

  export interface RetrieveNaverPaySettingsOutput {
    naverpay: { 
    shopNo: Cafe24Datetime;
    authenticationKey: string;
    naverpayVersion: Cafe24Datetime;
    shopId: string;
    isButtonShow: Cafe24Enum;
    isUsedOrder: Cafe24Enum;
    isUsedReview: Cafe24Enum;
    isShowReview: Cafe24Enum;
    sOrderPage: Cafe24Enum;
    certiKey: string;
    imageKey: string;
    naverButtonPcProduct: string;
    naverButtonPcBasket: string;
    naverButtonMobileProduct: string;
    naverButtonMobileBasket: string;
    };
  }
  export interface CreateNaverPaySettingsInput {
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
      * 네이버 공통 인증키
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [50자]
      */ 
    authenticationKey?: any;
    /**
      * @description
      * 네이버페이 연동버전
      * 
      * @default 2.1
      * 
      * 
      */ 
    naverpayVersion?: any;
    /**
      * @description
      * 페이센터 ID
      * 
      * @required
      */ 
    shopId: any;
    /**
      * @description
      * 네이버페이 구매 버튼 노출
      * 
      * @default T
      * 
      * 
      */ 
    isButtonShow?: any;
    /**
      * @description
      * 네이버 주문연동
      * 
      * @default T
      * 
      * 
      */ 
    isUsedOrder?: any;
    /**
      * @description
      * 네이버 구매평연동
      * 
      * @default T
      * 
      * 
      */ 
    isUsedReview?: any;
    /**
      * @description
      * 네이버 구매평노출
      * 
      * @default T
      * 
      * 
      */ 
    isShowReview?: any;
    /**
      * @description
      * 네이버페이 구매 버튼 클릭 시 페이지 이동
      * 
      * @default N
      * 
      * 
      */ 
    isOrderPage?: any;
    /**
      * @description
      * 네이버 가맹점 인증키
      * 
      * @required
      */ 
    certiKey: any;
    /**
      * @description
      * 네이버 버튼 인증키
      * 
      * @required
      */ 
    imageKey: any;
    /**
      * @description
      * 네이버 버튼 디자인 : PC 상품상세페이지
      * 
      * @default A|1|2
      * 
      * 
      */ 
    naverButtonPcProduct?: any;
    /**
      * @description
      * 네이버 버튼 디자인 : PC 장바구니페이지
      * 
      * @default A|1|1
      * 
      * 
      */ 
    naverButtonPcBasket?: any;
    /**
      * @description
      * 네이버 버튼 디자인 : Mobile 상품상세페이지
      * 
      * @default MA|1|2
      * 
      * 
      */ 
    naverButtonMobileProduct?: any;
    /**
      * @description
      * 네이버 버튼 디자인 : Mobile 장바구니페이지
      * 
      * @default MA|1|1
      * 
      * 
      */ 
    naverButtonMobileBasket?: any;
  }

  export interface CreateNaverPaySettingsOutput {
    naverpay: { 
    authenticationKey: string;
    naverpayVersion: Cafe24Datetime;
    shopId: string;
    isButtonShow: Cafe24Enum;
    isUsedOrder: Cafe24Enum;
    isUsedReview: Cafe24Enum;
    isShowReview: Cafe24Enum;
    sOrderPage: Cafe24Enum;
    certiKey: string;
    imageKey: string;
    naverButtonPcProduct: string;
    naverButtonPcBasket: string;
    naverButtonMobileProduct: string;
    naverButtonMobileBasket: string;
    };
  }
  export interface UpdateNaverPaySettingsInput {
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
      * 네이버 공통 인증키
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [50자]
      */ 
    authenticationKey?: any;
  }

  export interface UpdateNaverPaySettingsOutput {
    naverpay: { 
    shopNo: number;
    authenticationKey: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 네이버페이 공통인증키를 조회합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "shop_no": "1",
     *         "authentication_key": "s_abcdefg",
     *         "naverpay_version": "2.1",
     *         "shop_id": "c_abcdefg",
     *         "is_button_show": "T",
     *         "is_used_order": "T",
     *         "is_used_review": "T",
     *         "is_show_review": "T",
     *         "s_order_page": "N",
     *         "certi_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "image_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "naver_button_pc_product": "A|1|2",
     *         "naver_button_pc_basket": "A|1|1",
     *         "naver_button_mobile_product": "MA|1|2",
     *         "naver_button_mobile_basket": "MA|1|1"
     *     }
     * }
     * ```
     */
    retrieveNaverPaySettings(
      input: RetrieveNaverPaySettingsInput,
      options?: AdminRequestOptions<RetrieveNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<RetrieveNaverPaySettingsOutput>>;
    /**
     * @description
     * 네이버페이 가맹 시 네이버에서 발급한 공통인증키를 쇼핑몰 어드민에 등록할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "authentication_key": "s_abcdefg",
     *         "naverpay_version": "2.1",
     *         "shop_id": "c_abcdefg",
     *         "is_button_show": "T",
     *         "is_used_order": "T",
     *         "is_used_review": "T",
     *         "is_show_review": "T",
     *         "s_order_page": "N",
     *         "certi_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "image_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "naver_button_pc_product": "A|1|2",
     *         "naver_button_pc_basket": "A|1|1",
     *         "naver_button_mobile_product": "MA|1|2",
     *         "naver_button_mobile_basket": "MA|1|1"
     *     }
     * }
     * ```
     */
    createNaverPaySettings(
      input: CreateNaverPaySettingsInput,
      options?: AdminRequestOptions<CreateNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<CreateNaverPaySettingsOutput>>;
    /**
     * @description
     * 쇼핑몰의 네이버페이 공통인증키를 수정합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "shop_no": 1,
     *         "authentication_key": "s_abcdefg"
     *     }
     * }
     * ```
     */
    updateNaverPaySettings(
      input: UpdateNaverPaySettingsInput,
      options?: AdminRequestOptions<UpdateNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<UpdateNaverPaySettingsOutput>>;
  }
}
