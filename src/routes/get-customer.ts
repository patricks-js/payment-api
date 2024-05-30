import { customerRepository } from "@/repositories/customer-repository";
import Elysia, { t } from "elysia";

export const getCustomer = new Elysia().get(
  "/customers/:id",
  async ({ params: { id } }) => {
    return customerRepository.findById(id);
  },
  {
    tags: ["customer"],
    params: t.Object({
      id: t.String({ format: "uuid" })
    })
  }
);
