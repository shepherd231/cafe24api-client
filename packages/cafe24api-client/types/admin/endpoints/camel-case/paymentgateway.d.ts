import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * PG(Paymentgateway)를 통해 PG앱의 조회, 등록, 수정, 삭제가 가능합니다.
   */
  export interface Paymentgateway {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * PG사 발급 가맹점 ID
     *
     *
     */
    partnerId: any;
    /**
     * @description
     * 앱 클라이언트 ID
     *
     *
     */
    clientId: any;
    /**
     * @description
     * 추가 정보
     *
     *
     */
    additionalInformation: any;
    /**
     * @description
     * 가입비 분류
     *
     * PRE : 선불
     * PAD : 후불
     * FREE : 무료
     *
     *
     */
    membershipFeeType: any;
    /**
     * @description
     * 서비스 제한
     *
     * A : 회원/비회원 제한 없음
     * M : 회원만 제공
     *
     *
     */
    serviceLimitType: any;
  }

  export interface CreateAPaymentGatewayInput {
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
     * PG사 발급 가맹점 ID
     *
     * @required
     *
     * 최대글자수 : [50자]
     */
    partnerId: any;
    /**
     * @description
     * 추가 정보
     *
     * 배열 최대사이즈: [5]
     */
    additionalInformation?: {
      /**
       * @description
       * 추가항목 키
       *
       *
       */
      key?: any;
      /**
       * @description
       * 추가항목 값
       *
       *
       */
      value?: any;
    };
    /**
     * @description
     * 가입비 분류
     *
     * PRE : 선불
     * PAD : 후불
     * FREE : 무료
     *
     * 최대글자수 : [4자]
     */
    membershipFeeType?: any;
    /**
     * @description
     * 서비스 제한
     *
     * A : 회원/비회원 제한 없음
     * M : 회원만 제공
     *
     * @default A
     *
     * 최대글자수 : [1자]
     */
    serviceLimitType?: any;
  }

  export interface CreateAPaymentGatewayOutput {
    paymentgateway: {
      shopNo: number;
      partnerId: string;
      clientId: string;
      additionalInformation: {
        key: string;
        value: string;
      }[];
      membershipFeeType: string;
      serviceLimitType: Cafe24Enum;
    };
  }
  export interface UpdateAPaymentGatewayInput {
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
     * 앱 클라이언트 ID
     *
     * @required
     *
     * 최대글자수 : [50자]
     */
    clientId: any;
    /**
     * @description
     * PG사 발급 가맹점 ID
     *
     * 최대글자수 : [50자]
     */
    partnerId?: any;
    /**
     * @description
     * 추가 정보
     *
     * 배열 최대사이즈: [5]
     */
    additionalInformation?: {
      /**
       * @description
       * 추가항목 키
       *
       *
       */
      key?: any;
      /**
       * @description
       * 추가항목 값
       *
       *
       */
      value?: any;
    };
    /**
     * @description
     * 가입비 분류
     *
     * PRE : 선불
     * PAD : 후불
     * FREE : 무료
     *
     * 최대글자수 : [4자]
     */
    membershipFeeType?: any;
    /**
     * @description
     * 서비스 제한
     *
     * A : 회원/비회원 제한 없음
     * M : 회원만 제공
     *
     * @default A
     *
     * 최대글자수 : [1자]
     */
    serviceLimitType?: any;
  }

  export interface UpdateAPaymentGatewayOutput {
    paymentgateway: {
      shopNo: number;
      partnerId: string;
      clientId: string;
      additionalInformation: {
        key: string;
        value: string;
      }[];
      membershipFeeType: string;
      serviceLimitType: Cafe24Enum;
    };
  }
  export interface DeleteAPaymentGatewayInput {
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
     * 앱 클라이언트 ID
     *
     * @required
     *
     * 최대글자수 : [50자]
     */
    clientId: any;
  }

  export interface DeleteAPaymentGatewayOutput {
    paymentgateway: {
      shopNo: number;
      clientId: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 새로운 PG를 등록할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-payment-gateway
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentgateway": {
     *         "shop_no": 1,
     *         "partner_id": "partner1",
     *         "client_id": "t9v2be4eYDif11NVvHbSsG",
     *         "additional_information": [
     *             {
     *                 "key": "version",
     *                 "value": "s1.6"
     *             },
     *             {
     *                 "key": "hash_code",
     *                 "value": "aXKB4Pe"
     *             }
     *         ],
     *         "membership_fee_type": "FREE",
     *         "service_limit_type": "A"
     *     }
     * }
     * ```
     */
    createAPaymentGateway(
      input: CreateAPaymentGatewayInput,
      options?: RequestOptions<CreateAPaymentGatewayOutput['paymentgateway']>,
    ): Promise<AxiosResponse<CreateAPaymentGatewayOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 PG를 수정할 수 있습니다.
     * PG사 발급 사맹점 ID, 가입비 여부 등을 수정할 수 있습니다.
     * 수정을 위해서는 PG앱의 클라이언트 아이디가 필수입니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-payment-gateway
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentgateway": {
     *         "shop_no": 1,
     *         "partner_id": "partner1",
     *         "client_id": "t9v2be4eYDif11NVvHbSsG",
     *         "additional_information": [
     *             {
     *                 "key": "version",
     *                 "value": "s1.6"
     *             },
     *             {
     *                 "key": "hash_code",
     *                 "value": "aXKB4Pe"
     *             }
     *         ],
     *         "membership_fee_type": "FREE",
     *         "service_limit_type": "A"
     *     }
     * }
     * ```
     */
    updateAPaymentGateway(
      input: UpdateAPaymentGatewayInput,
      options?: RequestOptions<UpdateAPaymentGatewayOutput['paymentgateway']>,
    ): Promise<AxiosResponse<UpdateAPaymentGatewayOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 PG를 삭제할 수 있습니다.
     * 삭제를 위해서는 PG앱의 클라이언트 아이디가 필수입니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-payment-gateway
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentgateway": {
     *         "shop_no": 1,
     *         "client_id": "t9v2be4eYDif11NVvHbSsG"
     *     }
     * }
     * ```
     */
    deleteAPaymentGateway(
      input: DeleteAPaymentGatewayInput,
      options?: RequestOptions<DeleteAPaymentGatewayOutput['paymentgateway']>,
    ): Promise<AxiosResponse<DeleteAPaymentGatewayOutput>>;
  }
}
