import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * PG의 결제수단(Paymentgateway paymentmethods)은 쇼핑몰에 등록된 PG의 결제수단에 대한 기능입니다.
   * 특정 PG에서 제공하고 있는 결제수단의 등록, 조회, 수정, 삭제가 가능합니다.
   * 
   * 
   */
  export interface PaymentgatewayPaymentmethods {
    /**
      * @description
      * 앱 클라이언트 ID
      * 
      * 
      */ 
    client_id: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * 
      */ 
    payment_method_code: any;
    /**
      * @description
      * 결제수단
      * 
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * cvs : 편의점
      * deferpay : 후불결제
      * etc : 기타
      * 
      * 
      */ 
    payment_method: any;
    /**
      * @description
      * 결제수단명
      * 
      * 
      */ 
    payment_method_name: any;
    /**
      * @description
      * 결제수단 이미지 경로
      * 
      * 
      */ 
    payment_method_url: any;
    /**
      * @description
      * 이용가능한 멀티쇼핑몰 번호
      * 
      * 
      */ 
    available_shop_no: any;
  }

  export interface RetrieveAListOfPaymentGatewayMethodsInput {
    /**
      * @description
      * 앱 클라이언트 ID
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    client_id: any;
  }

  export interface RetrieveAListOfPaymentGatewayMethodsOutput {
    paymentmethods: { 
    client_id: string;
    payment_method_code: string;
    payment_method: string;
    payment_method_name: string;
    payment_method_url: string;
    available_shop_no: Cafe24Datetime;
    }[];
  }
  export interface CreateAPaymentGatewayMethodInput {
    /**
      * @description
      * 앱 클라이언트 ID
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    client_id: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    payment_method_code: any;
    /**
      * @description
      * 결제수단
      * 
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * cvs : 편의점
      * deferpay : 후불결제
      * etc : 기타
      * 
      * @required
      */ 
    payment_method: any;
    /**
      * @description
      * 결제수단명
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    payment_method_name: any;
    /**
      * @description
      * 결제수단 이미지 경로
      * 
      * 지원 확장자 : &#39;png&#39;, &#39;jpg&#39;, &#39;jpeg&#39;
      * 
      * @required
      * 
      * 최대글자수 : [200자]
      */ 
    payment_method_url: any;
    /**
      * @description
      * 이용가능한 멀티쇼핑몰 번호
      * 
      * 
      */ 
    available_shop_no?: any;
  }

  export interface CreateAPaymentGatewayMethodOutput {
    paymentmethod: { 
    client_id: string;
    payment_method_code: string;
    payment_method: string;
    payment_method_name: string;
    payment_method_url: string;
    available_shop_no: Cafe24Datetime;
    };
  }
  export interface UpdateAPaymentMethodOfAPaymentGatewayInput {
    /**
      * @description
      * 앱 클라이언트 ID
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    client_id: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    payment_method_code: any;
    /**
      * @description
      * 결제수단
      * 
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * cvs : 편의점
      * deferpay : 후불결제
      * etc : 기타
      * 
      * 
      */ 
    payment_method?: any;
    /**
      * @description
      * 결제수단명
      * 
      * 최대글자수 : [50자]
      */ 
    payment_method_name?: any;
    /**
      * @description
      * 결제수단 이미지 경로
      * 
      * 지원 확장자 : &#39;png&#39;, &#39;jpg&#39;, &#39;jpeg&#39;
      * 
      * 최대글자수 : [200자]
      */ 
    payment_method_url?: any;
    /**
      * @description
      * 이용가능한 멀티쇼핑몰 번호
      * 
      * 
      */ 
    available_shop_no?: any;
  }

  export interface UpdateAPaymentMethodOfAPaymentGatewayOutput {
    paymentmethod: { 
    client_id: string;
    payment_method_code: string;
    payment_method: string;
    payment_method_name: string;
    payment_method_url: string;
    available_shop_no: Cafe24Datetime;
    };
  }
  export interface DeleteAPaymentMethodOfAPaymentGatewayInput {
    /**
      * @description
      * 앱 클라이언트 ID
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    client_id: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    payment_method_code: any;
  }

  export interface DeleteAPaymentMethodOfAPaymentGatewayOutput {
    paymentmethod: { 
    client_id: string;
    payment_method_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 앱으로 설치한 쇼핑몰의 PG에 대해서 지원하는 결제수단을 조회할 수 있습니다.
     * 결제수단 코드, 결제수단, 결제수단명 등을 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-payment-gateway-methods
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentmethods": [
     *         {
     *             "client_id": "t9v2be4eYDif11NVvHbSsG",
     *             "payment_method_code": "fd23rerewr45678",
     *             "payment_method": "tcash",
     *             "payment_method_name": "hello123",
     *             "payment_method_url": "http://img.cafe24.com/img/simplexi/common/h1_logo.png",
     *             "available_shop_no": "1,3"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfPaymentGatewayMethods(
      input: RetrieveAListOfPaymentGatewayMethodsInput,
      options?: RequestOptions<RetrieveAListOfPaymentGatewayMethodsOutput['paymentmethods'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfPaymentGatewayMethodsOutput>>;
    /**
     * @description
     * 앱으로 설치한 쇼핑몰의 PG에 대해서 결제수단을 등록할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-payment-gateway-method
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentmethod": {
     *         "client_id": "t9v2be4eYDif11NVvHbSsG",
     *         "payment_method_code": "fd23rerewr45678",
     *         "payment_method": "tcash",
     *         "payment_method_name": "hello123",
     *         "payment_method_url": "http://img.cafe24.com/img/simplexi/common/h1_logo.png",
     *         "available_shop_no": "1,3"
     *     }
     * }
     * ```
     */
    createAPaymentGatewayMethod(
      input: CreateAPaymentGatewayMethodInput,
      options?: RequestOptions<CreateAPaymentGatewayMethodOutput['paymentmethod']>,
    ): Promise<AxiosResponse<CreateAPaymentGatewayMethodOutput>>;
    /**
     * @description
     * 앱으로 설치한 쇼핑몰의 PG에 대해서 특정 결제수단을 수정할 수 있습니다.
     * 결제수단, 결제수단명 등을 수정할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-payment-method-of-a-payment-gateway
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentmethod": {
     *         "client_id": "t9v2be4eYDif11NVvHbSsG",
     *         "payment_method_code": "fd23rerewr45678",
     *         "payment_method": "tcash",
     *         "payment_method_name": "hello123",
     *         "payment_method_url": "http://img.cafe24.com/img/simplexi/common/h1_logo.png",
     *         "available_shop_no": "1,3,4"
     *     }
     * }
     * ```
     */
    updateAPaymentMethodOfAPaymentGateway(
      input: UpdateAPaymentMethodOfAPaymentGatewayInput,
      options?: RequestOptions<UpdateAPaymentMethodOfAPaymentGatewayOutput['paymentmethod']>,
    ): Promise<AxiosResponse<UpdateAPaymentMethodOfAPaymentGatewayOutput>>;
    /**
     * @description
     * 앱으로 설치한 쇼핑몰의 PG에 대해서 특정 결제수단을 삭제할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-payment-method-of-a-payment-gateway
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentmethod": {
     *         "client_id": "t9v2be4eYDif11NVvHbSsG",
     *         "payment_method_code": "fd23rerewr45678"
     *     }
     * }
     * ```
     */
    deleteAPaymentMethodOfAPaymentGateway(
      input: DeleteAPaymentMethodOfAPaymentGatewayInput,
      options?: RequestOptions<DeleteAPaymentMethodOfAPaymentGatewayOutput['paymentmethod']>,
    ): Promise<AxiosResponse<DeleteAPaymentMethodOfAPaymentGatewayOutput>>;
  }
}
