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
   *
   *
   * 상점 계좌(Store accounts)는 쇼핑몰의 무통장입금 정보에 대한 기능입니다.
   */
  export interface StoreAccounts {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 무통장 입금 은행 ID
     *
     *
     */
    bankAccountId: any;
    /**
     * @description
     * 은행명
     *
     *
     */
    bankName: any;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     *
     * 최대글자수 : [50자]
     */
    bankCode: any;
    /**
     * @description
     * 계좌번호
     *
     *
     */
    bankAccountNo: any;
    /**
     * @description
     * 예금주
     *
     *
     */
    bankAccountHolder: any;
    /**
     * @description
     * 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useAccount: any;
  }

  export interface RetrieveAListOfStoreBankAccountsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
  }

  export interface RetrieveAListOfStoreBankAccountsOutput {
    accounts: {
      shopNo: number;
      bankAccountId: number;
      bankName: string;
      bankCode: string;
      bankAccountNo: Cafe24Datetime;
      bankAccountHolder: string;
      useAccount: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상점의 무통장입금 계좌정보를 목록으로 조회할 수 있습니다.
     * 은행명, 은행코드, 계좌번호 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-store-bank-accounts
     *
     * @example 응답 예시
     * ```json
     * {
     *     "accounts": [
     *         {
     *             "shop_no": 1,
     *             "bank_account_id": 1,
     *             "bank_name": "Hana Bank",
     *             "bank_code": "bank_81",
     *             "bank_account_no": "123123123",
     *             "bank_account_holder": "Depositor Name",
     *             "use_account": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "bank_account_id": 2,
     *             "bank_name": "KB Bank",
     *             "bank_code": "bank_04",
     *             "bank_account_no": "123456789",
     *             "bank_account_holder": "Depositor Name",
     *             "use_account": "T"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfStoreBankAccounts(
      input: RetrieveAListOfStoreBankAccountsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfStoreBankAccountsOutput['accounts'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfStoreBankAccountsOutput>>;
  }
}
