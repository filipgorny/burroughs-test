import { PayDay } from "src/calendar/pay-day";

export const csvGenerator = (payDays: PayDay[]): string => {
  return payDays
    .map((payDay) => {
      return `${payDay.date.toISOString().split("T")[0]},${
        payDay.payment.type
      }`;
    })
    .join("\r\n");
};
