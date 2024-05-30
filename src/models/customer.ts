export enum CustomerType {
  Common = "COMMON",
  Merchant = "MERCHANT"
}

export type Customer = {
  id: string;
  name: string;
  email: string;
  document: string;
  password: string;
  balance: number;
  type: CustomerType;
};
