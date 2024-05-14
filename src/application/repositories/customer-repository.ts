import type { Customer } from "@/domain/entities/customer";

export type CustomerInput = Omit<Customer, "balance">;

export type CustomerOutput = {
  customerId: string;
};

export interface ICustomerRepository {
  findByEmail: (email: string) => Promise<Customer>;
  create: (input: CustomerInput) => Promise<CustomerOutput>;
}
