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
   *
   *
   * 회원(Customers)은 쇼핑몰의 상품을 구매하는 고객들 중 쇼핑몰의 쿠폰, 적립금, 할인 등의 혜택을 받기 위해 가입한 고객들입니다.
   * 회원 관리를 위해 쇼핑몰 운영자는 회원을 특정 회원 등급으로 분류하거나 특별회원으로 지정할 수 있습니다.
   */
  export interface Customers {
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
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    memberId: any;
    /**
     * @description
     * 회원등급번호
     *
     * 해당 회원의 회원등급의 번호
     *
     *
     */
    groupNo: any;
    /**
     * @description
     * 회원인증여부
     *
     * 회원 인증여부. 인증에 따라 회원은 4종류로 구분된다. 인증회원을 특별관리회원으로 설정할 경우 해당 회원은 가장 마지막에 설정한 특별관리회원으로 표시된다.
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     *
     *
     */
    memberAuthentication: any;
    /**
     * @description
     * 불량회원설정
     *
     * 불량회원 여부. 불량회원일 경우 불량회원 타입에 따라 상품구매 차단, 로그인 차단, 로그인과 상품구매 모두를 차단할 수 있음.
     *
     * T : 설정함
     * F : 설정안함
     *
     *
     */
    useBlacklist: any;
    /**
     * @description
     * 불량회원 차단설정
     *
     * 해당 회원의 불량회원 타입. 불량회원 타입에 따라 상품구매 차단, 로그인 차단, 로그인과 상품구매 모두를 차단할 수 있음.
     *
     * P : 상품구매차단
     * L : 로그인차단
     * A : 로그인&amp;상품구매 차단
     *
     *
     */
    blacklistType: any;
    /**
     * @description
     * 인증 수단
     *
     * null : 인증안함
     * i : 아이핀인증
     * m : 휴대폰 본인인증
     * e : 이메일인증
     * d : 휴대폰 인증(중복 확인)
     * a : 앱 인증(기타 인증)
     *
     *
     */
    authenticationMethod: any;
    /**
     * @description
     * SMS 수신여부
     *
     * SMS를 수신할지 여부. &#39;수신거부&#39; 시 광고, 영리성 목적 외 서비스에 필요한 주요 메일은 정상적으로 수신함.
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    sms: any;
    /**
     * @description
     * 뉴스메일 수신여부
     *
     * 이메일을 수신할지 여부. &#39;수신거부&#39; 시 광고, 영리성 목적 외 서비스에 필요한 주요 메일은 정상적으로 수신함.
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    newsMail: any;
    /**
     * @description
     * 양력여부
     *
     * T : 양력
     * F : 음력
     *
     *
     */
    solarCalendar: any;
    /**
     * @description
     * 총 적립금
     *
     *
     */
    totalPoints: any;
    /**
     * @description
     * 가용 적립금
     *
     *
     */
    availablePoints: any;
    /**
     * @description
     * 사용 적립금
     *
     *
     */
    usedPoints: any;
    /**
     * @description
     * 최근 접속일시
     *
     * 해당 회원의 최종 로그인 일시
     *
     *
     */
    lastLoginDate: any;
    /**
     * @description
     * 성별
     *
     * 해당 회원의 성별
     *
     * M : 남자
     * F : 여자
     *
     *
     */
    gender: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    useMobileApp: any;
    /**
     * @description
     * 가용 예치금
     *
     *
     */
    availableCredits: any;
    /**
     * @description
     * 가입일
     *
     *
     */
    createdDate: any;
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
     *
     */
    fixedGroup: any;
  }

  export interface RetrieveAListOfCustomersInput {
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
     * 휴대전화
     *
     * 검색할 쇼핑몰 회원의 휴대전화번호. 개인정보 보호를 위해 전체 휴대전화번호를 입력해야 한다. cellphone 또는 member_id 중 하나는 반드시 검색 조건으로 지정되어야 한다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    cellphone?: any;
    /**
     * @description
     * 회원아이디
     *
     * 검색할 쇼핑몰 회원의 아이디. 개인정보 보호를 위해 전체 아이디를 입력해야 합니다.cellphone 또는 member_id 중 하나는 반드시 검색 조건으로 지정되어야 한다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 최대글자수 : [20자]
     */
    memberId?: any;
  }

  export interface RetrieveAListOfCustomersOutput {
    customers: {
      shopNo: number;
      memberId: string;
      groupNo: number;
      memberAuthentication: Cafe24Enum;
      useBlacklist: Cafe24Enum;
      blacklistType: string;
      authenticationMethod: string;
      sms: Cafe24Enum;
      newsMail: Cafe24Enum;
      solarCalendar: Cafe24Enum;
      totalPoints: string;
      availablePoints: string;
      usedPoints: string;
      lastLoginDate: Cafe24Datetime;
      createdDate: Cafe24Datetime;
      gender: Cafe24Enum;
      useMobileApp: Cafe24Enum;
      availableCredits: string;
      fixedGroup: Cafe24Enum;
    }[];
  }
  export interface DeleteAnAccountInput {
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
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    memberId: any;
    /**
     * @description
     * 적립금보유회원 탈퇴 처리 여부
     *
     * F : 탈퇴 안 함
     * T : 탈퇴 처리
     *
     *
     */
    isPointCheck?: any;
  }

  export interface DeleteAnAccountOutput {
    customer: {
      shopNo: number;
      memberId: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 가입한 특정 회원들을 검색합니다.
     * 검색할 회원의 휴대전화 또는 회원아이디가 검색 조건으로 지정되야합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customers": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "group_no": 1,
     *             "member_authentication": "T",
     *             "use_blacklist": "F",
     *             "blacklist_type": "",
     *             "authentication_method": "i",
     *             "sms": "T",
     *             "news_mail": "T",
     *             "solar_calendar": "T",
     *             "total_points": "0.00",
     *             "available_points": "0.00",
     *             "used_points": "0.00",
     *             "last_login_date ": "2019-04-16T11:19:27+09:00",
     *             "created_date": "2019-04-20T11:19:27+09:00",
     *             "gender ": "M",
     *             "use_mobile_app ": "T",
     *             "available_credits ": "0.00",
     *             "fixed_group": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "member_id": "testid",
     *             "group_no": 1,
     *             "member_authentication": "T",
     *             "use_blacklist": "F",
     *             "blacklist_type": "F",
     *             "authentication_method": "m",
     *             "sms": "F",
     *             "news_mail": "F",
     *             "solar_calendar": "F",
     *             "total_points": "0.00",
     *             "available_points": "0.00",
     *             "used_points": "0.00",
     *             "last_login_date ": "2019-04-16T11:19:27+09:00",
     *             "created_date": "2019-04-20T11:19:27+09:00",
     *             "gender ": "F",
     *             "use_mobile_app ": "F",
     *             "available_credits ": "0.00",
     *             "fixed_group": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomers(
      input: RetrieveAListOfCustomersInput,
      options?: AdminRequestOptions<
        RetrieveAListOfCustomersOutput['customers'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCustomersOutput>>;
    /**
     * @description
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-account
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customer": {
     *         "shop_no": 1,
     *         "member_id": "sampleid"
     *     }
     * }
     * ```
     */
    deleteAnAccount(
      input: DeleteAnAccountInput,
      options?: AdminRequestOptions<DeleteAnAccountOutput['customer']>,
    ): Promise<AxiosResponse<DeleteAnAccountOutput>>;
  }
}
