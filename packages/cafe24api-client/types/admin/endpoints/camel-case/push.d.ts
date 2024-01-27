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

  export interface Push {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shopNo: any;
    /**
      * @description
      * 푸시 코드
      * 
      * 
      */ 
    pushCode: any;
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
    sendType: any;
    /**
      * @description
      * 발송예약 일
      * 
      * 
      */ 
    reserveDay: any;
    /**
      * @description
      * 발송예약 시
      * 
      * 
      */ 
    reserveHour: any;
    /**
      * @description
      * 발송예약 분
      * 
      * 
      */ 
    reserveMinuate: any;
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
    osType: any;
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
    receiverType: any;
    /**
      * @description
      * 수신대상 회원등급
      * 
      * 
      */ 
    groupNo: any;
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
    contentAndroid: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    contentIos: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    imageUrl: any;
    /**
      * @description
      * 푸시 연결 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useLink: any;
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
    linkType: any;
    /**
      * @description
      * 푸시 외부 연결 URL
      * 
      * 
      */ 
    externalLink: any;
    /**
      * @description
      * 푸시 혜택 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useBenefit: any;
    /**
      * @description
      * 푸시 혜택 발송일 기준 종료일
      * 
      * 
      */ 
    benefitEndDay: any;
    /**
      * @description
      * 푸시 혜택 적립금액
      * 
      * 
      */ 
    benefitPoints: any;
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
    repetitionNo: any;
    /**
      * @description
      * 등록일
      * 
      * 
      */ 
    createdDate: any;
    /**
      * @description
      * 발송일시
      * 
      * 
      */ 
    sendDate: any;
    /**
      * @description
      * 발송예정일시
      * 
      * 
      */ 
    reserveDate: any;
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
    sendStatus: any;
    /**
      * @description
      * 발송건수 (Android)
      * 
      * 
      */ 
    sendCountAndroid: any;
    /**
      * @description
      * 발송건수 (iOS)
      * 
      * 
      */ 
    sendCountIos: any;
    /**
      * @description
      * 응답건수 (Android)
      * 
      * 
      */ 
    responseCountAndroid: any;
    /**
      * @description
      * 응답건수 (iOS)
      * 
      * 
      */ 
    responseCountIos: any;
    /**
      * @description
      * 수신대상 회원아이디
      * 
      * 
      */ 
    memberId: any;
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
    shopNo?: any;
    /**
      * @description
      * 푸시 현황조회
      * 
      * sending : 발송현황
      * reservation : 예약현황
      * 
      * @required
      */ 
    searchStatus: any;
    /**
      * @description
      * 검색 기준일
      * 
      * send_date : 발송일
      * regist_date : 등록일
      * 
      * 
      */ 
    searchDate?: any;
    /**
      * @description
      * 검색 시작일
      * 
      * 날짜
      */ 
    startDate?: any;
    /**
      * @description
      * 검색 종료일
      * 
      * 날짜
      */ 
    endDate?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    pushCode?: any;
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
    sendType?: any;
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
    receiverType?: any;
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
    shopNo: number;
    pushCode: string;
    sendType: string;
    reserveDay: any;
    reserveHour: any;
    reserveMinuate: any;
    osType: string;
    receiverType: string;
    groupNo: number[];
    title: string;
    contentAndroid: string;
    contentIos: any;
    imageUrl: string;
    useLink: Cafe24Enum;
    linkType: string;
    externalLink: string;
    useBenefit: Cafe24Enum;
    benefitEndDay: number;
    benefitPoints: string;
    silent: Cafe24Enum;
    repetitionNo: any;
    createdDate: Cafe24Datetime;
    sendDate: Cafe24Datetime;
    reserveDate: any;
    sendStatus: Cafe24Enum;
    sendCountAndroid: number;
    sendCountIos: any;
    responseCountAndroid: number;
    responseCountIos: any;
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
    shopNo?: any;
    /**
      * @description
      * 발송구분
      * 
      * immediately : 즉시발송
      * reservation : 예약발송
      * 
      * @required
      */ 
    sendType: any;
    /**
      * @description
      * 발송예약 일
      * 
      * 
      */ 
    reserveDay?: any;
    /**
      * @description
      * 발송예약 시
      * 
      * 최소: [0]~최대: [23]
      */ 
    reserveHour?: any;
    /**
      * @description
      * 발송예약 분
      * 
      * 최소: [0]~최대: [59]
      */ 
    reserveMinuate?: any;
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
    osType?: any;
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
    receiverType?: any;
    /**
      * @description
      * 수신대상 회원등급
      * 
      * 최소값: [1]
      */ 
    groupNo?: any;
    /**
      * @description
      * 수신대상 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    memberId?: any;
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
    contentAndroid?: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    contentIos?: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    imageUrl?: any;
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
    useLink?: any;
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
    linkType?: any;
    /**
      * @description
      * 푸시 외부 연결 URL
      * 
      * 
      */ 
    externalLink?: any;
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
    useBenefit?: any;
    /**
      * @description
      * 푸시 혜택 발송일 기준 종료일
      * 
      * 최소: [1]~최대: [999]
      */ 
    benefitEndDay?: any;
    /**
      * @description
      * 푸시 혜택 적립금액
      * 
      * 
      */ 
    benefitPoints?: any;
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
    shopNo: number;
    pushCode: string;
    sendType: string;
    reserveDay: any;
    reserveHour: any;
    reserveMinuate: any;
    osType: string;
    receiverType: string;
    groupNo: number[];
    memberId: any;
    title: string;
    contentAndroid: string;
    contentIos: any;
    imageUrl: string;
    useLink: Cafe24Enum;
    linkType: string;
    externalLink: string;
    useBenefit: Cafe24Enum;
    benefitEndDay: number;
    benefitPoints: string;
    silent: Cafe24Enum;
    createdDate: Cafe24Datetime;
    sendCountAndroid: number;
    sendCountIos: any;
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
    shopNo?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * @required
      */ 
    pushCode: any;
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
    contentAndroid?: any;
    /**
      * @description
      * 푸시 내용 (iOS)
      * 
      * 
      */ 
    contentIos?: any;
    /**
      * @description
      * 푸시 이미지 URL
      * 
      * 
      */ 
    imageUrl?: any;
  }

  export interface UpdateAPushNotificationOutput {
    push: { 
    shopNo: number;
    pushCode: string;
    sendType: string;
    reserveDay: any;
    reserveHour: any;
    reserveMinuate: any;
    osType: string;
    receiverType: string;
    groupNo: number[];
    memberId: any;
    title: string;
    contentAndroid: string;
    contentIos: any;
    imageUrl: string;
    useLink: Cafe24Enum;
    linkType: string;
    externalLink: string;
    useBenefit: Cafe24Enum;
    benefitEndDay: number;
    benefitPoints: string;
    silent: Cafe24Enum;
    createdDate: Cafe24Datetime;
    sendCountAndroid: number;
    sendCountIos: any;
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
    shopNo?: any;
    /**
      * @description
      * 푸시 코드
      * 
      * @required
      */ 
    pushCode: any;
  }

  export interface DeleteAPushNotificationOutput {
    push: { 
    shopNo: number;
    pushCode: string;
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
      options?: AdminRequestOptions<RetrievePushNotificationDeliveryHistoryOutput['push'][number]>,
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
      options?: AdminRequestOptions<CreateAPushNotificationOutput['push']>,
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
      options?: AdminRequestOptions<UpdateAPushNotificationOutput['push']>,
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
      options?: AdminRequestOptions<DeleteAPushNotificationOutput['push']>,
    ): Promise<AxiosResponse<DeleteAPushNotificationOutput>>;
  }
}
