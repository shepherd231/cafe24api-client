import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상품 승인(Products approve)은 공급사가 업로드한 상품을 검토 후 승인하는 기능입니다.
   * 해당 기능은 일부 쇼핑몰에만 적용된 상태로, 공급사 상품 승인 기능을 사용중인 몰에서만 사용할 수 있습니다.
   */
  export interface ProductsApprove {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 상태
     *
     * 공급사가 승인 요청한 해당 상품의 승인 상태
     *
     * N : 승인요청 (신규상품) 상태값
     * E : 승인요청 (상품수정) 상태값
     * C : 승인완료 상태값
     * R : 승인거절 상태값
     * I : 검수진행중 상태값
     * Empty Value : 요청된적 없음
     *
     * @required
     */
    status: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
  }

  export interface RetrieveAProductApprovalStatusInput {
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
    shopNo?: any;
    /**
     * @description
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * @required
     */
    productNo: any;
  }

  export interface RetrieveAProductApprovalStatusOutput {
    approve: {
      shopNo: number;
      status: Cafe24Enum;
      productNo: number;
    };
  }
  export interface CreateAProductApprovalRequestInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 승인 요청한 공급사의 아이디
     *
     * @required
     */
    userId: any;
  }

  export interface CreateAProductApprovalRequestOutput {
    approve: {
      shopNo: number;
      status: Cafe24Enum;
      productNo: number;
    };
  }
  export interface UpdateAProductApprovalStatusInput {
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
    shopNo?: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 승인 요청한 공급사의 아이디
     *
     * @required
     */
    userId: any;
    /**
     * @description
     * 상태
     *
     * 공급사가 승인 요청한 해당 상품의 승인 상태
     *
     * C : 승인완료 상태값
     * R : 승인거절 상태값
     * I : 검수진행중 상태값
     *
     * @required
     */
    status: any;
  }

  export interface UpdateAProductApprovalStatusOutput {
    approve: {
      shopNo: number;
      status: Cafe24Enum;
      productNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 해당 상품의 승인 상태를 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-approval-status
     *
     * @example 응답 예시
     * ```json
     * {
     *     "approve": {
     *         "shop_no": 1,
     *         "status": "C",
     *         "product_no": 7
     *     }
     * }
     * ```
     */
    retrieveAProductApprovalStatus(
      input: RetrieveAProductApprovalStatusInput,
      options?: RequestOptions<RetrieveAProductApprovalStatusInput>,
    ): Promise<AxiosResponse<RetrieveAProductApprovalStatusOutput>>;
    /**
     * @description
     * 해당 상품에 대한 승인 신청을 할 수 있습니다.
     * 승인신청한 상품은 승인요청(신규상품) 상태로 승인 요청됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-product-approval-request
     *
     * @example 응답 예시
     * ```json
     * {
     *     "approve": {
     *         "shop_no": 1,
     *         "status": "N",
     *         "product_no": 7
     *     }
     * }
     * ```
     */
    createAProductApprovalRequest(
      input: CreateAProductApprovalRequestInput,
      options?: RequestOptions<CreateAProductApprovalRequestInput>,
    ): Promise<AxiosResponse<CreateAProductApprovalRequestOutput>>;
    /**
     * @description
     * 해당 상품의 승인 상태를 변경할 수 있습니다.
     * 대표관리자가 상품을 승인한 경우 승인완료로 업데이트할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-approval-status
     *
     * @example 응답 예시
     * ```json
     * {
     *     "approve": {
     *         "shop_no": 1,
     *         "status": "C",
     *         "product_no": 7
     *     }
     * }
     * ```
     */
    updateAProductApprovalStatus(
      input: UpdateAProductApprovalStatusInput,
      options?: RequestOptions<UpdateAProductApprovalStatusInput>,
    ): Promise<AxiosResponse<UpdateAProductApprovalStatusOutput>>;
  }
}
