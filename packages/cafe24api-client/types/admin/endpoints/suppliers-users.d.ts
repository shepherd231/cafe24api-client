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
   * 공급사 운영자(Supplier Users)는 공급사가 쇼핑몰에 로그인하여 상품을 직접 등록해야할 경우 필요합니다.
   * 공급사 운영자에게 상품 업로드, 분류 관리, 게시판 관리 등 제한적인 권한을 부여할 수 있습니다.
   *
   *
   */
  export interface SuppliersUsers {
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 공급사 운영자가 로그인할 경우 사용하는 로그인 아이디. 부운영자와 마찬가지로 쇼핑몰 관리자 화면에 로그인하면 공급사 관리자 화면에 접근할 수 있다.
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id: any;
    /**
     * @description
     * 공급사 코드
     *
     * 시스템에서 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplier_code: any;
    /**
     * @description
     * 공급사명
     *
     * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
     *
     * 최대글자수 : [100자]
     */
    supplier_name: any;
    /**
     * @description
     * 상품 등록 시 분류선택 권한
     *
     * 공급사 운영자가 상품 등록시 상품 분류를 선택하여 등록할 수 있는지에 대한 권한 설정
     *
     *
     */
    permission_category_select: any;
    /**
     * @description
     * 상품 수정 권한
     *
     * 공급사 운영자가 상품을 등록한 후 상품 정보를 수정할 수 있는 권한 설정
     *
     *
     */
    permission_product_modify: any;
    /**
     * @description
     * 상품 진열 권한
     *
     * 공급사 운영자가 상품을 등록한 후 쇼핑몰 화면에 진열할 수 있는 권한 설정
     *
     *
     */
    permission_product_display: any;
    /**
     * @description
     * 상품 판매 권한
     *
     * 공급사 운영자가 상품을 등록한 후 해당 상품의 판매여부를 설정할 수 있는 권한 설정
     *
     *
     */
    permission_product_selling: any;
    /**
     * @description
     * 등록 상품 삭제 권한
     *
     * 공급사 운영자가 자신이 등록한 상품을 삭제할 수 있는 권한 설정
     *
     *
     */
    permission_product_delete: any;
    /**
     * @description
     * 주문 금액 조회 권한
     *
     *
     */
    permission_amount_inquiry: any;
    /**
     * @description
     * 게시판 권한 설정
     *
     * 공급사 운영자가 쇼핑몰의 게시판에 접근할 수 있는 권한 설정
     *
     * T : 허용함
     * F : 허용안함
     *
     *
     */
    permission_board_manage: any;
    /**
     * @description
     * 주문 메뉴 접근 권한
     *
     *
     */
    permission_order_menu: any;
    /**
     * @description
     * 공급사운영자명
     *
     * 공급사 운영자의 이름. 공급사 운영자 명은 공급사 운영자가 쇼핑몰 관리자 화면에서 어떤 작업을 할 경우 &#34;작업을 실행한 사람(처리자)&#34; 부분에 표시되는 이름을 의미한다.
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    user_name: any;
    /**
     * @description
     * 별명
     *
     * 공급사 운영자의 별명. 공급사 운영자 별명은 공급사 운영자가 게시판에 게시글 작성할 경우 &#34;게시자&#34; 부분에 표시되는 별명을 의미한다.(단, 해당 게시판이 작성자명 대신 &#39;별명&#39;을 노출하도록 설정되어있을 경우에 한 함)
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    nick_name: any;
    /**
     * @description
     * 별명 아이콘 타입
     *
     * 공급사 운영자의 별명 옆에 표시되는 아이콘을 설정할 수 있다.
     *
     * 직접 아이콘 등록 : 별명 아이콘을 직접 업로드하여 설정할 수 있다.
     * 샘플 아이콘 등록 : 미리 제공되는 아이콘을 선택하여 설정할 수 있다.
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     * D : 직접
     * S : 샘플
     *
     *
     */
    nick_name_icon_type: any;
    /**
     * @description
     * 별명 아이콘 URL
     *
     * 공급사 운영자의 별명 아이콘의 이미지 경로.
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     * 최대글자수 : [255자]
     */
    nick_name_icon_url: any;
    /**
     * @description
     * 게시판 닉네임 아이콘 노출 설정
     *
     * 공급사 운영자가 게시판에 게시글 작성시 별명 아이콘을 노출할 것인지 여부 표시
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    use_nick_name_icon: any;
    /**
     * @description
     * 게시판 작성자 노출 설정
     *
     * 공급사 운영자가 게시판에 게시글 작성시 작성자 명을 노출할 것인지 여부 표시
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    use_writer_name_icon: any;
    /**
     * @description
     * 이메일
     *
     * 공급사 운영자의 이메일 주소. 공급사 운영자의 연락처 저장 목적으로 사용함.
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     * 이메일
     */
    email: any;
    /**
     * @description
     * 전화번호
     *
     * 공급사 운영자의 전화번호. 공급사 운영자의 연락처 저장 목적으로 사용함.
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    phone: any;
    /**
     * @description
     * 접근가능 쇼핑몰
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    permission_shop_no: any;
    /**
     * @description
     * 상품 등록시 허용 상품분류
     *
     * 공급사 운영자가 상품 등록시 선택 가능한 상품 분류. 공급사 운영자는 상품 등록시 해당 상품 분류에만 상품을 올릴 수 있다.
     *
     * 공급사 운영자 상세 조회 API에서만 확인 가능하다.
     *
     *
     */
    permitted_category_list: any;
  }

  export interface RetrieveAListOfSupplierUsersInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 공급사 운영자가 로그인할 경우 사용하는 로그인 아이디. 부운영자와 마찬가지로 쇼핑몰 관리자 화면에 로그인하면 공급사 관리자 화면에 접근할 수 있다.
     *
     * 형식 : [a-zA-Z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id?: any;
    /**
     * @description
     * 공급사 코드
     *
     * 시스템에서 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
     *
     * 최대글자수 : [8자]
     */
    supplier_code?: any;
    /**
     * @description
     * 공급사명
     *
     * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
     *
     * 최대글자수 : [100자]
     */
    supplier_name?: any;
  }

  export interface RetrieveAListOfSupplierUsersOutput {
    users: {
      user_id: string;
      supplier_code: string;
      supplier_name: string;
      permission_category_select: string;
      permission_product_modify: Cafe24Enum;
      permission_product_display: string;
      permission_product_selling: Cafe24Enum;
      permission_product_delete: string;
      permission_board_manage: Cafe24Enum;
      permission_amount_inquiry: Cafe24Enum;
      permission_order_menu: Cafe24Enum;
    }[];
  }
  export interface RetrieveACountOfSupplierUsersInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 공급사 운영자가 로그인할 경우 사용하는 로그인 아이디. 부운영자와 마찬가지로 쇼핑몰 관리자 화면에 로그인하면 공급사 관리자 화면에 접근할 수 있다.
     *
     * 형식 : [a-zA-Z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id?: any;
    /**
     * @description
     * 공급사 코드
     *
     * 시스템에서 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
     *
     * 최대글자수 : [8자]
     */
    supplier_code?: any;
    /**
     * @description
     * 공급사명
     *
     * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
     *
     * 최대글자수 : [100자]
     */
    supplier_name?: any;
  }

  export interface RetrieveACountOfSupplierUsersOutput {
    count: number;
  }
  export interface RetrieveSupplierUserDetailsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * 공급사 운영자가 로그인할 경우 사용하는 로그인 아이디. 부운영자와 마찬가지로 쇼핑몰 관리자 화면에 로그인하면 공급사 관리자 화면에 접근할 수 있다.
     *
     * 형식 : [a-zA-Z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id?: any;
  }

  export interface RetrieveSupplierUserDetailsOutput {
    user: {
      user_id: string;
      supplier_code: string;
      supplier_name: string;
      user_name: string;
      nick_name: string;
      nick_name_icon_type: Cafe24Enum;
      nick_name_icon_url: string;
      use_nick_name_icon: Cafe24Enum;
      use_writer_name_icon: Cafe24Enum;
      email: string;
      phone: string;
      permission_shop_no: number[];
      permission_category_select: Cafe24Enum;
      permitted_category_list: number[];
      permission_product_modify: Cafe24Enum;
      permission_product_display: Cafe24Enum;
      permission_product_selling: Cafe24Enum;
      permission_product_delete: Cafe24Enum;
      permission_board_manage: Cafe24Enum;
      permission_amount_inquiry: Cafe24Enum;
      permission_order_menu: Cafe24Enum;
    };
  }
  export interface CreateASupplierUserInput {
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * @required
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id: any;
    /**
     * @description
     * 공급사 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplier_code: any;
    /**
     * @description
     * 공급사운영자명
     *
     * 필수 입력 필요
     *
     *
     */
    user_name?: {
      /**
       * @description
       * 멀티쇼핑몰 번호
       *
       *
       */
      shop_no: any;
      /**
       * @description
       * 공급사운영자명
       *
       *
       */
      user_name: any;
    };
    /**
     * @description
     * 별명
     *
     *
     */
    nick_name?: {
      /**
       * @description
       * 멀티쇼핑몰 번호
       *
       *
       */
      shop_no?: any;
      /**
       * @description
       * 별명
       *
       *
       */
      nick_name?: any;
    };
    /**
     * @description
     * 접속 비밀번호
     *
     * @required
     */
    password: any;
    /**
     * @description
     * 게시판 닉네임 아이콘 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    use_nick_name_icon?: any;
    /**
     * @description
     * 게시판 작성자 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    use_writer_name_icon?: any;
    /**
     * @description
     * 이메일
     *
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 전화번호
     *
     *
     */
    phone?: any;
    /**
     * @description
     * 접근가능 쇼핑몰
     *
     * @required
     */
    permission_shop_no: any;
    /**
     * @description
     * 상품 등록 시 분류선택 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_category_select?: any;
    /**
     * @description
     * 상품 등록시 허용 상품분류
     *
     *
     */
    permitted_category_list?: any;
    /**
     * @description
     * 상품 수정 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_product_modify?: any;
    /**
     * @description
     * 상품 진열 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_product_display?: any;
    /**
     * @description
     * 상품 판매 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_product_selling?: any;
    /**
     * @description
     * 등록 상품 삭제 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_product_delete?: any;
    /**
     * @description
     * 주문 메뉴 접근 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    permission_order_menu?: any;
    /**
     * @description
     * 주문 금액 조회 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    permission_amount_inquiry?: any;
  }

  export interface CreateASupplierUserOutput {
    user: {
      user_id: string;
      supplier_code: string;
      user_name: {
        shop_no: number;
        user_name: string;
      }[];
      nick_name: {
        shop_no: number;
        nick_name: string;
      }[];
      use_nick_name_icon: Cafe24Enum;
      use_writer_name_icon: Cafe24Enum;
      email: string;
      phone: string;
      permission_shop_no: number[];
      permission_category_select: Cafe24Enum;
      permitted_category_list: number[];
      permission_product_modify: Cafe24Enum;
      permission_product_display: Cafe24Enum;
      permission_product_selling: Cafe24Enum;
      permission_product_delete: Cafe24Enum;
      permission_order_menu: Cafe24Enum;
      permission_amount_inquiry: Cafe24Enum;
    };
  }
  export interface UpdateASupplierUserInput {
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * @required
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id: any;
    /**
     * @description
     * 공급사운영자명
     *
     * 필수 입력 필요
     *
     *
     */
    user_name?: {
      /**
       * @description
       * 멀티쇼핑몰 번호
       *
       *
       */
      shop_no?: any;
      /**
       * @description
       * 공급사운영자명
       *
       *
       */
      user_name?: any;
    };
    /**
     * @description
     * 별명
     *
     *
     */
    nick_name?: {
      /**
       * @description
       * 멀티쇼핑몰 번호
       *
       *
       */
      shop_no?: any;
      /**
       * @description
       * 별명
       *
       *
       */
      nick_name?: any;
    };
    /**
     * @description
     * 접속 비밀번호
     *
     *
     */
    password?: any;
    /**
     * @description
     * 게시판 닉네임 아이콘 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_nick_name_icon?: any;
    /**
     * @description
     * 게시판 작성자 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_writer_name_icon?: any;
    /**
     * @description
     * 이메일
     *
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 전화번호
     *
     *
     */
    phone?: any;
    /**
     * @description
     * 접근가능 쇼핑몰
     *
     *
     */
    permission_shop_no?: any;
    /**
     * @description
     * 상품 등록 시 분류선택 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_category_select?: any;
    /**
     * @description
     * 상품 등록시 허용 상품분류
     *
     *
     */
    permitted_category_list?: any;
    /**
     * @description
     * 상품 수정 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_product_modify?: any;
    /**
     * @description
     * 상품 진열 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_product_display?: any;
    /**
     * @description
     * 상품 판매 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_product_selling?: any;
    /**
     * @description
     * 등록 상품 삭제 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_product_delete?: any;
    /**
     * @description
     * 주문 메뉴 접근 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_order_menu?: any;
    /**
     * @description
     * 주문 금액 조회 권한
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    permission_amount_inquiry?: any;
  }

  export interface UpdateASupplierUserOutput {
    user: {
      user_id: string;
      supplier_code: string;
      user_name: {
        shop_no: number;
        user_name: string;
      }[];
      nick_name: {
        shop_no: number;
        nick_name: string;
      }[];
      use_nick_name_icon: Cafe24Enum;
      use_writer_name_icon: Cafe24Enum;
      email: string;
      phone: string;
      permission_shop_no: number[];
      permission_category_select: Cafe24Enum;
      permitted_category_list: number[];
      permission_product_modify: Cafe24Enum;
      permission_product_display: Cafe24Enum;
      permission_product_selling: Cafe24Enum;
      permission_product_delete: Cafe24Enum;
      permission_amount_inquiry: Cafe24Enum;
      permission_order_menu: Cafe24Enum;
    };
  }
  export interface DeleteASupplierUserInput {
    /**
     * @description
     * 공급사 운영자 아이디
     *
     * @required
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    user_id: any;
  }

  export interface DeleteASupplierUserOutput {
    user: {
      user_id: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 공급사 운영자를 목록으로 조회할 수 있습니다.
     * 공급사 코드, 공급사명, 공급사운영자명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-supplier-users
     *
     * @example 응답 예시
     * ```json
     * {
     *     "users": [
     *         {
     *             "user_id": "S0000000",
     *             "supplier_code": "S0000000",
     *             "supplier_name": "Default Supplier",
     *             "permission_category_select": "",
     *             "permission_product_modify": "T",
     *             "permission_product_display": "",
     *             "permission_product_selling": "T",
     *             "permission_product_delete": "",
     *             "permission_board_manage": "F",
     *             "permission_amount_inquiry": "F",
     *             "permission_order_menu": "F"
     *         },
     *         {
     *             "user_id": "applesupply",
     *             "supplier_code": "S000000A",
     *             "supplier_name": "Apple",
     *             "permission_category_select": "T",
     *             "permission_product_modify": "T",
     *             "permission_product_display": "T",
     *             "permission_product_selling": "T",
     *             "permission_product_delete": "T",
     *             "permission_board_manage": "T",
     *             "permission_amount_inquiry": "T",
     *             "permission_order_menu": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfSupplierUsers(
      input: RetrieveAListOfSupplierUsersInput,
      options?: AdminRequestOptions<
        RetrieveAListOfSupplierUsersOutput['users'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfSupplierUsersOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 공급사 운영자의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-supplier-users
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfSupplierUsers(
      input: RetrieveACountOfSupplierUsersInput,
      options?: AdminRequestOptions<
        RetrieveACountOfSupplierUsersOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfSupplierUsersOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 특정 공급사 운영자를 조회할 수 있습니다.
     * 공급사명, 공급사의 권한, 별명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-supplier-user-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "user": {
     *         "user_id": "supplyone",
     *         "supplier_code": "S000000A",
     *         "supplier_name": "Apple",
     *         "user_name": "Apple Product Supplier",
     *         "nick_name": "Guysinapple",
     *         "nick_name_icon_type": "D",
     *         "nick_name_icon_url": "https://{domain}/web/upload/admin1.gif",
     *         "use_nick_name_icon": "T",
     *         "use_writer_name_icon": "F",
     *         "email": "sample@sample.com",
     *         "phone": "010-0000-0000",
     *         "permission_shop_no": [
     *             1,
     *             2
     *         ],
     *         "permission_category_select": "T",
     *         "permitted_category_list": [
     *             29,
     *             27,
     *             28,
     *             33
     *         ],
     *         "permission_product_modify": "T",
     *         "permission_product_display": "T",
     *         "permission_product_selling": "T",
     *         "permission_product_delete": "F",
     *         "permission_board_manage": "T",
     *         "permission_amount_inquiry": "T",
     *         "permission_order_menu": "F"
     *     }
     * }
     * ```
     */
    retrieveSupplierUserDetails(
      input: RetrieveSupplierUserDetailsInput,
      options?: AdminRequestOptions<RetrieveSupplierUserDetailsOutput['user']>,
    ): Promise<AxiosResponse<RetrieveSupplierUserDetailsOutput>>;
    /**
     * @description
     * 쇼핑몰에 공급사 운영자를 새로이 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-supplier-user
     *
     * @example 응답 예시
     * ```json
     * {
     *     "user": {
     *         "user_id": "sampleid",
     *         "supplier_code": "S000000J",
     *         "user_name": [
     *             {
     *                 "shop_no": 1,
     *                 "user_name": "John Doe"
     *             },
     *             {
     *                 "shop_no": 2,
     *                 "user_name": "John Doe"
     *             }
     *         ],
     *         "nick_name": [
     *             {
     *                 "shop_no": 1,
     *                 "nick_name": "nickname1"
     *             },
     *             {
     *                 "shop_no": 2,
     *                 "nick_name": "nickname2"
     *             }
     *         ],
     *         "use_nick_name_icon": "F",
     *         "use_writer_name_icon": "F",
     *         "email": "sample@sample.com",
     *         "phone": "02-0000-0000",
     *         "permission_shop_no": [
     *             1,
     *             2
     *         ],
     *         "permission_category_select": "T",
     *         "permitted_category_list": [
     *             1,
     *             2
     *         ],
     *         "permission_product_modify": "T",
     *         "permission_product_display": "T",
     *         "permission_product_selling": "T",
     *         "permission_product_delete": "T",
     *         "permission_order_menu": "T",
     *         "permission_amount_inquiry": "T"
     *     }
     * }
     * ```
     */
    createASupplierUser(
      input: CreateASupplierUserInput,
      options?: AdminRequestOptions<CreateASupplierUserOutput['user']>,
    ): Promise<AxiosResponse<CreateASupplierUserOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 특정 공급사 운영자의 정보를 수정할 수 있습니다.
     * 공급사운영자명, 별명, 비밀번호 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-supplier-user
     *
     * @example 응답 예시
     * ```json
     * {
     *     "user": {
     *         "user_id": "sampleid",
     *         "supplier_code": "S000000J",
     *         "user_name": [
     *             {
     *                 "shop_no": 1,
     *                 "user_name": "John Doe"
     *             },
     *             {
     *                 "shop_no": 2,
     *                 "user_name": "John Doe"
     *             }
     *         ],
     *         "nick_name": [
     *             {
     *                 "shop_no": 1,
     *                 "nick_name": "nickname1"
     *             },
     *             {
     *                 "shop_no": 2,
     *                 "nick_name": "nickname2"
     *             }
     *         ],
     *         "use_nick_name_icon": "F",
     *         "use_writer_name_icon": "F",
     *         "email": "sample@sample.com",
     *         "phone": "02-0000-0000",
     *         "permission_shop_no": [
     *             1,
     *             2
     *         ],
     *         "permission_category_select": "T",
     *         "permitted_category_list": [
     *             1,
     *             2,
     *             3
     *         ],
     *         "permission_product_modify": "T",
     *         "permission_product_display": "T",
     *         "permission_product_selling": "T",
     *         "permission_product_delete": "T",
     *         "permission_amount_inquiry": "T",
     *         "permission_order_menu": "T"
     *     }
     * }
     * ```
     */
    updateASupplierUser(
      input: UpdateASupplierUserInput,
      options?: AdminRequestOptions<UpdateASupplierUserOutput['user']>,
    ): Promise<AxiosResponse<UpdateASupplierUserOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 특정 공급사 운영자를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-supplier-user
     *
     * @example 응답 예시
     * ```json
     * {
     *     "user": {
     *         "user_id": "sampleid"
     *     }
     * }
     * ```
     */
    deleteASupplierUser(
      input: DeleteASupplierUserInput,
      options?: AdminRequestOptions<DeleteASupplierUserOutput['user']>,
    ): Promise<AxiosResponse<DeleteASupplierUserOutput>>;
  }
}
