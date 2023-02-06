import { Rule } from "src/rule/rule";
import { PayDay } from "./pay-day";

export class Calendar {
  private rules: Rule[];

  constructor(...rules: Rule[]) {
    this.rules = rules;
  }

  public getPayDays(startDate: Date, endDate: Date): PayDay[] {
    const payDays = [];
    const oneDay = 60 * 60 * 24 * 1000;

    for (
      let date = startDate;
      date <= endDate;
      date.setTime(date.getTime() + oneDay)
    ) {
      for (const rule of this.rules) {
        if (rule.isPaymentDay(date)) {
          const dateClone = new Date(date);
          payDays.push(new PayDay(dateClone, rule.payment));
        }
      }
    }

    return payDays;
  }
}
