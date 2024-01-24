import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 유입경로 그룹(Inflowgroups)은 주문이 유입된 경로의 그룹을 의미합니다.
   * 유입경로 그룹은 하위 리소스로 주문(Orders) 하위에서만 사용할 수 있습니다.
   * 유입경로 그룹에 대한 조회, 생성, 수정, 삭제가 가능합니다.
   */
  export interface OrdersInflowgroupsInflows {
    /**
     * @description
     * 유입경로 그룹 멤버 아이디
     *
     *
     */
    inflow_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 이름
     *
     *
     */
    inflow_name: any;
    /**
     * @description
     * 유입경로 아이콘
     *
     *
     */
    inflow_icon: any;
    /**
     * @description
     * 유입경로 그룹 아이디
     *
     *
     */
    group_id: any;
  }

  export interface RetrieveAListOfGroupTrafficSourcesInput {
    /**
     * @description
     * 유입경로 그룹 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    group_id: any;
  }

  export interface RetrieveAListOfGroupTrafficSourcesOutput {
    inflows: {
      inflow_id: string;
      inflow_name: string;
      inflow_icon: string;
    }[];
  }
  export interface CreateAGroupTrafficSourceInput {
    /**
     * @description
     * 유입경로 그룹 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    group_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    inflow_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 이름
     *
     * @required
     *
     * 최대글자수 : [100자]
     */
    inflow_name: any;
    /**
     * @description
     * 유입경로 아이콘
     *
     * @required
     *
     * URL
     * 최대글자수 : [500자]
     */
    inflow_icon: any;
  }

  export interface CreateAGroupTrafficSourceOutput {
    inflow: {
      inflow_id: string;
      inflow_name: string;
      inflow_icon: string;
    };
  }
  export interface UpdateAGroupTrafficSourceInput {
    /**
     * @description
     * 유입경로 그룹 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    group_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    inflow_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 이름
     *
     * @required
     *
     * 최대글자수 : [100자]
     */
    inflow_name: any;
    /**
     * @description
     * 유입경로 아이콘
     *
     * @required
     *
     * URL
     * 최대글자수 : [500자]
     */
    inflow_icon: any;
  }

  export interface UpdateAGroupTrafficSourceOutput {
    inflow: {
      inflow_id: string;
      inflow_name: string;
      inflow_icon: string;
    };
  }
  export interface DeleteAGroupTrafficSourceInput {
    /**
     * @description
     * 유입경로 그룹 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    group_id: any;
    /**
     * @description
     * 유입경로 그룹 멤버 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    inflow_id: any;
  }

  export interface DeleteAGroupTrafficSourceOutput {
    inflow: {
      group_id: string;
      inflow_id: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 유입경로 그룹 내에 속한 유입경로의 목록을 조회할 수 있습니다.
     * 유입경로 그룹 멤버 이름, 유입경로 아이콘, 유입경로 그룹 아이디를 확인할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-group-traffic-sources
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflows": [
     *         {
     *             "inflow_id": "edibot_social",
     *             "inflow_name": "EdibotSocial",
     *             "inflow_icon": "https://img.echosting.cafe24.com/icon/ico_route_cafe24.gif"
     *         },
     *         {
     *             "inflow_id": "sample_id",
     *             "inflow_name": "sample_name",
     *             "inflow_icon": "https://img.echosting.cafe24.com/icon/ico_route_cafe24.gif"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfGroupTrafficSources(
      input: RetrieveAListOfGroupTrafficSourcesInput,
      options?: RequestOptions<
        RetrieveAListOfGroupTrafficSourcesOutput['inflows'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfGroupTrafficSourcesOutput>>;
    /**
     * @description
     * 특정 유입경로 그룹 내에 속한 유입경로를 생성할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-group-traffic-source
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflow": {
     *         "inflow_id": "edibot_social",
     *         "inflow_name": "EdibotSocial",
     *         "inflow_icon": "https://img.echosting.cafe24.com/icon/ico_route_cafe24.gif"
     *     }
     * }
     * ```
     */
    createAGroupTrafficSource(
      input: CreateAGroupTrafficSourceInput,
      options?: RequestOptions<CreateAGroupTrafficSourceOutput['inflow']>,
    ): Promise<AxiosResponse<CreateAGroupTrafficSourceOutput>>;
    /**
     * @description
     * 특정 유입경로 그룹 내에 속한 유입경로를 수정할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-group-traffic-source
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflow": {
     *         "inflow_id": "edibot_social",
     *         "inflow_name": "EdibotSocial",
     *         "inflow_icon": "https://img.echosting.cafe24.com/icon/ico_route_cafe24.gif"
     *     }
     * }
     * ```
     */
    updateAGroupTrafficSource(
      input: UpdateAGroupTrafficSourceInput,
      options?: RequestOptions<UpdateAGroupTrafficSourceOutput['inflow']>,
    ): Promise<AxiosResponse<UpdateAGroupTrafficSourceOutput>>;
    /**
     * @description
     * 특정 유입경로 그룹 내에 속한 유입경로를 삭제할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-group-traffic-source
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflow": {
     *         "group_id": "cafe24",
     *         "inflow_id": "edibot_social"
     *     }
     * }
     * ```
     */
    deleteAGroupTrafficSource(
      input: DeleteAGroupTrafficSourceInput,
      options?: RequestOptions<DeleteAGroupTrafficSourceOutput['inflow']>,
    ): Promise<AxiosResponse<DeleteAGroupTrafficSourceOutput>>;
  }
}
