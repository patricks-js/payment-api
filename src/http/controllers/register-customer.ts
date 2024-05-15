import type { RegisterCustomer } from "@/application/use-cases/register-customer";
import { CustomerType } from "@/domain/entities/customer-type";
import type {
  CustomerRequestDTO,
  CustomerResponseDTO
} from "../dtos/register-customer-dto";
import type { Controller } from "../protocols/controller";

export class RegisterUserController
  implements Controller<CustomerRequestDTO, CustomerResponseDTO>
{
  constructor(private readonly useCase: RegisterCustomer) {}

  async exec(input: CustomerRequestDTO): Promise<CustomerResponseDTO> {
    const customerId = await this.useCase.exec({
      ...input,
      type: CustomerType.Common
    });

    return {
      customerId
    };
  }
}
