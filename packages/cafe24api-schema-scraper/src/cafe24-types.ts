import dayjs from './utils/dayjs';

/**
 * @description
 * Cafe24 API에서 사용하는 boolean 타입으로, T는 true, F는 false 입니다.
 *
 */
export type Cafe24Boolean = 'T' | 'F';

export const isCafe24Boolean = (value: unknown): value is Cafe24Boolean =>
  ['T', 'F'].includes(value as string);

/**
 * @description
 * Cafe24 API에서 사용하는 date 타입으로, 아래의 형식을 따릅니다.
 *
 * YYYY-MM-DD
 *
 * @example
 * 2021-01-01
 */
export type Cafe24Date = string;

export const isCafe24Date = (value: unknown): value is Cafe24Date =>
  dayjs(value as string, 'YYYY-MM-DD', true).isValid();

/**
 * @description
 * Cafe24 API에서 사용하는 datetime 타입으로, ISO 8601 형식을 따르는 문자열입니다.
 *
 * @example
 * 2021-01-01T00:00:00+09:00
 */
export type Cafe24Datetime = string;

export const isCafe24Datetime = (value: unknown): value is Cafe24Datetime =>
  dayjs(value as string).isValid();

/**
 * @description
 * Cafe24 API에서 사용하는 enum 타입으로, 대문자 1글자로 이루어진 문자열입니다.
 */
export type Cafe24Enum = string;

export const isCafe24Enum = (value: unknown): value is Cafe24Enum =>
  typeof value === 'string' &&
  value.length === 1 &&
  value === value.toUpperCase();
