import type { RegisterBalance } from "@/application/use-cases/register-balance";
import type { Controller } from "../protocols/controller";

export class RegisterBalanceController
  implements Controller<{ amount: number; customerId: string }, void>
{
  constructor(private readonly useCase: RegisterBalance) {}

  async exec(input: { amount: number; customerId: string }): Promise<void> {
    await this.useCase.exec(input);
  }
}
