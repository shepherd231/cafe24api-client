import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../types';
import { OnProductCreated } from './on-product-created';

/**
 * @eventId 90002
 *
 * @description
 * 쇼핑몰 상품이 수정된 경우
 *
 * Required permissions:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 */
export type OnProductUpdated = OnProductCreated;
