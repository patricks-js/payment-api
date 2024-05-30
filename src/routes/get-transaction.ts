import { transactionRepository } from "@/repositories/transaction-repository";
import Elysia, { t } from "elysia";

export const getTransaction = new Elysia().get(
  "/transactions/:id",
  async ({ params: { id } }) => {
    return transactionRepository.findById(id);
  },
  {
    tags: ["transaction"],
    params: t.Object({
      id: t.String({ format: "uuid" })
    })
  }
);
