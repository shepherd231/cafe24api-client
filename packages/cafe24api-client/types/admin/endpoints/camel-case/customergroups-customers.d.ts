import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 회원등급의 회원(Customergroups customers)은 특정 회원등급의 회원과 관련된 기능입니다.
   * 특정 회원을 특정 등급으로 변경할 수 있습니다.
   */
  export interface CustomergroupsCustomers {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 회원등급번호
      * 
      * 
      */ 
    groupNo: any;
    /**
      * @description
      * 회원아이디
      * 
      * 
      */ 
    memberId: any;
    /**
      * @description
      * 회원등급 고정 여부
      * 
      * 특정 회원이 회원자동등급변경에 적용되지 않기 위한 등급 고정 여부.
      * 회원자동등급변경 기능을 사용하는 몰에서만 사용 가능하다.
      * 
      * T : 고정함
      * F : 고정안함
      * 
      * 
      */ 
    fixedGroup: any;
  }

  export interface UpdateACustomerSCustomerTierInput {
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
      * 회원등급번호
      * 
      * @required
      */ 
    groupNo: any;
    /**
      * @description
      * 회원아이디
      * 
      * @required
      * 
      * 최대글자수 : [20자]
      */ 
    memberId: any;
    /**
      * @description
      * 회원등급 고정 여부
      * 
      * 특정 회원이 회원자동등급변경에 적용되지 않기 위한 등급 고정 여부
      * 회원자동등급변경 기능을 사용하는 몰에서만 사용 가능하다.
      * 
      * T : 고정함
      * F : 고정안함
      * 
      * @default F
      * 
      * 
      */ 
    fixedGroup?: any;
  }

  export interface UpdateACustomerSCustomerTierOutput {
    customers: { 
    shopNo: number;
    groupNo: number;
    memberId: string;
    fixedGroup: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 등급에 회원을 추가할 수 있습니다.
     * 회원등급 고정여부는 회원자동등급변경 기능을 사용하는 몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-customer-s-customer-tier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customers": [
     *         {
     *             "shop_no": 1,
     *             "group_no": 1,
     *             "member_id": "sampleid1",
     *             "fixed_group": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "group_no": 1,
     *             "member_id": "sampleid2",
     *             "fixed_group": "F"
     *         }
     *     ]
     * }
     * ```
     */
    updateACustomerSCustomerTier(
      input: UpdateACustomerSCustomerTierInput,
      options?: RequestOptions<UpdateACustomerSCustomerTierOutput['customers'][number]>,
    ): Promise<AxiosResponse<UpdateACustomerSCustomerTierOutput>>;
  }
}
