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
   * 웹훅 로그(Webhooks logs)를 통해 앱에서 발생한 웹훅의 로그를 조회할 수 있습니다.
   */
  export interface WebhooksLogs {
    /**
      * @description
      * 로그 ID
      * 
      * 
      */ 
    logId: any;
    /**
      * @description
      * 로그 종류
      * 
      * G : 일반 발송
      * R : 재발송
      * T : 테스트 발송
      * 
      * 
      */ 
    logType: any;
    /**
      * @description
      * 이벤트 번호
      * 
      * 
      */ 
    eventNo: any;
    /**
      * @description
      * 쇼핑몰 ID
      * 
      * 
      */ 
    mallId: any;
    /**
      * @description
      * Trace ID
      * 
      * 
      */ 
    traceId: any;
    /**
      * @description
      * 전송일시
      * 
      * 
      */ 
    requestedTime: any;
    /**
      * @description
      * 요청 URL
      * 
      * 
      */ 
    requestEndpoint: any;
    /**
      * @description
      * 요청 내용
      * 
      * 
      */ 
    requestBody: any;
    /**
      * @description
      * 웹훅 발송 성공 여부
      * 
      * T : 성공
      * F : 실패
      * 
      * 
      */ 
    success: any;
    /**
      * @description
      * 응답 http code
      * 
      * 
      */ 
    responseHttpCode: any;
    /**
      * @description
      * 응답 내용
      * 
      * 
      */ 
    responseBody: any;
  }

  export interface RetrieveAListOfWebhookLogsInput {
    /**
      * @description
      * 발송 시작일시
      * 
      * 날짜
      */ 
    requestedStartDate?: any;
    /**
      * @description
      * 발송 종료일시
      * 
      * 날짜
      */ 
    requestedEndDate?: any;
    /**
      * @description
      * 웹훅 발송 성공 여부
      * 
      * T : 성공
      * F : 실패
      * 
      * 
      */ 
    success?: any;
    /**
      * @description
      * 로그 종류
      * 
      * G : 일반 발송
      * R : 재발송
      * T : 테스트 발송
      * 
      * 
      */ 
    logType?: any;
    /**
      * @description
      * 해당 로그 ID 이후 검색
      * 
      * 
      */ 
    sinceLogId?: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * 최소: [1]~최대: [10000]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfWebhookLogsOutput {
    logs: { 
    logId: string;
    logType: Cafe24Enum;
    eventNo: number;
    mallId: string;
    traceId: string;
    requestedTime: Cafe24Datetime;
    requestEndpoint: string;
    requestBody: string;
    success: Cafe24Enum;
    responseHttpCode: any;
    responseBody: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 앱에서 발생한 웹훅 로그의 목록을 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-webhook-logs
     *
     * @example 응답 예시
     * ```json
     * {
     *     "logs": [
     *         {
     *             "log_id": "zV7Ur3oBsq3B53njmYm-",
     *             "log_type": "G",
     *             "event_no": 90001,
     *             "mall_id": "bestshop",
     *             "trace_id": "0d492786-ae82-4073-aa88-0991b08ee732",
     *             "requested_time": "2020-08-03T10:10:10+09:00",
     *             "request_endpoint": "https://app.com/webhooks/regist_product",
     *             "request_body": "{\"event_no\":90001,\"resource\":{\"mall_id\":\"cafe24bestshop\",\"event_shop_no\":\"1\",\"product_code\":\"P000CCAO\"}}",
     *             "success": "T",
     *             "response_http_code": null,
     *             "response_body": null
     *         },
     *         {
     *             "log_id": "dV7Ur3oBsq3B53njJIbP",
     *             "log_type": "G",
     *             "event_no": 90001,
     *             "mall_id": "bestshop",
     *             "trace_id": "518e78fd-e59e-45e4-8fe7-46620ea9b000",
     *             "requested_time": "2020-08-03T10:10:10+09:00",
     *             "request_endpoint": "https://app.com/webhooks/regist_product",
     *             "request_body": "{\"event_no\":90001,\"resource\":{\"mall_id\":\"cafe24bestshop\",\"event_shop_no\":\"1\",\"product_code\":\"P000CCAP\"}}",
     *             "success": "F",
     *             "response_http_code": 403,
     *             "response_body": "<html><head><title>403 Forbidden</title></head><body><center><h1>403 Forbidden</h1></center></body></html>"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfWebhookLogs(
      input: RetrieveAListOfWebhookLogsInput,
      options?: AdminRequestOptions<RetrieveAListOfWebhookLogsOutput['logs'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfWebhookLogsOutput>>;
  }
}
