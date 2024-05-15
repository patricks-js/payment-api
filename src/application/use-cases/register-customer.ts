import { randomUUID } from "node:crypto";
import type { CustomerType } from "@/domain/entities/customer-type";
import type { UseCase } from "@/domain/protocols/usecase";
import { password } from "bun";
import type { ICustomerRepository } from "../repositories/customer-repository";

export class RegisterCustomer
  implements UseCase<RegisterCustomer.Params, RegisterCustomer.Result>
{
  constructor(private readonly repository: ICustomerRepository) {}

  async exec(input: RegisterCustomer.Params): Promise<RegisterCustomer.Result> {
    const { email, password: pass } = input;

    const userExists = await this.repository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists!");
    }

    const id = randomUUID();
    input.password = await password.hash(pass);

    const { customerId } = await this.repository.create({
      ...input,
      id
    });

    return customerId;
  }
}

export namespace RegisterCustomer {
  export type Params = {
    fullName: string;
    document: string;
    email: string;
    password: string;
    type: CustomerType;
  };

  export type Result = string;
}
