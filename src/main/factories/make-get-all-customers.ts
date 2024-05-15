import { GetAllCustomers } from "@/application/use-cases/get-all-customers";
import { GetAllCustomersController } from "@/http/controllers/get-all-customers";
import { CustomerRepository } from "@/infra/database/repositories/customer-repository";

export function makeGetAllCustomersController() {
  const repository = new CustomerRepository();
  const useCase = new GetAllCustomers(repository);
  return new GetAllCustomersController(useCase);
}
