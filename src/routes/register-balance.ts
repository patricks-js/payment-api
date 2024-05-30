import { customerRepository } from "@/repositories/customer-repository";
import Elysia, { t } from "elysia";

export const registerBalance = new Elysia().patch(
  "/customers/:id/balance",
  async ({ body, params: { id } }) => {
    const customer = customerRepository.findById(id);

    if (!customer) throw new Error("Customer not found.");

    try {
      await customerRepository.updateBalance(body.amount, id);
    } catch (e) {
      console.error("Something is wrong.", e);
    }

    return {
      message: "ok"
    };
  },
  {
    tags: ["customer"],
    params: t.Object({
      id: t.String({ format: "uuid" })
    }),
    body: t.Object({ amount: t.Numeric() })
  }
);
