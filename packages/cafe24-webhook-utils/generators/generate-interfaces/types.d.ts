import { WebhookInfo as Cafe24WebhookInfo } from "cafe24-webhook-schema-generator"

export type WebhookInfo = 
  | Cafe24WebhookInfo 
  | (Omit<Cafe24WebhookInfo, 'properties'> & { alias: {
      type: string;
      importFrom: string;
    } })
