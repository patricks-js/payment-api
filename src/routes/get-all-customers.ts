import { customerRepository } from "@/repositories/customer-repository";
import Elysia, { t } from "elysia";

export const getAllCustomers = new Elysia().get(
  "/customers",
  async () => {
    const customers = await customerRepository.findAll();

    return customers.map((customer) => customer);
  },
  {
    tags: ["customer"]
  }
);
