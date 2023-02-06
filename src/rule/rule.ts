import { Payment } from "../payment/payment";

export type RuleTest = (date: Date) => boolean;

export class Rule {
  constructor(public payment: Payment, private test: RuleTest) {}

  isPaymentDay(date: Date): boolean {
    return this.test(date);
  }
}
