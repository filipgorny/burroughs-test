import { Payment } from "./payment";

export class BasicPayment extends Payment {
  type = "basic";

  constructor() {
    super();
  }
}
