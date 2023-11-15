import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상점(Store)은 쇼핑몰의 쇼핑몰명, 관리자 정보, 사업자 등록번호와 고객센터 전화번호 등 쇼핑몰의 기본적인 정보를 확인할 수 있는 기능입니다.
   */
  export interface Store {
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
     * 쇼핑몰명
     *
     * 해당 상점의 쇼핑몰명([쇼핑몰 설정 &gt; 기본 설정 &gt; &#39;쇼핑몰 정보 &gt; 내 쇼핑몰 정보&#39;])
     *
     *
     */
    shopName: any;
    /**
     * @description
     * 상점 아이디
     *
     * 쇼핑몰 아이디. 대표운영자의 아이디이자, 쇼핑몰 기본 제공 도메인(mallid.cafe24.com)에 사용한다.
     *
     *
     */
    mallId: any;
    /**
     * @description
     * 기본제공 도메인
     *
     * 쇼핑몰 생성시 자동으로 생성되는 기본제공 도메인 정보. 해당 도메인을 통해 쇼핑몰에 접근할 수 있다.
     *
     *
     */
    baseDomain: any;
    /**
     * @description
     * 대표도메인
     *
     * 쇼핑몰에 연결한 대표도메인. 대표도메인을 연결하였을 경우에만 노출된다.
     *
     *
     */
    primaryDomain: any;
    /**
     * @description
     * 사업자등록번호
     *
     * 사업장이 위치한 국가에서 발급한 쇼핑몰의 사업자 등록 번호.
     *
     *
     */
    companyRegistrationNo: any;
    /**
     * @description
     * 상호명
     *
     * 사업자 등록시 등록한 상호명 또는 법인명.
     *
     *
     */
    companyName: any;
    /**
     * @description
     * 대표자명
     *
     * 사업자 등록시 등록한 대표자명.
     *
     *
     */
    presidentName: any;
    /**
     * @description
     * 업태
     *
     * 사업자 등록시 등록한 업태.
     *
     *
     */
    companyCondition: any;
    /**
     * @description
     * 종목
     *
     * 사업자 등록시 등록한 종목.
     *
     *
     */
    companyLine: any;
    /**
     * @description
     * 사업장 국가
     *
     * 사업장이 있는 국가명.
     *
     *
     */
    country: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    countryCode: any;
    /**
     * @description
     * 우편번호
     *
     * 사업장의 우편번호
     *
     *
     */
    zipcode: any;
    /**
     * @description
     * 기본 주소
     *
     * 사업장 주소(시/군/도)
     *
     *
     */
    address1: any;
    /**
     * @description
     * 상세 주소
     *
     * 사업장 주소(상세 주소)
     *
     *
     */
    address2: any;
    /**
     * @description
     * 전화번호
     *
     *
     */
    phone: any;
    /**
     * @description
     * 팩스번호
     *
     *
     */
    fax: any;
    /**
     * @description
     * 이메일
     *
     * 운영자가 자동메일을 수신할 경우 수신할 메일 주소
     *
     *
     */
    email: any;
    /**
     * @description
     * 발신전용 이메일
     *
     * 고객과 운영자에게 자동메일 발송시 보내는 사람 메일주소
     *
     *
     */
    notificationOnlyEmail: any;
    /**
     * @description
     * 쇼핑몰 주소
     *
     *
     */
    mallUrl: any;
    /**
     * @description
     * 통신 판매업 신고
     *
     * 통신판매업 신고가 되었는지 신고 여부
     *
     * T : 신고함
     * F : 신고안함
     *
     *
     */
    mailOrderSalesRegistration: any;
    /**
     * @description
     * 통신판매신고 번호
     *
     *
     */
    mailOrderSalesRegistrationNumber: any;
    /**
     * @description
     * 통신판매업 미신고 사유
     *
     * 통신판매업 신고를 하지 않았을 경우 해당 사유.
     *
     *
     */
    missingReportReasonType: any;
    /**
     * @description
     * 통신판매업 미신고 사유 상세 내용
     *
     * 통신판매업 미신고 사유가 &#34;기타&#34;일 경우 상세 사유.
     *
     *
     */
    missingReportReason: any;
    /**
     * @description
     * 회사소개
     *
     * 쇼핑몰에 대한 간략한 소개 표시. 쇼핑몰의 회사 소개 화면에 표시된다.
     *
     *
     */
    aboutUsContents: any;
    /**
     * @description
     * 회사약도
     *
     * 쇼핑몰에 대한 간략한 약도 표시. 쇼핑몰의 회사 소개 화면에 표시된다.
     *
     *
     */
    companyMapUrl: any;
    /**
     * @description
     * 고객센터 상담/주문 전화
     *
     * 쇼핑몰 화면에 표시되는 고객센터 상담 전화
     *
     *
     */
    customerServicePhone: any;
    /**
     * @description
     * 고객센터 상담/주문 이메일
     *
     * 쇼핑몰 화면에 표시되는 고객센터 상담 이메일 주소.
     *
     *
     */
    customerServiceEmail: any;
    /**
     * @description
     * 고객센터 팩스 번호
     *
     * 쇼핑몰 화면에 표시되는 고객센터 팩스 번호.
     *
     *
     */
    customerServiceFax: any;
    /**
     * @description
     * 고객센터 SMS 수신번호
     *
     * 쇼핑몰 화면에 표시되는 고객센터 SMS 수신 번호.
     *
     *
     */
    customerServiceSms: any;
    /**
     * @description
     * 고객센터 운영시간
     *
     * 쇼핑몰 화면에 표시되는 고객센터 운영시간.
     *
     *
     */
    customerServiceHours: any;
    /**
     * @description
     * 개인정보보호 책임자명
     *
     * 쇼핑몰 화면에 표시되는 개인정보보호 책임자 이름.
     *
     *
     */
    privacyOfficerName: any;
    /**
     * @description
     * 개인정보보호 책임자 지위
     *
     *
     */
    privacyOfficerPosition: any;
    /**
     * @description
     * 개인정보보호 책임자 부서
     *
     *
     */
    privacyOfficerDepartment: any;
    /**
     * @description
     * 개인정보보호 책임자 연락처
     *
     * 쇼핑몰 화면에 표시되는 개인정보보호 책임자의 전화번호.
     *
     *
     */
    privacyOfficerPhone: any;
    /**
     * @description
     * 개인정보보호 책임자 이메일
     *
     * 쇼핑몰 화면에 표시되는 개인정보보호 책임자의 이메일 주소.
     *
     *
     */
    privacyOfficerEmail: any;
    /**
     * @description
     * 서비스 문의안내 모바일 표시여부
     *
     * 서비스 문의 안내를 모바일에 노출시킬 것인지 여부.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    contactUsMobile: any;
    /**
     * @description
     * 서비스 문의안내 내용
     *
     * 상품상세 페이지에 노출시키는 서비스 문의 안내 내용.
     *
     *
     */
    contactUsContents: any;
    /**
     * @description
     * 판매 상품 카테고리
     *
     * 회원가입 및 쇼핑몰 생성 직후 입력하는 판매 상품 카테고리의 정보를 조회할 수 있습니다.
     *
     * (2023년 4월 이후 가입한 몰에 한하여 조회할 수 있습니다.)
     *
     * Undecided : 아직 결정하지 못했어요.
     * Apparel : 패션의류
     * FashionAccessories : 패션잡화
     * LuxuryGoods : 수입명품
     * BrandApparel : 브랜드의류
     * BrandAccessories : 브랜드잡화
     * Food_Beverage : 식품
     * Lifestyle_HealthCare : 생활/건강
     * Furniture_HomeDecor : 가구/인테리어
     * Beauty_PersonalCare : 화장품/미용
     * Maternity_BabyProducts : 출산/육아
     * Digital_HomeAppliances : 디지털/가전
     * CarAccessories : 자동차
     * Rentals : 렌탈 서비스
     * Sports_Leisure : 스포츠/레저
     * CD_DVD : 음반/DVD
     * Books : 도서
     * Travels_Services : 여가/생활편의
     * Used_Refurbished_Exhibition : 중고/리퍼/전시
     * Others : 기타/서비스
     *
     *
     */
    salesProductCategories: any;
  }

  export interface RetrieveStoreDetailsInput {
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
  }

  export interface RetrieveStoreDetailsOutput {
    store: {
      shopNo: number;
      shopName: string;
      mallId: string;
      baseDomain: string;
      primaryDomain: string;
      companyRegistrationNo: string;
      companyName: string;
      presidentName: string;
      companyCondition: string;
      companyLine: string;
      country: string;
      countryCode: string;
      zipcode: Cafe24Datetime;
      address1: string;
      address2: string;
      phone: string;
      fax: string;
      email: string;
      notificationOnlyEmail: string;
      mallUrl: string;
      mailOrderSalesRegistration: Cafe24Enum;
      mailOrderSalesRegistrationNumber: string;
      missingReportReasonType: string;
      missingReportReason: string;
      aboutUsContents: string;
      companyMapUrl: string;
      customerServicePhone: string;
      customerServiceEmail: string;
      customerServiceFax: string;
      customerServiceSms: string;
      customerServiceHours: string;
      privacyOfficerName: string;
      privacyOfficerPosition: string;
      privacyOfficerDepartment: string;
      privacyOfficerPhone: string;
      privacyOfficerEmail: string;
      contactUsMobile: Cafe24Enum;
      contactUsContents: string;
      salesProductCategories: string[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-store-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "store": {
     *         "shop_no": 1,
     *         "shop_name": "My Shopping Mall",
     *         "mall_id": "myshop",
     *         "base_domain": "sample.cafe24.com",
     *         "primary_domain": "sample.com",
     *         "company_registration_no": "118-81-20586",
     *         "company_name": "My Shopping Mall",
     *         "president_name": "John Doe",
     *         "company_condition": "Retail",
     *         "company_line": "E-Commerce Product",
     *         "country": "Korea",
     *         "country_code": "KOR",
     *         "zipcode": "07071",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "phone": "02-0000-0000",
     *         "fax": "02-0000-0000",
     *         "email": "sample@sample.com",
     *         "notification_only_email": "sample@sample.com",
     *         "mall_url": "http://sample.com",
     *         "mail_order_sales_registration": "T",
     *         "mail_order_sales_registration_number": "강남 제 02-680-014호",
     *         "missing_report_reason_type": "Preparing for Register",
     *         "missing_report_reason": "Preparing to report ecommerce business",
     *         "about_us_contents": "<b>My Shopping Mall Information</b>",
     *         "company_map_url": "https://myshop.cafe24.com/web/upload/map.jpg",
     *         "customer_service_phone": "02-0000-0000",
     *         "customer_service_email": "sample@sample.com",
     *         "customer_service_fax": "02-0000-0000",
     *         "customer_service_sms": "02-0000-0000",
     *         "customer_service_hours": "9:00 AM ~ 5:00 PM",
     *         "privacy_officer_name": "Hong Gildong",
     *         "privacy_officer_position": "Manager",
     *         "privacy_officer_department": "Information Security Team",
     *         "privacy_officer_phone": "02-0000-0000",
     *         "privacy_officer_email": "sample@sample.com",
     *         "contact_us_mobile": "T",
     *         "contact_us_contents": "Service Information",
     *         "sales_product_categories": [
     *             "Apparel",
     *             "FashionAccessories"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveStoreDetails(
      input: RetrieveStoreDetailsInput,
      options?: RequestOptions<RetrieveStoreDetailsInput>,
    ): Promise<AxiosResponse<RetrieveStoreDetailsOutput>>;
  }
}
