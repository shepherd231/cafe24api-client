import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문 판매채널(Orders saleschannels)은 통해 주문의 판매처의 조회, 등록, 수정, 삭제를 할 수 있습니다.
   * 주문 판매채널은 하위 리소스로 주문(Orders) 하위에서만 사용할 수 있습니다.
   */
  export interface OrdersSaleschannels {
    /**
     * @description
     * 판매처 아이디
     *
     *
     */
    sales_channel_id: any;
    /**
     * @description
     * 판매처 이름
     *
     *
     */
    sales_channel_name: any;
    /**
     * @description
     * 판매처 아이콘
     *
     *
     */
    sales_channel_icon: any;
  }

  export interface RetrieveAListOfSalesChannelsInput {
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [500]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [10000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfSalesChannelsOutput {
    saleschannels: {
      sales_channel_id: string;
      sales_channel_name: string;
      sales_channel_icon: string;
    }[];
  }
  export interface CreateASalesChannelInput {
    /**
     * @description
     * 판매처 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     * 형식 : [a-zA-Z0-9]
     */
    sales_channel_id: any;
    /**
     * @description
     * 판매처 이름
     *
     * @required
     *
     * 최대글자수 : [100자]
     */
    sales_channel_name: any;
    /**
     * @description
     * 판매처 아이콘
     *
     * @required
     *
     * URL
     * 최대글자수 : [500자]
     */
    sales_channel_icon: any;
  }

  export interface CreateASalesChannelOutput {
    saleschannel: {
      sales_channel_id: string;
      sales_channel_name: string;
      sales_channel_icon: string;
    };
  }
  export interface UpdateASalesChannelInput {
    /**
     * @description
     * 판매처 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     * 형식 : [a-zA-Z0-9]
     */
    sales_channel_id: any;
    /**
     * @description
     * 판매처 이름
     *
     * 최대글자수 : [100자]
     */
    sales_channel_name?: any;
    /**
     * @description
     * 판매처 아이콘
     *
     * URL
     * 최대글자수 : [500자]
     */
    sales_channel_icon?: any;
  }

  export interface UpdateASalesChannelOutput {
    saleschannel: {
      sales_channel_id: string;
      sales_channel_name: string;
      sales_channel_icon: string;
    };
  }
  export interface DeleteASalesChannelInput {
    /**
     * @description
     * 판매처 아이디
     *
     * @required
     *
     * 최대글자수 : [40자]
     * 형식 : [a-zA-Z0-9]
     */
    sales_channel_id: any;
  }

  export interface DeleteASalesChannelOutput {
    saleschannel: {
      sales_channel_id: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 판매채널을 목록으로 조회할 수 있습니다.
     * 판매처의 아이디, 이름, 아이콘 등을 조회할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-sales-channels
     *
     * @example 응답 예시
     * ```json
     * {
     *     "saleschannels": [
     *         {
     *             "sales_channel_id": "MORUGI",
     *             "sales_channel_name": "MORUGI",
     *             "sales_channel_icon": "https://img.echosting.cafe24.com/icon/ico_route_morugi.jpg"
     *         },
     *         {
     *             "sales_channel_id": "gmarket",
     *             "sales_channel_name": "gmarket",
     *             "sales_channel_icon": "https://img.echosting.cafe24.com/icon/ico_route_gmarket.jpg"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfSalesChannels(
      input: RetrieveAListOfSalesChannelsInput,
      options?: RequestOptions<
        RetrieveAListOfSalesChannelsOutput['saleschannels'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfSalesChannelsOutput>>;
    /**
     * @description
     * 쇼핑몰에 판매채널을 등록할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-sales-channel
     *
     * @example 응답 예시
     * ```json
     * {
     *     "saleschannel": {
     *         "sales_channel_id": "MORUGI",
     *         "sales_channel_name": "MORUGI",
     *         "sales_channel_icon": "https://img.echosting.cafe24.com/icon/ico_route_morugi.jpg"
     *     }
     * }
     * ```
     */
    createASalesChannel(
      input: CreateASalesChannelInput,
      options?: RequestOptions<CreateASalesChannelOutput['saleschannel']>,
    ): Promise<AxiosResponse<CreateASalesChannelOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 판매채널을 수정할 수 있습니다.
     * 판매처의 이름, 아이콘 등을 수정할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-sales-channel
     *
     * @example 응답 예시
     * ```json
     * {
     *     "saleschannel": {
     *         "sales_channel_id": "MORUGI",
     *         "sales_channel_name": "MORUGI",
     *         "sales_channel_icon": "https://img.echosting.cafe24.com/icon/ico_route_morugi.jpg"
     *     }
     * }
     * ```
     */
    updateASalesChannel(
      input: UpdateASalesChannelInput,
      options?: RequestOptions<UpdateASalesChannelOutput['saleschannel']>,
    ): Promise<AxiosResponse<UpdateASalesChannelOutput>>;
    /**
     * @description
     * 쇼핑몰에 판매채널을 삭제할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-sales-channel
     *
     * @example 응답 예시
     * ```json
     * {
     *     "saleschannel": {
     *         "sales_channel_id": "MORUGI"
     *     }
     * }
     * ```
     */
    deleteASalesChannel(
      input: DeleteASalesChannelInput,
      options?: RequestOptions<DeleteASalesChannelOutput['saleschannel']>,
    ): Promise<AxiosResponse<DeleteASalesChannelOutput>>;
  }
}
