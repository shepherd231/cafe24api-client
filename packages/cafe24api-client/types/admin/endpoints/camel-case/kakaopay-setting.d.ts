import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 쇼핑몰의 카카오페이 설정을 조회하거나 수정할 수 있습니다.
   */
  export interface KakaopaySetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 입점시 부여 받는 판매점의 고유 식별자
     *
     *
     */
    shopKey: any;
    /**
     * @description
     * 연동사(ECP/독립몰)에서 이미 사용중인 카카오 광고 픽셀 ID
     *
     *
     */
    pixelCode: any;
    /**
     * @description
     * 카카오페이 구매 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useKakaopay: any;
    /**
     * @description
     * 쇼핑몰 상세상품 페이지 버튼 사이즈
     *
     *
     */
    productDetailButtonSize: any;
    /**
     * @description
     * 쇼핑몰 장바구니 페이지 버튼 사이즈
     *
     *
     */
    basketButtonSize: any;
    /**
     * @description
     * 쇼핑몰 다크모드 적용여부
     *
     * T : 활성화
     * F : 비활성화
     *
     *
     */
    useDarkMode: any;
    /**
     * @description
     * 입점시 부여 받는 판매점의 버튼 인증
     *
     *
     */
    buttonAuthorizationKey: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdpartyAgree: any;
    /**
     * @description
     * 제3자 제공 동의 날짜
     *
     *
     */
    thirdpartyAgreeDate: any;
  }

  export interface RetrieveSettingsForKakaopayOrdersInput {
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

  export interface RetrieveSettingsForKakaopayOrdersOutput {
    kakaopay: {
      shopNo: number;
      shopKey: string;
      pixelCode: Cafe24Datetime;
      useKakaopay: Cafe24Enum;
      productDetailButtonSize: {
        pc: string;
        mobile: string;
      };
      basketButtonSize: {
        pc: string;
        mobile: string;
      };
      useDarkMode: Cafe24Enum;
      buttonAuthorizationKey: string;
      thirdpartyAgree: Cafe24Enum;
      thirdpartyAgreeDate: Cafe24Datetime;
    };
  }
  export interface UpdateSettingsForKakaopayOrdersInput {
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
     * 입점시 부여 받는 판매점의 고유 식별자
     *
     *
     */
    shopKey?: any;
    /**
     * @description
     * 연동사(ECP/독립몰)에서 이미 사용중인 카카오 광고 픽셀 ID
     *
     *
     */
    pixelCode?: any;
    /**
     * @description
     * 카카오페이 구매 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useKakaopay?: any;
    /**
     * @description
     * 쇼핑몰 상세상품 페이지 버튼 사이즈
     *
     *
     */
    productDetailButtonSize?: {
      /**
       * @description
       * pc
       *
       *
       */
      pc?: any;
      /**
       * @description
       * mobile
       *
       *
       */
      mobile?: any;
    };
    /**
     * @description
     * 쇼핑몰 장바구니 페이지 버튼 사이즈
     *
     *
     */
    basketButtonSize?: {
      /**
       * @description
       * pc
       *
       *
       */
      pc?: any;
      /**
       * @description
       * mobile
       *
       *
       */
      mobile?: any;
    };
    /**
     * @description
     * 쇼핑몰 다크모드 적용여부
     *
     * T : 활성화
     * F : 비활성화
     *
     *
     */
    useDarkMode?: any;
    /**
     * @description
     * 입점시 부여 받는 판매점의 버튼 인증
     *
     *
     */
    buttonAuthorizationKey?: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdpartyAgree?: any;
    /**
     * @description
     * 제3자 제공 동의 날짜
     *
     * 날짜
     */
    thirdpartyAgreeDate?: any;
  }

  export interface UpdateSettingsForKakaopayOrdersOutput {
    kakaopay: {
      shopNo: number;
      shopKey: string;
      pixelCode: Cafe24Datetime;
      useKakaopay: Cafe24Enum;
      productDetailButtonSize: {
        pc: string;
        mobile: string;
      };
      basketButtonSize: {
        pc: string;
        mobile: string;
      };
      useDarkMode: Cafe24Enum;
      buttonAuthorizationKey: string;
      thirdpartyAgree: Cafe24Enum;
      thirdpartyAgreeDate: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 카카오페이 설정을 조회합니다.
     * 카카오페이 구매 사용여부, 제3자 제공 동의 여부 등의 정보를 확인할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-settings-for-kakaopay-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaopay": {
     *         "shop_no": 1,
     *         "shop_key": "S12345",
     *         "pixel_code": "653867785974233605",
     *         "use_kakaopay": "T",
     *         "product_detail_button_size": {
     *             "pc": "210x83",
     *             "mobile": "290x95"
     *         },
     *         "basket_button_size": {
     *             "pc": "210x83",
     *             "mobile": "290x95"
     *         },
     *         "use_dark_mode": "T",
     *         "button_authorization_key": "0e398cb0e4ad49fba0e8ca67556eee1b",
     *         "thirdparty_agree": "T",
     *         "thirdparty_agree_date": "2021-07-15T17:59:00+09:00"
     *     }
     * }
     * ```
     */
    retrieveSettingsForKakaopayOrders(
      input: RetrieveSettingsForKakaopayOrdersInput,
      options?: RequestOptions<RetrieveSettingsForKakaopayOrdersInput>,
    ): Promise<AxiosResponse<RetrieveSettingsForKakaopayOrdersOutput>>;
    /**
     * @description
     * 쇼핑몰의 카카오페이 설정을 수정합니다.
     * 카카오페이 구매 사용여부, 쇼핑몰 다크모드 적용여부 등의 정보를 수정할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-settings-for-kakaopay-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaopay": {
     *         "shop_no": 1,
     *         "shop_key": "S12345",
     *         "pixel_code": "653867785974233605",
     *         "use_kakaopay": "T",
     *         "product_detail_button_size": {
     *             "pc": "210x83",
     *             "mobile": "290x95"
     *         },
     *         "basket_button_size": {
     *             "pc": "210x83",
     *             "mobile": "290x95"
     *         },
     *         "use_dark_mode": "T",
     *         "button_authorization_key": "0e398cb0e4ad49fba0e8ca67556eee1b",
     *         "thirdparty_agree": "T",
     *         "thirdparty_agree_date": "2021-07-15T17:59:00+09:00"
     *     }
     * }
     * ```
     */
    updateSettingsForKakaopayOrders(
      input: UpdateSettingsForKakaopayOrdersInput,
      options?: RequestOptions<UpdateSettingsForKakaopayOrdersInput>,
    ): Promise<AxiosResponse<UpdateSettingsForKakaopayOrdersOutput>>;
  }
}
