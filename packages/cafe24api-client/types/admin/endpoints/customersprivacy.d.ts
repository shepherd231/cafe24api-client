import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 회원 개인정보(Customersprivacy)는 특정 회원의 개인정보에 대한 리소스입니다.
   * 민감한 개인정보가 포함되어 있으므로 사용에 주의를 기울여야 합니다.
   */
  export interface Customersprivacy {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
    /**
     * @description
     * 이름
     *
     * 해당 회원의 이름
     *
     *
     */
    name: any;
    /**
     * @description
     * 영문이름
     *
     * 해당 회원의 영문 이름
     *
     *
     */
    name_english: any;
    /**
     * @description
     * 발음표기 이름 (일본어)
     *
     * 해당 회원의 발음 표기 이름(일본어)
     *
     *
     */
    name_phonetic: any;
    /**
     * @description
     * 전화번호
     *
     * 해당 회원의 일반전화
     *
     *
     */
    phone: any;
    /**
     * @description
     * 휴대전화
     *
     * 해당 회원의 휴대전화
     *
     *
     */
    cellphone: any;
    /**
     * @description
     * 이메일
     *
     * 해당 회원의 이메일
     *
     *
     */
    email: any;
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
    news_mail: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdparty_agree: any;
    /**
     * @description
     * 결혼기념일
     *
     * 해당 회원의 결혼기념일
     *
     * 날짜
     */
    wedding_anniversary: any;
    /**
     * @description
     * 생일
     *
     * 해당 회원의 생일
     *
     * 날짜
     */
    birthday: any;
    /**
     * @description
     * 양력여부
     *
     * 생일이 양력인지 음력인지 여부
     *
     * T : 양력
     * F : 음력
     *
     *
     */
    solar_calendar: any;
    /**
     * @description
     * 총 적립금
     *
     *
     */
    total_points: any;
    /**
     * @description
     * 가용 적립금
     *
     *
     */
    available_points: any;
    /**
     * @description
     * 사용 적립금
     *
     *
     */
    used_points: any;
    /**
     * @description
     * 시/군/도시
     *
     * 최대글자수 : [255자]
     */
    city: any;
    /**
     * @description
     * 주/도
     *
     * 최대글자수 : [255자]
     */
    state: any;
    /**
     * @description
     * 기본 주소
     *
     * 해당 회원의 기본주소(시/군/도)
     *
     * 최대글자수 : [255자]
     */
    address1: any;
    /**
     * @description
     * 상세 주소
     *
     * 해당 회원의 상세주소
     *
     * 최대글자수 : [255자]
     */
    address2: any;
    /**
     * @description
     * 회원등급번호
     *
     * 해당 회원의 회원등급의 번호
     *
     *
     */
    group_no: any;
    /**
     * @description
     * 직종
     *
     * 해당 회원의 직종
     *
     *
     */
    job_class: any;
    /**
     * @description
     * 직업
     *
     * 해당 회원의 직업
     *
     *
     */
    job: any;
    /**
     * @description
     * 우편번호
     *
     * 최대글자수 : [14자]
     */
    zipcode: any;
    /**
     * @description
     * 가입일
     *
     * 해당 회원의 가입일시
     *
     *
     */
    created_date: any;
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
    member_authentication: any;
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
    use_blacklist: any;
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
    blacklist_type: any;
    /**
     * @description
     * 최근 접속일시
     *
     * 해당 회원의 최종 로그인 일시
     *
     *
     */
    last_login_date: any;
    /**
     * @description
     * 회원권한구분
     *
     * 회원 권한 구분. 회원 권한은 일반회원, 대표운영자, 부운영자, 공급사로 권한이 구분됨.
     *
     * C : 일반회원
     * P : 대표 운영자
     * A : 부운영자
     * S : 공급사
     *
     *
     */
    member_authority: any;
    /**
     * @description
     * 운영자 별명
     *
     * 해당 회원의 별명
     *
     * 최대글자수 : [50자]
     */
    nick_name: any;
    /**
     * @description
     * 추천인아이디
     *
     * 해당 회원의 가입당시 입력한 추천인 아이디
     *
     *
     */
    recommend_id: any;
    /**
     * @description
     * 지역코드
     *
     * 해당 회원의 주거지역
     *
     *
     */
    residence: any;
    /**
     * @description
     * 관심분야
     *
     * 해당 회원의 관심사
     *
     *
     */
    interest: any;
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
     * 회원타입
     *
     * 해당 회원의 회원 타입
     *
     * p : 개인
     * c : 사업자
     * f : 외국인
     *
     *
     */
    member_type: any;
    /**
     * @description
     * 사업자 구분
     *
     * 해당 회원의 회원타입이 사업자일경우
     *
     * p : 개인사업자
     * c : 법인사업자
     *
     *
     */
    company_type: any;
    /**
     * @description
     * 외국인 인증방법
     *
     * 해당 외국인 회원의 인증방법
     *
     * f : 외국인등록번호
     * p : 여권번호
     * d : 국제운전면허증
     *
     *
     */
    foreigner_type: any;
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
    authentication_method: any;
    /**
     * @description
     * 평생회원 동의여부
     *
     * T : 동의함 F : 동의안함
     *
     *
     */
    lifetime_member: any;
    /**
     * @description
     * 법인명
     *
     * 해당 회원의 법인명
     *
     *
     */
    corporate_name: any;
    /**
     * @description
     * 국적
     *
     * 해당 회원이 &#34;외국인 회원&#34;일 경우, 해당 회원의 국적
     *
     *
     */
    nationality: any;
    /**
     * @description
     * 쇼핑몰명
     *
     * 해당 회원의 상호명
     *
     *
     */
    shop_name: any;
    /**
     * @description
     * 국가코드
     *
     * 해당 회원이 가입시 입력한 국가
     *
     *
     */
    country_code: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * 해당 회원의 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    use_mobile_app: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    join_path: any;
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
    fixed_group: any;
    /**
     * @description
     * 환불 은행 코드
     *
     * 최대글자수 : [20자]
     */
    refund_bank_code: any;
    /**
     * @description
     * 환불 계좌번호
     *
     * 최대글자수 : [40자]
     */
    refund_bank_account_no: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     *
     */
    refund_bank_account_holder: any;
    /**
     * @description
     * 업태
     *
     * 최대글자수 : [50자]
     */
    company_condition: any;
    /**
     * @description
     * 종목
     *
     * 최대글자수 : [50자]
     */
    company_line: any;
    /**
     * @description
     * 연동중인 SNS
     *
     *
     */
    sns_list: any;
    /**
     * @description
     * 가용 예치금
     *
     *
     */
    available_credits: any;
    /**
     * @description
     * 추가항목
     *
     * 해당 회원의 추가항목
     *
     *
     */
    additional_information: any;
  }

  export interface RetrieveAListOfCustomerInformationInput {
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
     * 검색 타입
     *
     * 회원 검색을 회원정보 기반으로 할지 가입일 기준으로 할지 선택하여 검색할 수 있다.
     * 가입일 기준으로 검색할 경우 offset과 관계 없이 전체 회원을 검색할 수 있다.
     *
     * ※ 가입일 기준 사용시 created_start_date 외의 모든 검색 조건은 사용할 수 없다.
     *
     * customer_info : 회원정보 기반 검색
     * created_date : 가입일 기준 검색
     *
     * @default customer_info
     *
     *
     */
    search_type?: any;
    /**
     * @description
     * 가입일 기준 검색시 검색 시작일
     *
     * search_type이 created_date 일 경우 가입일 기준의 검색 시작일. 해당 가입일 이후에 가입한 회원을 검색할 수 있다.
     *
     * 날짜
     */
    created_start_date?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
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
    news_mail?: any;
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
    sms?: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdparty_agree?: any;
    /**
     * @description
     * 회원등급번호
     *
     * 해당 회원의 회원등급의 번호
     *
     *
     */
    group_no?: any;
    /**
     * @description
     * 검색필드
     *
     * 조회하고자 하는 회원의 검색필드.
     *
     * id : 아이디
     * name : 이름
     * hp : 핸드폰
     * tel : 전화번호
     * mail : 이메일
     * shop_name : 상호명
     *
     *
     */
    search_field?: any;
    /**
     * @description
     * 검색어
     *
     * 조회하고자 하는 회원의 검색필드에 대한 검색어를 입력함.
     * ex) search_field : mail
     * keyword : cafe24@cafe24.com
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    keyword?: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * 조회의 기준이 되는 검색필드. &#39;회원가입일&#39; 기준으로 검색할 경우 검색시작일과 검색종료일의 기간은 회원가입일 기준이 됨.
     *
     * join : 회원가입일
     * login : 최근접속일
     * age : 생년월일
     *
     *
     */
    date_type?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 특정 조회기준에 대한 검색 시작일.
     * 검색 종료일과 같이 사용해야함.
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색함.
     * ex) 2018-12-31 00:00:00
     *
     * 날짜
     */
    start_date?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 특정 조회기준에 대한 검색 종료일.
     * 검색 시작일과 같이 사용해야함.
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색함.
     * ex) 2018-12-31 23:59:59
     *
     * 날짜
     */
    end_date?: any;
    /**
     * @description
     * 회원타입
     *
     * 해당 회원의 회원 타입
     *
     * vip : 특별관리회원
     * poor : 블랙리스트
     * pointfy : 통합멤버쉽 사용자
     *
     *
     */
    member_type?: any;
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
    member_class?: any;
    /**
     * @description
     * 지역코드
     *
     * 해당 회원의 주거지역
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    residence?: any;
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
    gender?: any;
    /**
     * @description
     * 회원권한구분
     *
     * 회원 권한 구분. 회원 권한은 일반회원, 대표운영자, 부운영자, 공급사로 권한이 구분됨.
     *
     * C : 일반회원
     * P : 대표 운영자
     * A : 부운영자
     * S : 공급사
     *
     * @default C
     *
     *
     */
    member_authority?: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    join_path?: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    use_mobile_app?: any;
    /**
     * @description
     * 회원등급 고정 여부
     *
     * T : 고정함
     * F : 고정안함
     *
     *
     */
    fixed_group?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 30
     *
     * 최소: [1]~최대: [1000]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * search_type이 created_date 일 경우 creted_start_date를 증가시키면서 전체 회원을 검색할 수 있으므로 offset은 사용할 수 없다.
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfCustomerInformationOutput {
    customersprivacy: {
      shop_no: number;
      member_id: string;
      name: string;
      name_english: string;
      name_phonetic: string;
      phone: string;
      cellphone: string;
      email: string;
      wedding_anniversary: Cafe24Date;
      birthday: Cafe24Date;
      solar_calendar: Cafe24Enum;
      total_points: string;
      available_points: string;
      used_points: string;
      city: string;
      state: string;
      address1: string;
      address2: string;
      group_no: number;
      job: string;
      job_class: string;
      zipcode: Cafe24Datetime;
      created_date: Cafe24Datetime;
      member_authentication: Cafe24Enum;
      use_blacklist: Cafe24Enum;
      blacklist_type: string;
      last_login_date: Cafe24Datetime;
      member_authority: Cafe24Enum;
      nick_name: string;
      recommend_id: string;
      residence: string;
      interest: string;
      gender: Cafe24Enum;
      member_type: string;
      company_type: string;
      foreigner_type: string;
      authentication_method: string;
      lifetime_member: Cafe24Enum;
      corporate_name: string;
      nationality: string;
      shop_name: string;
      country_code: string;
      use_mobile_app: Cafe24Enum;
      join_path: Cafe24Enum;
      fixed_group: Cafe24Enum;
      thirdparty_agree: Cafe24Enum;
      refund_bank_code: string;
      refund_bank_account_no: string;
      refund_bank_account_holder: string;
      company_condition: any;
      company_line: any;
      sns_list: string[];
    }[];
  }
  export interface RetrieveACountOfCustomerInformationInput {
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
     * 검색 타입
     *
     * 회원 검색을 회원정보 기반으로 할지 가입일 기준으로 할지 선택하여 검색할 수 있다.
     * 가입일 기준으로 검색할 경우 offset과 관계 없이 전체 회원을 검색할 수 있다.
     *
     * ※ 가입일 기준 사용시 created_start_date 외의 모든 검색 조건은 사용할 수 없다.
     *
     * customer_info : 회원정보 기반 검색
     * created_date : 가입일 기준 검색
     *
     * @default customer_info
     *
     *
     */
    search_type?: any;
    /**
     * @description
     * 가입일 기준 검색시 검색 시작일
     *
     * search_type이 created_date 일 경우 가입일 기준의 검색 시작일. 해당 가입일 이후에 가입한 회원을 검색할 수 있다.
     *
     * 날짜
     */
    created_start_date?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
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
    news_mail?: any;
    /**
     * @description
     * SMS 수신여부
     *
     * 이벤트 SMS를 수신할지 여부. &#39;수신거부&#39; 시 광고, 영리성 목적 외 서비스에 필요한 주요 메일은 정상적으로 수신함.
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    sms?: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdparty_agree?: any;
    /**
     * @description
     * 회원등급번호
     *
     * 해당 회원의 회원등급의 번호
     *
     *
     */
    group_no?: any;
    /**
     * @description
     * 검색필드
     *
     * 조회하고자 하는 회원의 검색필드.
     *
     * id : 아이디
     * name : 이름
     * hp : 핸드폰
     * tel : 전화번호
     * mail : 이메일
     * shop_name : 상호명
     *
     *
     */
    search_field?: any;
    /**
     * @description
     * 검색어
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    keyword?: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * join : 회원가입일
     * login : 최근접속일
     * age : 생년월일
     *
     *
     */
    date_type?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 특정 조회기준에 대한 검색 시작일.
     * 검색 종료일과 같이 사용해야함.
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색함.
     * ex) 2018-12-31 00:00:00
     *
     * 날짜
     */
    start_date?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 특정 조회기준에 대한 검색 종료일.
     * 검색 시작일과 같이 사용해야함.
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색함.
     * ex) 2018-12-31 23:59:59
     *
     * 날짜
     */
    end_date?: any;
    /**
     * @description
     * 회원타입
     *
     * 해당 회원의 회원 타입
     *
     * vip : 특별관리회원
     * poor : 블랙리스트
     * pointfy : 통합멤버쉽 사용자
     *
     *
     */
    member_type?: any;
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
    member_class?: any;
    /**
     * @description
     * 지역코드
     *
     * 해당 회원의 주거지역
     * (,(콤마)로 여러 건을 검색할 수 있다.)누락
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    residence?: any;
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
    gender?: any;
    /**
     * @description
     * 회원권한구분
     *
     * 회원 권한 구분. 회원 권한은 일반회원, 대표운영자, 부운영자, 공급사로 권한이 구분됨.
     *
     * C : 일반회원
     * P : 대표 운영자
     * A : 부운영자
     * S : 공급사
     *
     * @default C
     *
     *
     */
    member_authority?: any;
    /**
     * @description
     * 가입경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    join_path?: any;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     *
     *
     */
    use_mobile_app?: any;
    /**
     * @description
     * 회원등급 고정 여부
     *
     * T : 고정함
     * F : 고정안함
     *
     *
     */
    fixed_group?: any;
  }

  export interface RetrieveACountOfCustomerInformationOutput {
    count: number;
  }
  export interface RetrieveACustomerInformationInput {
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
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
  }

  export interface RetrieveACustomerInformationOutput {
    customersprivacy: {
      shop_no: number;
      member_id: string;
      name: string;
      name_english: string;
      name_phonetic: string;
      phone: string;
      cellphone: string;
      email: string;
      wedding_anniversary: Cafe24Date;
      birthday: Cafe24Date;
      solar_calendar: Cafe24Enum;
      total_points: string;
      available_points: string;
      used_points: string;
      available_credits: string;
      city: string;
      state: string;
      address1: string;
      address2: string;
      group_no: number;
      job: string;
      job_class: string;
      zipcode: Cafe24Datetime;
      created_date: Cafe24Datetime;
      member_authentication: Cafe24Enum;
      use_blacklist: Cafe24Enum;
      blacklist_type: string;
      last_login_date: Cafe24Datetime;
      member_authority: Cafe24Enum;
      nick_name: string;
      recommend_id: string;
      residence: string;
      interest: string;
      gender: Cafe24Enum;
      member_type: string;
      company_type: string;
      foreigner_type: string;
      authentication_method: string;
      lifetime_member: Cafe24Enum;
      corporate_name: string;
      nationality: string;
      shop_name: string;
      country_code: string;
      use_mobile_app: Cafe24Enum;
      additional_information: any[];
      join_path: Cafe24Enum;
      fixed_group: Cafe24Enum;
      thirdparty_agree: Cafe24Enum;
      refund_bank_code: string;
      refund_bank_account_no: string;
      refund_bank_account_holder: string;
      company_condition: any;
      company_line: any;
      sns_list: string[];
    };
  }
  export interface UpdateACustomerInformationInput {
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
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
    /**
     * @description
     * 휴대전화
     *
     *
     */
    cellphone?: any;
    /**
     * @description
     * 이메일
     *
     * 이메일
     */
    email?: any;
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
     * 뉴스메일 수신여부
     *
     * T : 수신
     * F : 수신안함
     *
     *
     */
    news_mail?: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdparty_agree?: any;
    /**
     * @description
     * 생일
     *
     *
     */
    birthday?: any;
    /**
     * @description
     * 양력여부
     *
     * T : 양력
     * F : 음력
     *
     *
     */
    solar_calendar?: any;
    /**
     * @description
     * 기본 주소
     *
     * 최대글자수 : [255자]
     */
    address1?: any;
    /**
     * @description
     * 상세 주소
     *
     * 최대글자수 : [255자]
     */
    address2?: any;
    /**
     * @description
     * 우편번호
     *
     * 최대글자수 : [14자]
     */
    zipcode?: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    country_code?: any;
    /**
     * @description
     * 추가항목
     *
     *
     */
    additional_information?: {
      /**
       * @description
       * 추가항목 키
       *
       *
       */
      key?: any;
      /**
       * @description
       * 추가항목 값
       *
       *
       */
      value?: any;
    };
    /**
     * @description
     * 시/군/도시
     *
     * 최대글자수 : [255자]
     */
    city?: any;
    /**
     * @description
     * 주/도
     *
     * 최대글자수 : [255자]
     */
    state?: any;
    /**
     * @description
     * 환불 은행 코드
     *
     * 최대글자수 : [20자]
     */
    refund_bank_code?: any;
    /**
     * @description
     * 환불 계좌번호
     *
     * 최대글자수 : [40자]
     */
    refund_bank_account_no?: any;
    /**
     * @description
     * 환불계좌 예금주 명의
     *
     *
     */
    refund_bank_account_holder?: any;
    /**
     * @description
     * 회원등급 고정 여부
     *
     * T : 고정함
     * F : 고정안함
     *
     *
     */
    fixed_group?: any;
  }

  export interface UpdateACustomerInformationOutput {
    customersprivacy: {
      shop_no: number;
      member_id: string;
      cellphone: string;
      email: string;
      birthday: Cafe24Date;
      solar_calendar: Cafe24Enum;
      country_code: string;
      state: string;
      city: string;
      address1: string;
      address2: string;
      zipcode: Cafe24Datetime;
      sms: Cafe24Enum;
      news_mail: Cafe24Enum;
      thirdparty_agree: Cafe24Enum;
      fixed_group: Cafe24Enum;
      additional_information: {
        key: string;
        value: Cafe24Datetime;
      }[];
      refund_bank_code: string;
      refund_bank_account_no: string;
      refund_bank_account_holder: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 가입한 회원들을 목록으로 조회합니다.
     * 회원아이디, 이름, 휴대전화 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customersprivacy": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "name": "John Doe",
     *             "name_english": "John Doe",
     *             "name_phonetic": "John Doe",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-000-0000",
     *             "email": "sample@sample.com",
     *             "wedding_anniversary": "2018-06-20",
     *             "birthday": "2018-06-20",
     *             "solar_calendar": "T",
     *             "total_points": "0.00",
     *             "available_points": "0.00",
     *             "used_points": "0.00",
     *             "city": "Seoul",
     *             "state": "Sindaebang dong Dongjak-gu",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "group_no": 1,
     *             "job": "self-employment",
     *             "job_class": "service",
     *             "zipcode": "07071",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "member_authentication": "T",
     *             "use_blacklist": "F",
     *             "blacklist_type": "",
     *             "last_login_date": "2018-01-18T11:19:27+09:00",
     *             "member_authority": "C",
     *             "nick_name": "nickname",
     *             "recommend_id": "testid2",
     *             "residence": "Seoul",
     *             "interest": "animation, movie/theater",
     *             "gender": "F",
     *             "member_type": "p",
     *             "company_type": "p",
     *             "foreigner_type": "f",
     *             "authentication_method": "m",
     *             "lifetime_member": "T",
     *             "corporate_name": "Sample company",
     *             "nationality": "Korea",
     *             "shop_name": "Sample Shop",
     *             "country_code": "KR",
     *             "use_mobile_app": "F",
     *             "join_path": "P",
     *             "fixed_group": "T",
     *             "thirdparty_agree": "T",
     *             "refund_bank_code": "bank_02",
     *             "refund_bank_account_no": "1234-1234-1234567",
     *             "refund_bank_account_holder": "John Doe",
     *             "company_condition": null,
     *             "company_line": null,
     *             "sns_list": [
     *                 "FACEBOOK(2022-05-23 16:12:22)",
     *                 "KAKAO(2022-05-23 16:12:47)"
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid01",
     *             "name": "Jane Doe",
     *             "name_english": "Jane Doe",
     *             "name_phonetic": "Jane Doe",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-000-0000",
     *             "email": "sample@sample.com",
     *             "wedding_anniversary": "2018-06-20",
     *             "birthday": "2018-06-20",
     *             "solar_calendar": "T",
     *             "total_points": "0.00",
     *             "available_points": "0.00",
     *             "used_points": "0.00",
     *             "city": "Seoul",
     *             "state": "Sindaebang dong Dongjak-gu",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "group_no": 1,
     *             "job": "self-employment",
     *             "job_class": "service",
     *             "zipcode": "07071",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "member_authentication": "T",
     *             "use_blacklist": "F",
     *             "blacklist_type": "",
     *             "last_login_date": "2018-01-18T11:19:27+09:00",
     *             "member_authority": "C",
     *             "nick_name": "nickname",
     *             "recommend_id": "testid2",
     *             "residence": "Seoul",
     *             "interest": "animation, movie/theater",
     *             "gender": "F",
     *             "member_type": "p",
     *             "company_type": "p",
     *             "foreigner_type": "f",
     *             "authentication_method": "i",
     *             "lifetime_member": "T",
     *             "corporate_name": "Sample company",
     *             "nationality": "Korea",
     *             "shop_name": "Sample Shop",
     *             "country_code": "KR",
     *             "use_mobile_app": "F",
     *             "join_path": "M",
     *             "fixed_group": "F",
     *             "thirdparty_agree": "T",
     *             "refund_bank_code": "bank_01",
     *             "refund_bank_account_no": "1234-1234-1234567",
     *             "refund_bank_account_holder": "John Doe",
     *             "company_condition": null,
     *             "company_line": null,
     *             "sns_list": [
     *                 "FACEBOOK(2022-05-23 16:12:22)",
     *                 "KAKAO(2022-05-23 16:12:47)"
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerInformation(
      input: RetrieveAListOfCustomerInformationInput,
      options?: RequestOptions<RetrieveAListOfCustomerInformationInput>,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerInformationOutput>>;
    /**
     * @description
     * 쇼핑몰에 가입한 회원들의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customer-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfCustomerInformation(
      input: RetrieveACountOfCustomerInformationInput,
      options?: RequestOptions<RetrieveACountOfCustomerInformationInput>,
    ): Promise<AxiosResponse<RetrieveACountOfCustomerInformationOutput>>;
    /**
     * @description
     * 회원아이디를 이용하여 회원을 조회합니다.
     * 이름, 영문이름, 휴대전화번호, 이메일 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customersprivacy": {
     *         "shop_no": 1,
     *         "member_id": "sampleid",
     *         "name": "John Doe",
     *         "name_english": "John Doe",
     *         "name_phonetic": "John Doe",
     *         "phone": "02-0000-0000",
     *         "cellphone": "010-000-0000",
     *         "email": "sample@sample.com",
     *         "wedding_anniversary": "2018-06-20",
     *         "birthday": "2018-06-20",
     *         "solar_calendar": "T",
     *         "total_points": "0.00",
     *         "available_points": "0.00",
     *         "used_points": "0.00",
     *         "available_credits": "0.00",
     *         "city": "Seoul",
     *         "state": "Sindaebang dong Dongjak-gu",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "group_no": 1,
     *         "job": "self-employment",
     *         "job_class": "service",
     *         "zipcode": "07071",
     *         "created_date": "2018-01-18T11:19:27+09:00",
     *         "member_authentication": "T",
     *         "use_blacklist": "F",
     *         "blacklist_type": "",
     *         "last_login_date": "2018-01-18T11:19:27+09:00",
     *         "member_authority": "C",
     *         "nick_name": "nickname",
     *         "recommend_id": "testid2",
     *         "residence": "Seoul",
     *         "interest": "animation, movie/theater",
     *         "gender": "F",
     *         "member_type": "p",
     *         "company_type": "p",
     *         "foreigner_type": "f",
     *         "authentication_method": "i",
     *         "lifetime_member": "T",
     *         "corporate_name": "Sample company",
     *         "nationality": "Korea",
     *         "shop_name": "Sample Shop",
     *         "country_code": "KR",
     *         "use_mobile_app": "F",
     *         "additional_information": [],
     *         "join_path": "M",
     *         "fixed_group": "F",
     *         "thirdparty_agree": "T",
     *         "refund_bank_code": "bank_01",
     *         "refund_bank_account_no": "1234-1234-1234567",
     *         "refund_bank_account_holder": "John Doe",
     *         "company_condition": null,
     *         "company_line": null,
     *         "sns_list": [
     *             "FACEBOOK(2022-05-23 16:12:22)",
     *             "KAKAO(2022-05-23 16:12:47)"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveACustomerInformation(
      input: RetrieveACustomerInformationInput,
      options?: RequestOptions<RetrieveACustomerInformationInput>,
    ): Promise<AxiosResponse<RetrieveACustomerInformationOutput>>;
    /**
     * @description
     * 회원아이디를 이용하여 회원정보를 수정합니다.
     * SMS 수신여부, 생일, 주소 등을 변경합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-customer-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customersprivacy": {
     *         "shop_no": 1,
     *         "member_id": "sampleid",
     *         "cellphone": "010-000-0000",
     *         "email": "sample@sample.com",
     *         "birthday": "2018-06-20",
     *         "solar_calendar": "T",
     *         "country_code": "KOR",
     *         "state": "Sindaebang dong Dongjak-gu",
     *         "city": "Seoul",
     *         "address1": "Sindaebang dong Dongjak-gu Seoul Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "zipcode": "07071",
     *         "sms": "T",
     *         "news_mail": "T",
     *         "thirdparty_agree": "T",
     *         "fixed_group": "F",
     *         "additional_information": [
     *             {
     *                 "key": "add1",
     *                 "value": "add value 1"
     *             },
     *             {
     *                 "key": "add2",
     *                 "value": "add value 2"
     *             }
     *         ],
     *         "refund_bank_code": "bank_01",
     *         "refund_bank_account_no": "1234-1234-1234567",
     *         "refund_bank_account_holder": "John Doe"
     *     }
     * }
     * ```
     */
    updateACustomerInformation(
      input: UpdateACustomerInformationInput,
      options?: RequestOptions<UpdateACustomerInformationInput>,
    ): Promise<AxiosResponse<UpdateACustomerInformationOutput>>;
  }
}
