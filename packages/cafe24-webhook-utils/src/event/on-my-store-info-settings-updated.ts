import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90121
 *
 * @description
 * 내 쇼핑몰 정보 설정이 수정된 경우
 *
 * Required permissions:
 * - mall.read_store
 * - mall.read_supply
 *
 */
export interface OnMyStoreInfoSettingsUpdated {}
