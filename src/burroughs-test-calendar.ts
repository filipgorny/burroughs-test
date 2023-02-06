import { Calendar } from "./calendar/calendar";
import { BasicPayment } from "./payment/basic.payment";
import { PremiumPayment } from "./payment/premium.payment";
import { Rule } from "./rule/rule";

const basicPaymentRule = new Rule(new BasicPayment(), (date: Date) => {
  const lastWorkDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  if (lastWorkDay.getDay() == 6) {
    lastWorkDay.setDate(lastWorkDay.getDate() - 2);
  } else if (lastWorkDay.getDay() == 0) {
    lastWorkDay.setDate(lastWorkDay.getDate() - 1);
  }

  return date.getDate() == lastWorkDay.getDate();
});

const premiumPaymentRule = new Rule(new PremiumPayment(), (date: Date) => {
  const premiumDay = new Date(date.getFullYear(), date.getMonth(), 15);

  if (premiumDay.getDay() == 0) {
    premiumDay.setDate(premiumDay.getDate() + 3);
  } else if (premiumDay.getDay() == 6) {
    premiumDay.setDate(premiumDay.getDate() + 4);
  }

  return date.getDate() == premiumDay.getDate();
});

export const burroughsTestCalendar = new Calendar(
  premiumPaymentRule,
  basicPaymentRule
);
