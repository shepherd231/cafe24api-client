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
   * SEO 설정(Seo setting)은 검색결과 상위에 쇼핑몰이 노출되고 방문자가 증가하도록 하는 검색엔진 최적화(SEO) 작업입니다.
   */
  export interface SeoSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no: any;
    /**
     * @description
     * 공통페이지 title 태그
     *
     *
     */
    common_page_title: any;
    /**
     * @description
     * 공통페이지 description 태그
     *
     *
     */
    common_page_meta_description: any;
    /**
     * @description
     * 파비콘
     *
     * URL
     */
    favicon: any;
    /**
     * @description
     * 구글 서치 콘솔 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_google_search_console: any;
    /**
     * @description
     * 구글 서치 콘솔
     *
     *
     */
    google_search_console: any;
    /**
     * @description
     * 네이버 서치 어드바이저 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_naver_search_advisor: any;
    /**
     * @description
     * 네이버 서치 어드바이저
     *
     *
     */
    naver_search_advisor: any;
    /**
     * @description
     * SNS 공유 이미지
     *
     * URL
     */
    sns_share_image: any;
    /**
     * @description
     * 트위터 카드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_twitter_card: any;
    /**
     * @description
     * 검색로봇 접근 제어(PC)
     *
     *
     */
    robots_text: any;
    /**
     * @description
     * 검색로봇 접근 제어(모바일)
     *
     *
     */
    mobile_robots_text: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 여부(PC)
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_missing_page_redirect: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 연결 경로(PC)
     *
     *
     */
    missing_page_redirect_url: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 여부(모바일)
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    mobile_use_missing_page_redirect: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 연결 경로(모바일)
     *
     *
     */
    mobile_missing_page_redirect_url: any;
    /**
     * @description
     * 사이트맵 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_sitemap_auto_update: any;
    /**
     * @description
     * RSS 피드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_rss: any;
    /**
     * @description
     * 메인분류 명
     *
     *
     */
    display_group: any;
    /**
     * @description
     * Head HTML(PC)
     *
     *
     */
    header_tag: any;
    /**
     * @description
     * Body HTML(PC)
     *
     *
     */
    footer_tag: any;
    /**
     * @description
     * Head HTML(모바일)
     *
     *
     */
    mobile_header_tag: any;
    /**
     * @description
     * Body HTML(모바일)
     *
     *
     */
    mobile_footer_tag: any;
  }

  export interface RetrieveSeoSettingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no?: any;
  }

  export interface RetrieveSeoSettingsOutput {
    seo: {
      shop_no: number;
      common_page_title: string;
      common_page_meta_description: string;
      favicon: string;
      use_google_search_console: Cafe24Enum;
      google_search_console: string;
      use_naver_search_advisor: Cafe24Enum;
      naver_search_advisor: string;
      sns_share_image: string;
      use_twitter_card: Cafe24Enum;
      robots_text: Cafe24Datetime;
      mobile_robots_text: Cafe24Datetime;
      use_missing_page_redirect: Cafe24Enum;
      missing_page_redirect_url: Cafe24Enum;
      mobile_use_missing_page_redirect: Cafe24Enum;
      mobile_missing_page_redirect_url: Cafe24Enum;
      use_sitemap_auto_update: Cafe24Enum;
      use_rss: Cafe24Enum;
      display_group: number;
      header_tag: string;
      footer_tag: string;
      mobile_header_tag: string;
      mobile_footer_tag: string;
    };
  }
  export interface UpdateStoreSeoSettingsInput {
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
     * 공통페이지 title 태그
     *
     *
     */
    common_page_title?: any;
    /**
     * @description
     * 공통페이지 description 태그
     *
     *
     */
    common_page_meta_description?: any;
    /**
     * @description
     * 파비콘
     *
     * URL
     */
    favicon?: any;
    /**
     * @description
     * 구글 서치 콘솔 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_google_search_console?: any;
    /**
     * @description
     * 구글 서치 콘솔
     *
     *
     */
    google_search_console?: any;
    /**
     * @description
     * 네이버 서치 어드바이저 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_naver_search_advisor?: any;
    /**
     * @description
     * 네이버 서치 어드바이저
     *
     *
     */
    naver_search_advisor?: any;
    /**
     * @description
     * SNS 공유 이미지
     *
     * URL
     */
    sns_share_image?: any;
    /**
     * @description
     * 트위터 카드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_twitter_card?: any;
    /**
     * @description
     * 검색로봇 접근 제어(PC)
     *
     *
     */
    robots_text?: any;
    /**
     * @description
     * 검색로봇 접근 제어(모바일)
     *
     *
     */
    mobile_robots_text?: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 여부(PC)
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_missing_page_redirect?: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 연결 경로(PC)
     *
     *
     */
    missing_page_redirect_url?: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 여부(모바일)
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    mobile_use_missing_page_redirect?: any;
    /**
     * @description
     * 없는 페이지 연결 리다이렉션 연결 경로(모바일)
     *
     *
     */
    mobile_missing_page_redirect_url?: any;
    /**
     * @description
     * 사이트맵 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_sitemap_auto_update?: any;
    /**
     * @description
     * RSS 피드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_rss?: any;
    /**
     * @description
     * 메인분류 명
     *
     *
     */
    display_group?: any;
    /**
     * @description
     * Head HTML(PC)
     *
     *
     */
    header_tag?: any;
    /**
     * @description
     * Body HTML(PC)
     *
     *
     */
    footer_tag?: any;
    /**
     * @description
     * Head HTML(모바일)
     *
     *
     */
    mobile_header_tag?: any;
    /**
     * @description
     * Body HTML(모바일)
     *
     *
     */
    mobile_footer_tag?: any;
  }

  export interface UpdateStoreSeoSettingsOutput {
    seo: {
      shop_no: number;
      common_page_title: string;
      common_page_meta_description: string;
      favicon: string;
      use_google_search_console: Cafe24Enum;
      google_search_console: string;
      use_naver_search_advisor: Cafe24Enum;
      naver_search_advisor: string;
      sns_share_image: string;
      use_twitter_card: Cafe24Enum;
      robots_text: Cafe24Datetime;
      mobile_robots_text: Cafe24Datetime;
      use_missing_page_redirect: Cafe24Enum;
      missing_page_redirect_url: Cafe24Enum;
      mobile_use_missing_page_redirect: Cafe24Enum;
      mobile_missing_page_redirect_url: Cafe24Enum;
      use_sitemap_auto_update: Cafe24Enum;
      use_rss: Cafe24Enum;
      display_group: number;
      header_tag: string;
      footer_tag: string;
      mobile_header_tag: string;
      mobile_footer_tag: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 검색엔진 최적화(SEO) 설정을 조회합니다.
     * 메타 태그, 파비콘, 검색로봇 접근 제어 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-seo-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "common_page_title": "Sample mall | Outerwear, Tops, Dresses, Bottoms, Accessories",
     *         "common_page_meta_description": "Sample mall | Outerwear, Tops, Dresses, Bottoms, Accessories",
     *         "favicon": "https://sample.cafe24.com/web/upload/favicon-b8141fe545ef3dda08cfd2d6ec5a9972.ico",
     *         "use_google_search_console": "T",
     *         "google_search_console": "<meta name=\"google-site-verification\" content=\"code\" />",
     *         "use_naver_search_advisor": "T",
     *         "naver_search_advisor": "<meta name=\"naver-site-verification\" content=\"code\" />",
     *         "sns_share_image": "https://sample.cafe24.com/web/upload/share-image-1-974433be4123fea4fa711fd0443a0b51.jpeg",
     *         "use_twitter_card": "T",
     *         "robots_text": "User-agent: *\nDisallow: /admin\nDisallow: /api\nAllow: /\nUser-agent: bingbot\nCrawl-delay: 10",
     *         "mobile_robots_text": "User-agent: *\nDisallow: /admin\nDisallow: /api\nAllow: /\nUser-agent: bingbot\nCrawl-delay: 10",
     *         "use_missing_page_redirect": "T",
     *         "missing_page_redirect_url": "/",
     *         "mobile_use_missing_page_redirect": "F",
     *         "mobile_missing_page_redirect_url": "/",
     *         "use_sitemap_auto_update": "T",
     *         "use_rss": "T",
     *         "display_group": 3,
     *         "header_tag": "<meta name=\"googlebot\" content=\"noindex\"><meta name=\"googlebot-news\" content=\"nosnippet\">",
     *         "footer_tag": "",
     *         "mobile_header_tag": "<meta name=\"googlebot\" content=\"noindex\"><meta name=\"googlebot-news\" content=\"nosnippet\">",
     *         "mobile_footer_tag": ""
     *     }
     * }
     * ```
     */
    retrieveSeoSettings(
      input: RetrieveSeoSettingsInput,
      options?: AdminRequestOptions<RetrieveSeoSettingsOutput['seo']>,
    ): Promise<AxiosResponse<RetrieveSeoSettingsOutput>>;
    /**
     * @description
     * 쇼핑몰의 검색엔진 최적화(SEO) 설정을 수정합니다.
     * 메타 태그, 파비콘, 검색로봇 접근 제어 등을 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-store-seo-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "common_page_title": "Sample mall | Outerwear, Tops, Dresses, Bottoms, Accessories",
     *         "common_page_meta_description": "Sample mall | Outerwear, Tops, Dresses, Bottoms, Accessories",
     *         "favicon": "https://sample.cafe24.com/web/upload/favicon-b8141fe545ef3dda08cfd2d6ec5a9972.ico",
     *         "use_google_search_console": "T",
     *         "google_search_console": "<meta name=\"google-site-verification\" content=\"code\" />",
     *         "use_naver_search_advisor": "T",
     *         "naver_search_advisor": "<meta name=\"naver-site-verification\" content=\"code\" />",
     *         "sns_share_image": "https://sample.cafe24.com/web/upload/share-image-1-974433be4123fea4fa711fd0443a0b51.jpeg",
     *         "use_twitter_card": "T",
     *         "robots_text": "User-agent: *\nDisallow: /admin\nDisallow: /api\nAllow: /\nUser-agent: bingbot\nCrawl-delay: 10",
     *         "mobile_robots_text": "User-agent: *\nDisallow: /admin\nDisallow: /api\nAllow: /\nUser-agent: bingbot\nCrawl-delay: 10",
     *         "use_missing_page_redirect": "T",
     *         "missing_page_redirect_url": "/",
     *         "mobile_use_missing_page_redirect": "T",
     *         "mobile_missing_page_redirect_url": "/",
     *         "use_sitemap_auto_update": "T",
     *         "use_rss": "T",
     *         "display_group": 3,
     *         "header_tag": "<meta name=\"googlebot\" content=\"noindex\"><meta name=\"googlebot-news\" content=\"nosnippet\">",
     *         "footer_tag": "",
     *         "mobile_header_tag": "<meta name=\"googlebot\" content=\"noindex\"><meta name=\"googlebot-news\" content=\"nosnippet\">",
     *         "mobile_footer_tag": ""
     *     }
     * }
     * ```
     */
    updateStoreSeoSettings(
      input: UpdateStoreSeoSettingsInput,
      options?: AdminRequestOptions<UpdateStoreSeoSettingsOutput['seo']>,
    ): Promise<AxiosResponse<UpdateStoreSeoSettingsOutput>>;
  }
}
