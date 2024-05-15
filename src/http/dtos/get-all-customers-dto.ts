import type { Customer } from "@/domain/entities/customer";

export type CustomerResponseDTO = Omit<Customer, "password">[];
