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
   * 발송 그룹(Recipientgroups)은 대량 메일 발송 그룹을 관리하는 기능입니다.
   * 발송 그룹의 조회, 추가, 수정, 삭제가 가능합니다.
   */
  export interface Recipientgroups {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 발송그룹 번호
     *
     *
     */
    groupNo: any;
    /**
     * @description
     * 발송그룹명
     *
     * 최대글자수 : [40자]
     */
    groupName: any;
    /**
     * @description
     * 발송그룹 설명
     *
     * 최대글자수 : [255자]
     */
    groupDescription: any;
    /**
     * @description
     * 등록일
     *
     *
     */
    createdDate: any;
    /**
     * @description
     * 발송그룹 회원 수
     *
     *
     */
    groupMemberCount: any;
    /**
     * @description
     * 뉴스메일 수신여부
     *
     * T : 수신허용
     * F : 수신안함
     * D : 절대수신안함
     *
     *
     */
    newsMail: any;
    /**
     * @description
     * SMS 수신여부
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    sms: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    memberGroupNo: any;
    /**
     * @description
     * 회원구분
     *
     * p : 개인
     * c : 사업자
     * f : 외국인
     *
     *
     */
    memberClass: any;
    /**
     * @description
     * 회원타입
     *
     * vip : 특별관리회원
     * poor : 불량회원
     *
     *
     */
    memberType: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    joinPath: any;
    /**
     * @description
     * 유입경로
     *
     *
     */
    inflowPath: any;
    /**
     * @description
     * 유입경로 상세정보
     *
     *
     */
    inflowPathDetail: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * join : 회원가입일
     * birthday : 생일
     * wedding : 결혼기념일
     * partner : 배우자생일
     *
     *
     */
    dateType: any;
    /**
     * @description
     * 검색 시작일
     *
     * 날짜
     */
    startDate: any;
    /**
     * @description
     * 검색 종료일
     *
     * 날짜
     */
    endDate: any;
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
     * 나이 검색 최소값
     *
     *
     */
    ageMin: any;
    /**
     * @description
     * 나이 검색 최대값
     *
     *
     */
    ageMax: any;
    /**
     * @description
     * 성별
     *
     * M : 남자
     * F : 여자
     *
     *
     */
    gender: any;
    /**
     * @description
     * 적립금 검색 최소값
     *
     *
     */
    availablePointsMin: any;
    /**
     * @description
     * 적립금 검색 최대값
     *
     *
     */
    availablePointsMax: any;
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
     * 플러스앱 경로 가입회원 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    plusappMemberJoin: any;
  }

  export interface RetrieveDistributionGroupListInput {
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
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
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

  export interface RetrieveDistributionGroupListOutput {
    recipientgroups: {
      shopNo: number;
      groupNo: number;
      groupName: string;
      groupDescription: string;
      createdDate: Cafe24Datetime;
      groupMemberCount: number;
      newsMail: Cafe24Enum;
      sms: Cafe24Enum;
      memberGroupNo: number;
      memberClass: string;
      memberType: string;
      joinPath: Cafe24Enum;
      inflowPath: string;
      inflowPathDetail: string;
      dateType: string;
      startDate: Cafe24Date;
      endDate: Cafe24Date;
      solarCalendar: string;
      ageMin: number;
      ageMax: number;
      gender: Cafe24Enum;
      availablePointsMin: string;
      availablePointsMax: Cafe24Datetime;
      useMobileApp: Cafe24Enum;
      plusappMemberJoin: Cafe24Enum;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface RetrieveDistributionGroupDetailsInput {
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
     * 발송그룹 번호
     *
     * @required
     *
     * 최소값: [1]
     */
    groupNo: any;
  }

  export interface RetrieveDistributionGroupDetailsOutput {
    recipientgroup: {
      shopNo: number;
      groupNo: number;
      groupName: string;
      groupDescription: string;
      createdDate: Cafe24Datetime;
      groupMemberCount: number;
      newsMail: Cafe24Enum;
      sms: Cafe24Enum;
      memberGroupNo: number;
      memberClass: string;
      memberType: string;
      joinPath: Cafe24Enum;
      inflowPath: string;
      inflowPathDetail: string;
      dateType: string;
      startDate: Cafe24Date;
      endDate: Cafe24Date;
      solarCalendar: string;
      ageMin: number;
      ageMax: number;
      gender: Cafe24Enum;
      availablePointsMin: string;
      availablePointsMax: Cafe24Datetime;
      useMobileApp: Cafe24Enum;
      plusappMemberJoin: Cafe24Enum;
    };
  }
  export interface CreateADistributionGroupInput {
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
     * 발송그룹명
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    groupName: any;
    /**
     * @description
     * 발송그룹 설명
     *
     * 최대글자수 : [255자]
     */
    groupDescription?: any;
    /**
     * @description
     * 뉴스메일 수신여부
     *
     * T : 수신허용
     * F : 수신안함
     * D : 절대수신안함
     *
     *
     */
    newsMail?: any;
    /**
     * @description
     * SMS 수신여부
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    sms?: any;
    /**
     * @description
     * 회원등급번호
     *
     * 최소값: [1]
     */
    memberGroupNo?: any;
    /**
     * @description
     * 회원구분
     *
     * EC 일본, 베트남 버전에서는 사용할 수 없음.
     *
     * p : 개인
     * c : 사업자
     * f : 외국인
     *
     *
     */
    memberClass?: any;
    /**
     * @description
     * 회원타입
     *
     * vip : 특별관리회원
     * poor : 불량회원
     *
     *
     */
    memberType?: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    joinPath?: any;
    /**
     * @description
     * 유입경로
     *
     *
     */
    inflowPath?: any;
    /**
     * @description
     * 유입경로 상세정보
     *
     *
     */
    inflowPathDetail?: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * join : 회원가입일
     * birthday : 생일
     * wedding : 결혼기념일
     * partner : 배우자생일
     *
     *
     */
    dateType?: any;
    /**
     * @description
     * 검색 시작일
     *
     *
     */
    startDate?: any;
    /**
     * @description
     * 검색 종료일
     *
     *
     */
    endDate?: any;
    /**
     * @description
     * 양력여부
     *
     * T : 양력
     * F : 음력
     *
     *
     */
    solarCalendar?: any;
    /**
     * @description
     * 나이 검색 최소값
     *
     * 최소: [1]~최대: [99]
     */
    ageMin?: any;
    /**
     * @description
     * 나이 검색 최대값
     *
     * 최소: [1]~최대: [99]
     */
    ageMax?: any;
    /**
     * @description
     * 성별
     *
     * M : 남자
     * F : 여자
     *
     *
     */
    gender?: any;
    /**
     * @description
     * 적립금 검색 최소값
     *
     * 최소: [0]~최대: [999999999]
     */
    availablePointsMin?: any;
    /**
     * @description
     * 적립금 검색 최대값
     *
     * 최소: [0]~최대: [999999999]
     */
    availablePointsMax?: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    useMobileApp?: any;
    /**
     * @description
     * 플러스앱 경로 가입회원 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    plusappMemberJoin?: any;
  }

  export interface CreateADistributionGroupOutput {
    recipientgroup: {
      shopNo: number;
      groupNo: number;
      groupName: string;
      groupDescription: string;
      createdDate: Cafe24Datetime;
      groupMemberCount: number;
      newsMail: Cafe24Enum;
      sms: Cafe24Enum;
      memberGroupNo: number;
      memberClass: string;
      memberType: string;
      joinPath: Cafe24Enum;
      inflowPath: string;
      inflowPathDetail: string;
      dateType: string;
      startDate: Cafe24Date;
      endDate: Cafe24Date;
      solarCalendar: string;
      ageMin: number;
      ageMax: number;
      gender: Cafe24Enum;
      availablePointsMin: string;
      availablePointsMax: Cafe24Datetime;
      useMobileApp: Cafe24Enum;
      plusappMemberJoin: Cafe24Enum;
    };
  }
  export interface EditDistributionGroupInput {
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
     * 발송그룹 번호
     *
     * @required
     *
     * 최소값: [1]
     */
    groupNo: any;
    /**
     * @description
     * 발송그룹명
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    groupName: any;
    /**
     * @description
     * 발송그룹 설명
     *
     * 최대글자수 : [255자]
     */
    groupDescription?: any;
    /**
     * @description
     * 뉴스메일 수신여부
     *
     * T : 수신허용
     * F : 수신안함
     * D : 절대수신안함
     *
     *
     */
    newsMail?: any;
    /**
     * @description
     * SMS 수신여부
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    sms?: any;
    /**
     * @description
     * 회원등급번호
     *
     * 최소값: [1]
     */
    memberGroupNo?: any;
    /**
     * @description
     * 회원구분
     *
     * EC 일본, 베트남 버전에서는 사용할 수 없음.
     *
     * p : 개인
     * c : 사업자
     * f : 외국인
     *
     *
     */
    memberClass?: any;
    /**
     * @description
     * 회원타입
     *
     * vip : 특별관리회원
     * poor : 불량회원
     *
     *
     */
    memberType?: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    joinPath?: any;
    /**
     * @description
     * 유입경로
     *
     *
     */
    inflowPath?: any;
    /**
     * @description
     * 유입경로 상세정보
     *
     *
     */
    inflowPathDetail?: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * join : 회원가입일
     * birthday : 생일
     * wedding : 결혼기념일
     * partner : 배우자생일
     *
     *
     */
    dateType?: any;
    /**
     * @description
     * 검색 시작일
     *
     *
     */
    startDate?: any;
    /**
     * @description
     * 검색 종료일
     *
     *
     */
    endDate?: any;
    /**
     * @description
     * 양력여부
     *
     * T : 양력
     * F : 음력
     *
     *
     */
    solarCalendar?: any;
    /**
     * @description
     * 나이 검색 최소값
     *
     * 최소: [1]~최대: [99]
     */
    ageMin?: any;
    /**
     * @description
     * 나이 검색 최대값
     *
     * 최소: [1]~최대: [99]
     */
    ageMax?: any;
    /**
     * @description
     * 성별
     *
     * M : 남자
     * F : 여자
     *
     *
     */
    gender?: any;
    /**
     * @description
     * 적립금 검색 최소값
     *
     * 최소: [0]~최대: [999999999]
     */
    availablePointsMin?: any;
    /**
     * @description
     * 적립금 검색 최대값
     *
     * 최소: [0]~최대: [999999999]
     */
    availablePointsMax?: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    useMobileApp?: any;
    /**
     * @description
     * 플러스앱 경로 가입회원 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    plusappMemberJoin?: any;
  }

  export interface EditDistributionGroupOutput {
    recipientgroup: {
      shopNo: number;
      groupNo: number;
      groupName: string;
      groupDescription: string;
      createdDate: Cafe24Datetime;
      groupMemberCount: number;
      newsMail: Cafe24Enum;
      sms: Cafe24Enum;
      memberGroupNo: number;
      memberClass: string;
      memberType: string;
      joinPath: Cafe24Enum;
      inflowPath: string;
      inflowPathDetail: string;
      dateType: string;
      startDate: Cafe24Date;
      endDate: Cafe24Date;
      solarCalendar: string;
      ageMin: number;
      ageMax: number;
      gender: Cafe24Enum;
      availablePointsMin: string;
      availablePointsMax: Cafe24Datetime;
      useMobileApp: Cafe24Enum;
      plusappMemberJoin: Cafe24Enum;
    };
  }
  export interface DeleteDistributionGroupInput {
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
     * 발송그룹 번호
     *
     * @required
     *
     * 최소값: [1]
     */
    groupNo: any;
  }

  export interface DeleteDistributionGroupOutput {
    recipientgroup: {
      shopNo: number;
      groupNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 대량 메일 발송 그룹의 목록을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-distribution-group-list
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipientgroups": [
     *         {
     *             "shop_no": 1,
     *             "group_no": 1,
     *             "group_name": "Group - allow mail users",
     *             "group_description": "allowed to receive mail for advertising information",
     *             "created_date": "2021-09-15 11:15:56.139004",
     *             "group_member_count": 10,
     *             "news_mail": "T",
     *             "sms": "T",
     *             "member_group_no": 1,
     *             "member_class": "p",
     *             "member_type": "vip",
     *             "join_path": "P",
     *             "inflow_path": "",
     *             "inflow_path_detail": "",
     *             "date_type": "join",
     *             "start_date": "2021-01-01",
     *             "end_date": "2021-12-31",
     *             "solar_calendar": "",
     *             "age_min": 1,
     *             "age_max": 99,
     *             "gender": "M",
     *             "available_points_min": "0.00",
     *             "available_points_max": "1000000.00",
     *             "use_mobile_app": "F",
     *             "plusapp_member_join": "F"
     *         },
     *         {
     *             "shop_no": 1,
     *             "group_no": 2,
     *             "group_name": "Group - Do not allow mail users",
     *             "group_description": "do not allow receiving mail for advertising information",
     *             "created_date": "2021-09-15 11:25:58.175215",
     *             "group_member_count": 15,
     *             "news_mail": "F",
     *             "sms": "F",
     *             "member_group_no": 1,
     *             "member_class": "p",
     *             "member_type": "vip",
     *             "join_path": "P",
     *             "inflow_path": "",
     *             "inflow_path_detail": "",
     *             "date_type": "join",
     *             "start_date": "2021-01-01",
     *             "end_date": "2021-12-31",
     *             "solar_calendar": "",
     *             "age_min": 1,
     *             "age_max": 99,
     *             "gender": "M",
     *             "available_points_min": "0.00",
     *             "available_points_max": "1000000.00",
     *             "use_mobile_app": "F",
     *             "plusapp_member_join": "F"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/recipientgroups?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveDistributionGroupList(
      input: RetrieveDistributionGroupListInput,
      options?: AdminRequestOptions<
        RetrieveDistributionGroupListOutput['recipientgroups'][number]
      >,
    ): Promise<AxiosResponse<RetrieveDistributionGroupListOutput>>;
    /**
     * @description
     * 특정 대량 메일 발송 그룹의 상세 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-distribution-group-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipientgroup": {
     *         "shop_no": 1,
     *         "group_no": 2,
     *         "group_name": "Group - Do not allow mail users",
     *         "group_description": "do not allow receiving mail for advertising information",
     *         "created_date": "2021-09-15 11:25:58.175215",
     *         "group_member_count": 15,
     *         "news_mail": "F",
     *         "sms": "F",
     *         "member_group_no": 1,
     *         "member_class": "p",
     *         "member_type": "vip",
     *         "join_path": "P",
     *         "inflow_path": "",
     *         "inflow_path_detail": "",
     *         "date_type": "join",
     *         "start_date": "2021-01-01",
     *         "end_date": "2021-12-31",
     *         "solar_calendar": "",
     *         "age_min": 1,
     *         "age_max": 99,
     *         "gender": "M",
     *         "available_points_min": "0.00",
     *         "available_points_max": "1000000.00",
     *         "use_mobile_app": "F",
     *         "plusapp_member_join": "F"
     *     }
     * }
     * ```
     */
    retrieveDistributionGroupDetails(
      input: RetrieveDistributionGroupDetailsInput,
      options?: AdminRequestOptions<
        RetrieveDistributionGroupDetailsOutput['recipientgroup']
      >,
    ): Promise<AxiosResponse<RetrieveDistributionGroupDetailsOutput>>;
    /**
     * @description
     * 대량 메일 발송 그룹을 생성할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-distribution-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipientgroup": {
     *         "shop_no": 1,
     *         "group_no": 2,
     *         "group_name": "Group - Do not allow mail users",
     *         "group_description": "do not allow receiving mail for advertising information",
     *         "created_date": "2021-09-15 11:25:58.175215",
     *         "group_member_count": 15,
     *         "news_mail": "F",
     *         "sms": "F",
     *         "member_group_no": 1,
     *         "member_class": "p",
     *         "member_type": "vip",
     *         "join_path": "P",
     *         "inflow_path": "",
     *         "inflow_path_detail": "",
     *         "date_type": "join",
     *         "start_date": "2021-01-01",
     *         "end_date": "2021-12-31",
     *         "solar_calendar": "",
     *         "age_min": 1,
     *         "age_max": 99,
     *         "gender": "M",
     *         "available_points_min": "0.00",
     *         "available_points_max": "1000000.00",
     *         "use_mobile_app": "F",
     *         "plusapp_member_join": "F"
     *     }
     * }
     * ```
     */
    createADistributionGroup(
      input: CreateADistributionGroupInput,
      options?: AdminRequestOptions<
        CreateADistributionGroupOutput['recipientgroup']
      >,
    ): Promise<AxiosResponse<CreateADistributionGroupOutput>>;
    /**
     * @description
     * 특정 대량 메일 발송 그룹의 정보를 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#edit-distribution-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipientgroup": {
     *         "shop_no": 1,
     *         "group_no": 1,
     *         "group_name": "Group - VIP member",
     *         "group_description": "for vip member",
     *         "created_date": "2021-09-15 11:15:56.139004",
     *         "group_member_count": 25,
     *         "news_mail": "T",
     *         "sms": "T",
     *         "member_group_no": 1,
     *         "member_class": "p",
     *         "member_type": "vip",
     *         "join_path": "P",
     *         "inflow_path": "",
     *         "inflow_path_detail": "",
     *         "date_type": "join",
     *         "start_date": "2000-01-01",
     *         "end_date": "2021-12-31",
     *         "solar_calendar": "",
     *         "age_min": 1,
     *         "age_max": 99,
     *         "gender": "M",
     *         "available_points_min": "0.00",
     *         "available_points_max": "1000000.00",
     *         "use_mobile_app": "F",
     *         "plusapp_member_join": "F"
     *     }
     * }
     * ```
     */
    editDistributionGroup(
      input: EditDistributionGroupInput,
      options?: AdminRequestOptions<
        EditDistributionGroupOutput['recipientgroup']
      >,
    ): Promise<AxiosResponse<EditDistributionGroupOutput>>;
    /**
     * @description
     * 특정 대량 메일 발송 그룹을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-distribution-group
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipientgroup": {
     *         "shop_no": 1,
     *         "group_no": 3
     *     }
     * }
     * ```
     */
    deleteDistributionGroup(
      input: DeleteDistributionGroupInput,
      options?: AdminRequestOptions<
        DeleteDistributionGroupOutput['recipientgroup']
      >,
    ): Promise<AxiosResponse<DeleteDistributionGroupOutput>>;
  }
}
