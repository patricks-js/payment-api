import { randomUUID } from "node:crypto";
import type { UseCase } from "@/domain/protocols/usecase";
import { password } from "bun";
import type {
  CustomerInput,
  CustomerOutput,
  ICustomerRepository
} from "../repositories/customer-repository";

export class RegisterCustomer
  implements UseCase<CustomerInput, CustomerOutput>
{
  readonly #repository: ICustomerRepository;

  constructor(repository: ICustomerRepository) {
    this.#repository = repository;
  }

  async exec(input: CustomerInput): Promise<CustomerOutput> {
    const { email, password: pass } = input;

    const userExists = await this.#repository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists!");
    }

    input.id = randomUUID();
    input.password = await password.hash(pass);

    await this.#repository.create(input);

    return {
      customerId: input.id
    };
  }
}
