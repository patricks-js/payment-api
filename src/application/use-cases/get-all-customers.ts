import type { Customer } from "@/domain/entities/customer";
import type { UseCase } from "@/domain/protocols/usecase";
import type { ICustomerRepository } from "../repositories/customer-repository";

export class GetAllCustomers
  implements UseCase<void, Omit<Customer, "password">[]>
{
  constructor(private readonly repository: ICustomerRepository) {}

  async exec(): Promise<Omit<Customer, "password">[]> {
    return this.repository.findAll();
  }
}
