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
   * 스크립트태그(Scripttags)는 앱에서 쇼핑몰의 특정 화면(Page)에 스크립트를 설치하기 위해 사용할 수 있는 기능입니다.
   * 스크립트 API를 사용해 쇼핑몰의 디자인을 변경하지 않고 쇼핑몰 화면에 스크립트를 쉽게 추가할 수 있습니다.
   */
  export interface Scripttags {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호
     *
     *
     */
    script_no: any;
    /**
     * @description
     * Client ID
     *
     * 스크립트를 설치한 Client의 ID
     *
     *
     */
    client_id: any;
    /**
     * @description
     * 원본 script 경로
     *
     * 설치할 스크립트의 원본 경로(절대 경로)
     *
     * URL
     */
    src: any;
    /**
     * @description
     * 화면 경로
     *
     * 스크립트를 표시할 &#34;화면 경로&#34;. 화면 경로는 화면의 페이지 경로가 아니라 쇼핑몰의 각 페이지에 부여된 특정한 역할을 의미함.
     * (예 : 상품분류(product_list)에 스크립트를 삽입할 경우 쇼핑몰에서 상품분류로 사용되는 모든 페이지에 스크립트가 노출됨)
     *
     * 화면의 역할은 해당 페이지에 사용된 모듈에 따라 자동으로 부여됨. 임의의 페이지에 상품분류 모듈을 추가하면 해당 페이지는 &#34;상품분류&#34; 역할로 인식된다. 쇼핑몰 관리자 화면의 [쇼핑몰 설정 &gt; 사이트 설정 &gt; &#39;사이트 환경 설정 &gt; 쇼핑몰 환경 설정 &gt; 화면경로 &gt; 화면경로 설정&#39;]에서 각 페이지에 부여된 화면 역할을 조회하고 설정할 수 있음.
     *
     * &#34;all&#34; 일 경우 전체 페이지에 스크립트가 적용됨.
     *
     * display_location_code
     *
     *
     */
    display_location: any;
    /**
     * @description
     * 제외 경로
     *
     *
     */
    exclude_path: any;
    /**
     * @description
     * 스킨 번호
     *
     * 스크립트를 적용할 스킨 번호
     *
     *
     */
    skin_no: any;
    /**
     * @description
     * 하위 리소스 무결성
     *
     * 스크립트 위변조를 방지하기위한 무결성 검증용 해시. (sha384, sha512 해시 알고리즘 지원)
     *
     * Integrity 해시 생성방법 참고
     *
     *
     */
    integrity: any;
    /**
     * @description
     * 생성일
     *
     * 스크립트 설치 날짜
     *
     *
     */
    created_date: any;
    /**
     * @description
     * 수정일
     *
     * 스크립트 수정 날짜
     *
     *
     */
    updated_date: any;
  }

  export interface RetrieveAListOfScriptTagsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호 검색
     *
     *
     */
    script_no?: any;
    /**
     * @description
     * 원본 script 경로
     *
     * 원본 스크립트 경로 검색
     *
     * URL
     */
    src?: any;
    /**
     * @description
     * 화면 경로
     *
     * 스크립트를 표시할 &#34;화면 경로&#34;. 화면 경로는 화면의 페이지 경로가 아니라 쇼핑몰의 각 페이지에 부여된 특정한 역할을 의미함.
     * (예 : 상품분류(product_list)에 스크립트를 삽입할 경우 쇼핑몰에서 상품분류로 사용되는 모든 페이지에 스크립트가 노출됨)
     *
     * 화면의 역할은 해당 페이지에 사용된 모듈에 따라 자동으로 부여됨. 임의의 페이지에 상품분류 모듈을 추가하면 해당 페이지는 &#34;상품분류&#34; 역할로 인식된다. 쇼핑몰 관리자 화면의 [쇼핑몰 설정 &gt; 사이트 설정 &gt; &#39;사이트 환경 설정 &gt; 쇼핑몰 환경 설정 &gt; 화면경로 &gt; 화면경로 설정&#39;]에서 각 페이지에 부여된 화면 역할을 조회하고 설정할 수 있음.
     *
     * &#34;all&#34; 일 경우 전체 페이지에 스크립트가 적용됨.
     *
     * display_location_code
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    display_location?: any;
    /**
     * @description
     * 제외 경로
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    exclude_path?: any;
    /**
     * @description
     * 스킨 번호
     *
     * 스크립트를 적용할 스킨 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    skin_no?: any;
    /**
     * @description
     * 하위 리소스 무결성
     *
     *
     */
    integrity?: any;
    /**
     * @description
     * 스크립트 설치일 검색 시작일
     *
     * 스크립트 설치 날짜가 해당 날짜 이후인 스크립트 검색
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    created_start_date?: any;
    /**
     * @description
     * 스크립트 설치일 검색 종료일
     *
     * 스크립트 설치 날짜가 해당 날짜 이전인 스크립트 검색
     * 검색 시작일과 같이 사용해야함.
     *
     * 날짜
     */
    created_end_date?: any;
    /**
     * @description
     * 스크립트 수정일 검색 시작일
     *
     * 스크립트 수정 날짜가 해당 날짜 이후인 스크립트 검색
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    updated_start_date?: any;
    /**
     * @description
     * 스크립트 수정일 검색 종료일
     *
     * 스크립트 수정 날짜가 해당 날짜 이전인 스크립트 검색
     * 검색 시작일과 같이 사용해야함.
     *
     * 날짜
     */
    updated_end_date?: any;
  }

  export interface RetrieveAListOfScriptTagsOutput {
    scripttags: {
      shop_no: number;
      script_no: Cafe24Datetime;
      client_id: string;
      src: string;
      display_location: string[];
      skin_no: number[];
      exclude_path: string[];
      integrity: string;
      created_date: Cafe24Datetime;
      updated_date: Cafe24Datetime;
    }[];
  }
  export interface RetrieveACountOfScriptTagsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호 검색
     *
     *
     */
    script_no?: any;
    /**
     * @description
     * 원본 script 경로
     *
     * 원본 스크립트 경로 검색
     *
     * URL
     */
    src?: any;
    /**
     * @description
     * 화면 경로
     *
     * 스크립트를 표시할 &#34;화면 경로&#34;. 화면 경로는 화면의 페이지 경로가 아니라 쇼핑몰의 각 페이지에 부여된 특정한 역할을 의미함.
     * (예 : 상품분류(product_list)에 스크립트를 삽입할 경우 쇼핑몰에서 상품분류로 사용되는 모든 페이지에 스크립트가 노출됨)
     *
     * 화면의 역할은 해당 페이지에 사용된 모듈에 따라 자동으로 부여됨. 임의의 페이지에 상품분류 모듈을 추가하면 해당 페이지는 &#34;상품분류&#34; 역할로 인식된다. 쇼핑몰 관리자 화면의 [쇼핑몰 설정 &gt; 사이트 설정 &gt; &#39;사이트 환경 설정 &gt; 쇼핑몰 환경 설정 &gt; 화면경로 &gt; 화면경로 설정&#39;]에서 각 페이지에 부여된 화면 역할을 조회하고 설정할 수 있음.
     *
     * &#34;all&#34; 일 경우 전체 페이지에 스크립트가 적용됨.
     *
     * display_location_code
     *
     *
     */
    display_location?: any;
    /**
     * @description
     * 스킨 번호
     *
     * 스크립트를 적용할 스킨 번호.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    skin_no?: any;
    /**
     * @description
     * 스크립트 설치일 검색 시작일
     *
     * 스크립트 설치 날짜가 해당 날짜 이후인 스크립트 검색
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    created_start_date?: any;
    /**
     * @description
     * 스크립트 설치일 검색 종료일
     *
     * 스크립트 설치 날짜가 해당 날짜 이전인 스크립트 검색
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    created_end_date?: any;
    /**
     * @description
     * 스크립트 수정일 검색 시작일
     *
     * 스크립트 수정 날짜가 해당 날짜 이후인 스크립트 검색
     * 검색 종료일과 같이 사용해야함.
     *
     * 날짜
     */
    updated_start_date?: any;
    /**
     * @description
     * 스크립트 수정일 검색 종료일
     *
     * 스크립트 수정 날짜가 해당 날짜 이전인 스크립트 검색
     * 검색 시작일과 같이 사용해야함.
     *
     * 날짜
     */
    updated_end_date?: any;
  }

  export interface RetrieveACountOfScriptTagsOutput {
    count: number;
  }
  export interface RetrieveAScriptTagInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호 검색
     *
     *
     */
    script_no?: any;
  }

  export interface RetrieveAScriptTagOutput {
    scripttag: {
      shop_no: number;
      script_no: Cafe24Datetime;
      client_id: string;
      src: string;
      display_location: string[];
      exclude_path: string[];
      skin_no: number[];
      integrity: string;
      created_date: Cafe24Datetime;
      updated_date: Cafe24Datetime;
    };
  }
  export interface CreateAScriptTagInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 원본 script 경로
     *
     * 설치할 스크립트의 원본 경로(절대 경로)
     *
     * URL
     */
    src?: any;
    /**
     * @description
     * 화면 경로
     *
     * 스크립트를 표시할 &#34;화면 경로&#34;. 화면 경로는 화면의 페이지 경로가 아니라 쇼핑몰의 각 페이지에 부여된 특정한 역할을 의미함.
     * (예 : 상품분류(product_list)에 스크립트를 삽입할 경우 쇼핑몰에서 상품분류로 사용되는 모든 페이지에 스크립트가 노출됨)
     *
     * 화면의 역할은 해당 페이지에 사용된 모듈에 따라 자동으로 부여됨. 임의의 페이지에 상품분류 모듈을 추가하면 해당 페이지는 &#34;상품분류&#34; 역할로 인식된다. 쇼핑몰 관리자 화면의 [쇼핑몰 설정 &gt; 사이트 설정 &gt; &#39;사이트 환경 설정 &gt; 쇼핑몰 환경 설정 &gt; 화면경로 &gt; 화면경로 설정&#39;]에서 각 페이지에 부여된 화면 역할을 조회하고 설정할 수 있음.
     *
     * &#34;all&#34; 일 경우 전체 페이지에 스크립트가 적용됨.
     *
     * display_location_code
     *
     * @required
     */
    display_location: any;
    /**
     * @description
     * 제외 경로
     *
     *
     */
    exclude_path?: any;
    /**
     * @description
     * 스킨 번호
     *
     * 스크립트를 적용할 스킨 번호.
     *
     *
     */
    skin_no?: any;
    /**
     * @description
     * 하위 리소스 무결성
     *
     * 스크립트 위변조를 방지하기위한 무결성 검증용 해시. (sha384, sha512 해시 알고리즘 지원)
     *
     * Integrity 해시 생성방법 참고
     *
     *
     */
    integrity?: any;
  }

  export interface CreateAScriptTagOutput {
    scripttag: {
      shop_no: number;
      script_no: Cafe24Datetime;
      client_id: string;
      src: string;
      display_location: string[];
      exclude_path: string[];
      skin_no: number[];
      integrity: string;
      created_date: Cafe24Datetime;
      updated_date: Cafe24Datetime;
    };
  }
  export interface UpdateAScriptTagInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호
     *
     * @required
     */
    script_no: any;
    /**
     * @description
     * 원본 script 경로
     *
     * 설치할 스크립트의 원본 경로(절대 경로)
     *
     * URL
     */
    src?: any;
    /**
     * @description
     * 화면 경로
     *
     * 스크립트를 표시할 &#34;화면 경로&#34;. 화면 경로는 화면의 페이지 경로가 아니라 쇼핑몰의 각 페이지에 부여된 특정한 역할을 의미함.
     * (예 : 상품분류(product_list)에 스크립트를 삽입할 경우 쇼핑몰에서 상품분류로 사용되는 모든 페이지에 스크립트가 노출됨)
     *
     * 화면의 역할은 해당 페이지에 사용된 모듈에 따라 자동으로 부여됨. 임의의 페이지에 상품분류 모듈을 추가하면 해당 페이지는 &#34;상품분류&#34; 역할로 인식된다. 쇼핑몰 관리자 화면의 [쇼핑몰 설정 &gt; 사이트 설정 &gt; &#39;사이트 환경 설정 &gt; 쇼핑몰 환경 설정 &gt; 화면경로 &gt; 화면경로 설정&#39;]에서 각 페이지에 부여된 화면 역할을 조회하고 설정할 수 있음.
     *
     * &#34;all&#34; 일 경우 전체 페이지에 스크립트가 적용됨.
     *
     * display_location_code
     *
     *
     */
    display_location?: any;
    /**
     * @description
     * 제외 경로
     *
     *
     */
    exclude_path?: any;
    /**
     * @description
     * 스킨 번호
     *
     * 스크립트를 적용할 스킨 번호.
     *
     *
     */
    skin_no?: any;
    /**
     * @description
     * 하위 리소스 무결성
     *
     * 스크립트 위변조를 방지하기위한 무결성 검증용 해시. (sha384, sha512 해시 알고리즘 지원)
     *
     * Integrity 해시 생성방법 참고
     *
     *
     */
    integrity?: any;
  }

  export interface UpdateAScriptTagOutput {
    scripttag: {
      shop_no: number;
      script_no: Cafe24Datetime;
      client_id: string;
      src: string;
      display_location: string[];
      exclude_path: string[];
      skin_no: number[];
      integrity: string;
      created_date: Cafe24Datetime;
      updated_date: Cafe24Datetime;
    };
  }
  export interface DeleteAScriptTagInput {
    /**
     * @description
     * script의 고유번호
     *
     * 스크립트의 고유 번호
     *
     * @required
     */
    script_no: any;
  }

  export interface DeleteAScriptTagOutput {
    scripttag: {
      script_no: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 설치된 스크립트를 목록으로 조회할 수 있습니다.
     * 스크립트 고유번호, 화면경로, 생성일 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-script-tags
     *
     * @example 응답 예시
     * ```json
     * {
     *     "scripttags": [
     *         {
     *             "shop_no": 1,
     *             "script_no": "1509432821494844",
     *             "client_id": "AMj8UZhBC9zsyTlFGI6PzC",
     *             "src": "https://yourdomain-sample.com/sample-script.js",
     *             "display_location": [
     *                 "BOARD_FREE_LIST"
     *             ],
     *             "skin_no": [
     *                 1,
     *                 2
     *             ],
     *             "exclude_path": [
     *                 "/board/free/list.html"
     *             ],
     *             "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo",
     *             "created_date": "2017-10-31T15:53:41+09:00",
     *             "updated_date": "2017-11-03T18:05:32+09:00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "script_no": "1509699932016345",
     *             "client_id": "AMj8UZhBC9zsyTlFGI6PzC",
     *             "src": "https://yourdomain-sample.com/sample-script.js",
     *             "display_location": [
     *                 "PRODUCT_LIST",
     *                 "PRODUCT_DETAIL"
     *             ],
     *             "skin_no": null,
     *             "exclude_path": null,
     *             "integrity": "sha512-liS6Zvj8DUdCw4DyxdGvS3Bo1REcsEQBia6/MKKl2xgVGlUspT5MlCmFfdbtM32rwqwEgIUzJrgUYZFUsKcEeg==",
     *             "created_date": "2017-11-03T18:05:32+09:00",
     *             "updated_date": "2017-11-03T18:05:32+09:00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfScriptTags(
      input: RetrieveAListOfScriptTagsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfScriptTagsOutput['scripttags'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfScriptTagsOutput>>;
    /**
     * @description
     * 쇼핑몰에 설치된 스크립트의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-script-tags
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfScriptTags(
      input: RetrieveACountOfScriptTagsInput,
      options?: AdminRequestOptions<RetrieveACountOfScriptTagsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfScriptTagsOutput>>;
    /**
     * @description
     * 쇼핑몰에 설치된 특정 스크립트를 조회할 수 있습니다.
     * 화면경로, 스킨번호, 생성일, 수정일 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-script-tag
     *
     * @example 응답 예시
     * ```json
     * {
     *     "scripttag": {
     *         "shop_no": 1,
     *         "script_no": "1509699932016345",
     *         "client_id": "AMj8UZhBC9zsyTlFGI6PzC",
     *         "src": "https://yourdomain-sample.com/sample-script.js",
     *         "display_location": [
     *             "PRODUCT_LIST",
     *             "PRODUCT_DETAIL"
     *         ],
     *         "exclude_path": [
     *             "/product/list.html",
     *             "/product/detail.html"
     *         ],
     *         "skin_no": [
     *             3,
     *             4
     *         ],
     *         "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo",
     *         "created_date": "2017-11-03T18:05:32+09:00",
     *         "updated_date": "2017-11-03T18:05:32+09:00"
     *     }
     * }
     * ```
     */
    retrieveAScriptTag(
      input: RetrieveAScriptTagInput,
      options?: AdminRequestOptions<RetrieveAScriptTagOutput['scripttag']>,
    ): Promise<AxiosResponse<RetrieveAScriptTagOutput>>;
    /**
     * @description
     * 스크립트태그를 쇼핑몰의 특정 화면에 설치할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-script-tag
     *
     * @example 응답 예시
     * ```json
     * {
     *     "scripttag": {
     *         "shop_no": 1,
     *         "script_no": "1527128695613925",
     *         "client_id": "AMj8UZhBC9zsyTlFGI6PzC",
     *         "src": "https://yourdomain-sample.com/sample-script.js",
     *         "display_location": [
     *             "PRODUCT_LIST",
     *             "PRODUCT_DETAIL"
     *         ],
     *         "exclude_path": [
     *             "/product/list.html",
     *             "/product/detail.html"
     *         ],
     *         "skin_no": [
     *             3,
     *             4
     *         ],
     *         "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo",
     *         "created_date": "2017-03-15T13:27:53+09:00",
     *         "updated_date": "2017-03-15T13:27:53+09:00"
     *     }
     * }
     * ```
     */
    createAScriptTag(
      input: CreateAScriptTagInput,
      options?: AdminRequestOptions<CreateAScriptTagOutput['scripttag']>,
    ): Promise<AxiosResponse<CreateAScriptTagOutput>>;
    /**
     * @description
     * 쇼핑몰에 설치된 스크립트를 업데이트할 수 있습니다.
     * 앱을 재설치할 필요 없이 스크립트만 업데이트 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-script-tag
     *
     * @example 응답 예시
     * ```json
     * {
     *     "scripttag": {
     *         "shop_no": 1,
     *         "script_no": "1509432821494844",
     *         "client_id": "AMj8UZhBC9zsyTlFGI6PzC",
     *         "src": "https://yourdomain-sample.com/sample-script.js",
     *         "display_location": [
     *             "PRODUCT_LIST",
     *             "PRODUCT_DETAIL"
     *         ],
     *         "exclude_path": [
     *             "/product/list.html",
     *             "/product/detail.html"
     *         ],
     *         "skin_no": [
     *             3,
     *             4
     *         ],
     *         "integrity": "sha384-UttGu98Tj02YSyWJ5yU0dHmx4wisywedBShWqEz+TL3vFOCXdeMWmo6jMVR8IdFo",
     *         "created_date": "2017-10-31T15:53:41+09:00",
     *         "updated_date": "2017-11-06T10:33:57+09:00"
     *     }
     * }
     * ```
     */
    updateAScriptTag(
      input: UpdateAScriptTagInput,
      options?: AdminRequestOptions<UpdateAScriptTagOutput['scripttag']>,
    ): Promise<AxiosResponse<UpdateAScriptTagOutput>>;
    /**
     * @description
     * 쇼핑몰에 설치되어 있는 스크립트를 삭제할 수 있습니다.
     * 멀티쇼핑몰별로 삭제하려면 엔드포인트 뒤에 &#34;?shop_no=N&#34;을 추가하면 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-script-tag
     *
     * @example 응답 예시
     * ```json
     * {
     *     "scripttag": {
     *         "script_no": "1509699932016345"
     *     }
     * }
     * ```
     */
    deleteAScriptTag(
      input: DeleteAScriptTagInput,
      options?: AdminRequestOptions<DeleteAScriptTagOutput['scripttag']>,
    ): Promise<AxiosResponse<DeleteAScriptTagOutput>>;
  }
}
