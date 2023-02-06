import { Payment } from "./payment";

export class PremiumPayment extends Payment {
  type = "premium";

  constructor() {
    super();
  }
}
