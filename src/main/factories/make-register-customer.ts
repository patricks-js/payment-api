import { RegisterCustomer } from "@/application/use-cases/register-customer";
import { RegisterUserController } from "@/http/controllers/register-customer";
import { CustomerRepository } from "@/infra/database/repositories/customer-repository";

export function makeRegisterCustomerController() {
  const repository = new CustomerRepository();
  const useCase = new RegisterCustomer(repository);
  return new RegisterUserController(useCase);
}
