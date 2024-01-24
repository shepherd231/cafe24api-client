import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상품분류(Categories)는 쇼핑몰에 노출할 카테고리를 설정하는 기능입니다.
   * 상품분류는 대분류 하위에 중분류, 소분류, 상세 분류까지 세분화해서 설정할 수 있습니다.
   * 상품분류 리소스를 사용하면 쇼핑몰의 분류들을 조회하거나 분류를 생성, 수정, 삭제할 수 있습니다.
   */
  export interface Categories {
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
     * 분류 번호
     *
     * 상품분류의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품분류 번호는 중복되지 않음.
     *
     *
     */
    category_no: any;
    /**
     * @description
     * 분류 Depth
     *
     * 해당 상품분류가 하위 몇 차 상품분류에 있는 카테고리인지 표시함. 1~4차까지 상품분류가 존재한다.
     *
     * 최소: [1]~최대: [4]
     */
    category_depth: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 해당 상품분류가 2차(중분류), 3차(소분류), 4차(세분류)일 경우 상위에 있는 상품분류의 번호를 표시함.
     *
     * parent_category_no = 1일 경우 해당 분류는 대분류를 의미한다.
     *
     *
     */
    parent_category_no: any;
    /**
     * @description
     * 분류명
     *
     * 해당 상품분류의 이름을 나타낸다.
     *
     * 최대글자수 : [50자]
     */
    category_name: any;
    /**
     * @description
     * 쇼핑몰 표시설정
     *
     * 해당 상품분류가 PC 쇼핑몰이나 모바일 쇼핑몰, 둘 다에 노출되는지 표시.
     *
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     *
     *
     */
    display_type: any;
    /**
     * @description
     * 분류 전체 이름
     *
     * 해당 상품분류가 속해있는 상위 상품분류의 이름을 모두 표시.
     *
     *
     */
    full_category_name: any;
    /**
     * @description
     * 분류 전체 번호
     *
     * 해당 상품분류가 속해있는 상위 상품분류의 번호를 모두 표시.
     *
     *
     */
    full_category_no: any;
    /**
     * @description
     * 최상위 분류 번호
     *
     * 해당 상품분류가 속해있는 최상위 상품분류의 분류 번호 표시.
     *
     *
     */
    root_category_no: any;
    /**
     * @description
     * 메인분류 표시상태
     *
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부. 메인분류에 표시하는 경우 중/소/상세 분류도 대분류처럼 최상위에 표시된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_main: any;
    /**
     * @description
     * 표시상태
     *
     * 해당 상품분류의 표시 여부. 표시안함 일 경우 해당 상품분류에 접근할 수 없다.
     *
     * 해당 설정은 멀티쇼핑몰별로 설정할 수 없으며 모든 쇼핑몰에 적용된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_display: any;
    /**
     * @description
     * 진열 순서
     *
     * 상품분류를 쇼핑몰 운영자가 배치한 순서.
     *
     *
     */
    display_order: any;
    /**
     * @description
     * 품절상품진열
     *
     * 품절 상품을 상품 분류의 맨 앞 또는 맨 뒤에 진열할 것인지 여부
     * 상품의 품절 여부는 List all products를 통해 sold_out 파라메터로 알 수 있다.
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     *
     *
     */
    soldout_product_display: any;
    /**
     * @description
     * 하위분류 상품진열
     *
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    sub_category_product_display: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그 상품진열
     *
     * 해시태그 상품 진열 기능을 사용할 것인지 여부
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    hashtag_product_display: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그
     *
     * 해당 상품분류의 해시태그 목록
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     *
     */
    hash_tags: any;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * 상품 분류에 상품을 동일하게 정렬할 것인지, 영역별로 정렬할 것인지 설정
     *
     * &#34;전체&#34;로 설정된 경우 다음 항목을 통해 정렬 설정 가능하다.
     * product_display_type
     * product_display_key
     * product_display_sort
     * product_display_period
     *
     * &#34;영역별&#34;로 설정된 경우 다음 항목을 통해 영역별로 정렬 설정이 가능하다.
     * normal_product_display_type
     * normal_product_display_key
     * normal_product_display_sort
     * normal_product_display_period
     * recommend_product_display_type
     * recommend_product_display_key
     * recommend_product_display_sort
     * recommend_product_display_period
     * new_product_display_type
     * new_product_display_key
     * new_product_display_sort
     * new_product_display_period
     *
     * A : 전체
     * G : 영역별
     *
     *
     */
    product_display_scope: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;일 경우 해당 상품 분류의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    product_display_type: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;이고, 상품분류 진열방법이 &#34;자동정렬&#34; 또는 &#34;자동정렬 + 사용자지정&#34;일 경우 해당 상품 분류를 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    product_display_key: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 상품분류 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    product_display_sort: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    product_display_period: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    normal_product_display_type: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    normal_product_display_key: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 일반 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    normal_product_display_sort: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 일반 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    normal_product_display_period: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    recommend_product_display_type: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    recommend_product_display_key: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 추천 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    recommend_product_display_sort: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 추천 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    recommend_product_display_period: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    new_product_display_type: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    new_product_display_key: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 신상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    new_product_display_sort: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 신상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    new_product_display_period: any;
    /**
     * @description
     * 접근권한
     *
     * F : 모두 이용 가능
     * T : 회원만 이용가능
     * G : 특정회원등급만 이용 가능
     * A : 특정 운영자만 이용 가능
     *
     *
     */
    access_authority: any;
  }

  export interface RetrieveAListOfProductCategoriesInput {
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
     * 분류 Depth
     *
     * 조회하고자 하는 상품분류의 차수 검색
     *
     * 최소: [1]~최대: [4]
     */
    category_depth?: any;
    /**
     * @description
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
     *
     * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
     *
     *
     */
    parent_category_no?: any;
    /**
     * @description
     * 분류명
     *
     * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
     *
     *
     */
    category_name?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfProductCategoriesOutput {
    categories: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      display_type: Cafe24Enum;
      full_category_name: {
        1: string;
        2: any;
        3: any;
        4: any;
      };
      full_category_no: {
        1: string;
        2: any;
        3: any;
        4: any;
      };
      root_category_no: number;
      use_main: Cafe24Enum;
      use_display: Cafe24Enum;
      display_order: number;
      soldout_product_display: Cafe24Enum;
      sub_category_product_display: Cafe24Enum;
      hashtag_product_display: Cafe24Enum;
      hash_tags: string[];
      product_display_scope: Cafe24Enum;
      product_display_type: Cafe24Enum;
      product_display_key: Cafe24Enum;
      product_display_sort: Cafe24Enum;
      product_display_period: Cafe24Enum;
      normal_product_display_type: any;
      normal_product_display_key: any;
      normal_product_display_sort: any;
      normal_product_display_period: any;
      recommend_product_display_type: any;
      recommend_product_display_key: any;
      recommend_product_display_sort: any;
      recommend_product_display_period: any;
      new_product_display_type: any;
      new_product_display_key: any;
      new_product_display_sort: any;
      new_product_display_period: any;
      access_authority: Cafe24Enum;
    }[];
  }
  export interface RetrieveACountOfProductCategoriesInput {
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
     * 분류 Depth
     *
     * 조회하고자 하는 상품분류의 차수 검색
     *
     * 최소: [1]~최대: [4]
     */
    category_depth?: any;
    /**
     * @description
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
     *
     * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
     *
     *
     */
    parent_category_no?: any;
    /**
     * @description
     * 분류명
     *
     * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
     *
     *
     */
    category_name?: any;
  }

  export interface RetrieveACountOfProductCategoriesOutput {
    count: number;
  }
  export interface RetrieveAProductCategoryInput {
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
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     * @required
     */
    category_no: any;
  }

  export interface RetrieveAProductCategoryOutput {
    category: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      display_type: Cafe24Enum;
      full_category_no: {
        1: string;
        2: string;
        3: string;
        4: Cafe24Datetime;
      };
      full_category_name: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      use_main: Cafe24Enum;
      use_display: Cafe24Enum;
      display_order: number;
      soldout_product_display: Cafe24Enum;
      sub_category_product_display: Cafe24Enum;
      hashtag_product_display: Cafe24Enum;
      hash_tags: string[];
      product_display_scope: Cafe24Enum;
      product_display_type: Cafe24Enum;
      product_display_key: Cafe24Enum;
      product_display_sort: Cafe24Enum;
      product_display_period: Cafe24Enum;
      normal_product_display_type: any;
      normal_product_display_key: any;
      normal_product_display_sort: any;
      normal_product_display_period: any;
      recommend_product_display_type: any;
      recommend_product_display_key: any;
      recommend_product_display_sort: any;
      recommend_product_display_period: any;
      new_product_display_type: any;
      new_product_display_key: any;
      new_product_display_sort: any;
      new_product_display_period: any;
      access_authority: Cafe24Enum;
    };
  }
  export interface CreateAProductCategoryInput {
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
     * 부모 분류 번호
     *
     * 등록하고자 하는 상품분류의 부모 분류 번호
     *
     * 상품분류를 특정 분류 하위에 등록하고자 할 경우 해당 분류 번호를 입력하여 등록 가능하다.
     *
     *
     */
    parent_category_no?: any;
    /**
     * @description
     * 분류명
     *
     * 해당 상품분류의 이름
     *
     * @required
     *
     * 최대글자수 : [50자]
     */
    category_name: any;
    /**
     * @description
     * 쇼핑몰 표시설정
     *
     * 해당 상품분류가 PC 쇼핑몰이나 모바일 쇼핑몰, 둘 다에 노출되는지 설정
     *
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     *
     *
     */
    display_type?: any;
    /**
     * @description
     * 메인분류 표시상태
     *
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부. 메인분류에 표시하는 경우 중/소/상세 분류도 대분류처럼 최상위에 표시된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_main?: any;
    /**
     * @description
     * 표시상태
     *
     * 해당 상품분류의 표시 여부. 표시안함 일 경우 해당 상품분류에 접근할 수 없다.
     *
     * 해당 설정은 멀티쇼핑몰별로 설정할 수 없으며 모든 쇼핑몰에 적용된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_display?: any;
    /**
     * @description
     * 품절상품진열
     *
     * 품절 상품을 상품 분류의 맨 앞 또는 맨 뒤에 진열할 것인지 여부
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     *
     *
     */
    soldout_product_display?: any;
    /**
     * @description
     * 하위분류 상품진열
     *
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    sub_category_product_display?: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그 상품진열
     *
     * 해시태그 상품 진열 기능을 사용할 것인지 여부
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    hashtag_product_display?: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그
     *
     * 해당 상품분류의 해시태그 목록
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     *
     */
    hash_tags?: any;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * 상품 분류에 상품을 동일하게 정렬할 것인지, 영역별로 정렬할 것인지 설정
     *
     * &#34;전체&#34;로 설정할 경우 다음 필드는 반드시 입력되어야 한다.
     * product_display_type
     * product_display_key
     * product_display_sort
     * product_display_period (key가 S, C일 때만 필수)
     *
     * &#34;영역별&#34;로 설정할 경우 다음 필드는 반드시 입력되어야 한다.
     * normal_product_display_type
     * normal_product_display_key
     * normal_product_display_sort
     * normal_product_display_period (key가 S, C일 때만 필수)
     * recommend_product_display_type
     * recommend_product_display_key
     * recommend_product_display_sort
     * recommend_product_display_period (key가 S, C일 때만 필수)
     * new_product_display_type
     * new_product_display_key
     * new_product_display_sort
     * new_product_display_period (key가 S, C일 때만 필수)
     *
     * A : 전체
     * G : 영역별
     *
     *
     */
    product_display_scope?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;일 경우 해당 상품 분류의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;이고, 상품분류 진열방법이 &#34;자동정렬&#34; 또는 &#34;자동정렬 + 사용자지정&#34;일 경우 해당 상품 분류를 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 상품분류 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    normal_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    normal_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 일반 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    normal_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 일반 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    normal_product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    recommend_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    recommend_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 추천 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    recommend_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 추천 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    recommend_product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    new_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    new_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 신상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    new_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 신상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    new_product_display_period?: any;
  }

  export interface CreateAProductCategoryOutput {
    category: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      display_type: Cafe24Enum;
      full_category_name: {
        1: string;
        2: any;
        3: any;
        4: any;
      };
      full_category_no: {
        1: Cafe24Datetime;
        2: any;
        3: any;
        4: any;
      };
      root_category_no: number;
      use_main: Cafe24Enum;
      use_display: Cafe24Enum;
      display_order: number;
      soldout_product_display: Cafe24Enum;
      sub_category_product_display: Cafe24Enum;
      hashtag_product_display: Cafe24Enum;
      hash_tags: string[];
      product_display_scope: Cafe24Enum;
      product_display_type: Cafe24Enum;
      product_display_key: Cafe24Enum;
      product_display_sort: Cafe24Enum;
      product_display_period: Cafe24Enum;
      normal_product_display_type: any;
      normal_product_display_key: any;
      normal_product_display_sort: any;
      normal_product_display_period: any;
      recommend_product_display_type: any;
      recommend_product_display_key: any;
      recommend_product_display_sort: any;
      recommend_product_display_period: any;
      new_product_display_type: any;
      new_product_display_key: any;
      new_product_display_sort: any;
      new_product_display_period: any;
      access_authority: Cafe24Enum;
    };
  }
  export interface UpdateAProductCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 분류명
     *
     * 해당 상품분류의 이름
     *
     * 최대글자수 : [50자]
     */
    category_name?: any;
    /**
     * @description
     * 쇼핑몰 표시설정
     *
     * 해당 상품분류가 PC 쇼핑몰이나 모바일 쇼핑몰, 둘 다에 노출되는지 설정
     *
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     *
     *
     */
    display_type?: any;
    /**
     * @description
     * 메인분류 표시상태
     *
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부. 메인분류에 표시하는 경우 중/소/상세 분류도 대분류처럼 최상위에 표시된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_main?: any;
    /**
     * @description
     * 표시상태
     *
     * 해당 상품분류의 표시 여부. 표시안함 일 경우 해당 상품분류에 접근할 수 없다.
     *
     * 해당 설정은 멀티쇼핑몰별로 설정할 수 없으며 모든 쇼핑몰에 적용된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_display?: any;
    /**
     * @description
     * 품절상품진열
     *
     * 품절 상품을 상품 분류의 맨 앞 또는 맨 뒤에 진열할 것인지 여부
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     *
     *
     */
    soldout_product_display?: any;
    /**
     * @description
     * 하위분류 상품진열
     *
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    sub_category_product_display?: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그 상품진열
     *
     * 해시태그 상품 진열 기능을 사용할 것인지 여부
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    hashtag_product_display?: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그
     *
     * 해당 상품분류의 해시태그 목록
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     *
     */
    hash_tags?: any;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * 상품 분류에 상품을 동일하게 정렬할 것인지, 영역별로 정렬할 것인지 설정
     *
     * &#34;전체&#34;로 설정할 경우 다음 필드는 반드시 입력되어야 한다.
     * product_display_type
     * product_display_key
     * product_display_sort
     * product_display_period (key가 S, C일 때만 필수)
     *
     * &#34;영역별&#34;로 설정할 경우 다음 필드는 반드시 입력되어야 한다.
     * normal_product_display_type
     * normal_product_display_key
     * normal_product_display_sort
     * normal_product_display_period (key가 S, C일 때만 필수)
     * recommend_product_display_type
     * recommend_product_display_key
     * recommend_product_display_sort
     * recommend_product_display_period (key가 S, C일 때만 필수)
     * new_product_display_type
     * new_product_display_key
     * new_product_display_sort
     * new_product_display_period (key가 S, C일 때만 필수)
     *
     * A : 전체
     * G : 영역별
     *
     *
     */
    product_display_scope?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;일 경우 해당 상품 분류의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;전체&#34;이고, 상품분류 진열방법이 &#34;자동정렬&#34; 또는 &#34;자동정렬 + 사용자지정&#34;일 경우 해당 상품 분류를 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 상품분류 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    normal_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 일반 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    normal_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 일반 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    normal_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 일반 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    normal_product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    recommend_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 추천 상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    recommend_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 추천 상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    recommend_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 추천 상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    recommend_product_display_period?: any;
    /**
     * @description
     * 상품분류 진열방법
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역의 진열 방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     *
     *
     */
    new_product_display_type?: any;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * 상품분류 정렬 영역 설정이 &#34;영역별&#34;일 경우 신상품 영역을 어떤 기준으로 정렬할 것인지 설정
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     *
     *
     */
    new_product_display_key?: any;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * 신상품 영역의 진열 방법을 내림차순으로 할지, 오름차순으로 할지 설정
     *
     * D: 내림차순
     * A : 오름차순
     *
     *
     */
    new_product_display_sort?: any;
    /**
     * @description
     * 진열순서에 대한 기간
     *
     * 신상품 영역의 진열 방법이 판매량 높은 상품(S), 조회수가 높은 상품(C) 일 경우 기준이 되는 기간
     *
     * W : 전체기간
     * 1D : 1일
     * 3D : 3일
     * 7D : 7일
     * 15D : 15일
     * 1M : 1개월
     * 3M : 3개월
     * 6M : 6개월
     *
     *
     */
    new_product_display_period?: any;
  }

  export interface UpdateAProductCategoryOutput {
    category: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      display_type: Cafe24Enum;
      full_category_name: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      full_category_no: {
        1: string;
        2: string;
        3: Cafe24Datetime;
        4: Cafe24Datetime;
      };
      root_category_no: number;
      use_main: Cafe24Enum;
      use_display: Cafe24Enum;
      display_order: number;
      soldout_product_display: Cafe24Enum;
      sub_category_product_display: Cafe24Enum;
      hashtag_product_display: Cafe24Enum;
      hash_tags: string[];
      product_display_scope: Cafe24Enum;
      product_display_type: any;
      product_display_key: any;
      product_display_sort: any;
      product_display_period: any;
      normal_product_display_type: Cafe24Enum;
      normal_product_display_key: Cafe24Enum;
      normal_product_display_sort: Cafe24Enum;
      normal_product_display_period: string;
      recommend_product_display_type: Cafe24Enum;
      recommend_product_display_key: Cafe24Enum;
      recommend_product_display_sort: Cafe24Enum;
      recommend_product_display_period: Cafe24Enum;
      new_product_display_type: Cafe24Enum;
      new_product_display_key: Cafe24Enum;
      new_product_display_sort: Cafe24Enum;
      new_product_display_period: Cafe24Enum;
      access_authority: Cafe24Enum;
    };
  }
  export interface DeleteAProductCategoryInput {
    /**
     * @description
     * 분류 번호
     *
     * @required
     */
    category_no: any;
  }

  export interface DeleteAProductCategoryOutput {
    category: {
      category_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 분류를 목록으로 조회합니다.
     * 분류의 분류번호와 분류명 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "categories": [
     *         {
     *             "shop_no": 1,
     *             "category_no": 27,
     *             "category_depth": 1,
     *             "parent_category_no": 1,
     *             "category_name": "(large scale classification) Bottoms",
     *             "display_type": "A",
     *             "full_category_name": {
     *                 "1": "(large scale classification) Bottoms",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "full_category_no": {
     *                 "1": "27",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "root_category_no": 27,
     *             "use_main": "T",
     *             "use_display": "T",
     *             "display_order": 0,
     *             "soldout_product_display": "B",
     *             "sub_category_product_display": "T",
     *             "hashtag_product_display": "T",
     *             "hash_tags": [
     *                 "tag1",
     *                 "tag2"
     *             ],
     *             "product_display_scope": "A",
     *             "product_display_type": "U",
     *             "product_display_key": "A",
     *             "product_display_sort": "D",
     *             "product_display_period": "W",
     *             "normal_product_display_type": null,
     *             "normal_product_display_key": null,
     *             "normal_product_display_sort": null,
     *             "normal_product_display_period": null,
     *             "recommend_product_display_type": null,
     *             "recommend_product_display_key": null,
     *             "recommend_product_display_sort": null,
     *             "recommend_product_display_period": null,
     *             "new_product_display_type": null,
     *             "new_product_display_key": null,
     *             "new_product_display_sort": null,
     *             "new_product_display_period": null,
     *             "access_authority": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "category_no": 28,
     *             "category_depth": 1,
     *             "parent_category_no": 1,
     *             "category_name": "(large scale classification) Accessories",
     *             "display_type": "A",
     *             "full_category_name": {
     *                 "1": "(large scale classification) Accessories",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "full_category_no": {
     *                 "1": "28",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "root_category_no": 28,
     *             "use_main": "F",
     *             "use_display": "T",
     *             "display_order": 0,
     *             "soldout_product_display": "B",
     *             "sub_category_product_display": "T",
     *             "hashtag_product_display": "T",
     *             "hash_tags": [
     *                 "tag1",
     *                 "tag2"
     *             ],
     *             "product_display_scope": "A",
     *             "product_display_type": "U",
     *             "product_display_key": "A",
     *             "product_display_sort": "D",
     *             "product_display_period": "W",
     *             "normal_product_display_type": null,
     *             "normal_product_display_key": null,
     *             "normal_product_display_sort": null,
     *             "normal_product_display_period": null,
     *             "recommend_product_display_type": null,
     *             "recommend_product_display_key": null,
     *             "recommend_product_display_sort": null,
     *             "recommend_product_display_period": null,
     *             "new_product_display_type": null,
     *             "new_product_display_key": null,
     *             "new_product_display_sort": null,
     *             "new_product_display_period": null,
     *             "access_authority": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductCategories(
      input: RetrieveAListOfProductCategoriesInput,
      options?: RequestOptions<
        RetrieveAListOfProductCategoriesOutput['categories'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductCategoriesOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 분류의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-product-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfProductCategories(
      input: RetrieveACountOfProductCategoriesInput,
      options?: RequestOptions<
        RetrieveACountOfProductCategoriesOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfProductCategoriesOutput>>;
    /**
     * @description
     * 분류번호를 이용하여 해당 분류에 대해 상세조회합니다.
     * 분류 Depth, 부모 분류 번호, 분류명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "shop_no": 1,
     *         "category_no": 40,
     *         "category_depth": 4,
     *         "parent_category_no": 37,
     *         "category_name": "(Detailed Category) Cropped",
     *         "display_type": "A",
     *         "full_category_no": {
     *             "1": "25",
     *             "2": "28",
     *             "3": "30",
     *             "4": "40"
     *         },
     *         "full_category_name": {
     *             "1": "(Main Category) Tops",
     *             "2": "(Middle Category) Tees",
     *             "3": "(Small Category) Long Sleeve",
     *             "4": "(Detailed Category) Cropped"
     *         },
     *         "use_main": "F",
     *         "use_display": "T",
     *         "display_order": 0,
     *         "soldout_product_display": "B",
     *         "sub_category_product_display": "T",
     *         "hashtag_product_display": "T",
     *         "hash_tags": [
     *             "tag1",
     *             "tag2"
     *         ],
     *         "product_display_scope": "A",
     *         "product_display_type": "U",
     *         "product_display_key": "A",
     *         "product_display_sort": "D",
     *         "product_display_period": "W",
     *         "normal_product_display_type": null,
     *         "normal_product_display_key": null,
     *         "normal_product_display_sort": null,
     *         "normal_product_display_period": null,
     *         "recommend_product_display_type": null,
     *         "recommend_product_display_key": null,
     *         "recommend_product_display_sort": null,
     *         "recommend_product_display_period": null,
     *         "new_product_display_type": null,
     *         "new_product_display_key": null,
     *         "new_product_display_sort": null,
     *         "new_product_display_period": null,
     *         "access_authority": "T"
     *     }
     * }
     * ```
     */
    retrieveAProductCategory(
      input: RetrieveAProductCategoryInput,
      options?: RequestOptions<RetrieveAProductCategoryOutput['category']>,
    ): Promise<AxiosResponse<RetrieveAProductCategoryOutput>>;
    /**
     * @description
     * 쇼핑몰에 분류를 등록합니다.
     * 분류를 등록하기 위해서는 분류명을 필수로 입력해야합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "shop_no": 1,
     *         "category_no": 40,
     *         "category_depth": 1,
     *         "parent_category_no": 1,
     *         "category_name": "(large scale classification) Bottoms",
     *         "display_type": "A",
     *         "full_category_name": {
     *             "1": "(large scale classification) Bottoms",
     *             "2": null,
     *             "3": null,
     *             "4": null
     *         },
     *         "full_category_no": {
     *             "1": "40",
     *             "2": null,
     *             "3": null,
     *             "4": null
     *         },
     *         "root_category_no": 40,
     *         "use_main": "T",
     *         "use_display": "T",
     *         "display_order": 5,
     *         "soldout_product_display": "B",
     *         "sub_category_product_display": "T",
     *         "hashtag_product_display": "T",
     *         "hash_tags": [
     *             "tag1",
     *             "tag2"
     *         ],
     *         "product_display_scope": "A",
     *         "product_display_type": "U",
     *         "product_display_key": "A",
     *         "product_display_sort": "D",
     *         "product_display_period": "W",
     *         "normal_product_display_type": null,
     *         "normal_product_display_key": null,
     *         "normal_product_display_sort": null,
     *         "normal_product_display_period": null,
     *         "recommend_product_display_type": null,
     *         "recommend_product_display_key": null,
     *         "recommend_product_display_sort": null,
     *         "recommend_product_display_period": null,
     *         "new_product_display_type": null,
     *         "new_product_display_key": null,
     *         "new_product_display_sort": null,
     *         "new_product_display_period": null,
     *         "access_authority": "F"
     *     }
     * }
     * ```
     */
    createAProductCategory(
      input: CreateAProductCategoryInput,
      options?: RequestOptions<CreateAProductCategoryOutput['category']>,
    ): Promise<AxiosResponse<CreateAProductCategoryOutput>>;
    /**
     * @description
     * 분류번호를 이용하여 쇼핑몰에 등록된 분류를 수정합니다.
     * 분류명이나 표시상태 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "shop_no": 1,
     *         "category_no": 40,
     *         "category_depth": 4,
     *         "parent_category_no": 37,
     *         "category_name": "(large scale classification) Pants",
     *         "display_type": "A",
     *         "full_category_name": {
     *             "1": "(Main Category) Tops",
     *             "2": "(Middle Category) Tees",
     *             "3": "(Small Category) Long Sleeve",
     *             "4": "(large scale classification) Pants"
     *         },
     *         "full_category_no": {
     *             "1": "25",
     *             "2": "30",
     *             "3": "37",
     *             "4": "40"
     *         },
     *         "root_category_no": 25,
     *         "use_main": "T",
     *         "use_display": "T",
     *         "display_order": 5,
     *         "soldout_product_display": "B",
     *         "sub_category_product_display": "T",
     *         "hashtag_product_display": "F",
     *         "hash_tags": [
     *             "tag1",
     *             "tag2"
     *         ],
     *         "product_display_scope": "G",
     *         "product_display_type": null,
     *         "product_display_key": null,
     *         "product_display_sort": null,
     *         "product_display_period": null,
     *         "normal_product_display_type": "A",
     *         "normal_product_display_key": "S",
     *         "normal_product_display_sort": "D",
     *         "normal_product_display_period": "1M",
     *         "recommend_product_display_type": "A",
     *         "recommend_product_display_key": "R",
     *         "recommend_product_display_sort": "D",
     *         "recommend_product_display_period": "W",
     *         "new_product_display_type": "A",
     *         "new_product_display_key": "C",
     *         "new_product_display_sort": "D",
     *         "new_product_display_period": "W",
     *         "access_authority": "F"
     *     }
     * }
     * ```
     */
    updateAProductCategory(
      input: UpdateAProductCategoryInput,
      options?: RequestOptions<UpdateAProductCategoryOutput['category']>,
    ): Promise<AxiosResponse<UpdateAProductCategoryOutput>>;
    /**
     * @description
     * 분류번호를 이용하여 쇼핑몰에 등록된 분류를 삭제합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "category_no": 24
     *     }
     * }
     * ```
     */
    deleteAProductCategory(
      input: DeleteAProductCategoryInput,
      options?: RequestOptions<DeleteAProductCategoryOutput['category']>,
    ): Promise<AxiosResponse<DeleteAProductCategoryOutput>>;
  }
}
