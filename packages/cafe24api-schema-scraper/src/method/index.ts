import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { some, none, match } from 'fp-ts/Option';
import { split } from 'fp-ts/string';
import { parseTableEntries } from '../utils/table';
import { RequestInfo, repositionRequestPropertyContents } from './request';
import { getAttributes, getInnerText } from '../utils/attribute';
import { ResponseInfo, parseExampleJSONToProperties } from './response';

type HttpVerb = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface MethodInfo {
  /**
   * @description
   * ID of the method.
   */
  id: string;
  /**
   * @description
   * Name of the method.
   */
  name: string;
  /**
   * @description
   * API endpoint path.
   */
  path: string;
  httpVerb: HttpVerb;
  description: string;
  /**
   * @description
   * Needed permissions to use this method.
   */
  scope: string;
  /**
   * @description
   * Request parameters.
   */
  request: RequestInfo;
  /**
   * @description
   * Response parameters.
   */
  response: ResponseInfo;
}

/**
 * @description
 * Get method info from method section.
 *
 * In the context of Cafe24 API documentation, method section is a section
 * that can be found with a selector `.page-wrapper > .content > section.endpoint.method`
 * and that contains 2 sub elements:
 * - `.description`
 * - `.code-block`
 */
export const getMethodInfo = (methodSection: HTMLElement): MethodInfo => {
  const [id, name] = pipe(
    methodSection.querySelector('.description > h3') as HTMLHeadingElement,
    getAttributes(['id', 'data-text']),
  );

  const [httpVerb, path] = pipe(
    methodSection.querySelector(
      '.description > .endpoint-desc > p.link',
    ) as HTMLParagraphElement,
    getInnerText,
    split('/'),
    ([httpMethod, ...paths]) =>
      [httpMethod, '/'.concat(paths.join('/'))] as [HttpVerb, string],
  );

  const description = pipe(
    methodSection
      .querySelectorAll('.description > p')
      .values() as Iterable<HTMLParagraphElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
    (texts) => texts.join('\n\n'),
  );

  const scope = pipe(
    methodSection.querySelector(
      // h4.innerText = "기본스펙"
      '.description > h4:nth-of-type(1) + .table-area > table',
    ) as HTMLTableElement,
    parseTableEntries({ omitHeaders: true }),
    (properties) => properties.filter((property) => property.name === 'SCOPE'),
    (properties) => properties.at(0).description,
  );

  const requestProperties = pipe(
    methodSection.querySelector(
      // h4.innerText = "요청사양"
      // NOTE: 요청사양은 존재하지 않을 수 있습니다.
      '.description > h4:nth-of-type(2) + .table-area > table',
    ) as HTMLTableElement | null,
    (element) => (element ? some(element) : none),
    match(
      () => [],
      (table) => parseTableEntries()(table),
    ),
    map(repositionRequestPropertyContents),
  );

  const request: RequestInfo = {
    properties: requestProperties,
  };

  const responseJSONString = pipe(
    methodSection.querySelector(
      '.code-block .code-data.response > pre',
    ) as HTMLPreElement,
    getInnerText,
  );

  const responseProperties = pipe(
    responseJSONString,
    JSON.parse,
    parseExampleJSONToProperties,
  );

  const response: ResponseInfo = {
    properties: responseProperties,
    example: responseJSONString,
  };

  return {
    id,
    name,
    path,
    httpVerb,
    description,
    scope,
    request,
    response,
  };
};
