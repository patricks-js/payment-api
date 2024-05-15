import Elysia, { t } from "elysia";
import { makeGetAllCustomersController } from "../factories/make-get-all-customers";

export const getAllCustomers = new Elysia().get(
  "/customers",
  () => {
    const controller = makeGetAllCustomersController();

    return controller.exec();
  },
  {
    tags: ["customer"]
  }
);
