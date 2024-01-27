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
   * 운영자(Users)는 쇼핑몰의 대표관리자와 더불어 쇼핑몰을 운영할 수 있는 운영자와 관련된 기능입니다.
   * 부운영자는 대표관리자가 부여한 권한 내에서 쇼핑몰을 운영할 수 있습니다.
   * 쇼핑몰에 등록된 운영자를 목록으로 조회하거나 특정 운영자를 조회할 수 있습니다.
   */
  export interface Users {
    /**
      * @description
      * 운영자 아이디
      * 
      * 운영자 혹은 부운영자의 아이디
      * 
      * 
      */ 
    userId: any;
    /**
      * @description
      * 운영자 명
      * 
      * 운영자 혹은 부운영자의 이름
      * 
      * 
      */ 
    userName: any;
    /**
      * @description
      * 전화번호
      * 
      * 운영자 혹은 부운영자의 전화번호
      * 
      * 전화번호
      */ 
    phone: any;
    /**
      * @description
      * 이메일
      * 
      * 운영자 혹은 부운영자의 이메일 주소
      * 
      * 이메일
      */ 
    email: any;
    /**
      * @description
      * IP 접근제한
      * 
      * IP 접근제한의 사용여부
      * 
      * A : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    ipRestrictionType: any;
    /**
      * @description
      * 운영자 구분
      * 
      * 대표운영자인지 부운영자인지의 구분
      * 
      * P : 대표운영자
      * A : 부운영자
      * 
      * 
      */ 
    adminType: any;
    /**
      * @description
      * 최근 접속일시
      * 
      * 
      */ 
    lastLoginDate: any;
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shopNo: any;
    /**
      * @description
      * 운영자 별명
      * 
      * 운영자의 별명
      * 
      * 
      */ 
    nickName: any;
    /**
      * @description
      * 별명 아이콘 타입
      * 
      * 별명 아이콘 등록. 직접 등록이나 샘플 등록이 가능함.
      * 
      * D : 직접 아이콘 등록
      * S : 샘플 아이콘 등록
      * 
      * 
      */ 
    nickNameIconType: any;
    /**
      * @description
      * 별명 아이콘 URL
      * 
      * 
      */ 
    nickNameIconUrl: any;
    /**
      * @description
      * 게시판 노출 설정
      * 
      * 
      */ 
    boardExposureSetting: any;
    /**
      * @description
      * 메모
      * 
      * 
      */ 
    memo: any;
    /**
      * @description
      * 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    available: any;
    /**
      * @description
      * 멀티쇼핑몰 접근 권한
      * 
      * T : 허용함
      * F : 허용안함
      * 
      * 
      */ 
    multishopAccessAuthority: any;
    /**
      * @description
      * 메뉴 접근 권한
      * 
      * 
      */ 
    menuAccessAuthority: any;
    /**
      * @description
      * 상세 권한 설정
      * 
      * 
      */ 
    detailAuthoritySetting: any;
    /**
      * @description
      * IP 접근 제한
      * 
      * 
      */ 
    ipAccessRestriction: any;
    /**
      * @description
      * 접속 허용 권한
      * 
      * T : 접속 허용시간 설정과 상관없이 항상 관리자 페이지 접속을 허용함
      * F : 사용안함
      * 
      * 
      */ 
    accessPermission: any;
  }

  export interface RetrieveAListOfAdminUsersInput {
    /**
      * @description
      * 검색 타입
      * 
      * member_Id : 회원 아이디
      * name : 이름
      * 
      * 
      */ 
    searchType?: any;
    /**
      * @description
      * 검색어
      * 
      * 
      */ 
    keyword?: any;
    /**
      * @description
      * 운영자 구분
      * 
      * P : 대표운영자
      * A : 부운영자
      * 
      * 
      */ 
    adminType?: any;
  }

  export interface RetrieveAListOfAdminUsersOutput {
    users: { 
    userId: string;
    userName: string;
    phone: string;
    email: string;
    ipRestrictionType: Cafe24Enum;
    adminType: Cafe24Enum;
    lastLoginDate: Cafe24Datetime;
    }[];
  }
  export interface RetrieveAdminUserDetailsInput {
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
      * 운영자 아이디
      * 
      * 운영자 혹은 부운영자의 아이디
      * 
      * 
      */ 
    userId?: any;
  }

  export interface RetrieveAdminUserDetailsOutput {
    user: { 
    shopNo: number;
    adminType: Cafe24Enum;
    userName: string;
    nickName: string;
    nickNameIconType: Cafe24Enum;
    nickNameIconUrl: string;
    boardExposureSetting: { 
    adminGradeIcon: Cafe24Enum;
    nickNameIcon: Cafe24Enum;
    writerNameIcon: Cafe24Enum;
    };
    phone: string;
    email: string;
    memo: string;
    available: Cafe24Enum;
    multishopAccessAuthority: Cafe24Enum;
    menuAccessAuthority: { 
    order: { 
    authority: boolean;
    detailSetting: { 
    71: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    72: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    74: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    };
    };
    product: { 
    authority: boolean;
    detailSetting: { 
    2031: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    children: { 
    2032: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    2033: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    2135: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    2138: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    };
    };
    2037: { 
    key: Cafe24Datetime;
    name: string;
    authority: boolean;
    };
    };
    };
    };
    detailAuthoritySetting: { 
    product: { 
    editProductCategory: Cafe24Enum;
    modifyProductInfo: any;
    removeProductInfo: Cafe24Enum;
    changeProductSaleStatus: Cafe24Enum;
    changeProductDisplayStatus: Cafe24Enum;
    editProductDisplayReservation: Cafe24Enum;
    downloadProductExcelDataInMenu: Cafe24Enum;
    showProductSupplyBusiness: Cafe24Enum;
    editProductSupplyBusiness: Cafe24Enum;
    editProductSupplyProductionCost: Cafe24Enum;
    showSupplierProductName: Cafe24Enum;
    editProductManufacturerInfo: Cafe24Enum;
    showProductDeliveryCount: Cafe24Enum;
    showProductSalesCount: Cafe24Enum;
    };
    order: { 
    restrictSearchingOrderInfo: Cafe24Enum;
    restrictSearchingPersonalInfo: Cafe24Enum;
    restrictPrintingInMenu: Cafe24Enum;
    checkPayment: Cafe24Enum;
    cancelCreditPayment: Cafe24Enum;
    cancelPaycoPointPayment: Cafe24Enum;
    cancelAffiliatedGiftCertificatePayment: Cafe24Enum;
    cancelAffiliationPointPayment: Cafe24Enum;
    cancelOrder: Cafe24Enum;
    returnProduct: Cafe24Enum;
    exchangeProduct: Cafe24Enum;
    acceptRefundingProduct: Cafe24Enum;
    handleRefundingProduct: Cafe24Enum;
    editOrderMemo: Cafe24Enum;
    downloadOrderDataInMenu: Cafe24Enum;
    showDashboardOrderInfo: Cafe24Enum;
    showTotalOrderedAmount: Cafe24Enum;
    showIntegrationBalance: Cafe24Enum;
    cancelWithdrawal: Cafe24Enum;
    exchangeWithdrawal: Cafe24Enum;
    returnWithdrawal: Cafe24Enum;
    refundWithdrawal: Cafe24Enum;
    };
    };
    ipAccessRestriction: { 
    usage: Cafe24Enum;
    registeredIpList: string[];
    };
    accessPermission: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 운영자를 목록으로 조회할 수 있습니다.
     * 운영자 아이디, 운영자명, 이메일, 전화번호 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-admin-users
     *
     * @example 응답 예시
     * ```json
     * {
     *     "users": [
     *         {
     *             "user_id": "admin",
     *             "user_name": "John Doe",
     *             "phone": "02-0000-0000",
     *             "email": "sample@sample.com",
     *             "ip_restriction_type": "A",
     *             "admin_type": "P",
     *             "last_login_date": "2022-01-01T12:00:00+09:00"
     *         },
     *         {
     *             "user_id": "subadmin",
     *             "user_name": "Jane Doe",
     *             "phone": "02-0000-0000",
     *             "email": "sample@sample.com",
     *             "ip_restriction_type": "A",
     *             "admin_type": "A",
     *             "last_login_date": null
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfAdminUsers(
      input: RetrieveAListOfAdminUsersInput,
      options?: AdminRequestOptions<RetrieveAListOfAdminUsersOutput['users'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfAdminUsersOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 특정 운영자를 조회할 수 있습니다.
     * 운영자 이름, 전화번호, 이메일 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-admin-user-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "user": {
     *         "shop_no": 1,
     *         "admin_type": "A",
     *         "user_name": "John Doe",
     *         "nick_name": "Cool John",
     *         "nick_name_icon_type": "S",
     *         "nick_name_icon_url": "https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_nick1.gif",
     *         "board_exposure_setting": {
     *             "admin_grade_icon": "T",
     *             "nick_name_icon": "F",
     *             "writer_name_icon": "F"
     *         },
     *         "phone": "02-1234-5678",
     *         "email": "subadmin1@cafe24.com",
     *         "memo": "test memo",
     *         "available": "T",
     *         "multishop_access_authority": "T",
     *         "menu_access_authority": {
     *             "order": {
     *                 "authority": true,
     *                 "detail_setting": {
     *                     "74": {
     *                         "key": "74",
     *                         "name": "전체 주문 조회",
     *                         "authority": true
     *                     },
     *                     "71": {
     *                         "key": "71",
     *                         "name": "입금전 관리",
     *                         "authority": true
     *                     },
     *                     "72": {
     *                         "key": "72",
     *                         "name": "배송 준비중 관리",
     *                         "authority": true
     *                     }
     *                 }
     *             },
     *             "product": {
     *                 "authority": true,
     *                 "detail_setting": {
     *                     "2037": {
     *                         "key": "2037",
     *                         "name": "상품목록",
     *                         "authority": true
     *                     },
     *                     "2031": {
     *                         "key": "2031",
     *                         "name": "상품등록",
     *                         "authority": true,
     *                         "children": {
     *                             "2032": {
     *                                 "key": "2032",
     *                                 "name": "간단 등록",
     *                                 "authority": true
     *                             },
     *                             "2033": {
     *                                 "key": "2033",
     *                                 "name": "일반 등록",
     *                                 "authority": true
     *                             },
     *                             "2138": {
     *                                 "key": "2138",
     *                                 "name": "세트 상품 등록",
     *                                 "authority": true
     *                             },
     *                             "2135": {
     *                                 "key": "2135",
     *                                 "name": "엑셀 등록",
     *                                 "authority": true
     *                             }
     *                         }
     *                     }
     *                 }
     *             }
     *         },
     *         "detail_authority_setting": {
     *             "product": {
     *                 "edit_product_category": "F",
     *                 "modify_product_info": null,
     *                 "remove_product_info": "F",
     *                 "change_product_sale_status": "F",
     *                 "change_product_display_status": "F",
     *                 "edit_product_display_reservation": "F",
     *                 "download_product_excel_data_in_menu": "F",
     *                 "show_product_supply_business": "F",
     *                 "edit_product_supply_business": "F",
     *                 "edit_product_supply_production_cost": "F",
     *                 "show_supplier_product_name": "F",
     *                 "edit_product_manufacturer_info": "F",
     *                 "show_product_delivery_count": "F",
     *                 "show_product_sales_count": "F"
     *             },
     *             "order": {
     *                 "restrict_searching_order_info": "F",
     *                 "restrict_searching_personal_info": "F",
     *                 "restrict_printing_in_menu": "F",
     *                 "check_payment": "F",
     *                 "cancel_credit_payment": "F",
     *                 "cancel_payco_point_payment": "F",
     *                 "cancel_affiliated_gift_certificate_payment": "F",
     *                 "cancel_affiliation_point_payment": "F",
     *                 "cancel_order": "F",
     *                 "return_product": "F",
     *                 "exchange_product": "F",
     *                 "accept_refunding_product": "F",
     *                 "handle_refunding_product": "F",
     *                 "edit_order_memo": "F",
     *                 "download_order_data_in_menu": "F",
     *                 "show_dashboard_order_info": "F",
     *                 "show_total_ordered_amount": "F",
     *                 "show_integration_balance": "F",
     *                 "cancel_withdrawal": "F",
     *                 "exchange_withdrawal": "F",
     *                 "return_withdrawal": "F",
     *                 "refund_withdrawal": "F"
     *             }
     *         },
     *         "ip_access_restriction": {
     *             "usage": "T",
     *             "registered_ip_list": [
     *                 "127.0.0.1"
     *             ]
     *         },
     *         "access_permission": "F"
     *     }
     * }
     * ```
     */
    retrieveAdminUserDetails(
      input: RetrieveAdminUserDetailsInput,
      options?: AdminRequestOptions<RetrieveAdminUserDetailsOutput['user']>,
    ): Promise<AxiosResponse<RetrieveAdminUserDetailsOutput>>;
  }
}
