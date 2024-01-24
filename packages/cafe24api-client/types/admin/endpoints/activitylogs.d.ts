import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 활동로그(Activitylog)는 쇼핑몰 관리자가 쇼핑몰 어드민에서 진행한 운영 활동을 기록한 내역입니다.
   * 활동로그 리소스를 사용하면 쇼핑몰의 활동로그를 생성하거나 조회할 수 있습니다.
   */
  export interface Activitylogs {
    /**
     * @description
     * 업무처리 넘버
     *
     *
     */
    process_no: any;
    /**
     * @description
     * 모드
     *
     * P : PC 어드민
     * M : 모바일 어드민
     * S : (구)스마트모드
     *
     *
     */
    mode: any;
    /**
     * @description
     * 구분
     *
     *
     */
    type: any;
    /**
     * @description
     * 업무내용
     *
     *
     */
    content: any;
    /**
     * @description
     * 처리일시
     *
     *
     */
    process_date: any;
    /**
     * @description
     * 처리자
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    manager_id: any;
    /**
     * @description
     * 처리자 타입
     *
     *
     */
    manager_type: any;
  }

  export interface RetrieveAListOfActionLogsInput {
    /**
     * @description
     * 처리자 타입
     *
     * P : 대표운영자
     * A : 부운영자
     * S : 공급사
     *
     *
     */
    manager_type?: any;
    /**
     * @description
     * 처리자
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    manager_id?: any;
    /**
     * @description
     * 모드
     *
     * P : PC 어드민
     * M : 모바일 어드민
     * S : (구)스마트모드
     *
     *
     */
    mode?: any;
    /**
     * @description
     * 구분
     *
     *
     */
    type?: any;
    /**
     * @description
     * 업무내용
     *
     * 최대글자수 : [500자]
     */
    content?: any;
    /**
     * @description
     * 검색 시작일
     *
     * @required
     *
     * 날짜
     */
    start_date: any;
    /**
     * @description
     * 검색 종료일
     *
     * @required
     *
     * 날짜
     */
    end_date: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfActionLogsOutput {
    activitylogs: {
      process_no: number;
      mode: Cafe24Enum;
      type: string;
      content: string;
      process_date: Cafe24Datetime;
      manager_id: string;
      manager_type: string;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface RetrieveAnActionLogInput {
    /**
     * @description
     * 업무처리 넘버
     *
     * @required
     */
    process_no: any;
  }

  export interface RetrieveAnActionLogOutput {
    activitylog: {
      process_no: number;
      type: string;
      manager_id: string;
      manager_type: string;
      process_date: Cafe24Datetime;
      content: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 활동로그를 목록으로 조회할 수 있습니다.
     * 운영 활동을 한 사람이 누구인지, 어떤 메뉴에서 언제 진행했는지 확인할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-action-logs
     *
     * @example 응답 예시
     * ```json
     * {
     *     "activitylogs": [
     *         {
     *             "process_no": 130,
     *             "mode": "P",
     *             "type": "product management > product management > product list",
     *             "content": "Edit product name",
     *             "process_date": "2020-02-01T00:00:00+09:00",
     *             "manager_id": "sampleid",
     *             "manager_type": "representative operator"
     *         },
     *         {
     *             "process_no": 131,
     *             "mode": "P",
     *             "type": "product management > product management > product list",
     *             "content": "Edit product name",
     *             "process_date": "2020-02-02T00:00:00+09:00",
     *             "manager_id": "sampleid",
     *             "manager_type": "representative operator"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/activitylogs?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfActionLogs(
      input: RetrieveAListOfActionLogsInput,
      options?: RequestOptions<
        RetrieveAListOfActionLogsOutput['activitylogs'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfActionLogsOutput>>;
    /**
     * @description
     * 활동로그를 상세 조회할 수 있습니다.
     * 운영 활동을 한 사람이 누구인지, 어떤 메뉴에서 언제 진행했는지 확인할 수 있으며, content를 통해 진행한 내역을 상세하게 확인할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-action-log
     *
     * @example 응답 예시
     * ```json
     * {
     *     "activitylog": {
     *         "process_no": 130,
     *         "type": "product management > product management > product list",
     *         "manager_id": "sampleid",
     *         "manager_type": "representative operator",
     *         "process_date": "2020-02-01T00:00:00+09:00",
     *         "content": "Edit product name"
     *     }
     * }
     * ```
     */
    retrieveAnActionLog(
      input: RetrieveAnActionLogInput,
      options?: RequestOptions<RetrieveAnActionLogOutput['activitylog']>,
    ): Promise<AxiosResponse<RetrieveAnActionLogOutput>>;
  }
}
