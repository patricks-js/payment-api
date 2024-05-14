import Elysia, { t } from "elysia";
import { makeRegisterCustomerController } from "../factories/make-register-customer";

export const registerCustomer = new Elysia().post(
  "/users",
  ({ body }) => {
    const controller = makeRegisterCustomerController();

    return controller.exec(body);
  },
  {
    body: t.Object({
      fullName: t.String(),
      password: t.String(),
      document: t.String(),
      email: t.String({ format: "email" })
    })
  }
);
