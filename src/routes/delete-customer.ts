import { customerRepository } from "@/repositories/customer-repository";
import Elysia, { t } from "elysia";

export const deleteCustomer = new Elysia().delete(
  "/customers/:id",
  async ({ params: { id } }) => {
    await customerRepository.delete(id);

    return {
      message: "ok"
    };
  },
  {
    tags: ["customer"],
    params: t.Object({
      id: t.String({ format: "uuid" })
    })
  }
);
