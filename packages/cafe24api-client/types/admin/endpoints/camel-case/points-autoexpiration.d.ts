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
   * 포인트 자동만료(Points autoexpiration)는 포인트를 자동으로 만료시키는 것과 관련된 기능입니다.
   * 자동만료 설정을 조회하거나 등록 및 삭제가 가능합니다.
   */
  export interface PointsAutoexpiration {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 최초 소멸 시행일
     *
     *
     */
    expirationDate: any;
    /**
     * @description
     * 소멸 실행 주기
     *
     * 1: 1개월
     * 3: 3개월
     * 6: 6개월
     * 12: 1년
     *
     *
     */
    intervalMonth: any;
    /**
     * @description
     * 소멸 대상 적립금
     *
     * 6: 소멸일 기준 6개월 이전 적립금
     * 12: 소멸일 기준 1년 이전 적립금
     * 18: 소멸일 기준 1년 6개월 이전 적립금
     * 24: 소멸일 기준 2년 이전 적립금
     * 30: 소멸일 기준 2년 6개월 이전 적립금
     * 36: 소멸일 기준 3년 이전 적립금
     *
     *
     */
    targetPeriodMonth: any;
    /**
     * @description
     * 소멸 대상 회원등급
     *
     * 0: 전체 회원
     *
     *
     */
    groupNo: any;
    /**
     * @description
     * 소멸 대상 기준 금액
     *
     *
     */
    standardPoint: any;
    /**
     * @description
     * 이메일 발송
     *
     * T: 설정함
     * F: 설정안함
     *
     *
     */
    sendEmail: any;
    /**
     * @description
     * SMS 발송
     *
     * T: 설정함
     * F: 설정안함
     *
     *
     */
    sendSms: any;
    /**
     * @description
     * 알람시기 선택
     *
     * 3: 3일 전 발송
     * 7: 7일 전 발송
     * 15: 15일 전 발송
     * 30: 30일 전 발송
     *
     *
     */
    notificationTimeDay: any;
  }

  export interface RetrieveAnAutomaticPointsExpirationInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
  }

  export interface RetrieveAnAutomaticPointsExpirationOutput {
    autoexpiration: {
      shopNo: number;
      expirationDate: Cafe24Date;
      intervalMonth: number;
      targetPeriodMonth: number;
      groupNo: number;
      standardPoint: string;
      sendEmail: Cafe24Enum;
      sendSms: Cafe24Enum;
      notificationTimeDay: number;
    };
  }
  export interface CreateAnAutomaticPointsExpirationInput {
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
     * 최초 소멸 시행일
     *
     * @required
     *
     * 날짜
     */
    expirationDate: any;
    /**
     * @description
     * 소멸 실행 주기
     *
     * 1: 1개월
     * 3: 3개월
     * 6: 6개월
     * 12: 1년
     *
     * @required
     */
    intervalMonth: any;
    /**
     * @description
     * 소멸 대상 적립금
     *
     * 6: 소멸일 기준 6개월 이전 적립금
     * 12: 소멸일 기준 1년 이전 적립금
     * 18: 소멸일 기준 1년 6개월 이전 적립금
     * 24: 소멸일 기준 2년 이전 적립금
     * 30: 소멸일 기준 2년 6개월 이전 적립금
     * 36: 소멸일 기준 3년 이전 적립금
     *
     * @required
     */
    targetPeriodMonth: any;
    /**
     * @description
     * 소멸 대상 회원등급
     *
     * 0: 전체 회원
     *
     * @default 0
     *
     *
     */
    groupNo?: any;
    /**
     * @description
     * 소멸 대상 기준 금액
     *
     * 소멸할 적립금의 최소 기준 금액 입력
     * 예) 100 기재 시, 100원 이상 적립금 보유 회원만 소멸 대상
     *
     * @required
     *
     * 최소값: [1]
     */
    standardPoint: any;
    /**
     * @description
     * 이메일 발송
     *
     * T: 설정함
     * F: 설정안함
     *
     * @default F
     *
     *
     */
    sendEmail?: any;
    /**
     * @description
     * SMS 발송
     *
     * T: 설정함
     * F: 설정안함
     *
     * @default F
     *
     *
     */
    sendSms?: any;
    /**
     * @description
     * 알람시기 선택
     *
     * 3: 3일 전 발송
     * 7: 7일 전 발송
     * 15: 15일 전 발송
     * 30: 30일 전 발송
     *
     *
     */
    notificationTimeDay?: any;
  }

  export interface CreateAnAutomaticPointsExpirationOutput {
    autoexpiration: {
      shopNo: number;
      expirationDate: Cafe24Date;
      intervalMonth: number;
      targetPeriodMonth: number;
      groupNo: number;
      standardPoint: string;
      sendEmail: Cafe24Enum;
      sendSms: Cafe24Enum;
      notificationTimeDay: number;
    };
  }
  export interface DeleteAnAutomaticPointsExpirationInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
  }

  export interface DeleteAnAutomaticPointsExpirationOutput {
    autoexpiration: {
      shopNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 적립금 자동만료 설정을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-automatic-points-expiration
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autoexpiration": {
     *         "shop_no": 1,
     *         "expiration_date": "2021-01-26",
     *         "interval_month": 1,
     *         "target_period_month": 12,
     *         "group_no": 0,
     *         "standard_point": "10.00",
     *         "send_email": "T",
     *         "send_sms": "F",
     *         "notification_time_day": 15
     *     }
     * }
     * ```
     */
    retrieveAnAutomaticPointsExpiration(
      input: RetrieveAnAutomaticPointsExpirationInput,
      options?: AdminRequestOptions<
        RetrieveAnAutomaticPointsExpirationOutput['autoexpiration']
      >,
    ): Promise<AxiosResponse<RetrieveAnAutomaticPointsExpirationOutput>>;
    /**
     * @description
     * 쇼핑몰의 포인트 자동만료 설정을 등록할 수 있습니다.
     * 적립금의 최초 소멸 시행일과 소멸 실행 주기 등을 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-automatic-points-expiration
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autoexpiration": {
     *         "shop_no": 1,
     *         "expiration_date": "2021-01-26",
     *         "interval_month": 1,
     *         "target_period_month": 12,
     *         "group_no": 0,
     *         "standard_point": "10.00",
     *         "send_email": "T",
     *         "send_sms": "F",
     *         "notification_time_day": 15
     *     }
     * }
     * ```
     */
    createAnAutomaticPointsExpiration(
      input: CreateAnAutomaticPointsExpirationInput,
      options?: AdminRequestOptions<
        CreateAnAutomaticPointsExpirationOutput['autoexpiration']
      >,
    ): Promise<AxiosResponse<CreateAnAutomaticPointsExpirationOutput>>;
    /**
     * @description
     * 쇼핑몰의 포인트 자동만료 설정을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-automatic-points-expiration
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autoexpiration": {
     *         "shop_no": 1
     *     }
     * }
     * ```
     */
    deleteAnAutomaticPointsExpiration(
      input: DeleteAnAutomaticPointsExpirationInput,
      options?: AdminRequestOptions<
        DeleteAnAutomaticPointsExpirationOutput['autoexpiration']
      >,
    ): Promise<AxiosResponse<DeleteAnAutomaticPointsExpirationOutput>>;
  }
}
