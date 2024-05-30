import { randomUUID } from "node:crypto";

import { CustomerType } from "@/models/customer";
import { customerRepository } from "@/repositories/customer-repository";
import { password } from "bun";
import Elysia, { t } from "elysia";

export const registerCustomer = new Elysia().post(
  "/customers",
  async ({ body }) => {
    const { email, password: pass } = body;

    const customerExists = await customerRepository.findByEmail(email);

    if (customerExists) {
      throw new Error("Customer already exists!");
    }

    const id = randomUUID();
    body.password = await password.hash(pass);

    try {
      await customerRepository.create({
        ...body,
        id
      });
    } catch (e) {
      throw new Error("Something is wrong");
    }

    return {
      id
    };
  },
  {
    tags: ["customer"],
    body: t.Object({
      name: t.String(),
      password: t.String(),
      document: t.String(),
      email: t.String({ format: "email" }),
      type: t.Enum(CustomerType)
    }),
    response: {
      201: t.Object({
        id: t.String()
      })
    }
  }
);
