import { Payment } from "./../payment/payment";

export class PayDay {
  constructor(public date: Date, public payment: Payment) {}
}
