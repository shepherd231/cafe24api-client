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
   * Financials paymentgateway(PG 정보)는 PG사별 계약정보를 제공합니다.
   */
  export interface FinancialsPaymentgateway {
    /**
      * @description
      * PG사 발급 가맹점 ID
      * 
      * 
      */ 
    partnerId: any;
    /**
      * @description
      * PG 이름
      * 
      * inicis : 이니시스
      * kcp : KCP
      * allat : 올앳
      * ksnet : KSNET
      * dacom : 토스페이먼츠
      * allthegate : 올더게이트
      * settlebank : 세틀뱅크
      * smartro : 스마트로
      * kicc : 한국정보통신
      * mobilians : 모빌리언스
      * danal : 다날
      * 
      * 
      */ 
    paymentGatewayName: any;
    /**
      * @description
      * PG 계약일
      * 
      * 
      */ 
    contractDate: any;
    /**
      * @description
      * PG 세팅일
      * 
      * 
      */ 
    settingDate: any;
    /**
      * @description
      * 정산입금 은행코드
      * 
      * 은행 코드 조회하기 
      * 
      * 
      */ 
    bankCode: any;
    /**
      * @description
      * 정산입금 계좌정보
      * 
      * 
      */ 
    bankAccountNo: any;
    /**
      * @description
      * 금융제휴여부
      * 
      * T:제휴함
      * F: 제휴안함
      * 
      * 
      */ 
    status: any;
    /**
      * @description
      * 정산입금 예금주명
      * 
      * 
      */ 
    bankAccountName: any;
    /**
      * @description
      * 결제수단별 정산 정보
      * 
      * ※ payment_method_information 하위 요소에 대한 값 정의
      * 
      * 1) payment_method_information &gt; period(정산 기간)
      * 
      * D : 일별
      * W : 주별
      * M : 월별
      * 
      * 
      */ 
    paymentMethodInformation: any;
  }

  export interface RetrieveAListOfPaymentGatewayContractDetailsInput {
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    paymentGatewayName?: any;
    /**
      * @description
      * PG사 발급 가맹점 ID
      * 
      * 
      */ 
    partnerId?: any;
  }

  export interface RetrieveAListOfPaymentGatewayContractDetailsOutput {
    paymentgateway: { 
    partnerId: string;
    paymentGatewayName: string;
    contractDate: Cafe24Date;
    settingDate: Cafe24Date;
    status: Cafe24Enum;
    bankCode: string;
    bankAccountNo: Cafe24Datetime;
    bankAccountName: string;
    paymentMethodInformation: { 
    paymentMethod: string;
    period: Cafe24Enum;
    periodInformation: Cafe24Datetime;
    }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * PG사별 계약정보를 목록으로 조회할 수 있습니다.
     * PG계약일, 결제수단별 정산 정보 등을 확인할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-payment-gateway-contract-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentgateway": {
     *         "partner_id": "cafe24_Test",
     *         "payment_gateway_name": "cafe24payTest",
     *         "contract_date": "2020-01-01",
     *         "setting_date": "2020-01-02",
     *         "status": "T",
     *         "bank_code": "013",
     *         "bank_account_no": "123456789123",
     *         "bank_account_name": "Test",
     *         "payment_method_information": [
     *             {
     *                 "payment_method": "card",
     *                 "period": "M",
     *                 "period_information": "1"
     *             },
     *             {
     *                 "payment_method": "tcash",
     *                 "period": "W",
     *                 "period_information": "1"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAListOfPaymentGatewayContractDetails(
      input: RetrieveAListOfPaymentGatewayContractDetailsInput,
      options?: AdminRequestOptions<RetrieveAListOfPaymentGatewayContractDetailsOutput['paymentgateway']>,
    ): Promise<AxiosResponse<RetrieveAListOfPaymentGatewayContractDetailsOutput>>;
  }
}
