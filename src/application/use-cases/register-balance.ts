import type { UseCase } from "@/domain/protocols/usecase";
import type { ICustomerRepository } from "../repositories/customer-repository";
export class RegisterBalance implements UseCase<RegisterBalance.Params, void> {
  constructor(private readonly repository: ICustomerRepository) {}

  async exec(input: RegisterBalance.Params): Promise<void> {
    await this.repository.updateBalance(input.amount, input.customerId);
  }
}

export namespace RegisterBalance {
  export type Params = {
    customerId: string;
    amount: number;
  };
}
