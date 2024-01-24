import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 자동메시지 변수(Automessages arguments)는 자동메시지 발신 시 사용할 수 있는 변수를 확인하는 리소스입니다.
   */
  export interface AutomessagesArguments {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * 변수명
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 변수 설명
      * 
      * 
      */ 
    description: any;
    /**
      * @description
      * 변수 예제
      * 
      * 
      */ 
    sample: any;
    /**
      * @description
      * 메시지 표시 최대 글자수
      * 
      * 글자수 : 설정된 글자수 만큼 표시
      * 가변 : 글자수 제한 없이 모두 표시
      * 
      * 
      */ 
    string_length: any;
    /**
      * @description
      * 사용 가능 발송 상황
      * 
      * 
      */ 
    send_case: any;
  }

  export interface RetrieveTheListOfAvailableVariablesForAutomatedMessagesInput {
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

  export interface RetrieveTheListOfAvailableVariablesForAutomatedMessagesOutput {
    arguments: { 
    shop_no: number;
    name: string;
    description: string;
    sample: string;
    string_length: Cafe24Datetime;
    send_case: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 자동메시지 발송 설정내역을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-list-of-available-variables-for-automated-messages
     *
     * @example 응답 예시
     * ```json
     * {
     *     "arguments": [
     *         {
     *             "shop_no": 1,
     *             "name": "[NAME]",
     *             "description": "Customer name",
     *             "sample": "John Doe",
     *             "string_length": "3",
     *             "send_case": "All occasions"
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "[PRODUCT]",
     *             "description": "Product name",
     *             "sample": "iPhone X",
     *             "string_length": "8",
     *             "send_case": "Back-in-stock notification (Manual), Notification on shipment, Successful delivery, or Refund"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveTheListOfAvailableVariablesForAutomatedMessages(
      input: RetrieveTheListOfAvailableVariablesForAutomatedMessagesInput,
      options?: RequestOptions<RetrieveTheListOfAvailableVariablesForAutomatedMessagesOutput['arguments'][number]>,
    ): Promise<AxiosResponse<RetrieveTheListOfAvailableVariablesForAutomatedMessagesOutput>>;
  }
}
