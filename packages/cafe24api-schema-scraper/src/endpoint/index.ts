import { pipe } from 'fp-ts/function';
import { some, none, match } from 'fp-ts/Option';
import { MethodInfo, getMethodInfo } from '../method';
import { SchemaInfo, getSchemaInfo } from '../schema';
import { getInnerText } from '../utils/attribute';
import { EndpointSections } from './sections';

export interface EndpointInfo {
  /**
   * @description
   * Endpoint id.
   * This id is used as an anchor to specific endpoint in Cafe24 API documentation
   */
  id: string;
  /**
   * @description
   * Name of the endpoint.
   * Corresponds to first level items in TOC.
   */
  name: string;
  /**
   * @description
   * Description of the endpoint.
   */
  description?: string;
  /**
   * @description
   * Schema of the entity the endpoint is related to.
   */
  schema: SchemaInfo;
  /**
   * @description
   * Available methods for the endpoint.
   */
  methods: MethodInfo[];
}

/**
 * @description
 * Get endpoint info from endpoint sections.
 *
 * Endpoint sections refers to {@link EndpointSections}.
 */
export const getEndpointInfo = (
  endpointSections: EndpointSections,
): EndpointInfo => {
  const [titleSection, schemaSection, ...methodSections] = endpointSections;

  const [id, name] = pipe(
    titleSection.querySelector('.description > h2') as HTMLHeadingElement,
    (element) => [element.id, element.innerText],
  );

  const description: string | null = pipe(
    titleSection.querySelector('.description > p') as HTMLParagraphElement,
    (element) => (element ? some(element) : none),
    match(
      () => null,
      (element) => getInnerText(element),
    ),
  );

  const schema = getSchemaInfo(schemaSection);

  const methods = methodSections.map(getMethodInfo);

  return {
    id,
    name,
    description,
    schema,
    methods,
  };
};
