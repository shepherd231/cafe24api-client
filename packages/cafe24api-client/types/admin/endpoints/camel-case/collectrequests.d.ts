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
   * 수거신청 정보(Collectrequests)는 반품, 교환처리로 수거요청시 수거신청 정보를 수정할 수 있는 리소스입니다.
   */
  export interface Collectrequests {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 요청 번호
     *
     *
     */
    requestNo: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode: any;
    /**
     * @description
     * 수거 배송사명
     *
     *
     */
    shippingCompanyName: any;
    /**
     * @description
     * 수거 송장 번호
     *
     *
     */
    collectTrackingNo: any;
  }

  export interface UpdateACollectionRequestInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
    /**
     * @description
     * 요청 번호
     *
     * @required
     */
    requestNo: any;
    /**
     * @description
     * 수거 송장 번호
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    collectTrackingNo: any;
  }

  export interface UpdateACollectionRequestOutput {
    collectrequest: {
      shopNo: number;
      requestNo: number;
      orderId: string;
      orderItemCode: string[];
      shippingCompanyName: string;
      collectTrackingNo: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 채번되는 송장번호를 이용하여 수거신청 정보를 수정합니다.
     * 요청번호와 수거 송장 번호를 필수로 입력합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-collection-request
     *
     * @example 응답 예시
     * ```json
     * {
     *     "collectrequest": {
     *         "shop_no": 1,
     *         "request_no": 10,
     *         "order_id": "20210101-0000001",
     *         "order_item_code": [
     *             "20210101-0000001-01",
     *             "20210101-0000001-02"
     *         ],
     *         "shipping_company_name": "KOREA EXPRESS",
     *         "collect_tracking_no": "636945749436"
     *     }
     * }
     * ```
     */
    updateACollectionRequest(
      input: UpdateACollectionRequestInput,
      options?: AdminRequestOptions<
        UpdateACollectionRequestOutput['collectrequest']
      >,
    ): Promise<AxiosResponse<UpdateACollectionRequestOutput>>;
  }
}
