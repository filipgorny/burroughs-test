export type PaymentType = string;

export abstract class Payment {
  abstract type: PaymentType;
}
