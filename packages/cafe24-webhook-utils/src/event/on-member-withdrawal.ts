import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';

/**
 * @eventId 90147
 *
 * @description
 * 쇼핑몰에 회원이 탈퇴한 경우
 *
 * Required permissions:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 */
export interface OnMemberWithdrawal {}
