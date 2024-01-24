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
  export interface OrdersInflowgroups {
    /**
      * @description
      * 유입경로 그룹 아이디
      * 
      * 
      */ 
    inflowGroupId: any;
    /**
      * @description
      * 유입경로 그룹 이름
      * 
      * 
      */ 
    inflowGroupName: any;
  }

  export interface RetrieveAListOfTrafficSourceGroupsInput {
  }

  export interface RetrieveAListOfTrafficSourceGroupsOutput {
    inflowgroups: { 
    inflowGroupId: string;
    inflowGroupName: string;
    }[];
  }
  export interface CreateATrafficSourceGroupInput {
    /**
      * @description
      * 유입경로 그룹 아이디
      * 
      * @required
      * 
      * 최대글자수 : [40자]
      * 형식 : [a-zA-Z0-9]
      */ 
    inflowGroupId: any;
    /**
      * @description
      * 유입경로 그룹 이름
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    inflowGroupName: any;
  }

  export interface CreateATrafficSourceGroupOutput {
    inflowgroup: { 
    inflowGroupId: string;
    inflowGroupName: string;
    };
  }
  export interface UpdateATrafficSourceGroupInput {
    /**
      * @description
      * 유입경로 그룹 아이디
      * 
      * @required
      * 
      * 형식 : [a-zA-Z0-9]
      * 최대글자수 : [40자]
      */ 
    inflowGroupId: any;
    /**
      * @description
      * 유입경로 그룹 이름
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    inflowGroupName: any;
  }

  export interface UpdateATrafficSourceGroupOutput {
    inflowgroup: { 
    inflowGroupId: string;
    inflowGroupName: string;
    };
  }
  export interface DeleteATrafficSourceGroupInput {
    /**
      * @description
      * 유입경로 그룹 아이디
      * 
      * @required
      * 
      * 최대글자수 : [40자]
      * 형식 : [a-zA-Z0-9]
      */ 
    inflowGroupId: any;
  }

  export interface DeleteATrafficSourceGroupOutput {
    inflowgroup: { 
    inflowGroupId: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 유입경로 그룹 목록을 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-traffic-source-groups
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflowgroups": [
     *         {
     *             "inflow_group_id": "cafe24",
     *             "inflow_group_name": "Cafe24"
     *         },
     *         {
     *             "inflow_group_id": "gmarket",
     *             "inflow_group_name": "Gmarket"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfTrafficSourceGroups(
      input?: RetrieveAListOfTrafficSourceGroupsInput,
      options?: RequestOptions<RetrieveAListOfTrafficSourceGroupsOutput['inflowgroups'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfTrafficSourceGroupsOutput>>;
    /**
     * @description
     * 유입경로 그룹을 생성할 수 있습니다.
     * 유입경로 이름과 유입경로 아이디는 필수값입니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-traffic-source-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflowgroup": {
     *         "inflow_group_id": "cafe24",
     *         "inflow_group_name": "Cafe24"
     *     }
     * }
     * ```
     */
    createATrafficSourceGroup(
      input: CreateATrafficSourceGroupInput,
      options?: RequestOptions<CreateATrafficSourceGroupOutput['inflowgroup']>,
    ): Promise<AxiosResponse<CreateATrafficSourceGroupOutput>>;
    /**
     * @description
     * 유입경로 그룹을 수정할 수 있습니다.
     * 유입경로 그룹 아이디, 그룹 멤버 이름 등을 필수로 입력합니다.
     * 유입경로 그룹을 등록하면 같은 유입경로에 대해 그룹화하여 쉽게 알아볼 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-traffic-source-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflowgroup": {
     *         "inflow_group_id": "cafe24",
     *         "inflow_group_name": "Cafe24"
     *     }
     * }
     * ```
     */
    updateATrafficSourceGroup(
      input: UpdateATrafficSourceGroupInput,
      options?: RequestOptions<UpdateATrafficSourceGroupOutput['inflowgroup']>,
    ): Promise<AxiosResponse<UpdateATrafficSourceGroupOutput>>;
    /**
     * @description
     * 유입경로 그룹을 삭제할 수 있습니다.
     * 삭제할 때에는 유입경로 그룹의 아이디 멤버 아이디를 모두 입력해주셔야 합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-traffic-source-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "inflowgroup": {
     *         "inflow_group_id": "cafe24"
     *     }
     * }
     * ```
     */
    deleteATrafficSourceGroup(
      input: DeleteATrafficSourceGroupInput,
      options?: RequestOptions<DeleteATrafficSourceGroupOutput['inflowgroup']>,
    ): Promise<AxiosResponse<DeleteATrafficSourceGroupOutput>>;
  }
}
