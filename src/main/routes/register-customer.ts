import Elysia, { t } from "elysia";
import { makeRegisterCustomerController } from "../factories/make-register-customer";

export const registerCustomer = new Elysia().post(
  "/customers",
  ({ body }) => {
    const controller = makeRegisterCustomerController();

    return controller.exec(body);
  },
  {
    tags: ["customer"],
    body: t.Object({
      fullName: t.String(),
      password: t.String(),
      document: t.String(),
      email: t.String({ format: "email" })
    }),
    response: {
      201: t.Object({
        customerId: t.String()
      })
    }
  }
);
