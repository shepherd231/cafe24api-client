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
   * 환율 정보(Currency)는 쇼핑몰의 화폐 정보, 환율 정보 등을 확인할 수 있는 리소스입니다.
   */
  export interface Currency {
    /**
      * @description
      * 결제 화폐 환율 정보
      * 
      * 
      */ 
    exchange_rate: any;
    /**
      * @description
      * 기준 화폐 코드
      * 
      * 해당 쇼핑몰의 기본쇼핑몰에서 사용하는 화폐 코드. 기준 화폐란 일반적으로 쇼핑몰 운영자가 속한 국가에서 통용되는 화폐를 의미한다.
      * 
      * 
      */ 
    standard_currency_code: any;
    /**
      * @description
      * 기준 화폐 심볼
      * 
      * 해당 쇼핑몰의 기본쇼핑몰에서 사용하는 화폐의 화폐 기호. 기준 화폐란 일반적으로 쇼핑몰 운영자가 속한 국가에서 통용되는 화폐를 의미한다.
      * 
      * 
      */ 
    standard_currency_symbol: any;
    /**
      * @description
      * 결제 화폐 코드
      * 
      * 
      */ 
    shop_currency_code: any;
    /**
      * @description
      * 결제 화폐 심볼
      * 
      * 
      */ 
    shop_currency_symbol: any;
    /**
      * @description
      * 결제 화폐 표시 방식
      * 
      * 
      */ 
    shop_currency_format: any;
  }

  export interface RetrieveCurrencySettingsInput {
  }

  export interface RetrieveCurrencySettingsOutput {
    currency: { 
    exchange_rate: number;
    standard_currency_code: string;
    standard_currency_symbol: Cafe24Enum;
    shop_currency_code: string;
    shop_currency_symbol: Cafe24Enum;
    shop_currency_format: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에서 사용하는 화폐의 정보와 환율 정보를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-currency-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "currency": {
     *         "exchange_rate": 1004,
     *         "standard_currency_code": "KRW",
     *         "standard_currency_symbol": "￦",
     *         "shop_currency_code": "USD",
     *         "shop_currency_symbol": "$",
     *         "shop_currency_format": "￦[:PRICE:]"
     *     }
     * }
     * ```
     */
    retrieveCurrencySettings(
      input?: RetrieveCurrencySettingsInput,
      options?: AdminRequestOptions<RetrieveCurrencySettingsOutput['currency']>,
    ): Promise<AxiosResponse<RetrieveCurrencySettingsOutput>>;
  }
}
