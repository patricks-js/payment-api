import type { Customer } from "@/domain/entities/customer";

export interface ICustomerRepository {
  findByEmail: (email: string) => Promise<Omit<Customer, "password">>;
  create: (input: Omit<Customer, "balance">) => Promise<{ customerId: string }>;
  findAll: () => Promise<Omit<Customer, "password">[]>;
  updateBalance: (amount: number, customerId: string) => Promise<void>;
}
