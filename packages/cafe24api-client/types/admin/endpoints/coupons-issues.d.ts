import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 쿠폰 발급(Coupons issues)은 생성된 쿠폰에 관한 기능입니다.
   * 쿠폰 발급은 하위 리소스로 쿠폰(Coupons) 하위에서만 사용할 수 있습니다.
   * 생성된 쿠폰에 대한 발급, 발급한 쿠폰에 대한 조회가 가능합니다.
   */
  export interface CouponsIssues {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    coupon_no: any;
    /**
     * @description
     * 쿠폰 발급번호
     *
     *
     */
    issue_no: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 발급대상 회원등급 번호
     *
     *
     */
    group_no: any;
    /**
     * @description
     * 쿠폰 발급일자
     *
     *
     */
    issued_date: any;
    /**
     * @description
     * 만료일
     *
     *
     */
    expiration_date: any;
    /**
     * @description
     * 쿠폰사용 여부
     *
     *
     */
    used_coupon: any;
    /**
     * @description
     * 쿠폰 사용 일자
     *
     *
     */
    used_date: any;
    /**
     * @description
     * 관련 주문번호
     *
     *
     */
    related_order_id: any;
    /**
     * @description
     * 카운트
     *
     *
     */
    count: any;
  }

  export interface RetrieveAListOfIssuedCouponsInput {
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
     * 쿠폰번호
     *
     * @required
     */
    coupon_no: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    group_no?: any;
    /**
     * @description
     * 쿠폰 발급일자
     *
     * 날짜
     */
    issued_date?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 날짜
     */
    issued_start_date?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 날짜
     */
    issued_end_date?: any;
    /**
     * @description
     * 쿠폰사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    used_coupon?: any;
    /**
     * @description
     * 해당 쿠폰 발급번호 이후 검색
     *
     *
     */
    since_issue_no?: any;
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
     * 최대값: [8000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfIssuedCouponsOutput {
    issues: {
      shop_no: number;
      coupon_no: Cafe24Datetime;
      issue_no: Cafe24Datetime;
      member_id: string;
      group_no: number;
      issued_date: Cafe24Datetime;
      expiration_date: Cafe24Datetime;
      used_coupon: Cafe24Enum;
      used_date: string;
      related_order_id: string;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface CreateCouponIssuanceHistoryInput {
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
    shop_no?: any;
    /**
     * @description
     * 쿠폰번호
     *
     * @required
     */
    coupon_no: any;
    /**
     * @description
     * 회원/조건 선택
     *
     * 쿠폰 발급 대상 회원의 범위를 특정하여 쿠폰을 발급할 수 있음.
     * 특정회원그룹(G)을 입력할 경우 group_no를 필수로 입력해야한다.
     * 특정회원(M)을 입력할 경우 member_id를 필수로 입력해야한다.
     *
     * A : 전체 회원
     * G : 특정 회원 그룹
     * M : 특정 회원
     *
     * @required
     */
    issued_member_scope: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    group_no?: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id?: any;
    /**
     * @description
     * 쿠폰발급 SMS 발송 여부
     *
     * 쿠폰 발급정보를 SMS로 발송할지 여부
     *
     * EC 일본, 베트남, 필리핀 버전에서는 사용할 수 없음.
     *
     * T : 발송함
     * F : 발송안함
     *
     * @default F
     *
     *
     */
    send_sms_for_issue?: any;
    /**
     * @description
     * 중복발급설정
     *
     * 쿠폰의 중복발급설정 여부.
     *
     * T : 발급함
     * F : 발급안함
     * S : 발급안함(사용유무
     * 사용기간 추가검증 안 함)
     *
     * @default F
     *
     *
     */
    allow_duplication?: any;
    /**
     * @description
     * 1회 발급시 1장만 발급할지 여부
     *
     * 쿠폰을 발급할 때 1회 발급시 1장만 발급할지 여부
     *
     * T : 1장씩 발급
     * F : 동시발행수량 설정만큼 발급
     *
     * @default T
     *
     *
     */
    single_issue_per_once?: any;
    /**
     * @description
     * 다수 발행시 발행 수량
     *
     * 쿠폰 1회 발급시 여러장 발행하는 경우 그 수량
     *
     * @default 2
     *
     * 최소값: [2]
     * 최대값: [10]
     */
    issue_count_per_once?: any;
    /**
     * @description
     * 발급처 구분
     *
     * 쿠폰이 발행된 출처 구분
     *
     * W : 웹
     * M : 모바일
     * P : 플러스앱
     *
     *
     */
    issued_place_type?: any;
    /**
     * @description
     * 앱 설치시 쿠폰 발급
     *
     * 앱 설치시 쿠폰이 발급되는 시점
     *
     * INSTALLATION : 앱 설치시 쿠폰 발급
     * ACCEPTING_PUSH : 앱 푸시 수신 On시 쿠폰 발급
     *
     *
     */
    issued_by_action_type?: any;
    /**
     * @description
     * 발급 사유 구분
     *
     * 혜택으로 인한 쿠폰발급 시 해당되는 혜택
     *
     * C : 출석체크 이벤트
     * U : 회원정보 수정 이벤트
     * B : 배너수익쉐어프로그램
     * R : 룰렛게임(CMC)팀
     * Z : 플러스앱설치(플러스앱)
     * Y : 푸시알림 ON(플러스앱)
     * X : 플러스앱 주문(플러스앱)
     * M : 리마인드 Me 주문
     * W : 리마인드 Me 리워드
     * V : 통합멤버십
     * L : 평생회원 전환 이벤트
     *
     *
     */
    issued_by_event_type?: any;
    /**
     * @description
     * 발급자 ID
     *
     *
     */
    request_admin_id?: any;
  }

  export interface CreateCouponIssuanceHistoryOutput {
    issues: {
      shop_no: number;
      count: {
        9000000000000000031: number;
      };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 생성된 쿠폰에 대한 발급내역의 조회가 가능합니다.
     * 회원아이디, 회원등급번호, 쿠폰사용 여부등을 확인할 수 있습니다.
     * offset 최대값인 8000개 이상이 발급된 쿠폰의 내역을 조회하기 위해서는 since_issue_no 파라메터를 이용하시면 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-issued-coupons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "issues": [
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000032",
     *             "issue_no": "9000000000000000132",
     *             "member_id": "sampleId",
     *             "group_no": 1,
     *             "issued_date": "2020-04-01T00:00:00+09:00",
     *             "expiration_date": "2020-04-04T00:00:00+09:00",
     *             "used_coupon": "F",
     *             "used_date": "null",
     *             "related_order_id": "null"
     *         },
     *         {
     *             "shop_no": 1,
     *             "coupon_no": "9000000000000000032",
     *             "issue_no": "9000000000000000133",
     *             "member_id": "sampleId2",
     *             "group_no": 1,
     *             "issued_date": "2020-04-02T00:00:00+09:00",
     *             "expiration_date": "2020-04-05T00:00:00+09:00",
     *             "used_coupon": "T",
     *             "used_date": "2020-04-03T00:00:00+09:00",
     *             "related_order_id": "20200403-0000014"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/coupons/9000000000000000032/issues?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfIssuedCoupons(
      input: RetrieveAListOfIssuedCouponsInput,
      options?: RequestOptions<RetrieveAListOfIssuedCouponsInput>,
    ): Promise<AxiosResponse<RetrieveAListOfIssuedCouponsOutput>>;
    /**
     * @description
     * 생성된 쿠폰에 대한 발급이 가능합니다.
     * 쿠폰을 발급하기 위해서는 우선 쿠폰을 먼저 생성해야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-coupon-issuance-history
     *
     * @example 응답 예시
     * ```json
     * {
     *     "issues": {
     *         "shop_no": 1,
     *         "count": {
     *             "9000000000000000031": 3
     *         }
     *     }
     * }
     * ```
     */
    createCouponIssuanceHistory(
      input: CreateCouponIssuanceHistoryInput,
      options?: RequestOptions<CreateCouponIssuanceHistoryInput>,
    ): Promise<AxiosResponse<CreateCouponIssuanceHistoryOutput>>;
  }
}
