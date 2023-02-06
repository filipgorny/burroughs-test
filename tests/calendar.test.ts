import "assert";
import { PayDay } from "./../src/calendar/pay-day";
import { Calendar } from "./../src/calendar/calendar";
import { PremiumPayment } from "./../src/payment/premium.payment";
import { Rule } from "./../src/rule/rule";

describe("The calendar", () => {
  it("should return valid dates of payment", async () => {
    const weekendPaymentRule = new Rule(new PremiumPayment(), (date: Date) => {
      return date.getDay() == 6 || date.getDay() == 0;
    });

    const calendar = new Calendar(weekendPaymentRule);

    const expectedValues = [
      new PayDay(new Date("2023-01-07"), new PremiumPayment()),
      new PayDay(new Date("2023-01-08"), new PremiumPayment()),
    ];

    const days = calendar.getPayDays(
      new Date("2023-01-02"),
      new Date("2023-01-08")
    );

    expect(days).toEqual(expectedValues);
  });
});
