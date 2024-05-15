import { RegisterBalance } from "@/application/use-cases/register-balance";
import { RegisterBalanceController } from "@/http/controllers/register-balance";
import { CustomerRepository } from "@/infra/database/repositories/customer-repository";

export function makeRegisterBalance() {
  const repository = new CustomerRepository();
  const useCase = new RegisterBalance(repository);
  return new RegisterBalanceController(useCase);
}
