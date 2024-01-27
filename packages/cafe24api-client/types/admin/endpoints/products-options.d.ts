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
   * 상품 옵션(Products options)은 상품이 다른 색상이나 사이즈를 갖고 있는 경우 이를 각각의 옵션으로 구현할 수 있도록 하는 기능입니다.
   * 옵션은 색상, 사이즈 같은 옵션명(option_name)과 색상 중 빨간색, 노란색과 같은 옵션값(option_value)으로 구성되어있습니다.
   * 상품에 옵션 등록시 옵션을 기반으로 품목(variants)이 생성됩니다.
   * 옵션은 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   * 옵션의 목록조회, 생성, 수정, 삭제가 가능합니다.
   */
  export interface ProductsOptions {
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
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
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
      * ● 조합형 : 옵션명을 기준으로 옵션값을 조합할 수 있음
      * ● 상품 연동형 : 옵션표시방식은 조합형과 유사하지만 필수옵션과 선택옵션을 선택할 수 있음. 옵션의 조합을 제한 없이 생성할 수 있음.
      * ● 독립 선택형 : 독립적인 조건 여러개를 각각 선택할 수 있는 옵션으로 옵션 값이 조합되지 않고 각각의 품목으로 생성됨.
      * 
      * T : 조합형
      * E : 연동형
      * F : 독립형
      * 
      * 
      */ 
    option_type: any;
    /**
      * @description
      * 옵션 표시방식
      * 
      * 조합형 옵션을 사용할 경우, 조합형 옵션의 유형 표시
      * 
      * * 조합 일체선택형 : 하나의 셀렉스박스(버튼 이나 라디오버튼)에 모든 옵션이 조합되어 표시됨
      * * 조합 분리선택형 : 옵션을 각각의 셀렉스박스(버튼 이나 라디오버튼)로 선택할 수 있으며 옵션명을 기준으로 옵션값을 조합할 수 있음
      * 
      * 독립형이나 상품 연동형 옵션을 사용하고 있을 경우 S(분리형)로 입력됨.
      * 
      * C : 일체형
      * S : 분리형
      * 
      * 
      */ 
    option_list_type: any;
    /**
      * @description
      * 옵션세트 코드
      * 
      * 상품연동형 옵션을 사용할 경우, 옵션 세트 코드 표시
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    option_preset_code: any;
    /**
      * @description
      * 옵션
      * 
      * 
      */ 
    options: any;
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
    /**
      * @description
      * 연동형 옵션 세트명
      * 
      * 상품연동형 옵션을 사용할 경우, 옵션 세트의 이름 표시
      * 
      * 
      */ 
    option_preset_name: any;
    /**
      * @description
      * 추가입력 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_additional_option: any;
    /**
      * @description
      * 추가입력 옵션
      * 
      * 
      */ 
    additional_options: any;
    /**
      * @description
      * 파일 첨부 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_attached_file_option: any;
    /**
      * @description
      * 파일 첨부 옵션
      * 
      * 
      */ 
    attached_file_option: any;
  }

  export interface RetrieveAListOfProductOptionsInput {
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
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface RetrieveAListOfProductOptionsOutput {
    option: { 
    shop_no: number;
    product_no: number;
    has_option: Cafe24Enum;
    option_type: Cafe24Enum;
    option_list_type: Cafe24Enum;
    option_preset_code: string;
    options: { 
    option_code: string;
    option_name: string;
    option_value: { 
    option_image_file: string;
    option_link_image: string;
    option_color: Cafe24Datetime;
    option_text: string;
    value_no: any;
    additional_amount: Cafe24Datetime;
    }[];
    required_option: Cafe24Enum;
    option_display_type: Cafe24Enum;
    }[];
    select_one_by_option: Cafe24Enum;
    option_preset_name: string;
    use_additional_option: Cafe24Enum;
    additional_options: { 
    additional_option_name: string;
    required_additional_option: Cafe24Enum;
    additional_option_text_length: number;
    }[];
    use_attached_file_option: Cafe24Enum;
    attached_file_option: { 
    option_name: string;
    required: Cafe24Enum;
    size_limit: number;
    };
    };
  }
  export interface CreateProductOptionsInput {
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
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    has_option?: any;
    /**
      * @description
      * 옵션 구성방식
      * 
      * 옵션을 사용할 경우, 옵션의 유형 입력
      * 
      * ● 조합형 : 옵션명을 기준으로 옵션값을 조합할 수 있음
      * ● 상품 연동형 : 옵션표시방식은 조합형과 유사하지만 필수옵션과 선택옵션을 선택할 수 있음. 옵션의 조합을 제한 없이 생성할 수 있음.
      * ● 독립 선택형 : 독립적인 조건 여러개를 각각 선택할 수 있는 옵션으로 옵션 값이 조합되지 않고 각각의 품목으로 생성됨.
      * 
      * T : 조합형
      * E : 연동형
      * F : 독립형
      * 
      * 
      */ 
    option_type?: any;
    /**
      * @description
      * 옵션 표시방식
      * 
      * 조합형 옵션을 사용할 경우, 조합형 옵션의 유형 입력
      * 
      * * 조합 일체선택형 : 하나의 셀렉스박스(버튼 이나 라디오버튼)에 모든 옵션이 조합되어 표시됨
      * * 조합 분리선택형 : 옵션을 각각의 셀렉스박스(버튼 이나 라디오버튼)로 선택할 수 있으며 옵션명을 기준으로 옵션값을 조합할 수 있음
      * 
      * 독립형이나 상품 연동형 옵션을 사용하고 있을 경우 S(분리형)로 입력됨.
      * 
      * S : 조합 분리선택형
      * C : 조합 일체선택형
      * 
      * 
      */ 
    option_list_type?: any;
    /**
      * @description
      * 옵션
      * 
      * 
      */ 
    options?: { 
    /**
      * @description
      * 옵션명
      * 
      * 
      */ 
    option_name: any;
    option_value?: any[];
    /**
      * @description
      * 옵션 표시방식
      * S : 셀렉트박스
      * P : 미리보기
      * B : 텍스트버튼
      * R : 라디오버튼
      * @default S
      * 
      * 
      */ 
    option_display_type?: any;
    };
    /**
      * @description
      * 옵션별로 한 개씩 선택 (독립형 옵션)
      * 
      * 독립형 옵션을 사용할 경우, 하나의 옵션을 여러개 중복하여 선택할 수 없고 한개씩만 선택 가능함.
      * 
      * T : 사용함
      * F : 사용안함 독립형에만 존재 체크시 옵션별로 한개씩 선택 값 처리
      * 
      * 
      */ 
    select_one_by_option?: any;
    /**
      * @description
      * 옵션세트 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    option_preset_code?: any;
    /**
      * @description
      * 연동형 옵션 세트명
      * 
      * 상품연동형 옵션을 사용할 경우, 옵션 세트의 이름 입력
      * 
      * 
      */ 
    option_preset_name?: any;
    /**
      * @description
      * 추가입력 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_additional_option?: any;
    /**
      * @description
      * 추가입력 옵션
      * 
      * 
      */ 
    additional_options?: { 
    /**
      * @description
      * 추가입력옵션명
      * 
      * 
      */ 
    additional_option_name: any;
    /**
      * @description
      * 추가입력옵션 길이제한
      * 1~30
      * 50
      * 100
      * 200
      * 
      * 
      */ 
    additional_option_text_length: any;
    /**
      * @description
      * 추가입력옵션 필수 여부
      * T : 필수
      * F : 선택
      * @default T
      * 
      * 
      */ 
    required_additional_option: any;
    };
    /**
      * @description
      * 파일 첨부 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_attached_file_option?: any;
    /**
      * @description
      * 파일 첨부 옵션
      * 
      * 
      */ 
    attached_file_option?: any;
  }

  export interface CreateProductOptionsOutput {
    option: { 
    shop_no: number;
    product_no: number;
    has_option: Cafe24Enum;
    option_type: Cafe24Enum;
    option_list_type: Cafe24Enum;
    option_preset_code: string;
    options: { 
    option_code: string;
    option_name: string;
    option_value: { 
    option_image_file: string;
    option_link_image: string;
    option_color: Cafe24Datetime;
    option_text: string;
    value_no: any;
    additional_amount: any;
    }[];
    required_option: Cafe24Enum;
    option_display_type: Cafe24Enum;
    }[];
    select_one_by_option: Cafe24Enum;
    option_preset_name: string;
    use_additional_option: Cafe24Enum;
    additional_options: { 
    additional_option_name: string;
    required_additional_option: Cafe24Enum;
    additional_option_text_length: number;
    }[];
    use_attached_file_option: Cafe24Enum;
    attached_file_option: { 
    option_name: string;
    required: Cafe24Enum;
    size_limit: number;
    };
    };
  }
  export interface UpdateProductOptionsInput {
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
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 옵션 표시방식
      * 
      * 조합형 옵션을 사용할 경우, 조합형 옵션의 유형 입력
      * 
      * * 조합 일체선택형 : 하나의 셀렉스박스(버튼 이나 라디오버튼)에 모든 옵션이 조합되어 표시됨
      * * 조합 분리선택형 : 옵션을 각각의 셀렉스박스(버튼 이나 라디오버튼)로 선택할 수 있으며 옵션명을 기준으로 옵션값을 조합할 수 있음
      * 
      * 독립형이나 상품 연동형 옵션을 사용하고 있을 경우 S(분리형)로 입력됨.
      * 
      * S : 조합 분리선택형
      * C : 조합 일체선택형
      * 
      * 
      */ 
    option_list_type?: any;
    /**
      * @description
      * 옵션세트 코드
      * 
      * 상품연동형 옵션을 사용할 경우, 옵션 세트 코드 입력
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    option_preset_code?: any;
    /**
      * @description
      * 옵션
      * 
      * 
      */ 
    options?: { 
    /**
      * @description
      * 옵션명
      * 
      * 
      */ 
    option_name: any;
    option_value?: any[];
    /**
      * @description
      * 옵션 표시방식
      * S : 셀렉트박스
      * P : 미리보기
      * B : 텍스트버튼
      * R : 라디오버튼
      * @default S
      * 
      * 
      */ 
    option_display_type?: any;
    };
    /**
      * @description
      * 수정되기전 옵션값
      * 
      * 
      */ 
    original_options?: { 
    /**
      * @description
      * 옵션명
      * 
      * 
      */ 
    option_name: any;
    option_value?: any[];
    };
    /**
      * @description
      * 옵션별로 한 개씩 선택 (독립형 옵션)
      * 
      * 독립형 옵션을 사용할 경우, 하나의 옵션을 여러개 중복하여 선택할 수 없고 한개씩만 선택 가능함.
      * 
      * T : 사용함
      * F : 사용안함 독립형에만 존재 체크시 옵션별로 한개씩 선택 값 처리
      * 
      * 
      */ 
    select_one_by_option?: any;
    /**
      * @description
      * 연동형 옵션 세트명
      * 
      * 상품연동형 옵션을 사용할 경우, 옵션 세트의 이름 입력
      * 
      * 
      */ 
    option_preset_name?: any;
    /**
      * @description
      * 추가입력 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_additional_option?: any;
    /**
      * @description
      * 추가입력 옵션
      * 
      * 
      */ 
    additional_options?: { 
    /**
      * @description
      * 추가입력옵션명
      * 
      * 
      */ 
    additional_option_name: any;
    /**
      * @description
      * 추가입력옵션 길이제한
      * 1~30
      * 50
      * 100
      * 200
      * 
      * 
      */ 
    additional_option_text_length: any;
    /**
      * @description
      * 추가입력옵션 필수 여부
      * T : 필수
      * F : 선택
      * @default T
      * 
      * 
      */ 
    required_additional_option: any;
    };
    /**
      * @description
      * 파일 첨부 옵션 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_attached_file_option?: any;
    /**
      * @description
      * 파일 첨부 옵션
      * 
      * 
      */ 
    attached_file_option?: any;
  }

  export interface UpdateProductOptionsOutput {
    option: { 
    shop_no: number;
    product_no: number;
    has_option: Cafe24Enum;
    option_type: Cafe24Enum;
    option_list_type: Cafe24Enum;
    option_preset_code: string;
    options: { 
    option_code: string;
    option_name: string;
    option_value: { 
    option_image_file: string;
    option_link_image: string;
    option_color: Cafe24Datetime;
    option_text: string;
    value_no: any;
    additional_amount: any;
    }[];
    required_option: Cafe24Enum;
    option_display_type: Cafe24Enum;
    }[];
    use_additional_option: Cafe24Enum;
    additional_options: { 
    additional_option_name: string;
    required_additional_option: Cafe24Enum;
    additional_option_text_length: number;
    }[];
    use_attached_file_option: Cafe24Enum;
    attached_file_option: { 
    option_name: string;
    required: Cafe24Enum;
    size_limit: number;
    };
    };
  }
  export interface DeleteAProductOptionInput {
    /**
      * @description
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface DeleteAProductOptionOutput {
    option: { 
    product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 옵션을 목록으로 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-options
     *
     * @example 응답 예시
     * ```json
     * {
     *     "option": {
     *         "shop_no": 1,
     *         "product_no": 7,
     *         "has_option": "T",
     *         "option_type": "E",
     *         "option_list_type": "S",
     *         "option_preset_code": "S000000A",
     *         "options": [
     *             {
     *                 "option_code": "O000000A",
     *                 "option_name": "Color",
     *                 "option_value": [
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_831549.gif",
     *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_423399.png",
     *                         "option_color": "#000000",
     *                         "option_text": "Black",
     *                         "value_no": null,
     *                         "additional_amount": "1000.00"
     *                     },
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_831549.gif",
     *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_436875.png",
     *                         "option_color": "#007543",
     *                         "option_text": "Red",
     *                         "value_no": null,
     *                         "additional_amount": "1000.00"
     *                     }
     *                 ],
     *                 "required_option": "T",
     *                 "option_display_type": "S"
     *             },
     *             {
     *                 "option_code": "O000000B",
     *                 "option_name": "Size",
     *                 "option_value": [
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
     *                         "option_link_image": "",
     *                         "option_color": "#000000",
     *                         "option_text": "Small",
     *                         "value_no": null,
     *                         "additional_amount": "0.00"
     *                     },
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
     *                         "option_link_image": "",
     *                         "option_color": "#007543",
     *                         "option_text": "Large",
     *                         "value_no": null,
     *                         "additional_amount": "0.00"
     *                     }
     *                 ],
     *                 "required_option": "T",
     *                 "option_display_type": "S"
     *             }
     *         ],
     *         "select_one_by_option": "F",
     *         "option_preset_name": "",
     *         "use_additional_option": "T",
     *         "additional_options": [
     *             {
     *                 "additional_option_name": "Pattern",
     *                 "required_additional_option": "T",
     *                 "additional_option_text_length": 20
     *             },
     *             {
     *                 "additional_option_name": "Custom Option",
     *                 "required_additional_option": "F",
     *                 "additional_option_text_length": 10
     *             }
     *         ],
     *         "use_attached_file_option": "T",
     *         "attached_file_option": {
     *             "option_name": "Pattern Images",
     *             "required": "T",
     *             "size_limit": 3
     *         }
     *     }
     * }
     * ```
     */
    retrieveAListOfProductOptions(
      input: RetrieveAListOfProductOptionsInput,
      options?: AdminRequestOptions<RetrieveAListOfProductOptionsOutput['option']>,
    ): Promise<AxiosResponse<RetrieveAListOfProductOptionsOutput>>;
    /**
     * @description
     * 상품의 옵션을 생성하여 등록할 수 있습니다.
     * 옵션을 등록하면 품목은 자동으로 생성됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-product-options
     *
     * @example 응답 예시
     * ```json
     * {
     *     "option": {
     *         "shop_no": 1,
     *         "product_no": 24,
     *         "has_option": "T",
     *         "option_type": "T",
     *         "option_list_type": "S",
     *         "option_preset_code": "",
     *         "options": [
     *             {
     *                 "option_code": "",
     *                 "option_name": "Color",
     *                 "option_value": [
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201901/1b2fb6499d99b37581c79e10ad0b4d06.jpg",
     *                         "option_link_image": "",
     *                         "option_color": "#000000",
     *                         "option_text": "Black",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     },
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201901/7c5ge8616dc9b5j281c39dug740cjd28.jpg",
     *                         "option_link_image": "",
     *                         "option_color": "#007543",
     *                         "option_text": "Red",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     }
     *                 ],
     *                 "required_option": "T",
     *                 "option_display_type": "S"
     *             }
     *         ],
     *         "select_one_by_option": "F",
     *         "option_preset_name": "",
     *         "use_additional_option": "T",
     *         "additional_options": [
     *             {
     *                 "additional_option_name": "Pattern",
     *                 "required_additional_option": "T",
     *                 "additional_option_text_length": 20
     *             },
     *             {
     *                 "additional_option_name": "Custom Option",
     *                 "required_additional_option": "F",
     *                 "additional_option_text_length": 10
     *             }
     *         ],
     *         "use_attached_file_option": "T",
     *         "attached_file_option": {
     *             "option_name": "Pattern Images",
     *             "required": "T",
     *             "size_limit": 3
     *         }
     *     }
     * }
     * ```
     */
    createProductOptions(
      input: CreateProductOptionsInput,
      options?: AdminRequestOptions<CreateProductOptionsOutput['option']>,
    ): Promise<AxiosResponse<CreateProductOptionsOutput>>;
    /**
     * @description
     * 상품의 옵션을 수정할 수 있습니다.
     * 옵션명과 옵션값, 추가입력 옵션과 파일첨부 옵션의 수정만 가능하며, 옵션 항목을 추가하거나 삭제할 수는 없습니다.
     * 또한 생성되어 있는 품목은 초기화하지 않습니다.
     * 옵션을 추가하거나 삭제하고 싶을 경우에는 옵션 삭제 API(Delete a products option)로 삭제하신 후, 다시 등록하시면 됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-options
     *
     * @example 응답 예시
     * ```json
     * {
     *     "option": {
     *         "shop_no": 1,
     *         "product_no": 24,
     *         "has_option": "T",
     *         "option_type": "T",
     *         "option_list_type": "S",
     *         "option_preset_code": "",
     *         "options": [
     *             {
     *                 "option_code": "",
     *                 "option_name": "Color",
     *                 "option_value": [
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201901/1b2fb6499d99b37581c79e10ad0b4d06.jpg",
     *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_423399.png",
     *                         "option_color": "#000000",
     *                         "option_text": "Black",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     },
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201901/7c5ge8616dc9b5j281c39dug740cjd28.jpg",
     *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_436875.png",
     *                         "option_color": "#007543",
     *                         "option_text": "Red",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     }
     *                 ],
     *                 "required_option": "T",
     *                 "option_display_type": "P"
     *             },
     *             {
     *                 "option_code": "",
     *                 "option_name": "Size",
     *                 "option_value": [
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
     *                         "option_link_image": "",
     *                         "option_color": "#000000",
     *                         "option_text": "Small",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     },
     *                     {
     *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
     *                         "option_link_image": "",
     *                         "option_color": "#007543",
     *                         "option_text": "Large",
     *                         "value_no": null,
     *                         "additional_amount": null
     *                     }
     *                 ],
     *                 "required_option": "T",
     *                 "option_display_type": "S"
     *             }
     *         ],
     *         "use_additional_option": "T",
     *         "additional_options": [
     *             {
     *                 "additional_option_name": "Pattern",
     *                 "required_additional_option": "T",
     *                 "additional_option_text_length": 20
     *             },
     *             {
     *                 "additional_option_name": "Custom Option",
     *                 "required_additional_option": "F",
     *                 "additional_option_text_length": 10
     *             }
     *         ],
     *         "use_attached_file_option": "T",
     *         "attached_file_option": {
     *             "option_name": "Pattern Images",
     *             "required": "T",
     *             "size_limit": 3
     *         }
     *     }
     * }
     * ```
     */
    updateProductOptions(
      input: UpdateProductOptionsInput,
      options?: AdminRequestOptions<UpdateProductOptionsOutput['option']>,
    ): Promise<AxiosResponse<UpdateProductOptionsOutput>>;
    /**
     * @description
     * 상품의 옵션을 삭제할 수 있습니다.
     * 옵션을 삭제하면 옵션 기능이 &#39;사용안함&#39; 상태가 되기 때문에 기존에 생성되어 있던 품목도 함께 삭제되므로 주의가 필요합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-option
     *
     * @example 응답 예시
     * ```json
     * {
     *     "option": {
     *         "product_no": 24
     *     }
     * }
     * ```
     */
    deleteAProductOption(
      input: DeleteAProductOptionInput,
      options?: AdminRequestOptions<DeleteAProductOptionOutput['option']>,
    ): Promise<AxiosResponse<DeleteAProductOptionOutput>>;
  }
}
