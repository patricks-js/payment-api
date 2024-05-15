import { RegisterBalanceController } from "@/http/controllers/register-balance";
import Elysia, { t } from "elysia";
import { makeRegisterBalance } from "../factories/make-register-balance";

export const registerBalance = new Elysia().patch(
  "/customers/:id/balance",
  ({ body, params: { id } }) => {
    const controller = makeRegisterBalance();

    controller.exec({
      amount: body.amount,
      customerId: id
    });

    return {
      amount: body.amount
    };
  },
  {
    tags: ["customers"],
    params: t.Object({
      id: t.String({ format: "uuid" })
    }),
    body: t.Object({ amount: t.Numeric() })
  }
);
