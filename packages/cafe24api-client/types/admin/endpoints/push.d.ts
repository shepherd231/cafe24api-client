import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  export interface Push {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * 푸시 코드
      * 
      * 
      */ 
    push_code: any;
    /**
      * @description
      * 발송구분
      * 
      * immediately : 즉시발송
      * reservation : 예약발송
      * repetition : 반복발송
      * 
      * 
      */ 
    send_type: any;
    /**
      * @description
      * 발송예약 일
      * 
      * 
      */ 
    reserve_day: any;
    /**
      * @description
      * 발송예약 시
      * 
      * 
      */ 
    reserve_hour: any;
    /**
      * @description
      * 발송예약 분
      * 
      * 
      */ 
    reserve_minuate: any;
    /**
      * @description
      * OS 타입
      * 
      * all : 전체
      * android : 안드로이드
      * ios : iOS
      * 
      * 
      */ 
    os_type: any;
    /**
      * @description
      * 수신대상 타입
      * 
      * all : 앱사용자
      * group : 가입회원
      * id : 대상등록
      * 
      * 
      */ 
    receiver_type: any;
    /**
      * @description
      * 수신대상 회원등급
      * 
      * 
      */ 
    group_no: any;
    /**
      * @description
      * 푸시 제목
      * 
      * 
      */ 
    title: any;
    /**
      * @description
      * 푸시 내용 (Android)
      * 
      * 
      */ 
    content_android: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    content_ios: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    image_url: any;
    /**
      * @description
      * 푸시 연결 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_link: any;
    /**
      * @description
      * 푸시 연결 타입
      * 
      * url : 쇼핑몰페이지
      * coupon : 쿠폰 화면
      * notice : 푸시 알림함
      * 
      * 
      */ 
    link_type: any;
    /**
      * @description
      * 푸시 외부 연결 URL
      * 
      * 
      */ 
    external_link: any;
    /**
      * @description
      * 푸시 혜택 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_benefit: any;
    /**
      * @description
      * 푸시 혜택 발송일 기준 종료일
      * 
      * 
      */ 
    benefit_end_day: any;
    /**
      * @description
      * 푸시 혜택 적립금액
      * 
      * 
      */ 
    benefit_points: any;
    /**
      * @description
      * 사일런트 푸시 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    silent: any;
    /**
      * @description
      * 푸시 반복발송 번호
      * 
      * 
      */ 
    repetition_no: any;
    /**
      * @description
      * 등록일
      * 
      * 
      */ 
    created_date: any;
    /**
      * @description
      * 발송일시
      * 
      * 
      */ 
    send_date: any;
    /**
      * @description
      * 발송예정일시
      * 
      * 
      */ 
    reserve_date: any;
    /**
      * @description
      * 발송상태
      * 
      * W : 대기
      * F : 실패
      * T : 성공
      * H : 중단
      * D : 실행중
      * X : 실패건재발송
      * 
      * 
      */ 
    send_status: any;
    /**
      * @description
      * 발송건수 (Android)
      * 
      * 
      */ 
    send_count_android: any;
    /**
      * @description
      * 발송건수 (iOS)
      * 
      * 
      */ 
    send_count_ios: any;
    /**
      * @description
      * 응답건수 (Android)
      * 
      * 
      */ 
    response_count_android: any;
    /**
      * @description
      * 응답건수 (iOS)
      * 
      * 
      */ 
    response_count_ios: any;
    /**
      * @description
      * 수신대상 회원아이디
      * 
      * 
      */ 
    member_id: any;
  }

  export interface RetrievePushNotificationDeliveryHistoryInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 푸시 현황조회
      * 
      * sending : 발송현황
      * reservation : 예약현황
      * 
      * @required
      */ 
    search_status: any;
    /**
      * @description
      * 검색 기준일
      * 
      * send_date : 발송일
      * regist_date : 등록일
      * 
      * 
      */ 
    search_date?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 날짜
      */ 
    start_date?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 날짜
      */ 
    end_date?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    push_code?: any;
    /**
      * @description
      * 푸시 내용
      * 
      * 
      */ 
    content?: any;
    /**
      * @description
      * 발송구분
      * 
      * immediately : 즉시발송
      * reservation : 예약발송
      * repetition : 반복발송
      * 
      * 
      */ 
    send_type?: any;
    /**
      * @description
      * 수신대상 타입
      * 
      * all : 앱사용자
      * group : 가입회원
      * id : 대상등록
      * 
      * 
      */ 
    receiver_type?: any;
    /**
      * @description
      * 사일런트 푸시 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    silent?: any;
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

  export interface RetrievePushNotificationDeliveryHistoryOutput {
    push: { 
    shop_no: number;
    push_code: string;
    send_type: string;
    reserve_day: any;
    reserve_hour: any;
    reserve_minuate: any;
    os_type: string;
    receiver_type: string;
    group_no: number[];
    title: string;
    content_android: string;
    content_ios: any;
    image_url: string;
    use_link: Cafe24Enum;
    link_type: string;
    external_link: string;
    use_benefit: Cafe24Enum;
    benefit_end_day: number;
    benefit_points: string;
    silent: Cafe24Enum;
    repetition_no: any;
    created_date: Cafe24Datetime;
    send_date: Cafe24Datetime;
    reserve_date: any;
    send_status: Cafe24Enum;
    send_count_android: number;
    send_count_ios: any;
    response_count_android: number;
    response_count_ios: any;
    }[];
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface CreateAPushNotificationInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 발송구분
      * 
      * immediately : 즉시발송
      * reservation : 예약발송
      * 
      * @required
      */ 
    send_type: any;
    /**
      * @description
      * 발송예약 일
      * 
      * 
      */ 
    reserve_day?: any;
    /**
      * @description
      * 발송예약 시
      * 
      * 최소: [0]~최대: [23]
      */ 
    reserve_hour?: any;
    /**
      * @description
      * 발송예약 분
      * 
      * 최소: [0]~최대: [59]
      */ 
    reserve_minuate?: any;
    /**
      * @description
      * OS 타입
      * 
      * all : 전체
      * android : 안드로이드
      * ios : iOS
      * 
      * @default all
      * 
      * 
      */ 
    os_type?: any;
    /**
      * @description
      * 수신대상 타입
      * 
      * all : 앱사용자
      * group : 가입회원
      * id : 대상등록
      * 
      * @default all
      * 
      * 
      */ 
    receiver_type?: any;
    /**
      * @description
      * 수신대상 회원등급
      * 
      * 최소값: [1]
      */ 
    group_no?: any;
    /**
      * @description
      * 수신대상 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    member_id?: any;
    /**
      * @description
      * 푸시 제목
      * 
      * 
      */ 
    title?: any;
    /**
      * @description
      * 푸시 내용 (Android)
      * 
      * 
      */ 
    content_android?: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    content_ios?: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    image_url?: any;
    /**
      * @description
      * 푸시 연결 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    use_link?: any;
    /**
      * @description
      * 푸시 연결 타입
      * 
      * url : 쇼핑몰페이지
      * coupon : 쿠폰 화면
      * notice : 푸시 알림함
      * 
      * 
      */ 
    link_type?: any;
    /**
      * @description
      * 푸시 외부 연결 URL
      * 
      * 
      */ 
    external_link?: any;
    /**
      * @description
      * 푸시 혜택 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    use_benefit?: any;
    /**
      * @description
      * 푸시 혜택 발송일 기준 종료일
      * 
      * 최소: [1]~최대: [999]
      */ 
    benefit_end_day?: any;
    /**
      * @description
      * 푸시 혜택 적립금액
      * 
      * 
      */ 
    benefit_points?: any;
    /**
      * @description
      * 사일런트 푸시 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    silent?: any;
  }

  export interface CreateAPushNotificationOutput {
    push: { 
    shop_no: number;
    push_code: string;
    send_type: string;
    reserve_day: any;
    reserve_hour: any;
    reserve_minuate: any;
    os_type: string;
    receiver_type: string;
    group_no: number[];
    member_id: any;
    title: string;
    content_android: string;
    content_ios: any;
    image_url: string;
    use_link: Cafe24Enum;
    link_type: string;
    external_link: string;
    use_benefit: Cafe24Enum;
    benefit_end_day: number;
    benefit_points: string;
    silent: Cafe24Enum;
    created_date: Cafe24Datetime;
    send_count_android: number;
    send_count_ios: any;
    };
  }
  export interface UpdateAPushNotificationInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * @required
      */ 
    push_code: any;
    /**
      * @description
      * 푸시 제목
      * 
      * 
      */ 
    title?: any;
    /**
      * @description
      * 푸시 내용 (Android)
      * 
      * 
      */ 
    content_android?: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    content_ios?: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    image_url?: any;
  }

  export interface UpdateAPushNotificationOutput {
    push: { 
    shop_no: number;
    push_code: string;
    send_type: string;
    reserve_day: any;
    reserve_hour: any;
    reserve_minuate: any;
    os_type: string;
    receiver_type: string;
    group_no: number[];
    member_id: any;
    title: string;
    content_android: string;
    content_ios: any;
    image_url: string;
    use_link: Cafe24Enum;
    link_type: string;
    external_link: string;
    use_benefit: Cafe24Enum;
    benefit_end_day: number;
    benefit_points: string;
    silent: Cafe24Enum;
    created_date: Cafe24Datetime;
    send_count_android: number;
    send_count_ios: any;
    };
  }
  export interface DeleteAPushNotificationInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * @required
      */ 
    push_code: any;
  }

  export interface DeleteAPushNotificationOutput {
    push: { 
    shop_no: number;
    push_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-push-notification-delivery-history
     *
     * @example 응답 예시
     * ```json
     * {
     *     "push": [
     *         {
     *             "shop_no": 1,
     *             "push_code": "Q220412143053At9ZWy",
     *             "send_type": "immediately",
     *             "reserve_day": null,
     *             "reserve_hour": null,
     *             "reserve_minuate": null,
     *             "os_type": "android",
     *             "receiver_type": "group",
     *             "group_no": [
     *                 1,
     *                 3
     *             ],
     *             "title": "Off-season sale!",
     *             "content_android": "From new arrivals to best sellers! Do not miss this chance!",
     *             "content_ios": null,
     *             "image_url": "https://{mall_id}.cafe24.com/web/mobile/frontapp/push/2022/04/28/Q220412143053At9ZWy.png",
     *             "use_link": "T",
     *             "link_type": "url",
     *             "external_link": "/index.html",
     *             "use_benefit": "T",
     *             "benefit_end_day": 3,
     *             "benefit_points": "500.00",
     *             "silent": "T",
     *             "repetition_no": null,
     *             "created_date": "2022-12-05T15:53:41+09:00",
     *             "send_date": "2022-12-05T15:54:02+09:00",
     *             "reserve_date": null,
     *             "send_status": "T",
     *             "send_count_android": 12,
     *             "send_count_ios": null,
     *             "response_count_android": 12,
     *             "response_count_ios": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "push_code": "Q22042814093890D2eG",
     *             "send_type": "reservation",
     *             "reserve_day": "2022-12-10",
     *             "reserve_hour": 9,
     *             "reserve_minuate": 0,
     *             "os_type": "all",
     *             "receiver_type": "all",
     *             "group_no": null,
     *             "title": "Off-season sale!",
     *             "content_android": "From new arrivals to best sellers! Do not miss this chance!",
     *             "content_ios": null,
     *             "image_url": "https://{mall_id}.cafe24.com/web/mobile/frontapp/push/2022/04/28/Q220412143053At9ZWy.png",
     *             "use_link": "T",
     *             "link_type": "coupon",
     *             "external_link": "",
     *             "use_benefit": "T",
     *             "benefit_end_day": 3,
     *             "benefit_points": "500.00",
     *             "silent": "T",
     *             "repetition_no": null,
     *             "created_date": "2022-12-05T15:53:41+09:00",
     *             "send_date": "2022-12-10T09:00:52+09:00",
     *             "reserve_date": "2022-12-10T09:00:00+09:00",
     *             "send_status": "T",
     *             "send_count_android": 12,
     *             "send_count_ios": 30,
     *             "response_count_android": 12,
     *             "response_count_ios": 30
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "prev",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/push?search_status=sending&search_date=regist_date&start_date=2022-09-30&end_date=2022-12-15&limit=10&offset=0"
     *         },
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/push?search_status=sending&search_date=regist_date&start_date=2022-09-30&end_date=2022-12-15&limit=10&offset=20"
     *         }
     *     ]
     * }
     * ```
     */
    retrievePushNotificationDeliveryHistory(
      input: RetrievePushNotificationDeliveryHistoryInput,
      options?: RequestOptions<RetrievePushNotificationDeliveryHistoryOutput['push'][number]>,
    ): Promise<AxiosResponse<RetrievePushNotificationDeliveryHistoryOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-push-notification
     *
     * @example 응답 예시
     * ```json
     * {
     *     "push": {
     *         "shop_no": 1,
     *         "push_code": "Q220412143053At9ZWy",
     *         "send_type": "immediately",
     *         "reserve_day": null,
     *         "reserve_hour": null,
     *         "reserve_minuate": null,
     *         "os_type": "android",
     *         "receiver_type": "group",
     *         "group_no": [
     *             1,
     *             3
     *         ],
     *         "member_id": null,
     *         "title": "Off-season sale!",
     *         "content_android": "From new arrivals to best sellers! Do not miss this chance!",
     *         "content_ios": null,
     *         "image_url": "https://{mall_id}.cafe24.com/web/mobile/frontapp/push/2022/12/19/Q220412143053At9ZWy.png",
     *         "use_link": "T",
     *         "link_type": "url",
     *         "external_link": "/index.html",
     *         "use_benefit": "T",
     *         "benefit_end_day": 3,
     *         "benefit_points": "500.00",
     *         "silent": "T",
     *         "created_date": "2022-12-05T15:53:41+09:00",
     *         "send_count_android": 12,
     *         "send_count_ios": null
     *     }
     * }
     * ```
     */
    createAPushNotification(
      input: CreateAPushNotificationInput,
      options?: RequestOptions<CreateAPushNotificationOutput['push']>,
    ): Promise<AxiosResponse<CreateAPushNotificationOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-push-notification
     *
     * @example 응답 예시
     * ```json
     * {
     *     "push": {
     *         "shop_no": 1,
     *         "push_code": "Q220412143053At9ZWy",
     *         "send_type": "immediately",
     *         "reserve_day": null,
     *         "reserve_hour": null,
     *         "reserve_minuate": null,
     *         "os_type": "android",
     *         "receiver_type": "group",
     *         "group_no": [
     *             1,
     *             3
     *         ],
     *         "member_id": null,
     *         "title": "[On Sale ~50%] Off-season sale!",
     *         "content_android": "From new arrivals to best sellers! Do not miss this chance!",
     *         "content_ios": null,
     *         "image_url": "https://{mall_id}.cafe24.com/web/mobile/frontapp/push/2022/12/19/Q220412143053At9ZWy.png",
     *         "use_link": "T",
     *         "link_type": "url",
     *         "external_link": "/index.html",
     *         "use_benefit": "T",
     *         "benefit_end_day": 3,
     *         "benefit_points": "500.00",
     *         "silent": "T",
     *         "created_date": "2022-12-05T15:53:41+09:00",
     *         "send_count_android": 12,
     *         "send_count_ios": null
     *     }
     * }
     * ```
     */
    updateAPushNotification(
      input: UpdateAPushNotificationInput,
      options?: RequestOptions<UpdateAPushNotificationOutput['push']>,
    ): Promise<AxiosResponse<UpdateAPushNotificationOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-push-notification
     *
     * @example 응답 예시
     * ```json
     * {
     *     "push": {
     *         "shop_no": 1,
     *         "push_code": "Q22042814093890D2eG"
     *     }
     * }
     * ```
     */
    deleteAPushNotification(
      input: DeleteAPushNotificationInput,
      options?: RequestOptions<DeleteAPushNotificationOutput['push']>,
    ): Promise<AxiosResponse<DeleteAPushNotificationOutput>>;
  }
}
