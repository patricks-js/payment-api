import type { GetAllCustomers } from "@/application/use-cases/get-all-customers";
import type { CustomerResponseDTO } from "../dtos/get-all-customers-dto";
import type { Controller } from "../protocols/controller";

export class GetAllCustomersController
  implements Controller<void, CustomerResponseDTO>
{
  constructor(private readonly useCase: GetAllCustomers) {}

  async exec(): Promise<CustomerResponseDTO> {
    const response = await this.useCase.exec();

    return response.map((customer) => customer);
  }
}
