import type { Balance } from "./balance";
import type { CustomerType } from "./customer-type";

export interface Customer {
  id?: string;
  fullName: string;
  document: string;
  email: string;
  password: string;
  type: CustomerType;
  balance?: Balance;
}
