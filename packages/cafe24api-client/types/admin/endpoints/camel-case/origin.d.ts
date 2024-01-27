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
   * 원산지(Origin)는 상품정보에 포함되는 데이터로 상품이 생산된 지역을 의미합니다.
   * 원산지는 국외 배송 등 경우에 따라 중요한 데이터가 될 수 있습니다.
   * 카페24는 다양한 원산지가 코드화 되어있으며, 원산지 조회 API(List all origin)를 통해 원산지 코드 정보를 확인할 수 있습니다.
   */
  export interface Origin {
    /**
     * @description
     * 원산지 번호
     *
     *
     */
    originPlaceNo: any;
    /**
     * @description
     * 원산지 이름
     *
     *
     */
    originPlaceName: any;
    /**
     * @description
     * 해외 여부
     *
     *
     */
    foreign: any;
    /**
     * @description
     * 원산지 국가코드
     *
     *
     */
    madeInCode: any;
  }

  export interface RetrieveAListOfOriginsInput {
    /**
     * @description
     * 원산지 번호
     *
     *
     */
    originPlaceNo?: any;
    /**
     * @description
     * 원산지 이름
     *
     * 최대글자수 : [50자]
     */
    originPlaceName?: any;
    /**
     * @description
     * 해외 여부
     *
     *
     */
    foreign?: any;
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
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfOriginsOutput {
    origin: {
      originPlaceNo: Cafe24Datetime;
      originPlaceName: string[];
      foreign: Cafe24Enum;
      madeInCode: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에서 제공하는 원산지를 목록으로 조회할 수 있습니다.
     * 원산지 이름, 원산지 국가코드 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-origins
     *
     * @example 응답 예시
     * ```json
     * {
     *     "origin": [
     *         {
     *             "origin_place_no": "1",
     *             "origin_place_name": [
     *                 "Gangwon",
     *                 "Gangneung-si"
     *             ],
     *             "foreign": "F",
     *             "made_in_code": "KR"
     *         },
     *         {
     *             "origin_place_no": "2",
     *             "origin_place_name": [
     *                 "Gangwon",
     *                 "Goseong-gun"
     *             ],
     *             "foreign": "F",
     *             "made_in_code": "KR"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfOrigins(
      input: RetrieveAListOfOriginsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfOriginsOutput['origin'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfOriginsOutput>>;
  }
}
