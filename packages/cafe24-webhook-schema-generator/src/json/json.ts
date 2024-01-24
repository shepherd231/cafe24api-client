import JSON5 from 'json5';

const parseJSONOrNull = (str: string) => {
  try {
    return JSON5.parse(str);
  } catch (error) {
    return null;
  }
};

const range = (start: number, end?: number) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return Array.from({ length: end - start }, (_, i) => i + start);
};

const appendPotentiallyMissingCommas = (str: string) => {
  str = str.replaceAll('"\n', '",\n');
  range(10).forEach((i) => (str = str.replaceAll(`${i}\n`, `${i},\n`)));
  return str;
};

export const tryParseJSON = (str: string) => {
  // If the input is not a string, return null
  if (typeof str !== 'string') return null;

  // Try parse JSON string
  let parsed = parseJSONOrNull(str);
  if (parsed) return parsed;

  // Try potential fixes #1: Add enclosing brackets
  parsed = parseJSONOrNull(str.concat('}'));
  if (parsed) return parsed;

  // Try potential fixes #2: Append potentially missing commas
  parsed = parseJSONOrNull(appendPotentiallyMissingCommas(str));
  if (parsed) return parsed;

  // Return null if failed
  return null;
};
