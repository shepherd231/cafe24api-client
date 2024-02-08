import { AxiosResponse } from 'axios';
import {
  Endpoint,
  RequestOptions,
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
   * 상품(Products)은 쇼핑몰에서 거래되는 제품의 기본 단위입니다.
   * 컬러, 사이즈 같은 옵션이 있을 경우 각각의 옵션이 상품 하위의 품목으로 생성될 수 있습니다.
   * 상품은 상품명, 판매가, 요약설명, 상품 검색어 등의 정보를 포함하고 있습니다.
   * 상품은 품목, 상품 메모, SEO 등 여러 하위 리소스들을 갖고 있습니다.
   */
  export interface Products {
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
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     *
     */
    product_no: any;
    /**
     * @description
     * 상품코드
     *
     * 시스템이 상품에 부여한 코드. 해당 쇼핑몰 내에서 상품코드는 중복되지 않음.
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    product_code: any;
    /**
     * @description
     * 자체상품 코드
     *
     * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
     *
     * 최대글자수 : [40자]
     */
    custom_product_code: any;
    /**
     * @description
     * 상품명
     *
     * 상품의 이름. 상품명은 상품을 구분하는 가장 기초적인 정보이며 검색 정보가 된다. HTML을 사용하여 입력이 가능하다.
     *
     * 최대글자수 : [250자]
     */
    product_name: any;
    /**
     * @description
     * 영문 상품명
     *
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함.
     *
     * 최대글자수 : [250자]
     */
    eng_product_name: any;
    /**
     * @description
     * 모델명
     *
     * 상품의 모델명.
     *
     * 최대글자수 : [100자]
     */
    model_name: any;
    /**
     * @description
     * 상품가(세금 제외)
     *
     *
     */
    price_excluding_tax: any;
    /**
     * @description
     * 상품 판매가
     *
     * 상품의 판매 가격. 쿠폰 및 혜택을 적용하기 전의 가격.
     * 상품 등록시엔 모든 멀티 쇼핑몰에 동일한 가격으로 등록하며, 멀티쇼핑몰별로 다른 가격을 입력하고자 할 경우 상품 수정을 통해 가격을 다르게 입력할 수 있다.
     * ※ 판매가 = [ 공급가 + (공급가 * 마진율) + 추가금액 ]
     *
     *
     */
    price: any;
    /**
     * @description
     * 상품 소비자가
     *
     * 시중에 판매되는 소비자 가격. 쇼핑몰의 가격을 강조하기 위한 비교 목적으로 사용함.
     *
     *
     */
    retail_price: any;
    /**
     * @description
     * 진열상태
     *
     * 상품을 쇼핑몰에 진열할지 여부. 상품을 쇼핑몰에 진열할 경우 설정한 상품분류와 메인화면에 표시된다. 상품이 쇼핑몰에 진열되어 있지 않으면 쇼핑몰 화면에 표시되지 않아 접근할 수 없으며 상품을 구매할 수 없다.
     *
     * T : 진열함
     * F : 진열안함
     *
     *
     */
    display: any;
    /**
     * @description
     * 판매상태
     *
     * 상품을 쇼핑몰에 판매할지 여부. 상품을 진열한 상태로 판매를 중지할 경우 상품은 쇼핑몰에 표시되지만 &#34;품절&#34;로 표시되어 상품을 구매할 수 없다. 상품이 &#34;진열안함&#34;일 경우 &#34;판매함&#34; 상태여도 상품에 접근할 수 없기 때문에 구매할 수 없다.
     *
     * T : 판매함
     * F : 판매안함
     *
     *
     */
    selling: any;
    /**
     * @description
     * 중고상품 사용 개월
     *
     * 최대값: [2147483647]
     */
    product_used_month: any;
    /**
     * @description
     * 상품요약설명
     *
     * 상품에 대한 요약 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
     *
     * 최대글자수 : [255자]
     */
    summary_description: any;
    /**
     * @description
     * 상품 검색어
     *
     * 검색 또는 분류를 위하여 상품에 입력하는 검색어 정보(해시태그)
     *
     *
     */
    product_tag: any;
    /**
     * @description
     * 세금 계산 유형
     *
     * A : 자동 계산
     * M : 수동 계산
     *
     *
     */
    tax_calculation: any;
    /**
     * @description
     * 판매가 대체문구
     *
     * 상품의 가격 대신 표시되는 문구. 품절이나 상품이 일시적으로 판매 불가할 때 사용.
     *
     * 최대글자수 : [20자]
     */
    price_content: any;
    /**
     * @description
     * 구매제한 개별 설정여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    buy_limit_by_product: any;
    /**
     * @description
     * 구매제한
     *
     * 해당 상품을 구매할 수 있는 회원 정보 표시.
     *
     * N : 회원만 구매하며
     * 구매버튼 감추기
     * M : 회원만 구매하며
     * 구매버튼 보이기
     * F : 구매제한 안함
     * O : 지정된 회원만 구매하며 구매버튼 감추기
     * D : 지정된 회원만 구매하며 구매버튼 보이기
     *
     *
     */
    buy_limit_type: any;
    /**
     * @description
     * 구매가능 회원 등급
     *
     *
     */
    buy_group_list: any;
    /**
     * @description
     * 구매가능 회원아이디
     *
     *
     */
    buy_member_id_list: any;
    /**
     * @description
     * 재구매 제한
     *
     * T : 재구매 불가
     * F : 제한안함
     *
     *
     */
    repurchase_restriction: any;
    /**
     * @description
     * 단독구매 제한
     *
     * T : 단독구매 불가
     * F : 제한안함
     *
     *
     */
    single_purchase_restriction: any;
    /**
     * @description
     * 구매단위 타입
     *
     * 해당 상품의 구매 단위를 1개 이상으로 설정한 경우 해당 구매 단위를 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
     *
     * P : 상품 기준
     * O : 품목 기준
     *
     *
     */
    buy_unit_type: any;
    /**
     * @description
     * 구매단위
     *
     * 구매할 수 있는 최소한의 단위 표시.
     * 예) 구매 주문단위가 세 개일 경우, 3개, 6개, 9개 단위로 구매 가능함.
     *
     *
     */
    buy_unit: any;
    /**
     * @description
     * 주문수량 제한 기준
     *
     * 해당 상품의 주문 수량 제한시 제한 기준을 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
     *
     * P : 상품 기준
     * O : 품목 기준
     *
     *
     */
    order_quantity_limit_type: any;
    /**
     * @description
     * 최소 주문수량
     *
     * 주문 가능한 최소한의 주문 수량. 주문 수량 미만으로 구매 할 수 없음.
     *
     * 최대값: [2147483647]
     */
    minimum_quantity: any;
    /**
     * @description
     * 최대 주문수량
     *
     * 주문 가능한 최대한의 주문 수량. 주문 수량을 초과하여 구매 할 수 없음.
     *
     * 최대 주문수량이 &#34;제한없음&#34;일 경우 &#34;0&#34;으로 표시된다.
     *
     * 최대값: [2147483647]
     */
    maximum_quantity: any;
    /**
     * @description
     * 적립금 개별설정 사용여부
     *
     * F : 기본설정 사용
     * T : 개별설정
     *
     *
     */
    points_by_product: any;
    /**
     * @description
     * 결제방식별 적립금 설정 여부
     *
     * B : 기본 적립금설정 사용
     * C : 결제방식에 따른 적립
     *
     *
     */
    points_setting_by_payment: any;
    /**
     * @description
     * 적립금 설정 정보
     *
     *
     */
    points_amount: any;
    /**
     * @description
     * 성인인증
     *
     * 성인인증이 필요한 상품인지 여부. 성인인증이 필요한 상품인 구매를 위해서는 본인인증을 거쳐야함.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    adult_certification: any;
    /**
     * @description
     * 상세이미지
     *
     * 상품 상세 화면에 표시되는 상품 이미지.
     *
     *
     */
    detail_image: any;
    /**
     * @description
     * 목록이미지
     *
     * 상품 분류 화면, 메인 화면, 상품 검색 화면에 표시되는 상품의 목록 이미지.
     *
     *
     */
    list_image: any;
    /**
     * @description
     * 작은목록이미지
     *
     * 최근 본 상품 영역에 표시되는 상품의 목록 이미지.
     *
     *
     */
    tiny_image: any;
    /**
     * @description
     * 축소이미지
     *
     * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
     *
     *
     */
    small_image: any;
    /**
     * @description
     * 네이버페이 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_naverpay: any;
    /**
     * @description
     * 네이버페이 판매타입
     *
     * C : 네이버페이 + 쇼핑몰 동시판매 상품
     * O : 네이버페이 전용상품
     *
     *
     */
    naverpay_type: any;
    /**
     * @description
     * 제조사 코드
     *
     * 제조사를 등록하면 자동으로 생성되는 코드로 상품에 특정 제조사를 지정할 때 사용.
     *
     * 미입력시 자체제작(M0000000) 사용
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturer_code: any;
    /**
     * @description
     * 트렌드 코드
     *
     * 트렌드를 등록하면 자동으로 생성되는 코드로 상품에 특정 트렌드를 지정할 때 사용.
     *
     * 미입력시 기본트렌드(T0000000) 사용
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    trend_code: any;
    /**
     * @description
     * 브랜드 코드
     *
     * 브랜드를 등록하면 자동으로 생성되는 코드로 상품에 특정 브랜드를 지정할 때 사용.
     *
     * 미입력시 자체브랜드(B0000000) 사용
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brand_code: any;
    /**
     * @description
     * 제조일자
     *
     * 상품을 제조한 제조일자.
     *
     *
     */
    made_date: any;
    /**
     * @description
     * 유효기간
     *
     * 상품을 정상적으로 사용할 수 있는 기간. 상품권이나 티켓 같은 무형 상품, 식품이나 화장품 같은 유형 상품의 유효기간을 표시.
     *
     * 주로 상품권이나 티켓 같은 무형 상품에 사용되며, 해당 무형 상품의 유효기간을 표시.
     *
     * 배열 최대사이즈: [2]
     */
    expiration_date: any;
    /**
     * @description
     * 원산지 국내/국외/기타
     *
     * F : 국내
     * T : 국외
     * E : 기타
     *
     *
     */
    origin_classification: any;
    /**
     * @description
     * 원산지 번호
     *
     * 원산지 번호를 List all Origin API를 통해 원산지를 조회하여 입력
     * origin_classification이 F(국내)인 경우, 해외 여부(foreign)가 &#34;F&#34;인 원산지만 입력 가능함.
     * origin_classification이 T(해외)인 경우, 해외 여부(foreign)가 &#34;T&#34;인 원산지만 입력 가능함.
     *
     *
     */
    origin_place_no: any;
    /**
     * @description
     * 원산지기타정보
     *
     * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
     *
     * 최대글자수 : [30자]
     */
    origin_place_value: any;
    /**
     * @description
     * 원산지 국가코드
     *
     *
     */
    made_in_code: any;
    /**
     * @description
     * 아이콘 노출 기간
     *
     * 상품에 설정한 아이콘이 노출되는 기간.
     *
     *
     */
    icon_show_period: any;
    /**
     * @description
     * 아이콘
     *
     * 상품에 표시되는 아이콘. 상품 판매를 강조하기 위한 목적으로 사용이 가능함.
     *
     * 배열 최대사이즈: [5]
     */
    icon: any;
    /**
     * @description
     * 상품소재
     *
     * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
     *
     *
     */
    product_material: any;
    /**
     * @description
     * 추천 / 품절 / 신상품 아이콘 노출 여부
     *
     * 추천, 품절, 신상품 아이콘을 목록에서 표시하는지 여부
     *
     * ※ 품절 아이콘
     *
     * ● 상품이 품절 상태임을 알려주는 아이콘
     * ● 재고관리 및 품절 기능을 사용하는 상품에 대해 재고가 없을 경우 표시
     *
     * ※ 추천, 신상품 아이콘
     *
     * ● 상품분류나 메인화면의 추천상품, 신상품 영역에 진열된 상품인 경우, 설정에 따라 해당 아이콘을 표시함
     *
     * ※ 아이콘 노출 여부 설정위치 : [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 정책 설정 &gt; 상품 관련 설정 &gt; 상품 아이콘 설정&#39;]
     *
     *
     */
    list_icon: any;
    /**
     * @description
     * 승인요청 결과
     *
     * N : 승인요청 (신규상품)
     * E : 승인요청 (상품수정)
     * C : 승인완료
     * R : 승인거절
     * I : 검수진행중
     * Empty Value : 요청된적 없음
     *
     *
     */
    approve_status: any;
    /**
     * @description
     * 품절여부
     *
     * T : 품절
     * F : 품절아님
     *
     *
     */
    sold_out: any;
    /**
     * @description
     * 상품 할인판매가 리소스
     *
     *
     */
    discountprice: any;
    /**
     * @description
     * 꾸미기 이미지 리소스
     *
     *
     */
    decorationimages: any;
    /**
     * @description
     * 혜택 리소스
     *
     *
     */
    benefits: any;
    /**
     * @description
     * 상품 옵션 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    options: any;
    /**
     * @description
     * 품목 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    variants: any;
    /**
     * @description
     * 해외통관코드
     *
     * clearance_category_code
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    clearance_category_code: any;
    /**
     * @description
     * 추가 이미지 리소스
     *
     *
     */
    additionalimages: any;
    /**
     * @description
     * 표시제한 범위
     *
     * A : 모두에게 표시
     * M : 회원에게만 표시
     *
     *
     */
    exposure_limit_type: any;
    /**
     * @description
     * 표시대상 회원 등급
     *
     *
     */
    exposure_group_list: any;
    /**
     * @description
     * 세트상품 타입
     *
     * C : 일반세트
     * S : 분리세트
     *
     *
     */
    set_product_type: any;
    /**
     * @description
     * 카카오페이 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_kakaopay: any;
    /**
     * @description
     * 배송비 타입
     *
     * (개별배송비를 사용할 경우) 상품의 배송비 타입.
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     * T : 배송비 무료
     * R : 고정배송비 사용
     * M : 구매 금액에 따른 부과
     * D : 구매 금액별 차등 배송료 사용
     * W : 상품 무게별 차등 배송료 사용
     * C : 상품 수량별 차등 배송료 사용
     * N : 상품 수량에 비례하여 배송료 부과
     *
     *
     */
    shipping_fee_type: any;
    /**
     * @description
     * 메인진열
     *
     * 상품을 &#34;추천상품&#34;, &#34;신상품&#34;과 같은 메인진열에 진열할 경우, 메인 진열 번호를 표시한다.
     *
     *
     */
    main: any;
    /**
     * @description
     * 상품 할인판매가 리소스
     *
     *
     */
    channeldiscountprices: any;
    /**
     * @description
     * 마켓 연동 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    market_sync: any;
    /**
     * @description
     * 메모 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    memos: any;
    /**
     * @description
     * 상품 조회수 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    hits: any;
    /**
     * @description
     * 상품 Seo 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    seo: any;
    /**
     * @description
     * 분류 번호
     *
     * 해당 상품이 진열되어있는 상품 분류.
     *
     *
     */
    category: any;
    /**
     * @description
     * 기획전 번호
     *
     *
     */
    project_no: any;
    /**
     * @description
     * 상품상세설명
     *
     * 상품에 보다 상세한 정보가 포함되어있는 설명. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    description: any;
    /**
     * @description
     * 모바일 상품 상세설명
     *
     * 입력시 모바일 쇼핑몰에서 상품상세설명 대신 모바일 상품 상세 설명을 대신 표시함.
     *
     *
     */
    mobile_description: any;
    /**
     * @description
     * 모바일 별도 등록
     *
     * T : 직접등록
     * F : 상품 상세설명 동일
     *
     *
     */
    separated_mobile_description: any;
    /**
     * @description
     * 상품결제안내
     *
     * 상품의 결제 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    payment_info: any;
    /**
     * @description
     * 상품배송안내
     *
     * 상품의 배송 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    shipping_info: any;
    /**
     * @description
     * 교환/반품안내
     *
     * 상품의 교환/반품 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    exchange_info: any;
    /**
     * @description
     * 서비스문의/안내
     *
     * 제품의 사후 고객 서비스 방법 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
     *
     *
     */
    service_info: any;
    /**
     * @description
     * 부가세 표시 문구
     *
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정 &gt; 추가설정 &gt; 판매가 부가세 표시문구&#39;]에서 설정한 문구 표시
     * tax_calculation이 A(자동계산)일 경우 null로 반환됨.
     *
     *
     */
    product_tax_type_text: any;
    /**
     * @description
     * 상품 간략 설명
     *
     * 상품에 대한 간략한 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
     *
     *
     */
    simple_description: any;
    /**
     * @description
     * 상품 태그 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     *
     */
    tags: any;
    /**
     * @description
     * 옵션 사용여부
     *
     * 해당 상품이 옵션을 갖고 있는지에 대한 여부. 옵션을 갖고 있는 상품은 사이즈나 색상과 같은 다양한 선택지를 제공한다.
     *
     * T : 옵션사용함
     * F : 옵션 사용안함
     *
     *
     */
    has_option: any;
    /**
     * @description
     * 옵션 구성방식
     *
     * 옵션을 사용할 경우, 옵션의 유형 표시
     *
     * ● 조합 일체선택형 : 하나의 셀렉스박스(버튼 이나 라디오버튼)에 모든 옵션이 조합되어 표시됨
     * ● 조합 분리선택형 : 옵션을 각각의 셀렉스박스(버튼 이나 라디오버튼)로 선택할 수 있으며 옵션명을 기준으로 옵션값을 조합할 수 있음
     * ● 상품 연동형 : 옵션표시방식은 조합형과 유사하지만 필수옵션과 선택옵션을 선택할 수 있음. 옵션의 조합을 제한 없이 생성할 수 있음.
     * ● 독립 선택형 : 독립적인 조건 여러개를 각각 선택할 수 있는 옵션으로 옵션 값이 조합되지 않고 각각의 품목으로 생성됨.
     *
     * C : 조합 일체선택형
     * S : 조합 분리선택형
     * E : 상품 연동형
     * F : 독립 선택형
     *
     *
     */
    option_type: any;
    /**
     * @description
     * 배송 계산 유형
     *
     * A : 자동 계산
     * M : 수동 계산
     *
     *
     */
    shipping_calculation: any;
    /**
     * @description
     * 배송방법
     *
     * (개별배송비를 사용할 경우) 배송 수단 및 방법
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     * 01 : 택배
     * 02 : 빠른등기
     * 03 : 일반등기
     * 04 : 직접배송
     * 05 : 퀵배송
     * 06 : 기타
     * 07 : 화물배송
     * 08 : 매장직접수령
     * 09 : 배송필요 없음
     *
     *
     */
    shipping_method: any;
    /**
     * @description
     * 배송비 선결제 설정
     *
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     * C : 착불
     * P : 선결제
     * B : 선결제/착불
     *
     *
     */
    prepaid_shipping_fee: any;
    /**
     * @description
     * 배송기간
     *
     * (개별배송비를 사용할 경우) 상품 배송시 평균적으로 소요되는 배송 기간.
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     *
     */
    shipping_period: any;
    /**
     * @description
     * 배송정보
     *
     * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시. [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별배송료 설정이 사용안함인 경우 설정 불가.
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     * A : 국내배송
     * C : 해외배송
     * B : 국내/해외배송
     *
     *
     */
    shipping_scope: any;
    /**
     * @description
     * 배송지역
     *
     * (개별배송비를 사용할 경우) 상품을 배송할 수 있는 지역.
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     * 최대글자수 : [255자]
     */
    shipping_area: any;
    /**
     * @description
     * 구간별 배송비
     *
     * 개별배송비를 사용할 경우 상품의 개별 배송비.
     *
     * shipping_fee_type이 R, N일 경우 배열 안에 shipping_fee를 정의하여 배송비를 설정할 수 있다.
     *
     * shipping_fee_type이 M, D, W, C일 경우 배열 안에 다음과 같이 정의하여 배송비 구간을 설정할 수 있다.
     * shipping_rates_min : 배송비 구간 시작 기준
     * shipping_rates_max : 배송비 구간 종료 기준
     * shipping_fee : 배송비
     *
     * shipping_calculation이 A(자동계산)일 경우 null로 반환.
     *
     *
     */
    shipping_rates: any;
    /**
     * @description
     * 원산지 코드
     *
     * 상품의 원산지 코드.
     *
     *
     */
    origin_place_code: any;
    /**
     * @description
     * 추가항목
     *
     * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 추가한 추가항목.
     *
     * 기본적인 상품 정보 외에 추가로 표시항 항목이 있을 때 추가하여 사용함.
     *
     *
     */
    additional_information: any;
    /**
     * @description
     * 관련상품
     *
     * 해당 상품과 비슷한 상품 혹은 대체 가능한 상품. 관련 상품 등록시 해당 상품의 상세페이지 하단에 노출된다.
     *
     *
     */
    relational_product: any;
    /**
     * @description
     * 옵션별로 한 개씩 선택 (독립형 옵션)
     *
     * 독립형 옵션을 사용할 경우, 하나의 옵션을 여러개 중복하여 선택할 수 없고 한개씩만 선택 가능함.
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    select_one_by_option: any;
  }

  export interface RetrieveAListOfProductsInput {
    /**
     * @description
     * 상품 할인판매가 리소스
     *
     * @embed
     */
    channeldiscountprices?: any;
    /**
     * @description
     * 상품 할인판매가 리소스
     *
     * @embed
     */
    discountprice?: any;
    /**
     * @description
     * 꾸미기 이미지 리소스
     *
     * @embed
     */
    decorationimages?: any;
    /**
     * @description
     * 혜택 리소스
     *
     * @embed
     */
    benefits?: any;
    /**
     * @description
     * 상품 옵션 리소스
     *
     * @embed
     */
    options?: any;
    /**
     * @description
     * 품목 리소스
     *
     * 상품당 품목정보를 100개까지 조회할 수 있음.
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    variants?: any;
    /**
     * @description
     * 추가 이미지 리소스
     *
     * @embed
     */
    additionalimages?: any;
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
     * 상품번호
     *
     * 조회하고자 하는 상품의 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_no?: any;
    /**
     * @description
     * 진열상태
     *
     * 진열 혹은 미진열 되어있는 상품 검색.
     *
     *
     */
    display?: any;
    /**
     * @description
     * 판매상태
     *
     * 판매중이거나 판매안함 상태의 상품 검색.
     *
     *
     */
    selling?: any;
    /**
     * @description
     * 상품명
     *
     * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_name?: any;
    /**
     * @description
     * 상품코드
     *
     * 검색어를 상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_code?: any;
    /**
     * @description
     * 브랜드 코드
     *
     * 브랜드 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_code?: any;
    /**
     * @description
     * 제조사 코드
     *
     * 제조사 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_code?: any;
    /**
     * @description
     * 공급사 코드
     *
     * 공급사 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supplier_code?: any;
    /**
     * @description
     * 트렌드 코드
     *
     * 트렌드 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    trend_code?: any;
    /**
     * @description
     * 상품 검색어
     *
     * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_tag?: any;
    /**
     * @description
     * 자체상품 코드
     *
     * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    custom_product_code?: any;
    /**
     * @description
     * 자체 품목 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    custom_variant_code?: any;
    /**
     * @description
     * 상품 판매가 검색 최소값
     *
     * 판매가가 해당 범위 이상인 상품 검색
     *
     *
     */
    price_min?: any;
    /**
     * @description
     * 상품 판매가 검색 최대값
     *
     * 판매가가 해당 범위 이하인 상품 검색
     *
     *
     */
    price_max?: any;
    /**
     * @description
     * 상품 소비자가 검색 최소값
     *
     * 소비자가가 해당 범위 이상인 상품 검색
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    retail_price_min?: any;
    /**
     * @description
     * 상품 소비자가 검색 최대값
     *
     * 소비자가가 해당 범위 이하인 상품 검색
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    retail_price_max?: any;
    /**
     * @description
     * 상품 공급가 검색 최소값
     *
     * 공급가가 해당 범위 이하인 상품 검색
     *
     *
     */
    supply_price_min?: any;
    /**
     * @description
     * 상품 공급가 검색 최대값
     *
     * 공급가가 해당 범위 이상인 상품 검색
     *
     *
     */
    supply_price_max?: any;
    /**
     * @description
     * 상품 등록일 검색 시작일
     *
     * 상품 등록일이 해당 날짜 이후인 상품 검색.
     *
     * 등록일 검색 종료일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    created_start_date?: any;
    /**
     * @description
     * 상품 등록일 검색 종료일
     *
     * 상품 등록일이 해당 날짜 이전인 상품 검색.
     *
     * 등록일 검색 시작일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    created_end_date?: any;
    /**
     * @description
     * 상품 수정일 검색 시작일
     *
     * 상품 수정일이 해당 날짜 이후인 상품 검색.
     *
     * 수정일 검색 종료일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    updated_start_date?: any;
    /**
     * @description
     * 상품 수정일 검색 종료일
     *
     * 상품 수정일이 해당 날짜 이전인 상품 검색.
     *
     * 수정일 검색 시작일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    updated_end_date?: any;
    /**
     * @description
     * 분류 번호
     *
     * 특정 분류에 진열된 상품 검색.
     *
     *
     */
    category?: any;
    /**
     * @description
     * 영문 상품명
     *
     * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    eng_product_name?: any;
    /**
     * @description
     * 공급사 상품명
     *
     * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supply_product_name?: any;
    /**
     * @description
     * 상품명(관리용)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    internal_product_name?: any;
    /**
     * @description
     * 모델명
     *
     * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    model_name?: any;
    /**
     * @description
     * 상품 상태
     *
     * 특정 상품 상태 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_condition?: any;
    /**
     * @description
     * 원산지정보
     *
     * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    origin_place_value?: any;
    /**
     * @description
     * 재고수량 검색 최대값
     *
     * 재고가 해당 값 이하로 남아있는 상품 검색.
     *
     * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
     *
     *
     */
    stock_quantity_max?: any;
    /**
     * @description
     * 재고수량 검색 최소값
     *
     * 재고가 해당 값 이상 남아있는 상품 검색.
     *
     * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
     *
     *
     */
    stock_quantity_min?: any;
    /**
     * @description
     * 안전재고수량 검색 최대값
     *
     *
     */
    stock_safety_max?: any;
    /**
     * @description
     * 안전재고수량 검색 최소값
     *
     *
     */
    stock_safety_min?: any;
    /**
     * @description
     * 상품 중량
     *
     * 해당 중량의 상품 검색.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_weight?: any;
    /**
     * @description
     * 자체분류
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_code?: any;
    /**
     * @description
     * 재고 사용여부
     *
     * 해당 상품 품목이 재고를 사용하고 있는지 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_inventory?: any;
    /**
     * @description
     * 미적용 분류 검색
     *
     * 분류가 등록되지 않은 상품에 대하여 검색함.
     *
     * T: 미적용 분류 검색
     *
     *
     */
    category_unapplied?: any;
    /**
     * @description
     * 하위분류 포함 검색
     *
     * 하위분류에 등록된 상품을 포함하여 검색함.
     *
     * T: 포함
     *
     *
     */
    include_sub_category?: any;
    /**
     * @description
     * 추가항목 검색조건 키
     *
     * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
     *
     *
     */
    additional_information_key?: any;
    /**
     * @description
     * 추가항목 검색조건 값
     *
     * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
     *
     *
     */
    additional_information_value?: any;
    /**
     * @description
     * 승인상태 검색
     *
     * N : 승인요청 (신규상품) 상태값
     * E : 승인요청 (상품수정) 상태값
     * C : 승인완료 상태값
     * R : 승인거절 상태값
     * I : 검수진행중 상태값
     *
     *
     */
    approve_status?: any;
    /**
     * @description
     * 해당 상품번호 이후 검색
     *
     * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
     *
     * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
     *
     * product_no
     * sort
     * order
     * offset
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    since_product_no?: any;
    /**
     * @description
     * 세트상품 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    product_bundle?: any;
    /**
     * @description
     * 옵션 구성방식
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * C : 조합 일체선택형
     * S : 조합 분리선택형
     * E : 상품 연동형
     * F : 독립 선택형
     *
     *
     */
    option_type?: any;
    /**
     * @description
     * 마켓 연동 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    market_sync?: any;
    /**
     * @description
     * 정렬 순서 값
     *
     * created_date : 등록일
     * updated_date : 수정일
     * product_name : 상품명
     *
     *
     */
    sort?: any;
    /**
     * @description
     * 정렬 순서
     *
     * asc : 순차정렬
     * desc : 역순 정렬
     *
     *
     */
    order?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [5000]
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

  export interface RetrieveAListOfProductsOutput {
    products: {
      shop_no: number;
      product_no: number;
      product_code: string;
      custom_product_code: string;
      product_name: string;
      eng_product_name: string;
      model_name: string;
      price_excluding_tax: Cafe24Datetime;
      price: Cafe24Datetime;
      retail_price: string;
      display: Cafe24Enum;
      selling: Cafe24Enum;
      product_used_month: number;
      summary_description: string;
      tax_calculation: Cafe24Enum;
      price_content: any;
      buy_limit_by_product: Cafe24Enum;
      buy_limit_type: Cafe24Enum;
      buy_group_list: number[];
      buy_member_id_list: string[];
      repurchase_restriction: Cafe24Enum;
      single_purchase_restriction: Cafe24Enum;
      buy_unit_type: Cafe24Enum;
      buy_unit: number;
      order_quantity_limit_type: Cafe24Enum;
      minimum_quantity: number;
      maximum_quantity: number;
      points_by_product: Cafe24Enum;
      points_setting_by_payment: Cafe24Enum;
      points_amount: {
        payment_method: string;
        points_rate: string;
      }[];
      adult_certification: Cafe24Enum;
      detail_image: string;
      list_image: string;
      tiny_image: string;
      small_image: string;
      use_naverpay: Cafe24Enum;
      naverpay_type: Cafe24Enum;
      use_kakaopay: Cafe24Enum;
      manufacturer_code: string;
      trend_code: string;
      brand_code: string;
      made_date: string;
      expiration_date: {
        start_date: Cafe24Date;
        end_date: Cafe24Date;
      };
      origin_classification: Cafe24Enum;
      origin_place_no: number;
      origin_place_value: string;
      made_in_code: string;
      icon_show_period: {
        start_date: Cafe24Datetime;
        end_date: Cafe24Datetime;
      };
      icon: string[];
      product_material: string;
      list_icon: {
        soldout_icon: boolean;
        recommend_icon: boolean;
        new_icon: boolean;
      };
      approve_status: string;
      sold_out: Cafe24Enum;
      clearance_category_code: string;
      exposure_limit_type: Cafe24Enum;
      exposure_group_list: number[];
      set_product_type: any;
      shipping_fee_type: Cafe24Enum;
      main: number[];
      market_sync: Cafe24Enum;
    }[];
  }
  export interface RetrieveACountOfProductsInput {
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
     * 상품번호
     *
     * 조회하고자 하는 상품의 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_no?: any;
    /**
     * @description
     * 진열상태
     *
     * 진열 혹은 미진열 되어있는 상품 검색.
     *
     *
     */
    display?: any;
    /**
     * @description
     * 판매상태
     *
     * 판매중이거나 판매안함 상태의 상품 검색.
     *
     *
     */
    selling?: any;
    /**
     * @description
     * 상품명
     *
     * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_name?: any;
    /**
     * @description
     * 상품코드
     *
     * 상품 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_code?: any;
    /**
     * @description
     * 브랜드 코드
     *
     * 브랜드 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_code?: any;
    /**
     * @description
     * 제조사 코드
     *
     * 제조사 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    manufacturer_code?: any;
    /**
     * @description
     * 공급사 코드
     *
     * 공급사 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supplier_code?: any;
    /**
     * @description
     * 트렌드 코드
     *
     * 트렌드 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    trend_code?: any;
    /**
     * @description
     * 상품 검색어
     *
     * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_tag?: any;
    /**
     * @description
     * 자체상품 코드
     *
     * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    custom_product_code?: any;
    /**
     * @description
     * 자체 품목 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    custom_variant_code?: any;
    /**
     * @description
     * 상품 판매가 검색 최소값
     *
     * 판매가가 해당 범위 이상인 상품 검색
     *
     *
     */
    price_min?: any;
    /**
     * @description
     * 상품 판매가 검색 최대값
     *
     * 판매가가 해당 범위 이하인 상품 검색
     *
     *
     */
    price_max?: any;
    /**
     * @description
     * 상품 소비자가 검색 최소값
     *
     * 소비자가가 해당 범위 이상인 상품 검색
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    retail_price_min?: any;
    /**
     * @description
     * 상품 소비자가 검색 최대값
     *
     * 소비자가가 해당 범위 이하인 상품 검색
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    retail_price_max?: any;
    /**
     * @description
     * 상품 공급가 검색 최소값
     *
     * 공급가가 해당 범위 이하인 상품 검색
     *
     *
     */
    supply_price_min?: any;
    /**
     * @description
     * 상품 공급가 검색 최대값
     *
     * 공급가가 해당 범위 이상인 상품 검색
     *
     *
     */
    supply_price_max?: any;
    /**
     * @description
     * 상품 등록일 검색 시작일
     *
     * 상품 등록일이 해당 날짜 이후인 상품 검색.
     *
     * 등록일 검색 종료일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    created_start_date?: any;
    /**
     * @description
     * 상품 등록일 검색 종료일
     *
     * 상품 등록일이 해당 날짜 이전인 상품 검색.
     *
     * 등록일 검색 시작일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    created_end_date?: any;
    /**
     * @description
     * 상품 수정일 검색 시작일
     *
     * 상품 수정일이 해당 날짜 이후인 상품 검색.
     *
     * 수정일 검색 종료일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    updated_start_date?: any;
    /**
     * @description
     * 상품 수정일 검색 종료일
     *
     * 상품 수정일이 해당 날짜 이전인 상품 검색.
     *
     * 수정일 검색 시작일과 같이 사용해야함.
     *
     * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
     *
     *
     */
    updated_end_date?: any;
    /**
     * @description
     * 분류 번호
     *
     * 특정 분류에 진열된 상품 검색.
     *
     *
     */
    category?: any;
    /**
     * @description
     * 영문 상품명
     *
     * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    eng_product_name?: any;
    /**
     * @description
     * 공급사 상품명
     *
     * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    supply_product_name?: any;
    /**
     * @description
     * 상품명(관리용)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    internal_product_name?: any;
    /**
     * @description
     * 모델명
     *
     * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    model_name?: any;
    /**
     * @description
     * 상품 상태
     *
     * 특정 상품 상태 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_condition?: any;
    /**
     * @description
     * 원산지정보
     *
     * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    origin_place_value?: any;
    /**
     * @description
     * 재고수량 검색 최대값
     *
     * 재고가 해당 값 이하로 남아있는 상품 검색.
     *
     * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
     *
     *
     */
    stock_quantity_max?: any;
    /**
     * @description
     * 재고수량 검색 최소값
     *
     * 재고가 해당 값 이상 남아있는 상품 검색.
     *
     * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
     *
     *
     */
    stock_quantity_min?: any;
    /**
     * @description
     * 안전재고수량 검색 최대값
     *
     *
     */
    stock_safety_max?: any;
    /**
     * @description
     * 안전재고수량 검색 최소값
     *
     *
     */
    stock_safety_min?: any;
    /**
     * @description
     * 상품 중량
     *
     * 해당 중량의 상품 검색.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    product_weight?: any;
    /**
     * @description
     * 자체분류
     *
     * 자체분류 코드가 일치하는 상품 검색
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_code?: any;
    /**
     * @description
     * 재고 사용여부
     *
     * 해당 상품 품목이 재고를 사용하고 있는지 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_inventory?: any;
    /**
     * @description
     * 미적용 분류 검색
     *
     * 분류가 등록되지 않은 상품에 대하여 검색함.
     *
     * T: 미적용 분류 검색
     *
     *
     */
    category_unapplied?: any;
    /**
     * @description
     * 하위분류 포함 검색
     *
     * 하위분류에 등록된 상품을 포함하여 검색함.
     *
     * T: 포함
     *
     *
     */
    include_sub_category?: any;
    /**
     * @description
     * 추가항목 검색조건 키
     *
     * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
     *
     *
     */
    additional_information_key?: any;
    /**
     * @description
     * 추가항목 검색조건 값
     *
     * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
     *
     *
     */
    additional_information_value?: any;
    /**
     * @description
     * 승인상태 검색
     *
     * N : 승인요청 (신규상품) 상태값
     * E : 승인요청 (상품수정) 상태값
     * C : 승인완료 상태값
     * R : 승인거절 상태값
     * I : 검수진행중 상태값
     *
     *
     */
    approve_status?: any;
    /**
     * @description
     * 해당 상품번호 이후 검색
     *
     * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
     *
     * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
     *
     * product_no
     * sort
     * order
     * offset
     *
     * 최소값: [0]
     * 최대값: [2147483647]
     */
    since_product_no?: any;
    /**
     * @description
     * 세트상품 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    product_bundle?: any;
    /**
     * @description
     * 옵션 구성방식
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * C : 조합 일체선택형
     * S : 조합 분리선택형
     * E : 상품 연동형
     * F : 독립 선택형
     *
     *
     */
    option_type?: any;
    /**
     * @description
     * 마켓 연동 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    market_sync?: any;
  }

  export interface RetrieveACountOfProductsOutput {
    count: number;
  }
  export interface RetrieveAProductResourceInput {
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
     * 상품번호
     *
     * 조회하고자 하는 상품의 번호
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 품목 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    variants?: any;
    /**
     * @description
     * 메모 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    memos?: any;
    /**
     * @description
     * 상품 조회수 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    hits?: any;
    /**
     * @description
     * 상품 Seo 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    seo?: any;
    /**
     * @description
     * 상품 태그 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    tags?: any;
    /**
     * @description
     * 상품 옵션 리소스
     *
     * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
     *
     * @embed
     */
    options?: any;
    /**
     * @description
     * 상품 할인판매가 리소스
     *
     * @embed
     */
    discountprice?: any;
    /**
     * @description
     * 꾸미기 이미지 리소스
     *
     * @embed
     */
    decorationimages?: any;
    /**
     * @description
     * 혜택 리소스
     *
     * @embed
     */
    benefits?: any;
    /**
     * @description
     * 추가 이미지 리소스
     *
     * @embed
     */
    additionalimages?: any;
  }

  export interface RetrieveAProductResourceOutput {
    product: {
      shop_no: number;
      product_no: number;
      category: {
        category_no: number;
        recommend: Cafe24Enum;
        new: Cafe24Enum;
      }[];
      project_no: number[];
      product_code: string;
      custom_product_code: string;
      product_name: string;
      eng_product_name: string;
      model_name: string;
      price_excluding_tax: Cafe24Datetime;
      price: Cafe24Datetime;
      retail_price: string;
      display: Cafe24Enum;
      description: string;
      mobile_description: string;
      separated_mobile_description: Cafe24Enum;
      payment_info: string;
      shipping_info: string;
      exchange_info: string;
      service_info: string;
      product_tax_type_text: any;
      set_product_type: any;
      selling: Cafe24Enum;
      product_used_month: number;
      simple_description: string;
      summary_description: string;
      product_tag: string[];
      tax_calculation: Cafe24Enum;
      price_content: any;
      buy_limit_by_product: Cafe24Enum;
      buy_limit_type: Cafe24Enum;
      repurchase_restriction: Cafe24Enum;
      buy_group_list: number[];
      buy_member_id_list: string[];
      single_purchase_restriction: Cafe24Enum;
      buy_unit_type: Cafe24Enum;
      buy_unit: number;
      order_quantity_limit_type: Cafe24Enum;
      minimum_quantity: number;
      maximum_quantity: number;
      points_by_product: Cafe24Enum;
      points_setting_by_payment: Cafe24Enum;
      points_amount: {
        payment_method: string;
        points_rate: string;
      }[];
      adult_certification: Cafe24Enum;
      detail_image: string;
      list_image: string;
      tiny_image: string;
      small_image: string;
      has_option: Cafe24Enum;
      option_type: Cafe24Enum;
      use_naverpay: Cafe24Enum;
      naverpay_type: Cafe24Enum;
      use_kakaopay: Cafe24Enum;
      manufacturer_code: string;
      trend_code: string;
      brand_code: string;
      made_date: string;
      expiration_date: {
        start_date: Cafe24Date;
        end_date: Cafe24Date;
      };
      origin_classification: Cafe24Enum;
      origin_place_no: number;
      origin_place_value: string;
      made_in_code: string;
      icon_show_period: {
        start_date: Cafe24Datetime;
        end_date: Cafe24Datetime;
      };
      icon: any;
      product_material: string;
      shipping_calculation: Cafe24Enum;
      shipping_method: Cafe24Datetime;
      prepaid_shipping_fee: Cafe24Enum;
      shipping_period: {
        minimum: number;
        maximum: number;
      };
      shipping_scope: Cafe24Enum;
      shipping_area: string;
      shipping_fee_type: Cafe24Enum;
      shipping_rates: {
        shipping_rates_min: string;
        shipping_rates_max: string;
        shipping_fee: string;
      }[];
      clearance_category_code: string;
      origin_place_code: number;
      list_icon: {
        soldout_icon: boolean;
        recommend_icon: boolean;
        new_icon: boolean;
      };
      additional_information: {
        key: string;
        name: string;
        value: string;
      }[];
      main: number[];
      relational_product: {
        product_no: number;
        interrelated: Cafe24Enum;
      }[];
      select_one_by_option: Cafe24Enum;
      approve_status: Cafe24Enum;
      sold_out: Cafe24Enum;
      exposure_limit_type: Cafe24Enum;
      exposure_group_list: number[];
      market_sync: Cafe24Enum;
    };
  }

  interface Cafe24FrontAPIClient {
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 목록으로 조회할 수 있습니다.
     * 상품코드, 상품명, 판매가 등을 조회할 수 있습니다.
     * 상품이 5,000개가 넘을 경우에는 offset 으로는 조회할 수 없으므로 since_product_no 파라메터를 활용해주시면 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 24,
     *             "product_code": "P000000X",
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "model_name": "A1865",
     *             "price_excluding_tax": "1000.00",
     *             "price": "1100.00",
     *             "retail_price": "0.00",
     *             "display": "T",
     *             "selling": "F",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "tax_calculation": "M",
     *             "price_content": null,
     *             "buy_limit_by_product": "T",
     *             "buy_limit_type": "F",
     *             "buy_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "buy_member_id_list": [
     *                 "sampleid",
     *                 "testid"
     *             ],
     *             "repurchase_restriction": "F",
     *             "single_purchase_restriction": "F",
     *             "buy_unit_type": "O",
     *             "buy_unit": 1,
     *             "order_quantity_limit_type": "O",
     *             "minimum_quantity": 1,
     *             "maximum_quantity": 0,
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "0.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "0.00%"
     *                 }
     *             ],
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": "T",
     *             "naverpay_type": "C",
     *             "use_kakaopay": "T",
     *             "manufacturer_code": "M0000000",
     *             "trend_code": "T0000000",
     *             "brand_code": "B0000000",
     *             "made_date": "",
     *             "expiration_date": {
     *                 "start_date": "2017-09-08",
     *                 "end_date": "2017-09-14"
     *             },
     *             "origin_classification": "F",
     *             "origin_place_no": 1798,
     *             "origin_place_value": "",
     *             "made_in_code": "KR",
     *             "icon_show_period": {
     *                 "start_date": "2017-10-30T09:00:00+09:00",
     *                 "end_date": "2017-11-02T16:00:00+09:00"
     *             },
     *             "icon": [
     *                 "icon_01_01",
     *                 "icon_02_01"
     *             ],
     *             "product_material": "",
     *             "list_icon": {
     *                 "soldout_icon": true,
     *                 "recommend_icon": false,
     *                 "new_icon": false
     *             },
     *             "approve_status": "",
     *             "sold_out": "F",
     *             "clearance_category_code": "ACAB0000",
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "set_product_type": null,
     *             "shipping_fee_type": "W",
     *             "main": [
     *                 3,
     *                 2
     *             ],
     *             "market_sync": "F"
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 23,
     *             "product_code": "P000000W",
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "model_name": "A1865",
     *             "price": 1000,
     *             "retail_price": 0,
     *             "display": "T",
     *             "selling": "F",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "tax_calculation": "M",
     *             "price_content": null,
     *             "buy_limit_by_product": "T",
     *             "buy_limit_type": "F",
     *             "buy_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "buy_member_id_list": [
     *                 "sampleid",
     *                 "testid"
     *             ],
     *             "repurchase_restriction": "F",
     *             "single_purchase_restriction": "F",
     *             "buy_unit_type": "O",
     *             "buy_unit": 1,
     *             "order_quantity_limit_type": "O",
     *             "minimum_quantity": 1,
     *             "maximum_quantity": 0,
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "0.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "0.00%"
     *                 }
     *             ],
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": "T",
     *             "naverpay_type": "C",
     *             "use_kakaopay": "T",
     *             "manufacturer_code": "M0000000",
     *             "trend_code": "T0000000",
     *             "brand_code": "B0000000",
     *             "made_date": "",
     *             "expiration_date": {
     *                 "start_date": "2017-09-08",
     *                 "end_date": "2017-09-14"
     *             },
     *             "origin_classification": "F",
     *             "origin_place_no": 1798,
     *             "origin_place_value": "",
     *             "made_in_code": "KR",
     *             "icon_show_period": {
     *                 "start_date": "2017-10-30T09:00:00+09:00",
     *                 "end_date": "2017-11-02T16:00:00+09:00"
     *             },
     *             "icon": [
     *                 "icon_01_01",
     *                 "icon_02_01"
     *             ],
     *             "product_material": "",
     *             "list_icon": {
     *                 "soldout_icon": true,
     *                 "recommend_icon": false,
     *                 "new_icon": false
     *             },
     *             "approve_status": "C",
     *             "sold_out": "F",
     *             "clearance_category_code": null,
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "set_product_type": null,
     *             "shipping_fee_type": "T",
     *             "main": [
     *                 3,
     *                 2
     *             ],
     *             "market_sync": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProducts(
      input: RetrieveAListOfProductsInput,
      options?: RequestOptions<
        RetrieveAListOfProductsOutput['products'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductsOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 전체 상품의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfProducts(
      input: RetrieveACountOfProductsInput,
      options?: RequestOptions<RetrieveACountOfProductsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductsOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 조회할 수 있습니다.
     * 상품코드, 자체상품 코드, 상품명, 상품 판매가 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-resource
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 20,
     *         "category": [
     *             {
     *                 "category_no": 27,
     *                 "recommend": "F",
     *                 "new": "T"
     *             },
     *             {
     *                 "category_no": 28,
     *                 "recommend": "T",
     *                 "new": "F"
     *             }
     *         ],
     *         "project_no": [
     *             31,
     *             32
     *         ],
     *         "product_code": "P000000T",
     *         "custom_product_code": "",
     *         "product_name": "iPhone X",
     *         "eng_product_name": "iPhone Ten",
     *         "model_name": "A1865",
     *         "price_excluding_tax": "1000.00",
     *         "price": "1100.00",
     *         "retail_price": "0.00",
     *         "display": "T",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "separated_mobile_description": "T",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "product_tax_type_text": null,
     *         "set_product_type": null,
     *         "selling": "F",
     *         "product_used_month": 2,
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "product_tag": [
     *             "edu",
     *             "sample"
     *         ],
     *         "tax_calculation": "M",
     *         "price_content": null,
     *         "buy_limit_by_product": "T",
     *         "buy_limit_type": "F",
     *         "repurchase_restriction": "F",
     *         "buy_group_list": [
     *             8,
     *             9
     *         ],
     *         "buy_member_id_list": [
     *             "sampleid",
     *             "testid"
     *         ],
     *         "single_purchase_restriction": "F",
     *         "buy_unit_type": "O",
     *         "buy_unit": 1,
     *         "order_quantity_limit_type": "O",
     *         "minimum_quantity": 1,
     *         "maximum_quantity": 0,
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "0.00%"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "0.00%"
     *             }
     *         ],
     *         "adult_certification": "F",
     *         "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *         "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *         "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *         "has_option": "F",
     *         "option_type": "T",
     *         "use_naverpay": "T",
     *         "naverpay_type": "C",
     *         "use_kakaopay": "T",
     *         "manufacturer_code": "M0000000",
     *         "trend_code": "T0000000",
     *         "brand_code": "B0000000",
     *         "made_date": "",
     *         "expiration_date": {
     *             "start_date": "2017-09-08",
     *             "end_date": "2017-09-14"
     *         },
     *         "origin_classification": "F",
     *         "origin_place_no": 1798,
     *         "origin_place_value": "",
     *         "made_in_code": "KR",
     *         "icon_show_period": {
     *             "start_date": "2017-10-30T09:00:00+09:00",
     *             "end_date": "2017-11-02T16:00:00+09:00"
     *         },
     *         "icon": null,
     *         "product_material": "",
     *         "shipping_calculation": "M",
     *         "shipping_method": "01",
     *         "prepaid_shipping_fee": "B",
     *         "shipping_period": {
     *             "minimum": 3,
     *             "maximum": 7
     *         },
     *         "shipping_scope": "A",
     *         "shipping_area": "All around World",
     *         "shipping_fee_type": "W",
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "0.00",
     *                 "shipping_rates_max": "1.00",
     *                 "shipping_fee": "100.00"
     *             },
     *             {
     *                 "shipping_rates_min": "1.00",
     *                 "shipping_rates_max": "2.00",
     *                 "shipping_fee": "200.00"
     *             }
     *         ],
     *         "clearance_category_code": "ACAB0000",
     *         "origin_place_code": 1798,
     *         "list_icon": {
     *             "soldout_icon": true,
     *             "recommend_icon": true,
     *             "new_icon": true
     *         },
     *         "additional_information": [
     *             {
     *                 "key": "custom_option1",
     *                 "name": "gift option",
     *                 "value": "Yes"
     *             }
     *         ],
     *         "main": [
     *             3,
     *             2
     *         ],
     *         "relational_product": [
     *             {
     *                 "product_no": 17,
     *                 "interrelated": "T"
     *             },
     *             {
     *                 "product_no": 19,
     *                 "interrelated": "F"
     *             }
     *         ],
     *         "select_one_by_option": "F",
     *         "approve_status": "C",
     *         "sold_out": "F",
     *         "exposure_limit_type": "M",
     *         "exposure_group_list": [
     *             8,
     *             9
     *         ],
     *         "market_sync": "F"
     *     }
     * }
     * ```
     */
    retrieveAProductResource(
      input: RetrieveAProductResourceInput,
      options?: RequestOptions<RetrieveAProductResourceOutput['product']>,
    ): Promise<AxiosResponse<RetrieveAProductResourceOutput>>;
  }
}
